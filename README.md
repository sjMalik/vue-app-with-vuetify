# vuetify-app

## Used Vuetify Version 1.5
https://v15.vuetifyjs.com/en/getting-started/quick-start

* Add the below two line in `.eslintrc.js`
```
rules: {
    "linebreak-style": 0, // Off the linebreak related warning
    'indent': 'off'       // Off the indentetation related warning
}
```
## [ez-fetch](https://www.npmjs.com/package/ez-fetch)
* in fetch dont have proper error handling so we can use ez-fetch instead of this
A fetch wrapper to simplify network requests.

Includes es6-promise, isomorphic-fetch for use in older browsers and for use in a node.js environment
Inspects content-type header to parse response correctly
Throws an error (catch) if the response is not OK
Stringifies JSON and sets content-type header
