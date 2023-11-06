"use strict";
import { hexToNameTable, nameToHexTable } from "./webColors.js";

export function rgbToHsv(rgb) {
  let r = constrain(0, 255, rgb.r) / 255;
  let g = constrain(0, 255, rgb.g) / 255;
  let b = constrain(0, 255, rgb.b) / 255;
  let cMax = Math.max(r, g, b);
  let cMin = Math.min(r, g, b);
  let delta = cMax - cMin;
  let h;
  let s;
  if (delta == 0) {
    h = 0;
  } else if (cMax == r) {
    h = 60 * (((g - b) / delta) % 6);
  } else if (cMax == g) {
    h = 60 * ((b - r) / delta + 2);
  } else if (cMax == b) {
    h = 60 * ((r - g) / delta + 4);
  }
  if (cMax == 0) {
    s = 0;
  } else {
    s = delta / cMax;
  }
  return {
    h: Math.ceil(h),
    s: parseFloat((s * 100).toFixed(1)),
    v: parseFloat((cMax * 100).toFixed(1)),
  };
}

export function hsvToRgb(hsv) {
  let h = constrain(0, 359, hsv.h);
  let s = constrain(0, 100, hsv.s) / 100;
  let v = constrain(0, 100, hsv.v) / 100;
  let c = v * s;
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  let m = v - c;
  let rgb = {};
  if (h >= 0 && h < 60) {
    rgb = { r: (c + m) * 255, g: (x + m) * 255, b: (0 + m) * 255 };
  } else if (h >= 60 && h < 120) {
    rgb = { r: (x + m) * 255, g: (c + m) * 255, b: (0 + m) * 255 };
  } else if (h >= 120 && h < 180) {
    rgb = { r: (0 + m) * 255, g: (c + m) * 255, b: (x + m) * 255 };
  } else if (h >= 180 && h < 240) {
    rgb = { r: (0 + m) * 255, g: (x + m) * 255, b: (c + m) * 255 };
  } else if (h >= 240 && h < 300) {
    rgb = { r: (x + m) * 255, g: (0 + m) * 255, b: (c + m) * 255 };
  } else if (h >= 300 && h < 360) {
    rgb = { r: (c + m) * 255, g: (0 + m) * 255, b: (x + m) * 255 };
  }
  return { r: Math.ceil(rgb.r), g: Math.ceil(rgb.g), b: Math.ceil(rgb.b) };
}

export function rgbToCmyk(rgb) {
  let r = constrain(0, 255, rgb.r) / 255;
  let g = constrain(0, 255, rgb.g) / 255;
  let b = constrain(0, 255, rgb.b) / 255;
  let k = 1 - Math.max(r, g, b);
  let c = (1 - r - k) / (1 - k) || 0;
  let m = (1 - g - k) / (1 - k) || 0;
  let y = (1 - b - k) / (1 - k) || 0;
  return {
    c: Math.ceil(c * 100),
    m: Math.ceil(m * 100),
    y: Math.ceil(y * 100),
    k: Math.ceil(k * 100),
  };
}

export function cmykToRgb(cmyk) {
  let c = constrain(0, 100, cmyk.c) / 100;
  let m = constrain(0, 100, cmyk.m) / 100;
  let y = constrain(0, 100, cmyk.y) / 100;
  let k = constrain(0, 100, cmyk.k) / 100;
  let r = 255 * (1 - c) * (1 - k);
  let g = 255 * (1 - m) * (1 - k);
  let b = 255 * (1 - y) * (1 - k);
  return { r: Math.ceil(r), g: Math.ceil(g), b: Math.ceil(b) };
}

export function rgbToHsl(rgb) {
  let r = constrain(0, 255, rgb.r) / 255;
  let g = constrain(0, 255, rgb.g) / 255;
  let b = constrain(0, 255, rgb.b) / 255;
  let cMax = Math.max(r, g, b);
  let cMin = Math.min(r, g, b);
  let delta = cMax - cMin;
  let h;
  let s;
  if (delta == 0) {
    h = 0;
  } else if (cMax == r) {
    h = 60 * (((g - b) / delta) % 6);
  } else if (cMax == g) {
    h = 60 * ((b - r) / delta + 2);
  } else if (cMax == b) {
    h = 60 * ((r - g) / delta + 4);
  }
  let l = (cMax + cMin) / 2;
  if (delta == 0) {
    s = 0;
  } else {
    s = delta / (1 - Math.abs(l * 2 - 1));
  }
  return {
    h: Math.ceil(h),
    s: parseFloat((s * 100).toFixed(1)),
    l: parseFloat((l * 100).toFixed(1)),
  };
}

export function hslToRgb(hsl) {
  let h = constrain(0, 359, hsl.h);
  let s = constrain(0, 100, hsl.s) / 100;
  let l = constrain(0, 100, hsl.l) / 100;
  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  let m = l - c / 2;
  let rgb = {};
  if (h < 60) {
    rgb = { r: (c + m) * 255, g: (x + m) * 255, b: (0 + m) * 255 };
  } else if (h >= 60 && h < 120) {
    rgb = { r: (x + m) * 255, g: (c + m) * 255, b: (0 + m) * 255 };
  } else if (h >= 120 && h < 180) {
    rgb = { r: (0 + m) * 255, g: (c + m) * 255, b: (x + m) * 255 };
  } else if (h >= 180 && h < 240) {
    rgb = { r: (0 + m) * 255, g: (x + m) * 255, b: (c + m) * 255 };
  } else if (h >= 240 && h < 300) {
    rgb = { r: (x + m) * 255, g: (0 + m) * 255, b: (c + m) * 255 };
  } else if (h >= 300 && h < 360) {
    rgb = { r: (c + m) * 255, g: (0 + m) * 255, b: (x + m) * 255 };
  }
  return { r: Math.ceil(rgb.r), g: Math.ceil(rgb.g), b: Math.ceil(rgb.b) };
}

export function rgbToHex(rgb) {
  let r = constrain(0, 255, rgb.r);
  let g = constrain(0, 255, rgb.g);
  let b = constrain(0, 255, rgb.b);
  let rHex = Math.abs(r).toString(16);
  while (rHex.length < 2) rHex = "0" + rHex;
  let gHex = Math.abs(g).toString(16);
  while (gHex.length < 2) gHex = "0" + gHex;
  let bHex = Math.abs(b).toString(16);
  while (bHex.length < 2) bHex = "0" + bHex;
  return "#" + rHex + gHex + bHex;
}

export function hexToRgb(hex) {
  let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
  if (regex.test(hex) == false) {
    return null;
  } else {
    hex.toLowerCase();
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return { r: r, g: g, b: b };
  }
}

export function hsvToHsl(hsv) {
  return rgbToHsl(hsvToRgb(hsv));
}

export function hslToHsv(hsl) {
  return rgbToHsv(hslToRgb(hsl));
}

export function hslToCmyk(hsl) {
  return rgbToCmyk(hslToRgb(hsl));
}

export function cmykToHsl(cmyk) {
  return rgbToHsl(cmykToRgb(cmyk));
}

export function hsvToCmyk(hsv) {
  return rgbToCmyk(hsvToRgb(hsv));
}

export function cmykToHsv(cmyk) {
  return rgbToHsv(cmykToRgb(cmyk));
}

export function hsvToHex(hsv) {
  return rgbToHex(hsvToRgb(hsv));
}

export function hexToHsv(hex) {
  return rgbToHsv(hexToRgb(hex));
}

export function hslToHex(hsl) {
  return rgbToHex(hslToRgb(hsl));
}

export function hexToHsl(hex) {
  return rgbToHsl(hexToRgb(hex));
}

export function cmykToHex(cmyk) {
  return rgbToHex(cmykToRgb(cmyk));
}

export function hexToCmyk(hex) {
  return rgbToCmyk(hexToRgb(hex));
}

export function nameToHex(name) {
  name = name.toLowerCase();
  if (nameToHexTable.has(name)) {
    return nameToHexTable.get(name);
  } else {
    return null;
  }
}

export function hexToName(hex) {
  if (hexToNameTable.has(hex)) {
    return hexToNameTable.get(hex);
  } else {
    return null;
  }
}

export function nameToRgb(name) {
  if (nameToHex(name) != null) {
    return hexToRgb(nameToHex(name));
  } else {
    return null;
  }
}

export function nameToHsv(name) {
  if (nameToHex(name) != null) {
    return rgbToHsv(nameToRgb(name));
  } else {
    return null;
  }
}

export function nameToHsl(name) {
  if (nameToHex(name) != null) {
    return rgbToHsl(nameToRgb(name));
  } else {
    return null;
  }
}

export function nameToCmyk(name) {
  if (nameToHex(name) != null) {
    return rgbToCmyk(nameToRgb(name));
  } else {
    return null;
  }
}

export function rgbToAll(rgb) {
  let hsv = rgbToHsv(rgb);
  let hsl = rgbToHsv(rgb);
  let cmyk = rgbToCmyk(rgb);
  let hex = rgbToHex(rgb);
  let name = hexToNameTable.get(rgbToHex(rgb)) || null;
  let obj = {
    RGB: { r: rgb.r, g: rgb.g, b: rgb.b },
    HSV: hsv,
    HSL: hsl,
    CMYK: cmyk,
    HEX: hex,
    NAME: name,
  };
  return obj;
}

export function hsvToAll(hsv) {
  let rgb = hsvToRgb(hsv);
  let hsl = rgbToHsv(hsv);
  let cmyk = hsvToCmyk(hsv);
  let hex = hsvToHex(hsv);
  let name = hexToNameTable.get(rgbToHex(rgb)) || null;
  let obj = {
    RGB: rgb,
    HSV: { h: hsv.h, s: hsv.s, v: hsv.v },
    HSL: hsl,
    CMYK: cmyk,
    HEX: hex,
    NAME: name,
  };
  return obj;
}

export function hslToAll(hsl) {
  let rgb = hslToRgb(hsl);
  let hsv = hslToHsv(hsl);
  let cmyk = hslToCmyk(hsl);
  let hex = hslToHex(hsl);
  let name = hexToNameTable.get(rgbToHex(rgb)) || null;
  let obj = {
    RGB: rgb,
    HSV: hsv,
    HSL: { h: hsl.h, s: hsl.s, l: hsl.l },
    CMYK: cmyk,
    HEX: hex,
    NAME: name,
  };
  return obj;
}

export function cmykToAll(cmyk) {
  let rgb = cmykToRgb(cmyk);
  let hsv = cmykToHsv(cmyk);
  let hex = cmykToHex(cmyk);
  let name = hexToNameTable.get(rgbToHex(rgb)) || null;
  let obj = {
    RGB: rgb,
    HSV: hsv,
    HSL: hsl,
    CMYK: { c: cmyk.c, m: cmyk.m, y: cmyk.y, k: cmyk.k },
    HEX: hex,
    NAME: name,
  };
  return obj;
}

export function hexToAll(hex) {
  let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
  if (regex.test(hex) == false) {
    return null;
  } else {
    let rgb = hexToRgb(hex);
    let hsv = rgbToHsv(rgb);
    let cmyk = rgbToCmyk(rgb);
    let name = hexToNameTable.get(hex) || null;
    let obj = {
      RGB: rgb,
      HSV: hsv,
      HSL: hsl,
      CMYK: cmyk,
      HEX: hex,
      NAME: name,
    };
    return obj;
  }
}

export function nameToAll(name) {
  let regex = new RegExp(/^[a-z]$/);
  if (regex.test(name.toLowerCase()) == false) {
    return null;
  } else {
    let hex = nameToHexTable.get(name);
    let rgb = hexToRgb(hex);
    let hsv = rgbToHsv(rgb);
    let hsl = rgbToHsl(rgb);
    let cmyk = rgbToCmyk(rgb);
    let name = name;
    let obj = {
      RGB: rgb,
      HSV: hsv,
      HSL: hsl,
      CMYK: cmyk,
      HEX: hex,
      NAME: name,
    };
    return obj;
  }
}

export function constrain(lowerLim, upperLim, val) {
  if (val < lowerLim) {
    val = lowerLim;
  }
  if (val > upperLim) {
    val = upperLim;
  }
  return val;
}

export function paramsToRgb(r, g, b) {
  let obj = { r: parseInt(r), g: parseInt(g), b: parseInt(b) };
  return obj;
}

export function paramsToHsv(h, s, v) {
  let obj = { h: parseInt(h), s: parseInt(s), v: parseInt(v) };
  return obj;
}

export function paramsToHsl(h, s, l) {
  let obj = { rh: parseInt(h), s: parseInt(s), l: parseInt(l) };
  return obj;
}

export function paramsToCmyk(c, m, y, k) {
  let obj = { c: parseInt(c), m: parseInt(m), y: parseInt(y), k: parseInt(k) };
  return obj;
}
