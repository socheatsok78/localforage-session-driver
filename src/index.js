import localforage from 'localforage'
import sessionStorageWrapper from './sessionstorage'

// Add driver to localforage
localforage.SESSIONSTORAGE = sessionStorageWrapper._driver

// Register the SessionStorage wrapper to LocalForage instance
let installed = false
if (!installed) {
    localforage.defineDriver(sessionStorageWrapper);
    installed = true
}
