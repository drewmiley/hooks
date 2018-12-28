# Hooks

Examples of React Hooks.

## To run

1. `npm install`
1. `npm start`

## Version 0

A simple incrementable counter consisting of value and action button, along with a random number fetcher similarly consisting of value and action button.

## Version 1

Comparison between a simple input text box with button that logs value contained in order to demonstrate a simple use case of the new function `useState`.

## Version 2

Version 0, however the background color of the heading changes when either of the two values changes. Note that the hooks version is one call ahead of the component.

## Version 3

A simple input text box with internal state. The background color of the heading changes when the input changes at all, or if fetchRandom is called.

## Version 4

A simple incrementable counter consisting of value and action button, logs to console when the component/hook mounts/updates.

## Version 5

A simple incrementable counter consisting of value and action button, is overwritten by props value whenever this changes.

## Version 6

A simple incrementable counter consisting of value and action button, along with a random number fetcher similarly consisting of value and action button. The count has purely internal state, and passes its value as a multiplier for use with fetch random number action.

## Version 7

A simple incrementable counter consisting of value and action button, unmounted when props.count > 5.

## Version 8

Async fetch of random user list. Note that the hooks version calls twice, while the component only calls once.

## Version 9

Example use of useReducer incorporated in a internal state +/- counter.
