# Weather App (React)

## Rough Notes

### Layout

```
App
---
- Menu (Swap between 3 locations)
- Main Display (Large Card) -> (Show weather for Today in selected city)
- Next Days (Small Card) -> (Show weather for next 4 days in selected city)
```

### Weather API information

I'm going to use the Open Weather API to pull the real time data. ([Get API Key](https://home.openweathermap.org/api_keys))

Endpoint:
- Please, use the endpoint `api.openweathermap.org` for your API calls
- Example of API call:

```
api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=21ec3247d6836d46f26940a5edfab964
```

Useful links:

- [API documentation](https://openweathermap.org/api) 
- [Current Weather API Docs](https://openweathermap.org/current)
- [Details of your plan](https://openweathermap.org/price) 

Please, note that 16-days daily forecast and History API are not available for Free subscribers

### Icon and Fonts Resources

I will probably go with [Font Awesome - weather icons](https://fontawesome.com/search?q=weather&s=solid%2Cbrands). I need to figure out all the different types of weather given from the Open Weather API and match the displayed icon's accordingly.

### Tasks

1. Setup files system to match layout
2. Build class components to represent static version of app (no-styling)
3. Write out Default state and basic functionality


### Bugs and Fixes

- Struggled to get `.module.less` files working in my react components. This was due to no type definition being mapped to `less` modules. Once I added a type declaration and the appropriate loaders in my `webpack.config.js` file I was good to go.

```typescript
// File: react-app-env.d.ts

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
```
- [Stack Question - Reference to Bug and Solution](https://stackoverflow.com/questions/46501297/typescript-cant-find-module-less)

```javascript
{
  test: lessRegex,
  use: getStyleLoaders(
    {
      importLoaders: 3,
      sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
      modules: true,
    },
    'less-loader'
  ),
  // Don't consider CSS imports dead code even if the
  // containing package claims to have no side effects.
  // Remove this when webpack adds a warning or an error for this.
  // See https://github.com/webpack/webpack/issues/6571
  sideEffects: true,
},
{
  test: lessModuleRegex,
  use: getStyleLoaders({
    importLoaders: 3,
    sourceMap: isEnvProduction
      ? shouldUseSourceMap
      : isEnvDevelopment,
    modules: {
      mode: 'local',
      getLocalIdent: getCSSModuleLocalIdent,
    },
  }),
},
```

