// importing packages
import express from "express";
import * as converters from "../utils/converters.js";
import * as palettes from "../utils/palettes.js";

export const router = express.Router();

router.get(`/rgb-to-all`, function (req, res) {
  //  res.status(200).json({ msg: `name-to-hex` });
  // res.json(rgbToAll({ r: 255, g: 0, b: 0 }));
  let rgb = converters.paramsToRgb(req.query.r, req.query.g, req.query.b);
  let obj = {
    status: "success",
    data: { ALL: converters.rgbToAll(rgb) },
  };
  res.status(200).json(obj);
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

router.get(`/palette-analogous`, function (req, res) {
  let rgb = converters.paramsToRgb(req.query.r, req.query.g, req.query.b);
  let obj = {
    status: "success",
    data: {
      palette: palettes.getAnalogousPalette(rgb),
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
