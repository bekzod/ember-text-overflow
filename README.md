# ember-text-overflow [![Ember Observer Score](http://emberobserver.com/badges/ember-text-overflow.svg)](http://emberobserver.com/addons/ember-text-overflow) [![npm version](https://badge.fury.io/js/ember-text-overflow.svg)](https://badge.fury.io/js/ember-text-overflow) [![travis status](https://travis-ci.org/bekzod/ember-text-overflow.svg)](https://travis-ci.org/bekzod/ember-text-overflow.svg)
==============================================================================
`ember-text-overflow` component that clips overflowing text and shows full-text when mouseover. [DEMO](http://ember-text-overflow.surge.sh/)

Installation
------------------------------------------------------------------------------

```
ember install ember install ember-text-overflow
```

## Usage

```handlebars
  {{#text-overflow class="small-container"}}
    long long long long long long long long text
  {{/text-overflow}}
```

## Limitations
Works with inline text, wrapping container should have `overflow: visible`

