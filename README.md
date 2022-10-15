# localforage-session-driver

A `sessionStorage` driver for `localforage`.

## Installation

```sh
yarn add localforage-session-driver
```

## Usage

```js
import localforage from "localforage"
import 'localforage-session-driver'

localforage.config({
    driver      : localforage.SESSIONSTORAGE
});
```

## License

Licensed under [Apache-2.0 license](LICENSE).
