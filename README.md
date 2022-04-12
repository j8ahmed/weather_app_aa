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


