# METEOSAPI

nodejs wrapper over the Aemet public API


## Getting started


### Install dependences

    yarn install

### Get an API key
Go to the [Aemet OpenData Website](https://opendata.aemet.es/centrodedescargas/altaUsuario?) and follow the instructions to get an API key.

### Crate a .env file
Since the Aemet doesn´t provide a valid ssl cerfificate nodejs will reject all the requests, to prevent this use `NODE_TLS_REJECT_UNAUTHORIZED=0`.
The env file also will set the **api-key** used in the unit tests.

    NODE_TLS_REJECT_UNAUTHORIZED=0
    METEOSAPI_KEY="<your-api-key>"

### run the tests

    yarn run test


## Usage
Meteosapi only provides one module with a single function `getForecast(id)`

### Initializacion

```javascript
// Require the module
const Meteosapi = require('meteosapi');
// Initialize the module with your api key.
let meteosapi = Meteosapi(key); 
// Execute a sample request for a given province
let proviceKey = 36038;
meteosapi.getForecast(proviceKey).then(console.log);
```

### getForecast(provinceId)
Ask for the weather forecast in a given province, the province code can be obtained from [here](http://www.ine.es/jaxi/menu.do?type=pcaxis&path=/t20/e245/codmun&file=inebase)

#### Example Response

`getForecast` returns a data object with the following fields:

- `name`: Name of the municipe of the predicion
- `province`: Names of the required province.
- `today`: Simplified forecast for the current day
- `tomorrow`: Simplified forecast for the next today
- `next2`: Simplified forecast for the day after tomorrow
- `forecast`: array with the raw forecast values from the Aemet API


A `simplified forecast` has the following fields:

- `value`: The wheater forecast value.
- `description`: User readable weather forecast description.
- `tmp`: The temperature values for the day
    - `min`: The expected min temperature 
    - `max`: The expected max temperature 
    

Example response:

```javascript
{
    name: 'Pontevedra',
    province: 'Pontevedra',
    today: {
        value: '13',
        descripcion: 'Intervalos nubosos',
        tmp: {
            min: 6,
            max: 13
        }
    },
    tomorrow: {
        value: '13',
        descripcion: 'Intervalos nubosos',
        tmp: {
            min: 5,
            max: 16
        }
    },
    next2: {
        value: '25',
        descripcion: 'Muy nuboso con lluvia',
        tmp: {
            min: 7,
            max: 13
        }
    },
    forecast: [forecastArray]
}
````

#### List of meteo values and the meanings
The value field in the simplified forecast can be one of the following, the `n` after the code comes from `night`.


    11 – Despejado
    11n – Despejado noche 12 Poco nuboso
    12n – Poco nuboso noche
    13 – Intervalos nubosos
    13n – Intervalos nubosos noche
    14 – Nuboso
    14n – Nuboso noche
    15 – Muy nuboso
    16n – Muy nuboso
    16 – Cubierto
    16n – Cubierto
    17 – Nubes altas
    17n – Nubes altas noche
    23 – Intervalos nubosos con lluvia
    23n – Intervalos nubosos con lluvia noche
    24 – Nuboso con lluvia
    24n – Nuboso con lluvia noche
    25 – Muy nuboso con lluvia
    25n – Muy nuboso con lluvia
    26 – Cubierto con lluvia
    26n – Cubierto con lluvia
    33 – Intervalos nubosos con nieve
    33n – Intervalos nubosos con nieve noche
    34 – Nuboso con nieve
    34n – Nuboso con nieve noche
    35 – Muy nuboso con nieve
    35n – Muy nuboso con nieve
    36 – Cubierto con nieve
    36n – Cubierto con nieve
    43 – Intervalos nubosos con lluvia escasa
    43n – Intervalos nubosos con lluvia escasa noche
    44 – Nuboso con lluvia escasa
    44n – Nuboso con lluvia escasa noche
    45n – Muy nuboso con lluvia escasa
    46n – Cubierto con lluvia escasa
    51 – Intervalos nubosos con tormenta
    51n – Intervalos nubosos con tormenta noche
    52 – Nuboso con tormenta
    52n – Nuboso con tormenta noche
    53 – Muy nuboso con tormenta
    53n – Muy nuboso con tormenta
    54 – Cubierto con tormenta
    54n – Cubierto con tormenta
    61 – Intervalos nubosos con tormenta y lluvia escasa
    61n – Intervalos nubosos con tormenta y lluvia escasa noche 
    62 Nuboso con tormenta y lluvia escasa
    62n – Nuboso con tormenta y lluvia escasa noche
    63 – Muy nuboso con tormenta y lluvia escasa
    63n – Muy nuboso con tormenta y lluvia escasa 
    64 Cubierto con tormenta y lluvia escasa 
    64n Cubierto con tormenta y lluvia escasa
    71 – Intervalos nubosos con nieve escasa
    71n – Intervalos nubosos con nieve escasa noche 
    72 Nuboso con nieve escasa
    72n – Nuboso con nieve escasa noche
    73 – Muy nuboso con nieve escasa
    73n – Muy nuboso con nieve escasa 
    74 Cubierto con nieve escasa
    74n Cubierto con nieve escasa