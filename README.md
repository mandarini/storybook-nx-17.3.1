# Storybook on Nx 17.3.1

This project was generated using [Nx](https://nx.dev).

## Setup

Run `yarn` to install the dependencies.

## Serve Storybook

Angular App 1:

```bash
nx storybook ngapp1
```

Angular App 2:

```bash
nx storybook ngapp2
```

Angular App 3:

```bash
nx storybook ngapp3
```

React App 1:

```bash
nx storybook rapp1
```

React App 2:

```bash
nx storybook rapp2
```

## Build Storybook - for all apps

```bash
nx run-many --target=build-storybook
```

### Conclusion

All works as expected.
