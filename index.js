"use strict";
import { webColors } from "/webColors.js";

(() => {
  let under = {
    r: -1,
    g: -1,
    b: -1,
    h: -1,
    s: -1,
    v: -1,
    l: -1,
    c: -1,
    m: -1,
    y: -1,
    k: -1,
  };
  let lo = {
    r: 0,
    g: 0,
    b: 0,
    h: 0,
    s: 0,
    v: 0,
    l: 0,
    c: 0,
    m: 0,
    y: 0,
    k: 0,
  };
  let mid = {
    r: 128,
    g: 137,
    b: 231,
    h: 180,
    s: 50,
    v: 50,
    l: 50,
    c: 50,
    m: 50,
    y: 50,
    k: 50,
  };
  let hi = {
    r: 255,
    g: 255,
    b: 255,
    h: 359,
    s: 100,
    v: 100,
    l: 100,
    c: 100,
    m: 100,
    y: 100,
    k: 100,
  };
  let over = {
    r: 256,
    g: 256,
    b: 256,
    h: 360,
    s: 101,
    v: 101,
    l: 101,
    c: 101,
    m: 101,
    y: 101,
    k: 101,
  };
  let testCol1 = "#00ff00";
  let testCol2 = "#0000ff";

  console.log("RGB to HSV");
  console.log(rgbToHsv(under));
  console.log(rgbToHsv(lo));
  console.log(rgbToHsv(mid));
  console.log(rgbToHsv(hi));
  console.log(rgbToHsv(over));

  console.log("RGB to CMYK");
  console.log(rgbToCmyk(under));
  console.log(rgbToCmyk(lo));
  console.log(rgbToCmyk(mid));
  console.log(rgbToCmyk(hi));
  console.log(rgbToCmyk(over));

  console.log("RGB to HSL");
  console.log(rgbToHsl(under));
  console.log(rgbToHsl(lo));
  console.log(rgbToHsl(mid));
  console.log(rgbToHsl(hi));
  console.log(rgbToHsl(over));

  console.log("HSV to RGB");
  console.log(hsvToRgb(under));
  console.log(hsvToRgb(lo));
  console.log(hsvToRgb(mid));
  console.log(hsvToRgb(hi));
  console.log(hsvToRgb(over));

  console.log("CMYK to RGB");
  console.log(cmykToRgb(under));
  console.log(cmykToRgb(lo));
  console.log(cmykToRgb(mid));
  console.log(cmykToRgb(hi));
  console.log(cmykToRgb(over));

  console.log("HSL to RGB");
  console.log(hslToRgb(under));
  console.log(hslToRgb(lo));
  console.log(hslToRgb(mid));
  console.log(hslToRgb(hi));
  console.log(hslToRgb(over));

  console.log("RGB to HEX");
  console.log(rgbToHex(under));
  console.log(rgbToHex(lo));
  console.log(rgbToHex(mid));
  console.log(rgbToHex(hi));
  console.log(rgbToHex(over));

  console.log("HEX to RGB");
  console.log(hexToRgb("#FG345r"));
  console.log(hexToRgb("#000000"));
  console.log(hexToRgb("#fe47a2"));
  console.log(hexToRgb("#fFFfff"));
  console.log(hexToRgb("fe47a2"));

  console.log("NAME tests");
  console.log(nameToHex("LIGHTSTEELBLUE"));
  console.log(nameToRgb("vIoLet"));
  console.log(nameToHsv("yellow"));
  console.log(nameToHsl("Vomit"));
  console.log(nameToCmyk("Azure"));

  console.log("Palette tests");
  document.querySelector("#pal1title").innerHTML = "1 complement";
  console.log("complement", getComplementPalette(hexToRgb(testCol1)));
  document.querySelector("#pal1-1").style.backgroundColor = rgbToHex(
    getComplementPalette(hexToRgb(testCol1)).original
  ).toString();
  document.querySelector("#pal1-2").style.backgroundColor = rgbToHex(
    getComplementPalette(hexToRgb(testCol1)).color1
  ).toString();

  document.querySelector("#pal2title").innerHTML = "2 split complement";
  console.log(
    "split complement",
    getSplitComplementPalette(hexToRgb(testCol1))
  );
  document.querySelector("#pal2-1").style.backgroundColor = rgbToHex(
    getSplitComplementPalette(hexToRgb(testCol1)).original
  ).toString();
  document.querySelector("#pal2-2").style.backgroundColor = rgbToHex(
    getSplitComplementPalette(hexToRgb(testCol1)).color1
  ).toString();
  document.querySelector("#pal2-3").style.backgroundColor = rgbToHex(
    getSplitComplementPalette(hexToRgb(testCol1)).color2
  ).toString();
  document.querySelector("#pal2-4").style.backgroundColor = rgbToHex(
    getSplitComplementPalette(hexToRgb(testCol1)).color3
  ).toString();

  document.querySelector("#pal3title").innerHTML = "3 adjacent";
  console.log("adjacent", getAdjacentPalette(hexToRgb(testCol1)));
  document.querySelector("#pal3-1").style.backgroundColor = rgbToHex(
    getAdjacentPalette(hexToRgb(testCol1)).color1
  ).toString();
  document.querySelector("#pal3-2").style.backgroundColor = rgbToHex(
    getAdjacentPalette(hexToRgb(testCol1)).original
  ).toString();
  document.querySelector("#pal3-3").style.backgroundColor = rgbToHex(
    getAdjacentPalette(hexToRgb(testCol1)).color2
  ).toString();

  document.querySelector("#pal4title").innerHTML = "4 analagous";
  console.log("analagous", getAnalagousPalette(hexToRgb(testCol1)));
  document.querySelector("#pal4-5").style.backgroundColor = rgbToHex(
    getAnalagousPalette(hexToRgb(testCol1)).color1
  ).toString();
  document.querySelector("#pal4-1").style.backgroundColor = rgbToHex(
    getAnalagousPalette(hexToRgb(testCol1)).color2
  ).toString();
  document.querySelector("#pal4-2").style.backgroundColor = rgbToHex(
    getAnalagousPalette(hexToRgb(testCol1)).original
  ).toString();
  document.querySelector("#pal4-3").style.backgroundColor = rgbToHex(
    getAnalagousPalette(hexToRgb(testCol1)).color3
  ).toString();
  document.querySelector("#pal4-4").style.backgroundColor = rgbToHex(
    getAnalagousPalette(hexToRgb(testCol1)).color4
  ).toString();

  document.querySelector("#pal5title").innerHTML = "5 phi triad";
  console.log("phi triad", getPhiTriadPalette(hexToRgb(testCol1)));
  document.querySelector("#pal5-1").style.backgroundColor = rgbToHex(
    getPhiTriadPalette(hexToRgb(testCol1)).color1
  ).toString();
  document.querySelector("#pal5-2").style.backgroundColor = rgbToHex(
    getPhiTriadPalette(hexToRgb(testCol1)).color2
  ).toString();
  document.querySelector("#pal5-3").style.backgroundColor = rgbToHex(
    getPhiTriadPalette(hexToRgb(testCol1)).color3
  ).toString();

  document.querySelector("#pal6title").innerHTML = "6 equi triad";
  console.log("equi triad", getEquiTriadPalette(hexToRgb(testCol1)));
  document.querySelector("#pal6-1").style.backgroundColor = rgbToHex(
    getEquiTriadPalette(hexToRgb(testCol1)).original
  ).toString();
  document.querySelector("#pal6-2").style.backgroundColor = rgbToHex(
    getEquiTriadPalette(hexToRgb(testCol1)).color1
  ).toString();
  document.querySelector("#pal6-3").style.backgroundColor = rgbToHex(
    getEquiTriadPalette(hexToRgb(testCol1)).color2
  ).toString();

  document.querySelector("#pal7title").innerHTML = "7 phi tetrad";
  console.log("phi tetrad", getPhiTetradPalette(hexToRgb(testCol1)));
  document.querySelector("#pal7-1").style.backgroundColor = rgbToHex(
    getPhiTetradPalette(hexToRgb(testCol1)).original
  ).toString();
  document.querySelector("#pal7-2").style.backgroundColor = rgbToHex(
    getPhiTetradPalette(hexToRgb(testCol1)).color1
  ).toString();
  document.querySelector("#pal7-3").style.backgroundColor = rgbToHex(
    getPhiTetradPalette(hexToRgb(testCol1)).color2
  ).toString();
  document.querySelector("#pal7-4").style.backgroundColor = rgbToHex(
    getPhiTetradPalette(hexToRgb(testCol1)).color3
  ).toString();

  document.querySelector("#pal8title").innerHTML = "8 equi tetrad";
  console.log("equi tetrad", getEquiTetradPalette(hexToRgb(testCol1)));
  document.querySelector("#pal8-1").style.backgroundColor = rgbToHex(
    getEquiTetradPalette(hexToRgb(testCol1)).original
  ).toString();
  document.querySelector("#pal8-2").style.backgroundColor = rgbToHex(
    getEquiTetradPalette(hexToRgb(testCol1)).color1
  ).toString();
  document.querySelector("#pal8-3").style.backgroundColor = rgbToHex(
    getEquiTetradPalette(hexToRgb(testCol1)).color2
  ).toString();
  document.querySelector("#pal8-4").style.backgroundColor = rgbToHex(
    getEquiTetradPalette(hexToRgb(testCol1)).color3
  ).toString();

  document.querySelector("#pal9title").innerHTML = "9 mono";
  console.log("mono", getMonoScale(hexToRgb(testCol1)));
  document.querySelector("#pal9-1").style.backgroundColor = rgbToHex(
    getMonoScale(hexToRgb(testCol1)).original
  ).toString();
  document.querySelector("#pal9-2").style.backgroundColor = rgbToHex(
    getMonoScale(hexToRgb(testCol1)).color1
  ).toString();
  document.querySelector("#pal9-3").style.backgroundColor = rgbToHex(
    getMonoScale(hexToRgb(testCol1)).color2
  ).toString();
  document.querySelector("#pal9-4").style.backgroundColor = rgbToHex(
    getMonoScale(hexToRgb(testCol1)).color3
  ).toString();
  document.querySelector("#pal9-5").style.backgroundColor = rgbToHex(
    getMonoScale(hexToRgb(testCol1)).color4
  ).toString();

  document.querySelector("#pal10title").innerHTML = "10 lerp";
  console.log(
    "interpolate",
    interpolate(hexToRgb(testCol1), hexToRgb(testCol2))
  );
  document.querySelector("#pal10-1").style.backgroundColor = rgbToHex(
    interpolate(hexToRgb(testCol1), hexToRgb(testCol2)).front
  ).toString();
  document.querySelector("#pal10-2").style.backgroundColor = rgbToHex(
    interpolate(hexToRgb(testCol1), hexToRgb(testCol2)).color1
  ).toString();
  document.querySelector("#pal10-3").style.backgroundColor = rgbToHex(
    interpolate(hexToRgb(testCol1), hexToRgb(testCol2)).color2
  ).toString();
  document.querySelector("#pal10-4").style.backgroundColor = rgbToHex(
    interpolate(hexToRgb(testCol1), hexToRgb(testCol2)).color3
  ).toString();
  document.querySelector("#pal10-5").style.backgroundColor = rgbToHex(
    interpolate(hexToRgb(testCol1), hexToRgb(testCol2)).color4
  ).toString();
  document.querySelector("#pal10-6").style.backgroundColor = rgbToHex(
    interpolate(hexToRgb(testCol1), hexToRgb(testCol2)).color5
  ).toString();
  document.querySelector("#pal10-7").style.backgroundColor = rgbToHex(
    interpolate(hexToRgb(testCol1), hexToRgb(testCol2)).color6
  ).toString();
  document.querySelector("#pal10-8").style.backgroundColor = rgbToHex(
    interpolate(hexToRgb(testCol1), hexToRgb(testCol2)).color7
  ).toString();
  document.querySelector("#pal10-9").style.backgroundColor = rgbToHex(
    interpolate(hexToRgb(testCol1), hexToRgb(testCol2)).end
  ).toString();

  // console.log("RYB");
  // console.log(RYBtoRGB(under));
  // console.log(RYBtoRGB(lo));
  // console.log(RYBtoRGB(mid));
  // console.log(RYBtoRGB(hi));
  // console.log(RYBtoRGB(over));
  // console.log(RGBtoRYB(under));
  // console.log(RGBtoRYB(lo));
  // console.log(RGBtoRYB(mid));
  // console.log(RGBtoRYB(hi));
  // console.log(RGBtoRYB(over));

  function rgbToHsv(RGB) {
    // inputs 0-255
    let r = constrain(0, 255, RGB.r) / 255;
    let g = constrain(0, 255, RGB.g) / 255;
    let b = constrain(0, 255, RGB.b) / 255;
    let cMax = Math.max(r, g, b);
    let cMin = Math.min(r, g, b);
    let delta = cMax - cMin;
    let h;
    let s;
    // determine h
    if (delta == 0) {
      h = 0;
    } else if (cMax == r) {
      h = 60 * (((g - b) / delta) % 6);
    } else if (cMax == g) {
      h = 60 * ((b - r) / delta + 2);
    } else if (cMax == b) {
      h = 60 * ((r - g) / delta + 4);
    }
    // determne s
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

  function hsvToRgb(HSV) {
    // inputs 360, 100, 100
    let h = constrain(0, 359, HSV.h);
    let s = constrain(0, 100, HSV.s) / 100;
    let v = constrain(0, 100, HSV.v) / 100;
    let c = v * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = v - c;
    let RGB = {};
    if (h >= 0 && h < 60) {
      RGB = { r: (c + m) * 255, g: (x + m) * 255, b: (0 + m) * 255 };
    } else if (h >= 60 && h < 120) {
      RGB = { r: (x + m) * 255, g: (c + m) * 255, b: (0 + m) * 255 };
    } else if (h >= 120 && h < 180) {
      RGB = { r: (0 + m) * 255, g: (c + m) * 255, b: (x + m) * 255 };
    } else if (h >= 180 && h < 240) {
      RGB = { r: (0 + m) * 255, g: (x + m) * 255, b: (c + m) * 255 };
    } else if (h >= 240 && h < 300) {
      RGB = { r: (x + m) * 255, g: (0 + m) * 255, b: (c + m) * 255 };
    } else if (h >= 300 && h < 360) {
      RGB = { r: (c + m) * 255, g: (0 + m) * 255, b: (x + m) * 255 };
    }
    return { r: Math.ceil(RGB.r), g: Math.ceil(RGB.g), b: Math.ceil(RGB.b) };
  }

  function rgbToCmyk(RGB) {
    // inputs 0-255
    let r = constrain(0, 255, RGB.r) / 255;
    let g = constrain(0, 255, RGB.g) / 255;
    let b = constrain(0, 255, RGB.b) / 255;
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

  function cmykToRgb(CMYK) {
    // inputs 100, 100, 100, 100
    let c = constrain(0, 100, CMYK.c) / 100;
    let m = constrain(0, 100, CMYK.m) / 100;
    let y = constrain(0, 100, CMYK.y) / 100;
    let k = constrain(0, 100, CMYK.k) / 100;
    let r = 255 * (1 - c) * (1 - k);
    let g = 255 * (1 - m) * (1 - k);
    let b = 255 * (1 - y) * (1 - k);
    return { r: Math.ceil(r), g: Math.ceil(g), b: Math.ceil(b) };
  }

  function rgbToHsl(RGB) {
    // inputs 0-255
    let r = constrain(0, 255, RGB.r) / 255;
    let g = constrain(0, 255, RGB.g) / 255;
    let b = constrain(0, 255, RGB.b) / 255;
    let cMax = Math.max(r, g, b);
    let cMin = Math.min(r, g, b);
    let delta = cMax - cMin;
    let h;
    let s;
    // determine h
    if (delta == 0) {
      h = 0;
    } else if (cMax == r) {
      h = 60 * (((g - b) / delta) % 6);
    } else if (cMax == g) {
      h = 60 * ((b - r) / delta + 2);
    } else if (cMax == b) {
      h = 60 * ((r - g) / delta + 4);
    }
    // determne l
    let l = (cMax + cMin) / 2;
    // determne s
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

  function hslToRgb(HSL) {
    // inputs 360, 100, 100
    let h = constrain(0, 359, HSL.h);
    let s = constrain(0, 100, HSL.s) / 100;
    let l = constrain(0, 100, HSL.l) / 100;
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = l - c / 2;
    let RGB = {};
    if (h < 60) {
      RGB = { r: (c + m) * 255, g: (x + m) * 255, b: (0 + m) * 255 };
    } else if (h >= 60 && h < 120) {
      RGB = { r: (x + m) * 255, g: (c + m) * 255, b: (0 + m) * 255 };
    } else if (h >= 120 && h < 180) {
      RGB = { r: (0 + m) * 255, g: (c + m) * 255, b: (x + m) * 255 };
    } else if (h >= 180 && h < 240) {
      RGB = { r: (0 + m) * 255, g: (x + m) * 255, b: (c + m) * 255 };
    } else if (h >= 240 && h < 300) {
      RGB = { r: (x + m) * 255, g: (0 + m) * 255, b: (c + m) * 255 };
    } else if (h >= 300 && h < 360) {
      RGB = { r: (c + m) * 255, g: (0 + m) * 255, b: (x + m) * 255 };
    }
    return { r: Math.ceil(RGB.r), g: Math.ceil(RGB.g), b: Math.ceil(RGB.b) };
  }

  function rgbToHex(RGB) {
    // inputs 0-255
    let r = constrain(0, 255, RGB.r);
    let g = constrain(0, 255, RGB.g);
    let b = constrain(0, 255, RGB.b);
    let rHex = Math.abs(r).toString(16);
    while (rHex.length < 2) rHex = "0" + rHex;
    let gHex = Math.abs(g).toString(16);
    while (gHex.length < 2) gHex = "0" + gHex;
    let bHex = Math.abs(b).toString(16);
    while (bHex.length < 2) bHex = "0" + bHex;
    return "#" + rHex + gHex + bHex;
  }

  function hexToRgb(HEX) {
    // input in string format "#24e2ff"
    let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    if (regex.test(HEX) == false) {
      return null;
    } else {
      HEX.toLowerCase();
      let r = parseInt(HEX.substring(1, 3), 16);
      let g = parseInt(HEX.substring(3, 5), 16);
      let b = parseInt(HEX.substring(5, 7), 16);
      return { r: r, g: g, b: b };
    }
  }

  function HSVtoHSL(HSV) {
    return rgbToHsl(hsvToRgb(HSV));
  }

  function HSLtoHSV(HSL) {
    return rgbToHsv(hslToRgb(HSL));
  }

  function HSLtoCMYK(HSL) {
    return rgbToCmyk(hslToRgb(HSL));
  }

  function CMYKtoHSL(CMYK) {
    return rgbToHsl(cmykToRgb(CMYK));
  }

  function HSVtoCMYK(HSV) {
    return rgbToCmyk(hsvToRgb(HSV));
  }

  function CMYKtoHSV(CMYK) {
    return rgbToHsv(cmykToRgb(CMYK));
  }

  function HSVtoHEX(HSV) {
    return rgbToHex(hsvToRgb(HSV));
  }

  function HEXtoHSV(HEX) {
    return rgbToHsv(hexToRgb(HEX));
  }

  function HSLtoHEX(HSL) {
    return rgbToHex(hslToRgb(HSL));
  }

  function HEXtoHSV(HEX) {
    return rgbToHsv(hexToRgb(HEX));
  }

  function CMYKtoHEX(CMYK) {
    return rgbToHex(cmykToRgb(CMYK));
  }

  function HEXtoCMYK(HEX) {
    return rgbToCmyk(hexToRgb(HEX));
  }

  function nameToHex(NAME) {
    NAME = NAME.toLowerCase();
    if (webColors.has(NAME)) {
      return webColors.get(NAME);
    } else {
      return null;
    }
  }

  function nameToRgb(NAME) {
    //    if (nameToHex(NAME).valid == true) {
    if (nameToHex(NAME) != null) {
      return hexToRgb(nameToHex(NAME));
    } else {
      return null;
    }
  }

  function nameToHsv(NAME) {
    if (nameToHex(NAME) != null) {
      return rgbToHsv(nameToRgb(NAME));
    } else {
      return null;
    }
  }

  function nameToHsl(NAME) {
    if (nameToHex(NAME) != null) {
      return rgbToHsl(nameToRgb(NAME));
    } else {
      return null;
    }
  }

  function nameToCmyk(NAME) {
    if (nameToHex(NAME) != null) {
      return rgbToCmyk(nameToRgb(NAME));
    } else {
      return null;
    }
  }

  function getComplementPalette(RGB) {
    //  RGB complement - hue 180
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

  function getSplitComplementPalette(RGB) {
    // RGB to splitComp - complement and two colors adjacent to each on one side
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

  function getAdjacentPalette(RGB) {
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

  function getAnalagousPalette(RGB) {
    let HSL = rgbToHsl(RGB);
    let originalAngle = HSL.h;
    let split1 = originalAngle - 30;
    if (split1 > 360) {
      split1 >= split1 - 360;
    }
    let split2 = originalAngle - 45;
    if (split2 > 360) {
      split2 >= split2 - 360;
    }
    let split3 = originalAngle + 30;
    if (split3 > 360) {
      split3 >= split3 - 360;
    }
    let split4 = originalAngle + 45;
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

  function getPhiTriadPalette(RGB) {
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

  function getEquiTriadPalette(RGB) {
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

  function getPhiTetradPalette(RGB) {
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

  function getEquiTetradPalette(RGB) {
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

  function getMonoScale(RGB) {
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

  function interpolate(RGB1, RGB2) {
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

  function constrain(lowerLim, upperLim, val) {
    if (val < lowerLim) {
      val = lowerLim;
    }
    if (val > upperLim) {
      val = upperLim;
    }
    return val;
  }

  /*
  https://www.rapidtables.com/convert/color/
https://blog.matthewgove.com/2021/07/02/color-theory-a-simple-exercise-in-mathematics-and-graphic-design/
  https://blog.hubspot.com/marketing/color-theory-design
https://github.com/bahamas10/ryb/blob/gh-pages/README.md

*/
})();
