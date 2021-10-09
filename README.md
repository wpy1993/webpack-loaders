## motivation

- get specfial files that webpack build related

## Usage
1. add below code to `module.rules` in webpack config file

```javascript
{
  test: /\.*/,
  exclude: root('node_modules'),
  use: 'webpack-wplay-loaders',
}
```

2. may should use `npm run build`

3. then you can get file `list.txt`, where list all related files when project product