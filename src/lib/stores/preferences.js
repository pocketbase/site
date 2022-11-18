import { writable } from "svelte/store";

var storage = typeof window !== 'undefined' ? window.localStorage : null;

const SDK_PREFERENCE_KEY = "pb_sdk_preference";

export const sdk = writable(storage?.getItem(SDK_PREFERENCE_KEY) || "javascript");

sdk.subscribe((value) => {
    storage?.setItem(SDK_PREFERENCE_KEY, value);
});
