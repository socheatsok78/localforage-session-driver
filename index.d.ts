import 'localforage-types'

declare module "localforage" {
    export interface LocalForageExtra {
        SESSIONSTORAGE: string;
    }
}
