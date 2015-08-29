dispatch:url-encode-params
===============

A small Meteor package that rewrites `URL._encodeParams` from Meteor's core `url` package, which the core `http` package uses to encode the `params` object to the query string. This package corrects its handling of objects and arrays.

## Installation

```bash
$ meteor add http dispatch:url-encode-params
```

## Details

Without this package added, this:

```js
HTTP.get('http://foo.bar.com', {
  params: {
    filter: {
      type: 'Foo',
      id_eq: 15,
    },
    array: ['1', 'a', 'dirty[]']
  }
});
```

Will result in the following query string:

```
?filter=%5Bobject+Object%5D&array=1%2Ca%2Cdirty%5B%5D
```

When you add this package, the same call will result in the following query string:

```
?filter[type]=Foo&filter[id_eq]=15&array[0]=1&array[1]=a&array[2]=dirty%5B%5D
```
