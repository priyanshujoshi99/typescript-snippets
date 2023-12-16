## Navigate to TypeScript in Projects Directory

```shell
cd 9.\ TypeScript\ In\ Projects/
```

## Local Development

```shell
tsc -w
```

## Initial Setup

### Setting up ts

```shell
tsc --init
```

### Setting up node

```shell
npm --init
```

## Implementing the output js for ts in tsconfig.json

```json
{
  "compilerOptions": {
    ...
    "outDir": "./dist",
    ...
  }
}
```
