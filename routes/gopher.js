// importing packages
import express from "express";
import * as converters from "../utils/converters.js";
import * as palettes from "../utils/palettes.js";
export const router = express.Router();

// converters
router.get(`/rgb-to-hsv`, function (req, res) {
  // Three integers, 0-255 inclusive, r, g, b
  let rgb = converters.paramsToRgb(req.query.r, req.query.g, req.query.b);
  let obj = {
    status: "success",
    data: { HSV: converters.rgbToHsv(rgb) },
  };
  res.status(200).json(obj);
});

router.get(`/hsv-to-rgb`, function (req, res) {
  // Three integers, 0-359 inclusive degrees h, 0-100 inclusive % s, 0-100 inclusive % v
  let hsv = converters.paramsToHsv(req.query.h, req.query.s, req.query.v);
  let obj = {
    status: "success",
    data: { RGB: converters.hsvToRgb(hsv) },
  };
  res.status(200).json(obj);
});

router.get(`/rgb-to-cmyk`, function (req, res) {
  // Three integers, 0-359 inclusive degrees h, 0-100 inclusive % s, 0-100 inclusive % v
  let rgb = converters.paramsToRgb(req.query.r, req.query.g, req.query.b);
  let obj = {
    status: "success",
    data: { CMYK: converters.rgbToCmyk(rgb) },
  };
  res.status(200).json(obj);
});

router.get(`/cmyk-to-rgb`, function (req, res) {
  let cmyk = converters.paramsToCmyk(
    req.query.c,
    req.query.m,
    req.query.y,
    req.query.k
  );
  let obj = {
    status: "success",
    data: { RGB: converters.cmykToRgb(cmyk) },
  };
  res.status(200).json(obj);
});

router.get(`/rgb-to-hsl`, function (req, res) {
  // Three integers, 0-255 inclusive, r, g, b
  let rgb = converters.paramsToRgb(req.query.r, req.query.g, req.query.b);
  let obj = {
    status: "success",
    data: { HSL: converters.rgbToHsl(rgb) },
  };
  res.status(200).json(obj);
});

router.get(`/hsl-to-rgb`, function (req, res) {
  // Three integers, 0-359 inclusive degrees h, 0-100 inclusive % s, 0-100 inclusive % l
  let hsl = converters.paramsToHsl(req.query.h, req.query.s, req.query.l);
  let obj = {
    status: "success",
    data: { RGB: converters.hslToRgb(hsl) },
  };
  res.status(200).json(obj);
});

router.get(`/rgb-to-hex`, function (req, res) {
  // Three integers, 0-255 inclusive, r, g, b
  let rgb = converters.paramsToRgb(req.query.r, req.query.g, req.query.b);
  let obj = {
    status: "success",
    data: { HEX: converters.rgbToHex(rgb) },
  };
  res.status(200).json(obj);
});

router.get(`/hex-to-rgb`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let hex = req.query.hex;
  let obj = {
    status: "success",
    data: { RGB: converters.hexToRgb(hex) },
  };
  res.status(200).json(obj);
});

router.get(`/hsv-to-hsl`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let hsv = converters.paramsToHsv(req.query.h, req.query.s, req.query.v);
  let obj = {
    status: "success",
    data: { HSL: converters.hsvToHsl(hsv) },
  };
  res.status(200).json(obj);
});

router.get(`/hsl-to-hsv`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let hsl = converters.paramsToHsl(req.query.h, req.query.s, req.query.l);
  let obj = {
    status: "success",
    data: { HSV: converters.hslToHsv(hsl) },
  };
  res.status(200).json(obj);
});

router.get(`/hsl-to-cmyk`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let hsl = converters.paramsToHsl(req.query.h, req.query.s, req.query.l);
  let obj = {
    status: "success",
    data: { CMYK: converters.hslToCmyk(hsl) },
  };
  res.status(200).json(obj);
});

router.get(`/cmyk-to-hsl`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let cmyk = converters.paramsToCmyk(
    req.query.c,
    req.query.m,
    req.query.y,
    req.query.k
  );
  let obj = {
    status: "success",
    data: { HSL: converters.cmykToHsl(cmyk) },
  };
  res.status(200).json(obj);
});

router.get(`/hsv-to-cmyk`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let hsv = converters.paramsToHsv(req.query.h, req.query.s, req.query.v);
  let obj = {
    status: "success",
    data: { CMYK: converters.hsvToCmyk(hsv) },
  };
  res.status(200).json(obj);
});

router.get(`cmyk-to-hsv`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let cmyk = converters.paramsToCmyk(
    req.query.c,
    req.query.m,
    req.query.y,
    req.query.k
  );
  let obj = {
    status: "success",
    data: { HSV: converters.cmykToHsv(cmyk) },
  };
  res.status(200).json(obj);
});

router.get(`hsv-to-hex`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let hsv = converters.paramsToHsv(req.query.h, req.query.s, req.query.v);
  let obj = {
    status: "success",
    data: { HEX: converters.hsvToHex(hsv) },
  };
  res.status(200).json(obj);
});

router.get(`/hex-to-hsv`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let hex = req.query.hex;
  let obj = {
    status: "success",
    data: { HSV: converters.hexToHsv(hsv) },
  };
  res.status(200).json(obj);
});

router.get(`/hsl-to-hex`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let hsl = converters.paramsToHsl(req.query.h, req.query.s, req.query.l);
  let obj = {
    status: "success",
    data: { HEX: converters.hsvToHex(hsl) },
  };
  res.status(200).json(obj);
});

router.get(`/hex-to-hsl`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let hex = req.query.hex;
  let obj = {
    status: "success",
    data: { HSL: converters.hexToHsl(hex) },
  };
  res.status(200).json(obj);
});

router.get(`/cmyk-to-hex`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let cmyk = converters.paramsToCmyk(
    req.query.c,
    req.query.m,
    req.query.y,
    req.query.k
  );
  let obj = {
    status: "success",
    data: { HEX: converters.cmykToHex(cmyk) },
  };
  res.status(200).json(obj);
});

router.get(`/hex-to-cmyk`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let hex = req.query.hex;
  let obj = {
    status: "success",
    data: { HEX: converters.hexToRgb(hex) },
  };
  res.status(200).json(obj);
});

router.get(`/name-to-hex`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let name = req.query.name;
  let obj = {
    status: "success",
    data: { NAME: converters.nameToHex(name) },
  };
  res.status(200).json(obj);
});

router.get(`/hex-to-name`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let hex = req.query.hex;
  let obj = {
    status: "success",
    data: { HEX: converters.hexToName(hex) },
  };
  res.status(200).json(obj);
});

router.get(`/name-to-rgb`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let name = req.query.name;
  let obj = {
    status: "success",
    data: { RGB: converters.nameToRgb(name) },
  };
  res.status(200).json(obj);
});

router.get(`/name-to-hsv`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let name = req.query.name;
  let obj = {
    status: "success",
    data: { HSV: converters.nameToHsv(name) },
  };
  res.status(200).json(obj);
});

router.get(`/name-to-hsl`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let name = req.query.name;
  let obj = {
    status: "success",
    data: { HSL: converters.nameToHsl(name) },
  };
  res.status(200).json(obj);
});

router.get(`/name-to-cmyk`, function (req, res) {
  // A hex string in the form "#E56F33"
  // Returns RGB object or null if format incorrect
  let name = req.query.name;
  let obj = {
    status: "success",
    data: { CMYK: converters.nameToCmyk(name) },
  };
  res.status(200).json(obj);
});

router.get(`/rgb-to-all`, function (req, res) {
  //  res.status(200).json({ msg: `name-to-hex` });
  // res.json(rgbToAll({ r: 255, g: 0, b: 0 }));
  let rgb = converters.paramsToRgb(req.query.r, req.query.g, req.query.b);
  let obj = {
    status: "success",
    data: { ALL: converters.rgbToAll(rgb) },
  };
  res.status(200).json(obj);
  // let obj = converters.rgbToAll({ r: 5, g: 7, b: 7 });
  res.json(obj);
});

router.get(`/hsv-to-all`, function (req, res) {
  let hsv = converters.paramsToHsv(req.query.h, req.query.s, req.query.v);
  let obj = {
    status: "success",
    data: { ALL: converters.hsvToAll(hsv) },
  };
  res.status(200).json(obj);
});

router.get(`/hsl-to-all`, function (req, res) {
  let hsl = converters.paramsToHsl(req.query.h, req.query.s, req.query.l);
  let obj = {
    status: "success",
    data: { ALL: converters.hslToAll(hsl) },
  };
  res.status(200).json(obj);
});

router.get(`/cmyk-to-all`, function (req, res) {
  let cmyk = converters.paramsToCmyk(
    req.query.c,
    req.query.m,
    req.query.y,
    req.query.k
  );
  let obj = {
    status: "success",
    data: { ALL: converters.cmykToAll(cmyk) },
  };
  res.status(200).json(obj);
});

router.get(`/hex-to-all`, function (req, res) {
  let hex = req.query.hex;
  let obj = {
    status: "success",
    data: { ALL: converters.hexToAll(hex) },
  };
  res.status(200).json(obj);
});

router.get(`/name-to-all`, function (req, res) {
  let name = req.query.name;
  let obj = {
    status: "success",
    data: { ALL: converters.nameToAll(name) },
  };
  res.status(200).json(obj);
});

// palettes
router.get(`/palette-complement`, function (req, res) {
  let rgb = converters.paramsToRgb(req.query.r, req.query.g, req.query.b);
  let obj = {
    status: "success",
    data: {
      palette: palettes.getComplementPalette(rgb),
    },
  };
  res.status(200).json(obj);
});

router.get(`/palette-split-complement`, function (req, res) {
  let rgb = converters.paramsToRgb(req.query.r, req.query.g, req.query.b);
  let obj = {
    status: "success",
    data: {
      palette: palettes.getSplitComplementPalette(rgb),
    },
  };
  res.status(200).json(obj);
});

router.get(`/palette-adjacent`, function (req, res) {
  let rgb = converters.paramsToRgb(req.query.r, req.query.g, req.query.b);
  let obj = {
    status: "success",
    data: {
      palette: palettes.getAdjacentPalette(rgb),
    },
  };
  res.status(200).json(obj);
});

router.get(`/palette-analagous`, function (req, res) {
  let rgb = converters.paramsToRgb(req.query.r, req.query.g, req.query.b);
  let obj = {
    status: "success",
    data: {
      palette: palettes.getAnalagousPalette(rgb),
    },
  };
  res.status(200).json(obj);
});

router.get(`/palette-phi-triad`, function (req, res) {
  let rgb = converters.paramsToRgb(req.query.r, req.query.g, req.query.b);
  let obj = {
    status: "success",
    data: {
      palette: palettes.getPhiTriadPalette(rgb),
    },
  };
  res.status(200).json(obj);
});

router.get(`/palette-equi-triad`, function (req, res) {
  let rgb = converters.paramsToRgb(req.query.r, req.query.g, req.query.b);
  let obj = {
    status: "success",
    data: {
      palette: palettes.getEquiTriadPalette(rgb),
    },
  };
  res.status(200).json(obj);
});

router.get(`/palette-phi-tetrad`, function (req, res) {
  let rgb = converters.paramsToRgb(req.query.r, req.query.g, req.query.b);
  let obj = {
    status: "success",
    data: {
      palette: palettes.getPhiTetradPalette(rgb),
    },
  };
  res.status(200).json(obj);
});

router.get(`/palette-equi-tetrad`, function (req, res) {
  let rgb = converters.paramsToRgb(req.query.r, req.query.g, req.query.b);
  let obj = {
    status: "success",
    data: {
      palette: palettes.getEquiTetradPalette(rgb),
    },
  };
  res.status(200).json(obj);
});

router.get(`/palette-mono-scale`, function (req, res) {
  let rgb = converters.paramsToRgb(req.query.r, req.query.g, req.query.b);
  let obj = {
    status: "success",
    data: {
      palette: palettes.getMonoScale(rgb),
    },
  };
  res.status(200).json(obj);
});

router.get(`/palette-interpolate`, function (req, res) {
  let front = converters.paramsToRgb(req.query.r1, req.query.g1, req.query.b1);
  let end = converters.paramsToRgb(req.query.r2, req.query.g2, req.query.b2);
  let obj = {
    status: "success",
    data: {
      palette: palettes.interpolate(front, end),
    },
  };
  res.status(200).json(obj);
});
