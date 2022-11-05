# truncate-ethereum-address

Easily format an Ethereum address (eg. `"0xab5801a7d398351b8be11c439e05c5b3259aec9b"`) to a truncated version (`"0xab58…ec9b"`).

## Install

```bash
npm install truncate-ethereum-address # or yarn add truncate-ethereum-address
```

## Usage Examples

```ts
// Passing in an `address` only:
truncate('0xF73999E8995E174625881B2204171d05835C8175'); // "0xF739…8175"
// The `nPrefix` and `nSuffix` each default to showing 4 characters (excluding the "0x") if not provided

// Passing in an `address` and `nPrefix`:
truncate('0x2a81d91e19A7B9Fcda8D1aDd9a82986ac875867e', { nPrefix: 1 }); // "0x2…867e"

// Passing in an `address` and `nSuffix`:
truncate('0x8E02932D45A8d116D9E1A8D3799aAB7c804A3c6E', { nSuffix: 10 }); // "0x8E02…7c804A3c6E"

// Passing in an `address`, `nPrefix` and `nSuffix`:
truncate('0xF73999E8995E174625881B2204171d05835C8175', {
  nPrefix: 6,
  nSuffix: 7,
}); // "0xF73999…35C8175"

// Passing in an invalid string which doesn"t match the RegEx:
truncate('888E02932D45A8d116D9E1A8D3799aAB7c804A3c6E'); // "888E02932D45A8d116D9E1A8D3799aAB7c804A3c6E"
// Returns the initial input
```

## Types

```ts
type Params = {
  nPrefix?: number;
  nSuffix?: number;
};

function truncate(address: string, { nPrefix, nSuffix }?: Params): string;
```

## Dev

### Commands

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost with `npm run size`:

```bash
  dist/truncate-ethereum-address.cjs.production.min.js
  Size limit: 10 kB
  Size:       250 B with all dependencies, minified and gzipped

  dist/truncate-ethereum-address.esm.js
  Size limit: 10 kB
  Size:       171 B with all dependencies, minified and gzipped
```
