# ember-text-overflow [![Ember Observer Score](http://emberobserver.com/badges/ember-text-overflow.svg)](http://emberobserver.com/addons/ember-text-overflow) [![npm version](https://badge.fury.io/js/ember-text-overflow.svg)](https://badge.fury.io/js/ember-text-overflow) [![travis status](https://travis-ci.org/bekzod/ember-text-overflow.svg)](https://travis-ci.org/bekzod/ember-text-overflow.svg)

Same as using `text-overflow: ellipsis;` but with preview of full text.

## Installation

* install addon: `ember install ember-text-overflow`
* import styles in apps.scss file: `@import "ember-text-overflow"`

## Usage

```handlebars
  {{#text-overflow class="small-container"}}
    long long long long long long long long text
  {{/text-overflow}}
```

## Limitations
Works with inline text, wrapping container should have `overflow: visible`

