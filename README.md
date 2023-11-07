# color-gopher-api

<h2><b>Introduction:</b></h2>

Color Gopher API is a REST API that converts colors and generates on-demand palettes. Color Gopher can sniff out the color conversions you need or retireve palettes on request. Users can ask the Color Gopher to convert between RGB, HSV, HSL, CMYK, HEX, and CSS-named-colors. This can be done one at a time, or all at once in a single request. The Color Gopher can also generate palettes based on the input color. Those palettes are: Complement, Split complement, Adjacent, Analogous, Phi (golden angle) triad, Equilateral triad, Phi (golden angle) tetrad, Equlateral tetrad, Monochromatic, Interpolation in 7 steps between two colors. Let Color Gopher GET you the info you need for your next project!

Getting Started:
This API is available on RapidAPI at color-gopher-api.

API Reference:
Color Gopher API
1.0.0

GET
/
Description: Landing page.
Parameters:
none
Responses:: 200-OK
Response Body:

GET
/gopher/rgb-to-all
Description:
Parameters:
r - string (query)
g - string (query)
b - string (query)
Responses:
200 - OK
Response Body:
{
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

GET
/gopher/hsv-to-all
Description:
Parameters:
h - string (query)
s - string (query)
v - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/hsl-to-all
Description:
Parameters:
h - string (query)
s - string (query)
l - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/cmyk-to-all
Description:
Parameters:
c - string (query)
m - string (query)
y - string (query)
k - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/hex-to-all
Description:
Parameters:
hex - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/name-to-all
Description:
Parameters:
name - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/palette-complement
Description:
Parameters:
r - string (query)
g - string (query)
b - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/palette-split-complement
Description:
Parameters:
r - string (query)
g - string (query)
b - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/palette-adjacent
Description:
Parameters:
r - string (query)
g - string (query)
b - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/palette-analagous
Description:
Parameters:
r - string (query)
g - string (query)
b - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/palette-phi-triad
Description:
Parameters:
r - string (query)
g - string (query)
b - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/palette-equi-triad
Description:
Parameters:
r - string (query)
g - string (query)
b - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/palette-phi-tetrad
Description:
Parameters:
r - string (query)
g - string (query)
b - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/palette-equi-tetrad
Description:
Parameters:
r - string (query)
g - string (query)
b - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/palette-mono-scale
Description:
Parameters:
r - string (query)
g - string (query)
b - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/palette-interpolate
Description:
Parameters:
r1 - string (query)
g1 - string (query)
b1 - string (query)
r2 - string (query)
g2 - string (query)
b2 - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/rgb-to-hsv
Description:
Parameters:
r - string (query)
g - string (query)
b - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/hsv-to-rgb
Description:
Parameters:
h - string (query)
s - string (query)
v - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/rgb-to-cmyk
Description:
Parameters:
r - string (query)
g - string (query)
b - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/cmyk-to-rgb
Description:
Parameters:
c - string (query)
m - string (query)
y - string (query)
k - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/rgb-to-hsl
Description:
Parameters:
r - string (query)
g - string (query)
b - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/hsl-to-rgb
Description:
Parameters:
h - string (query)
s - string (query)
l - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/rgb-to-hex
Description:
Parameters:
r - string (query)
g - string (query)
b - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/hex-to-rgb
Description:
Parameters:
hex - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/hsv-to-hsl
Description:
Parameters:
h - string (query)
s - string (query)
v - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/hsl-to-hsv
Description:
Parameters:
h - string (query)
s - string (query)
l - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/hsl-to-cmyk
Description:
Parameters:
h - string (query)
s - string (query)
l - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/cmyk-to-hsl
Description:
Parameters:
c - string (query)
m - string (query)
y - string (query)
k - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/hsv-to-cmyk
Description:
Parameters:
h - string (query)
s - string (query)
v - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/cmyk-to-hsv
Description:
Parameters:
c - string (query)
m - string (query)
y - string (query)
k - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/hsv-to-hex
Description:
Parameters:
h - string (query)
s - string (query)
v - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/hex-to-hsv
Description:
Parameters:
hex - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/hsl-to-hex
Description:
Parameters:
h - string (query)
s - string (query)
l - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/hex-to-hsl
Description:
Parameters:
hex - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/cmyk-to-hex
Description:
Parameters:
c - string (query)
m - string (query)
y - string (query)
k - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/hex-to-cmyk
Description:
Parameters:
hex - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/name-to-hex
Description:
Parameters:
name - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/hex-to-name
Description:
Parameters:
hex - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/name-to-rgb
Description:
Parameters:
name - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/name-to-hsv
Description:
Parameters:
name - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/name-to-hsl
Description:
Parameters:
name - string (query)
Responses:
200 - OK
Response Body:

GET
/gopher/name-to-cmyk
Description:
Parameters:
name - string (query)
Responses:
200 - OK
Response Body:

Code Examples:
CURL:
curl -X 'GET' \
 'http://localhost:5500/gopher/rgb-to-all?r=255&g=0&b=0' \
 -H 'accept: _/_'
JS:
fetch('http://localhost:5500/gopher/rgb-to-all?r=255&g=0&b=0', {
headers: {
'accept': '_/_'
}
});
PYTHON:
import http.client

conn = http.client.HTTPConnection('localhost:5500')
headers = {
'accept': '_/_',
}
conn.request('GET', '/gopher/rgb-to-all?r=255&g=0&b=0', headers=headers)
response = conn.getresponse()
PHP:

<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://localhost:5500/gopher/rgb-to-all?r=255&g=0&b=0');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'accept: */*',
]);

$response = curl_exec($ch);

curl_close($ch);

FAQ:

Glossary:
Adjacent Palette
Analogous Palette
Complementary Palette
CSS named color
CMYK
Equilateral Tetrad Palette
Equilateral Triad Palette
HEX
HSL
HSV
Interpolation
Monochromatic Palette
Phi Tetrad Palette
Phi Triad Palette
RGB
Split Complemenetary Palette
