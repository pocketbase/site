import { writable } from "svelte/store";

var storage = typeof window !== 'undefined' ? window.localStorage : null;

const CODE_PREFERENCE_KEY = "pb_code_preference";

export const extendGroup = "extend"

export const codePreferences = writable(getStoragePreferences());

export function setCodePreference(val, group = "") {
    codePreferences.update((preferences) => {
        preferences[group] = val;
        return preferences;
    });
}

codePreferences.subscribe((value) => {
    updateStoragePreference(value)
});

function getStoragePreferences() {
    try {
        const parsed = JSON.parse(storage?.getItem(CODE_PREFERENCE_KEY))

        if (typeof parsed == "object" && parsed !== null) {
            return parsed
        }
    } catch(_) {}

    return {};
}

function updateStoragePreference(newValue) {
    storage?.setItem(CODE_PREFERENCE_KEY, JSON.stringify(newValue));
}
