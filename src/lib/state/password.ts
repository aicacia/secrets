import * as openpgp from 'openpgp';
import ee3 from 'eventemitter3';
import { derived, get, writable } from 'svelte/store';
import { SHA256, enc } from 'crypto-js';
import { remoteStorage } from '$lib/remoteStorage';

const CHECKED_MS = 1000 * 60 * 60 * 24;

interface IEmitter {
	password(password: string): void;
	cancel(): void;
	error(error: Error): void;
}

const emitter = new ee3.EventEmitter<IEmitter>();

const passwordWritable = writable<string | null>(null);

export const password = derived(passwordWritable, (state) => state);
export const askingForPassword = writable(false);

export function setPassword(password: string) {
	const storedPassword = localStorage.getItem('password');
	const passwordHash = SHA256(password).toString(enc.Hex);

	if (!storedPassword || storedPassword === passwordHash) {
		localStorage.setItem('password', passwordHash);
		localStorage.setItem('last-checked', Date.now().toString());
		passwordWritable.set(passwordHash);
		emitter.emit('password', passwordHash);
	} else {
		emitter.emit('error', new Error("Password doesn't not match"));
	}
}

export function clearPassword() {
	localStorage.removeItem('password');
	passwordWritable.set(null);
}

remoteStorage.on('disconnected', clearPassword);

export function cancelAskingForPassword() {
	emitter.emit('cancel');
	askingForPassword.set(false);
}

export async function waitForPassword() {
	return new Promise<string>((resolve, reject) => {
		const currentPassowrd = get(password);
		if (currentPassowrd) {
			resolve(currentPassowrd);
		} else {
			askingForPassword.set(true);
			emitter.once('password', resolve);
			emitter.once('cancel', () => {
				reject(new Error('Cancelled'));
			});
			emitter.once('error', reject);
		}
	});
}

export async function encryptSecret(secret: string) {
	const password = await waitForPassword();
	const message = await openpgp.createMessage({
		text: secret,
		format: 'utf8'
	});
	const encryptMessage = await openpgp.encrypt({
		passwords: [password],
		message,
		format: 'armored'
	});
	return encryptMessage as string;
}

export async function decryptSecret(encryptedSecret: string) {
	try {
		const password = await waitForPassword();
		const message = await openpgp.readMessage({
			armoredMessage: encryptedSecret
		});
		const decryptMessage = await openpgp.decrypt({
			passwords: [password],
			message
		});
		return decryptMessage.data;
	} catch (e) {
		passwordWritable.set(null);
		throw e;
	}
}

if (typeof window !== 'undefined') {
	const storedPassword = localStorage.getItem('password');
	const lastedChecked = localStorage.getItem('last-checked');
	let canFetch = false;
	if (lastedChecked) {
		const date = new Date(lastedChecked);
		if (date.getTime() + CHECKED_MS < Date.now()) {
			canFetch = false;
			askingForPassword.set(true);
		} else {
			canFetch = true;
		}
	}
	if (canFetch && storedPassword) {
		passwordWritable.set(storedPassword);
	}
}