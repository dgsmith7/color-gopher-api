export function getComplementPalette(RGB) {
  let colorIn = rgbToHsl(RGB);
  let newH;
  if (colorIn.h < 180) {
    newH = colorIn.h + 180;
  } else {
    newH = colorIn.h - 180;
  }
  let obj = {
    original: { r: RGB.r, g: RGB.g, b: RGB.b },
    color1: hslToRgb({ h: newH, s: colorIn.s, l: colorIn.l }),
  };
  return obj;
}

export function getSplitComplementPalette(RGB) {
  let HSL = rgbToHsl(RGB);
  let originalAngle = HSL.h;
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
  let col1 = hslToRgb({ h: split1, s: HSL.s, l: HSL.l });
  let col2 = hslToRgb({ h: split2, s: HSL.s, l: HSL.l });
  let col3 = hslToRgb({ h: split3, s: HSL.s, l: HSL.l });
  let obj = {
    original: { r: RGB.r, g: RGB.g, b: RGB.b },
    color1: col1,
    color2: col2,
    color3: col3,
  };
  return obj;
}

export function getAdjacentPalette(RGB) {
  let HSL = rgbToHsl(RGB);
  let originalAngle = HSL.h;
  let split1 = originalAngle + 35;
  if (split1 > 360) {
    split1 >= split1 - 360;
  }
  let split2 = originalAngle - 35;
  if (split2 > 360) {
    split2 >= split2 - 360;
  }
  let col1 = hslToRgb({ h: split1, s: HSL.s, l: HSL.l });
  let col2 = hslToRgb({ h: split2, s: HSL.s, l: HSL.l });
  let obj = {
    color1: col1,
    original: { r: RGB.r, g: RGB.g, b: RGB.b },
    color2: col2,
  };
  return obj;
}

export function getAnalogousPalette(RGB) {
  let HSL = rgbToHsl(RGB);
  let originalAngle = HSL.h;
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
  let col1 = hslToRgb({ h: split1, s: HSL.s, l: HSL.l });
  let col2 = hslToRgb({ h: split2, s: HSL.s, l: HSL.l });
  let col3 = hslToRgb({ h: split3, s: HSL.s, l: HSL.l });
  let col4 = hslToRgb({ h: split4, s: HSL.s, l: HSL.l });
  let obj = {
    color1: col1,
    color2: col2,
    original: { r: RGB.r, g: RGB.g, b: RGB.b },
    color3: col3,
    color4: col4,
  };
  return obj;
}

export function getPhiTriadPalette(RGB) {
  let HSL = rgbToHsl(RGB);
  let originalAngle = HSL.h;
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
  let col1 = hslToRgb({ h: originalAngle, s: HSL.s, l: HSL.l });
  let col2 = hslToRgb({ h: phi1, s: HSL.s, l: HSL.l });
  let col3 = hslToRgb({ h: phi2, s: HSL.s, l: HSL.l });
  let obj = { color1: col1, color2: col2, color3: col3 };
  return obj;
}

export function getEquiTriadPalette(RGB) {
  let HSL = rgbToHsl(RGB);
  let originalAngle = HSL.h;
  let third1 = originalAngle + 120;
  if (third1 > 360) {
    third1 >= third1 - 360;
  }
  let third2 = originalAngle + 240;
  if (third2 > 360) {
    third2 >= third2 - 360;
  }
  let col1 = hslToRgb({ h: third1, s: HSL.s, l: HSL.l });
  let col2 = hslToRgb({ h: third2, s: HSL.s, l: HSL.l });
  let obj = {
    original: { r: RGB.r, g: RGB.g, b: RGB.b },
    color1: col1,
    color2: col2,
  };
  return obj;
}

export function getPhiTetradPalette(RGB) {
  let HSL = rgbToHsl(RGB);
  let originalAngle = HSL.h;
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
  let col1 = hslToRgb({ h: split1, s: HSL.s, l: HSL.l });
  let col2 = hslToRgb({ h: split2, s: HSL.s, l: HSL.l });
  let col3 = hslToRgb({ h: split3, s: HSL.s, l: HSL.l });
  let obj = {
    original: { r: RGB.r, g: RGB.g, b: RGB.b },
    color1: col1,
    color2: col2,
    color3: col3,
  };
  return obj;
}

export function getEquiTetradPalette(RGB) {
  let HSL = rgbToHsl(RGB);
  let originalAngle = HSL.h;
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
  let col1 = hslToRgb({ h: split1, s: HSL.s, l: HSL.l });
  let col2 = hslToRgb({ h: split2, s: HSL.s, l: HSL.l });
  let col3 = hslToRgb({ h: split3, s: HSL.s, l: HSL.l });
  let obj = {
    original: { r: RGB.r, g: RGB.g, b: RGB.b },
    color1: col1,
    color2: col2,
    color3: col3,
  };
  return obj;
}

export function getMonoScale(RGB) {
  let shiftFactor;
  let HSL = rgbToHsl(RGB);
  let originalLightness = HSL.l;
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
  let col1 = hslToRgb({ h: HSL.h, s: HSL.s, l: split1 });
  let col2 = hslToRgb({ h: HSL.h, s: HSL.s, l: split2 });
  let col3 = hslToRgb({ h: HSL.h, s: HSL.s, l: split3 });
  let col4 = hslToRgb({ h: HSL.h, s: HSL.s, l: split4 });
  let obj = {
    original: { r: RGB.r, g: RGB.g, b: RGB.b },
    color1: col1,
    color2: col2,
    color3: col3,
    color4: col4,
  };
  return obj;
}

export function interpolate(RGB1, RGB2) {
  let HSV1 = rgbToHsv(RGB1);
  let HSV2 = rgbToHsv(RGB2);
  let startHue = HSV1.h;
  let endHue = HSV2.h;
  let intervalHue = (endHue - startHue) / 8;
  let startSat = HSV1.s;
  let endSat = HSV2.s;
  let intervalSat = (endSat - startSat) / 8;
  let startVal = HSV1.v;
  let endVal = HSV2.v;
  let intervalVal = (endVal - startVal) / 8;
  let col1 = {
    h: HSV1.h + intervalHue,
    s: HSV1.s + intervalSat,
    v: HSV1.v + intervalVal,
  };
  let col2 = {
    h: HSV1.h + intervalHue * 2,
    s: HSV1.s + intervalSat * 2,
    v: HSV1.v + intervalVal * 2,
  };
  let col3 = {
    h: HSV1.h + intervalHue * 3,
    s: HSV1.s + intervalSat * 3,
    v: HSV1.v + intervalVal * 3,
  };
  let col4 = {
    h: HSV1.h + intervalHue * 4,
    s: HSV1.s + intervalSat * 4,
    v: HSV1.v + intervalVal * 4,
  };
  let col5 = {
    h: HSV1.h + intervalHue * 5,
    s: HSV1.s + intervalSat * 5,
    v: HSV1.v + intervalVal * 5,
  };
  let col6 = {
    h: HSV1.h + intervalHue * 6,
    s: HSV1.s + intervalSat * 6,
    v: HSV1.v + intervalVal * 6,
  };
  let col7 = {
    h: HSV1.h + intervalHue * 7,
    s: HSV1.s + intervalSat * 7,
    v: HSV1.v + intervalVal * 7,
  };
  let obj = {
    front: { r: RGB1.r, g: RGB1.g, b: RGB1.b },
    color1: hsvToRgb(col1),
    color2: hsvToRgb(col2),
    color3: hsvToRgb(col3),
    color4: hsvToRgb(col4),
    color5: hsvToRgb(col5),
    color6: hsvToRgb(col6),
    color7: hsvToRgb(col7),
    end: { r: RGB2.r, g: RGB2.g, b: RGB2.b },
  };
  return obj;
}
