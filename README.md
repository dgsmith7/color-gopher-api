# color-gopher-api

<img src="./public/color-gopher.png" width="150" height="150">

## Introduction:

Color Gopher API is a REST API that converts colors and generates on-demand palettes. Color Gopher can sniff out the color conversions you need or retireve palettes on request. Users can ask the Color Gopher to convert between RGB, HSV, HSL, CMYK, HEX, and CSS-named-colors. This can be done one at a time, or all at once in a single request. The Color Gopher can also generate palettes based on the input color. Those palettes are: Complement, Split complement, Adjacent, Analogous, Phi (golden angle) triad, Equilateral triad, Phi (golden angle) tetrad, Equlateral tetrad, Monochromatic, Interpolation in 7 steps between two colors. Let Color Gopher GET you the info you need for your next project!

## Getting Started:

This API is available on RapidAPI at color-gopher-api.

## API Reference: Color Gopher API 1.0.0

<hl>
### Endpoint: /

**Method:** GET  
**Description:** Landing page.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;none  
**Responses:**

<code>200-OK</code>

**Response Body:**

<code>"Welcome to the Color Gopher API - Copyright (c) 2023 by David G. Smith"
</code>

<hl>
### Endpoint: /gopher/rgb-to-all

**Method:** GET  
**Description:** Converts an RGB to every other type in this API  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**  
<code>200 - OK</code>

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 0,
        "g": 0,
        "b": 0
      },
      "HSV": {
        "h": 255,
        "s": 0,
        "v": 0
      },
      "HSL": {
        "h": null,
        "s": null,
        "v": null
      },
      "CMYK": {
        "c": 0,
        "m": 0,
        "y": 0,
        "k": 100
      },
      "HEX": "#000000",
      "NAME": "black"
    }
  }
}
```

<hl>
### Endpoint: /gopher/hsv-to-all

**Method:** GET  
**Description:** Converts an HSV to every other type in this API  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;v - string (query)  
**Responses:**  
<code>200 - OK</code>

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 0,
        "g": 0,
        "b": 0
      },
      "HSV": {
        "h": 255,
        "s": 0,
        "v": 0
      },
      "HSL": {
        "h": null,
        "s": null,
        "v": null
      },
      "CMYK": {
        "c": 0,
        "m": 0,
        "y": 0,
        "k": 100
      },
      "HEX": "#000000",
      "NAME": "black"
    }
  }
}
```

<hl>
### Endpoint: /gopher/hsl-to-all

**Method:** GET  
**Description:** Converts an HSL to every other type in this API  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;l - string (query)  
**Responses:**  
<code>200 - OK</code>

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 0,
        "g": 0,
        "b": 0
      },
      "HSV": {
        "h": 255,
        "s": 0,
        "v": 0
      },
      "HSL": {
        "h": null,
        "s": null,
        "v": null
      },
      "CMYK": {
        "c": 0,
        "m": 0,
        "y": 0,
        "k": 100
      },
      "HEX": "#000000",
      "NAME": "black"
    }
  }
}
```

<hl>
### Endpoint: /gopher/cmyk-to-all

**Method:** GET  
**Description:** Converts a CMYK to every other type in this API  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;c - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;m - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;y - string (query)  
k - string (query)  
**Responses:**  
<code>200 - OK</code>

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 0,
        "g": 0,
        "b": 0
      },
      "HSV": {
        "h": 255,
        "s": 0,
        "v": 0
      },
      "HSL": {
        "h": null,
        "s": null,
        "v": null
      },
      "CMYK": {
        "c": 0,
        "m": 0,
        "y": 0,
        "k": 100
      },
      "HEX": "#000000",
      "NAME": "black"
    }
  }
}
```

<hl>
### Endpoint: /gopher/hex-to-all

**Method:** GET  
**Description:** Converts a HEX to every other type in this API  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;hex - string (query)  
**Responses:**  
<code>200 - OK</code>

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 0,
        "g": 0,
        "b": 0
      },
      "HSV": {
        "h": 255,
        "s": 0,
        "v": 0
      },
      "HSL": {
        "h": null,
        "s": null,
        "v": null
      },
      "CMYK": {
        "c": 0,
        "m": 0,
        "y": 0,
        "k": 100
      },
      "HEX": "#000000",
      "NAME": "black"
    }
  }
}
```

<hl>
### Endpoint: /gopher/name-to-all

**Method:** GET  
**Description:** Converts a valid CSS-named-color to every other type in this API. Returns null if name is invalid.
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;name - string (query)  
**Responses:**  
<code>200 - OK</code>

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 0,
        "g": 0,
        "b": 0
      },
      "HSV": {
        "h": 255,
        "s": 0,
        "v": 0
      },
      "HSL": {
        "h": null,
        "s": null,
        "v": null
      },
      "CMYK": {
        "c": 0,
        "m": 0,
        "y": 0,
        "k": 100
      },
      "HEX": "#000000",
      "NAME": "black"
    }
  }
}
```

<hl>
### Endpoint: /gopher/palette-complement

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/palette-split-complement

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/palette-adjacent

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/palette-analagous

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/palette-phi-triad

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/palette-equi-triad

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/palette-phi-tetrad

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/palette-equi-tetrad

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/palette-mono-scale

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/palette-interpolate

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r1 - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g1 - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b1 - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;r2 - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g2 - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b2 - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/rgb-to-hsv

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/hsv-to-rgb

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;v - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/rgb-to-cmyk

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/cmyk-to-rgb

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;c - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;m - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;y - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;k - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/rgb-to-hsl

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/hsl-to-rgb

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;l - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/rgb-to-hex

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/hex-to-rgb

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;hex - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/hsv-to-hsl

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;v - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/hsl-to-hsv

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;l - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/hsl-to-cmyk

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;l - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/cmyk-to-hsl

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;c - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;m - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;y - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;k - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/hsv-to-cmyk

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;v - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/cmyk-to-hsv

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;c - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;m - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;y - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;k - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/hsv-to-hex

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;v - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/hex-to-hsv

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;hex - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/hsl-to-hex

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;l - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/hex-to-hsl

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;hex - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/cmyk-to-hex

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;c - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;m - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;y - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;k - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/hex-to-cmyk

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;hex - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/name-to-hex

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;name - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/hex-to-name

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;hex - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/name-to-rgb

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;name - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/name-to-hsv

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;name - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/name-to-hsl

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;name - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

<hl>
### Endpoint: /gopher/name-to-cmyk

**Method:** GET  
**Description:**  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;name - string (query)  
**Responses:**  
<code>200 - OK</code>
**Response Body:**

## Code Examples:

_*CURL:*_

```curl -X 'GET' \
  'http://localhost:5500/gopher/rgb-to-all?r=255&g=0&b=0' \
  -H 'accept: */*'
```

_*JS:*_

```fetch('http://localhost:5500/gopher/rgb-to-all?r=255&g=0&b=0', {
  headers: {
    'accept': '*/*'
  }
});
```

_*PYTHON:*_

```import requests

headers = {
    'accept': '*/*',
}

params = {
    'r': '255',
    'g': '0',
    'b': '0',
}

response = requests.get('http://localhost:5500/gopher/rgb-to-all', params=params, headers=headers)
```

_*PHP:*_

```<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://localhost:5500/gopher/rgb-to-all?r=255&g=0&b=0');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'accept: */*',
]);

$response = curl_exec($ch);

curl_close($ch);
```

## Glossary:

**Adjacent Palette**
**Analogous Palette**
**Complementary Palette**
**CSS named color**
**CMYK**
**Equilateral Tetrad Palette**
**Equilateral Triad Palette**
**HEX**
**HSL**
**HSV**
**Interpolation**
**Monochromatic Palette**
**Phi Tetrad Palette**
**Phi Triad Palette**
**RGB**
**Split Complemenetary Palette**
