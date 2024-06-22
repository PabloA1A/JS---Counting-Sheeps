# JS - Counting Sheeps

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

# JS - Counting Sheeps

## Instructions: 

"true" are sheep, "false" are wolves .... How many sheep are there? The function will receive a list of boolean values.

Example function:
function countSheep(list) { }

Requirements:- The following use cases should be tested:

Input:
1) list = [ true, true, true, true, false, false, false, true, true, true, true, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, false, false, false, false, true, true, true, true, true]
2) list = [ false, false, false, false ]

Result:
1) There are 17 sheep in total.
2) OOPS!!! The wolves ate the sheep.

# Files:
## SRC => booleans.js
## SRC => TESTS => booleans.test.js