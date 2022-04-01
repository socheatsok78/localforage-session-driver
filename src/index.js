import localforage from 'localforage'
import sessionStorageWrapper from './sessionstorage'

let installed = false

if (!installed) {
    // Register the SessionStorage wrapper to LocalForage instance
    localforage.defineDriver(sessionStorageWrapper);
    installed = true
}

// Export the SessionStorage wrapper driver
export const SESSIONSTORAGE = sessionStorageWrapper._driver
