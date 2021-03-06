// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){

	var canvas = document.getElementById('textarea-output');

	if (canvas == null) {
		document.title = "Cara - Documentation";
		return;
	} else {
		document.title = "Cara - Home";
	}

	var context = canvas.getContext('2d');

	context.lineWidth = 2;
	context.lineCap = 'round';
	context.beginPath();

	var right_a = function(x, y, r) {
		context.moveTo(x, y-r);
		context.lineTo(x, y-2*r);
		if (font_style == 'classic') {
			context.moveTo(x-0.5*r, y-2*r);
		}
		context.lineTo(x+r, y-2*r);
		context.arc(x+r, y-r, r, 3*Math.PI/2, 0);
		context.lineTo(x+2*r, y);
		return x+3*r;
	}

	var left_k = function(x, y, r) {
		context.moveTo(x, y);
		context.lineTo(x, y-r);
		context.arc(x+r, y-r, r, Math.PI, 0);
		return x+3*r;
	}

	var right_k = function(x, y, r) {
		context.moveTo(x, y-r);
		context.arc(x+r, y-r, r, Math.PI, 0);
		context.lineTo(x+2*r, y);
		return x+3*r;
	}

	var left_t = function(x, y, r) {
		context.moveTo(x+2*r, y-r);
		context.arc(x+r, y-r, r, 2*Math.PI, 0);
		return x+3*r;
	}

	var left_p = function(x, y, r) {
		context.moveTo(x, y-2*r);
		context.lineTo(x, y-r);
		context.arc(x+r, y-r, r, Math.PI, 0, true);
		return x+3*r;
	}

	var right_p = function(x, y, r) {
		context.moveTo(x, y-r);
		context.arc(x+r, y-r, r, Math.PI, 0, true);
		context.lineTo(x+2*r, y-2*r);
		if (font_style == 'classic') {
			context.moveTo(x+2*r, y-2*r);
			context.lineTo(x+2*r, y);
		}
		return x+3*r;
	}

	var left_s = function(x, y, r) {
		if (font_style == 'classic') {
			context.moveTo(x+r, y);
			context.arc(x+r, y-r, r, Math.PI/2, 3*Math.PI/2);
			context.lineTo(x+2.5*r, y-2*r);
			context.moveTo(x+2*r, y-2*r);
		} else {
			context.moveTo(x, y);
			context.lineTo(x, y-r);
			context.arc(x+r, y-r, r, Math.PI, 3*Math.PI/2);
			context.lineTo(x+2*r, y-2*r);
		}
		context.lineTo(x+2*r, y-r);
		return x+3*r;
	}

	var _a = function(x, y, r) {
		context.moveTo(x, y);
		context.lineTo(x, y-r);
		right_a(x, y, r);
		return x+3*r;
	}

	var _k = function(x, y, r) {
		left_k(x, y, r);
		context.lineTo(x+2*r, y);
		return x+3*r;
	}

	var _g = function(x, y, r) {
		left_k(x, y, r);
		right_p(x+2*r, y, r);
		return x+5*r;
	}

	var _q = function(x, y, r) {
		x -= 0.5*r;
		context.moveTo(x, y);
		context.arc(x, y-r, r, Math.PI/2, 0, true);
		right_k(x+r, y, r);
		return x+4*r;
	}

	var _c = function(x, y, r) {
		_t(x, y, r);
		right_k(x+2*r, y, r);
		return x+5*r;
	}

	var _j = function(x, y, r) {
		left_s(x, y, r);
		right_p(x+2*r, y, r);
		return x+5*r;
	}

	var _x = function(x, y, r) {
		left_p(x, y, r);
		context.lineTo(x+2*r, y-2*r);
		right_a(x+2*r, y, r);
		return x+5*r;
	}

	var _t = function(x, y, r) {
		left_t(x, y, r);
		if (font_style == 'classic') {
			context.lineTo(x+2*r, y);
		}
		return x+3*r;
	}

	var _d = function(x, y, r) {
		left_t(x, y, r);
		right_p(x+2*r, y, r);
		return x+5*r;
	}

	var _n = function(x, y, r) {
		context.moveTo(x+2*r, y-2*r);
		context.lineTo(x+r, y-2*r);
		if (font_style == 'classic') {
			context.arc(x+r, y-r, r, 3*Math.PI/2, 0, true);
		} else {
			context.arc(x+r, y-r, r, 3*Math.PI/2, Math.PI/2, true);
			context.lineTo(x+2*r, y);
		}
		return x+3*r;
	}

	var _p = function(x, y, r) {
		context.moveTo(x, y-2*r);
		context.lineTo(x, y-r);
		right_p(x, y, r);
		return x+3*r;
	}

	var _b = function(x, y, r) {
		left_p(x, y, r);
		_p(x+2*r, y, r);
		return x+5*r;
	}

	var _m = function(x, y, r) {
		context.moveTo(x, y-2*r);
		context.lineTo(x+2*r, y-2*r);
		context.arc(x+r, y-r, r, 3*Math.PI/2, 0, true);
		context.lineTo(x+2*r, y-2*r);
		if (font_style == 'classic') {
			context.moveTo(x+2*r, y-2*r);
			context.lineTo(x+2*r, y);
		}
		return x+3*r;
	}

	var _y = function(x, y, r) {
		_r(x, y, r);
		right_k(x+2*r, y, r);
		return x+5*r;
	}

	var _r = function(x, y, r) {
		context.moveTo(x, y);
		context.lineTo(x, y-2*r);
		right_k(x, y, r);
		return x+3*r;
	}

	var _l = function(x, y, r) {
		context.moveTo(x, y-2*r);
		context.lineTo(x+2*r, y-2*r);
		_n(x, y, r);
		return x+3*r;
	}

	var _w = function(x, y, r) {
		_p(x, y, r);
		right_k(x+2*r, y, r);
		return x+5*r;
	}

	var _s = function(x, y, r) {
		left_s(x, y, r);
		context.lineTo(x+2*r, y);
		return x+3*r;
	}

	var _h = function(x, y, r) {
		x -= 0.5*r;
		context.moveTo(x, y);
		context.arc(x, y-r, r, Math.PI/2, 0, true);
		right_a(x+r, y, r);
		return x+4*r;
	}

	var _f = function(x, y, r) {
		context.moveTo(x+2*r, y-r);
		context.lineTo(x+2*r, y+r);
		context.arc(x+r, y+r, r, 0, Math.PI);
	}

	var _fa = function(x, y, r) {
		_a(x, y, r);
		_f(x, y, r);
		return x+3*r;
	}

	var _fk = function(x, y, r) {
		_k(x, y, r);
		_f(x, y, r);
		return x+3*r;
	}

	var _fg = function(x, y, r) {
		_g(x, y, r);
		_f(x+2*r, y, r);
		return x+5*r;
	}

	var _fq = function(x, y, r) {
		_q(x, y, r);
		_f(x+0.5*r, y, r);
		return x+3.5*r;
	}

	var _fc = function(x, y, r) {
		_c(x, y, r);
		_f(x+2*r, y, r);
		return x+5*r;
	}

	var _fj = function(x, y, r) {
		_j(x, y, r);
		_f(x+2*r, y, r);
		return x+5*r;
	}

	var _fx = function(x, y, r) {
		_x(x, y, r);
		_f(x+2*r, y, r);
		return x+5*r;
	}

	var _ft = function(x, y, r) {
		_t(x, y, r);
		_f(x, y, r);
		return x+3*r;
	}

	var _fd = function(x, y, r) {
		_d(x, y, r);
		_f(x+2*r, y, r);
		return x+5*r;
	}

	var _fn = function(x, y, r) {
		if (font_style == 'classic') {
			_n(x, y, r);
			_f(x, y, r);
		} else {
			context.moveTo(x+2*r, y-2*r);
			context.lineTo(x+r, y-2*r);
			context.arc(x+r, y-r, r, 3*Math.PI/2, Math.PI/2, true);
			context.arc(x+r, y+r, r, 3*Math.PI/2, Math.PI);
		}
		return x+3*r;
	}

	var _fp = function(x, y, r) {
		_p(x, y, r);
		_f(x, y, r);
		return x+3*r;
	}

	var _fb = function(x, y, r) {
		_b(x, y, r);
		_f(x+2*r, y, r);
		return x+5*r;
	}

	var _fm = function(x, y, r) {
		_m(x, y, r);
		_f(x, y, r);
		return x+3*r;
	}

	var _fy = function(x, y, r) {
		_y(x, y, r);
		_f(x+2*r, y, r);
		return x+5*r;
	}

	var _fr = function(x, y, r) {
		_r(x, y, r);
		_f(x, y, r);
		return x+3*r;
	}

	var _fl = function(x, y, r) {
		context.moveTo(x, y-2*r);
		context.lineTo(x+2*r, y-2*r);
		_fn(x, y, r);
		return x+3*r;
	}

	var _fw = function(x, y, r) {
		_w(x, y, r);
		_f(x+2*r, y, r);
		return x+5*r;
	}

	var _fs = function(x, y, r) {
		_s(x, y, r);
		_f(x, y, r);
		return x+3*r;
	}

	var _fh = function(x, y, r) {
		_h(x, y, r);
		_f(x+0.5*r, y, r);
		return x+3.5*r;
	}

	var _v = function(x, y, r) {
		context.moveTo(x+2*r, y-r);
		context.lineTo(x+2*r, y+r);
		context.arc(x+3*r, y+r, r, Math.PI, Math.PI/2, true);
	}

	var _va = function(x, y, r) {
		_a(x, y, r);
		_v(x, y, r);
		return x+3*r;
	}

	var _vk = function(x, y, r) {
		_k(x, y, r);
		_v(x, y, r);
		return x+3*r;
	}

	var _vg = function(x, y, r) {
		_g(x, y, r);
		_v(x+2*r, y, r);
		return x+5*r;
	}

	var _vq = function(x, y, r) {
		_q(x, y, r);
		_v(x+0.5*r, y, r);
		return x+3.5*r;
	}

	var _vc = function(x, y, r) {
		_c(x, y, r);
		_v(x+2*r, y, r);
		return x+5*r;
	}

	var _vj = function(x, y, r) {
		_j(x, y, r);
		_v(x+2*r, y, r);
		return x+5*r;
	}

	var _vx = function(x, y, r) {
		_x(x, y, r);
		_v(x+2*r, y, r);
		return x+5*r;
	}

	var _vt = function(x, y, r) {
		_t(x, y, r);
		_v(x, y, r);
		return x+3*r;
	}

	var _vd = function(x, y, r) {
		_d(x, y, r);
		_v(x+2*r, y, r);
		return x+5*r;
	}

	var _vn = function(x, y, r) {
		if (font_style == 'classic') {
			_n(x, y, r);
			_v(x, y, r);
		} else {
			context.moveTo(x+2*r, y-2*r);
			context.lineTo(x+r, y-2*r);
			context.arc(x+r, y-r, r, 3*Math.PI/2, Math.PI/2, true);
			context.arc(x+r, y+r, r, 3*Math.PI/2, 0);
			context.arc(x+3*r, y+r, r, Math.PI, Math.PI/2, true);
		}
		return x+3*r;
	}

	var _vp = function(x, y, r) {
		_p(x, y, r);
		_v(x, y, r);
		return x+3*r;
	}

	var _vb = function(x, y, r) {
		_b(x, y, r);
		_v(x+2*r, y, r);
		return x+5*r;
	}

	var _vm = function(x, y, r) {
		_m(x, y, r);
		_v(x, y, r);
		return x+3*r;
	}

	var _vy = function(x, y, r) {
		_y(x, y, r);
		_v(x+2*r, y, r);
		return x+5*r;
	}

	var _vr = function(x, y, r) {
		_r(x, y, r);
		_v(x, y, r);
		return x+3*r;
	}

	var _vl = function(x, y, r) {
		context.moveTo(x, y-2*r);
		context.lineTo(x+2*r, y-2*r);
		_vn(x, y, r);
		return x+3*r;
	}

	var _vw = function(x, y, r) {
		_w(x, y, r);
		_v(x+2*r, y, r);
		return x+5*r;
	}

	var _vs = function(x, y, r) {
		_s(x, y, r);
		_v(x, y, r);
		return x+3*r;
	}

	var _vh = function(x, y, r) {
		_h(x, y, r);
		_v(x+0.5*r, y, r);
		return x+3.5*r;
	}

	var _z = function(x, y, r) {
		var rcos = r*Math.cos(Math.PI/4);
		var rcos = r/2;
		context.moveTo(x-2*r-rcos, y-3*r+rcos);
		context.lineTo(x-2*r+rcos, y-3*r-rcos);
		return x;
	}

	var _i = function(x, y, r) {
		var rcos = r*Math.cos(Math.PI/4);
		var rcos = r/2;
		context.moveTo(x-2*r-rcos, y-3*r-rcos);
		context.lineTo(x-2*r+rcos, y-3*r+rcos);
		return x;
	}

	var _o = function(x, y, r) {
		var rcos = r*Math.cos(Math.PI/4);
		var rcos = r/2;
		context.moveTo(x-2*r-rcos, y+r+rcos);
		context.lineTo(x-2*r+rcos, y+r-rcos);
		return x;
	}

	var _u = function(x, y, r) {
		var rcos = r*Math.cos(Math.PI/4);
		var rcos = r/2;
		context.moveTo(x-2*r-rcos, y+r-rcos);
		context.lineTo(x-2*r+rcos, y+r+rcos);
		return x;
	}

	var _e = function(x, y, r) {
		context.moveTo(x-2*r+r/8, y-3*r);
		context.arc(x-2*r, y-3*r, r/8, 0, 2*Math.PI);
		return x;
	}

	var _spasi = function(x, y, r) {
		return x+2*r;
	}

	var _sempang = function(x, y, r) {
		context.moveTo(x, y-r);
		context.lineTo(x+r, y-r);
		return x+2*r;
	}

	var _singkat = function(x, y, r) {
		context.moveTo(x, y-3*r);
		context.arc(x+r, y-3*r, r, Math.PI, Math.PI/2);
		context.arc(x+r, y-r, r, 3*Math.PI/2, 0, true);
		return x+3*r;
	}

	var _carik = function(x, y, r) {
		context.moveTo(x, y-2*r);
		context.lineTo(x, y);
		return x+r;
	}

	var _danda = function(x, y, r) {
		context.moveTo(x, y-2*r);
		context.lineTo(x, y+2*r);
		return x+r;
	}

	var _bisah = function(x, y, r) {
		context.moveTo(x, y-2*r);
		context.arc(x, y-r, r, 3*Math.PI/2, Math.PI/2);
		return x+2*r;
	}

	var _kbuka = function(x, y, r) {
		context.moveTo(x, y);
		context.lineTo(x, y-4*r);
		context.moveTo(x, y-4*r);
		context.lineTo(x+1.5*r, y-4*r);
		return x+2*r;
	}

	var _ktutup = function(x, y, r) {
		x -= 0.5*r
		context.moveTo(x, y-4*r);
		context.lineTo(x+1.5*r, y-4*r);
		context.moveTo(x+1.5*r, y-4*r);
		context.lineTo(x+1.5*r, y);
		return x+2.5*r;
	}


	var _0 = function(x, y, r) {
		y += r;
		context.moveTo(x, y-3*r);
		context.arc(x+r, y-3*r, r, Math.PI, 0);
		context.lineTo(x+2*r, y-r);
		context.arc(x+r, y-r, r, 0, Math.PI);
		context.lineTo(x, y-3*r);
		return x+3*r;
	}

	var _1 = function(x, y, r) {
		y += r;
		context.moveTo(x, y-3*r);
		context.arc(x, y-4*r, r, Math.PI/2, 0, true);
		context.moveTo(x+r, y-4*r);
		context.lineTo(x+r, y);
		return x+2.25*r;
	}

	var _2 = function(x, y, r) {
		y += r;
		context.moveTo(x, y-3*r);
		context.arc(x+r, y-3*r, r, Math.PI, Math.PI/2);
		context.arc(x+r, y-r, r, 3*Math.PI/2, Math.PI, true);
		context.lineTo(x, y);
		context.lineTo(x+2*r, y);
		return x+3*r;
	}

	var _3 = function(x, y, r) {
		y += r;
		context.moveTo(x, y-3*r);
		context.arc(x+r, y-3*r, r, Math.PI, Math.PI/2);
		context.arc(x+r, y-r, r, 3*Math.PI/2, Math.PI);
		return x+3*r;
	}

	var _4 = function(x, y, r) {
		y += r;
		context.moveTo(x+1.5*r, y);
		context.lineTo(x+1.5*r, y-4*r);
		context.moveTo(x+1.5*r, y-4*r);
		context.lineTo(x, y-r);
		context.moveTo(x, y-r);
		context.lineTo(x+2*r, y-r);
		return x+3*r;
	}

	var _5 = function(x, y, r) {
		y += r;
        context.moveTo(x+2*r, y-4*r);
        context.lineTo(x, y-4*r);
        context.lineTo(x, y-2*r);
        context.arc(x+r, y-2*r, r, Math.PI, 0);
        context.lineTo(x+2*r, y-r);
        context.arc(x+r, y-r, r, 0, Math.PI);
        return x+3*r;
    }

    var _6 = function(x, y, r) {
    	y += r;
    	context.moveTo(x+2*r, y-3*r);
    	context.arc(x+r, y-3*r, r, 0, Math.PI, true);
    	context.lineTo(x, y-r);
    	context.arc(x+r, y-r, r, -Math.PI, Math.PI, true);
    	return x+3*r;
    }

    var _7 = function(x, y, r) {
    	y += r;
		context.moveTo(x, y-4*r);
		context.lineTo(x+2*r, y-4*r);
		context.moveTo(x+2*r, y-4*r);
		context.lineTo(x+0.5*r, y);
		return x+3*r;
	}

    var _8 = function(x, y, r) {
    	y += r;
    	context.moveTo(x+2*r, y-3*r);
    	context.arc(x+r, y-3*r, r, 0, 2*Math.PI, true);
    	context.moveTo(x+2*r, y-r);
    	context.arc(x+r, y-r, r, 0, 2*Math.PI, true);
    	return x+3*r;
    }

    var _9 = function(x, y, r) {
    	y += r;
    	context.moveTo(x+2*r, y-3*r);
    	context.arc(x+r, y-3*r, r, 0, 2*Math.PI);
    	context.lineTo(x+2*r, y-r);
    	context.arc(x+r, y-r, r, 0, Math.PI);
    	return x+3*r;
    }

    var _plus = function(x, y, r) {
		context.moveTo(x, y-r);
		context.lineTo(x+r, y-r);
		context.moveTo(x+0.5*r, y-1.5*r);
		context.lineTo(x+0.5*r, y-0.5*r);
		return x+2*r;
	}

	var _equal = function(x, y, r) {
		context.moveTo(x, y-1.5*r);
		context.lineTo(x+r, y-1.5*r);
		context.moveTo(x, y-0.5*r);
		context.lineTo(x+r, y-0.5*r);
		return x+2*r;
	}

	var _point = function(x, y, r) {
		context.moveTo(x+r/8, y-r);
		context.arc(x, y-r, r/8, 0, 2*Math.PI);
		return x+r;
	}

	var _colon = function(x, y, r) {
		context.moveTo(x+r/8, y-1.5*r);
		context.arc(x, y-1.5*r, r/8, 0, 2*Math.PI);
		context.moveTo(x+r/8, y-0.5*r);
		context.arc(x, y-0.5*r, r/8, 0, 2*Math.PI);
		return x+r;
	}

    var vowels = ['z', 'i', 'o', 'u', 'e'];
    var consonants = ['a', 'k', 'g', 'q', 'c', 'j', 'x', 't', 'd', 'n', 'p', 'b', 'm', 'y', 'r', 'l', 'w', 's', 'h'];
    var a_phobic = ['g', 'j', 'd', 'n', 'p', 'b', 'm', 'l', 's', '.', ',', '?', '!', '0', '5', '9', ']'];
    var s_phobic = ['a', 'x', 'p', 'b', 'm', 'y', 'r', 'l','w', '.', ',', '?', '!', ';', '0', '5', '6', '['];
    var q_phobic = ['a', 'k', 'g', 'q', 'c', 'j', 'x', 't', 'd', 'p', 'b', 'm', 'y', 'r', 'w', 's', 'h', '.', ',', '?', '!', '2', ']'];
    var kurung_phobic = ['[', ']'];
    var portruding = ['a', 'q', 'h', ']'];
    var portruding_sans = ['q', 'h', ']'];
    var breakable = ['-', '+', '=', "'", ':'];

    // moves 'f' and 'v'
    var reposition = function(text) {
    	newText = text.split("");
    	prevCons = null;
    	for (var i = 0; i < newText.length; i++) {
    		c = newText[i];
    		if (c == ' ') {
    			prevCons = null;
    		} else if (consonants.indexOf(c) != -1) {
    			prevCons = i;
    		} else if (c == 'f' || c == 'v') {
    			if (prevCons == null) {
    				newText[i] = '_'; // remove it
    			} else {
    				for (var j = i; j > prevCons; j--) {
    					newText[j] = newText[j-1]; 
    				}
    				newText[prevCons] = c; // move it to front of cons
    			}
    		}
    	}
    	return newText.join("");
    }

    var uud45;
	$.get('assets/uud45.txt', function(data) {
    	uud45 = data;
	}); 

	var udhr;
	$.get('assets/udhr.txt', function(data) {
    	udhr = data;
	});

    var parse = function(text) {
    	canvas.width = canvas.width;
    	context.lineWidth = font_width_abs;
    	context.lineCap = 'round';
        context.strokeStyle = font_color;
        context.fillStyle = font_color;

    	context.beginPath();
    	var c;
    	var state = 'a';

    	var ar = font_size/2;
    	var ax = ar*2;
    	var ay = ar*5;
    	var orig_x = ax;
    	var prevChar = ' ';
    	var wordStartIdx = 0;
    	var wordStartPos = ax;
    	var numLines = 1;

    	var lineBreak = function(i) {
    		ax = orig_x;
    		ay += 7*ar;
    		wordStartIdx = i+1;
    		wordStartPos = ax;
    		numLines ++;
    	}

    	var breakLocations = [];

    	for (var i = 0; i < text.length; i++) {
    		c = text[i];
    		if (c == 'f') {
    			state = 'f';
    		} else if (c == 'v') {
    			state = 'v';
    		} else if (c == '\n') {
    			lineBreak(i);
    		} else if (c == ' ') {
    			prevChar = ' ';
    			ax = draw(' ', state, ax, ay, ar);
    			wordStartIdx = i+1;
    			wordStartPos = ax;
    		} else {
    			if (font_style == 'classic' && vowels.indexOf(c) == -1) {
    				ax += kern(prevChar, c)*ar;
    				if (state != 'a' && (c == 'n' || c == 'l')) { // nf, nv, lf, lv should not be kerned
    					prevChar = ','
    				} else {
    					prevChar = c;
    				}
    			}
    			if (ax == orig_x) { // align left a, q, h
    				if ((font_style == 'classic' && portruding.indexOf(c) != -1) || (font_style != 'classic' && portruding_sans.indexOf(c) != -1)) {
    					ax += 0.5*ar;
    				} 
    			}
    			if (ax > canvas.width - (char_width(c)+0.5)*ar) { // line break
    				if (wordStartPos > orig_x) { // break whole word
    					breakLocations.push(wordStartIdx);
    					i = wordStartIdx-1;
    					state = 'a';
    					context.stroke();
    					context.beginPath();
    					lineBreak(i);
    					continue;
    				}
    				ax = orig_x;
    				ay += 7*ar;
    			}
    			ax = draw(c, state, ax, ay, ar);
    			state = 'a';
    			if (breakable.indexOf(c) != -1) { // allow break after sempang etc
    				wordStartIdx = i+1;
    				wordStartPos = ax;
    			}
    		}
    	}
    	context.stroke();

    	return {w: ax + ar, h: ay + 3*ar, n: numLines, b: breakLocations};
    }

    var kern = function(prevChar, c) {
    	k = 0;
    	if (prevChar == 's') {
    		if (s_phobic.indexOf(c) != -1) {
    			k += 0.25;
    		}
    	}
    	if (c == 'a') {
    		if (a_phobic.indexOf(prevChar) != -1) {
    			k += 0.25;
    		}
    	}
    	if (c == 'q' || c == 'h') {
    		if (q_phobic.indexOf(prevChar) != -1) {
    			k += 0.25;
    		}
    	}
    	if (prevChar == '[') {
    		if (kurung_phobic.indexOf(c) != -1) {
    			k += 0.25
    		}
    	}
    	if (c == ']') {
    		if (kurung_phobic.indexOf(prevChar) != -1) {
    			k += 0.25
    		}
    	}
    	return k;
    }

    var draw = function(c, state, ax, ay, ar) {
    	switch (c) {
    		case 'a':
    			if (state == 'f') return _fa(ax, ay, ar); else if (state == 'v') return _va(ax, ay, ar); else return _a(ax, ay, ar);
    		case 'k':
    			if (state == 'f') return _fk(ax, ay, ar); else if (state == 'v') return _vk(ax, ay, ar); else return _k(ax, ay, ar);
    		case 'g':
    			if (state == 'f') return _fg(ax, ay, ar); else if (state == 'v') return _vg(ax, ay, ar); else return _g(ax, ay, ar);
    		case 'q':
    			if (state == 'f') return _fq(ax, ay, ar); else if (state == 'v') return _vq(ax, ay, ar); else return _q(ax, ay, ar);
    		case 'c':
    			if (state == 'f') return _fc(ax, ay, ar); else if (state == 'v') return _vc(ax, ay, ar); else return _c(ax, ay, ar);
    		case 'j':
    			if (state == 'f') return _fj(ax, ay, ar); else if (state == 'v') return _vj(ax, ay, ar); else return _j(ax, ay, ar);
    		case 'x':
    			if (state == 'f') return _fx(ax, ay, ar); else if (state == 'v') return _vx(ax, ay, ar); else return _x(ax, ay, ar);
    		case 't':
    			if (state == 'f') return _ft(ax, ay, ar); else if (state == 'v') return _vt(ax, ay, ar); else return _t(ax, ay, ar);
    		case 'd':
    			if (state == 'f') return _fd(ax, ay, ar); else if (state == 'v') return _vd(ax, ay, ar); else return _d(ax, ay, ar);
    		case 'n':
    			if (state == 'f') return _fn(ax, ay, ar); else if (state == 'v') return _vn(ax, ay, ar); else return _n(ax, ay, ar);
    		case 'p':
    			if (state == 'f') return _fp(ax, ay, ar); else if (state == 'v') return _vp(ax, ay, ar); else return _p(ax, ay, ar);
    		case 'b':
    			if (state == 'f') return _fb(ax, ay, ar); else if (state == 'v') return _vb(ax, ay, ar); else return _b(ax, ay, ar);
    		case 'm':
    			if (state == 'f') return _fm(ax, ay, ar); else if (state == 'v') return _vm(ax, ay, ar); else return _m(ax, ay, ar);
    		case 'y':
    			if (state == 'f') return _fy(ax, ay, ar); else if (state == 'v') return _vy(ax, ay, ar); else return _y(ax, ay, ar);
    		case 'r':
    			if (state == 'f') return _fr(ax, ay, ar); else if (state == 'v') return _vr(ax, ay, ar); else return _r(ax, ay, ar);
    		case 'l':
    			if (state == 'f') return _fl(ax, ay, ar); else if (state == 'v') return _vl(ax, ay, ar); else return _l(ax, ay, ar);
    		case 'w':
    			if (state == 'f') return _fw(ax, ay, ar); else if (state == 'v') return _vw(ax, ay, ar); else return _w(ax, ay, ar);
    		case 's':
    			if (state == 'f') return _fs(ax, ay, ar); else if (state == 'v') return _vs(ax, ay, ar); else return _s(ax, ay, ar);
    		case 'h':
    			if (state == 'f') return _fh(ax, ay, ar); else if (state == 'v') return _vh(ax, ay, ar); else return _h(ax, ay, ar);
    		case 'z':
    			return _z(ax, ay, ar);
    		case 'i':
    			return _i(ax, ay, ar);
    		case 'o':
    			return _o(ax, ay, ar);
    		case 'u':
    			return _u(ax, ay, ar);
    		case 'e':
    			return _e(ax, ay, ar);
    		case ' ':
    			return _spasi(ax, ay, ar);
    		case ';':
    			return _bisah(ax, ay, ar);
    		case '-':
    			return _sempang(ax, ay, ar);
    		case '/':
    			return _singkat(ax, ay, ar);
    		case '.':
    			return _danda(ax, ay, ar);
    		case ',':
    			return _carik(ax, ay, ar);
    		case '[':
    			return _kbuka(ax, ay, ar);
    		case ']':
    			return _ktutup(ax, ay, ar);
    		case '!':
    			ax = _danda(ax, ay, ar);
    			return _carik(ax, ay, ar);
    		case '?':
    			ax = _carik(ax, ay, ar);
    			return _danda(ax, ay, ar);
    		case '0':
    			return _0(ax, ay, ar);
    		case '1':
    			return _1(ax, ay, ar);
    		case '2':
    			return _2(ax, ay, ar);
    		case '3':
    			return _3(ax, ay, ar);
    		case '4':
    			return _4(ax, ay, ar);
    		case '5':
    			return _5(ax, ay, ar);
    		case '6':
    			return _6(ax, ay, ar);
    		case '7':
    			return _7(ax, ay, ar);
    		case '8':
    			return _8(ax, ay, ar);
    		case '9':
    			return _9(ax, ay, ar);
    		case '+':
    			return _plus(ax, ay, ar);
    		case '=':
    			return _equal(ax, ay, ar);
    		case "'":
    			return _point(ax, ay, ar);
    		case ':':
    			return _colon(ax, ay, ar);
    		default:
    			return ax;
    	}
    }

    var char_width = function(c) {
    	switch (c) {
    		case '.':
    		case ',':
    		case '>':
    			return 1;
    		case '[':
    		case ']':
    		case ' ':
    		case ';':
    		case '-':
    		case '!':
    		case '?':
    		case '_':
    			return 2;
    		case '1':
    			return 2.25;
    		case 'a':
    		case 'k':
    		case 't':
    		case 'n':
    		case 'p':
    		case 'm':
    		case 'r':
    		case 'l':
    		case 's':
    		case '/':
    		case '0':
    		case '2':
    		case '3':
    		case '4':
    		case '5':
    		case '6':
    		case '7':
    		case '8':
    		case '9':
    			return 3;
    		case 'q':
    		case 'h':
    			return 3.5;
    		case 'g':
    		case 'c':
    		case 'j':
    		case 'x':
    		case 'd':
    		case 'b':
    		case 'y':
    		case 'w':
    			return 5;
    		default:
    			return 0;
    	}
    }

    var text_height = 0;
    var text_width = 0;
    var num_lines = 0;

    // parse, add line breaks, and adjust the canvas height
    var parse_adjust = function(text) {
    	//sample texts
    	if (text == '***') {
    		text = uud45;
		} else if (text == '*****') {
			text = udhr;
		}

		text = text.toLowerCase();
    	text = reposition(text);

    	var text_info = parse(text); // layout parse
    	text_height = text_info.h;
    	text_width = text_info.w;
    	num_lines = text_info.n;
    	break_locations = text_info.b.reverse();

    	// add line breaks
    	for (var i = 0; i < break_locations.length; i++) {
    		var loc = break_locations[i];
    		text = text.substr(0, loc) + '\n' + text.substr(loc);
    	}

		canvas.height = Math.max(text_height, min_height);
		parse(text);
    }

    // Default values
    var font_style = 'modern';
    var font_size = 14;
    var font_width = 3;
    var font_width_abs = font_size/20 * font_width;
    var font_color = 'black';
    var min_height = canvas.height;
    var width_ratio = 0.7;
    var min_width = $(window).width() * width_ratio;
    canvas.width = min_width;

    // Sets the default values:
    $("#font-size").val(font_size);
    $("#font-style").val(font_style);
    $("#font-width").val(font_width);
    $("#font-color").val(font_color);


    $("#font-size").change(function(){
    	font_size = parseInt($(this).val());
    	font_width_abs = font_size/20 * font_width;
        var input_text = $(".textarea-home#input").val();
		parse_adjust(input_text);
    });

    $("#font-width").change(function(){
    	font_width = parseInt($(this).val());
    	font_width_abs = font_size/20 * font_width;
    	var input_text = $(".textarea-home#input").val();
		parse_adjust(input_text);
    });

    $("#font-style").change(function(){
    	font_style = $(this).val();
    	var input_text = $(".textarea-home#input").val();
		parse_adjust(input_text);
    });

    $("#font-color").change(function(){
    	font_color = $(this).val();
    	var input_text = $(".textarea-home#input").val();
		parse_adjust(input_text);
	});

	// Textarea input listens to keypress events.
	$(".textarea-home#input").keyup(function(){
		var input_text = $(this).val();
		parse_adjust(input_text);
	});

	$("#save_button").click(function(){
		if (text_height < min_height || num_lines < 2) {
			var input_text = $(".textarea-home#input").val();
			var prev_height = canvas.height;
			canvas.height = text_height;
			if (num_lines < 2)
				canvas.width = text_width;
			parse(input_text);
			$(this).attr('href', canvas.toDataURL());
			
			//return to original
			canvas.width = min_width;
			canvas.height = prev_height;
			parse(input_text);
		} else {
			$(this).attr('href', canvas.toDataURL());
		}
	});

	$(window).resize(function() {
		min_width = $(window).width() * width_ratio;
    	canvas.width = min_width;
    	var input_text = $(".textarea-home#input").val();
		parse_adjust(input_text);
	});

	var input_text = $(".textarea-home#input").val();
	parse_adjust(input_text);

});