#!/usr/bin/env node
'use strict';

var node_fs = require('node:fs');
var path$3 = require('node:path');
var require$$0 = require('os');
var require$$1 = require('tty');
var require$$0$3 = require('assert');
var require$$0$2 = require('events');
var require$$0$1 = require('readline');
var node_buffer = require('node:buffer');
var childProcess = require('node:child_process');
var process$2 = require('node:process');
var require$$0$6 = require('child_process');
var require$$0$5 = require('path');
var require$$0$4 = require('fs');
var url = require('node:url');
var os$1 = require('node:os');
var require$$0$8 = require('buffer');
var require$$0$7 = require('stream');
var require$$2 = require('util');
var node_util = require('node:util');

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var ansiStyles$1 = {exports: {}};

var colorName;
var hasRequiredColorName;

function requireColorName () {
	if (hasRequiredColorName) return colorName;
	hasRequiredColorName = 1;

	colorName = {
		"aliceblue": [240, 248, 255],
		"antiquewhite": [250, 235, 215],
		"aqua": [0, 255, 255],
		"aquamarine": [127, 255, 212],
		"azure": [240, 255, 255],
		"beige": [245, 245, 220],
		"bisque": [255, 228, 196],
		"black": [0, 0, 0],
		"blanchedalmond": [255, 235, 205],
		"blue": [0, 0, 255],
		"blueviolet": [138, 43, 226],
		"brown": [165, 42, 42],
		"burlywood": [222, 184, 135],
		"cadetblue": [95, 158, 160],
		"chartreuse": [127, 255, 0],
		"chocolate": [210, 105, 30],
		"coral": [255, 127, 80],
		"cornflowerblue": [100, 149, 237],
		"cornsilk": [255, 248, 220],
		"crimson": [220, 20, 60],
		"cyan": [0, 255, 255],
		"darkblue": [0, 0, 139],
		"darkcyan": [0, 139, 139],
		"darkgoldenrod": [184, 134, 11],
		"darkgray": [169, 169, 169],
		"darkgreen": [0, 100, 0],
		"darkgrey": [169, 169, 169],
		"darkkhaki": [189, 183, 107],
		"darkmagenta": [139, 0, 139],
		"darkolivegreen": [85, 107, 47],
		"darkorange": [255, 140, 0],
		"darkorchid": [153, 50, 204],
		"darkred": [139, 0, 0],
		"darksalmon": [233, 150, 122],
		"darkseagreen": [143, 188, 143],
		"darkslateblue": [72, 61, 139],
		"darkslategray": [47, 79, 79],
		"darkslategrey": [47, 79, 79],
		"darkturquoise": [0, 206, 209],
		"darkviolet": [148, 0, 211],
		"deeppink": [255, 20, 147],
		"deepskyblue": [0, 191, 255],
		"dimgray": [105, 105, 105],
		"dimgrey": [105, 105, 105],
		"dodgerblue": [30, 144, 255],
		"firebrick": [178, 34, 34],
		"floralwhite": [255, 250, 240],
		"forestgreen": [34, 139, 34],
		"fuchsia": [255, 0, 255],
		"gainsboro": [220, 220, 220],
		"ghostwhite": [248, 248, 255],
		"gold": [255, 215, 0],
		"goldenrod": [218, 165, 32],
		"gray": [128, 128, 128],
		"green": [0, 128, 0],
		"greenyellow": [173, 255, 47],
		"grey": [128, 128, 128],
		"honeydew": [240, 255, 240],
		"hotpink": [255, 105, 180],
		"indianred": [205, 92, 92],
		"indigo": [75, 0, 130],
		"ivory": [255, 255, 240],
		"khaki": [240, 230, 140],
		"lavender": [230, 230, 250],
		"lavenderblush": [255, 240, 245],
		"lawngreen": [124, 252, 0],
		"lemonchiffon": [255, 250, 205],
		"lightblue": [173, 216, 230],
		"lightcoral": [240, 128, 128],
		"lightcyan": [224, 255, 255],
		"lightgoldenrodyellow": [250, 250, 210],
		"lightgray": [211, 211, 211],
		"lightgreen": [144, 238, 144],
		"lightgrey": [211, 211, 211],
		"lightpink": [255, 182, 193],
		"lightsalmon": [255, 160, 122],
		"lightseagreen": [32, 178, 170],
		"lightskyblue": [135, 206, 250],
		"lightslategray": [119, 136, 153],
		"lightslategrey": [119, 136, 153],
		"lightsteelblue": [176, 196, 222],
		"lightyellow": [255, 255, 224],
		"lime": [0, 255, 0],
		"limegreen": [50, 205, 50],
		"linen": [250, 240, 230],
		"magenta": [255, 0, 255],
		"maroon": [128, 0, 0],
		"mediumaquamarine": [102, 205, 170],
		"mediumblue": [0, 0, 205],
		"mediumorchid": [186, 85, 211],
		"mediumpurple": [147, 112, 219],
		"mediumseagreen": [60, 179, 113],
		"mediumslateblue": [123, 104, 238],
		"mediumspringgreen": [0, 250, 154],
		"mediumturquoise": [72, 209, 204],
		"mediumvioletred": [199, 21, 133],
		"midnightblue": [25, 25, 112],
		"mintcream": [245, 255, 250],
		"mistyrose": [255, 228, 225],
		"moccasin": [255, 228, 181],
		"navajowhite": [255, 222, 173],
		"navy": [0, 0, 128],
		"oldlace": [253, 245, 230],
		"olive": [128, 128, 0],
		"olivedrab": [107, 142, 35],
		"orange": [255, 165, 0],
		"orangered": [255, 69, 0],
		"orchid": [218, 112, 214],
		"palegoldenrod": [238, 232, 170],
		"palegreen": [152, 251, 152],
		"paleturquoise": [175, 238, 238],
		"palevioletred": [219, 112, 147],
		"papayawhip": [255, 239, 213],
		"peachpuff": [255, 218, 185],
		"peru": [205, 133, 63],
		"pink": [255, 192, 203],
		"plum": [221, 160, 221],
		"powderblue": [176, 224, 230],
		"purple": [128, 0, 128],
		"rebeccapurple": [102, 51, 153],
		"red": [255, 0, 0],
		"rosybrown": [188, 143, 143],
		"royalblue": [65, 105, 225],
		"saddlebrown": [139, 69, 19],
		"salmon": [250, 128, 114],
		"sandybrown": [244, 164, 96],
		"seagreen": [46, 139, 87],
		"seashell": [255, 245, 238],
		"sienna": [160, 82, 45],
		"silver": [192, 192, 192],
		"skyblue": [135, 206, 235],
		"slateblue": [106, 90, 205],
		"slategray": [112, 128, 144],
		"slategrey": [112, 128, 144],
		"snow": [255, 250, 250],
		"springgreen": [0, 255, 127],
		"steelblue": [70, 130, 180],
		"tan": [210, 180, 140],
		"teal": [0, 128, 128],
		"thistle": [216, 191, 216],
		"tomato": [255, 99, 71],
		"turquoise": [64, 224, 208],
		"violet": [238, 130, 238],
		"wheat": [245, 222, 179],
		"white": [255, 255, 255],
		"whitesmoke": [245, 245, 245],
		"yellow": [255, 255, 0],
		"yellowgreen": [154, 205, 50]
	};
	return colorName;
}

/* MIT license */

var conversions;
var hasRequiredConversions;

function requireConversions () {
	if (hasRequiredConversions) return conversions;
	hasRequiredConversions = 1;
	/* eslint-disable no-mixed-operators */
	const cssKeywords = requireColorName();

	// NOTE: conversions should only return primitive values (i.e. arrays, or
	//       values that give correct `typeof` results).
	//       do not use box values types (i.e. Number(), String(), etc.)

	const reverseKeywords = {};
	for (const key of Object.keys(cssKeywords)) {
		reverseKeywords[cssKeywords[key]] = key;
	}

	const convert = {
		rgb: {channels: 3, labels: 'rgb'},
		hsl: {channels: 3, labels: 'hsl'},
		hsv: {channels: 3, labels: 'hsv'},
		hwb: {channels: 3, labels: 'hwb'},
		cmyk: {channels: 4, labels: 'cmyk'},
		xyz: {channels: 3, labels: 'xyz'},
		lab: {channels: 3, labels: 'lab'},
		lch: {channels: 3, labels: 'lch'},
		hex: {channels: 1, labels: ['hex']},
		keyword: {channels: 1, labels: ['keyword']},
		ansi16: {channels: 1, labels: ['ansi16']},
		ansi256: {channels: 1, labels: ['ansi256']},
		hcg: {channels: 3, labels: ['h', 'c', 'g']},
		apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
		gray: {channels: 1, labels: ['gray']}
	};

	conversions = convert;

	// Hide .channels and .labels properties
	for (const model of Object.keys(convert)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		const {channels, labels} = convert[model];
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}

	convert.rgb.hsl = function (rgb) {
		const r = rgb[0] / 255;
		const g = rgb[1] / 255;
		const b = rgb[2] / 255;
		const min = Math.min(r, g, b);
		const max = Math.max(r, g, b);
		const delta = max - min;
		let h;
		let s;

		if (max === min) {
			h = 0;
		} else if (r === max) {
			h = (g - b) / delta;
		} else if (g === max) {
			h = 2 + (b - r) / delta;
		} else if (b === max) {
			h = 4 + (r - g) / delta;
		}

		h = Math.min(h * 60, 360);

		if (h < 0) {
			h += 360;
		}

		const l = (min + max) / 2;

		if (max === min) {
			s = 0;
		} else if (l <= 0.5) {
			s = delta / (max + min);
		} else {
			s = delta / (2 - max - min);
		}

		return [h, s * 100, l * 100];
	};

	convert.rgb.hsv = function (rgb) {
		let rdif;
		let gdif;
		let bdif;
		let h;
		let s;

		const r = rgb[0] / 255;
		const g = rgb[1] / 255;
		const b = rgb[2] / 255;
		const v = Math.max(r, g, b);
		const diff = v - Math.min(r, g, b);
		const diffc = function (c) {
			return (v - c) / 6 / diff + 1 / 2;
		};

		if (diff === 0) {
			h = 0;
			s = 0;
		} else {
			s = diff / v;
			rdif = diffc(r);
			gdif = diffc(g);
			bdif = diffc(b);

			if (r === v) {
				h = bdif - gdif;
			} else if (g === v) {
				h = (1 / 3) + rdif - bdif;
			} else if (b === v) {
				h = (2 / 3) + gdif - rdif;
			}

			if (h < 0) {
				h += 1;
			} else if (h > 1) {
				h -= 1;
			}
		}

		return [
			h * 360,
			s * 100,
			v * 100
		];
	};

	convert.rgb.hwb = function (rgb) {
		const r = rgb[0];
		const g = rgb[1];
		let b = rgb[2];
		const h = convert.rgb.hsl(rgb)[0];
		const w = 1 / 255 * Math.min(r, Math.min(g, b));

		b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

		return [h, w * 100, b * 100];
	};

	convert.rgb.cmyk = function (rgb) {
		const r = rgb[0] / 255;
		const g = rgb[1] / 255;
		const b = rgb[2] / 255;

		const k = Math.min(1 - r, 1 - g, 1 - b);
		const c = (1 - r - k) / (1 - k) || 0;
		const m = (1 - g - k) / (1 - k) || 0;
		const y = (1 - b - k) / (1 - k) || 0;

		return [c * 100, m * 100, y * 100, k * 100];
	};

	function comparativeDistance(x, y) {
		/*
			See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
		*/
		return (
			((x[0] - y[0]) ** 2) +
			((x[1] - y[1]) ** 2) +
			((x[2] - y[2]) ** 2)
		);
	}

	convert.rgb.keyword = function (rgb) {
		const reversed = reverseKeywords[rgb];
		if (reversed) {
			return reversed;
		}

		let currentClosestDistance = Infinity;
		let currentClosestKeyword;

		for (const keyword of Object.keys(cssKeywords)) {
			const value = cssKeywords[keyword];

			// Compute comparative distance
			const distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}

		return currentClosestKeyword;
	};

	convert.keyword.rgb = function (keyword) {
		return cssKeywords[keyword];
	};

	convert.rgb.xyz = function (rgb) {
		let r = rgb[0] / 255;
		let g = rgb[1] / 255;
		let b = rgb[2] / 255;

		// Assume sRGB
		r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
		g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
		b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

		const x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
		const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
		const z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

		return [x * 100, y * 100, z * 100];
	};

	convert.rgb.lab = function (rgb) {
		const xyz = convert.rgb.xyz(rgb);
		let x = xyz[0];
		let y = xyz[1];
		let z = xyz[2];

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
		y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
		z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

		const l = (116 * y) - 16;
		const a = 500 * (x - y);
		const b = 200 * (y - z);

		return [l, a, b];
	};

	convert.hsl.rgb = function (hsl) {
		const h = hsl[0] / 360;
		const s = hsl[1] / 100;
		const l = hsl[2] / 100;
		let t2;
		let t3;
		let val;

		if (s === 0) {
			val = l * 255;
			return [val, val, val];
		}

		if (l < 0.5) {
			t2 = l * (1 + s);
		} else {
			t2 = l + s - l * s;
		}

		const t1 = 2 * l - t2;

		const rgb = [0, 0, 0];
		for (let i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * -(i - 1);
			if (t3 < 0) {
				t3++;
			}

			if (t3 > 1) {
				t3--;
			}

			if (6 * t3 < 1) {
				val = t1 + (t2 - t1) * 6 * t3;
			} else if (2 * t3 < 1) {
				val = t2;
			} else if (3 * t3 < 2) {
				val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			} else {
				val = t1;
			}

			rgb[i] = val * 255;
		}

		return rgb;
	};

	convert.hsl.hsv = function (hsl) {
		const h = hsl[0];
		let s = hsl[1] / 100;
		let l = hsl[2] / 100;
		let smin = s;
		const lmin = Math.max(l, 0.01);

		l *= 2;
		s *= (l <= 1) ? l : 2 - l;
		smin *= lmin <= 1 ? lmin : 2 - lmin;
		const v = (l + s) / 2;
		const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

		return [h, sv * 100, v * 100];
	};

	convert.hsv.rgb = function (hsv) {
		const h = hsv[0] / 60;
		const s = hsv[1] / 100;
		let v = hsv[2] / 100;
		const hi = Math.floor(h) % 6;

		const f = h - Math.floor(h);
		const p = 255 * v * (1 - s);
		const q = 255 * v * (1 - (s * f));
		const t = 255 * v * (1 - (s * (1 - f)));
		v *= 255;

		switch (hi) {
			case 0:
				return [v, t, p];
			case 1:
				return [q, v, p];
			case 2:
				return [p, v, t];
			case 3:
				return [p, q, v];
			case 4:
				return [t, p, v];
			case 5:
				return [v, p, q];
		}
	};

	convert.hsv.hsl = function (hsv) {
		const h = hsv[0];
		const s = hsv[1] / 100;
		const v = hsv[2] / 100;
		const vmin = Math.max(v, 0.01);
		let sl;
		let l;

		l = (2 - s) * v;
		const lmin = (2 - s) * vmin;
		sl = s * vmin;
		sl /= (lmin <= 1) ? lmin : 2 - lmin;
		sl = sl || 0;
		l /= 2;

		return [h, sl * 100, l * 100];
	};

	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	convert.hwb.rgb = function (hwb) {
		const h = hwb[0] / 360;
		let wh = hwb[1] / 100;
		let bl = hwb[2] / 100;
		const ratio = wh + bl;
		let f;

		// Wh + bl cant be > 1
		if (ratio > 1) {
			wh /= ratio;
			bl /= ratio;
		}

		const i = Math.floor(6 * h);
		const v = 1 - bl;
		f = 6 * h - i;

		if ((i & 0x01) !== 0) {
			f = 1 - f;
		}

		const n = wh + f * (v - wh); // Linear interpolation

		let r;
		let g;
		let b;
		/* eslint-disable max-statements-per-line,no-multi-spaces */
		switch (i) {
			default:
			case 6:
			case 0: r = v;  g = n;  b = wh; break;
			case 1: r = n;  g = v;  b = wh; break;
			case 2: r = wh; g = v;  b = n; break;
			case 3: r = wh; g = n;  b = v; break;
			case 4: r = n;  g = wh; b = v; break;
			case 5: r = v;  g = wh; b = n; break;
		}
		/* eslint-enable max-statements-per-line,no-multi-spaces */

		return [r * 255, g * 255, b * 255];
	};

	convert.cmyk.rgb = function (cmyk) {
		const c = cmyk[0] / 100;
		const m = cmyk[1] / 100;
		const y = cmyk[2] / 100;
		const k = cmyk[3] / 100;

		const r = 1 - Math.min(1, c * (1 - k) + k);
		const g = 1 - Math.min(1, m * (1 - k) + k);
		const b = 1 - Math.min(1, y * (1 - k) + k);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.rgb = function (xyz) {
		const x = xyz[0] / 100;
		const y = xyz[1] / 100;
		const z = xyz[2] / 100;
		let r;
		let g;
		let b;

		r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
		g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
		b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

		// Assume sRGB
		r = r > 0.0031308
			? ((1.055 * (r ** (1.0 / 2.4))) - 0.055)
			: r * 12.92;

		g = g > 0.0031308
			? ((1.055 * (g ** (1.0 / 2.4))) - 0.055)
			: g * 12.92;

		b = b > 0.0031308
			? ((1.055 * (b ** (1.0 / 2.4))) - 0.055)
			: b * 12.92;

		r = Math.min(Math.max(0, r), 1);
		g = Math.min(Math.max(0, g), 1);
		b = Math.min(Math.max(0, b), 1);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.lab = function (xyz) {
		let x = xyz[0];
		let y = xyz[1];
		let z = xyz[2];

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
		y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
		z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

		const l = (116 * y) - 16;
		const a = 500 * (x - y);
		const b = 200 * (y - z);

		return [l, a, b];
	};

	convert.lab.xyz = function (lab) {
		const l = lab[0];
		const a = lab[1];
		const b = lab[2];
		let x;
		let y;
		let z;

		y = (l + 16) / 116;
		x = a / 500 + y;
		z = y - b / 200;

		const y2 = y ** 3;
		const x2 = x ** 3;
		const z2 = z ** 3;
		y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
		x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
		z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

		x *= 95.047;
		y *= 100;
		z *= 108.883;

		return [x, y, z];
	};

	convert.lab.lch = function (lab) {
		const l = lab[0];
		const a = lab[1];
		const b = lab[2];
		let h;

		const hr = Math.atan2(b, a);
		h = hr * 360 / 2 / Math.PI;

		if (h < 0) {
			h += 360;
		}

		const c = Math.sqrt(a * a + b * b);

		return [l, c, h];
	};

	convert.lch.lab = function (lch) {
		const l = lch[0];
		const c = lch[1];
		const h = lch[2];

		const hr = h / 360 * 2 * Math.PI;
		const a = c * Math.cos(hr);
		const b = c * Math.sin(hr);

		return [l, a, b];
	};

	convert.rgb.ansi16 = function (args, saturation = null) {
		const [r, g, b] = args;
		let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

		value = Math.round(value / 50);

		if (value === 0) {
			return 30;
		}

		let ansi = 30
			+ ((Math.round(b / 255) << 2)
			| (Math.round(g / 255) << 1)
			| Math.round(r / 255));

		if (value === 2) {
			ansi += 60;
		}

		return ansi;
	};

	convert.hsv.ansi16 = function (args) {
		// Optimization here; we already know the value and don't need to get
		// it converted for us.
		return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
	};

	convert.rgb.ansi256 = function (args) {
		const r = args[0];
		const g = args[1];
		const b = args[2];

		// We use the extended greyscale palette here, with the exception of
		// black and white. normal palette only has 4 greyscale shades.
		if (r === g && g === b) {
			if (r < 8) {
				return 16;
			}

			if (r > 248) {
				return 231;
			}

			return Math.round(((r - 8) / 247) * 24) + 232;
		}

		const ansi = 16
			+ (36 * Math.round(r / 255 * 5))
			+ (6 * Math.round(g / 255 * 5))
			+ Math.round(b / 255 * 5);

		return ansi;
	};

	convert.ansi16.rgb = function (args) {
		let color = args % 10;

		// Handle greyscale
		if (color === 0 || color === 7) {
			if (args > 50) {
				color += 3.5;
			}

			color = color / 10.5 * 255;

			return [color, color, color];
		}

		const mult = (~~(args > 50) + 1) * 0.5;
		const r = ((color & 1) * mult) * 255;
		const g = (((color >> 1) & 1) * mult) * 255;
		const b = (((color >> 2) & 1) * mult) * 255;

		return [r, g, b];
	};

	convert.ansi256.rgb = function (args) {
		// Handle greyscale
		if (args >= 232) {
			const c = (args - 232) * 10 + 8;
			return [c, c, c];
		}

		args -= 16;

		let rem;
		const r = Math.floor(args / 36) / 5 * 255;
		const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
		const b = (rem % 6) / 5 * 255;

		return [r, g, b];
	};

	convert.rgb.hex = function (args) {
		const integer = ((Math.round(args[0]) & 0xFF) << 16)
			+ ((Math.round(args[1]) & 0xFF) << 8)
			+ (Math.round(args[2]) & 0xFF);

		const string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.hex.rgb = function (args) {
		const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
		if (!match) {
			return [0, 0, 0];
		}

		let colorString = match[0];

		if (match[0].length === 3) {
			colorString = colorString.split('').map(char => {
				return char + char;
			}).join('');
		}

		const integer = parseInt(colorString, 16);
		const r = (integer >> 16) & 0xFF;
		const g = (integer >> 8) & 0xFF;
		const b = integer & 0xFF;

		return [r, g, b];
	};

	convert.rgb.hcg = function (rgb) {
		const r = rgb[0] / 255;
		const g = rgb[1] / 255;
		const b = rgb[2] / 255;
		const max = Math.max(Math.max(r, g), b);
		const min = Math.min(Math.min(r, g), b);
		const chroma = (max - min);
		let grayscale;
		let hue;

		if (chroma < 1) {
			grayscale = min / (1 - chroma);
		} else {
			grayscale = 0;
		}

		if (chroma <= 0) {
			hue = 0;
		} else
		if (max === r) {
			hue = ((g - b) / chroma) % 6;
		} else
		if (max === g) {
			hue = 2 + (b - r) / chroma;
		} else {
			hue = 4 + (r - g) / chroma;
		}

		hue /= 6;
		hue %= 1;

		return [hue * 360, chroma * 100, grayscale * 100];
	};

	convert.hsl.hcg = function (hsl) {
		const s = hsl[1] / 100;
		const l = hsl[2] / 100;

		const c = l < 0.5 ? (2.0 * s * l) : (2.0 * s * (1.0 - l));

		let f = 0;
		if (c < 1.0) {
			f = (l - 0.5 * c) / (1.0 - c);
		}

		return [hsl[0], c * 100, f * 100];
	};

	convert.hsv.hcg = function (hsv) {
		const s = hsv[1] / 100;
		const v = hsv[2] / 100;

		const c = s * v;
		let f = 0;

		if (c < 1.0) {
			f = (v - c) / (1 - c);
		}

		return [hsv[0], c * 100, f * 100];
	};

	convert.hcg.rgb = function (hcg) {
		const h = hcg[0] / 360;
		const c = hcg[1] / 100;
		const g = hcg[2] / 100;

		if (c === 0.0) {
			return [g * 255, g * 255, g * 255];
		}

		const pure = [0, 0, 0];
		const hi = (h % 1) * 6;
		const v = hi % 1;
		const w = 1 - v;
		let mg = 0;

		/* eslint-disable max-statements-per-line */
		switch (Math.floor(hi)) {
			case 0:
				pure[0] = 1; pure[1] = v; pure[2] = 0; break;
			case 1:
				pure[0] = w; pure[1] = 1; pure[2] = 0; break;
			case 2:
				pure[0] = 0; pure[1] = 1; pure[2] = v; break;
			case 3:
				pure[0] = 0; pure[1] = w; pure[2] = 1; break;
			case 4:
				pure[0] = v; pure[1] = 0; pure[2] = 1; break;
			default:
				pure[0] = 1; pure[1] = 0; pure[2] = w;
		}
		/* eslint-enable max-statements-per-line */

		mg = (1.0 - c) * g;

		return [
			(c * pure[0] + mg) * 255,
			(c * pure[1] + mg) * 255,
			(c * pure[2] + mg) * 255
		];
	};

	convert.hcg.hsv = function (hcg) {
		const c = hcg[1] / 100;
		const g = hcg[2] / 100;

		const v = c + g * (1.0 - c);
		let f = 0;

		if (v > 0.0) {
			f = c / v;
		}

		return [hcg[0], f * 100, v * 100];
	};

	convert.hcg.hsl = function (hcg) {
		const c = hcg[1] / 100;
		const g = hcg[2] / 100;

		const l = g * (1.0 - c) + 0.5 * c;
		let s = 0;

		if (l > 0.0 && l < 0.5) {
			s = c / (2 * l);
		} else
		if (l >= 0.5 && l < 1.0) {
			s = c / (2 * (1 - l));
		}

		return [hcg[0], s * 100, l * 100];
	};

	convert.hcg.hwb = function (hcg) {
		const c = hcg[1] / 100;
		const g = hcg[2] / 100;
		const v = c + g * (1.0 - c);
		return [hcg[0], (v - c) * 100, (1 - v) * 100];
	};

	convert.hwb.hcg = function (hwb) {
		const w = hwb[1] / 100;
		const b = hwb[2] / 100;
		const v = 1 - b;
		const c = v - w;
		let g = 0;

		if (c < 1) {
			g = (v - c) / (1 - c);
		}

		return [hwb[0], c * 100, g * 100];
	};

	convert.apple.rgb = function (apple) {
		return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
	};

	convert.rgb.apple = function (rgb) {
		return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
	};

	convert.gray.rgb = function (args) {
		return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
	};

	convert.gray.hsl = function (args) {
		return [0, 0, args[0]];
	};

	convert.gray.hsv = convert.gray.hsl;

	convert.gray.hwb = function (gray) {
		return [0, 100, gray[0]];
	};

	convert.gray.cmyk = function (gray) {
		return [0, 0, 0, gray[0]];
	};

	convert.gray.lab = function (gray) {
		return [gray[0], 0, 0];
	};

	convert.gray.hex = function (gray) {
		const val = Math.round(gray[0] / 100 * 255) & 0xFF;
		const integer = (val << 16) + (val << 8) + val;

		const string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.rgb.gray = function (rgb) {
		const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
		return [val / 255 * 100];
	};
	return conversions;
}

var route;
var hasRequiredRoute;

function requireRoute () {
	if (hasRequiredRoute) return route;
	hasRequiredRoute = 1;
	const conversions = requireConversions();

	/*
		This function routes a model to all other models.

		all functions that are routed have a property `.conversion` attached
		to the returned synthetic function. This property is an array
		of strings, each with the steps in between the 'from' and 'to'
		color models (inclusive).

		conversions that are not possible simply are not included.
	*/

	function buildGraph() {
		const graph = {};
		// https://jsperf.com/object-keys-vs-for-in-with-closure/3
		const models = Object.keys(conversions);

		for (let len = models.length, i = 0; i < len; i++) {
			graph[models[i]] = {
				// http://jsperf.com/1-vs-infinity
				// micro-opt, but this is simple.
				distance: -1,
				parent: null
			};
		}

		return graph;
	}

	// https://en.wikipedia.org/wiki/Breadth-first_search
	function deriveBFS(fromModel) {
		const graph = buildGraph();
		const queue = [fromModel]; // Unshift -> queue -> pop

		graph[fromModel].distance = 0;

		while (queue.length) {
			const current = queue.pop();
			const adjacents = Object.keys(conversions[current]);

			for (let len = adjacents.length, i = 0; i < len; i++) {
				const adjacent = adjacents[i];
				const node = graph[adjacent];

				if (node.distance === -1) {
					node.distance = graph[current].distance + 1;
					node.parent = current;
					queue.unshift(adjacent);
				}
			}
		}

		return graph;
	}

	function link(from, to) {
		return function (args) {
			return to(from(args));
		};
	}

	function wrapConversion(toModel, graph) {
		const path = [graph[toModel].parent, toModel];
		let fn = conversions[graph[toModel].parent][toModel];

		let cur = graph[toModel].parent;
		while (graph[cur].parent) {
			path.unshift(graph[cur].parent);
			fn = link(conversions[graph[cur].parent][cur], fn);
			cur = graph[cur].parent;
		}

		fn.conversion = path;
		return fn;
	}

	route = function (fromModel) {
		const graph = deriveBFS(fromModel);
		const conversion = {};

		const models = Object.keys(graph);
		for (let len = models.length, i = 0; i < len; i++) {
			const toModel = models[i];
			const node = graph[toModel];

			if (node.parent === null) {
				// No possible conversion, or this node is the source model.
				continue;
			}

			conversion[toModel] = wrapConversion(toModel, graph);
		}

		return conversion;
	};
	return route;
}

var colorConvert;
var hasRequiredColorConvert;

function requireColorConvert () {
	if (hasRequiredColorConvert) return colorConvert;
	hasRequiredColorConvert = 1;
	const conversions = requireConversions();
	const route = requireRoute();

	const convert = {};

	const models = Object.keys(conversions);

	function wrapRaw(fn) {
		const wrappedFn = function (...args) {
			const arg0 = args[0];
			if (arg0 === undefined || arg0 === null) {
				return arg0;
			}

			if (arg0.length > 1) {
				args = arg0;
			}

			return fn(args);
		};

		// Preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}

		return wrappedFn;
	}

	function wrapRounded(fn) {
		const wrappedFn = function (...args) {
			const arg0 = args[0];

			if (arg0 === undefined || arg0 === null) {
				return arg0;
			}

			if (arg0.length > 1) {
				args = arg0;
			}

			const result = fn(args);

			// We're assuming the result is an array here.
			// see notice in conversions.js; don't use box types
			// in conversion functions.
			if (typeof result === 'object') {
				for (let len = result.length, i = 0; i < len; i++) {
					result[i] = Math.round(result[i]);
				}
			}

			return result;
		};

		// Preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}

		return wrappedFn;
	}

	models.forEach(fromModel => {
		convert[fromModel] = {};

		Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
		Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

		const routes = route(fromModel);
		const routeModels = Object.keys(routes);

		routeModels.forEach(toModel => {
			const fn = routes[toModel];

			convert[fromModel][toModel] = wrapRounded(fn);
			convert[fromModel][toModel].raw = wrapRaw(fn);
		});
	});

	colorConvert = convert;
	return colorConvert;
}

ansiStyles$1.exports;

(function (module) {

	const wrapAnsi16 = (fn, offset) => (...args) => {
		const code = fn(...args);
		return `\u001B[${code + offset}m`;
	};

	const wrapAnsi256 = (fn, offset) => (...args) => {
		const code = fn(...args);
		return `\u001B[${38 + offset};5;${code}m`;
	};

	const wrapAnsi16m = (fn, offset) => (...args) => {
		const rgb = fn(...args);
		return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
	};

	const ansi2ansi = n => n;
	const rgb2rgb = (r, g, b) => [r, g, b];

	const setLazyProperty = (object, property, get) => {
		Object.defineProperty(object, property, {
			get: () => {
				const value = get();

				Object.defineProperty(object, property, {
					value,
					enumerable: true,
					configurable: true
				});

				return value;
			},
			enumerable: true,
			configurable: true
		});
	};

	/** @type {typeof import('color-convert')} */
	let colorConvert;
	const makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
		if (colorConvert === undefined) {
			colorConvert = requireColorConvert();
		}

		const offset = isBackground ? 10 : 0;
		const styles = {};

		for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
			const name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace;
			if (sourceSpace === targetSpace) {
				styles[name] = wrap(identity, offset);
			} else if (typeof suite === 'object') {
				styles[name] = wrap(suite[targetSpace], offset);
			}
		}

		return styles;
	};

	function assembleStyles() {
		const codes = new Map();
		const styles = {
			modifier: {
				reset: [0, 0],
				// 21 isn't widely supported and 22 does the same thing
				bold: [1, 22],
				dim: [2, 22],
				italic: [3, 23],
				underline: [4, 24],
				inverse: [7, 27],
				hidden: [8, 28],
				strikethrough: [9, 29]
			},
			color: {
				black: [30, 39],
				red: [31, 39],
				green: [32, 39],
				yellow: [33, 39],
				blue: [34, 39],
				magenta: [35, 39],
				cyan: [36, 39],
				white: [37, 39],

				// Bright color
				blackBright: [90, 39],
				redBright: [91, 39],
				greenBright: [92, 39],
				yellowBright: [93, 39],
				blueBright: [94, 39],
				magentaBright: [95, 39],
				cyanBright: [96, 39],
				whiteBright: [97, 39]
			},
			bgColor: {
				bgBlack: [40, 49],
				bgRed: [41, 49],
				bgGreen: [42, 49],
				bgYellow: [43, 49],
				bgBlue: [44, 49],
				bgMagenta: [45, 49],
				bgCyan: [46, 49],
				bgWhite: [47, 49],

				// Bright color
				bgBlackBright: [100, 49],
				bgRedBright: [101, 49],
				bgGreenBright: [102, 49],
				bgYellowBright: [103, 49],
				bgBlueBright: [104, 49],
				bgMagentaBright: [105, 49],
				bgCyanBright: [106, 49],
				bgWhiteBright: [107, 49]
			}
		};

		// Alias bright black as gray (and grey)
		styles.color.gray = styles.color.blackBright;
		styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
		styles.color.grey = styles.color.blackBright;
		styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;

		for (const [groupName, group] of Object.entries(styles)) {
			for (const [styleName, style] of Object.entries(group)) {
				styles[styleName] = {
					open: `\u001B[${style[0]}m`,
					close: `\u001B[${style[1]}m`
				};

				group[styleName] = styles[styleName];

				codes.set(style[0], style[1]);
			}

			Object.defineProperty(styles, groupName, {
				value: group,
				enumerable: false
			});
		}

		Object.defineProperty(styles, 'codes', {
			value: codes,
			enumerable: false
		});

		styles.color.close = '\u001B[39m';
		styles.bgColor.close = '\u001B[49m';

		setLazyProperty(styles.color, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false));
		setLazyProperty(styles.color, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false));
		setLazyProperty(styles.color, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false));
		setLazyProperty(styles.bgColor, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true));
		setLazyProperty(styles.bgColor, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true));
		setLazyProperty(styles.bgColor, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true));

		return styles;
	}

	// Make the export immutable
	Object.defineProperty(module, 'exports', {
		enumerable: true,
		get: assembleStyles
	}); 
} (ansiStyles$1));

var ansiStylesExports = ansiStyles$1.exports;

var hasFlag$1 = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};

const os = require$$0;
const tty = require$$1;
const hasFlag = hasFlag$1;

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

var supportsColor_1 = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty.isatty(1))),
	stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};

const stringReplaceAll$1 = (string, substring, replacer) => {
	let index = string.indexOf(substring);
	if (index === -1) {
		return string;
	}

	const substringLength = substring.length;
	let endIndex = 0;
	let returnValue = '';
	do {
		returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
		endIndex = index + substringLength;
		index = string.indexOf(substring, endIndex);
	} while (index !== -1);

	returnValue += string.substr(endIndex);
	return returnValue;
};

const stringEncaseCRLFWithFirstIndex$1 = (string, prefix, postfix, index) => {
	let endIndex = 0;
	let returnValue = '';
	do {
		const gotCR = string[index - 1] === '\r';
		returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? '\r\n' : '\n') + postfix;
		endIndex = index + 1;
		index = string.indexOf('\n', endIndex);
	} while (index !== -1);

	returnValue += string.substr(endIndex);
	return returnValue;
};

var util = {
	stringReplaceAll: stringReplaceAll$1,
	stringEncaseCRLFWithFirstIndex: stringEncaseCRLFWithFirstIndex$1
};

var templates;
var hasRequiredTemplates;

function requireTemplates () {
	if (hasRequiredTemplates) return templates;
	hasRequiredTemplates = 1;
	const TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
	const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
	const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
	const ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;

	const ESCAPES = new Map([
		['n', '\n'],
		['r', '\r'],
		['t', '\t'],
		['b', '\b'],
		['f', '\f'],
		['v', '\v'],
		['0', '\0'],
		['\\', '\\'],
		['e', '\u001B'],
		['a', '\u0007']
	]);

	function unescape(c) {
		const u = c[0] === 'u';
		const bracket = c[1] === '{';

		if ((u && !bracket && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
			return String.fromCharCode(parseInt(c.slice(1), 16));
		}

		if (u && bracket) {
			return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
		}

		return ESCAPES.get(c) || c;
	}

	function parseArguments(name, arguments_) {
		const results = [];
		const chunks = arguments_.trim().split(/\s*,\s*/g);
		let matches;

		for (const chunk of chunks) {
			const number = Number(chunk);
			if (!Number.isNaN(number)) {
				results.push(number);
			} else if ((matches = chunk.match(STRING_REGEX))) {
				results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
			} else {
				throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
			}
		}

		return results;
	}

	function parseStyle(style) {
		STYLE_REGEX.lastIndex = 0;

		const results = [];
		let matches;

		while ((matches = STYLE_REGEX.exec(style)) !== null) {
			const name = matches[1];

			if (matches[2]) {
				const args = parseArguments(name, matches[2]);
				results.push([name].concat(args));
			} else {
				results.push([name]);
			}
		}

		return results;
	}

	function buildStyle(chalk, styles) {
		const enabled = {};

		for (const layer of styles) {
			for (const style of layer.styles) {
				enabled[style[0]] = layer.inverse ? null : style.slice(1);
			}
		}

		let current = chalk;
		for (const [styleName, styles] of Object.entries(enabled)) {
			if (!Array.isArray(styles)) {
				continue;
			}

			if (!(styleName in current)) {
				throw new Error(`Unknown Chalk style: ${styleName}`);
			}

			current = styles.length > 0 ? current[styleName](...styles) : current[styleName];
		}

		return current;
	}

	templates = (chalk, temporary) => {
		const styles = [];
		const chunks = [];
		let chunk = [];

		// eslint-disable-next-line max-params
		temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
			if (escapeCharacter) {
				chunk.push(unescape(escapeCharacter));
			} else if (style) {
				const string = chunk.join('');
				chunk = [];
				chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
				styles.push({inverse, styles: parseStyle(style)});
			} else if (close) {
				if (styles.length === 0) {
					throw new Error('Found extraneous } in Chalk template literal');
				}

				chunks.push(buildStyle(chalk, styles)(chunk.join('')));
				chunk = [];
				styles.pop();
			} else {
				chunk.push(character);
			}
		});

		chunks.push(chunk.join(''));

		if (styles.length > 0) {
			const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
			throw new Error(errMessage);
		}

		return chunks.join('');
	};
	return templates;
}

const ansiStyles = ansiStylesExports;
const {stdout: stdoutColor, stderr: stderrColor} = supportsColor_1;
const {
	stringReplaceAll,
	stringEncaseCRLFWithFirstIndex
} = util;

const {isArray} = Array;

// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = [
	'ansi',
	'ansi',
	'ansi256',
	'ansi16m'
];

const styles = Object.create(null);

const applyOptions = (object, options = {}) => {
	if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
		throw new Error('The `level` option should be an integer from 0 to 3');
	}

	// Detect level if not set manually
	const colorLevel = stdoutColor ? stdoutColor.level : 0;
	object.level = options.level === undefined ? colorLevel : options.level;
};

class ChalkClass {
	constructor(options) {
		// eslint-disable-next-line no-constructor-return
		return chalkFactory(options);
	}
}

const chalkFactory = options => {
	const chalk = {};
	applyOptions(chalk, options);

	chalk.template = (...arguments_) => chalkTag(chalk.template, ...arguments_);

	Object.setPrototypeOf(chalk, Chalk.prototype);
	Object.setPrototypeOf(chalk.template, chalk);

	chalk.template.constructor = () => {
		throw new Error('`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.');
	};

	chalk.template.Instance = ChalkClass;

	return chalk.template;
};

function Chalk(options) {
	return chalkFactory(options);
}

for (const [styleName, style] of Object.entries(ansiStyles)) {
	styles[styleName] = {
		get() {
			const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
			Object.defineProperty(this, styleName, {value: builder});
			return builder;
		}
	};
}

styles.visible = {
	get() {
		const builder = createBuilder(this, this._styler, true);
		Object.defineProperty(this, 'visible', {value: builder});
		return builder;
	}
};

const usedModels = ['rgb', 'hex', 'keyword', 'hsl', 'hsv', 'hwb', 'ansi', 'ansi256'];

for (const model of usedModels) {
	styles[model] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
				return createBuilder(this, styler, this._isEmpty);
			};
		}
	};
}

for (const model of usedModels) {
	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
				return createBuilder(this, styler, this._isEmpty);
			};
		}
	};
}

const proto = Object.defineProperties(() => {}, {
	...styles,
	level: {
		enumerable: true,
		get() {
			return this._generator.level;
		},
		set(level) {
			this._generator.level = level;
		}
	}
});

const createStyler = (open, close, parent) => {
	let openAll;
	let closeAll;
	if (parent === undefined) {
		openAll = open;
		closeAll = close;
	} else {
		openAll = parent.openAll + open;
		closeAll = close + parent.closeAll;
	}

	return {
		open,
		close,
		openAll,
		closeAll,
		parent
	};
};

const createBuilder = (self, _styler, _isEmpty) => {
	const builder = (...arguments_) => {
		if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
			// Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
			return applyStyle(builder, chalkTag(builder, ...arguments_));
		}

		// Single argument is hot path, implicit coercion is faster than anything
		// eslint-disable-next-line no-implicit-coercion
		return applyStyle(builder, (arguments_.length === 1) ? ('' + arguments_[0]) : arguments_.join(' '));
	};

	// We alter the prototype because we must return a function, but there is
	// no way to create a function with a different prototype
	Object.setPrototypeOf(builder, proto);

	builder._generator = self;
	builder._styler = _styler;
	builder._isEmpty = _isEmpty;

	return builder;
};

const applyStyle = (self, string) => {
	if (self.level <= 0 || !string) {
		return self._isEmpty ? '' : string;
	}

	let styler = self._styler;

	if (styler === undefined) {
		return string;
	}

	const {openAll, closeAll} = styler;
	if (string.indexOf('\u001B') !== -1) {
		while (styler !== undefined) {
			// Replace any instances already present with a re-opening code
			// otherwise only the part of the string until said closing code
			// will be colored, and the rest will simply be 'plain'.
			string = stringReplaceAll(string, styler.close, styler.open);

			styler = styler.parent;
		}
	}

	// We can move both next actions out of loop, because remaining actions in loop won't have
	// any/visible effect on parts we add here. Close the styling before a linebreak and reopen
	// after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
	const lfIndex = string.indexOf('\n');
	if (lfIndex !== -1) {
		string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
	}

	return openAll + string + closeAll;
};

let template;
const chalkTag = (chalk, ...strings) => {
	const [firstString] = strings;

	if (!isArray(firstString) || !isArray(firstString.raw)) {
		// If chalk() was called by itself or with a string,
		// return the string itself as a string.
		return strings.join(' ');
	}

	const arguments_ = strings.slice(1);
	const parts = [firstString.raw[0]];

	for (let i = 1; i < firstString.length; i++) {
		parts.push(
			String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'),
			String(firstString.raw[i])
		);
	}

	if (template === undefined) {
		template = requireTemplates();
	}

	return template(chalk, parts.join(''));
};

Object.defineProperties(Chalk.prototype, styles);

const chalk = Chalk(); // eslint-disable-line new-cap
chalk.supportsColor = stdoutColor;
chalk.stderr = Chalk({level: stderrColor ? stderrColor.level : 0}); // eslint-disable-line new-cap
chalk.stderr.supportsColor = stderrColor;

var source = chalk;

var chalk$1 = /*@__PURE__*/getDefaultExportFromCjs(source);

var utils$1 = {};

var ansiColors = {exports: {}};

var symbols = {exports: {}};

var hasRequiredSymbols$1;

function requireSymbols$1 () {
	if (hasRequiredSymbols$1) return symbols.exports;
	hasRequiredSymbols$1 = 1;
	(function (module) {

		const isHyper = typeof process !== 'undefined' && process.env.TERM_PROGRAM === 'Hyper';
		const isWindows = typeof process !== 'undefined' && process.platform === 'win32';
		const isLinux = typeof process !== 'undefined' && process.platform === 'linux';

		const common = {
		  ballotDisabled: '☒',
		  ballotOff: '☐',
		  ballotOn: '☑',
		  bullet: '•',
		  bulletWhite: '◦',
		  fullBlock: '█',
		  heart: '❤',
		  identicalTo: '≡',
		  line: '─',
		  mark: '※',
		  middot: '·',
		  minus: '－',
		  multiplication: '×',
		  obelus: '÷',
		  pencilDownRight: '✎',
		  pencilRight: '✏',
		  pencilUpRight: '✐',
		  percent: '%',
		  pilcrow2: '❡',
		  pilcrow: '¶',
		  plusMinus: '±',
		  question: '?',
		  section: '§',
		  starsOff: '☆',
		  starsOn: '★',
		  upDownArrow: '↕'
		};

		const windows = Object.assign({}, common, {
		  check: '√',
		  cross: '×',
		  ellipsisLarge: '...',
		  ellipsis: '...',
		  info: 'i',
		  questionSmall: '?',
		  pointer: '>',
		  pointerSmall: '»',
		  radioOff: '( )',
		  radioOn: '(*)',
		  warning: '‼'
		});

		const other = Object.assign({}, common, {
		  ballotCross: '✘',
		  check: '✔',
		  cross: '✖',
		  ellipsisLarge: '⋯',
		  ellipsis: '…',
		  info: 'ℹ',
		  questionFull: '？',
		  questionSmall: '﹖',
		  pointer: isLinux ? '▸' : '❯',
		  pointerSmall: isLinux ? '‣' : '›',
		  radioOff: '◯',
		  radioOn: '◉',
		  warning: '⚠'
		});

		module.exports = (isWindows && !isHyper) ? windows : other;
		Reflect.defineProperty(module.exports, 'common', { enumerable: false, value: common });
		Reflect.defineProperty(module.exports, 'windows', { enumerable: false, value: windows });
		Reflect.defineProperty(module.exports, 'other', { enumerable: false, value: other }); 
	} (symbols));
	return symbols.exports;
}

const isObject = val => val !== null && typeof val === 'object' && !Array.isArray(val);

/* eslint-disable no-control-regex */
// this is a modified version of https://github.com/chalk/ansi-regex (MIT License)
const ANSI_REGEX = /[\u001b\u009b][[\]#;?()]*(?:(?:(?:[^\W_]*;?[^\W_]*)\u0007)|(?:(?:[0-9]{1,4}(;[0-9]{0,4})*)?[~0-9=<>cf-nqrtyA-PRZ]))/g;

const hasColor = () => {
  if (typeof process !== 'undefined') {
    return process.env.FORCE_COLOR !== '0';
  }
  return false;
};

const create = () => {
  const colors = {
    enabled: hasColor(),
    visible: true,
    styles: {},
    keys: {}
  };

  const ansi = style => {
    let open = style.open = `\u001b[${style.codes[0]}m`;
    let close = style.close = `\u001b[${style.codes[1]}m`;
    let regex = style.regex = new RegExp(`\\u001b\\[${style.codes[1]}m`, 'g');
    style.wrap = (input, newline) => {
      if (input.includes(close)) input = input.replace(regex, close + open);
      let output = open + input + close;
      // see https://github.com/chalk/chalk/pull/92, thanks to the
      // chalk contributors for this fix. However, we've confirmed that
      // this issue is also present in Windows terminals
      return newline ? output.replace(/\r*\n/g, `${close}$&${open}`) : output;
    };
    return style;
  };

  const wrap = (style, input, newline) => {
    return typeof style === 'function' ? style(input) : style.wrap(input, newline);
  };

  const style = (input, stack) => {
    if (input === '' || input == null) return '';
    if (colors.enabled === false) return input;
    if (colors.visible === false) return '';
    let str = '' + input;
    let nl = str.includes('\n');
    let n = stack.length;
    if (n > 0 && stack.includes('unstyle')) {
      stack = [...new Set(['unstyle', ...stack])].reverse();
    }
    while (n-- > 0) str = wrap(colors.styles[stack[n]], str, nl);
    return str;
  };

  const define = (name, codes, type) => {
    colors.styles[name] = ansi({ name, codes });
    let keys = colors.keys[type] || (colors.keys[type] = []);
    keys.push(name);

    Reflect.defineProperty(colors, name, {
      configurable: true,
      enumerable: true,
      set(value) {
        colors.alias(name, value);
      },
      get() {
        let color = input => style(input, color.stack);
        Reflect.setPrototypeOf(color, colors);
        color.stack = this.stack ? this.stack.concat(name) : [name];
        return color;
      }
    });
  };

  define('reset', [0, 0], 'modifier');
  define('bold', [1, 22], 'modifier');
  define('dim', [2, 22], 'modifier');
  define('italic', [3, 23], 'modifier');
  define('underline', [4, 24], 'modifier');
  define('inverse', [7, 27], 'modifier');
  define('hidden', [8, 28], 'modifier');
  define('strikethrough', [9, 29], 'modifier');

  define('black', [30, 39], 'color');
  define('red', [31, 39], 'color');
  define('green', [32, 39], 'color');
  define('yellow', [33, 39], 'color');
  define('blue', [34, 39], 'color');
  define('magenta', [35, 39], 'color');
  define('cyan', [36, 39], 'color');
  define('white', [37, 39], 'color');
  define('gray', [90, 39], 'color');
  define('grey', [90, 39], 'color');

  define('bgBlack', [40, 49], 'bg');
  define('bgRed', [41, 49], 'bg');
  define('bgGreen', [42, 49], 'bg');
  define('bgYellow', [43, 49], 'bg');
  define('bgBlue', [44, 49], 'bg');
  define('bgMagenta', [45, 49], 'bg');
  define('bgCyan', [46, 49], 'bg');
  define('bgWhite', [47, 49], 'bg');

  define('blackBright', [90, 39], 'bright');
  define('redBright', [91, 39], 'bright');
  define('greenBright', [92, 39], 'bright');
  define('yellowBright', [93, 39], 'bright');
  define('blueBright', [94, 39], 'bright');
  define('magentaBright', [95, 39], 'bright');
  define('cyanBright', [96, 39], 'bright');
  define('whiteBright', [97, 39], 'bright');

  define('bgBlackBright', [100, 49], 'bgBright');
  define('bgRedBright', [101, 49], 'bgBright');
  define('bgGreenBright', [102, 49], 'bgBright');
  define('bgYellowBright', [103, 49], 'bgBright');
  define('bgBlueBright', [104, 49], 'bgBright');
  define('bgMagentaBright', [105, 49], 'bgBright');
  define('bgCyanBright', [106, 49], 'bgBright');
  define('bgWhiteBright', [107, 49], 'bgBright');

  colors.ansiRegex = ANSI_REGEX;
  colors.hasColor = colors.hasAnsi = str => {
    colors.ansiRegex.lastIndex = 0;
    return typeof str === 'string' && str !== '' && colors.ansiRegex.test(str);
  };

  colors.alias = (name, color) => {
    let fn = typeof color === 'string' ? colors[color] : color;

    if (typeof fn !== 'function') {
      throw new TypeError('Expected alias to be the name of an existing color (string) or a function');
    }

    if (!fn.stack) {
      Reflect.defineProperty(fn, 'name', { value: name });
      colors.styles[name] = fn;
      fn.stack = [name];
    }

    Reflect.defineProperty(colors, name, {
      configurable: true,
      enumerable: true,
      set(value) {
        colors.alias(name, value);
      },
      get() {
        let color = input => style(input, color.stack);
        Reflect.setPrototypeOf(color, colors);
        color.stack = this.stack ? this.stack.concat(fn.stack) : fn.stack;
        return color;
      }
    });
  };

  colors.theme = custom => {
    if (!isObject(custom)) throw new TypeError('Expected theme to be an object');
    for (let name of Object.keys(custom)) {
      colors.alias(name, custom[name]);
    }
    return colors;
  };

  colors.alias('unstyle', str => {
    if (typeof str === 'string' && str !== '') {
      colors.ansiRegex.lastIndex = 0;
      return str.replace(colors.ansiRegex, '');
    }
    return '';
  });

  colors.alias('noop', str => str);
  colors.none = colors.clear = colors.noop;

  colors.stripColor = colors.unstyle;
  colors.symbols = requireSymbols$1();
  colors.define = define;
  return colors;
};

ansiColors.exports = create();
ansiColors.exports.create = create;

var ansiColorsExports = ansiColors.exports;

(function (exports) {

	const toString = Object.prototype.toString;
	const colors = ansiColorsExports;
	let called = false;
	let fns = [];

	const complements = {
	  'yellow': 'blue',
	  'cyan': 'red',
	  'green': 'magenta',
	  'black': 'white',
	  'blue': 'yellow',
	  'red': 'cyan',
	  'magenta': 'green',
	  'white': 'black'
	};

	exports.longest = (arr, prop) => {
	  return arr.reduce((a, v) => Math.max(a, prop ? v[prop].length : v.length), 0);
	};

	exports.hasColor = str => !!str && colors.hasColor(str);

	const isObject = exports.isObject = val => {
	  return val !== null && typeof val === 'object' && !Array.isArray(val);
	};

	exports.nativeType = val => {
	  return toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, '');
	};

	exports.isAsyncFn = val => {
	  return exports.nativeType(val) === 'asyncfunction';
	};

	exports.isPrimitive = val => {
	  return val != null && typeof val !== 'object' && typeof val !== 'function';
	};

	exports.resolve = (context, value, ...rest) => {
	  if (typeof value === 'function') {
	    return value.call(context, ...rest);
	  }
	  return value;
	};

	exports.scrollDown = (choices = []) => [...choices.slice(1), choices[0]];
	exports.scrollUp = (choices = []) => [choices.pop(), ...choices];

	exports.reorder = (arr = []) => {
	  let res = arr.slice();
	  res.sort((a, b) => {
	    if (a.index > b.index) return 1;
	    if (a.index < b.index) return -1;
	    return 0;
	  });
	  return res;
	};

	exports.swap = (arr, index, pos) => {
	  let len = arr.length;
	  let idx = pos === len ? 0 : pos < 0 ? len - 1 : pos;
	  let choice = arr[index];
	  arr[index] = arr[idx];
	  arr[idx] = choice;
	};

	exports.width = (stream, fallback = 80) => {
	  let columns = (stream && stream.columns) ? stream.columns : fallback;
	  if (stream && typeof stream.getWindowSize === 'function') {
	    columns = stream.getWindowSize()[0];
	  }
	  if (process.platform === 'win32') {
	    return columns - 1;
	  }
	  return columns;
	};

	exports.height = (stream, fallback = 20) => {
	  let rows = (stream && stream.rows) ? stream.rows : fallback;
	  if (stream && typeof stream.getWindowSize === 'function') {
	    rows = stream.getWindowSize()[1];
	  }
	  return rows;
	};

	exports.wordWrap = (str, options = {}) => {
	  if (!str) return str;

	  if (typeof options === 'number') {
	    options = { width: options };
	  }

	  let { indent = '', newline = ('\n' + indent), width = 80 } = options;
	  let spaces = (newline + indent).match(/[^\S\n]/g) || [];
	  width -= spaces.length;
	  let source = `.{1,${width}}([\\s\\u200B]+|$)|[^\\s\\u200B]+?([\\s\\u200B]+|$)`;
	  let output = str.trim();
	  let regex = new RegExp(source, 'g');
	  let lines = output.match(regex) || [];
	  lines = lines.map(line => line.replace(/\n$/, ''));
	  if (options.padEnd) lines = lines.map(line => line.padEnd(width, ' '));
	  if (options.padStart) lines = lines.map(line => line.padStart(width, ' '));
	  return indent + lines.join(newline);
	};

	exports.unmute = color => {
	  let name = color.stack.find(n => colors.keys.color.includes(n));
	  if (name) {
	    return colors[name];
	  }
	  let bg = color.stack.find(n => n.slice(2) === 'bg');
	  if (bg) {
	    return colors[name.slice(2)];
	  }
	  return str => str;
	};

	exports.pascal = str => str ? str[0].toUpperCase() + str.slice(1) : '';

	exports.inverse = color => {
	  if (!color || !color.stack) return color;
	  let name = color.stack.find(n => colors.keys.color.includes(n));
	  if (name) {
	    let col = colors['bg' + exports.pascal(name)];
	    return col ? col.black : color;
	  }
	  let bg = color.stack.find(n => n.slice(0, 2) === 'bg');
	  if (bg) {
	    return colors[bg.slice(2).toLowerCase()] || color;
	  }
	  return colors.none;
	};

	exports.complement = color => {
	  if (!color || !color.stack) return color;
	  let name = color.stack.find(n => colors.keys.color.includes(n));
	  let bg = color.stack.find(n => n.slice(0, 2) === 'bg');
	  if (name && !bg) {
	    return colors[complements[name] || name];
	  }
	  if (bg) {
	    let lower = bg.slice(2).toLowerCase();
	    let comp = complements[lower];
	    if (!comp) return color;
	    return colors['bg' + exports.pascal(comp)] || color;
	  }
	  return colors.none;
	};

	exports.meridiem = date => {
	  let hours = date.getHours();
	  let minutes = date.getMinutes();
	  let ampm = hours >= 12 ? 'pm' : 'am';
	  hours = hours % 12;
	  let hrs = hours === 0 ? 12 : hours;
	  let min = minutes < 10 ? '0' + minutes : minutes;
	  return hrs + ':' + min + ' ' + ampm;
	};

	/**
	 * Set a value on the given object.
	 * @param {Object} obj
	 * @param {String} prop
	 * @param {any} value
	 */

	exports.set = (obj = {}, prop = '', val) => {
	  return prop.split('.').reduce((acc, k, i, arr) => {
	    let value = arr.length - 1 > i ? (acc[k] || {}) : val;
	    if (!exports.isObject(value) && i < arr.length - 1) value = {};
	    return (acc[k] = value);
	  }, obj);
	};

	/**
	 * Get a value from the given object.
	 * @param {Object} obj
	 * @param {String} prop
	 */

	exports.get = (obj = {}, prop = '', fallback) => {
	  let value = obj[prop] == null
	    ? prop.split('.').reduce((acc, k) => acc && acc[k], obj)
	    : obj[prop];
	  return value == null ? fallback : value;
	};

	exports.mixin = (target, b) => {
	  if (!isObject(target)) return b;
	  if (!isObject(b)) return target;
	  for (let key of Object.keys(b)) {
	    let desc = Object.getOwnPropertyDescriptor(b, key);
	    if (desc.hasOwnProperty('value')) {
	      if (target.hasOwnProperty(key) && isObject(desc.value)) {
	        let existing = Object.getOwnPropertyDescriptor(target, key);
	        if (isObject(existing.value)) {
	          target[key] = exports.merge({}, target[key], b[key]);
	        } else {
	          Reflect.defineProperty(target, key, desc);
	        }
	      } else {
	        Reflect.defineProperty(target, key, desc);
	      }
	    } else {
	      Reflect.defineProperty(target, key, desc);
	    }
	  }
	  return target;
	};

	exports.merge = (...args) => {
	  let target = {};
	  for (let ele of args) exports.mixin(target, ele);
	  return target;
	};

	exports.mixinEmitter = (obj, emitter) => {
	  let proto = emitter.constructor.prototype;
	  for (let key of Object.keys(proto)) {
	    let val = proto[key];
	    if (typeof val === 'function') {
	      exports.define(obj, key, val.bind(emitter));
	    } else {
	      exports.define(obj, key, val);
	    }
	  }
	};

	exports.onExit = callback => {
	  const onExit = (quit, code) => {
	    if (called) return;

	    called = true;
	    fns.forEach(fn => fn());

	    if (quit === true) {
	      process.exit(128 + code);
	    }
	  };

	  if (fns.length === 0) {
	    process.once('SIGTERM', onExit.bind(null, true, 15));
	    process.once('SIGINT', onExit.bind(null, true, 2));
	    process.once('exit', onExit);
	  }

	  fns.push(callback);
	};

	exports.define = (obj, key, value) => {
	  Reflect.defineProperty(obj, key, { value });
	};

	exports.defineExport = (obj, key, fn) => {
	  let custom;
	  Reflect.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    set(val) {
	      custom = val;
	    },
	    get() {
	      return custom ? custom() : fn();
	    }
	  });
	}; 
} (utils$1));

var combos = {};

var hasRequiredCombos;

function requireCombos () {
	if (hasRequiredCombos) return combos;
	hasRequiredCombos = 1;

	/**
	 * Actions are mappings from keypress event names to method names
	 * in the prompts.
	 */

	combos.ctrl = {
	  a: 'first',
	  b: 'backward',
	  c: 'cancel',
	  d: 'deleteForward',
	  e: 'last',
	  f: 'forward',
	  g: 'reset',
	  i: 'tab',
	  k: 'cutForward',
	  l: 'reset',
	  n: 'newItem',
	  m: 'cancel',
	  j: 'submit',
	  p: 'search',
	  r: 'remove',
	  s: 'save',
	  u: 'undo',
	  w: 'cutLeft',
	  x: 'toggleCursor',
	  v: 'paste'
	};

	combos.shift = {
	  up: 'shiftUp',
	  down: 'shiftDown',
	  left: 'shiftLeft',
	  right: 'shiftRight',
	  tab: 'prev'
	};

	combos.fn = {
	  up: 'pageUp',
	  down: 'pageDown',
	  left: 'pageLeft',
	  right: 'pageRight',
	  delete: 'deleteForward'
	};

	// <alt> on Windows
	combos.option = {
	  b: 'backward',
	  f: 'forward',
	  d: 'cutRight',
	  left: 'cutLeft',
	  up: 'altUp',
	  down: 'altDown'
	};

	combos.keys = {
	  pageup: 'pageUp', // <fn>+<up> (mac), <Page Up> (windows)
	  pagedown: 'pageDown', // <fn>+<down> (mac), <Page Down> (windows)
	  home: 'home', // <fn>+<left> (mac), <home> (windows)
	  end: 'end', // <fn>+<right> (mac), <end> (windows)
	  cancel: 'cancel',
	  delete: 'deleteForward',
	  backspace: 'delete',
	  down: 'down',
	  enter: 'submit',
	  escape: 'cancel',
	  left: 'left',
	  space: 'space',
	  number: 'number',
	  return: 'submit',
	  right: 'right',
	  tab: 'next',
	  up: 'up'
	};
	return combos;
}

var keypress_1;
var hasRequiredKeypress;

function requireKeypress () {
	if (hasRequiredKeypress) return keypress_1;
	hasRequiredKeypress = 1;

	const readline = require$$0$1;
	const combos = requireCombos();

	/* eslint-disable no-control-regex */
	const metaKeyCodeRe = /^(?:\x1b)([a-zA-Z0-9])$/;
	const fnKeyRe = /^(?:\x1b+)(O|N|\[|\[\[)(?:(\d+)(?:;(\d+))?([~^$])|(?:1;)?(\d+)?([a-zA-Z]))/;
	const keyName = {
	    /* xterm/gnome ESC O letter */
	    'OP': 'f1',
	    'OQ': 'f2',
	    'OR': 'f3',
	    'OS': 'f4',
	    /* xterm/rxvt ESC [ number ~ */
	    '[11~': 'f1',
	    '[12~': 'f2',
	    '[13~': 'f3',
	    '[14~': 'f4',
	    /* from Cygwin and used in libuv */
	    '[[A': 'f1',
	    '[[B': 'f2',
	    '[[C': 'f3',
	    '[[D': 'f4',
	    '[[E': 'f5',
	    /* common */
	    '[15~': 'f5',
	    '[17~': 'f6',
	    '[18~': 'f7',
	    '[19~': 'f8',
	    '[20~': 'f9',
	    '[21~': 'f10',
	    '[23~': 'f11',
	    '[24~': 'f12',
	    /* xterm ESC [ letter */
	    '[A': 'up',
	    '[B': 'down',
	    '[C': 'right',
	    '[D': 'left',
	    '[E': 'clear',
	    '[F': 'end',
	    '[H': 'home',
	    /* xterm/gnome ESC O letter */
	    'OA': 'up',
	    'OB': 'down',
	    'OC': 'right',
	    'OD': 'left',
	    'OE': 'clear',
	    'OF': 'end',
	    'OH': 'home',
	    /* xterm/rxvt ESC [ number ~ */
	    '[1~': 'home',
	    '[2~': 'insert',
	    '[3~': 'delete',
	    '[4~': 'end',
	    '[5~': 'pageup',
	    '[6~': 'pagedown',
	    /* putty */
	    '[[5~': 'pageup',
	    '[[6~': 'pagedown',
	    /* rxvt */
	    '[7~': 'home',
	    '[8~': 'end',
	    /* rxvt keys with modifiers */
	    '[a': 'up',
	    '[b': 'down',
	    '[c': 'right',
	    '[d': 'left',
	    '[e': 'clear',

	    '[2$': 'insert',
	    '[3$': 'delete',
	    '[5$': 'pageup',
	    '[6$': 'pagedown',
	    '[7$': 'home',
	    '[8$': 'end',

	    'Oa': 'up',
	    'Ob': 'down',
	    'Oc': 'right',
	    'Od': 'left',
	    'Oe': 'clear',

	    '[2^': 'insert',
	    '[3^': 'delete',
	    '[5^': 'pageup',
	    '[6^': 'pagedown',
	    '[7^': 'home',
	    '[8^': 'end',
	    /* misc. */
	    '[Z': 'tab',
	};

	function isShiftKey(code) {
	    return ['[a', '[b', '[c', '[d', '[e', '[2$', '[3$', '[5$', '[6$', '[7$', '[8$', '[Z'].includes(code)
	}

	function isCtrlKey(code) {
	    return [ 'Oa', 'Ob', 'Oc', 'Od', 'Oe', '[2^', '[3^', '[5^', '[6^', '[7^', '[8^'].includes(code)
	}

	const keypress = (s = '', event = {}) => {
	  let parts;
	  let key = {
	    name: event.name,
	    ctrl: false,
	    meta: false,
	    shift: false,
	    option: false,
	    sequence: s,
	    raw: s,
	    ...event
	  };

	  if (Buffer.isBuffer(s)) {
	    if (s[0] > 127 && s[1] === void 0) {
	      s[0] -= 128;
	      s = '\x1b' + String(s);
	    } else {
	      s = String(s);
	    }
	  } else if (s !== void 0 && typeof s !== 'string') {
	    s = String(s);
	  } else if (!s) {
	    s = key.sequence || '';
	  }

	  key.sequence = key.sequence || s || key.name;

	  if (s === '\r') {
	    // carriage return
	    key.raw = void 0;
	    key.name = 'return';
	  } else if (s === '\n') {
	    // enter, should have been called linefeed
	    key.name = 'enter';
	  } else if (s === '\t') {
	    // tab
	    key.name = 'tab';
	  } else if (s === '\b' || s === '\x7f' || s === '\x1b\x7f' || s === '\x1b\b') {
	    // backspace or ctrl+h
	    key.name = 'backspace';
	    key.meta = s.charAt(0) === '\x1b';
	  } else if (s === '\x1b' || s === '\x1b\x1b') {
	    // escape key
	    key.name = 'escape';
	    key.meta = s.length === 2;
	  } else if (s === ' ' || s === '\x1b ') {
	    key.name = 'space';
	    key.meta = s.length === 2;
	  } else if (s <= '\x1a') {
	    // ctrl+letter
	    key.name = String.fromCharCode(s.charCodeAt(0) + 'a'.charCodeAt(0) - 1);
	    key.ctrl = true;
	  } else if (s.length === 1 && s >= '0' && s <= '9') {
	    // number
	    key.name = 'number';
	  } else if (s.length === 1 && s >= 'a' && s <= 'z') {
	    // lowercase letter
	    key.name = s;
	  } else if (s.length === 1 && s >= 'A' && s <= 'Z') {
	    // shift+letter
	    key.name = s.toLowerCase();
	    key.shift = true;
	  } else if ((parts = metaKeyCodeRe.exec(s))) {
	    // meta+character key
	    key.meta = true;
	    key.shift = /^[A-Z]$/.test(parts[1]);
	  } else if ((parts = fnKeyRe.exec(s))) {
	    let segs = [...s];

	    if (segs[0] === '\u001b' && segs[1] === '\u001b') {
	      key.option = true;
	    }

	    // ansi escape sequence
	    // reassemble the key code leaving out leading \x1b's,
	    // the modifier key bitflag and any meaningless "1;" sequence
	    let code = [parts[1], parts[2], parts[4], parts[6]].filter(Boolean).join('');
	    let modifier = (parts[3] || parts[5] || 1) - 1;

	    // Parse the key modifier
	    key.ctrl = !!(modifier & 4);
	    key.meta = !!(modifier & 10);
	    key.shift = !!(modifier & 1);
	    key.code = code;

	    key.name = keyName[code];
	    key.shift = isShiftKey(code) || key.shift;
	    key.ctrl = isCtrlKey(code) || key.ctrl;
	  }
	  return key;
	};

	keypress.listen = (options = {}, onKeypress) => {
	  let { stdin } = options;

	  if (!stdin || (stdin !== process.stdin && !stdin.isTTY)) {
	    throw new Error('Invalid stream passed');
	  }

	  let rl = readline.createInterface({ terminal: true, input: stdin });
	  readline.emitKeypressEvents(stdin, rl);

	  let on = (buf, key) => onKeypress(buf, keypress(buf, key), rl);
	  let isRaw = stdin.isRaw;

	  if (stdin.isTTY) stdin.setRawMode(true);
	  stdin.on('keypress', on);
	  rl.resume();

	  let off = () => {
	    if (stdin.isTTY) stdin.setRawMode(isRaw);
	    stdin.removeListener('keypress', on);
	    rl.pause();
	    rl.close();
	  };

	  return off;
	};

	keypress.action = (buf, key, customActions) => {
	  let obj = { ...combos, ...customActions };
	  if (key.ctrl) {
	    key.action = obj.ctrl[key.name];
	    return key;
	  }

	  if (key.option && obj.option) {
	    key.action = obj.option[key.name];
	    return key;
	  }

	  if (key.shift) {
	    key.action = obj.shift[key.name];
	    return key;
	  }

	  key.action = obj.keys[key.name];
	  return key;
	};

	keypress_1 = keypress;
	return keypress_1;
}

var timer;
var hasRequiredTimer;

function requireTimer () {
	if (hasRequiredTimer) return timer;
	hasRequiredTimer = 1;

	timer = prompt => {
	  prompt.timers = prompt.timers || {};

	  let timers = prompt.options.timers;
	  if (!timers) return;

	  for (let key of Object.keys(timers)) {
	    let opts = timers[key];
	    if (typeof opts === 'number') {
	      opts = { interval: opts };
	    }
	    create(prompt, key, opts);
	  }
	};

	function create(prompt, name, options = {}) {
	  let timer = prompt.timers[name] = { name, start: Date.now(), ms: 0, tick: 0 };
	  let ms = options.interval || 120;
	  timer.frames = options.frames || [];
	  timer.loading = true;

	  let interval = setInterval(() => {
	    timer.ms = Date.now() - timer.start;
	    timer.tick++;
	    prompt.render();
	  }, ms);

	  timer.stop = () => {
	    timer.loading = false;
	    clearInterval(interval);
	  };

	  Reflect.defineProperty(timer, 'interval', { value: interval });
	  prompt.once('close', () => timer.stop());
	  return timer.stop;
	}
	return timer;
}

var state;
var hasRequiredState;

function requireState () {
	if (hasRequiredState) return state;
	hasRequiredState = 1;

	const { define, width } = utils$1;

	class State {
	  constructor(prompt) {
	    let options = prompt.options;
	    define(this, '_prompt', prompt);
	    this.type = prompt.type;
	    this.name = prompt.name;
	    this.message = '';
	    this.header = '';
	    this.footer = '';
	    this.error = '';
	    this.hint = '';
	    this.input = '';
	    this.cursor = 0;
	    this.index = 0;
	    this.lines = 0;
	    this.tick = 0;
	    this.prompt = '';
	    this.buffer = '';
	    this.width = width(options.stdout || process.stdout);
	    Object.assign(this, options);
	    this.name = this.name || this.message;
	    this.message = this.message || this.name;
	    this.symbols = prompt.symbols;
	    this.styles = prompt.styles;
	    this.required = new Set();
	    this.cancelled = false;
	    this.submitted = false;
	  }

	  clone() {
	    let state = { ...this };
	    state.status = this.status;
	    state.buffer = Buffer.from(state.buffer);
	    delete state.clone;
	    return state;
	  }

	  set color(val) {
	    this._color = val;
	  }
	  get color() {
	    let styles = this.prompt.styles;
	    if (this.cancelled) return styles.cancelled;
	    if (this.submitted) return styles.submitted;
	    let color = this._color || styles[this.status];
	    return typeof color === 'function' ? color : styles.pending;
	  }

	  set loading(value) {
	    this._loading = value;
	  }
	  get loading() {
	    if (typeof this._loading === 'boolean') return this._loading;
	    if (this.loadingChoices) return 'choices';
	    return false;
	  }

	  get status() {
	    if (this.cancelled) return 'cancelled';
	    if (this.submitted) return 'submitted';
	    return 'pending';
	  }
	}

	state = State;
	return state;
}

var styles_1;
var hasRequiredStyles;

function requireStyles () {
	if (hasRequiredStyles) return styles_1;
	hasRequiredStyles = 1;

	const utils = utils$1;
	const colors = ansiColorsExports;

	const styles = {
	  default: colors.noop,
	  noop: colors.noop,

	  /**
	   * Modifiers
	   */

	  set inverse(custom) {
	    this._inverse = custom;
	  },
	  get inverse() {
	    return this._inverse || utils.inverse(this.primary);
	  },

	  set complement(custom) {
	    this._complement = custom;
	  },
	  get complement() {
	    return this._complement || utils.complement(this.primary);
	  },

	  /**
	   * Main color
	   */

	  primary: colors.cyan,

	  /**
	   * Main palette
	   */

	  success: colors.green,
	  danger: colors.magenta,
	  strong: colors.bold,
	  warning: colors.yellow,
	  muted: colors.dim,
	  disabled: colors.gray,
	  dark: colors.dim.gray,
	  underline: colors.underline,

	  set info(custom) {
	    this._info = custom;
	  },
	  get info() {
	    return this._info || this.primary;
	  },

	  set em(custom) {
	    this._em = custom;
	  },
	  get em() {
	    return this._em || this.primary.underline;
	  },

	  set heading(custom) {
	    this._heading = custom;
	  },
	  get heading() {
	    return this._heading || this.muted.underline;
	  },

	  /**
	   * Statuses
	   */

	  set pending(custom) {
	    this._pending = custom;
	  },
	  get pending() {
	    return this._pending || this.primary;
	  },

	  set submitted(custom) {
	    this._submitted = custom;
	  },
	  get submitted() {
	    return this._submitted || this.success;
	  },

	  set cancelled(custom) {
	    this._cancelled = custom;
	  },
	  get cancelled() {
	    return this._cancelled || this.danger;
	  },

	  /**
	   * Special styling
	   */

	  set typing(custom) {
	    this._typing = custom;
	  },
	  get typing() {
	    return this._typing || this.dim;
	  },

	  set placeholder(custom) {
	    this._placeholder = custom;
	  },
	  get placeholder() {
	    return this._placeholder || this.primary.dim;
	  },

	  set highlight(custom) {
	    this._highlight = custom;
	  },
	  get highlight() {
	    return this._highlight || this.inverse;
	  }
	};

	styles.merge = (options = {}) => {
	  if (options.styles && typeof options.styles.enabled === 'boolean') {
	    colors.enabled = options.styles.enabled;
	  }
	  if (options.styles && typeof options.styles.visible === 'boolean') {
	    colors.visible = options.styles.visible;
	  }

	  let result = utils.merge({}, styles, options.styles);
	  delete result.merge;

	  for (let key of Object.keys(colors)) {
	    if (!result.hasOwnProperty(key)) {
	      Reflect.defineProperty(result, key, { get: () => colors[key] });
	    }
	  }

	  for (let key of Object.keys(colors.styles)) {
	    if (!result.hasOwnProperty(key)) {
	      Reflect.defineProperty(result, key, { get: () => colors[key] });
	    }
	  }
	  return result;
	};

	styles_1 = styles;
	return styles_1;
}

var symbols_1;
var hasRequiredSymbols;

function requireSymbols () {
	if (hasRequiredSymbols) return symbols_1;
	hasRequiredSymbols = 1;

	const isWindows = process.platform === 'win32';
	const colors = ansiColorsExports;
	const utils = utils$1;

	const symbols = {
	  ...colors.symbols,
	  upDownDoubleArrow: '⇕',
	  upDownDoubleArrow2: '⬍',
	  upDownArrow: '↕',
	  asterisk: '*',
	  asterism: '⁂',
	  bulletWhite: '◦',
	  electricArrow: '⌁',
	  ellipsisLarge: '⋯',
	  ellipsisSmall: '…',
	  fullBlock: '█',
	  identicalTo: '≡',
	  indicator: colors.symbols.check,
	  leftAngle: '‹',
	  mark: '※',
	  minus: '−',
	  multiplication: '×',
	  obelus: '÷',
	  percent: '%',
	  pilcrow: '¶',
	  pilcrow2: '❡',
	  pencilUpRight: '✐',
	  pencilDownRight: '✎',
	  pencilRight: '✏',
	  plus: '+',
	  plusMinus: '±',
	  pointRight: '☞',
	  rightAngle: '›',
	  section: '§',
	  hexagon: { off: '⬡', on: '⬢', disabled: '⬢' },
	  ballot: { on: '☑', off: '☐', disabled: '☒' },
	  stars: { on: '★', off: '☆', disabled: '☆' },
	  folder: { on: '▼', off: '▶', disabled: '▶' },
	  prefix: {
	    pending: colors.symbols.question,
	    submitted: colors.symbols.check,
	    cancelled: colors.symbols.cross
	  },
	  separator: {
	    pending: colors.symbols.pointerSmall,
	    submitted: colors.symbols.middot,
	    cancelled: colors.symbols.middot
	  },
	  radio: {
	    off: isWindows ? '( )' : '◯',
	    on: isWindows ? '(*)' : '◉',
	    disabled: isWindows ? '(|)' : 'Ⓘ'
	  },
	  numbers: ['⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩', '⑪', '⑫', '⑬', '⑭', '⑮', '⑯', '⑰', '⑱', '⑲', '⑳', '㉑', '㉒', '㉓', '㉔', '㉕', '㉖', '㉗', '㉘', '㉙', '㉚', '㉛', '㉜', '㉝', '㉞', '㉟', '㊱', '㊲', '㊳', '㊴', '㊵', '㊶', '㊷', '㊸', '㊹', '㊺', '㊻', '㊼', '㊽', '㊾', '㊿']
	};

	symbols.merge = options => {
	  let result = utils.merge({}, colors.symbols, symbols, options.symbols);
	  delete result.merge;
	  return result;
	};

	symbols_1 = symbols;
	return symbols_1;
}

var theme;
var hasRequiredTheme;

function requireTheme () {
	if (hasRequiredTheme) return theme;
	hasRequiredTheme = 1;

	const styles = requireStyles();
	const symbols = requireSymbols();
	const utils = utils$1;

	theme = prompt => {
	  prompt.options = utils.merge({}, prompt.options.theme, prompt.options);
	  prompt.symbols = symbols.merge(prompt.options);
	  prompt.styles = styles.merge(prompt.options);
	};
	return theme;
}

var ansi = {exports: {}};

var hasRequiredAnsi;

function requireAnsi () {
	if (hasRequiredAnsi) return ansi.exports;
	hasRequiredAnsi = 1;
	(function (module, exports) {

		const isTerm = process.env.TERM_PROGRAM === 'Apple_Terminal';
		const colors = ansiColorsExports;
		const utils = utils$1;
		const ansi = module.exports = exports;
		const ESC = '\u001b[';
		const BEL = '\u0007';
		let hidden = false;

		const code = ansi.code = {
		  bell: BEL,
		  beep: BEL,
		  beginning: `${ESC}G`,
		  down: `${ESC}J`,
		  esc: ESC,
		  getPosition: `${ESC}6n`,
		  hide: `${ESC}?25l`,
		  line: `${ESC}2K`,
		  lineEnd: `${ESC}K`,
		  lineStart: `${ESC}1K`,
		  restorePosition: ESC + (isTerm ? '8' : 'u'),
		  savePosition: ESC + (isTerm ? '7' : 's'),
		  screen: `${ESC}2J`,
		  show: `${ESC}?25h`,
		  up: `${ESC}1J`
		};

		const cursor = ansi.cursor = {
		  get hidden() {
		    return hidden;
		  },

		  hide() {
		    hidden = true;
		    return code.hide;
		  },
		  show() {
		    hidden = false;
		    return code.show;
		  },

		  forward: (count = 1) => `${ESC}${count}C`,
		  backward: (count = 1) => `${ESC}${count}D`,
		  nextLine: (count = 1) => `${ESC}E`.repeat(count),
		  prevLine: (count = 1) => `${ESC}F`.repeat(count),

		  up: (count = 1) => count ? `${ESC}${count}A` : '',
		  down: (count = 1) => count ? `${ESC}${count}B` : '',
		  right: (count = 1) => count ? `${ESC}${count}C` : '',
		  left: (count = 1) => count ? `${ESC}${count}D` : '',

		  to(x, y) {
		    return y ? `${ESC}${y + 1};${x + 1}H` : `${ESC}${x + 1}G`;
		  },

		  move(x = 0, y = 0) {
		    let res = '';
		    res += (x < 0) ? cursor.left(-x) : (x > 0) ? cursor.right(x) : '';
		    res += (y < 0) ? cursor.up(-y) : (y > 0) ? cursor.down(y) : '';
		    return res;
		  },

		  restore(state = {}) {
		    let { after, cursor, initial, input, prompt, size, value } = state;
		    initial = utils.isPrimitive(initial) ? String(initial) : '';
		    input = utils.isPrimitive(input) ? String(input) : '';
		    value = utils.isPrimitive(value) ? String(value) : '';

		    if (size) {
		      let codes = ansi.cursor.up(size) + ansi.cursor.to(prompt.length);
		      let diff = input.length - cursor;
		      if (diff > 0) {
		        codes += ansi.cursor.left(diff);
		      }
		      return codes;
		    }

		    if (value || after) {
		      let pos = (!input && !!initial) ? -initial.length : -input.length + cursor;
		      if (after) pos -= after.length;
		      if (input === '' && initial && !prompt.includes(initial)) {
		        pos += initial.length;
		      }
		      return ansi.cursor.move(pos);
		    }
		  }
		};

		const erase = ansi.erase = {
		  screen: code.screen,
		  up: code.up,
		  down: code.down,
		  line: code.line,
		  lineEnd: code.lineEnd,
		  lineStart: code.lineStart,
		  lines(n) {
		    let str = '';
		    for (let i = 0; i < n; i++) {
		      str += ansi.erase.line + (i < n - 1 ? ansi.cursor.up(1) : '');
		    }
		    if (n) str += ansi.code.beginning;
		    return str;
		  }
		};

		ansi.clear = (input = '', columns = process.stdout.columns) => {
		  if (!columns) return erase.line + cursor.to(0);
		  let width = str => [...colors.unstyle(str)].length;
		  let lines = input.split(/\r?\n/);
		  let rows = 0;
		  for (let line of lines) {
		    rows += 1 + Math.floor(Math.max(width(line) - 1, 0) / columns);
		  }
		  return (erase.line + cursor.prevLine()).repeat(rows - 1) + erase.line + cursor.to(0);
		}; 
	} (ansi, ansi.exports));
	return ansi.exports;
}

var prompt;
var hasRequiredPrompt;

function requirePrompt () {
	if (hasRequiredPrompt) return prompt;
	hasRequiredPrompt = 1;

	const Events = require$$0$2;
	const colors = ansiColorsExports;
	const keypress = requireKeypress();
	const timer = requireTimer();
	const State = requireState();
	const theme = requireTheme();
	const utils = utils$1;
	const ansi = requireAnsi();

	/**
	 * Base class for creating a new Prompt.
	 * @param {Object} `options` Question object.
	 */

	class Prompt extends Events {
	  constructor(options = {}) {
	    super();
	    this.name = options.name;
	    this.type = options.type;
	    this.options = options;
	    theme(this);
	    timer(this);
	    this.state = new State(this);
	    this.initial = [options.initial, options.default].find(v => v != null);
	    this.stdout = options.stdout || process.stdout;
	    this.stdin = options.stdin || process.stdin;
	    this.scale = options.scale || 1;
	    this.term = this.options.term || process.env.TERM_PROGRAM;
	    this.margin = margin(this.options.margin);
	    this.setMaxListeners(0);
	    setOptions(this);
	  }

	  async keypress(input, event = {}) {
	    this.keypressed = true;
	    let key = keypress.action(input, keypress(input, event), this.options.actions);
	    this.state.keypress = key;
	    this.emit('keypress', input, key);
	    this.emit('state', this.state.clone());
	    let fn = this.options[key.action] || this[key.action] || this.dispatch;
	    if (typeof fn === 'function') {
	      return await fn.call(this, input, key);
	    }
	    this.alert();
	  }

	  alert() {
	    delete this.state.alert;
	    if (this.options.show === false) {
	      this.emit('alert');
	    } else {
	      this.stdout.write(ansi.code.beep);
	    }
	  }

	  cursorHide() {
	    this.stdout.write(ansi.cursor.hide());
	    utils.onExit(() => this.cursorShow());
	  }

	  cursorShow() {
	    this.stdout.write(ansi.cursor.show());
	  }

	  write(str) {
	    if (!str) return;
	    if (this.stdout && this.state.show !== false) {
	      this.stdout.write(str);
	    }
	    this.state.buffer += str;
	  }

	  clear(lines = 0) {
	    let buffer = this.state.buffer;
	    this.state.buffer = '';
	    if ((!buffer && !lines) || this.options.show === false) return;
	    this.stdout.write(ansi.cursor.down(lines) + ansi.clear(buffer, this.width));
	  }

	  restore() {
	    if (this.state.closed || this.options.show === false) return;

	    let { prompt, after, rest } = this.sections();
	    let { cursor, initial = '', input = '', value = '' } = this;

	    let size = this.state.size = rest.length;
	    let state = { after, cursor, initial, input, prompt, size, value };
	    let codes = ansi.cursor.restore(state);
	    if (codes) {
	      this.stdout.write(codes);
	    }
	  }

	  sections() {
	    let { buffer, input, prompt } = this.state;
	    prompt = colors.unstyle(prompt);
	    let buf = colors.unstyle(buffer);
	    let idx = buf.indexOf(prompt);
	    let header = buf.slice(0, idx);
	    let rest = buf.slice(idx);
	    let lines = rest.split('\n');
	    let first = lines[0];
	    let last = lines[lines.length - 1];
	    let promptLine = prompt + (input ? ' ' + input : '');
	    let len = promptLine.length;
	    let after = len < first.length ? first.slice(len + 1) : '';
	    return { header, prompt: first, after, rest: lines.slice(1), last };
	  }

	  async submit() {
	    this.state.submitted = true;
	    this.state.validating = true;

	    // this will only be called when the prompt is directly submitted
	    // without initializing, i.e. when the prompt is skipped, etc. Otherwize,
	    // "options.onSubmit" is will be handled by the "initialize()" method.
	    if (this.options.onSubmit) {
	      await this.options.onSubmit.call(this, this.name, this.value, this);
	    }

	    let result = this.state.error || await this.validate(this.value, this.state);
	    if (result !== true) {
	      let error = '\n' + this.symbols.pointer + ' ';

	      if (typeof result === 'string') {
	        error += result.trim();
	      } else {
	        error += 'Invalid input';
	      }

	      this.state.error = '\n' + this.styles.danger(error);
	      this.state.submitted = false;
	      await this.render();
	      await this.alert();
	      this.state.validating = false;
	      this.state.error = void 0;
	      return;
	    }

	    this.state.validating = false;
	    await this.render();
	    await this.close();

	    this.value = await this.result(this.value);
	    this.emit('submit', this.value);
	  }

	  async cancel(err) {
	    this.state.cancelled = this.state.submitted = true;

	    await this.render();
	    await this.close();

	    if (typeof this.options.onCancel === 'function') {
	      await this.options.onCancel.call(this, this.name, this.value, this);
	    }

	    this.emit('cancel', await this.error(err));
	  }

	  async close() {
	    this.state.closed = true;

	    try {
	      let sections = this.sections();
	      let lines = Math.ceil(sections.prompt.length / this.width);
	      if (sections.rest) {
	        this.write(ansi.cursor.down(sections.rest.length));
	      }
	      this.write('\n'.repeat(lines));
	    } catch (err) { /* do nothing */ }

	    this.emit('close');
	  }

	  start() {
	    if (!this.stop && this.options.show !== false) {
	      this.stop = keypress.listen(this, this.keypress.bind(this));
	      this.once('close', this.stop);
	    }
	  }

	  async skip() {
	    this.skipped = this.options.skip === true;
	    if (typeof this.options.skip === 'function') {
	      this.skipped = await this.options.skip.call(this, this.name, this.value);
	    }
	    return this.skipped;
	  }

	  async initialize() {
	    let { format, options, result } = this;

	    this.format = () => format.call(this, this.value);
	    this.result = () => result.call(this, this.value);

	    if (typeof options.initial === 'function') {
	      this.initial = await options.initial.call(this, this);
	    }

	    if (typeof options.onRun === 'function') {
	      await options.onRun.call(this, this);
	    }

	    // if "options.onSubmit" is defined, we wrap the "submit" method to guarantee
	    // that "onSubmit" will always called first thing inside the submit
	    // method, regardless of how it's handled in inheriting prompts.
	    if (typeof options.onSubmit === 'function') {
	      let onSubmit = options.onSubmit.bind(this);
	      let submit = this.submit.bind(this);
	      delete this.options.onSubmit;
	      this.submit = async() => {
	        await onSubmit(this.name, this.value, this);
	        return submit();
	      };
	    }

	    await this.start();
	    await this.render();
	  }

	  render() {
	    throw new Error('expected prompt to have a custom render method');
	  }

	  run() {
	    return new Promise(async(resolve, reject) => {
	      this.once('submit', resolve);
	      this.once('cancel', reject);
	      if (await this.skip()) {
	        this.render = () => {};
	        return this.submit();
	      }
	      await this.initialize();
	      this.emit('run');
	    });
	  }

	  async element(name, choice, i) {
	    let { options, state, symbols, timers } = this;
	    let timer = timers && timers[name];
	    state.timer = timer;
	    let value = options[name] || state[name] || symbols[name];
	    let val = choice && choice[name] != null ? choice[name] : await value;
	    if (val === '') return val;

	    let res = await this.resolve(val, state, choice, i);
	    if (!res && choice && choice[name]) {
	      return this.resolve(value, state, choice, i);
	    }
	    return res;
	  }

	  async prefix() {
	    let element = await this.element('prefix') || this.symbols;
	    let timer = this.timers && this.timers.prefix;
	    let state = this.state;
	    state.timer = timer;
	    if (utils.isObject(element)) element = element[state.status] || element.pending;
	    if (!utils.hasColor(element)) {
	      let style = this.styles[state.status] || this.styles.pending;
	      return style(element);
	    }
	    return element;
	  }

	  async message() {
	    let message = await this.element('message');
	    if (!utils.hasColor(message)) {
	      return this.styles.strong(message);
	    }
	    return message;
	  }

	  async separator() {
	    let element = await this.element('separator') || this.symbols;
	    let timer = this.timers && this.timers.separator;
	    let state = this.state;
	    state.timer = timer;
	    let value = element[state.status] || element.pending || state.separator;
	    let ele = await this.resolve(value, state);
	    if (utils.isObject(ele)) ele = ele[state.status] || ele.pending;
	    if (!utils.hasColor(ele)) {
	      return this.styles.muted(ele);
	    }
	    return ele;
	  }

	  async pointer(choice, i) {
	    let val = await this.element('pointer', choice, i);

	    if (typeof val === 'string' && utils.hasColor(val)) {
	      return val;
	    }

	    if (val) {
	      let styles = this.styles;
	      let focused = this.index === i;
	      let style = focused ? styles.primary : val => val;
	      let ele = await this.resolve(val[focused ? 'on' : 'off'] || val, this.state);
	      let styled = !utils.hasColor(ele) ? style(ele) : ele;
	      return focused ? styled : ' '.repeat(ele.length);
	    }
	  }

	  async indicator(choice, i) {
	    let val = await this.element('indicator', choice, i);
	    if (typeof val === 'string' && utils.hasColor(val)) {
	      return val;
	    }
	    if (val) {
	      let styles = this.styles;
	      let enabled = choice.enabled === true;
	      let style = enabled ? styles.success : styles.dark;
	      let ele = val[enabled ? 'on' : 'off'] || val;
	      return !utils.hasColor(ele) ? style(ele) : ele;
	    }
	    return '';
	  }

	  body() {
	    return null;
	  }

	  footer() {
	    if (this.state.status === 'pending') {
	      return this.element('footer');
	    }
	  }

	  header() {
	    if (this.state.status === 'pending') {
	      return this.element('header');
	    }
	  }

	  async hint() {
	    if (this.state.status === 'pending' && !this.isValue(this.state.input)) {
	      let hint = await this.element('hint');
	      if (!utils.hasColor(hint)) {
	        return this.styles.muted(hint);
	      }
	      return hint;
	    }
	  }

	  error(err) {
	    return !this.state.submitted ? (err || this.state.error) : '';
	  }

	  format(value) {
	    return value;
	  }

	  result(value) {
	    return value;
	  }

	  validate(value) {
	    if (this.options.required === true) {
	      return this.isValue(value);
	    }
	    return true;
	  }

	  isValue(value) {
	    return value != null && value !== '';
	  }

	  resolve(value, ...args) {
	    return utils.resolve(this, value, ...args);
	  }

	  get base() {
	    return Prompt.prototype;
	  }

	  get style() {
	    return this.styles[this.state.status];
	  }

	  get height() {
	    return this.options.rows || utils.height(this.stdout, 25);
	  }
	  get width() {
	    return this.options.columns || utils.width(this.stdout, 80);
	  }
	  get size() {
	    return { width: this.width, height: this.height };
	  }

	  set cursor(value) {
	    this.state.cursor = value;
	  }
	  get cursor() {
	    return this.state.cursor;
	  }

	  set input(value) {
	    this.state.input = value;
	  }
	  get input() {
	    return this.state.input;
	  }

	  set value(value) {
	    this.state.value = value;
	  }
	  get value() {
	    let { input, value } = this.state;
	    let result = [value, input].find(this.isValue.bind(this));
	    return this.isValue(result) ? result : this.initial;
	  }

	  static get prompt() {
	    return options => new this(options).run();
	  }
	}

	function setOptions(prompt) {
	  let isValidKey = key => {
	    return prompt[key] === void 0 || typeof prompt[key] === 'function';
	  };

	  let ignore = [
	    'actions',
	    'choices',
	    'initial',
	    'margin',
	    'roles',
	    'styles',
	    'symbols',
	    'theme',
	    'timers',
	    'value'
	  ];

	  let ignoreFn = [
	    'body',
	    'footer',
	    'error',
	    'header',
	    'hint',
	    'indicator',
	    'message',
	    'prefix',
	    'separator',
	    'skip'
	  ];

	  for (let key of Object.keys(prompt.options)) {
	    if (ignore.includes(key)) continue;
	    if (/^on[A-Z]/.test(key)) continue;
	    let option = prompt.options[key];
	    if (typeof option === 'function' && isValidKey(key)) {
	      if (!ignoreFn.includes(key)) {
	        prompt[key] = option.bind(prompt);
	      }
	    } else if (typeof prompt[key] !== 'function') {
	      prompt[key] = option;
	    }
	  }
	}

	function margin(value) {
	  if (typeof value === 'number') {
	    value = [value, value, value, value];
	  }
	  let arr = [].concat(value || []);
	  let pad = i => i % 2 === 0 ? '\n' : ' ';
	  let res = [];
	  for (let i = 0; i < 4; i++) {
	    let char = pad(i);
	    if (arr[i]) {
	      res.push(char.repeat(arr[i]));
	    } else {
	      res.push('');
	    }
	  }
	  return res;
	}

	prompt = Prompt;
	return prompt;
}

var prompts$1 = {};

var roles_1;
var hasRequiredRoles;

function requireRoles () {
	if (hasRequiredRoles) return roles_1;
	hasRequiredRoles = 1;

	const utils = utils$1;
	const roles = {
	  default(prompt, choice) {
	    return choice;
	  },
	  checkbox(prompt, choice) {
	    throw new Error('checkbox role is not implemented yet');
	  },
	  editable(prompt, choice) {
	    throw new Error('editable role is not implemented yet');
	  },
	  expandable(prompt, choice) {
	    throw new Error('expandable role is not implemented yet');
	  },
	  heading(prompt, choice) {
	    choice.disabled = '';
	    choice.indicator = [choice.indicator, ' '].find(v => v != null);
	    choice.message = choice.message || '';
	    return choice;
	  },
	  input(prompt, choice) {
	    throw new Error('input role is not implemented yet');
	  },
	  option(prompt, choice) {
	    return roles.default(prompt, choice);
	  },
	  radio(prompt, choice) {
	    throw new Error('radio role is not implemented yet');
	  },
	  separator(prompt, choice) {
	    choice.disabled = '';
	    choice.indicator = [choice.indicator, ' '].find(v => v != null);
	    choice.message = choice.message || prompt.symbols.line.repeat(5);
	    return choice;
	  },
	  spacer(prompt, choice) {
	    return choice;
	  }
	};

	roles_1 = (name, options = {}) => {
	  let role = utils.merge({}, roles, options.roles);
	  return role[name] || role.default;
	};
	return roles_1;
}

var array;
var hasRequiredArray;

function requireArray () {
	if (hasRequiredArray) return array;
	hasRequiredArray = 1;

	const colors = ansiColorsExports;
	const Prompt = requirePrompt();
	const roles = requireRoles();
	const utils = utils$1;
	const { reorder, scrollUp, scrollDown, isObject, swap } = utils;

	class ArrayPrompt extends Prompt {
	  constructor(options) {
	    super(options);
	    this.cursorHide();
	    this.maxSelected = options.maxSelected || Infinity;
	    this.multiple = options.multiple || false;
	    this.initial = options.initial || 0;
	    this.delay = options.delay || 0;
	    this.longest = 0;
	    this.num = '';
	  }

	  async initialize() {
	    if (typeof this.options.initial === 'function') {
	      this.initial = await this.options.initial.call(this);
	    }
	    await this.reset(true);
	    await super.initialize();
	  }

	  async reset() {
	    let { choices, initial, autofocus, suggest } = this.options;
	    this.state._choices = [];
	    this.state.choices = [];

	    this.choices = await Promise.all(await this.toChoices(choices));
	    this.choices.forEach(ch => (ch.enabled = false));

	    if (typeof suggest !== 'function' && this.selectable.length === 0) {
	      throw new Error('At least one choice must be selectable');
	    }

	    if (isObject(initial)) initial = Object.keys(initial);
	    if (Array.isArray(initial)) {
	      if (autofocus != null) this.index = this.findIndex(autofocus);
	      initial.forEach(v => this.enable(this.find(v)));
	      await this.render();
	    } else {
	      if (autofocus != null) initial = autofocus;
	      if (typeof initial === 'string') initial = this.findIndex(initial);
	      if (typeof initial === 'number' && initial > -1) {
	        this.index = Math.max(0, Math.min(initial, this.choices.length));
	        this.enable(this.find(this.index));
	      }
	    }

	    if (this.isDisabled(this.focused)) {
	      await this.down();
	    }
	  }

	  async toChoices(value, parent) {
	    this.state.loadingChoices = true;
	    let choices = [];
	    let index = 0;

	    let toChoices = async(items, parent) => {
	      if (typeof items === 'function') items = await items.call(this);
	      if (items instanceof Promise) items = await items;

	      for (let i = 0; i < items.length; i++) {
	        let choice = items[i] = await this.toChoice(items[i], index++, parent);
	        choices.push(choice);

	        if (choice.choices) {
	          await toChoices(choice.choices, choice);
	        }
	      }
	      return choices;
	    };

	    return toChoices(value, parent)
	      .then(choices => {
	        this.state.loadingChoices = false;
	        return choices;
	      });
	  }

	  async toChoice(ele, i, parent) {
	    if (typeof ele === 'function') ele = await ele.call(this, this);
	    if (ele instanceof Promise) ele = await ele;
	    if (typeof ele === 'string') ele = { name: ele };

	    if (ele.normalized) return ele;
	    ele.normalized = true;

	    let origVal = ele.value;
	    let role = roles(ele.role, this.options);
	    ele = role(this, ele);

	    if (typeof ele.disabled === 'string' && !ele.hint) {
	      ele.hint = ele.disabled;
	      ele.disabled = true;
	    }

	    if (ele.disabled === true && ele.hint == null) {
	      ele.hint = '(disabled)';
	    }

	    // if the choice was already normalized, return it
	    if (ele.index != null) return ele;
	    ele.name = ele.name || ele.key || ele.title || ele.value || ele.message;
	    ele.message = ele.message || ele.name || '';
	    ele.value = [ele.value, ele.name].find(this.isValue.bind(this));

	    ele.input = '';
	    ele.index = i;
	    ele.cursor = 0;

	    utils.define(ele, 'parent', parent);
	    ele.level = parent ? parent.level + 1 : 1;
	    if (ele.indent == null) {
	      ele.indent = parent ? parent.indent + '  ' : (ele.indent || '');
	    }

	    ele.path = parent ? parent.path + '.' + ele.name : ele.name;
	    ele.enabled = !!(this.multiple && !this.isDisabled(ele) && (ele.enabled || this.isSelected(ele)));

	    if (!this.isDisabled(ele)) {
	      this.longest = Math.max(this.longest, colors.unstyle(ele.message).length);
	    }

	    // shallow clone the choice first
	    let choice = { ...ele };

	    // then allow the choice to be reset using the "original" values
	    ele.reset = (input = choice.input, value = choice.value) => {
	      for (let key of Object.keys(choice)) ele[key] = choice[key];
	      ele.input = input;
	      ele.value = value;
	    };

	    if (origVal == null && typeof ele.initial === 'function') {
	      ele.input = await ele.initial.call(this, this.state, ele, i);
	    }

	    return ele;
	  }

	  async onChoice(choice, i) {
	    this.emit('choice', choice, i, this);

	    if (typeof choice.onChoice === 'function') {
	      await choice.onChoice.call(this, this.state, choice, i);
	    }
	  }

	  async addChoice(ele, i, parent) {
	    let choice = await this.toChoice(ele, i, parent);
	    this.choices.push(choice);
	    this.index = this.choices.length - 1;
	    this.limit = this.choices.length;
	    return choice;
	  }

	  async newItem(item, i, parent) {
	    let ele = { name: 'New choice name?', editable: true, newChoice: true, ...item };
	    let choice = await this.addChoice(ele, i, parent);

	    choice.updateChoice = () => {
	      delete choice.newChoice;
	      choice.name = choice.message = choice.input;
	      choice.input = '';
	      choice.cursor = 0;
	    };

	    return this.render();
	  }

	  indent(choice) {
	    if (choice.indent == null) {
	      return choice.level > 1 ? '  '.repeat(choice.level - 1) : '';
	    }
	    return choice.indent;
	  }

	  dispatch(s, key) {
	    if (this.multiple && this[key.name]) return this[key.name]();
	    this.alert();
	  }

	  focus(choice, enabled) {
	    if (typeof enabled !== 'boolean') enabled = choice.enabled;
	    if (enabled && !choice.enabled && this.selected.length >= this.maxSelected) {
	      return this.alert();
	    }
	    this.index = choice.index;
	    choice.enabled = enabled && !this.isDisabled(choice);
	    return choice;
	  }

	  space() {
	    if (!this.multiple) return this.alert();
	    this.toggle(this.focused);
	    return this.render();
	  }

	  a() {
	    if (this.maxSelected < this.choices.length) return this.alert();
	    let enabled = this.selectable.every(ch => ch.enabled);
	    this.choices.forEach(ch => (ch.enabled = !enabled));
	    return this.render();
	  }

	  i() {
	    // don't allow choices to be inverted if it will result in
	    // more than the maximum number of allowed selected items.
	    if (this.choices.length - this.selected.length > this.maxSelected) {
	      return this.alert();
	    }
	    this.choices.forEach(ch => (ch.enabled = !ch.enabled));
	    return this.render();
	  }

	  g(choice = this.focused) {
	    if (!this.choices.some(ch => !!ch.parent)) return this.a();
	    this.toggle((choice.parent && !choice.choices) ? choice.parent : choice);
	    return this.render();
	  }

	  toggle(choice, enabled) {
	    if (!choice.enabled && this.selected.length >= this.maxSelected) {
	      return this.alert();
	    }

	    if (typeof enabled !== 'boolean') enabled = !choice.enabled;
	    choice.enabled = enabled;

	    if (choice.choices) {
	      choice.choices.forEach(ch => this.toggle(ch, enabled));
	    }

	    let parent = choice.parent;
	    while (parent) {
	      let choices = parent.choices.filter(ch => this.isDisabled(ch));
	      parent.enabled = choices.every(ch => ch.enabled === true);
	      parent = parent.parent;
	    }

	    reset(this, this.choices);
	    this.emit('toggle', choice, this);
	    return choice;
	  }

	  enable(choice) {
	    if (this.selected.length >= this.maxSelected) return this.alert();
	    choice.enabled = !this.isDisabled(choice);
	    choice.choices && choice.choices.forEach(this.enable.bind(this));
	    return choice;
	  }

	  disable(choice) {
	    choice.enabled = false;
	    choice.choices && choice.choices.forEach(this.disable.bind(this));
	    return choice;
	  }

	  number(n) {
	    this.num += n;

	    let number = num => {
	      let i = Number(num);
	      if (i > this.choices.length - 1) return this.alert();

	      let focused = this.focused;
	      let choice = this.choices.find(ch => i === ch.index);

	      if (!choice.enabled && this.selected.length >= this.maxSelected) {
	        return this.alert();
	      }

	      if (this.visible.indexOf(choice) === -1) {
	        let choices = reorder(this.choices);
	        let actualIdx = choices.indexOf(choice);

	        if (focused.index > actualIdx) {
	          let start = choices.slice(actualIdx, actualIdx + this.limit);
	          let end = choices.filter(ch => !start.includes(ch));
	          this.choices = start.concat(end);
	        } else {
	          let pos = actualIdx - this.limit + 1;
	          this.choices = choices.slice(pos).concat(choices.slice(0, pos));
	        }
	      }

	      this.index = this.choices.indexOf(choice);
	      this.toggle(this.focused);
	      return this.render();
	    };

	    clearTimeout(this.numberTimeout);

	    return new Promise(resolve => {
	      let len = this.choices.length;
	      let num = this.num;

	      let handle = (val = false, res) => {
	        clearTimeout(this.numberTimeout);
	        if (val) res = number(num);
	        this.num = '';
	        resolve(res);
	      };

	      if (num === '0' || (num.length === 1 && Number(num + '0') > len)) {
	        return handle(true);
	      }

	      if (Number(num) > len) {
	        return handle(false, this.alert());
	      }

	      this.numberTimeout = setTimeout(() => handle(true), this.delay);
	    });
	  }

	  home() {
	    this.choices = reorder(this.choices);
	    this.index = 0;
	    return this.render();
	  }

	  end() {
	    let pos = this.choices.length - this.limit;
	    let choices = reorder(this.choices);
	    this.choices = choices.slice(pos).concat(choices.slice(0, pos));
	    this.index = this.limit - 1;
	    return this.render();
	  }

	  first() {
	    this.index = 0;
	    return this.render();
	  }

	  last() {
	    this.index = this.visible.length - 1;
	    return this.render();
	  }

	  prev() {
	    if (this.visible.length <= 1) return this.alert();
	    return this.up();
	  }

	  next() {
	    if (this.visible.length <= 1) return this.alert();
	    return this.down();
	  }

	  right() {
	    if (this.cursor >= this.input.length) return this.alert();
	    this.cursor++;
	    return this.render();
	  }

	  left() {
	    if (this.cursor <= 0) return this.alert();
	    this.cursor--;
	    return this.render();
	  }

	  up() {
	    let len = this.choices.length;
	    let vis = this.visible.length;
	    let idx = this.index;
	    if (this.options.scroll === false && idx === 0) {
	      return this.alert();
	    }
	    if (len > vis && idx === 0) {
	      return this.scrollUp();
	    }
	    this.index = ((idx - 1 % len) + len) % len;
	    if (this.isDisabled()) {
	      return this.up();
	    }
	    return this.render();
	  }

	  down() {
	    let len = this.choices.length;
	    let vis = this.visible.length;
	    let idx = this.index;
	    if (this.options.scroll === false && idx === vis - 1) {
	      return this.alert();
	    }
	    if (len > vis && idx === vis - 1) {
	      return this.scrollDown();
	    }
	    this.index = (idx + 1) % len;
	    if (this.isDisabled()) {
	      return this.down();
	    }
	    return this.render();
	  }

	  scrollUp(i = 0) {
	    this.choices = scrollUp(this.choices);
	    this.index = i;
	    if (this.isDisabled()) {
	      return this.up();
	    }
	    return this.render();
	  }

	  scrollDown(i = this.visible.length - 1) {
	    this.choices = scrollDown(this.choices);
	    this.index = i;
	    if (this.isDisabled()) {
	      return this.down();
	    }
	    return this.render();
	  }

	  async shiftUp() {
	    if (this.options.sort === true) {
	      this.sorting = true;
	      this.swap(this.index - 1);
	      await this.up();
	      this.sorting = false;
	      return;
	    }
	    return this.scrollUp(this.index);
	  }

	  async shiftDown() {
	    if (this.options.sort === true) {
	      this.sorting = true;
	      this.swap(this.index + 1);
	      await this.down();
	      this.sorting = false;
	      return;
	    }
	    return this.scrollDown(this.index);
	  }

	  pageUp() {
	    if (this.visible.length <= 1) return this.alert();
	    this.limit = Math.max(this.limit - 1, 0);
	    this.index = Math.min(this.limit - 1, this.index);
	    this._limit = this.limit;
	    if (this.isDisabled()) {
	      return this.up();
	    }
	    return this.render();
	  }

	  pageDown() {
	    if (this.visible.length >= this.choices.length) return this.alert();
	    this.index = Math.max(0, this.index);
	    this.limit = Math.min(this.limit + 1, this.choices.length);
	    this._limit = this.limit;
	    if (this.isDisabled()) {
	      return this.down();
	    }
	    return this.render();
	  }

	  swap(pos) {
	    swap(this.choices, this.index, pos);
	  }

	  isDisabled(choice = this.focused) {
	    let keys = ['disabled', 'collapsed', 'hidden', 'completing', 'readonly'];
	    if (choice && keys.some(key => choice[key] === true)) {
	      return true;
	    }
	    return choice && choice.role === 'heading';
	  }

	  isEnabled(choice = this.focused) {
	    if (Array.isArray(choice)) return choice.every(ch => this.isEnabled(ch));
	    if (choice.choices) {
	      let choices = choice.choices.filter(ch => !this.isDisabled(ch));
	      return choice.enabled && choices.every(ch => this.isEnabled(ch));
	    }
	    return choice.enabled && !this.isDisabled(choice);
	  }

	  isChoice(choice, value) {
	    return choice.name === value || choice.index === Number(value);
	  }

	  isSelected(choice) {
	    if (Array.isArray(this.initial)) {
	      return this.initial.some(value => this.isChoice(choice, value));
	    }
	    return this.isChoice(choice, this.initial);
	  }

	  map(names = [], prop = 'value') {
	    return [].concat(names || []).reduce((acc, name) => {
	      acc[name] = this.find(name, prop);
	      return acc;
	    }, {});
	  }

	  filter(value, prop) {
	    let isChoice = (ele, i) => [ele.name, i].includes(value);
	    let fn = typeof value === 'function' ? value : isChoice;
	    let choices = this.options.multiple ? this.state._choices : this.choices;
	    let result = choices.filter(fn);
	    if (prop) {
	      return result.map(ch => ch[prop]);
	    }
	    return result;
	  }

	  find(value, prop) {
	    if (isObject(value)) return prop ? value[prop] : value;
	    let isChoice = (ele, i) => [ele.name, i].includes(value);
	    let fn = typeof value === 'function' ? value : isChoice;
	    let choice = this.choices.find(fn);
	    if (choice) {
	      return prop ? choice[prop] : choice;
	    }
	  }

	  findIndex(value) {
	    return this.choices.indexOf(this.find(value));
	  }

	  async submit() {
	    let choice = this.focused;
	    if (!choice) return this.alert();

	    if (choice.newChoice) {
	      if (!choice.input) return this.alert();
	      choice.updateChoice();
	      return this.render();
	    }

	    if (this.choices.some(ch => ch.newChoice)) {
	      return this.alert();
	    }

	    let { reorder, sort } = this.options;
	    let multi = this.multiple === true;
	    let value = this.selected;
	    if (value === void 0) {
	      return this.alert();
	    }

	    // re-sort choices to original order
	    if (Array.isArray(value) && reorder !== false && sort !== true) {
	      value = utils.reorder(value);
	    }

	    this.value = multi ? value.map(ch => ch.name) : value.name;
	    return super.submit();
	  }

	  set choices(choices = []) {
	    this.state._choices = this.state._choices || [];
	    this.state.choices = choices;

	    for (let choice of choices) {
	      if (!this.state._choices.some(ch => ch.name === choice.name)) {
	        this.state._choices.push(choice);
	      }
	    }

	    if (!this._initial && this.options.initial) {
	      this._initial = true;
	      let init = this.initial;
	      if (typeof init === 'string' || typeof init === 'number') {
	        let choice = this.find(init);
	        if (choice) {
	          this.initial = choice.index;
	          this.focus(choice, true);
	        }
	      }
	    }
	  }
	  get choices() {
	    return reset(this, this.state.choices || []);
	  }

	  set visible(visible) {
	    this.state.visible = visible;
	  }
	  get visible() {
	    return (this.state.visible || this.choices).slice(0, this.limit);
	  }

	  set limit(num) {
	    this.state.limit = num;
	  }
	  get limit() {
	    let { state, options, choices } = this;
	    let limit = state.limit || this._limit || options.limit || choices.length;
	    return Math.min(limit, this.height);
	  }

	  set value(value) {
	    super.value = value;
	  }
	  get value() {
	    if (typeof super.value !== 'string' && super.value === this.initial) {
	      return this.input;
	    }
	    return super.value;
	  }

	  set index(i) {
	    this.state.index = i;
	  }
	  get index() {
	    return Math.max(0, this.state ? this.state.index : 0);
	  }

	  get enabled() {
	    return this.filter(this.isEnabled.bind(this));
	  }

	  get focused() {
	    let choice = this.choices[this.index];
	    if (choice && this.state.submitted && this.multiple !== true) {
	      choice.enabled = true;
	    }
	    return choice;
	  }

	  get selectable() {
	    return this.choices.filter(choice => !this.isDisabled(choice));
	  }

	  get selected() {
	    return this.multiple ? this.enabled : this.focused;
	  }
	}

	function reset(prompt, choices) {
	  if (choices instanceof Promise) return choices;
	  if (typeof choices === 'function') {
	    if (utils.isAsyncFn(choices)) return choices;
	    choices = choices.call(prompt, prompt);
	  }
	  for (let choice of choices) {
	    if (Array.isArray(choice.choices)) {
	      let items = choice.choices.filter(ch => !prompt.isDisabled(ch));
	      choice.enabled = items.every(ch => ch.enabled === true);
	    }
	    if (prompt.isDisabled(choice) === true) {
	      delete choice.enabled;
	    }
	  }
	  return choices;
	}

	array = ArrayPrompt;
	return array;
}

var select;
var hasRequiredSelect;

function requireSelect () {
	if (hasRequiredSelect) return select;
	hasRequiredSelect = 1;

	const ArrayPrompt = requireArray();
	const utils = utils$1;

	class SelectPrompt extends ArrayPrompt {
	  constructor(options) {
	    super(options);
	    this.emptyError = this.options.emptyError || 'No items were selected';
	  }

	  async dispatch(s, key) {
	    if (this.multiple) {
	      return this[key.name] ? await this[key.name](s, key) : await super.dispatch(s, key);
	    }
	    this.alert();
	  }

	  separator() {
	    if (this.options.separator) return super.separator();
	    let sep = this.styles.muted(this.symbols.ellipsis);
	    return this.state.submitted ? super.separator() : sep;
	  }

	  pointer(choice, i) {
	    return (!this.multiple || this.options.pointer) ? super.pointer(choice, i) : '';
	  }

	  indicator(choice, i) {
	    return this.multiple ? super.indicator(choice, i) : '';
	  }

	  choiceMessage(choice, i) {
	    let message = this.resolve(choice.message, this.state, choice, i);
	    if (choice.role === 'heading' && !utils.hasColor(message)) {
	      message = this.styles.strong(message);
	    }
	    return this.resolve(message, this.state, choice, i);
	  }

	  choiceSeparator() {
	    return ':';
	  }

	  async renderChoice(choice, i) {
	    await this.onChoice(choice, i);

	    let focused = this.index === i;
	    let pointer = await this.pointer(choice, i);
	    let check = await this.indicator(choice, i) + (choice.pad || '');
	    let hint = await this.resolve(choice.hint, this.state, choice, i);

	    if (hint && !utils.hasColor(hint)) {
	      hint = this.styles.muted(hint);
	    }

	    let ind = this.indent(choice);
	    let msg = await this.choiceMessage(choice, i);
	    let line = () => [this.margin[3], ind + pointer + check, msg, this.margin[1], hint].filter(Boolean).join(' ');

	    if (choice.role === 'heading') {
	      return line();
	    }

	    if (choice.disabled) {
	      if (!utils.hasColor(msg)) {
	        msg = this.styles.disabled(msg);
	      }
	      return line();
	    }

	    if (focused) {
	      msg = this.styles.em(msg);
	    }

	    return line();
	  }

	  async renderChoices() {
	    if (this.state.loading === 'choices') {
	      return this.styles.warning('Loading choices');
	    }

	    if (this.state.submitted) return '';
	    let choices = this.visible.map(async(ch, i) => await this.renderChoice(ch, i));
	    let visible = await Promise.all(choices);
	    if (!visible.length) visible.push(this.styles.danger('No matching choices'));
	    let result = this.margin[0] + visible.join('\n');
	    let header;

	    if (this.options.choicesHeader) {
	      header = await this.resolve(this.options.choicesHeader, this.state);
	    }

	    return [header, result].filter(Boolean).join('\n');
	  }

	  format() {
	    if (!this.state.submitted || this.state.cancelled) return '';
	    if (Array.isArray(this.selected)) {
	      return this.selected.map(choice => this.styles.primary(choice.name)).join(', ');
	    }
	    return this.styles.primary(this.selected.name);
	  }

	  async render() {
	    let { submitted, size } = this.state;

	    let prompt = '';
	    let header = await this.header();
	    let prefix = await this.prefix();
	    let separator = await this.separator();
	    let message = await this.message();

	    if (this.options.promptLine !== false) {
	      prompt = [prefix, message, separator, ''].join(' ');
	      this.state.prompt = prompt;
	    }

	    let output = await this.format();
	    let help = (await this.error()) || (await this.hint());
	    let body = await this.renderChoices();
	    let footer = await this.footer();

	    if (output) prompt += output;
	    if (help && !prompt.includes(help)) prompt += ' ' + help;

	    if (submitted && !output && !body.trim() && this.multiple && this.emptyError != null) {
	      prompt += this.styles.danger(this.emptyError);
	    }

	    this.clear(size);
	    this.write([header, prompt, body, footer].filter(Boolean).join('\n'));
	    this.write(this.margin[2]);
	    this.restore();
	  }
	}

	select = SelectPrompt;
	return select;
}

var autocomplete;
var hasRequiredAutocomplete;

function requireAutocomplete () {
	if (hasRequiredAutocomplete) return autocomplete;
	hasRequiredAutocomplete = 1;

	const Select = requireSelect();

	const highlight = (input, color) => {
	  let val = input.toLowerCase();
	  return str => {
	    let s = str.toLowerCase();
	    let i = s.indexOf(val);
	    let colored = color(str.slice(i, i + val.length));
	    return i >= 0 ? str.slice(0, i) + colored + str.slice(i + val.length) : str;
	  };
	};

	class AutoComplete extends Select {
	  constructor(options) {
	    super(options);
	    this.cursorShow();
	  }

	  moveCursor(n) {
	    this.state.cursor += n;
	  }

	  dispatch(ch) {
	    return this.append(ch);
	  }

	  space(ch) {
	    return this.options.multiple ? super.space(ch) : this.append(ch);
	  }

	  append(ch) {
	    let { cursor, input } = this.state;
	    this.input = input.slice(0, cursor) + ch + input.slice(cursor);
	    this.moveCursor(1);
	    return this.complete();
	  }

	  delete() {
	    let { cursor, input } = this.state;
	    if (!input) return this.alert();
	    this.input = input.slice(0, cursor - 1) + input.slice(cursor);
	    this.moveCursor(-1);
	    return this.complete();
	  }

	  deleteForward() {
	    let { cursor, input } = this.state;
	    if (input[cursor] === void 0) return this.alert();
	    this.input = `${input}`.slice(0, cursor) + `${input}`.slice(cursor + 1);
	    return this.complete();
	  }

	  number(ch) {
	    return this.append(ch);
	  }

	  async complete() {
	    this.completing = true;
	    this.choices = await this.suggest(this.input, this.state._choices);
	    this.state.limit = void 0; // allow getter/setter to reset limit
	    this.index = Math.min(Math.max(this.visible.length - 1, 0), this.index);
	    await this.render();
	    this.completing = false;
	  }

	  suggest(input = this.input, choices = this.state._choices) {
	    if (typeof this.options.suggest === 'function') {
	      return this.options.suggest.call(this, input, choices);
	    }
	    let str = input.toLowerCase();
	    return choices.filter(ch => ch.message.toLowerCase().includes(str));
	  }

	  pointer() {
	    return '';
	  }

	  format() {
	    if (!this.focused) return this.input;
	    if (this.options.multiple && this.state.submitted) {
	      return this.selected.map(ch => this.styles.primary(ch.message)).join(', ');
	    }
	    if (this.state.submitted) {
	      let value = this.value = this.input = this.focused.value;
	      return this.styles.primary(value);
	    }
	    return this.input;
	  }

	  async render() {
	    if (this.state.status !== 'pending') return super.render();
	    let style = this.options.highlight
	      ? this.options.highlight.bind(this)
	      : this.styles.placeholder;

	    let color = highlight(this.input, style);
	    let choices = this.choices;
	    this.choices = choices.map(ch => ({ ...ch, message: color(ch.message) }));
	    await super.render();
	    this.choices = choices;
	  }

	  submit() {
	    if (this.options.multiple) {
	      this.value = this.selected.map(ch => ch.name);
	    }
	    return super.submit();
	  }
	}

	autocomplete = AutoComplete;
	return autocomplete;
}

var placeholder;
var hasRequiredPlaceholder;

function requirePlaceholder () {
	if (hasRequiredPlaceholder) return placeholder;
	hasRequiredPlaceholder = 1;

	const utils = utils$1;

	/**
	 * Render a placeholder value with cursor and styling based on the
	 * position of the cursor.
	 *
	 * @param {Object} `prompt` Prompt instance.
	 * @param {String} `input` Input string.
	 * @param {String} `initial` The initial user-provided value.
	 * @param {Number} `pos` Current cursor position.
	 * @param {Boolean} `showCursor` Render a simulated cursor using the inverse primary style.
	 * @return {String} Returns the styled placeholder string.
	 * @api public
	 */

	placeholder = (prompt, options = {}) => {
	  prompt.cursorHide();

	  let { input = '', initial = '', pos, showCursor = true, color } = options;
	  let style = color || prompt.styles.placeholder;
	  let inverse = utils.inverse(prompt.styles.primary);
	  let blinker = str => inverse(prompt.styles.black(str));
	  let output = input;
	  let char = ' ';
	  let reverse = blinker(char);

	  if (prompt.blink && prompt.blink.off === true) {
	    blinker = str => str;
	    reverse = '';
	  }

	  if (showCursor && pos === 0 && initial === '' && input === '') {
	    return blinker(char);
	  }

	  if (showCursor && pos === 0 && (input === initial || input === '')) {
	    return blinker(initial[0]) + style(initial.slice(1));
	  }

	  initial = utils.isPrimitive(initial) ? `${initial}` : '';
	  input = utils.isPrimitive(input) ? `${input}` : '';

	  let placeholder = initial && initial.startsWith(input) && initial !== input;
	  let cursor = placeholder ? blinker(initial[input.length]) : reverse;

	  if (pos !== input.length && showCursor === true) {
	    output = input.slice(0, pos) + blinker(input[pos]) + input.slice(pos + 1);
	    cursor = '';
	  }

	  if (showCursor === false) {
	    cursor = '';
	  }

	  if (placeholder) {
	    let raw = prompt.styles.unstyle(output + cursor);
	    return output + cursor + style(initial.slice(raw.length));
	  }

	  return output + cursor;
	};
	return placeholder;
}

var form;
var hasRequiredForm;

function requireForm () {
	if (hasRequiredForm) return form;
	hasRequiredForm = 1;

	const colors = ansiColorsExports;
	const SelectPrompt = requireSelect();
	const placeholder = requirePlaceholder();

	class FormPrompt extends SelectPrompt {
	  constructor(options) {
	    super({ ...options, multiple: true });
	    this.type = 'form';
	    this.initial = this.options.initial;
	    this.align = [this.options.align, 'right'].find(v => v != null);
	    this.emptyError = '';
	    this.values = {};
	  }

	  async reset(first) {
	    await super.reset();
	    if (first === true) this._index = this.index;
	    this.index = this._index;
	    this.values = {};
	    this.choices.forEach(choice => choice.reset && choice.reset());
	    return this.render();
	  }

	  dispatch(char) {
	    return !!char && this.append(char);
	  }

	  append(char) {
	    let choice = this.focused;
	    if (!choice) return this.alert();
	    let { cursor, input } = choice;
	    choice.value = choice.input = input.slice(0, cursor) + char + input.slice(cursor);
	    choice.cursor++;
	    return this.render();
	  }

	  delete() {
	    let choice = this.focused;
	    if (!choice || choice.cursor <= 0) return this.alert();
	    let { cursor, input } = choice;
	    choice.value = choice.input = input.slice(0, cursor - 1) + input.slice(cursor);
	    choice.cursor--;
	    return this.render();
	  }

	  deleteForward() {
	    let choice = this.focused;
	    if (!choice) return this.alert();
	    let { cursor, input } = choice;
	    if (input[cursor] === void 0) return this.alert();
	    let str = `${input}`.slice(0, cursor) + `${input}`.slice(cursor + 1);
	    choice.value = choice.input = str;
	    return this.render();
	  }

	  right() {
	    let choice = this.focused;
	    if (!choice) return this.alert();
	    if (choice.cursor >= choice.input.length) return this.alert();
	    choice.cursor++;
	    return this.render();
	  }

	  left() {
	    let choice = this.focused;
	    if (!choice) return this.alert();
	    if (choice.cursor <= 0) return this.alert();
	    choice.cursor--;
	    return this.render();
	  }

	  space(ch, key) {
	    return this.dispatch(ch, key);
	  }

	  number(ch, key) {
	    return this.dispatch(ch, key);
	  }

	  next() {
	    let ch = this.focused;
	    if (!ch) return this.alert();
	    let { initial, input } = ch;
	    if (initial && initial.startsWith(input) && input !== initial) {
	      ch.value = ch.input = initial;
	      ch.cursor = ch.value.length;
	      return this.render();
	    }
	    return super.next();
	  }

	  prev() {
	    let ch = this.focused;
	    if (!ch) return this.alert();
	    if (ch.cursor === 0) return super.prev();
	    ch.value = ch.input = '';
	    ch.cursor = 0;
	    return this.render();
	  }

	  separator() {
	    return '';
	  }

	  format(value) {
	    return !this.state.submitted ? super.format(value) : '';
	  }

	  pointer() {
	    return '';
	  }

	  indicator(choice) {
	    return choice.input ? '⦿' : '⊙';
	  }

	  async choiceSeparator(choice, i) {
	    let sep = await this.resolve(choice.separator, this.state, choice, i) || ':';
	    return sep ? ' ' + this.styles.disabled(sep) : '';
	  }

	  async renderChoice(choice, i) {
	    await this.onChoice(choice, i);

	    let { state, styles } = this;
	    let { cursor, initial = '', name, hint, input = '' } = choice;
	    let { muted, submitted, primary, danger } = styles;

	    let help = hint;
	    let focused = this.index === i;
	    let validate = choice.validate || (() => true);
	    let sep = await this.choiceSeparator(choice, i);
	    let msg = choice.message;

	    if (this.align === 'right') msg = msg.padStart(this.longest + 1, ' ');
	    if (this.align === 'left') msg = msg.padEnd(this.longest + 1, ' ');

	    // re-populate the form values (answers) object
	    let value = this.values[name] = (input || initial);
	    let color = input ? 'success' : 'dark';

	    if ((await validate.call(choice, value, this.state)) !== true) {
	      color = 'danger';
	    }

	    let style = styles[color];
	    let indicator = style(await this.indicator(choice, i)) + (choice.pad || '');

	    let indent = this.indent(choice);
	    let line = () => [indent, indicator, msg + sep, input, help].filter(Boolean).join(' ');

	    if (state.submitted) {
	      msg = colors.unstyle(msg);
	      input = submitted(input);
	      help = '';
	      return line();
	    }

	    if (choice.format) {
	      input = await choice.format.call(this, input, choice, i);
	    } else {
	      let color = this.styles.muted;
	      let options = { input, initial, pos: cursor, showCursor: focused, color };
	      input = placeholder(this, options);
	    }

	    if (!this.isValue(input)) {
	      input = this.styles.muted(this.symbols.ellipsis);
	    }

	    if (choice.result) {
	      this.values[name] = await choice.result.call(this, value, choice, i);
	    }

	    if (focused) {
	      msg = primary(msg);
	    }

	    if (choice.error) {
	      input += (input ? ' ' : '') + danger(choice.error.trim());
	    } else if (choice.hint) {
	      input += (input ? ' ' : '') + muted(choice.hint.trim());
	    }

	    return line();
	  }

	  async submit() {
	    this.value = this.values;
	    return super.base.submit.call(this);
	  }
	}

	form = FormPrompt;
	return form;
}

var auth;
var hasRequiredAuth;

function requireAuth () {
	if (hasRequiredAuth) return auth;
	hasRequiredAuth = 1;

	const FormPrompt = requireForm();

	const defaultAuthenticate = () => {
	  throw new Error('expected prompt to have a custom authenticate method');
	};

	const factory = (authenticate = defaultAuthenticate) => {

	  class AuthPrompt extends FormPrompt {
	    constructor(options) {
	      super(options);
	    }

	    async submit() {
	      this.value = await authenticate.call(this, this.values, this.state);
	      super.base.submit.call(this);
	    }

	    static create(authenticate) {
	      return factory(authenticate);
	    }
	  }

	  return AuthPrompt;
	};

	auth = factory();
	return auth;
}

var basicauth;
var hasRequiredBasicauth;

function requireBasicauth () {
	if (hasRequiredBasicauth) return basicauth;
	hasRequiredBasicauth = 1;

	const AuthPrompt = requireAuth();

	function defaultAuthenticate(value, state) {
	  if (value.username === this.options.username && value.password === this.options.password) {
	    return true;
	  }
	  return false;
	}

	const factory = (authenticate = defaultAuthenticate) => {
	  const choices = [
	    { name: 'username', message: 'username' },
	    {
	      name: 'password',
	      message: 'password',
	      format(input) {
	        if (this.options.showPassword) {
	          return input;
	        }
	        let color = this.state.submitted ? this.styles.primary : this.styles.muted;
	        return color(this.symbols.asterisk.repeat(input.length));
	      }
	    }
	  ];

	  class BasicAuthPrompt extends AuthPrompt.create(authenticate) {
	    constructor(options) {
	      super({ ...options, choices });
	    }

	    static create(authenticate) {
	      return factory(authenticate);
	    }
	  }

	  return BasicAuthPrompt;
	};

	basicauth = factory();
	return basicauth;
}

var boolean;
var hasRequiredBoolean;

function requireBoolean () {
	if (hasRequiredBoolean) return boolean;
	hasRequiredBoolean = 1;

	const Prompt = requirePrompt();
	const { isPrimitive, hasColor } = utils$1;

	class BooleanPrompt extends Prompt {
	  constructor(options) {
	    super(options);
	    this.cursorHide();
	  }

	  async initialize() {
	    let initial = await this.resolve(this.initial, this.state);
	    this.input = await this.cast(initial);
	    await super.initialize();
	  }

	  dispatch(ch) {
	    if (!this.isValue(ch)) return this.alert();
	    this.input = ch;
	    return this.submit();
	  }

	  format(value) {
	    let { styles, state } = this;
	    return !state.submitted ? styles.primary(value) : styles.success(value);
	  }

	  cast(input) {
	    return this.isTrue(input);
	  }

	  isTrue(input) {
	    return /^[ty1]/i.test(input);
	  }

	  isFalse(input) {
	    return /^[fn0]/i.test(input);
	  }

	  isValue(value) {
	    return isPrimitive(value) && (this.isTrue(value) || this.isFalse(value));
	  }

	  async hint() {
	    if (this.state.status === 'pending') {
	      let hint = await this.element('hint');
	      if (!hasColor(hint)) {
	        return this.styles.muted(hint);
	      }
	      return hint;
	    }
	  }

	  async render() {
	    let { input, size } = this.state;

	    let prefix = await this.prefix();
	    let sep = await this.separator();
	    let msg = await this.message();
	    let hint = this.styles.muted(this.default);

	    let promptLine = [prefix, msg, hint, sep].filter(Boolean).join(' ');
	    this.state.prompt = promptLine;

	    let header = await this.header();
	    let value = this.value = this.cast(input);
	    let output = await this.format(value);
	    let help = (await this.error()) || (await this.hint());
	    let footer = await this.footer();

	    if (help && !promptLine.includes(help)) output += ' ' + help;
	    promptLine += ' ' + output;

	    this.clear(size);
	    this.write([header, promptLine, footer].filter(Boolean).join('\n'));
	    this.restore();
	  }

	  set value(value) {
	    super.value = value;
	  }
	  get value() {
	    return this.cast(super.value);
	  }
	}

	boolean = BooleanPrompt;
	return boolean;
}

var confirm;
var hasRequiredConfirm;

function requireConfirm () {
	if (hasRequiredConfirm) return confirm;
	hasRequiredConfirm = 1;

	const BooleanPrompt = requireBoolean();

	class ConfirmPrompt extends BooleanPrompt {
	  constructor(options) {
	    super(options);
	    this.default = this.options.default || (this.initial ? '(Y/n)' : '(y/N)');
	  }
	}

	confirm = ConfirmPrompt;
	return confirm;
}

var editable;
var hasRequiredEditable;

function requireEditable () {
	if (hasRequiredEditable) return editable;
	hasRequiredEditable = 1;

	const Select = requireSelect();
	const Form = requireForm();
	const form = Form.prototype;

	class Editable extends Select {
	  constructor(options) {
	    super({ ...options, multiple: true });
	    this.align = [this.options.align, 'left'].find(v => v != null);
	    this.emptyError = '';
	    this.values = {};
	  }

	  dispatch(char, key) {
	    let choice = this.focused;
	    let parent = choice.parent || {};
	    if (!choice.editable && !parent.editable) {
	      if (char === 'a' || char === 'i') return super[char]();
	    }
	    return form.dispatch.call(this, char, key);
	  }

	  append(char, key) {
	    return form.append.call(this, char, key);
	  }

	  delete(char, key) {
	    return form.delete.call(this, char, key);
	  }

	  space(char) {
	    return this.focused.editable ? this.append(char) : super.space();
	  }

	  number(char) {
	    return this.focused.editable ? this.append(char) : super.number(char);
	  }

	  next() {
	    return this.focused.editable ? form.next.call(this) : super.next();
	  }

	  prev() {
	    return this.focused.editable ? form.prev.call(this) : super.prev();
	  }

	  async indicator(choice, i) {
	    let symbol = choice.indicator || '';
	    let value = choice.editable ? symbol : super.indicator(choice, i);
	    return await this.resolve(value, this.state, choice, i) || '';
	  }

	  indent(choice) {
	    return choice.role === 'heading' ? '' : (choice.editable ? ' ' : '  ');
	  }

	  async renderChoice(choice, i) {
	    choice.indent = '';
	    if (choice.editable) return form.renderChoice.call(this, choice, i);
	    return super.renderChoice(choice, i);
	  }

	  error() {
	    return '';
	  }

	  footer() {
	    return this.state.error;
	  }

	  async validate() {
	    let result = true;

	    for (let choice of this.choices) {
	      if (typeof choice.validate !== 'function') {
	        continue;
	      }

	      if (choice.role === 'heading') {
	        continue;
	      }

	      let val = choice.parent ? this.value[choice.parent.name] : this.value;

	      if (choice.editable) {
	        val = choice.value === choice.name ? choice.initial || '' : choice.value;
	      } else if (!this.isDisabled(choice)) {
	        val = choice.enabled === true;
	      }

	      result = await choice.validate(val, this.state);

	      if (result !== true) {
	        break;
	      }
	    }

	    if (result !== true) {
	      this.state.error = typeof result === 'string' ? result : 'Invalid Input';
	    }

	    return result;
	  }

	  submit() {
	    if (this.focused.newChoice === true) return super.submit();
	    if (this.choices.some(ch => ch.newChoice)) {
	      return this.alert();
	    }

	    this.value = {};

	    for (let choice of this.choices) {
	      let val = choice.parent ? this.value[choice.parent.name] : this.value;

	      if (choice.role === 'heading') {
	        this.value[choice.name] = {};
	        continue;
	      }

	      if (choice.editable) {
	        val[choice.name] = choice.value === choice.name
	          ? (choice.initial || '')
	          : choice.value;

	      } else if (!this.isDisabled(choice)) {
	        val[choice.name] = choice.enabled === true;
	      }
	    }

	    return this.base.submit.call(this);
	  }
	}

	editable = Editable;
	return editable;
}

var string;
var hasRequiredString;

function requireString () {
	if (hasRequiredString) return string;
	hasRequiredString = 1;

	const Prompt = requirePrompt();
	const placeholder = requirePlaceholder();
	const { isPrimitive } = utils$1;

	class StringPrompt extends Prompt {
	  constructor(options) {
	    super(options);
	    this.initial = isPrimitive(this.initial) ? String(this.initial) : '';
	    if (this.initial) this.cursorHide();
	    this.state.prevCursor = 0;
	    this.state.clipboard = [];
	  }

	  async keypress(input, key = {}) {
	    let prev = this.state.prevKeypress;
	    this.state.prevKeypress = key;
	    if (this.options.multiline === true && key.name === 'return') {
	      if (!prev || prev.name !== 'return') {
	        return this.append('\n', key);
	      }
	    }
	    return super.keypress(input, key);
	  }

	  moveCursor(n) {
	    this.cursor += n;
	  }

	  reset() {
	    this.input = this.value = '';
	    this.cursor = 0;
	    return this.render();
	  }

	  dispatch(ch, key) {
	    if (!ch || key.ctrl || key.code) return this.alert();
	    this.append(ch);
	  }

	  append(ch) {
	    let { cursor, input } = this.state;
	    this.input = `${input}`.slice(0, cursor) + ch + `${input}`.slice(cursor);
	    this.moveCursor(String(ch).length);
	    this.render();
	  }

	  insert(str) {
	    this.append(str);
	  }

	  delete() {
	    let { cursor, input } = this.state;
	    if (cursor <= 0) return this.alert();
	    this.input = `${input}`.slice(0, cursor - 1) + `${input}`.slice(cursor);
	    this.moveCursor(-1);
	    this.render();
	  }

	  deleteForward() {
	    let { cursor, input } = this.state;
	    if (input[cursor] === void 0) return this.alert();
	    this.input = `${input}`.slice(0, cursor) + `${input}`.slice(cursor + 1);
	    this.render();
	  }

	  cutForward() {
	    let pos = this.cursor;
	    if (this.input.length <= pos) return this.alert();
	    this.state.clipboard.push(this.input.slice(pos));
	    this.input = this.input.slice(0, pos);
	    this.render();
	  }

	  cutLeft() {
	    let pos = this.cursor;
	    if (pos === 0) return this.alert();
	    let before = this.input.slice(0, pos);
	    let after = this.input.slice(pos);
	    let words = before.split(' ');
	    this.state.clipboard.push(words.pop());
	    this.input = words.join(' ');
	    this.cursor = this.input.length;
	    this.input += after;
	    this.render();
	  }

	  paste() {
	    if (!this.state.clipboard.length) return this.alert();
	    this.insert(this.state.clipboard.pop());
	    this.render();
	  }

	  toggleCursor() {
	    if (this.state.prevCursor) {
	      this.cursor = this.state.prevCursor;
	      this.state.prevCursor = 0;
	    } else {
	      this.state.prevCursor = this.cursor;
	      this.cursor = 0;
	    }
	    this.render();
	  }

	  first() {
	    this.cursor = 0;
	    this.render();
	  }

	  last() {
	    this.cursor = this.input.length - 1;
	    this.render();
	  }

	  next() {
	    let init = this.initial != null ? String(this.initial) : '';
	    if (!init || !init.startsWith(this.input)) return this.alert();
	    this.input = this.initial;
	    this.cursor = this.initial.length;
	    this.render();
	  }

	  prev() {
	    if (!this.input) return this.alert();
	    this.reset();
	  }

	  backward() {
	    return this.left();
	  }

	  forward() {
	    return this.right();
	  }

	  right() {
	    if (this.cursor >= this.input.length) return this.alert();
	    this.moveCursor(1);
	    return this.render();
	  }

	  left() {
	    if (this.cursor <= 0) return this.alert();
	    this.moveCursor(-1);
	    return this.render();
	  }

	  isValue(value) {
	    return !!value;
	  }

	  async format(input = this.value) {
	    let initial = await this.resolve(this.initial, this.state);
	    if (!this.state.submitted) {
	      return placeholder(this, { input, initial, pos: this.cursor });
	    }
	    return this.styles.submitted(input || initial);
	  }

	  async render() {
	    let size = this.state.size;

	    let prefix = await this.prefix();
	    let separator = await this.separator();
	    let message = await this.message();

	    let prompt = [prefix, message, separator].filter(Boolean).join(' ');
	    this.state.prompt = prompt;

	    let header = await this.header();
	    let output = await this.format();
	    let help = (await this.error()) || (await this.hint());
	    let footer = await this.footer();

	    if (help && !output.includes(help)) output += ' ' + help;
	    prompt += ' ' + output;

	    this.clear(size);
	    this.write([header, prompt, footer].filter(Boolean).join('\n'));
	    this.restore();
	  }
	}

	string = StringPrompt;
	return string;
}

var completer;
var hasRequiredCompleter;

function requireCompleter () {
	if (hasRequiredCompleter) return completer;
	hasRequiredCompleter = 1;

	const unique = arr => arr.filter((v, i) => arr.lastIndexOf(v) === i);
	const compact = arr => unique(arr).filter(Boolean);

	completer = (action, data = {}, value = '') => {
	  let { past = [], present = '' } = data;
	  let rest, prev;

	  switch (action) {
	    case 'prev':
	    case 'undo':
	      rest = past.slice(0, past.length - 1);
	      prev = past[past.length - 1] || '';
	      return {
	        past: compact([value, ...rest]),
	        present: prev
	      };

	    case 'next':
	    case 'redo':
	      rest = past.slice(1);
	      prev = past[0] || '';
	      return {
	        past: compact([...rest, value]),
	        present: prev
	      };

	    case 'save':
	      return {
	        past: compact([...past, value]),
	        present: ''
	      };

	    case 'remove':
	      prev = compact(past.filter(v => v !== value));
	      present = '';

	      if (prev.length) {
	        present = prev.pop();
	      }

	      return {
	        past: prev,
	        present
	      };

	    default: {
	      throw new Error(`Invalid action: "${action}"`);
	    }
	  }
	};
	return completer;
}

var input;
var hasRequiredInput;

function requireInput () {
	if (hasRequiredInput) return input;
	hasRequiredInput = 1;

	const Prompt = requireString();
	const completer = requireCompleter();

	class Input extends Prompt {
	  constructor(options) {
	    super(options);
	    let history = this.options.history;
	    if (history && history.store) {
	      let initial = history.values || this.initial;
	      this.autosave = !!history.autosave;
	      this.store = history.store;
	      this.data = this.store.get('values') || { past: [], present: initial };
	      this.initial = this.data.present || this.data.past[this.data.past.length - 1];
	    }
	  }

	  completion(action) {
	    if (!this.store) return this.alert();
	    this.data = completer(action, this.data, this.input);
	    if (!this.data.present) return this.alert();
	    this.input = this.data.present;
	    this.cursor = this.input.length;
	    return this.render();
	  }

	  altUp() {
	    return this.completion('prev');
	  }

	  altDown() {
	    return this.completion('next');
	  }

	  prev() {
	    this.save();
	    return super.prev();
	  }

	  save() {
	    if (!this.store) return;
	    this.data = completer('save', this.data, this.input);
	    this.store.set('values', this.data);
	  }

	  submit() {
	    if (this.store && this.autosave === true) {
	      this.save();
	    }
	    return super.submit();
	  }
	}

	input = Input;
	return input;
}

var invisible;
var hasRequiredInvisible;

function requireInvisible () {
	if (hasRequiredInvisible) return invisible;
	hasRequiredInvisible = 1;

	const StringPrompt = requireString();

	class InvisiblePrompt extends StringPrompt {
	  format() {
	    return '';
	  }
	}

	invisible = InvisiblePrompt;
	return invisible;
}

var list;
var hasRequiredList;

function requireList () {
	if (hasRequiredList) return list;
	hasRequiredList = 1;

	const StringPrompt = requireString();

	class ListPrompt extends StringPrompt {
	  constructor(options = {}) {
	    super(options);
	    this.sep = this.options.separator || /, */;
	    this.initial = options.initial || '';
	  }

	  split(input = this.value) {
	    return input ? String(input).split(this.sep) : [];
	  }

	  format() {
	    let style = this.state.submitted ? this.styles.primary : val => val;
	    return this.list.map(style).join(', ');
	  }

	  async submit(value) {
	    let result = this.state.error || await this.validate(this.list, this.state);
	    if (result !== true) {
	      this.state.error = result;
	      return super.submit();
	    }
	    this.value = this.list;
	    return super.submit();
	  }

	  get list() {
	    return this.split();
	  }
	}

	list = ListPrompt;
	return list;
}

var multiselect;
var hasRequiredMultiselect;

function requireMultiselect () {
	if (hasRequiredMultiselect) return multiselect;
	hasRequiredMultiselect = 1;

	const Select = requireSelect();

	class MultiSelect extends Select {
	  constructor(options) {
	    super({ ...options, multiple: true });
	  }
	}

	multiselect = MultiSelect;
	return multiselect;
}

var number;
var hasRequiredNumber;

function requireNumber () {
	if (hasRequiredNumber) return number;
	hasRequiredNumber = 1;

	const StringPrompt = requireString();

	class NumberPrompt extends StringPrompt {
	  constructor(options = {}) {
	    super({ style: 'number', ...options });
	    this.min = this.isValue(options.min) ? this.toNumber(options.min) : -Infinity;
	    this.max = this.isValue(options.max) ? this.toNumber(options.max) : Infinity;
	    this.delay = options.delay != null ? options.delay : 1000;
	    this.float = options.float !== false;
	    this.round = options.round === true || options.float === false;
	    this.major = options.major || 10;
	    this.minor = options.minor || 1;
	    this.initial = options.initial != null ? options.initial : '';
	    this.input = String(this.initial);
	    this.cursor = this.input.length;
	    this.cursorShow();
	  }

	  append(ch) {
	    if (!/[-+.]/.test(ch) || (ch === '.' && this.input.includes('.'))) {
	      return this.alert('invalid number');
	    }
	    return super.append(ch);
	  }

	  number(ch) {
	    return super.append(ch);
	  }

	  next() {
	    if (this.input && this.input !== this.initial) return this.alert();
	    if (!this.isValue(this.initial)) return this.alert();
	    this.input = this.initial;
	    this.cursor = String(this.initial).length;
	    return this.render();
	  }

	  up(number) {
	    let step = number || this.minor;
	    let num = this.toNumber(this.input);
	    if (num > this.max + step) return this.alert();
	    this.input = `${num + step}`;
	    return this.render();
	  }

	  down(number) {
	    let step = number || this.minor;
	    let num = this.toNumber(this.input);
	    if (num < this.min - step) return this.alert();
	    this.input = `${num - step}`;
	    return this.render();
	  }

	  shiftDown() {
	    return this.down(this.major);
	  }

	  shiftUp() {
	    return this.up(this.major);
	  }

	  format(input = this.input) {
	    if (typeof this.options.format === 'function') {
	      return this.options.format.call(this, input);
	    }
	    return this.styles.info(input);
	  }

	  toNumber(value = '') {
	    return this.float ? +value : Math.round(+value);
	  }

	  isValue(value) {
	    return /^[-+]?[0-9]+((\.)|(\.[0-9]+))?$/.test(value);
	  }

	  submit() {
	    let value = [this.input, this.initial].find(v => this.isValue(v));
	    this.value = this.toNumber(value || 0);
	    return super.submit();
	  }
	}

	number = NumberPrompt;
	return number;
}

var numeral;
var hasRequiredNumeral;

function requireNumeral () {
	if (hasRequiredNumeral) return numeral;
	hasRequiredNumeral = 1;
	numeral = requireNumber();
	return numeral;
}

var password;
var hasRequiredPassword;

function requirePassword () {
	if (hasRequiredPassword) return password;
	hasRequiredPassword = 1;

	const StringPrompt = requireString();

	class PasswordPrompt extends StringPrompt {
	  constructor(options) {
	    super(options);
	    this.cursorShow();
	  }

	  format(input = this.input) {
	    if (!this.keypressed) return '';
	    let color = this.state.submitted ? this.styles.primary : this.styles.muted;
	    return color(this.symbols.asterisk.repeat(input.length));
	  }
	}

	password = PasswordPrompt;
	return password;
}

var scale;
var hasRequiredScale;

function requireScale () {
	if (hasRequiredScale) return scale;
	hasRequiredScale = 1;

	const colors = ansiColorsExports;
	const ArrayPrompt = requireArray();
	const utils = utils$1;

	class LikertScale extends ArrayPrompt {
	  constructor(options = {}) {
	    super(options);
	    this.widths = [].concat(options.messageWidth || 50);
	    this.align = [].concat(options.align || 'left');
	    this.linebreak = options.linebreak || false;
	    this.edgeLength = options.edgeLength || 3;
	    this.newline = options.newline || '\n   ';
	    let start = options.startNumber || 1;
	    if (typeof this.scale === 'number') {
	      this.scaleKey = false;
	      this.scale = Array(this.scale).fill(0).map((v, i) => ({ name: i + start }));
	    }
	  }

	  async reset() {
	    this.tableized = false;
	    await super.reset();
	    return this.render();
	  }

	  tableize() {
	    if (this.tableized === true) return;
	    this.tableized = true;
	    let longest = 0;

	    for (let ch of this.choices) {
	      longest = Math.max(longest, ch.message.length);
	      ch.scaleIndex = ch.initial || 2;
	      ch.scale = [];

	      for (let i = 0; i < this.scale.length; i++) {
	        ch.scale.push({ index: i });
	      }
	    }
	    this.widths[0] = Math.min(this.widths[0], longest + 3);
	  }

	  async dispatch(s, key) {
	    if (this.multiple) {
	      return this[key.name] ? await this[key.name](s, key) : await super.dispatch(s, key);
	    }
	    this.alert();
	  }

	  heading(msg, item, i) {
	    return this.styles.strong(msg);
	  }

	  separator() {
	    return this.styles.muted(this.symbols.ellipsis);
	  }

	  right() {
	    let choice = this.focused;
	    if (choice.scaleIndex >= this.scale.length - 1) return this.alert();
	    choice.scaleIndex++;
	    return this.render();
	  }

	  left() {
	    let choice = this.focused;
	    if (choice.scaleIndex <= 0) return this.alert();
	    choice.scaleIndex--;
	    return this.render();
	  }

	  indent() {
	    return '';
	  }

	  format() {
	    if (this.state.submitted) {
	      let values = this.choices.map(ch => this.styles.info(ch.index));
	      return values.join(', ');
	    }
	    return '';
	  }

	  pointer() {
	    return '';
	  }

	  /**
	   * Render the scale "Key". Something like:
	   * @return {String}
	   */

	  renderScaleKey() {
	    if (this.scaleKey === false) return '';
	    if (this.state.submitted) return '';
	    let scale = this.scale.map(item => `   ${item.name} - ${item.message}`);
	    let key = ['', ...scale].map(item => this.styles.muted(item));
	    return key.join('\n');
	  }

	  /**
	   * Render the heading row for the scale.
	   * @return {String}
	   */

	  renderScaleHeading(max) {
	    let keys = this.scale.map(ele => ele.name);
	    if (typeof this.options.renderScaleHeading === 'function') {
	      keys = this.options.renderScaleHeading.call(this, max);
	    }
	    let diff = this.scaleLength - keys.join('').length;
	    let spacing = Math.round(diff / (keys.length - 1));
	    let names = keys.map(key => this.styles.strong(key));
	    let headings = names.join(' '.repeat(spacing));
	    let padding = ' '.repeat(this.widths[0]);
	    return this.margin[3] + padding + this.margin[1] + headings;
	  }

	  /**
	   * Render a scale indicator => ◯ or ◉ by default
	   */

	  scaleIndicator(choice, item, i) {
	    if (typeof this.options.scaleIndicator === 'function') {
	      return this.options.scaleIndicator.call(this, choice, item, i);
	    }
	    let enabled = choice.scaleIndex === item.index;
	    if (item.disabled) return this.styles.hint(this.symbols.radio.disabled);
	    if (enabled) return this.styles.success(this.symbols.radio.on);
	    return this.symbols.radio.off;
	  }

	  /**
	   * Render the actual scale => ◯────◯────◉────◯────◯
	   */

	  renderScale(choice, i) {
	    let scale = choice.scale.map(item => this.scaleIndicator(choice, item, i));
	    let padding = this.term === 'Hyper' ? '' : ' ';
	    return scale.join(padding + this.symbols.line.repeat(this.edgeLength));
	  }

	  /**
	   * Render a choice, including scale =>
	   *   "The website is easy to navigate. ◯───◯───◉───◯───◯"
	   */

	  async renderChoice(choice, i) {
	    await this.onChoice(choice, i);

	    let focused = this.index === i;
	    let pointer = await this.pointer(choice, i);
	    let hint = await choice.hint;

	    if (hint && !utils.hasColor(hint)) {
	      hint = this.styles.muted(hint);
	    }

	    let pad = str => this.margin[3] + str.replace(/\s+$/, '').padEnd(this.widths[0], ' ');
	    let newline = this.newline;
	    let ind = this.indent(choice);
	    let message = await this.resolve(choice.message, this.state, choice, i);
	    let scale = await this.renderScale(choice, i);
	    let margin = this.margin[1] + this.margin[3];
	    this.scaleLength = colors.unstyle(scale).length;
	    this.widths[0] = Math.min(this.widths[0], this.width - this.scaleLength - margin.length);
	    let msg = utils.wordWrap(message, { width: this.widths[0], newline });
	    let lines = msg.split('\n').map(line => pad(line) + this.margin[1]);

	    if (focused) {
	      scale = this.styles.info(scale);
	      lines = lines.map(line => this.styles.info(line));
	    }

	    lines[0] += scale;

	    if (this.linebreak) lines.push('');
	    return [ind + pointer, lines.join('\n')].filter(Boolean);
	  }

	  async renderChoices() {
	    if (this.state.submitted) return '';
	    this.tableize();
	    let choices = this.visible.map(async(ch, i) => await this.renderChoice(ch, i));
	    let visible = await Promise.all(choices);
	    let heading = await this.renderScaleHeading();
	    return this.margin[0] + [heading, ...visible.map(v => v.join(' '))].join('\n');
	  }

	  async render() {
	    let { submitted, size } = this.state;

	    let prefix = await this.prefix();
	    let separator = await this.separator();
	    let message = await this.message();

	    let prompt = '';
	    if (this.options.promptLine !== false) {
	      prompt = [prefix, message, separator, ''].join(' ');
	      this.state.prompt = prompt;
	    }

	    let header = await this.header();
	    let output = await this.format();
	    let key = await this.renderScaleKey();
	    let help = await this.error() || await this.hint();
	    let body = await this.renderChoices();
	    let footer = await this.footer();
	    let err = this.emptyError;

	    if (output) prompt += output;
	    if (help && !prompt.includes(help)) prompt += ' ' + help;

	    if (submitted && !output && !body.trim() && this.multiple && err != null) {
	      prompt += this.styles.danger(err);
	    }

	    this.clear(size);
	    this.write([header, prompt, key, body, footer].filter(Boolean).join('\n'));
	    if (!this.state.submitted) {
	      this.write(this.margin[2]);
	    }
	    this.restore();
	  }

	  submit() {
	    this.value = {};
	    for (let choice of this.choices) {
	      this.value[choice.name] = choice.scaleIndex;
	    }
	    return this.base.submit.call(this);
	  }
	}

	scale = LikertScale;
	return scale;
}

var interpolate;
var hasRequiredInterpolate;

function requireInterpolate () {
	if (hasRequiredInterpolate) return interpolate;
	hasRequiredInterpolate = 1;

	const colors = ansiColorsExports;
	const clean = (str = '') => {
	  return typeof str === 'string' ? str.replace(/^['"]|['"]$/g, '') : '';
	};

	/**
	 * This file contains the interpolation and rendering logic for
	 * the Snippet prompt.
	 */

	class Item {
	  constructor(token) {
	    this.name = token.key;
	    this.field = token.field || {};
	    this.value = clean(token.initial || this.field.initial || '');
	    this.message = token.message || this.name;
	    this.cursor = 0;
	    this.input = '';
	    this.lines = [];
	  }
	}

	const tokenize = async(options = {}, defaults = {}, fn = token => token) => {
	  let unique = new Set();
	  let fields = options.fields || [];
	  let input = options.template;
	  let tabstops = [];
	  let items = [];
	  let keys = [];
	  let line = 1;

	  if (typeof input === 'function') {
	    input = await input();
	  }

	  let i = -1;
	  let next = () => input[++i];
	  let peek = () => input[i + 1];
	  let push = token => {
	    token.line = line;
	    tabstops.push(token);
	  };

	  push({ type: 'bos', value: '' });

	  while (i < input.length - 1) {
	    let value = next();

	    if (/^[^\S\n ]$/.test(value)) {
	      push({ type: 'text', value });
	      continue;
	    }

	    if (value === '\n') {
	      push({ type: 'newline', value });
	      line++;
	      continue;
	    }

	    if (value === '\\') {
	      value += next();
	      push({ type: 'text', value });
	      continue;
	    }

	    if ((value === '$' || value === '#' || value === '{') && peek() === '{') {
	      let n = next();
	      value += n;

	      let token = { type: 'template', open: value, inner: '', close: '', value };
	      let ch;

	      while ((ch = next())) {
	        if (ch === '}') {
	          if (peek() === '}') ch += next();
	          token.value += ch;
	          token.close = ch;
	          break;
	        }

	        if (ch === ':') {
	          token.initial = '';
	          token.key = token.inner;
	        } else if (token.initial !== void 0) {
	          token.initial += ch;
	        }

	        token.value += ch;
	        token.inner += ch;
	      }

	      token.template = token.open + (token.initial || token.inner) + token.close;
	      token.key = token.key || token.inner;

	      if (defaults.hasOwnProperty(token.key)) {
	        token.initial = defaults[token.key];
	      }

	      token = fn(token);
	      push(token);

	      keys.push(token.key);
	      unique.add(token.key);

	      let item = items.find(item => item.name === token.key);
	      token.field = fields.find(ch => ch.name === token.key);

	      if (!item) {
	        item = new Item(token);
	        items.push(item);
	      }

	      item.lines.push(token.line - 1);
	      continue;
	    }

	    let last = tabstops[tabstops.length - 1];
	    if (last.type === 'text' && last.line === line) {
	      last.value += value;
	    } else {
	      push({ type: 'text', value });
	    }
	  }

	  push({ type: 'eos', value: '' });
	  return { input, tabstops, unique, keys, items };
	};

	interpolate = async prompt => {
	  let options = prompt.options;
	  let required = new Set(options.required === true ? [] : (options.required || []));
	  let defaults = { ...options.values, ...options.initial };
	  let { tabstops, items, keys } = await tokenize(options, defaults);

	  let result = createFn('result', prompt);
	  let format = createFn('format', prompt);
	  let isValid = createFn('validate', prompt, options, true);
	  let isVal = prompt.isValue.bind(prompt);

	  return async(state = {}, submitted = false) => {
	    let index = 0;

	    state.required = required;
	    state.items = items;
	    state.keys = keys;
	    state.output = '';

	    let validate = async(value, state, item, index) => {
	      let error = await isValid(value, state, item, index);
	      if (error === false) {
	        return 'Invalid field ' + item.name;
	      }
	      return error;
	    };

	    for (let token of tabstops) {
	      let value = token.value;
	      let key = token.key;

	      if (token.type !== 'template') {
	        if (value) state.output += value;
	        continue;
	      }

	      if (token.type === 'template') {
	        let item = items.find(ch => ch.name === key);

	        if (options.required === true) {
	          state.required.add(item.name);
	        }

	        let val = [item.input, state.values[item.value], item.value, value].find(isVal);
	        let field = item.field || {};
	        let message = field.message || token.inner;

	        if (submitted) {
	          let error = await validate(state.values[key], state, item, index);
	          if ((error && typeof error === 'string') || error === false) {
	            state.invalid.set(key, error);
	            continue;
	          }

	          state.invalid.delete(key);
	          let res = await result(state.values[key], state, item, index);
	          state.output += colors.unstyle(res);
	          continue;
	        }

	        item.placeholder = false;

	        let before = value;
	        value = await format(value, state, item, index);

	        if (val !== value) {
	          state.values[key] = val;
	          value = prompt.styles.typing(val);
	          state.missing.delete(message);

	        } else {
	          state.values[key] = void 0;
	          val = `<${message}>`;
	          value = prompt.styles.primary(val);
	          item.placeholder = true;

	          if (state.required.has(key)) {
	            state.missing.add(message);
	          }
	        }

	        if (state.missing.has(message) && state.validating) {
	          value = prompt.styles.warning(val);
	        }

	        if (state.invalid.has(key) && state.validating) {
	          value = prompt.styles.danger(val);
	        }

	        if (index === state.index) {
	          if (before !== value) {
	            value = prompt.styles.underline(value);
	          } else {
	            value = prompt.styles.heading(colors.unstyle(value));
	          }
	        }

	        index++;
	      }

	      if (value) {
	        state.output += value;
	      }
	    }

	    let lines = state.output.split('\n').map(l => ' ' + l);
	    let len = items.length;
	    let done = 0;

	    for (let item of items) {
	      if (state.invalid.has(item.name)) {
	        item.lines.forEach(i => {
	          if (lines[i][0] !== ' ') return;
	          lines[i] = state.styles.danger(state.symbols.bullet) + lines[i].slice(1);
	        });
	      }

	      if (prompt.isValue(state.values[item.name])) {
	        done++;
	      }
	    }

	    state.completed = ((done / len) * 100).toFixed(0);
	    state.output = lines.join('\n');
	    return state.output;
	  };
	};

	function createFn(prop, prompt, options, fallback) {
	  return (value, state, item, index) => {
	    if (typeof item.field[prop] === 'function') {
	      return item.field[prop].call(prompt, value, state, item, index);
	    }
	    return [fallback, value].find(v => prompt.isValue(v));
	  };
	}
	return interpolate;
}

var snippet;
var hasRequiredSnippet;

function requireSnippet () {
	if (hasRequiredSnippet) return snippet;
	hasRequiredSnippet = 1;

	const colors = ansiColorsExports;
	const interpolate = requireInterpolate();
	const Prompt = requirePrompt();

	class SnippetPrompt extends Prompt {
	  constructor(options) {
	    super(options);
	    this.cursorHide();
	    this.reset(true);
	  }

	  async initialize() {
	    this.interpolate = await interpolate(this);
	    await super.initialize();
	  }

	  async reset(first) {
	    this.state.keys = [];
	    this.state.invalid = new Map();
	    this.state.missing = new Set();
	    this.state.completed = 0;
	    this.state.values = {};

	    if (first !== true) {
	      await this.initialize();
	      await this.render();
	    }
	  }

	  moveCursor(n) {
	    let item = this.getItem();
	    this.cursor += n;
	    item.cursor += n;
	  }

	  dispatch(ch, key) {
	    if (!key.code && !key.ctrl && ch != null && this.getItem()) {
	      this.append(ch, key);
	      return;
	    }
	    this.alert();
	  }

	  append(ch, key) {
	    let item = this.getItem();
	    let prefix = item.input.slice(0, this.cursor);
	    let suffix = item.input.slice(this.cursor);
	    this.input = item.input = `${prefix}${ch}${suffix}`;
	    this.moveCursor(1);
	    this.render();
	  }

	  delete() {
	    let item = this.getItem();
	    if (this.cursor <= 0 || !item.input) return this.alert();
	    let suffix = item.input.slice(this.cursor);
	    let prefix = item.input.slice(0, this.cursor - 1);
	    this.input = item.input = `${prefix}${suffix}`;
	    this.moveCursor(-1);
	    this.render();
	  }

	  increment(i) {
	    return i >= this.state.keys.length - 1 ? 0 : i + 1;
	  }

	  decrement(i) {
	    return i <= 0 ? this.state.keys.length - 1 : i - 1;
	  }

	  first() {
	    this.state.index = 0;
	    this.render();
	  }

	  last() {
	    this.state.index = this.state.keys.length - 1;
	    this.render();
	  }

	  right() {
	    if (this.cursor >= this.input.length) return this.alert();
	    this.moveCursor(1);
	    this.render();
	  }

	  left() {
	    if (this.cursor <= 0) return this.alert();
	    this.moveCursor(-1);
	    this.render();
	  }

	  prev() {
	    this.state.index = this.decrement(this.state.index);
	    this.getItem();
	    this.render();
	  }

	  next() {
	    this.state.index = this.increment(this.state.index);
	    this.getItem();
	    this.render();
	  }

	  up() {
	    this.prev();
	  }

	  down() {
	    this.next();
	  }

	  format(value) {
	    let color = this.state.completed < 100 ? this.styles.warning : this.styles.success;
	    if (this.state.submitted === true && this.state.completed !== 100) {
	      color = this.styles.danger;
	    }
	    return color(`${this.state.completed}% completed`);
	  }

	  async render() {
	    let { index, keys = [], submitted, size } = this.state;

	    let newline = [this.options.newline, '\n'].find(v => v != null);
	    let prefix = await this.prefix();
	    let separator = await this.separator();
	    let message = await this.message();

	    let prompt = [prefix, message, separator].filter(Boolean).join(' ');
	    this.state.prompt = prompt;

	    let header = await this.header();
	    let error = (await this.error()) || '';
	    let hint = (await this.hint()) || '';
	    let body = submitted ? '' : await this.interpolate(this.state);

	    let key = this.state.key = keys[index] || '';
	    let input = await this.format(key);
	    let footer = await this.footer();
	    if (input) prompt += ' ' + input;
	    if (hint && !input && this.state.completed === 0) prompt += ' ' + hint;

	    this.clear(size);
	    let lines = [header, prompt, body, footer, error.trim()];
	    this.write(lines.filter(Boolean).join(newline));
	    this.restore();
	  }

	  getItem(name) {
	    let { items, keys, index } = this.state;
	    let item = items.find(ch => ch.name === keys[index]);
	    if (item && item.input != null) {
	      this.input = item.input;
	      this.cursor = item.cursor;
	    }
	    return item;
	  }

	  async submit() {
	    if (typeof this.interpolate !== 'function') await this.initialize();
	    await this.interpolate(this.state, true);

	    let { invalid, missing, output, values } = this.state;
	    if (invalid.size) {
	      let err = '';
	      for (let [key, value] of invalid) err += `Invalid ${key}: ${value}\n`;
	      this.state.error = err;
	      return super.submit();
	    }

	    if (missing.size) {
	      this.state.error = 'Required: ' + [...missing.keys()].join(', ');
	      return super.submit();
	    }

	    let lines = colors.unstyle(output).split('\n');
	    let result = lines.map(v => v.slice(1)).join('\n');
	    this.value = { values, result };
	    return super.submit();
	  }
	}

	snippet = SnippetPrompt;
	return snippet;
}

var sort;
var hasRequiredSort;

function requireSort () {
	if (hasRequiredSort) return sort;
	hasRequiredSort = 1;

	const hint = '(Use <shift>+<up/down> to sort)';
	const Prompt = requireSelect();

	class Sort extends Prompt {
	  constructor(options) {
	    super({ ...options, reorder: false, sort: true, multiple: true });
	    this.state.hint = [this.options.hint, hint].find(this.isValue.bind(this));
	  }

	  indicator() {
	    return '';
	  }

	  async renderChoice(choice, i) {
	    let str = await super.renderChoice(choice, i);
	    let sym = this.symbols.identicalTo + ' ';
	    let pre = (this.index === i && this.sorting) ? this.styles.muted(sym) : '  ';
	    if (this.options.drag === false) pre = '';
	    if (this.options.numbered === true) {
	      return pre + `${i + 1} - ` + str;
	    }
	    return pre + str;
	  }

	  get selected() {
	    return this.choices;
	  }

	  submit() {
	    this.value = this.choices.map(choice => choice.value);
	    return super.submit();
	  }
	}

	sort = Sort;
	return sort;
}

var survey;
var hasRequiredSurvey;

function requireSurvey () {
	if (hasRequiredSurvey) return survey;
	hasRequiredSurvey = 1;

	const ArrayPrompt = requireArray();

	class Survey extends ArrayPrompt {
	  constructor(options = {}) {
	    super(options);
	    this.emptyError = options.emptyError || 'No items were selected';
	    this.term = process.env.TERM_PROGRAM;

	    if (!this.options.header) {
	      let header = ['', '4 - Strongly Agree', '3 - Agree', '2 - Neutral', '1 - Disagree', '0 - Strongly Disagree', ''];
	      header = header.map(ele => this.styles.muted(ele));
	      this.state.header = header.join('\n   ');
	    }
	  }

	  async toChoices(...args) {
	    if (this.createdScales) return false;
	    this.createdScales = true;
	    let choices = await super.toChoices(...args);
	    for (let choice of choices) {
	      choice.scale = createScale(5, this.options);
	      choice.scaleIdx = 2;
	    }
	    return choices;
	  }

	  dispatch() {
	    this.alert();
	  }

	  space() {
	    let choice = this.focused;
	    let ele = choice.scale[choice.scaleIdx];
	    let selected = ele.selected;
	    choice.scale.forEach(e => (e.selected = false));
	    ele.selected = !selected;
	    return this.render();
	  }

	  indicator() {
	    return '';
	  }

	  pointer() {
	    return '';
	  }

	  separator() {
	    return this.styles.muted(this.symbols.ellipsis);
	  }

	  right() {
	    let choice = this.focused;
	    if (choice.scaleIdx >= choice.scale.length - 1) return this.alert();
	    choice.scaleIdx++;
	    return this.render();
	  }

	  left() {
	    let choice = this.focused;
	    if (choice.scaleIdx <= 0) return this.alert();
	    choice.scaleIdx--;
	    return this.render();
	  }

	  indent() {
	    return '   ';
	  }

	  async renderChoice(item, i) {
	    await this.onChoice(item, i);
	    let focused = this.index === i;
	    let isHyper = this.term === 'Hyper';
	    let n = !isHyper ? 8 : 9;
	    let s = !isHyper ? ' ' : '';
	    let ln = this.symbols.line.repeat(n);
	    let sp = ' '.repeat(n + (isHyper ? 0 : 1));
	    let dot = enabled => (enabled ? this.styles.success('◉') : '◯') + s;

	    let num = i + 1 + '.';
	    let color = focused ? this.styles.heading : this.styles.noop;
	    let msg = await this.resolve(item.message, this.state, item, i);
	    let indent = this.indent(item);
	    let scale = indent + item.scale.map((e, i) => dot(i === item.scaleIdx)).join(ln);
	    let val = i => i === item.scaleIdx ? color(i) : i;
	    let next = indent + item.scale.map((e, i) => val(i)).join(sp);

	    let line = () => [num, msg].filter(Boolean).join(' ');
	    let lines = () => [line(), scale, next, ' '].filter(Boolean).join('\n');

	    if (focused) {
	      scale = this.styles.cyan(scale);
	      next = this.styles.cyan(next);
	    }

	    return lines();
	  }

	  async renderChoices() {
	    if (this.state.submitted) return '';
	    let choices = this.visible.map(async(ch, i) => await this.renderChoice(ch, i));
	    let visible = await Promise.all(choices);
	    if (!visible.length) visible.push(this.styles.danger('No matching choices'));
	    return visible.join('\n');
	  }

	  format() {
	    if (this.state.submitted) {
	      let values = this.choices.map(ch => this.styles.info(ch.scaleIdx));
	      return values.join(', ');
	    }
	    return '';
	  }

	  async render() {
	    let { submitted, size } = this.state;

	    let prefix = await this.prefix();
	    let separator = await this.separator();
	    let message = await this.message();

	    let prompt = [prefix, message, separator].filter(Boolean).join(' ');
	    this.state.prompt = prompt;

	    let header = await this.header();
	    let output = await this.format();
	    let help = await this.error() || await this.hint();
	    let body = await this.renderChoices();
	    let footer = await this.footer();

	    if (output || !help) prompt += ' ' + output;
	    if (help && !prompt.includes(help)) prompt += ' ' + help;

	    if (submitted && !output && !body && this.multiple && this.type !== 'form') {
	      prompt += this.styles.danger(this.emptyError);
	    }

	    this.clear(size);
	    this.write([prompt, header, body, footer].filter(Boolean).join('\n'));
	    this.restore();
	  }

	  submit() {
	    this.value = {};
	    for (let choice of this.choices) {
	      this.value[choice.name] = choice.scaleIdx;
	    }
	    return this.base.submit.call(this);
	  }
	}

	function createScale(n, options = {}) {
	  if (Array.isArray(options.scale)) {
	    return options.scale.map(ele => ({ ...ele }));
	  }
	  let scale = [];
	  for (let i = 1; i < n + 1; i++) scale.push({ i, selected: false });
	  return scale;
	}

	survey = Survey;
	return survey;
}

var text;
var hasRequiredText;

function requireText () {
	if (hasRequiredText) return text;
	hasRequiredText = 1;
	text = requireInput();
	return text;
}

var toggle;
var hasRequiredToggle;

function requireToggle () {
	if (hasRequiredToggle) return toggle;
	hasRequiredToggle = 1;

	const BooleanPrompt = requireBoolean();

	class TogglePrompt extends BooleanPrompt {
	  async initialize() {
	    await super.initialize();
	    this.value = this.initial = !!this.options.initial;
	    this.disabled = this.options.disabled || 'no';
	    this.enabled = this.options.enabled || 'yes';
	    await this.render();
	  }

	  reset() {
	    this.value = this.initial;
	    this.render();
	  }

	  delete() {
	    this.alert();
	  }

	  toggle() {
	    this.value = !this.value;
	    this.render();
	  }

	  enable() {
	    if (this.value === true) return this.alert();
	    this.value = true;
	    this.render();
	  }
	  disable() {
	    if (this.value === false) return this.alert();
	    this.value = false;
	    this.render();
	  }

	  up() {
	    this.toggle();
	  }
	  down() {
	    this.toggle();
	  }
	  right() {
	    this.toggle();
	  }
	  left() {
	    this.toggle();
	  }
	  next() {
	    this.toggle();
	  }
	  prev() {
	    this.toggle();
	  }

	  dispatch(ch = '', key) {
	    switch (ch.toLowerCase()) {
	      case ' ':
	        return this.toggle();
	      case '1':
	      case 'y':
	      case 't':
	        return this.enable();
	      case '0':
	      case 'n':
	      case 'f':
	        return this.disable();
	      default: {
	        return this.alert();
	      }
	    }
	  }

	  format() {
	    let active = str => this.styles.primary.underline(str);
	    let value = [
	      this.value ? this.disabled : active(this.disabled),
	      this.value ? active(this.enabled) : this.enabled
	    ];
	    return value.join(this.styles.muted(' / '));
	  }

	  async render() {
	    let { size } = this.state;

	    let header = await this.header();
	    let prefix = await this.prefix();
	    let separator = await this.separator();
	    let message = await this.message();

	    let output = await this.format();
	    let help = (await this.error()) || (await this.hint());
	    let footer = await this.footer();

	    let prompt = [prefix, message, separator, output].join(' ');
	    this.state.prompt = prompt;

	    if (help && !prompt.includes(help)) prompt += ' ' + help;

	    this.clear(size);
	    this.write([header, prompt, footer].filter(Boolean).join('\n'));
	    this.write(this.margin[2]);
	    this.restore();
	  }
	}

	toggle = TogglePrompt;
	return toggle;
}

var quiz;
var hasRequiredQuiz;

function requireQuiz () {
	if (hasRequiredQuiz) return quiz;
	hasRequiredQuiz = 1;

	const SelectPrompt = requireSelect();

	class Quiz extends SelectPrompt {
	  constructor(options) {
	    super(options);
	    if (typeof this.options.correctChoice !== 'number' || this.options.correctChoice < 0) {
	      throw new Error('Please specify the index of the correct answer from the list of choices');
	    }
	  }

	  async toChoices(value, parent) {
	    let choices = await super.toChoices(value, parent);
	    if (choices.length < 2) {
	      throw new Error('Please give at least two choices to the user');
	    }
	    if (this.options.correctChoice > choices.length) {
	      throw new Error('Please specify the index of the correct answer from the list of choices');
	    }
	    return choices;
	  }

	  check(state) {
	    return state.index === this.options.correctChoice;
	  }

	  async result(selected) {
	    return {
	      selectedAnswer: selected,
	      correctAnswer: this.options.choices[this.options.correctChoice].value,
	      correct: await this.check(this.state)
	    };
	  }
	}

	quiz = Quiz;
	return quiz;
}

var hasRequiredPrompts;

function requirePrompts () {
	if (hasRequiredPrompts) return prompts$1;
	hasRequiredPrompts = 1;
	(function (exports) {

		const utils = utils$1;

		const define = (key, fn) => {
		  utils.defineExport(exports, key, fn);
		  utils.defineExport(exports, key.toLowerCase(), fn);
		};

		define('AutoComplete', () => requireAutocomplete());
		define('BasicAuth', () => requireBasicauth());
		define('Confirm', () => requireConfirm());
		define('Editable', () => requireEditable());
		define('Form', () => requireForm());
		define('Input', () => requireInput());
		define('Invisible', () => requireInvisible());
		define('List', () => requireList());
		define('MultiSelect', () => requireMultiselect());
		define('Numeral', () => requireNumeral());
		define('Password', () => requirePassword());
		define('Scale', () => requireScale());
		define('Select', () => requireSelect());
		define('Snippet', () => requireSnippet());
		define('Sort', () => requireSort());
		define('Survey', () => requireSurvey());
		define('Text', () => requireText());
		define('Toggle', () => requireToggle());
		define('Quiz', () => requireQuiz()); 
	} (prompts$1));
	return prompts$1;
}

var types;
var hasRequiredTypes;

function requireTypes () {
	if (hasRequiredTypes) return types;
	hasRequiredTypes = 1;
	types = {
	  ArrayPrompt: requireArray(),
	  AuthPrompt: requireAuth(),
	  BooleanPrompt: requireBoolean(),
	  NumberPrompt: requireNumber(),
	  StringPrompt: requireString()
	};
	return types;
}

const assert$1 = require$$0$3;
const Events = require$$0$2;
const utils = utils$1;

/**
 * Create an instance of `Enquirer`.
 *
 * ```js
 * const Enquirer = require('enquirer');
 * const enquirer = new Enquirer();
 * ```
 * @name Enquirer
 * @param {Object} `options` (optional) Options to use with all prompts.
 * @param {Object} `answers` (optional) Answers object to initialize with.
 * @api public
 */

class Enquirer extends Events {
  constructor(options, answers) {
    super();
    this.options = utils.merge({}, options);
    this.answers = { ...answers };
  }

  /**
   * Register a custom prompt type.
   *
   * ```js
   * const Enquirer = require('enquirer');
   * const enquirer = new Enquirer();
   * enquirer.register('customType', require('./custom-prompt'));
   * ```
   * @name register()
   * @param {String} `type`
   * @param {Function|Prompt} `fn` `Prompt` class, or a function that returns a `Prompt` class.
   * @return {Object} Returns the Enquirer instance
   * @api public
   */

  register(type, fn) {
    if (utils.isObject(type)) {
      for (let key of Object.keys(type)) this.register(key, type[key]);
      return this;
    }
    assert$1.equal(typeof fn, 'function', 'expected a function');
    let name = type.toLowerCase();
    if (fn.prototype instanceof this.Prompt) {
      this.prompts[name] = fn;
    } else {
      this.prompts[name] = fn(this.Prompt, this);
    }
    return this;
  }

  /**
   * Prompt function that takes a "question" object or array of question objects,
   * and returns an object with responses from the user.
   *
   * ```js
   * const Enquirer = require('enquirer');
   * const enquirer = new Enquirer();
   *
   * const response = await enquirer.prompt({
   *   type: 'input',
   *   name: 'username',
   *   message: 'What is your username?'
   * });
   * console.log(response);
   * ```
   * @name prompt()
   * @param {Array|Object} `questions` Options objects for one or more prompts to run.
   * @return {Promise} Promise that returns an "answers" object with the user's responses.
   * @api public
   */

  async prompt(questions = []) {
    for (let question of [].concat(questions)) {
      try {
        if (typeof question === 'function') question = await question.call(this);
        await this.ask(utils.merge({}, this.options, question));
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return this.answers;
  }

  async ask(question) {
    if (typeof question === 'function') {
      question = await question.call(this);
    }

    let opts = utils.merge({}, this.options, question);
    let { type, name } = question;
    let { set, get } = utils;

    if (typeof type === 'function') {
      type = await type.call(this, question, this.answers);
    }

    if (!type) return this.answers[name];

    assert$1(this.prompts[type], `Prompt "${type}" is not registered`);

    let prompt = new this.prompts[type](opts);
    let value = get(this.answers, name);

    prompt.state.answers = this.answers;
    prompt.enquirer = this;

    if (name) {
      prompt.on('submit', value => {
        this.emit('answer', name, value, prompt);
        set(this.answers, name, value);
      });
    }

    // bubble events
    let emit = prompt.emit.bind(prompt);
    prompt.emit = (...args) => {
      this.emit.call(this, ...args);
      return emit(...args);
    };

    this.emit('prompt', prompt, this);

    if (opts.autofill && value != null) {
      prompt.value = prompt.input = value;

      // if "autofill=show" render the prompt, otherwise stay "silent"
      if (opts.autofill === 'show') {
        await prompt.submit();
      }
    } else {
      value = prompt.value = await prompt.run();
    }

    return value;
  }

  /**
   * Use an enquirer plugin.
   *
   * ```js
   * const Enquirer = require('enquirer');
   * const enquirer = new Enquirer();
   * const plugin = enquirer => {
   *   // do stuff to enquire instance
   * };
   * enquirer.use(plugin);
   * ```
   * @name use()
   * @param {Function} `plugin` Plugin function that takes an instance of Enquirer.
   * @return {Object} Returns the Enquirer instance.
   * @api public
   */

  use(plugin) {
    plugin.call(this, this);
    return this;
  }

  set Prompt(value) {
    this._Prompt = value;
  }
  get Prompt() {
    return this._Prompt || this.constructor.Prompt;
  }

  get prompts() {
    return this.constructor.prompts;
  }

  static set Prompt(value) {
    this._Prompt = value;
  }
  static get Prompt() {
    return this._Prompt || requirePrompt();
  }

  static get prompts() {
    return requirePrompts();
  }

  static get types() {
    return requireTypes();
  }

  /**
   * Prompt function that takes a "question" object or array of question objects,
   * and returns an object with responses from the user.
   *
   * ```js
   * const { prompt } = require('enquirer');
   * const response = await prompt({
   *   type: 'input',
   *   name: 'username',
   *   message: 'What is your username?'
   * });
   * console.log(response);
   * ```
   * @name Enquirer#prompt
   * @param {Array|Object} `questions` Options objects for one or more prompts to run.
   * @return {Promise} Promise that returns an "answers" object with the user's responses.
   * @api public
   */

  static get prompt() {
    const fn = (questions, ...rest) => {
      let enquirer = new this(...rest);
      let emit = enquirer.emit.bind(enquirer);
      enquirer.emit = (...args) => {
        fn.emit(...args);
        return emit(...args);
      };
      return enquirer.prompt(questions);
    };
    utils.mixinEmitter(fn, new Events());
    return fn;
  }
}

utils.mixinEmitter(Enquirer, new Events());
const prompts = Enquirer.prompts;

for (let name of Object.keys(prompts)) {
  let key = name.toLowerCase();

  let run = options => new prompts[name](options).run();
  Enquirer.prompt[key] = run;
  Enquirer[key] = run;

  if (!Enquirer[name]) {
    Reflect.defineProperty(Enquirer, name, { get: () => prompts[name] });
  }
}

const exp = name => {
  utils.defineExport(Enquirer, name, () => Enquirer.types[name]);
};

exp('ArrayPrompt');
exp('AuthPrompt');
exp('BooleanPrompt');
exp('NumberPrompt');
exp('StringPrompt');

var enquirer = Enquirer;

var enquirer$1 = /*@__PURE__*/getDefaultExportFromCjs(enquirer);

var crossSpawn$1 = {exports: {}};

var windows;
var hasRequiredWindows;

function requireWindows () {
	if (hasRequiredWindows) return windows;
	hasRequiredWindows = 1;
	windows = isexe;
	isexe.sync = sync;

	var fs = require$$0$4;

	function checkPathExt (path, options) {
	  var pathext = options.pathExt !== undefined ?
	    options.pathExt : process.env.PATHEXT;

	  if (!pathext) {
	    return true
	  }

	  pathext = pathext.split(';');
	  if (pathext.indexOf('') !== -1) {
	    return true
	  }
	  for (var i = 0; i < pathext.length; i++) {
	    var p = pathext[i].toLowerCase();
	    if (p && path.substr(-p.length).toLowerCase() === p) {
	      return true
	    }
	  }
	  return false
	}

	function checkStat (stat, path, options) {
	  if (!stat.isSymbolicLink() && !stat.isFile()) {
	    return false
	  }
	  return checkPathExt(path, options)
	}

	function isexe (path, options, cb) {
	  fs.stat(path, function (er, stat) {
	    cb(er, er ? false : checkStat(stat, path, options));
	  });
	}

	function sync (path, options) {
	  return checkStat(fs.statSync(path), path, options)
	}
	return windows;
}

var mode;
var hasRequiredMode;

function requireMode () {
	if (hasRequiredMode) return mode;
	hasRequiredMode = 1;
	mode = isexe;
	isexe.sync = sync;

	var fs = require$$0$4;

	function isexe (path, options, cb) {
	  fs.stat(path, function (er, stat) {
	    cb(er, er ? false : checkStat(stat, options));
	  });
	}

	function sync (path, options) {
	  return checkStat(fs.statSync(path), options)
	}

	function checkStat (stat, options) {
	  return stat.isFile() && checkMode(stat, options)
	}

	function checkMode (stat, options) {
	  var mod = stat.mode;
	  var uid = stat.uid;
	  var gid = stat.gid;

	  var myUid = options.uid !== undefined ?
	    options.uid : process.getuid && process.getuid();
	  var myGid = options.gid !== undefined ?
	    options.gid : process.getgid && process.getgid();

	  var u = parseInt('100', 8);
	  var g = parseInt('010', 8);
	  var o = parseInt('001', 8);
	  var ug = u | g;

	  var ret = (mod & o) ||
	    (mod & g) && gid === myGid ||
	    (mod & u) && uid === myUid ||
	    (mod & ug) && myUid === 0;

	  return ret
	}
	return mode;
}

var core;
if (process.platform === 'win32' || commonjsGlobal.TESTING_WINDOWS) {
  core = requireWindows();
} else {
  core = requireMode();
}

var isexe_1 = isexe$1;
isexe$1.sync = sync;

function isexe$1 (path, options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = {};
  }

  if (!cb) {
    if (typeof Promise !== 'function') {
      throw new TypeError('callback not provided')
    }

    return new Promise(function (resolve, reject) {
      isexe$1(path, options || {}, function (er, is) {
        if (er) {
          reject(er);
        } else {
          resolve(is);
        }
      });
    })
  }

  core(path, options || {}, function (er, is) {
    // ignore EACCES because that just means we aren't allowed to run it
    if (er) {
      if (er.code === 'EACCES' || options && options.ignoreErrors) {
        er = null;
        is = false;
      }
    }
    cb(er, is);
  });
}

function sync (path, options) {
  // my kingdom for a filtered catch
  try {
    return core.sync(path, options || {})
  } catch (er) {
    if (options && options.ignoreErrors || er.code === 'EACCES') {
      return false
    } else {
      throw er
    }
  }
}

const isWindows = process.platform === 'win32' ||
    process.env.OSTYPE === 'cygwin' ||
    process.env.OSTYPE === 'msys';

const path$2 = require$$0$5;
const COLON = isWindows ? ';' : ':';
const isexe = isexe_1;

const getNotFoundError = (cmd) =>
  Object.assign(new Error(`not found: ${cmd}`), { code: 'ENOENT' });

const getPathInfo = (cmd, opt) => {
  const colon = opt.colon || COLON;

  // If it has a slash, then we don't bother searching the pathenv.
  // just check the file itself, and that's it.
  const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? ['']
    : (
      [
        // windows always checks the cwd first
        ...(isWindows ? [process.cwd()] : []),
        ...(opt.path || process.env.PATH ||
          /* istanbul ignore next: very unusual */ '').split(colon),
      ]
    );
  const pathExtExe = isWindows
    ? opt.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM'
    : '';
  const pathExt = isWindows ? pathExtExe.split(colon) : [''];

  if (isWindows) {
    if (cmd.indexOf('.') !== -1 && pathExt[0] !== '')
      pathExt.unshift('');
  }

  return {
    pathEnv,
    pathExt,
    pathExtExe,
  }
};

const which$1 = (cmd, opt, cb) => {
  if (typeof opt === 'function') {
    cb = opt;
    opt = {};
  }
  if (!opt)
    opt = {};

  const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
  const found = [];

  const step = i => new Promise((resolve, reject) => {
    if (i === pathEnv.length)
      return opt.all && found.length ? resolve(found)
        : reject(getNotFoundError(cmd))

    const ppRaw = pathEnv[i];
    const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;

    const pCmd = path$2.join(pathPart, cmd);
    const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd
      : pCmd;

    resolve(subStep(p, i, 0));
  });

  const subStep = (p, i, ii) => new Promise((resolve, reject) => {
    if (ii === pathExt.length)
      return resolve(step(i + 1))
    const ext = pathExt[ii];
    isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
      if (!er && is) {
        if (opt.all)
          found.push(p + ext);
        else
          return resolve(p + ext)
      }
      return resolve(subStep(p, i, ii + 1))
    });
  });

  return cb ? step(0).then(res => cb(null, res), cb) : step(0)
};

const whichSync = (cmd, opt) => {
  opt = opt || {};

  const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
  const found = [];

  for (let i = 0; i < pathEnv.length; i ++) {
    const ppRaw = pathEnv[i];
    const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;

    const pCmd = path$2.join(pathPart, cmd);
    const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd
      : pCmd;

    for (let j = 0; j < pathExt.length; j ++) {
      const cur = p + pathExt[j];
      try {
        const is = isexe.sync(cur, { pathExt: pathExtExe });
        if (is) {
          if (opt.all)
            found.push(cur);
          else
            return cur
        }
      } catch (ex) {}
    }
  }

  if (opt.all && found.length)
    return found

  if (opt.nothrow)
    return null

  throw getNotFoundError(cmd)
};

var which_1 = which$1;
which$1.sync = whichSync;

var pathKey$2 = {exports: {}};

const pathKey$1 = (options = {}) => {
	const environment = options.env || process.env;
	const platform = options.platform || process.platform;

	if (platform !== 'win32') {
		return 'PATH';
	}

	return Object.keys(environment).reverse().find(key => key.toUpperCase() === 'PATH') || 'Path';
};

pathKey$2.exports = pathKey$1;
// TODO: Remove this for the next major release
pathKey$2.exports.default = pathKey$1;

var pathKeyExports = pathKey$2.exports;

const path$1 = require$$0$5;
const which = which_1;
const getPathKey = pathKeyExports;

function resolveCommandAttempt(parsed, withoutPathExt) {
    const env = parsed.options.env || process.env;
    const cwd = process.cwd();
    const hasCustomCwd = parsed.options.cwd != null;
    // Worker threads do not have process.chdir()
    const shouldSwitchCwd = hasCustomCwd && process.chdir !== undefined && !process.chdir.disabled;

    // If a custom `cwd` was specified, we need to change the process cwd
    // because `which` will do stat calls but does not support a custom cwd
    if (shouldSwitchCwd) {
        try {
            process.chdir(parsed.options.cwd);
        } catch (err) {
            /* Empty */
        }
    }

    let resolved;

    try {
        resolved = which.sync(parsed.command, {
            path: env[getPathKey({ env })],
            pathExt: withoutPathExt ? path$1.delimiter : undefined,
        });
    } catch (e) {
        /* Empty */
    } finally {
        if (shouldSwitchCwd) {
            process.chdir(cwd);
        }
    }

    // If we successfully resolved, ensure that an absolute path is returned
    // Note that when a custom `cwd` was used, we need to resolve to an absolute path based on it
    if (resolved) {
        resolved = path$1.resolve(hasCustomCwd ? parsed.options.cwd : '', resolved);
    }

    return resolved;
}

function resolveCommand$1(parsed) {
    return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
}

var resolveCommand_1 = resolveCommand$1;

var _escape = {};

// See http://www.robvanderwoude.com/escapechars.php
const metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;

function escapeCommand(arg) {
    // Escape meta chars
    arg = arg.replace(metaCharsRegExp, '^$1');

    return arg;
}

function escapeArgument(arg, doubleEscapeMetaChars) {
    // Convert to string
    arg = `${arg}`;

    // Algorithm below is based on https://qntm.org/cmd

    // Sequence of backslashes followed by a double quote:
    // double up all the backslashes and escape the double quote
    arg = arg.replace(/(\\*)"/g, '$1$1\\"');

    // Sequence of backslashes followed by the end of the string
    // (which will become a double quote later):
    // double up all the backslashes
    arg = arg.replace(/(\\*)$/, '$1$1');

    // All other backslashes occur literally

    // Quote the whole thing:
    arg = `"${arg}"`;

    // Escape meta chars
    arg = arg.replace(metaCharsRegExp, '^$1');

    // Double escape meta chars if necessary
    if (doubleEscapeMetaChars) {
        arg = arg.replace(metaCharsRegExp, '^$1');
    }

    return arg;
}

_escape.command = escapeCommand;
_escape.argument = escapeArgument;

var shebangRegex$1 = /^#!(.*)/;

const shebangRegex = shebangRegex$1;

var shebangCommand$1 = (string = '') => {
	const match = string.match(shebangRegex);

	if (!match) {
		return null;
	}

	const [path, argument] = match[0].replace(/#! ?/, '').split(' ');
	const binary = path.split('/').pop();

	if (binary === 'env') {
		return argument;
	}

	return argument ? `${binary} ${argument}` : binary;
};

const fs = require$$0$4;
const shebangCommand = shebangCommand$1;

function readShebang$1(command) {
    // Read the first 150 bytes from the file
    const size = 150;
    const buffer = Buffer.alloc(size);

    let fd;

    try {
        fd = fs.openSync(command, 'r');
        fs.readSync(fd, buffer, 0, size, 0);
        fs.closeSync(fd);
    } catch (e) { /* Empty */ }

    // Attempt to extract shebang (null is returned if not a shebang)
    return shebangCommand(buffer.toString());
}

var readShebang_1 = readShebang$1;

const path = require$$0$5;
const resolveCommand = resolveCommand_1;
const escape = _escape;
const readShebang = readShebang_1;

const isWin$2 = process.platform === 'win32';
const isExecutableRegExp = /\.(?:com|exe)$/i;
const isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;

function detectShebang(parsed) {
    parsed.file = resolveCommand(parsed);

    const shebang = parsed.file && readShebang(parsed.file);

    if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;

        return resolveCommand(parsed);
    }

    return parsed.file;
}

function parseNonShell(parsed) {
    if (!isWin$2) {
        return parsed;
    }

    // Detect & add support for shebangs
    const commandFile = detectShebang(parsed);

    // We don't need a shell if the command filename is an executable
    const needsShell = !isExecutableRegExp.test(commandFile);

    // If a shell is required, use cmd.exe and take care of escaping everything correctly
    // Note that `forceShell` is an hidden option used only in tests
    if (parsed.options.forceShell || needsShell) {
        // Need to double escape meta chars if the command is a cmd-shim located in `node_modules/.bin/`
        // The cmd-shim simply calls execute the package bin file with NodeJS, proxying any argument
        // Because the escape of metachars with ^ gets interpreted when the cmd.exe is first called,
        // we need to double escape them
        const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);

        // Normalize posix paths into OS compatible paths (e.g.: foo/bar -> foo\bar)
        // This is necessary otherwise it will always fail with ENOENT in those cases
        parsed.command = path.normalize(parsed.command);

        // Escape command & arguments
        parsed.command = escape.command(parsed.command);
        parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));

        const shellCommand = [parsed.command].concat(parsed.args).join(' ');

        parsed.args = ['/d', '/s', '/c', `"${shellCommand}"`];
        parsed.command = process.env.comspec || 'cmd.exe';
        parsed.options.windowsVerbatimArguments = true; // Tell node's spawn that the arguments are already escaped
    }

    return parsed;
}

function parse$4(command, args, options) {
    // Normalize arguments, similar to nodejs
    if (args && !Array.isArray(args)) {
        options = args;
        args = null;
    }

    args = args ? args.slice(0) : []; // Clone array to avoid changing the original
    options = Object.assign({}, options); // Clone object to avoid changing the original

    // Build our parsed object
    const parsed = {
        command,
        args,
        options,
        file: undefined,
        original: {
            command,
            args,
        },
    };

    // Delegate further parsing to shell or non-shell
    return options.shell ? parsed : parseNonShell(parsed);
}

var parse_1$1 = parse$4;

const isWin$1 = process.platform === 'win32';

function notFoundError(original, syscall) {
    return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: 'ENOENT',
        errno: 'ENOENT',
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args,
    });
}

function hookChildProcess(cp, parsed) {
    if (!isWin$1) {
        return;
    }

    const originalEmit = cp.emit;

    cp.emit = function (name, arg1) {
        // If emitting "exit" event and exit code is 1, we need to check if
        // the command exists and emit an "error" instead
        // See https://github.com/IndigoUnited/node-cross-spawn/issues/16
        if (name === 'exit') {
            const err = verifyENOENT(arg1, parsed);

            if (err) {
                return originalEmit.call(cp, 'error', err);
            }
        }

        return originalEmit.apply(cp, arguments); // eslint-disable-line prefer-rest-params
    };
}

function verifyENOENT(status, parsed) {
    if (isWin$1 && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, 'spawn');
    }

    return null;
}

function verifyENOENTSync(status, parsed) {
    if (isWin$1 && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, 'spawnSync');
    }

    return null;
}

var enoent$1 = {
    hookChildProcess,
    verifyENOENT,
    verifyENOENTSync,
    notFoundError,
};

const cp = require$$0$6;
const parse$3 = parse_1$1;
const enoent = enoent$1;

function spawn(command, args, options) {
    // Parse the arguments
    const parsed = parse$3(command, args, options);

    // Spawn the child process
    const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);

    // Hook into child process "exit" event to emit an error if the command
    // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    enoent.hookChildProcess(spawned, parsed);

    return spawned;
}

function spawnSync(command, args, options) {
    // Parse the arguments
    const parsed = parse$3(command, args, options);

    // Spawn the child process
    const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);

    // Analyze if the command does not exist, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);

    return result;
}

crossSpawn$1.exports = spawn;
crossSpawn$1.exports.spawn = spawn;
crossSpawn$1.exports.sync = spawnSync;

crossSpawn$1.exports._parse = parse$3;
crossSpawn$1.exports._enoent = enoent;

var crossSpawnExports = crossSpawn$1.exports;
var crossSpawn = /*@__PURE__*/getDefaultExportFromCjs(crossSpawnExports);

function stripFinalNewline(input) {
	const LF = typeof input === 'string' ? '\n' : '\n'.charCodeAt();
	const CR = typeof input === 'string' ? '\r' : '\r'.charCodeAt();

	if (input[input.length - 1] === LF) {
		input = input.slice(0, -1);
	}

	if (input[input.length - 1] === CR) {
		input = input.slice(0, -1);
	}

	return input;
}

function pathKey(options = {}) {
	const {
		env = process.env,
		platform = process.platform
	} = options;

	if (platform !== 'win32') {
		return 'PATH';
	}

	return Object.keys(env).reverse().find(key => key.toUpperCase() === 'PATH') || 'Path';
}

function npmRunPath(options = {}) {
	const {
		cwd = process$2.cwd(),
		path: path_ = process$2.env[pathKey()],
		execPath = process$2.execPath,
	} = options;

	let previous;
	const cwdString = cwd instanceof URL ? url.fileURLToPath(cwd) : cwd;
	let cwdPath = path$3.resolve(cwdString);
	const result = [];

	while (previous !== cwdPath) {
		result.push(path$3.join(cwdPath, 'node_modules/.bin'));
		previous = cwdPath;
		cwdPath = path$3.resolve(cwdPath, '..');
	}

	// Ensure the running `node` binary is used.
	result.push(path$3.resolve(cwdString, execPath, '..'));

	return [...result, path_].join(path$3.delimiter);
}

function npmRunPathEnv({env = process$2.env, ...options} = {}) {
	env = {...env};

	const path = pathKey({env});
	options.path = env[path];
	env[path] = npmRunPath(options);

	return env;
}

const copyProperty = (to, from, property, ignoreNonConfigurable) => {
	// `Function#length` should reflect the parameters of `to` not `from` since we keep its body.
	// `Function#prototype` is non-writable and non-configurable so can never be modified.
	if (property === 'length' || property === 'prototype') {
		return;
	}

	// `Function#arguments` and `Function#caller` should not be copied. They were reported to be present in `Reflect.ownKeys` for some devices in React Native (#41), so we explicitly ignore them here.
	if (property === 'arguments' || property === 'caller') {
		return;
	}

	const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
	const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);

	if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
		return;
	}

	Object.defineProperty(to, property, fromDescriptor);
};

// `Object.defineProperty()` throws if the property exists, is not configurable and either:
// - one its descriptors is changed
// - it is non-writable and its value is changed
const canCopyProperty = function (toDescriptor, fromDescriptor) {
	return toDescriptor === undefined || toDescriptor.configurable || (
		toDescriptor.writable === fromDescriptor.writable &&
		toDescriptor.enumerable === fromDescriptor.enumerable &&
		toDescriptor.configurable === fromDescriptor.configurable &&
		(toDescriptor.writable || toDescriptor.value === fromDescriptor.value)
	);
};

const changePrototype = (to, from) => {
	const fromPrototype = Object.getPrototypeOf(from);
	if (fromPrototype === Object.getPrototypeOf(to)) {
		return;
	}

	Object.setPrototypeOf(to, fromPrototype);
};

const wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/\n${fromBody}`;

const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, 'toString');
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name');

// We call `from.toString()` early (not lazily) to ensure `from` can be garbage collected.
// We use `bind()` instead of a closure for the same reason.
// Calling `from.toString()` early also allows caching it in case `to.toString()` is called several times.
const changeToString = (to, from, name) => {
	const withName = name === '' ? '' : `with ${name.trim()}() `;
	const newToString = wrappedToString.bind(null, withName, from.toString());
	// Ensure `to.toString.toString` is non-enumerable and has the same `same`
	Object.defineProperty(newToString, 'name', toStringName);
	Object.defineProperty(to, 'toString', {...toStringDescriptor, value: newToString});
};

function mimicFunction(to, from, {ignoreNonConfigurable = false} = {}) {
	const {name} = to;

	for (const property of Reflect.ownKeys(from)) {
		copyProperty(to, from, property, ignoreNonConfigurable);
	}

	changePrototype(to, from);
	changeToString(to, from, name);

	return to;
}

const calledFunctions = new WeakMap();

const onetime = (function_, options = {}) => {
	if (typeof function_ !== 'function') {
		throw new TypeError('Expected a function');
	}

	let returnValue;
	let callCount = 0;
	const functionName = function_.displayName || function_.name || '<anonymous>';

	const onetime = function (...arguments_) {
		calledFunctions.set(onetime, ++callCount);

		if (callCount === 1) {
			returnValue = function_.apply(this, arguments_);
			function_ = null;
		} else if (options.throw === true) {
			throw new Error(`Function \`${functionName}\` can only be called once`);
		}

		return returnValue;
	};

	mimicFunction(onetime, function_);
	calledFunctions.set(onetime, callCount);

	return onetime;
};

onetime.callCount = function_ => {
	if (!calledFunctions.has(function_)) {
		throw new Error(`The given function \`${function_.name}\` is not wrapped by the \`onetime\` package`);
	}

	return calledFunctions.get(function_);
};

const getRealtimeSignals=()=>{
const length=SIGRTMAX-SIGRTMIN+1;
return Array.from({length},getRealtimeSignal);
};

const getRealtimeSignal=(value,index)=>({
name:`SIGRT${index+1}`,
number:SIGRTMIN+index,
action:"terminate",
description:"Application-specific signal (realtime)",
standard:"posix"
});

const SIGRTMIN=34;
const SIGRTMAX=64;

const SIGNALS=[
{
name:"SIGHUP",
number:1,
action:"terminate",
description:"Terminal closed",
standard:"posix"
},
{
name:"SIGINT",
number:2,
action:"terminate",
description:"User interruption with CTRL-C",
standard:"ansi"
},
{
name:"SIGQUIT",
number:3,
action:"core",
description:"User interruption with CTRL-\\",
standard:"posix"
},
{
name:"SIGILL",
number:4,
action:"core",
description:"Invalid machine instruction",
standard:"ansi"
},
{
name:"SIGTRAP",
number:5,
action:"core",
description:"Debugger breakpoint",
standard:"posix"
},
{
name:"SIGABRT",
number:6,
action:"core",
description:"Aborted",
standard:"ansi"
},
{
name:"SIGIOT",
number:6,
action:"core",
description:"Aborted",
standard:"bsd"
},
{
name:"SIGBUS",
number:7,
action:"core",
description:
"Bus error due to misaligned, non-existing address or paging error",
standard:"bsd"
},
{
name:"SIGEMT",
number:7,
action:"terminate",
description:"Command should be emulated but is not implemented",
standard:"other"
},
{
name:"SIGFPE",
number:8,
action:"core",
description:"Floating point arithmetic error",
standard:"ansi"
},
{
name:"SIGKILL",
number:9,
action:"terminate",
description:"Forced termination",
standard:"posix",
forced:true
},
{
name:"SIGUSR1",
number:10,
action:"terminate",
description:"Application-specific signal",
standard:"posix"
},
{
name:"SIGSEGV",
number:11,
action:"core",
description:"Segmentation fault",
standard:"ansi"
},
{
name:"SIGUSR2",
number:12,
action:"terminate",
description:"Application-specific signal",
standard:"posix"
},
{
name:"SIGPIPE",
number:13,
action:"terminate",
description:"Broken pipe or socket",
standard:"posix"
},
{
name:"SIGALRM",
number:14,
action:"terminate",
description:"Timeout or timer",
standard:"posix"
},
{
name:"SIGTERM",
number:15,
action:"terminate",
description:"Termination",
standard:"ansi"
},
{
name:"SIGSTKFLT",
number:16,
action:"terminate",
description:"Stack is empty or overflowed",
standard:"other"
},
{
name:"SIGCHLD",
number:17,
action:"ignore",
description:"Child process terminated, paused or unpaused",
standard:"posix"
},
{
name:"SIGCLD",
number:17,
action:"ignore",
description:"Child process terminated, paused or unpaused",
standard:"other"
},
{
name:"SIGCONT",
number:18,
action:"unpause",
description:"Unpaused",
standard:"posix",
forced:true
},
{
name:"SIGSTOP",
number:19,
action:"pause",
description:"Paused",
standard:"posix",
forced:true
},
{
name:"SIGTSTP",
number:20,
action:"pause",
description:"Paused using CTRL-Z or \"suspend\"",
standard:"posix"
},
{
name:"SIGTTIN",
number:21,
action:"pause",
description:"Background process cannot read terminal input",
standard:"posix"
},
{
name:"SIGBREAK",
number:21,
action:"terminate",
description:"User interruption with CTRL-BREAK",
standard:"other"
},
{
name:"SIGTTOU",
number:22,
action:"pause",
description:"Background process cannot write to terminal output",
standard:"posix"
},
{
name:"SIGURG",
number:23,
action:"ignore",
description:"Socket received out-of-band data",
standard:"bsd"
},
{
name:"SIGXCPU",
number:24,
action:"core",
description:"Process timed out",
standard:"bsd"
},
{
name:"SIGXFSZ",
number:25,
action:"core",
description:"File too big",
standard:"bsd"
},
{
name:"SIGVTALRM",
number:26,
action:"terminate",
description:"Timeout or timer",
standard:"bsd"
},
{
name:"SIGPROF",
number:27,
action:"terminate",
description:"Timeout or timer",
standard:"bsd"
},
{
name:"SIGWINCH",
number:28,
action:"ignore",
description:"Terminal window size changed",
standard:"bsd"
},
{
name:"SIGIO",
number:29,
action:"terminate",
description:"I/O is available",
standard:"other"
},
{
name:"SIGPOLL",
number:29,
action:"terminate",
description:"Watched event",
standard:"other"
},
{
name:"SIGINFO",
number:29,
action:"ignore",
description:"Request for process information",
standard:"other"
},
{
name:"SIGPWR",
number:30,
action:"terminate",
description:"Device running out of power",
standard:"systemv"
},
{
name:"SIGSYS",
number:31,
action:"core",
description:"Invalid system call",
standard:"other"
},
{
name:"SIGUNUSED",
number:31,
action:"terminate",
description:"Invalid system call",
standard:"other"
}];

const getSignals=()=>{
const realtimeSignals=getRealtimeSignals();
const signals=[...SIGNALS,...realtimeSignals].map(normalizeSignal);
return signals;
};







const normalizeSignal=({
name,
number:defaultNumber,
description,
action,
forced=false,
standard
})=>{
const{
signals:{[name]:constantSignal}
}=os$1.constants;
const supported=constantSignal!==undefined;
const number=supported?constantSignal:defaultNumber;
return {name,number,description,supported,action,forced,standard};
};

const getSignalsByName=()=>{
const signals=getSignals();
return Object.fromEntries(signals.map(getSignalByName));
};

const getSignalByName=({
name,
number,
description,
supported,
action,
forced,
standard
})=>[name,{name,number,description,supported,action,forced,standard}];

const signalsByName=getSignalsByName();




const getSignalsByNumber=()=>{
const signals=getSignals();
const length=SIGRTMAX+1;
const signalsA=Array.from({length},(value,number)=>
getSignalByNumber(number,signals));

return Object.assign({},...signalsA);
};

const getSignalByNumber=(number,signals)=>{
const signal=findSignalByNumber(number,signals);

if(signal===undefined){
return {};
}

const{name,description,supported,action,forced,standard}=signal;
return {
[number]:{
name,
number,
description,
supported,
action,
forced,
standard
}
};
};



const findSignalByNumber=(number,signals)=>{
const signal=signals.find(({name})=>os$1.constants.signals[name]===number);

if(signal!==undefined){
return signal;
}

return signals.find((signalA)=>signalA.number===number);
};

getSignalsByNumber();

const getErrorPrefix = ({timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled}) => {
	if (timedOut) {
		return `timed out after ${timeout} milliseconds`;
	}

	if (isCanceled) {
		return 'was canceled';
	}

	if (errorCode !== undefined) {
		return `failed with ${errorCode}`;
	}

	if (signal !== undefined) {
		return `was killed with ${signal} (${signalDescription})`;
	}

	if (exitCode !== undefined) {
		return `failed with exit code ${exitCode}`;
	}

	return 'failed';
};

const makeError = ({
	stdout,
	stderr,
	all,
	error,
	signal,
	exitCode,
	command,
	escapedCommand,
	timedOut,
	isCanceled,
	killed,
	parsed: {options: {timeout}},
}) => {
	// `signal` and `exitCode` emitted on `spawned.on('exit')` event can be `null`.
	// We normalize them to `undefined`
	exitCode = exitCode === null ? undefined : exitCode;
	signal = signal === null ? undefined : signal;
	const signalDescription = signal === undefined ? undefined : signalsByName[signal].description;

	const errorCode = error && error.code;

	const prefix = getErrorPrefix({timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled});
	const execaMessage = `Command ${prefix}: ${command}`;
	const isError = Object.prototype.toString.call(error) === '[object Error]';
	const shortMessage = isError ? `${execaMessage}\n${error.message}` : execaMessage;
	const message = [shortMessage, stderr, stdout].filter(Boolean).join('\n');

	if (isError) {
		error.originalMessage = error.message;
		error.message = message;
	} else {
		error = new Error(message);
	}

	error.shortMessage = shortMessage;
	error.command = command;
	error.escapedCommand = escapedCommand;
	error.exitCode = exitCode;
	error.signal = signal;
	error.signalDescription = signalDescription;
	error.stdout = stdout;
	error.stderr = stderr;

	if (all !== undefined) {
		error.all = all;
	}

	if ('bufferedData' in error) {
		delete error.bufferedData;
	}

	error.failed = true;
	error.timedOut = Boolean(timedOut);
	error.isCanceled = isCanceled;
	error.killed = killed && !timedOut;

	return error;
};

const aliases = ['stdin', 'stdout', 'stderr'];

const hasAlias = options => aliases.some(alias => options[alias] !== undefined);

const normalizeStdio = options => {
	if (!options) {
		return;
	}

	const {stdio} = options;

	if (stdio === undefined) {
		return aliases.map(alias => options[alias]);
	}

	if (hasAlias(options)) {
		throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${aliases.map(alias => `\`${alias}\``).join(', ')}`);
	}

	if (typeof stdio === 'string') {
		return stdio;
	}

	if (!Array.isArray(stdio)) {
		throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
	}

	const length = Math.max(stdio.length, aliases.length);
	return Array.from({length}, (value, index) => stdio[index]);
};

var signalExit = {exports: {}};

var signals$1 = {exports: {}};

var hasRequiredSignals;

function requireSignals () {
	if (hasRequiredSignals) return signals$1.exports;
	hasRequiredSignals = 1;
	(function (module) {
		// This is not the set of all possible signals.
		//
		// It IS, however, the set of all signals that trigger
		// an exit on either Linux or BSD systems.  Linux is a
		// superset of the signal names supported on BSD, and
		// the unknown signals just fail to register, so we can
		// catch that easily enough.
		//
		// Don't bother with SIGKILL.  It's uncatchable, which
		// means that we can't fire any callbacks anyway.
		//
		// If a user does happen to register a handler on a non-
		// fatal signal like SIGWINCH or something, and then
		// exit, it'll end up firing `process.emit('exit')`, so
		// the handler will be fired anyway.
		//
		// SIGBUS, SIGFPE, SIGSEGV and SIGILL, when not raised
		// artificially, inherently leave the process in a
		// state from which it is not safe to try and enter JS
		// listeners.
		module.exports = [
		  'SIGABRT',
		  'SIGALRM',
		  'SIGHUP',
		  'SIGINT',
		  'SIGTERM'
		];

		if (process.platform !== 'win32') {
		  module.exports.push(
		    'SIGVTALRM',
		    'SIGXCPU',
		    'SIGXFSZ',
		    'SIGUSR2',
		    'SIGTRAP',
		    'SIGSYS',
		    'SIGQUIT',
		    'SIGIOT'
		    // should detect profiler and enable/disable accordingly.
		    // see #21
		    // 'SIGPROF'
		  );
		}

		if (process.platform === 'linux') {
		  module.exports.push(
		    'SIGIO',
		    'SIGPOLL',
		    'SIGPWR',
		    'SIGSTKFLT',
		    'SIGUNUSED'
		  );
		} 
	} (signals$1));
	return signals$1.exports;
}

// Note: since nyc uses this module to output coverage, any lines
// that are in the direct sync flow of nyc's outputCoverage are
// ignored, since we can never get coverage for them.
// grab a reference to node's real process object right away
var process$1 = commonjsGlobal.process;

const processOk = function (process) {
  return process &&
    typeof process === 'object' &&
    typeof process.removeListener === 'function' &&
    typeof process.emit === 'function' &&
    typeof process.reallyExit === 'function' &&
    typeof process.listeners === 'function' &&
    typeof process.kill === 'function' &&
    typeof process.pid === 'number' &&
    typeof process.on === 'function'
};

// some kind of non-node environment, just no-op
/* istanbul ignore if */
if (!processOk(process$1)) {
  signalExit.exports = function () {
    return function () {}
  };
} else {
  var assert = require$$0$3;
  var signals = requireSignals();
  var isWin = /^win/i.test(process$1.platform);

  var EE = require$$0$2;
  /* istanbul ignore if */
  if (typeof EE !== 'function') {
    EE = EE.EventEmitter;
  }

  var emitter;
  if (process$1.__signal_exit_emitter__) {
    emitter = process$1.__signal_exit_emitter__;
  } else {
    emitter = process$1.__signal_exit_emitter__ = new EE();
    emitter.count = 0;
    emitter.emitted = {};
  }

  // Because this emitter is a global, we have to check to see if a
  // previous version of this library failed to enable infinite listeners.
  // I know what you're about to say.  But literally everything about
  // signal-exit is a compromise with evil.  Get used to it.
  if (!emitter.infinite) {
    emitter.setMaxListeners(Infinity);
    emitter.infinite = true;
  }

  signalExit.exports = function (cb, opts) {
    /* istanbul ignore if */
    if (!processOk(commonjsGlobal.process)) {
      return function () {}
    }
    assert.equal(typeof cb, 'function', 'a callback must be provided for exit handler');

    if (loaded === false) {
      load();
    }

    var ev = 'exit';
    if (opts && opts.alwaysLast) {
      ev = 'afterexit';
    }

    var remove = function () {
      emitter.removeListener(ev, cb);
      if (emitter.listeners('exit').length === 0 &&
          emitter.listeners('afterexit').length === 0) {
        unload();
      }
    };
    emitter.on(ev, cb);

    return remove
  };

  var unload = function unload () {
    if (!loaded || !processOk(commonjsGlobal.process)) {
      return
    }
    loaded = false;

    signals.forEach(function (sig) {
      try {
        process$1.removeListener(sig, sigListeners[sig]);
      } catch (er) {}
    });
    process$1.emit = originalProcessEmit;
    process$1.reallyExit = originalProcessReallyExit;
    emitter.count -= 1;
  };
  signalExit.exports.unload = unload;

  var emit = function emit (event, code, signal) {
    /* istanbul ignore if */
    if (emitter.emitted[event]) {
      return
    }
    emitter.emitted[event] = true;
    emitter.emit(event, code, signal);
  };

  // { <signal>: <listener fn>, ... }
  var sigListeners = {};
  signals.forEach(function (sig) {
    sigListeners[sig] = function listener () {
      /* istanbul ignore if */
      if (!processOk(commonjsGlobal.process)) {
        return
      }
      // If there are no other listeners, an exit is coming!
      // Simplest way: remove us and then re-send the signal.
      // We know that this will kill the process, so we can
      // safely emit now.
      var listeners = process$1.listeners(sig);
      if (listeners.length === emitter.count) {
        unload();
        emit('exit', null, sig);
        /* istanbul ignore next */
        emit('afterexit', null, sig);
        /* istanbul ignore next */
        if (isWin && sig === 'SIGHUP') {
          // "SIGHUP" throws an `ENOSYS` error on Windows,
          // so use a supported signal instead
          sig = 'SIGINT';
        }
        /* istanbul ignore next */
        process$1.kill(process$1.pid, sig);
      }
    };
  });

  signalExit.exports.signals = function () {
    return signals
  };

  var loaded = false;

  var load = function load () {
    if (loaded || !processOk(commonjsGlobal.process)) {
      return
    }
    loaded = true;

    // This is the number of onSignalExit's that are in play.
    // It's important so that we can count the correct number of
    // listeners on signals, and don't wait for the other one to
    // handle it instead of us.
    emitter.count += 1;

    signals = signals.filter(function (sig) {
      try {
        process$1.on(sig, sigListeners[sig]);
        return true
      } catch (er) {
        return false
      }
    });

    process$1.emit = processEmit;
    process$1.reallyExit = processReallyExit;
  };
  signalExit.exports.load = load;

  var originalProcessReallyExit = process$1.reallyExit;
  var processReallyExit = function processReallyExit (code) {
    /* istanbul ignore if */
    if (!processOk(commonjsGlobal.process)) {
      return
    }
    process$1.exitCode = code || /* istanbul ignore next */ 0;
    emit('exit', process$1.exitCode, null);
    /* istanbul ignore next */
    emit('afterexit', process$1.exitCode, null);
    /* istanbul ignore next */
    originalProcessReallyExit.call(process$1, process$1.exitCode);
  };

  var originalProcessEmit = process$1.emit;
  var processEmit = function processEmit (ev, arg) {
    if (ev === 'exit' && processOk(commonjsGlobal.process)) {
      /* istanbul ignore else */
      if (arg !== undefined) {
        process$1.exitCode = arg;
      }
      var ret = originalProcessEmit.apply(this, arguments);
      /* istanbul ignore next */
      emit('exit', process$1.exitCode, null);
      /* istanbul ignore next */
      emit('afterexit', process$1.exitCode, null);
      /* istanbul ignore next */
      return ret
    } else {
      return originalProcessEmit.apply(this, arguments)
    }
  };
}

var signalExitExports = signalExit.exports;
var onExit = /*@__PURE__*/getDefaultExportFromCjs(signalExitExports);

const DEFAULT_FORCE_KILL_TIMEOUT = 1000 * 5;

// Monkey-patches `childProcess.kill()` to add `forceKillAfterTimeout` behavior
const spawnedKill = (kill, signal = 'SIGTERM', options = {}) => {
	const killResult = kill(signal);
	setKillTimeout(kill, signal, options, killResult);
	return killResult;
};

const setKillTimeout = (kill, signal, options, killResult) => {
	if (!shouldForceKill(signal, options, killResult)) {
		return;
	}

	const timeout = getForceKillAfterTimeout(options);
	const t = setTimeout(() => {
		kill('SIGKILL');
	}, timeout);

	// Guarded because there's no `.unref()` when `execa` is used in the renderer
	// process in Electron. This cannot be tested since we don't run tests in
	// Electron.
	// istanbul ignore else
	if (t.unref) {
		t.unref();
	}
};

const shouldForceKill = (signal, {forceKillAfterTimeout}, killResult) => isSigterm(signal) && forceKillAfterTimeout !== false && killResult;

const isSigterm = signal => signal === os$1.constants.signals.SIGTERM
		|| (typeof signal === 'string' && signal.toUpperCase() === 'SIGTERM');

const getForceKillAfterTimeout = ({forceKillAfterTimeout = true}) => {
	if (forceKillAfterTimeout === true) {
		return DEFAULT_FORCE_KILL_TIMEOUT;
	}

	if (!Number.isFinite(forceKillAfterTimeout) || forceKillAfterTimeout < 0) {
		throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${forceKillAfterTimeout}\` (${typeof forceKillAfterTimeout})`);
	}

	return forceKillAfterTimeout;
};

// `childProcess.cancel()`
const spawnedCancel = (spawned, context) => {
	const killResult = spawned.kill();

	if (killResult) {
		context.isCanceled = true;
	}
};

const timeoutKill = (spawned, signal, reject) => {
	spawned.kill(signal);
	reject(Object.assign(new Error('Timed out'), {timedOut: true, signal}));
};

// `timeout` option handling
const setupTimeout = (spawned, {timeout, killSignal = 'SIGTERM'}, spawnedPromise) => {
	if (timeout === 0 || timeout === undefined) {
		return spawnedPromise;
	}

	let timeoutId;
	const timeoutPromise = new Promise((resolve, reject) => {
		timeoutId = setTimeout(() => {
			timeoutKill(spawned, killSignal, reject);
		}, timeout);
	});

	const safeSpawnedPromise = spawnedPromise.finally(() => {
		clearTimeout(timeoutId);
	});

	return Promise.race([timeoutPromise, safeSpawnedPromise]);
};

const validateTimeout = ({timeout}) => {
	if (timeout !== undefined && (!Number.isFinite(timeout) || timeout < 0)) {
		throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
	}
};

// `cleanup` option handling
const setExitHandler = async (spawned, {cleanup, detached}, timedPromise) => {
	if (!cleanup || detached) {
		return timedPromise;
	}

	const removeExitHandler = onExit(() => {
		spawned.kill();
	});

	return timedPromise.finally(() => {
		removeExitHandler();
	});
};

function isStream(stream) {
	return stream !== null
		&& typeof stream === 'object'
		&& typeof stream.pipe === 'function';
}

function isWritableStream(stream) {
	return isStream(stream)
		&& stream.writable !== false
		&& typeof stream._write === 'function'
		&& typeof stream._writableState === 'object';
}

const isExecaChildProcess = target => target instanceof childProcess.ChildProcess && typeof target.then === 'function';

const pipeToTarget = (spawned, streamName, target) => {
	if (typeof target === 'string') {
		spawned[streamName].pipe(node_fs.createWriteStream(target));
		return spawned;
	}

	if (isWritableStream(target)) {
		spawned[streamName].pipe(target);
		return spawned;
	}

	if (!isExecaChildProcess(target)) {
		throw new TypeError('The second argument must be a string, a stream or an Execa child process.');
	}

	if (!isWritableStream(target.stdin)) {
		throw new TypeError('The target child process\'s stdin must be available.');
	}

	spawned[streamName].pipe(target.stdin);
	return target;
};

const addPipeMethods = spawned => {
	if (spawned.stdout !== null) {
		spawned.pipeStdout = pipeToTarget.bind(undefined, spawned, 'stdout');
	}

	if (spawned.stderr !== null) {
		spawned.pipeStderr = pipeToTarget.bind(undefined, spawned, 'stderr');
	}

	if (spawned.all !== undefined) {
		spawned.pipeAll = pipeToTarget.bind(undefined, spawned, 'all');
	}
};

var getStream$2 = {exports: {}};

const {PassThrough: PassThroughStream} = require$$0$7;

var bufferStream$1 = options => {
	options = {...options};

	const {array} = options;
	let {encoding} = options;
	const isBuffer = encoding === 'buffer';
	let objectMode = false;

	if (array) {
		objectMode = !(encoding || isBuffer);
	} else {
		encoding = encoding || 'utf8';
	}

	if (isBuffer) {
		encoding = null;
	}

	const stream = new PassThroughStream({objectMode});

	if (encoding) {
		stream.setEncoding(encoding);
	}

	let length = 0;
	const chunks = [];

	stream.on('data', chunk => {
		chunks.push(chunk);

		if (objectMode) {
			length = chunks.length;
		} else {
			length += chunk.length;
		}
	});

	stream.getBufferedValue = () => {
		if (array) {
			return chunks;
		}

		return isBuffer ? Buffer.concat(chunks, length) : chunks.join('');
	};

	stream.getBufferedLength = () => length;

	return stream;
};

const {constants: BufferConstants} = require$$0$8;
const stream = require$$0$7;
const {promisify} = require$$2;
const bufferStream = bufferStream$1;

const streamPipelinePromisified = promisify(stream.pipeline);

class MaxBufferError extends Error {
	constructor() {
		super('maxBuffer exceeded');
		this.name = 'MaxBufferError';
	}
}

async function getStream(inputStream, options) {
	if (!inputStream) {
		throw new Error('Expected a stream');
	}

	options = {
		maxBuffer: Infinity,
		...options
	};

	const {maxBuffer} = options;
	const stream = bufferStream(options);

	await new Promise((resolve, reject) => {
		const rejectPromise = error => {
			// Don't retrieve an oversized buffer.
			if (error && stream.getBufferedLength() <= BufferConstants.MAX_LENGTH) {
				error.bufferedData = stream.getBufferedValue();
			}

			reject(error);
		};

		(async () => {
			try {
				await streamPipelinePromisified(inputStream, stream);
				resolve();
			} catch (error) {
				rejectPromise(error);
			}
		})();

		stream.on('data', () => {
			if (stream.getBufferedLength() > maxBuffer) {
				rejectPromise(new MaxBufferError());
			}
		});
	});

	return stream.getBufferedValue();
}

getStream$2.exports = getStream;
getStream$2.exports.buffer = (stream, options) => getStream(stream, {...options, encoding: 'buffer'});
getStream$2.exports.array = (stream, options) => getStream(stream, {...options, array: true});
getStream$2.exports.MaxBufferError = MaxBufferError;

var getStreamExports = getStream$2.exports;
var getStream$1 = /*@__PURE__*/getDefaultExportFromCjs(getStreamExports);

const { PassThrough } = require$$0$7;

var mergeStream = function (/*streams...*/) {
  var sources = [];
  var output  = new PassThrough({objectMode: true});

  output.setMaxListeners(0);

  output.add = add;
  output.isEmpty = isEmpty;

  output.on('unpipe', remove);

  Array.prototype.slice.call(arguments).forEach(add);

  return output

  function add (source) {
    if (Array.isArray(source)) {
      source.forEach(add);
      return this
    }

    sources.push(source);
    source.once('end', remove.bind(null, source));
    source.once('error', output.emit.bind(output, 'error'));
    source.pipe(output, {end: false});
    return this
  }

  function isEmpty () {
    return sources.length == 0;
  }

  function remove (source) {
    sources = sources.filter(function (it) { return it !== source });
    if (!sources.length && output.readable) { output.end(); }
  }
};

var mergeStream$1 = /*@__PURE__*/getDefaultExportFromCjs(mergeStream);

const validateInputOptions = input => {
	if (input !== undefined) {
		throw new TypeError('The `input` and `inputFile` options cannot be both set.');
	}
};

const getInput = ({input, inputFile}) => {
	if (typeof inputFile !== 'string') {
		return input;
	}

	validateInputOptions(input);
	return node_fs.createReadStream(inputFile);
};

// `input` and `inputFile` option in async mode
const handleInput = (spawned, options) => {
	const input = getInput(options);

	if (input === undefined) {
		return;
	}

	if (isStream(input)) {
		input.pipe(spawned.stdin);
	} else {
		spawned.stdin.end(input);
	}
};

// `all` interleaves `stdout` and `stderr`
const makeAllStream = (spawned, {all}) => {
	if (!all || (!spawned.stdout && !spawned.stderr)) {
		return;
	}

	const mixed = mergeStream$1();

	if (spawned.stdout) {
		mixed.add(spawned.stdout);
	}

	if (spawned.stderr) {
		mixed.add(spawned.stderr);
	}

	return mixed;
};

// On failure, `result.stdout|stderr|all` should contain the currently buffered stream
const getBufferedData = async (stream, streamPromise) => {
	// When `buffer` is `false`, `streamPromise` is `undefined` and there is no buffered data to retrieve
	if (!stream || streamPromise === undefined) {
		return;
	}

	stream.destroy();

	try {
		return await streamPromise;
	} catch (error) {
		return error.bufferedData;
	}
};

const getStreamPromise = (stream, {encoding, buffer, maxBuffer}) => {
	if (!stream || !buffer) {
		return;
	}

	if (encoding) {
		return getStream$1(stream, {encoding, maxBuffer});
	}

	return getStream$1.buffer(stream, {maxBuffer});
};

// Retrieve result of child process: exit code, signal, error, streams (stdout/stderr/all)
const getSpawnedResult = async ({stdout, stderr, all}, {encoding, buffer, maxBuffer}, processDone) => {
	const stdoutPromise = getStreamPromise(stdout, {encoding, buffer, maxBuffer});
	const stderrPromise = getStreamPromise(stderr, {encoding, buffer, maxBuffer});
	const allPromise = getStreamPromise(all, {encoding, buffer, maxBuffer: maxBuffer * 2});

	try {
		return await Promise.all([processDone, stdoutPromise, stderrPromise, allPromise]);
	} catch (error) {
		return Promise.all([
			{error, signal: error.signal, timedOut: error.timedOut},
			getBufferedData(stdout, stdoutPromise),
			getBufferedData(stderr, stderrPromise),
			getBufferedData(all, allPromise),
		]);
	}
};

// eslint-disable-next-line unicorn/prefer-top-level-await
const nativePromisePrototype = (async () => {})().constructor.prototype;

const descriptors = ['then', 'catch', 'finally'].map(property => [
	property,
	Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property),
]);

// The return value is a mixin of `childProcess` and `Promise`
const mergePromise = (spawned, promise) => {
	for (const [property, descriptor] of descriptors) {
		// Starting the main `promise` is deferred to avoid consuming streams
		const value = typeof promise === 'function'
			? (...args) => Reflect.apply(descriptor.value, promise(), args)
			: descriptor.value.bind(promise);

		Reflect.defineProperty(spawned, property, {...descriptor, value});
	}
};

// Use promises instead of `child_process` events
const getSpawnedPromise = spawned => new Promise((resolve, reject) => {
	spawned.on('exit', (exitCode, signal) => {
		resolve({exitCode, signal});
	});

	spawned.on('error', error => {
		reject(error);
	});

	if (spawned.stdin) {
		spawned.stdin.on('error', error => {
			reject(error);
		});
	}
});

const normalizeArgs = (file, args = []) => {
	if (!Array.isArray(args)) {
		return [file];
	}

	return [file, ...args];
};

const NO_ESCAPE_REGEXP = /^[\w.-]+$/;
const DOUBLE_QUOTES_REGEXP = /"/g;

const escapeArg = arg => {
	if (typeof arg !== 'string' || NO_ESCAPE_REGEXP.test(arg)) {
		return arg;
	}

	return `"${arg.replace(DOUBLE_QUOTES_REGEXP, '\\"')}"`;
};

const joinCommand = (file, args) => normalizeArgs(file, args).join(' ');

const getEscapedCommand = (file, args) => normalizeArgs(file, args).map(arg => escapeArg(arg)).join(' ');

const verboseDefault = node_util.debuglog('execa').enabled;

const padField = (field, padding) => String(field).padStart(padding, '0');

const getTimestamp = () => {
	const date = new Date();
	return `${padField(date.getHours(), 2)}:${padField(date.getMinutes(), 2)}:${padField(date.getSeconds(), 2)}.${padField(date.getMilliseconds(), 3)}`;
};

const logCommand = (escapedCommand, {verbose}) => {
	if (!verbose) {
		return;
	}

	process$2.stderr.write(`[${getTimestamp()}] ${escapedCommand}\n`);
};

const DEFAULT_MAX_BUFFER = 1000 * 1000 * 100;

const getEnv = ({env: envOption, extendEnv, preferLocal, localDir, execPath}) => {
	const env = extendEnv ? {...process$2.env, ...envOption} : envOption;

	if (preferLocal) {
		return npmRunPathEnv({env, cwd: localDir, execPath});
	}

	return env;
};

const handleArguments = (file, args, options = {}) => {
	const parsed = crossSpawn._parse(file, args, options);
	file = parsed.command;
	args = parsed.args;
	options = parsed.options;

	options = {
		maxBuffer: DEFAULT_MAX_BUFFER,
		buffer: true,
		stripFinalNewline: true,
		extendEnv: true,
		preferLocal: false,
		localDir: options.cwd || process$2.cwd(),
		execPath: process$2.execPath,
		encoding: 'utf8',
		reject: true,
		cleanup: true,
		all: false,
		windowsHide: true,
		verbose: verboseDefault,
		...options,
	};

	options.env = getEnv(options);

	options.stdio = normalizeStdio(options);

	if (process$2.platform === 'win32' && path$3.basename(file, '.exe') === 'cmd') {
		// #116
		args.unshift('/q');
	}

	return {file, args, options, parsed};
};

const handleOutput = (options, value, error) => {
	if (typeof value !== 'string' && !node_buffer.Buffer.isBuffer(value)) {
		// When `execaSync()` errors, we normalize it to '' to mimic `execa()`
		return error === undefined ? undefined : '';
	}

	if (options.stripFinalNewline) {
		return stripFinalNewline(value);
	}

	return value;
};

function execa(file, args, options) {
	const parsed = handleArguments(file, args, options);
	const command = joinCommand(file, args);
	const escapedCommand = getEscapedCommand(file, args);
	logCommand(escapedCommand, parsed.options);

	validateTimeout(parsed.options);

	let spawned;
	try {
		spawned = childProcess.spawn(parsed.file, parsed.args, parsed.options);
	} catch (error) {
		// Ensure the returned error is always both a promise and a child process
		const dummySpawned = new childProcess.ChildProcess();
		const errorPromise = Promise.reject(makeError({
			error,
			stdout: '',
			stderr: '',
			all: '',
			command,
			escapedCommand,
			parsed,
			timedOut: false,
			isCanceled: false,
			killed: false,
		}));
		mergePromise(dummySpawned, errorPromise);
		return dummySpawned;
	}

	const spawnedPromise = getSpawnedPromise(spawned);
	const timedPromise = setupTimeout(spawned, parsed.options, spawnedPromise);
	const processDone = setExitHandler(spawned, parsed.options, timedPromise);

	const context = {isCanceled: false};

	spawned.kill = spawnedKill.bind(null, spawned.kill.bind(spawned));
	spawned.cancel = spawnedCancel.bind(null, spawned, context);

	const handlePromise = async () => {
		const [{error, exitCode, signal, timedOut}, stdoutResult, stderrResult, allResult] = await getSpawnedResult(spawned, parsed.options, processDone);
		const stdout = handleOutput(parsed.options, stdoutResult);
		const stderr = handleOutput(parsed.options, stderrResult);
		const all = handleOutput(parsed.options, allResult);

		if (error || exitCode !== 0 || signal !== null) {
			const returnedError = makeError({
				error,
				exitCode,
				signal,
				stdout,
				stderr,
				all,
				command,
				escapedCommand,
				parsed,
				timedOut,
				isCanceled: (parsed.options.signal ? parsed.options.signal.aborted : false),
				killed: spawned.killed,
			});

			if (!parsed.options.reject) {
				return returnedError;
			}

			throw returnedError;
		}

		return {
			command,
			escapedCommand,
			exitCode: 0,
			stdout,
			stderr,
			all,
			failed: false,
			timedOut: false,
			isCanceled: false,
			killed: false,
		};
	};

	const handlePromiseOnce = onetime(handlePromise);

	handleInput(spawned, parsed.options);

	spawned.all = makeAllStream(spawned, parsed.options);

	addPipeMethods(spawned);
	mergePromise(spawned, handlePromiseOnce);
	return spawned;
}

function hasKey(obj, keys) {
	var o = obj;
	keys.slice(0, -1).forEach(function (key) {
		o = o[key] || {};
	});

	var key = keys[keys.length - 1];
	return key in o;
}

function isNumber(x) {
	if (typeof x === 'number') { return true; }
	if ((/^0x[0-9a-f]+$/i).test(x)) { return true; }
	return (/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/).test(x);
}

function isConstructorOrProto(obj, key) {
	return (key === 'constructor' && typeof obj[key] === 'function') || key === '__proto__';
}

var minimist = function (args, opts) {
	if (!opts) { opts = {}; }

	var flags = {
		bools: {},
		strings: {},
		unknownFn: null,
	};

	if (typeof opts.unknown === 'function') {
		flags.unknownFn = opts.unknown;
	}

	if (typeof opts.boolean === 'boolean' && opts.boolean) {
		flags.allBools = true;
	} else {
		[].concat(opts.boolean).filter(Boolean).forEach(function (key) {
			flags.bools[key] = true;
		});
	}

	var aliases = {};

	function aliasIsBoolean(key) {
		return aliases[key].some(function (x) {
			return flags.bools[x];
		});
	}

	Object.keys(opts.alias || {}).forEach(function (key) {
		aliases[key] = [].concat(opts.alias[key]);
		aliases[key].forEach(function (x) {
			aliases[x] = [key].concat(aliases[key].filter(function (y) {
				return x !== y;
			}));
		});
	});

	[].concat(opts.string).filter(Boolean).forEach(function (key) {
		flags.strings[key] = true;
		if (aliases[key]) {
			[].concat(aliases[key]).forEach(function (k) {
				flags.strings[k] = true;
			});
		}
	});

	var defaults = opts.default || {};

	var argv = { _: [] };

	function argDefined(key, arg) {
		return (flags.allBools && (/^--[^=]+$/).test(arg))
			|| flags.strings[key]
			|| flags.bools[key]
			|| aliases[key];
	}

	function setKey(obj, keys, value) {
		var o = obj;
		for (var i = 0; i < keys.length - 1; i++) {
			var key = keys[i];
			if (isConstructorOrProto(o, key)) { return; }
			if (o[key] === undefined) { o[key] = {}; }
			if (
				o[key] === Object.prototype
				|| o[key] === Number.prototype
				|| o[key] === String.prototype
			) {
				o[key] = {};
			}
			if (o[key] === Array.prototype) { o[key] = []; }
			o = o[key];
		}

		var lastKey = keys[keys.length - 1];
		if (isConstructorOrProto(o, lastKey)) { return; }
		if (
			o === Object.prototype
			|| o === Number.prototype
			|| o === String.prototype
		) {
			o = {};
		}
		if (o === Array.prototype) { o = []; }
		if (o[lastKey] === undefined || flags.bools[lastKey] || typeof o[lastKey] === 'boolean') {
			o[lastKey] = value;
		} else if (Array.isArray(o[lastKey])) {
			o[lastKey].push(value);
		} else {
			o[lastKey] = [o[lastKey], value];
		}
	}

	function setArg(key, val, arg) {
		if (arg && flags.unknownFn && !argDefined(key, arg)) {
			if (flags.unknownFn(arg) === false) { return; }
		}

		var value = !flags.strings[key] && isNumber(val)
			? Number(val)
			: val;
		setKey(argv, key.split('.'), value);

		(aliases[key] || []).forEach(function (x) {
			setKey(argv, x.split('.'), value);
		});
	}

	Object.keys(flags.bools).forEach(function (key) {
		setArg(key, defaults[key] === undefined ? false : defaults[key]);
	});

	var notFlags = [];

	if (args.indexOf('--') !== -1) {
		notFlags = args.slice(args.indexOf('--') + 1);
		args = args.slice(0, args.indexOf('--'));
	}

	for (var i = 0; i < args.length; i++) {
		var arg = args[i];
		var key;
		var next;

		if ((/^--.+=/).test(arg)) {
			// Using [\s\S] instead of . because js doesn't support the
			// 'dotall' regex modifier. See:
			// http://stackoverflow.com/a/1068308/13216
			var m = arg.match(/^--([^=]+)=([\s\S]*)$/);
			key = m[1];
			var value = m[2];
			if (flags.bools[key]) {
				value = value !== 'false';
			}
			setArg(key, value, arg);
		} else if ((/^--no-.+/).test(arg)) {
			key = arg.match(/^--no-(.+)/)[1];
			setArg(key, false, arg);
		} else if ((/^--.+/).test(arg)) {
			key = arg.match(/^--(.+)/)[1];
			next = args[i + 1];
			if (
				next !== undefined
				&& !(/^(-|--)[^-]/).test(next)
				&& !flags.bools[key]
				&& !flags.allBools
				&& (aliases[key] ? !aliasIsBoolean(key) : true)
			) {
				setArg(key, next, arg);
				i += 1;
			} else if ((/^(true|false)$/).test(next)) {
				setArg(key, next === 'true', arg);
				i += 1;
			} else {
				setArg(key, flags.strings[key] ? '' : true, arg);
			}
		} else if ((/^-[^-]+/).test(arg)) {
			var letters = arg.slice(1, -1).split('');

			var broken = false;
			for (var j = 0; j < letters.length; j++) {
				next = arg.slice(j + 2);

				if (next === '-') {
					setArg(letters[j], next, arg);
					continue;
				}

				if ((/[A-Za-z]/).test(letters[j]) && next[0] === '=') {
					setArg(letters[j], next.slice(1), arg);
					broken = true;
					break;
				}

				if (
					(/[A-Za-z]/).test(letters[j])
					&& (/-?\d+(\.\d*)?(e-?\d+)?$/).test(next)
				) {
					setArg(letters[j], next, arg);
					broken = true;
					break;
				}

				if (letters[j + 1] && letters[j + 1].match(/\W/)) {
					setArg(letters[j], arg.slice(j + 2), arg);
					broken = true;
					break;
				} else {
					setArg(letters[j], flags.strings[letters[j]] ? '' : true, arg);
				}
			}

			key = arg.slice(-1)[0];
			if (!broken && key !== '-') {
				if (
					args[i + 1]
					&& !(/^(-|--)[^-]/).test(args[i + 1])
					&& !flags.bools[key]
					&& (aliases[key] ? !aliasIsBoolean(key) : true)
				) {
					setArg(key, args[i + 1], arg);
					i += 1;
				} else if (args[i + 1] && (/^(true|false)$/).test(args[i + 1])) {
					setArg(key, args[i + 1] === 'true', arg);
					i += 1;
				} else {
					setArg(key, flags.strings[key] ? '' : true, arg);
				}
			}
		} else {
			if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
				argv._.push(flags.strings._ || !isNumber(arg) ? arg : Number(arg));
			}
			if (opts.stopEarly) {
				argv._.push.apply(argv._, args.slice(i + 1));
				break;
			}
		}
	}

	Object.keys(defaults).forEach(function (k) {
		if (!hasKey(argv, k.split('.'))) {
			setKey(argv, k.split('.'), defaults[k]);

			(aliases[k] || []).forEach(function (x) {
				setKey(argv, x.split('.'), defaults[k]);
			});
		}
	});

	if (opts['--']) {
		argv['--'] = notFlags.slice();
	} else {
		notFlags.forEach(function (k) {
			argv._.push(k);
		});
	}

	return argv;
};

var minimist$1 = /*@__PURE__*/getDefaultExportFromCjs(minimist);

const debug$1 = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {};

var debug_1 = debug$1;

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0';

const MAX_LENGTH$1 = 256;
const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */ 9007199254740991;

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16;

const RELEASE_TYPES = [
  'major',
  'premajor',
  'minor',
  'preminor',
  'patch',
  'prepatch',
  'prerelease',
];

var constants = {
  MAX_LENGTH: MAX_LENGTH$1,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 0b001,
  FLAG_LOOSE: 0b010,
};

var re$1 = {exports: {}};

(function (module, exports) {
	const { MAX_SAFE_COMPONENT_LENGTH } = constants;
	const debug = debug_1;
	exports = module.exports = {};

	// The actual regexps go on exports.re
	const re = exports.re = [];
	const src = exports.src = [];
	const t = exports.t = {};
	let R = 0;

	const createToken = (name, value, isGlobal) => {
	  const index = R++;
	  debug(name, index, value);
	  t[name] = index;
	  src[index] = value;
	  re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
	};

	// The following Regular Expressions can be used for tokenizing,
	// validating, and parsing SemVer version strings.

	// ## Numeric Identifier
	// A single `0`, or a non-zero digit followed by zero or more digits.

	createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
	createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+');

	// ## Non-numeric Identifier
	// Zero or more digits, followed by a letter or hyphen, and then zero or
	// more letters, digits, or hyphens.

	createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*');

	// ## Main Version
	// Three dot-separated numeric identifiers.

	createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
	                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
	                   `(${src[t.NUMERICIDENTIFIER]})`);

	createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
	                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
	                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`);

	// ## Pre-release Version Identifier
	// A numeric identifier, or a non-numeric identifier.

	createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
	}|${src[t.NONNUMERICIDENTIFIER]})`);

	createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
	}|${src[t.NONNUMERICIDENTIFIER]})`);

	// ## Pre-release Version
	// Hyphen, followed by one or more dot-separated pre-release version
	// identifiers.

	createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
	}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);

	createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
	}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);

	// ## Build Metadata Identifier
	// Any combination of digits, letters, or hyphens.

	createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+');

	// ## Build Metadata
	// Plus sign, followed by one or more period-separated build metadata
	// identifiers.

	createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
	}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);

	// ## Full Version String
	// A main version, followed optionally by a pre-release version and
	// build metadata.

	// Note that the only major, minor, patch, and pre-release sections of
	// the version string are capturing groups.  The build metadata is not a
	// capturing group, because it should not ever be used in version
	// comparison.

	createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
	}${src[t.PRERELEASE]}?${
	  src[t.BUILD]}?`);

	createToken('FULL', `^${src[t.FULLPLAIN]}$`);

	// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	// common in the npm registry.
	createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
	}${src[t.PRERELEASELOOSE]}?${
	  src[t.BUILD]}?`);

	createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);

	createToken('GTLT', '((?:<|>)?=?)');

	// Something like "2.*" or "1.2.x".
	// Note that "x.x" is a valid xRange identifer, meaning "any version"
	// Only the first item is strictly required.
	createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
	createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);

	createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
	                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
	                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
	                   `(?:${src[t.PRERELEASE]})?${
	                     src[t.BUILD]}?` +
	                   `)?)?`);

	createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
	                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
	                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
	                        `(?:${src[t.PRERELEASELOOSE]})?${
	                          src[t.BUILD]}?` +
	                        `)?)?`);

	createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
	createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);

	// Coercion.
	// Extract anything that could conceivably be a part of a valid semver
	createToken('COERCE', `${'(^|[^\\d])' +
	              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
	              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
	              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
	              `(?:$|[^\\d])`);
	createToken('COERCERTL', src[t.COERCE], true);

	// Tilde ranges.
	// Meaning is "reasonably at or greater than"
	createToken('LONETILDE', '(?:~>?)');

	createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
	exports.tildeTrimReplace = '$1~';

	createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
	createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);

	// Caret ranges.
	// Meaning is "at least and backwards compatible with"
	createToken('LONECARET', '(?:\\^)');

	createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
	exports.caretTrimReplace = '$1^';

	createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
	createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);

	// A simple gt/lt/eq thing, or just "" to indicate "any version"
	createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
	createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);

	// An expression to strip any whitespace between the gtlt and the thing
	// it modifies, so that `> 1.2.3` ==> `>1.2.3`
	createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
	}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
	exports.comparatorTrimReplace = '$1$2$3';

	// Something like `1.2.3 - 1.2.4`
	// Note that these all use the loose form, because they'll be
	// checked against either the strict or loose comparator form
	// later.
	createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
	                   `\\s+-\\s+` +
	                   `(${src[t.XRANGEPLAIN]})` +
	                   `\\s*$`);

	createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
	                        `\\s+-\\s+` +
	                        `(${src[t.XRANGEPLAINLOOSE]})` +
	                        `\\s*$`);

	// Star ranges basically just allow anything at all.
	createToken('STAR', '(<|>)?=?\\s*\\*');
	// >=0.0.0 is like a star
	createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
	createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$'); 
} (re$1, re$1.exports));

var reExports = re$1.exports;

// parse out just the options we care about
const looseOption = Object.freeze({ loose: true });
const emptyOpts = Object.freeze({ });
const parseOptions$1 = options => {
  if (!options) {
    return emptyOpts
  }

  if (typeof options !== 'object') {
    return looseOption
  }

  return options
};
var parseOptions_1 = parseOptions$1;

const numeric = /^[0-9]+$/;
const compareIdentifiers$1 = (a, b) => {
  const anum = numeric.test(a);
  const bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
};

const rcompareIdentifiers = (a, b) => compareIdentifiers$1(b, a);

var identifiers = {
  compareIdentifiers: compareIdentifiers$1,
  rcompareIdentifiers,
};

const debug = debug_1;
const { MAX_LENGTH, MAX_SAFE_INTEGER } = constants;
const { re, t } = reExports;

const parseOptions = parseOptions_1;
const { compareIdentifiers } = identifiers;
let SemVer$2 = class SemVer {
  constructor (version, options) {
    options = parseOptions(options);

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version;
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid Version: ${require$$2.inspect(version)}`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options);
    this.options = options;
    this.loose = !!options.loose;
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease;

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version;

    // these are actually numbers
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      });
    }

    this.build = m[5] ? m[5].split('.') : [];
    this.format();
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`;
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`;
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other);
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options);
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0;
    do {
      const a = this.prerelease[i];
      const b = other.prerelease[i];
      debug('prerelease compare', i, a, b);
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }

    let i = 0;
    do {
      const a = this.build[i];
      const b = other.build[i];
      debug('prerelease compare', i, a, b);
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier, identifierBase) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc('pre', identifier, identifierBase);
        break
      case 'preminor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc('pre', identifier, identifierBase);
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0;
        this.inc('patch', identifier, identifierBase);
        this.inc('pre', identifier, identifierBase);
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier, identifierBase);
        }
        this.inc('pre', identifier, identifierBase);
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre': {
        const base = Number(identifierBase) ? 1 : 0;

        if (!identifier && identifierBase === false) {
          throw new Error('invalid increment argument: identifier is empty')
        }

        if (this.prerelease.length === 0) {
          this.prerelease = [base];
        } else {
          let i = this.prerelease.length;
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++;
              i = -2;
            }
          }
          if (i === -1) {
            // didn't increment anything
            if (identifier === this.prerelease.join('.') && identifierBase === false) {
              throw new Error('invalid increment argument: identifier already exists')
            }
            this.prerelease.push(base);
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          let prerelease = [identifier, base];
          if (identifierBase === false) {
            prerelease = [identifier];
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease;
            }
          } else {
            this.prerelease = prerelease;
          }
        }
        break
      }
      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.format();
    this.raw = this.version;
    return this
  }
};

var semver = SemVer$2;

const SemVer$1 = semver;

const inc$1 = (version, release, options, identifier, identifierBase) => {
  if (typeof (options) === 'string') {
    identifierBase = identifier;
    identifier = options;
    options = undefined;
  }

  try {
    return new SemVer$1(
      version instanceof SemVer$1 ? version.version : version,
      options
    ).inc(release, identifier, identifierBase).version
  } catch (er) {
    return null
  }
};
var inc_1 = inc$1;

var semverInc = /*@__PURE__*/getDefaultExportFromCjs(inc_1);

const SemVer = semver;
const parse$2 = (version, options, throwErrors = false) => {
  if (version instanceof SemVer) {
    return version
  }
  try {
    return new SemVer(version, options)
  } catch (er) {
    if (!throwErrors) {
      return null
    }
    throw er
  }
};

var parse_1 = parse$2;

const parse$1 = parse_1;
const prerelease = (version, options) => {
  const parsed = parse$1(version, options);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
};
var prerelease_1 = prerelease;

var prerelease$1 = /*@__PURE__*/getDefaultExportFromCjs(prerelease_1);

const parse = parse_1;
const valid = (version, options) => {
  const v = parse(version, options);
  return v ? v.version : null
};
var valid_1 = valid;

var valid$1 = /*@__PURE__*/getDefaultExportFromCjs(valid_1);

let pkgPath = path$3.resolve(process.cwd(), "package.json");
let pkg = JSON.parse(node_fs.readFileSync(pkgPath, "utf-8"));
const currentVersion = pkg.version;
const args = minimist$1(process.argv.slice(2));
const preId = args.preid || prerelease$1(currentVersion)?.[0];
const isDryRun = args.dry;
const keepThePackageName = (pkgName) => pkgName;
const versionIncrements = [
    "patch",
    "minor",
    "major",
    ...(preId
        ? ["prepatch", "preminor", "premajor", "prerelease"]
        : []),
];
const inc = (i) => semverInc(currentVersion, i, preId);
const run = (bin, args, opts = {}) => execa(bin, args, { stdio: "inherit", ...opts });
const dryRun = async (bin, args, opts = {}) => console.log(chalk$1.blue(`[dryrun] ${bin} ${args.join(" ")}`), opts);
const runIfNotDry = isDryRun ? dryRun : run;
const step = (msg) => console.log(chalk$1.cyan(msg));
async function main() {
    let targetVersion = args._[0];
    if (!targetVersion) {
        // no explicit version, offer suggestions
        const { release } = await enquirer$1.prompt({
            type: "select",
            name: "release",
            message: "Select release type",
            choices: versionIncrements
                .map((i) => `${i} (${inc(i)})`)
                .concat(["custom"]),
        });
        if (release === "custom") {
            const { version } = await enquirer$1.prompt({
                type: "input",
                name: "version",
                message: "Input custom version",
                initial: currentVersion,
            });
            targetVersion = version;
        }
        else {
            const releaseMatchArray = release.match(/\((.*)\)/);
            if (releaseMatchArray?.length) {
                targetVersion = releaseMatchArray[1];
            }
            else {
                throw new Error("Version is required!");
            }
        }
    }
    if (!valid$1(targetVersion)) {
        throw new Error(`invalid target version: ${targetVersion}`);
    }
    const { yes: confirmRelease } = await enquirer$1.prompt({
        type: "confirm",
        name: "yes",
        message: `Releasing v${targetVersion}. Confirm?`,
    });
    if (!confirmRelease) {
        return;
    }
    // update all package versions and inter-dependencies
    step("\nUpdating cross dependencies...");
    updateVersions(targetVersion, keepThePackageName);
    // generate changelog
    step("\nGenerating changelog...");
    await run(`yarn`, ["run", "changelog"]);
    const { yes: changelogOk } = await enquirer$1.prompt({
        type: "confirm",
        name: "yes",
        message: `Changelog generated. Does it look good?`,
    });
    if (!changelogOk) {
        return;
    }
    // update yarn-lock.yaml
    // skipped during canary release because the package names changed and installing with `workspace:*` would fail
    step("\nUpdating lockfile...");
    await run(`yarn`, ["install", "--prefer-offline"]);
    const { stdout } = await run("git", ["diff"], { stdio: "pipe" });
    if (stdout) {
        step("\nCommitting changes...");
        await runIfNotDry("git", ["add", "-A"]);
        await runIfNotDry("git", ["commit", "-m", `release: v${targetVersion}`]);
    }
    else {
        console.log("No changes to commit.");
    }
    // push to GitHub
    step("\nPushing to GitHub...");
    await runIfNotDry("git", ["tag", `v${targetVersion}`]);
    const { yes: publishOk } = await enquirer$1.prompt({
        type: "confirm",
        name: "yes",
        message: `Publish to Git?`,
    });
    if (publishOk) {
        try {
            await runIfNotDry("git", ["push"]);
            await runIfNotDry("git", [
                "push",
                "origin",
                `refs/tags/v${targetVersion}`,
            ]);
        }
        catch (error) {
            const branch = await getCurrentBranch();
            try {
                await runIfNotDry("git", ["push", "--set-upstream", "origin", branch]);
                console.log(`Upstream branch set successfully for ${branch}.`);
            }
            catch (error) {
                console.error(`Failed to set upstream branch for ${branch}:`, error);
            }
        }
    }
    if (isDryRun) {
        console.log(`\nDry run finished - run git diff to see package changes.`);
    }
}
function updateVersions(version, getNewPackageName = keepThePackageName) {
    // 1. update root package.json
    updatePackage(process.cwd(), version, getNewPackageName);
}
function updatePackage(pkgRoot, version, getNewPackageName) {
    pkgPath = path$3.resolve(pkgRoot, "package.json");
    pkg = JSON.parse(node_fs.readFileSync(pkgPath, "utf-8"));
    pkg.name = getNewPackageName(pkg.name);
    pkg.version = version;
    node_fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
}
async function getCurrentBranch() {
    const result = await run("git", ["branch", "--show-current"], {
        stdio: "pipe",
    });
    console.log(result, "看看本地分支信息");
    return result.stdout.trim();
}
main().catch((err) => {
    updateVersions(currentVersion);
    console.error(err);
    process.exit(1);
});
