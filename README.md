# ember-text-overflow [![Ember Observer Score](http://emberobserver.com/badges/ember-text-overflow.svg)](http://emberobserver.com/addons/ember-text-overflow) [![npm version](https://badge.fury.io/js/ember-text-overflow.svg)](https://badge.fury.io/js/ember-text-overflow) [![travis status](https://travis-ci.org/bekzod/ember-text-overflow.svg)](https://travis-ci.org/bekzod/ember-text-overflow.svg)
`ember-text-overflow` component that clips overflowing text and shows full-text when mouseover. [DEMO](http://ember-text-overflow.surge.sh/)

![demo gif](https://cl.ly/2D313l1y0w45/Screen%20Recording%202017-12-12%20at%2012.06%20PM.gif)

## Installation

```
ember install ember-text-overflow
```

## Usage

```handlebars
  <div class="small-container">
    <TextOverflow>
      long long long long long long long long text
    </TextOverflow>
  </div>
```

```scss
.small-container {
  max-width: 80px;
}
```

## Limitations
Works with inline text, wrapping container should have `overflow: visible`
