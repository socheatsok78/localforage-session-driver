import localforage from 'localforage'
import sessionStorageWrapper from './sessionstorage'

// Export the SessionStorage wrapper driver
export const SESSIONSTORAGE = sessionStorageWrapper._driver

// Add driver to localforage
localforage.SESSIONSTORAGE =SESSIONSTORAGE

// Register the SessionStorage wrapper to LocalForage instance
let installed = false
if (!installed) {
    localforage.defineDriver(sessionStorageWrapper);
    installed = true
}
