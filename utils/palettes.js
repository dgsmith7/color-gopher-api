import * as converters from "../utils/converters.js";

export function getComplementPalette(rgb) {
  let colorIn = converters.rgbToHsl(rgb);
  let newH;
  if (colorIn.h < 180) {
    newH = colorIn.h + 180;
  } else {
    newH = colorIn.h - 180;
  }
  let obj = {
    original: { r: rgb.r, g: rgb.g, b: rgb.b },
    color1: converters.hslToRgb({ h: newH, s: colorIn.s, l: colorIn.l }),
  };
  return obj;
}

export function getSplitComplementPalette(rgb) {
  let hsl = converters.rgbToHsl(rgb);
  let originalAngle = hsl.h;
  let split1 = originalAngle + 30;
  if (split1 > 360) {
    split1 >= split1 - 360;
  }
  let split2 = originalAngle + 150;
  if (split2 > 360) {
    split2 >= split2 - 360;
  }
  let split3 = originalAngle + 180;
  if (split3 > 360) {
    split3 >= split3 - 360;
  }
  let col1 = converters.hslToRgb({ h: split1, s: hsl.s, l: hsl.l });
  let col2 = converters.hslToRgb({ h: split2, s: hsl.s, l: hsl.l });
  let col3 = converters.hslToRgb({ h: split3, s: hsl.s, l: hsl.l });
  let obj = {
    original: { r: rgb.r, g: rgb.g, b: rgb.b },
    color1: col1,
    color2: col2,
    color3: col3,
  };
  return obj;
}

export function getAdjacentPalette(rgb) {
  let hsl = converters.rgbToHsl(rgb);
  let originalAngle = hsl.h;
  let split1 = originalAngle + 35;
  if (split1 > 360) {
    split1 >= split1 - 360;
  }
  let split2 = originalAngle - 35;
  if (split2 > 360) {
    split2 >= split2 - 360;
  }
  let col1 = converters.hslToRgb({ h: split1, s: hsl.s, l: hsl.l });
  let col2 = converters.hslToRgb({ h: split2, s: hsl.s, l: hsl.l });
  let obj = {
    color1: col1,
    original: { r: rgb.r, g: rgb.g, b: rgb.b },
    color2: col2,
  };
  return obj;
}

export function getAnalogousPalette(rgb) {
  let hsl = converters.rgbToHsl(rgb);
  let originalAngle = hsl.h;
  let split1 = originalAngle - 20;
  if (split1 > 360) {
    split1 >= split1 - 360;
  }
  let split2 = originalAngle - 40;
  if (split2 > 360) {
    split2 >= split2 - 360;
  }
  let split3 = originalAngle + 20;
  if (split3 > 360) {
    split3 >= split3 - 360;
  }
  let split4 = originalAngle + 40;
  if (split4 > 360) {
    split4 >= split4 - 360;
  }
  let col1 = converters.hslToRgb({ h: split1, s: hsl.s, l: hsl.l });
  let col2 = converters.hslToRgb({ h: split2, s: hsl.s, l: hsl.l });
  let col3 = converters.hslToRgb({ h: split3, s: hsl.s, l: hsl.l });
  let col4 = converters.hslToRgb({ h: split4, s: hsl.s, l: hsl.l });
  let obj = {
    color1: col1,
    color2: col2,
    original: { r: rgb.r, g: rgb.g, b: rgb.b },
    color3: col3,
    color4: col4,
  };
  return obj;
}

export function getPhiTriadPalette(rgb) {
  let hsl = converters.rgbToHsl(rgb);
  let originalAngle = hsl.h;
  let complementAngle;
  if (originalAngle >= 180) {
    complementAngle = originalAngle - 180;
  } else {
    complementAngle = originalAngle + 180;
  }
  let phi1 = complementAngle + 36;
  if (phi1 > 360) {
    phi1 >= phi1 - 360;
  }
  let phi2 = complementAngle - 36;
  if (phi2 > 360) {
    phi2 >= phi2 - 360;
  }
  let col1 = converters.hslToRgb({ h: originalAngle, s: hsl.s, l: hsl.l });
  let col2 = converters.hslToRgb({ h: phi1, s: hsl.s, l: hsl.l });
  let col3 = converters.hslToRgb({ h: phi2, s: hsl.s, l: hsl.l });
  let obj = { color1: col1, color2: col2, color3: col3 };
  return obj;
}

export function getEquiTriadPalette(rgb) {
  let hsl = converters.rgbToHsl(rgb);
  let originalAngle = hsl.h;
  let third1 = originalAngle + 120;
  if (third1 > 360) {
    third1 >= third1 - 360;
  }
  let third2 = originalAngle + 240;
  if (third2 > 360) {
    third2 >= third2 - 360;
  }
  let col1 = converters.hslToRgb({ h: third1, s: hsl.s, l: hsl.l });
  let col2 = converters.hslToRgb({ h: third2, s: hsl.s, l: hsl.l });
  let obj = {
    original: { r: rgb.r, g: rgb.g, b: rgb.b },
    color1: col1,
    color2: col2,
  };
  return obj;
}

export function getPhiTetradPalette(rgb) {
  let hsl = converters.rgbToHsl(rgb);
  let originalAngle = hsl.h;
  let split1 = originalAngle + 36;
  if (split1 > 360) {
    split1 >= split1 - 360;
  }
  let split2 = originalAngle + 180;
  if (split2 > 360) {
    split2 >= split2 - 360;
  }
  let split3 = originalAngle - 216;
  if (split3 > 360) {
    split3 >= split3 - 360;
  }
  let col1 = converters.hslToRgb({ h: split1, s: hsl.s, l: hsl.l });
  let col2 = converters.hslToRgb({ h: split2, s: hsl.s, l: hsl.l });
  let col3 = converters.hslToRgb({ h: split3, s: hsl.s, l: hsl.l });
  let obj = {
    original: { r: rgb.r, g: rgb.g, b: rgb.b },
    color1: col1,
    color2: col2,
    color3: col3,
  };
  return obj;
}

export function getEquiTetradPalette(rgb) {
  let hsl = converters.rgbToHsl(rgb);
  let originalAngle = hsl.h;
  let split1 = originalAngle + 90;
  if (split1 > 360) {
    split1 >= split1 - 360;
  }
  let split2 = originalAngle + 180;
  if (split2 > 360) {
    split2 >= split2 - 360;
  }
  let split3 = originalAngle + 270;
  if (split3 > 360) {
    split3 >= split3 - 360;
  }
  let col1 = converters.hslToRgb({ h: split1, s: hsl.s, l: hsl.l });
  let col2 = converters.hslToRgb({ h: split2, s: hsl.s, l: hsl.l });
  let col3 = converters.hslToRgb({ h: split3, s: hsl.s, l: hsl.l });
  let obj = {
    original: { r: rgb.r, g: rgb.g, b: rgb.b },
    color1: col1,
    color2: col2,
    color3: col3,
  };
  return obj;
}

export function getMonoScale(rgb) {
  let shiftFactor;
  let hsl = converters.rgbToHsl(rgb);
  let originalLightness = hsl.l;
  if (originalLightness < 200) {
    shiftFactor = 0;
  } else if (originalLightness >= 200 && originalLightness < 250) {
    shiftFactor = 30;
  } else {
    shiftFactor = 50;
  }
  let split1 = originalLightness + 10 - shiftFactor;
  if (split1 > 360) {
    split1 >= split1 - 360;
  }
  let split2 = originalLightness + 20 - shiftFactor;
  if (split2 > 360) {
    split2 >= split2 - 360;
  }
  let split3 = originalLightness + 30 - shiftFactor;
  if (split3 > 360) {
    split3 >= split3 - 360;
  }
  let split4 = originalLightness + 40 - shiftFactor;
  if (split4 > 360) {
    split4 >= split4 - 360;
  }
  let col1 = converters.hslToRgb({ h: hsl.h, s: hsl.s, l: split1 });
  let col2 = converters.hslToRgb({ h: hsl.h, s: hsl.s, l: split2 });
  let col3 = converters.hslToRgb({ h: hsl.h, s: hsl.s, l: split3 });
  let col4 = converters.hslToRgb({ h: hsl.h, s: hsl.s, l: split4 });
  let obj = {
    original: { r: rgb.r, g: rgb.g, b: rgb.b },
    color1: col1,
    color2: col2,
    color3: col3,
    color4: col4,
  };
  return obj;
}

export function interpolate(rgb1, rgb2) {
  let hsv1 = converters.rgbToHsv(rgb1);
  let hsv2 = converters.rgbToHsv(rgb2);
  let startHue = hsv1.h;
  let endHue = hsv2.h;
  let intervalHue = (endHue - startHue) / 8;
  let startSat = hsv1.s;
  let endSat = hsv2.s;
  let intervalSat = (endSat - startSat) / 8;
  let startVal = hsv1.v;
  let endVal = hsv2.v;
  let intervalVal = (endVal - startVal) / 8;
  let col1 = {
    h: hsv1.h + intervalHue,
    s: hsv1.s + intervalSat,
    v: hsv1.v + intervalVal,
  };
  let col2 = {
    h: hsv1.h + intervalHue * 2,
    s: hsv1.s + intervalSat * 2,
    v: hsv1.v + intervalVal * 2,
  };
  let col3 = {
    h: hsv1.h + intervalHue * 3,
    s: hsv1.s + intervalSat * 3,
    v: hsv1.v + intervalVal * 3,
  };
  let col4 = {
    h: hsv1.h + intervalHue * 4,
    s: hsv1.s + intervalSat * 4,
    v: hsv1.v + intervalVal * 4,
  };
  let col5 = {
    h: hsv1.h + intervalHue * 5,
    s: hsv1.s + intervalSat * 5,
    v: hsv1.v + intervalVal * 5,
  };
  let col6 = {
    h: hsv1.h + intervalHue * 6,
    s: hsv1.s + intervalSat * 6,
    v: hsv1.v + intervalVal * 6,
  };
  let col7 = {
    h: hsv1.h + intervalHue * 7,
    s: hsv1.s + intervalSat * 7,
    v: hsv1.v + intervalVal * 7,
  };
  let obj = {
    front: { r: rgb1.r, g: rgb1.g, b: rgb1.b },
    color1: converters.hsvToRgb(col1),
    color2: converters.hsvToRgb(col2),
    color3: converters.hsvToRgb(col3),
    color4: converters.hsvToRgb(col4),
    color5: converters.hsvToRgb(col5),
    color6: converters.hsvToRgb(col6),
    color7: converters.hsvToRgb(col7),
    end: { r: rgb2.r, g: rgb2.g, b: rgb2.b },
  };
  return obj;
}
