# color-gopher-api

<img src="./public/color-gopher.png" width="150" height="150">

## Introduction:

Color Gopher API is a REST API that converts colors and generates on-demand palettes. Color Gopher can sniff out the color conversions you need or retireve palettes on request. Users can ask the Color Gopher to convert between RGB, HSV, HSL, CMYK, HEX, and CSS-named-colors. This can be done one at a time, or all at once in a single request. The Color Gopher can also generate palettes based on the input color. Those palettes are: Complement, Split complement, Adjacent, Analogous, Phi (golden angle) triad, Equilateral triad, Phi (golden angle) tetrad, Equlateral tetrad, Monochromatic, Interpolation in 7 steps between two colors. Let Color Gopher GET you the info you need for your next project!

## Getting Started:

This API is available on RapidAPI at color-gopher-api.

## API Reference: Color Gopher API 1.0.0

### Endpoint: /

**Method:** GET  
**Description:** Landing page.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;none  
**Responses:**

```
200-OK
```

**Response Body:**

<code>"Welcome to the Color Gopher API - Copyright (c) 2023 by David G. Smith"
</code>

<hr>

### Endpoint: /gopher/rgb-to-all

**Method:** GET  
**Description:** Converts an RGB to every other type in this API.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**

```
200-OK
```

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 255,
        "g": 0,
        "b": 0
      },
      "HSV": {
        "h": 0,
        "s": 100,
        "v": 100
      },
      "HSL": {
        "h": 0,
        "s": 100,
        "l": 50
      },
      "CMYK": {
        "c": 0,
        "m": 100,
        "y": 100,
        "k": 0
      },
      "HEX": "#ff0000",
      "NAME": "red"
    }
  }
}
```

<hr>

### Endpoint: /gopher/hsv-to-all

**Method:** GET  
**Description:** Converts an HSV to every other type in this API.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;v - string (query)  
**Responses:**

```
200-OK
```

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 30,
        "g": 86,
        "b": 62
      },
      "HSV": {
        "h": 154,
        "s": 65,
        "v": 34
      },
      "HSL": {
        "h": 154,
        "s": 48,
        "l": 23
      },
      "CMYK": {
        "c": 65,
        "m": 0,
        "y": 27,
        "k": 66
      },
      "HEX": "#1e563e",
      "NAME": null
    }
  }
}
```

<hr>

### Endpoint: /gopher/hsl-to-all

**Method:** GET  
**Description:** Converts an HSL to every other type in this API.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;l - string (query)  
**Responses:**

```
200-OK
```

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 30,
        "g": 143,
        "b": 94
      },
      "HSV": {
        "h": 153,
        "s": 79,
        "v": 56
      },
      "HSL": {
        "h": 153,
        "s": 65,
        "l": 34
      },
      "CMYK": {
        "c": 79,
        "m": 0,
        "y": 34,
        "k": 43
      },
      "HEX": "#1e8f5e",
      "NAME": null
    }
  }
}
```

<hr>

### Endpoint: /gopher/cmyk-to-all

**Method:** GET  
**Description:** Converts a CMYK to every other type in this API.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;c - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;m - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;y - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;k - string (query)  
**Responses:**

```
200-OK
```

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 11,
        "g": 4,
        "b": 15
      },
      "HSV": {
        "h": 278,
        "s": 73,
        "v": 6
      },
      "HSL": {
        "h": 278,
        "s": 58,
        "l": 4
      },
      "CMYK": {
        "c": 26,
        "m": 73,
        "y": 0,
        "k": 94
      },
      "HEX": "#0b040f",
      "NAME": null
    }
  }
}
```

<hr>

### Endpoint: /gopher/hex-to-all

**Method:** GET  
**Description:** Converts a HEX to every other type in this API.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;hex - string (query)  
**Responses:**

```
200-OK
```

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 0,
        "g": 0,
        "b": 255
      },
      "HSV": {
        "h": 240,
        "s": 100,
        "v": 100
      },
      "HSL": {
        "h": 240,
        "s": 100,
        "l": 50
      },
      "CMYK": {
        "c": 100,
        "m": 100,
        "y": 0,
        "k": 0
      },
      "HEX": "#0000ff",
      "NAME": "blue"
    }
  }
}
```

<hr>

### Endpoint: /gopher/name-to-all

**Method:** GET  
**Description:** Converts a valid CSS-named-color to every other type in this API. Returns null if name is invalid.
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;name - string (query)  
**Responses:**

```
200-OK
```

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 240,
        "g": 248,
        "b": 255
      },
      "HSV": {
        "h": 208,
        "s": 6,
        "v": 100
      },
      "HSL": {
        "h": 208,
        "s": 100,
        "l": 97
      },
      "CMYK": {
        "c": 5,
        "m": 2,
        "y": 0,
        "k": 0
      },
      "HEX": "#f0f8ff",
      "NAME": "aliceblue"
    }
  }
}
```

<hr>

### Endpoint: /gopher/palette-complement

**Method:** GET  
**Description:** A two-color palette on an HSL color wheel where a color 180 degrees away from the original color is chosen to go with the original color.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**

```
200-OK
```

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 240,
        "g": 248,
        "b": 255
      },
      "HSV": {
        "h": 208,
        "s": 6,
        "v": 100
      },
      "HSL": {
        "h": 208,
        "s": 100,
        "l": 97
      },
      "CMYK": {
        "c": 5,
        "m": 2,
        "y": 0,
        "k": 0
      },
      "HEX": "#f0f8ff",
      "NAME": "aliceblue"
    }
  }
}
```

<hr>

### Endpoint: /gopher/palette-split-complement

**Method:** GET  
**Description:** A palette on an HSL color wheel where two color, one 35 degrees away in each direction are chosen to go with the original color.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**

```
200-OK
```

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 240,
        "g": 248,
        "b": 255
      },
      "HSV": {
        "h": 208,
        "s": 6,
        "v": 100
      },
      "HSL": {
        "h": 208,
        "s": 100,
        "l": 97
      },
      "CMYK": {
        "c": 5,
        "m": 2,
        "y": 0,
        "k": 0
      },
      "HEX": "#f0f8ff",
      "NAME": "aliceblue"
    }
  }
}
```

<hr>

### Endpoint: /gopher/palette-adjacent

**Method:** GET  
**Description:** A three-color palette on an HSL color wheel where two colors, one 35 degrees away in each direction are chosen to go with the original color.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**

```
200-OK
```

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 240,
        "g": 248,
        "b": 255
      },
      "HSV": {
        "h": 208,
        "s": 6,
        "v": 100
      },
      "HSL": {
        "h": 208,
        "s": 100,
        "l": 97
      },
      "CMYK": {
        "c": 5,
        "m": 2,
        "y": 0,
        "k": 0
      },
      "HEX": "#f0f8ff",
      "NAME": "aliceblue"
    }
  }
}
```

<hr>

### Endpoint: /gopher/palette-analagous

**Method:** GET  
**Description:** A five-color palette on an HSL color wheel where four colors, which are 20 and 40 degrees away in each direction are chosen to go with the original color.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**

```
200-OK
```

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 240,
        "g": 248,
        "b": 255
      },
      "HSV": {
        "h": 208,
        "s": 6,
        "v": 100
      },
      "HSL": {
        "h": 208,
        "s": 100,
        "l": 97
      },
      "CMYK": {
        "c": 5,
        "m": 2,
        "y": 0,
        "k": 0
      },
      "HEX": "#f0f8ff",
      "NAME": "aliceblue"
    }
  }
}
```

<hr>

### Endpoint: /gopher/palette-phi-triad

**Method:** GET  
**Description:** A three-color palette on an HSL color wheel where two colors, each phi degrees away from the original's complement are chosen to go with the original color. Phi is the "Golden Angle", used to derive the Golden Ratio, and is approximately 36 degrees.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**

```
200-OK
```

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 240,
        "g": 248,
        "b": 255
      },
      "HSV": {
        "h": 208,
        "s": 6,
        "v": 100
      },
      "HSL": {
        "h": 208,
        "s": 100,
        "l": 97
      },
      "CMYK": {
        "c": 5,
        "m": 2,
        "y": 0,
        "k": 0
      },
      "HEX": "#f0f8ff",
      "NAME": "aliceblue"
    }
  }
}
```

<hr>

### Endpoint: /gopher/palette-equi-triad

**Method:** GET  
**Description:** A three-color palette on an HSL color wheel where two colors, at 120 and 240 degrees away from the original are chosen to go with the original color.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**

```
200-OK
```

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 240,
        "g": 248,
        "b": 255
      },
      "HSV": {
        "h": 208,
        "s": 6,
        "v": 100
      },
      "HSL": {
        "h": 208,
        "s": 100,
        "l": 97
      },
      "CMYK": {
        "c": 5,
        "m": 2,
        "y": 0,
        "k": 0
      },
      "HEX": "#f0f8ff",
      "NAME": "aliceblue"
    }
  }
}
```

<hr>

### Endpoint: /gopher/palette-phi-tetrad

**Method:** GET  
**Description:** A four-color palette on an HSL color wheel where three colors, one complenetary to the original and the others phi degrees away from the original and complement are chosen to go with the original color. Phi is the "Golden Angle", used to derive the Golden Ratio and is approximately 36 degrees.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**

```
200-OK
```

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 240,
        "g": 248,
        "b": 255
      },
      "HSV": {
        "h": 208,
        "s": 6,
        "v": 100
      },
      "HSL": {
        "h": 208,
        "s": 100,
        "l": 97
      },
      "CMYK": {
        "c": 5,
        "m": 2,
        "y": 0,
        "k": 0
      },
      "HEX": "#f0f8ff",
      "NAME": "aliceblue"
    }
  }
}
```

<hr>

### Endpoint: /gopher/palette-equi-tetrad

**Method:** GET  
**Description:** A four-color palette on an HSL color wheel where three colors, at 90, 180, and 270 degrees away from the original are chosen to go with the original color.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**

```
200-OK
```

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 240,
        "g": 248,
        "b": 255
      },
      "HSV": {
        "h": 208,
        "s": 6,
        "v": 100
      },
      "HSL": {
        "h": 208,
        "s": 100,
        "l": 97
      },
      "CMYK": {
        "c": 5,
        "m": 2,
        "y": 0,
        "k": 0
      },
      "HEX": "#f0f8ff",
      "NAME": "aliceblue"
    }
  }
}
```

<hr>

### Endpoint: /gopher/palette-mono-scale

**Method:** GET  
**Description:** A five-color palette on an HSL color wheel where four colors, all the same hue and saturation, but varying in lightness in steps of 10% are chosen to go with the original color. The original color always falls in the palette, but where, depends on it lightness.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)  
**Responses:**

```
200-OK
```

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 240,
        "g": 248,
        "b": 255
      },
      "HSV": {
        "h": 208,
        "s": 6,
        "v": 100
      },
      "HSL": {
        "h": 208,
        "s": 100,
        "l": 97
      },
      "CMYK": {
        "c": 5,
        "m": 2,
        "y": 0,
        "k": 0
      },
      "HEX": "#f0f8ff",
      "NAME": "aliceblue"
    }
  }
}
```

<hr>

### Endpoint: /gopher/palette-interpolate

**Method:** GET  
**Description:** A nine-color palette where seven colors are evenly stepped in their red, green, and blue componenets from two given colors used as beginning and end.  
**Parameters:**  
&nbsp;&nbsp;&nbsp;&nbsp;r1 - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g1 - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b1 - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;r2 - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;g2 - string (query)  
&nbsp;&nbsp;&nbsp;&nbsp;b2 - string (query)  
**Responses:**

```
200-OK
```

**Response Body:**

```{
  "status": "success",
  "data": {
    "ALL": {
      "RGB": {
        "r": 240,
        "g": 248,
        "b": 255
      },
      "HSV": {
        "h": 208,
        "s": 6,
        "v": 100
      },
      "HSL": {
        "h": 208,
        "s": 100,
        "l": 97
      },
      "CMYK": {
        "c": 5,
        "m": 2,
        "y": 0,
        "k": 0
      },
      "HEX": "#f0f8ff",
      "NAME": "aliceblue"
    }
  }
}
```

<!-- <hr>

### Endpoint: /gopher/rgb-to-hsv

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/hsv-to-rgb

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;v - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/rgb-to-cmyk

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/cmyk-to-rgb

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;c - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;m - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;y - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;k - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/rgb-to-hsl

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/hsl-to-rgb

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;l - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/rgb-to-hex

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;r - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;g - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;b - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/hex-to-rgb

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;hex - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/hsv-to-hsl

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;v - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/hsl-to-hsv

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;l - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/hsl-to-cmyk

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;l - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/cmyk-to-hsl

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;c - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;m - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;y - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;k - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/hsv-to-cmyk

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;v - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/cmyk-to-hsv

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;c - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;m - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;y - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;k - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/hsv-to-hex

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;v - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/hex-to-hsv

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;hex - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/hsl-to-hex

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;h - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;s - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;l - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/hex-to-hsl

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;hex - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/cmyk-to-hex

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;c - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;m - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;y - string (query)
&nbsp;&nbsp;&nbsp;&nbsp;k - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/hex-to-cmyk

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;hex - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/name-to-hex

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;name - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/hex-to-name

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;hex - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/name-to-rgb

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;name - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/name-to-hsv

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;name - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/name-to-hsl

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;name - string (query)
**Responses:**

```
200-OK
```

**Response Body:**

<hr>

### Endpoint: /gopher/name-to-cmyk

**Method:** GET
**Description:**
**Parameters:**
&nbsp;&nbsp;&nbsp;&nbsp;name - string (query)
**Responses:**

```
200-OK
```

**Response Body:** -->

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

**Adjacent Palette** - A three-color palette on an HSL color wheel where two colors, one 35 degrees away in each direction are chosen to go with the original color.

**Analogous Palette** - A five-color palette on an HSL color wheel where four colors, which are 20 and 40 degrees away in each direction are chosen to go with the original color.

**Complementary Palette** - A two-color palette on an HSL color wheel where a color 180 degrees away from the original color is chosen to go with the original color.

**CSS named color** - Official CSS color names found [here](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color).

**CMYK** - Cyan, Magenta, Yellow, and Black. A color system often associated with printing.

**Equilateral Tetrad Palette** - A four-color palette on an HSL color wheel where three colors, at 90, 180, and 270 degrees away from the original are chosen to go with the original color.

**Equilateral Triad Palette** - A three-color palette on an HSL color wheel where two colors, at 120 and 240 degrees away from the original are chosen to go with the original color.

**HEX** - A Hexidecimal (base16) string used to represent RGB color, often used in CSS and elsewhere. The string opens with a hashtag and is followed by a two-place hexidecimal representation of each element (red, green, and blue) in an RGB color, such as "#ff68e2".

**HSL** - Hue, Saturation, Lightness. A color system that represents colors with three characteristics. Of note is the subtle but important difference between "lightness" and "value", which is used in the HSV color system in lieu of "lightness".

**HSV** - Hue, Saturation, Value. A color system that represents colors with three characteristics. Of note is the subtle but important difference between "value" and "lightness", which is used in the HSL color system in lieu of "value".

**Interpolation** - A nine-color palette where seven colors are evenly stepped in their red, green, and blue componenets from two given colors used as beginning and end.

**Monochromatic Palette** - A five-color palette on an HSL color wheel where four colors, all the same hue and saturation, but varying in lightness in steps of 10% are chosen to go with the original color. The original color always falls in the palette, but where, depends on it lightness.

**Phi Tetrad Palette** - A four-color palette on an HSL color wheel where three colors, one complenetary to the original and the others phi degrees away from the original and complement are chosen to go with the original color. Phi is the "Golden Angle", used to derive the Golden Ratio and is approximately 36 degrees.

**Phi Triad Palette** - A three-color palette on an HSL color wheel where two colors, each phi degrees away from the original's complement are chosen to go with the original color. Phi is the "Golden Angle", used to derive the Golden Ratio, and is approximately 36 degrees.

**RGB** - Red, Green, Blue. This quite common additive color system is used to represent colors with three charactistics based on the amount of red, green, and blue that comprise the final color.

**Split Complemenetary Palette** - A palette on an HSL color wheel where two color, one 35 degrees away in each direction are chosen to go with the original color.
