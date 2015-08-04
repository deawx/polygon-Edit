! function(e, t) {
	function n(e) {
		var t = e.length,
			n = ct.type(e);
		return ct.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}

	function o(e) {
		var t = Tt[e] = {};
		return ct.each(e.match(dt) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function r(e, n, o, r) {
		if (ct.acceptData(e)) {
			var i, a, s = ct.expando,
				l = e.nodeType,
				u = l ? ct.cache : e,
				c = l ? e[s] : e[s] && s;
			if (c && u[c] && (r || u[c].data) || o !== t || "string" != typeof n) return c || (c = l ? e[s] = tt.pop() || ct.guid++ : s), u[c] || (u[c] = l ? {} : {
				toJSON: ct.noop
			}), ("object" == typeof n || "function" == typeof n) && (r ? u[c] = ct.extend(u[c], n) : u[c].data = ct.extend(u[c].data, n)), a = u[c], r || (a.data || (a.data = {}), a = a.data), o !== t && (a[ct.camelCase(n)] = o), "string" == typeof n ? (i = a[n], null == i && (i = a[ct.camelCase(n)])) : i = a, i
		}
	}

	function i(e, t, n) {
		if (ct.acceptData(e)) {
			var o, r, i = e.nodeType,
				a = i ? ct.cache : e,
				l = i ? e[ct.expando] : ct.expando;
			if (a[l]) {
				if (t && (o = n ? a[l] : a[l].data)) {
					ct.isArray(t) ? t = t.concat(ct.map(t, ct.camelCase)) : t in o ? t = [t] : (t = ct.camelCase(t), t = t in o ? [t] : t.split(" ")), r = t.length;
					for (; r--;) delete o[t[r]];
					if (n ? !s(o) : !ct.isEmptyObject(o)) return
				}(n || (delete a[l].data, s(a[l]))) && (i ? ct.cleanData([e], !0) : ct.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
			}
		}
	}

	function a(e, n, o) {
		if (o === t && 1 === e.nodeType) {
			var r = "data-" + n.replace(Et, "-$1").toLowerCase();
			if (o = e.getAttribute(r), "string" == typeof o) {
				try {
					o = "true" === o ? !0 : "false" === o ? !1 : "null" === o ? null : +o + "" === o ? +o : At.test(o) ? ct.parseJSON(o) : o
				} catch (i) {}
				ct.data(e, n, o)
			} else o = t
		}
		return o
	}

	function s(e) {
		var t;
		for (t in e)
			if (("data" !== t || !ct.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}

	function l() {
		return !0
	}

	function u() {
		return !1
	}

	function c() {
		try {
			return G.activeElement
		} catch (e) {}
	}

	function p(e, t) {
		do e = e[t]; while (e && 1 !== e.nodeType);
		return e
	}

	function d(e, t, n) {
		if (ct.isFunction(t)) return ct.grep(e, function(e, o) {
			return !!t.call(e, o, e) !== n
		});
		if (t.nodeType) return ct.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (_t.test(t)) return ct.filter(t, e, n);
			t = ct.filter(t, e)
		}
		return ct.grep(e, function(e) {
			return ct.inArray(e, t) >= 0 !== n
		})
	}

	function f(e) {
		var t = Xt.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement)
			for (; t.length;) n.createElement(t.pop());
		return n
	}

	function g(e, t) {
		return ct.nodeName(e, "table") && ct.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function h(e) {
		return e.type = (null !== ct.find.attr(e, "type")) + "/" + e.type, e
	}

	function m(e) {
		var t = rn.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function y(e, t) {
		for (var n, o = 0; null != (n = e[o]); o++) ct._data(n, "globalEval", !t || ct._data(t[o], "globalEval"))
	}

	function v(e, t) {
		if (1 === t.nodeType && ct.hasData(e)) {
			var n, o, r, i = ct._data(e),
				a = ct._data(t, i),
				s = i.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s)
					for (o = 0, r = s[n].length; r > o; o++) ct.event.add(t, n, s[n][o])
			}
			a.data && (a.data = ct.extend({}, a.data))
		}
	}

	function b(e, t) {
		var n, o, r;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !ct.support.noCloneEvent && t[ct.expando]) {
				r = ct._data(t);
				for (o in r.events) ct.removeEvent(t, o, r.handle);
				t.removeAttribute(ct.expando)
			}
			"script" === n && t.text !== e.text ? (h(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ct.support.html5Clone && e.innerHTML && !ct.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}

	function C(e, n) {
		var o, r, i = 0,
			a = typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Y ? e.querySelectorAll(n || "*") : t;
		if (!a)
			for (a = [], o = e.childNodes || e; null != (r = o[i]); i++) !n || ct.nodeName(r, n) ? a.push(r) : ct.merge(a, C(r, n));
		return n === t || n && ct.nodeName(e, n) ? ct.merge([e], a) : a
	}

	function w(e) {
		tn.test(e.type) && (e.defaultChecked = e.checked)
	}

	function L(e, t) {
		if (t in e) return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), o = t, r = Tn.length; r--;)
			if (t = Tn[r] + n, t in e) return t;
		return o
	}

	function x(e, t) {
		return e = t || e, "none" === ct.css(e, "display") || !ct.contains(e.ownerDocument, e)
	}

	function k(e, t) {
		for (var n, o, r, i = [], a = 0, s = e.length; s > a; a++) o = e[a], o.style && (i[a] = ct._data(o, "olddisplay"), n = o.style.display, t ? (i[a] || "none" !== n || (o.style.display = ""), "" === o.style.display && x(o) && (i[a] = ct._data(o, "olddisplay", N(o.nodeName)))) : i[a] || (r = x(o), (n && "none" !== n || !r) && ct._data(o, "olddisplay", r ? n : ct.css(o, "display"))));
		for (a = 0; s > a; a++) o = e[a], o.style && (t && "none" !== o.style.display && "" !== o.style.display || (o.style.display = t ? i[a] || "" : "none"));
		return e
	}

	function T(e, t, n) {
		var o = vn.exec(t);
		return o ? Math.max(0, o[1] - (n || 0)) + (o[2] || "px") : t
	}

	function A(e, t, n, o, r) {
		for (var i = n === (o ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += ct.css(e, n + kn[i], !0, r)), o ? ("content" === n && (a -= ct.css(e, "padding" + kn[i], !0, r)), "margin" !== n && (a -= ct.css(e, "border" + kn[i] + "Width", !0, r))) : (a += ct.css(e, "padding" + kn[i], !0, r), "padding" !== n && (a += ct.css(e, "border" + kn[i] + "Width", !0, r)));
		return a
	}

	function E(e, t, n) {
		var o = !0,
			r = "width" === t ? e.offsetWidth : e.offsetHeight,
			i = pn(e),
			a = ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, i);
		if (0 >= r || null == r) {
			if (r = dn(e, t, i), (0 > r || null == r) && (r = e.style[t]), bn.test(r)) return r;
			o = a && (ct.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
		}
		return r + A(e, t, n || (a ? "border" : "content"), o, i) + "px"
	}

	function N(e) {
		var t = G,
			n = wn[e];
		return n || (n = S(e, t), "none" !== n && n || (cn = (cn || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = S(e, t), cn.detach()), wn[e] = n), n
	}

	function S(e, t) {
		var n = ct(t.createElement(e)).appendTo(t.body),
			o = ct.css(n[0], "display");
		return n.remove(), o
	}

	function M(e, t, n, o) {
		var r;
		if (ct.isArray(t)) ct.each(t, function(t, r) {
			n || En.test(e) ? o(e, r) : M(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, o)
		});
		else if (n || "object" !== ct.type(t)) o(e, t);
		else
			for (r in t) M(e + "[" + r + "]", t[r], n, o)
	}

	function j(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var o, r = 0,
				i = t.toLowerCase().match(dt) || [];
			if (ct.isFunction(n))
				for (; o = i[r++];) "+" === o[0] ? (o = o.slice(1) || "*", (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
		}
	}

	function O(e, t, n, o) {
		function r(s) {
			var l;
			return i[s] = !0, ct.each(e[s] || [], function(e, s) {
				var u = s(t, n, o);
				return "string" != typeof u || a || i[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
			}), l
		}
		var i = {},
			a = e === $n;
		return r(t.dataTypes[0]) || !i["*"] && r("*")
	}

	function D(e, n) {
		var o, r, i = ct.ajaxSettings.flatOptions || {};
		for (r in n) n[r] !== t && ((i[r] ? e : o || (o = {}))[r] = n[r]);
		return o && ct.extend(!0, e, o), e
	}

	function Z(e, n, o) {
		for (var r, i, a, s, l = e.contents, u = e.dataTypes;
			"*" === u[0];) u.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
		if (i)
			for (s in l)
				if (l[s] && l[s].test(i)) {
					u.unshift(s);
					break
				}
		if (u[0] in o) a = u[0];
		else {
			for (s in o) {
				if (!u[0] || e.converters[s + " " + u[0]]) {
					a = s;
					break
				}
				r || (r = s)
			}
			a = a || r
		}
		return a ? (a !== u[0] && u.unshift(a), o[a]) : void 0
	}

	function z(e, t, n, o) {
		var r, i, a, s, l, u = {},
			c = e.dataTypes.slice();
		if (c[1])
			for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
		for (i = c.shift(); i;)
			if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = c.shift())
				if ("*" === i) i = l;
				else if ("*" !== l && l !== i) {
			if (a = u[l + " " + i] || u["* " + i], !a)
				for (r in u)
					if (s = r.split(" "), s[1] === i && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
						a === !0 ? a = u[r] : u[r] !== !0 && (i = s[0], c.unshift(s[1]));
						break
					}
			if (a !== !0)
				if (a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch (p) {
					return {
						state: "parsererror",
						error: a ? p : "No conversion from " + l + " to " + i
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function H() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}

	function R() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}

	function P() {
		return setTimeout(function() {
			Qn = t
		}), Qn = ct.now()
	}

	function q(e, t, n) {
		for (var o, r = (io[t] || []).concat(io["*"]), i = 0, a = r.length; a > i; i++)
			if (o = r[i].call(n, t, e)) return o
	}

	function W(e, t, n) {
		var o, r, i = 0,
			a = ro.length,
			s = ct.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (r) return !1;
				for (var t = Qn || P(), n = Math.max(0, u.startTime + u.duration - t), o = n / u.duration || 0, i = 1 - o, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(i);
				return s.notifyWith(e, [u, i, n]), 1 > i && l ? n : (s.resolveWith(e, [u]), !1)
			},
			u = s.promise({
				elem: e,
				props: ct.extend({}, t),
				opts: ct.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Qn || P(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var o = ct.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(o), o
				},
				stop: function(t) {
					var n = 0,
						o = t ? u.tweens.length : 0;
					if (r) return this;
					for (r = !0; o > n; n++) u.tweens[n].run(1);
					return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
				}
			}),
			c = u.props;
		for (F(c, u.opts.specialEasing); a > i; i++)
			if (o = ro[i].call(u, e, c, u.opts)) return o;
		return ct.map(c, q, u), ct.isFunction(u.opts.start) && u.opts.start.call(e, u), ct.fx.timer(ct.extend(l, {
			elem: e,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function F(e, t) {
		var n, o, r, i, a;
		for (n in e)
			if (o = ct.camelCase(n), r = t[o], i = e[n], ct.isArray(i) && (r = i[1], i = e[n] = i[0]), n !== o && (e[o] = i, delete e[n]), a = ct.cssHooks[o], a && "expand" in a) {
				i = a.expand(i), delete e[o];
				for (n in i) n in e || (e[n] = i[n], t[n] = r)
			} else t[o] = r
	}

	function _(e, t, n) {
		var o, r, i, a, s, l, u = this,
			c = {},
			p = e.style,
			d = e.nodeType && x(e),
			f = ct._data(e, "fxshow");
		n.queue || (s = ct._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
			s.unqueued || l()
		}), s.unqueued++, u.always(function() {
			u.always(function() {
				s.unqueued--, ct.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ct.css(e, "display") && "none" === ct.css(e, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ct.support.shrinkWrapBlocks || u.always(function() {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
		}));
		for (o in t)
			if (r = t[o], to.exec(r)) {
				if (delete t[o], i = i || "toggle" === r, r === (d ? "hide" : "show")) continue;
				c[o] = f && f[o] || ct.style(e, o)
			}
		if (!ct.isEmptyObject(c)) {
			f ? "hidden" in f && (d = f.hidden) : f = ct._data(e, "fxshow", {}), i && (f.hidden = !d), d ? ct(e).show() : u.done(function() {
				ct(e).hide()
			}), u.done(function() {
				var t;
				ct._removeData(e, "fxshow");
				for (t in c) ct.style(e, t, c[t])
			});
			for (o in c) a = q(d ? f[o] : 0, o, u), o in f || (f[o] = a.start, d && (a.end = a.start, a.start = "width" === o || "height" === o ? 1 : 0))
		}
	}

	function B(e, t, n, o, r) {
		return new B.prototype.init(e, t, n, o, r)
	}

	function $(e, t) {
		var n, o = {
				height: e
			},
			r = 0;
		for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = kn[r], o["margin" + n] = o["padding" + n] = e;
		return t && (o.opacity = o.width = e), o
	}

	function I(e) {
		return ct.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	var X, U, Y = typeof t,
		V = e.location,
		G = e.document,
		J = G.documentElement,
		K = e.jQuery,
		Q = e.$,
		et = {},
		tt = [],
		nt = "1.10.2",
		ot = tt.concat,
		rt = tt.push,
		it = tt.slice,
		at = tt.indexOf,
		st = et.toString,
		lt = et.hasOwnProperty,
		ut = nt.trim,
		ct = function(e, t) {
			return new ct.fn.init(e, t, U)
		},
		pt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		dt = /\S+/g,
		ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		mt = /^[\],:{}\s]*$/,
		yt = /(?:^|:|,)(?:\s*\[)+/g,
		vt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		Ct = /^-ms-/,
		wt = /-([\da-z])/gi,
		Lt = function(e, t) {
			return t.toUpperCase()
		},
		xt = function(e) {
			(G.addEventListener || "load" === e.type || "complete" === G.readyState) && (kt(), ct.ready())
		},
		kt = function() {
			G.addEventListener ? (G.removeEventListener("DOMContentLoaded", xt, !1), e.removeEventListener("load", xt, !1)) : (G.detachEvent("onreadystatechange", xt), e.detachEvent("onload", xt))
		};
	ct.fn = ct.prototype = {
			jquery: nt,
			constructor: ct,
			init: function(e, n, o) {
				var r, i;
				if (!e) return this;
				if ("string" == typeof e) {
					if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : gt.exec(e), !r || !r[1] && n) return !n || n.jquery ? (n || o).find(e) : this.constructor(n).find(e);
					if (r[1]) {
						if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), ht.test(r[1]) && ct.isPlainObject(n))
							for (r in n) ct.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
						return this
					}
					if (i = G.getElementById(r[2]), i && i.parentNode) {
						if (i.id !== r[2]) return o.find(e);
						this.length = 1, this[0] = i
					}
					return this.context = G, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ct.isFunction(e) ? o.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ct.makeArray(e, this))
			},
			selector: "",
			length: 0,
			toArray: function() {
				return it.call(this)
			},
			get: function(e) {
				return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
			},
			pushStack: function(e) {
				var t = ct.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function(e, t) {
				return ct.each(this, e, t)
			},
			ready: function(e) {
				return ct.ready.promise().done(e), this
			},
			slice: function() {
				return this.pushStack(it.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(e) {
				var t = this.length,
					n = +e + (0 > e ? t : 0);
				return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
			},
			map: function(e) {
				return this.pushStack(ct.map(this, function(t, n) {
					return e.call(t, n, t)
				}))
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: rt,
			sort: [].sort,
			splice: [].splice
		}, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function() {
			var e, n, o, r, i, a, s = arguments[0] || {},
				l = 1,
				u = arguments.length,
				c = !1;
			for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ct.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
				if (null != (i = arguments[l]))
					for (r in i) e = s[r], o = i[r], s !== o && (c && o && (ct.isPlainObject(o) || (n = ct.isArray(o))) ? (n ? (n = !1, a = e && ct.isArray(e) ? e : []) : a = e && ct.isPlainObject(e) ? e : {}, s[r] = ct.extend(c, a, o)) : o !== t && (s[r] = o));
			return s
		}, ct.extend({
			expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
			noConflict: function(t) {
				return e.$ === ct && (e.$ = Q), t && e.jQuery === ct && (e.jQuery = K), ct
			},
			isReady: !1,
			readyWait: 1,
			holdReady: function(e) {
				e ? ct.readyWait++ : ct.ready(!0)
			},
			ready: function(e) {
				if (e === !0 ? !--ct.readyWait : !ct.isReady) {
					if (!G.body) return setTimeout(ct.ready);
					ct.isReady = !0, e !== !0 && --ct.readyWait > 0 || (X.resolveWith(G, [ct]), ct.fn.trigger && ct(G).trigger("ready").off("ready"))
				}
			},
			isFunction: function(e) {
				return "function" === ct.type(e)
			},
			isArray: Array.isArray || function(e) {
				return "array" === ct.type(e)
			},
			isWindow: function(e) {
				return null != e && e == e.window
			},
			isNumeric: function(e) {
				return !isNaN(parseFloat(e)) && isFinite(e)
			},
			type: function(e) {
				return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? et[st.call(e)] || "object" : typeof e
			},
			isPlainObject: function(e) {
				var n;
				if (!e || "object" !== ct.type(e) || e.nodeType || ct.isWindow(e)) return !1;
				try {
					if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype, "isPrototypeOf")) return !1
				} catch (o) {
					return !1
				}
				if (ct.support.ownLast)
					for (n in e) return lt.call(e, n);
				for (n in e);
				return n === t || lt.call(e, n)
			},
			isEmptyObject: function(e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			error: function(e) {
				throw new Error(e)
			},
			parseHTML: function(e, t, n) {
				if (!e || "string" != typeof e) return null;
				"boolean" == typeof t && (n = t, t = !1), t = t || G;
				var o = ht.exec(e),
					r = !n && [];
				return o ? [t.createElement(o[1])] : (o = ct.buildFragment([e], t, r), r && ct(r).remove(), ct.merge([], o.childNodes))
			},
			parseJSON: function(t) {
				return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ct.trim(t), t && mt.test(t.replace(vt, "@").replace(bt, "]").replace(yt, ""))) ? new Function("return " + t)() : (ct.error("Invalid JSON: " + t), void 0)
			},
			parseXML: function(n) {
				var o, r;
				if (!n || "string" != typeof n) return null;
				try {
					e.DOMParser ? (r = new DOMParser, o = r.parseFromString(n, "text/xml")) : (o = new ActiveXObject("Microsoft.XMLDOM"), o.async = "false", o.loadXML(n))
				} catch (i) {
					o = t
				}
				return o && o.documentElement && !o.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n), o
			},
			noop: function() {},
			globalEval: function(t) {
				t && ct.trim(t) && (e.execScript || function(t) {
					e.eval.call(e, t)
				})(t)
			},
			camelCase: function(e) {
				return e.replace(Ct, "ms-").replace(wt, Lt)
			},
			nodeName: function(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function(e, t, o) {
				var r, i = 0,
					a = e.length,
					s = n(e);
				if (o) {
					if (s)
						for (; a > i && (r = t.apply(e[i], o), r !== !1); i++);
					else
						for (i in e)
							if (r = t.apply(e[i], o), r === !1) break
				} else if (s)
					for (; a > i && (r = t.call(e[i], i, e[i]), r !== !1); i++);
				else
					for (i in e)
						if (r = t.call(e[i], i, e[i]), r === !1) break;
				return e
			},
			trim: ut && !ut.call("ï»¿Â ") ? function(e) {
				return null == e ? "" : ut.call(e)
			} : function(e) {
				return null == e ? "" : (e + "").replace(ft, "")
			},
			makeArray: function(e, t) {
				var o = t || [];
				return null != e && (n(Object(e)) ? ct.merge(o, "string" == typeof e ? [e] : e) : rt.call(o, e)), o
			},
			inArray: function(e, t, n) {
				var o;
				if (t) {
					if (at) return at.call(t, e, n);
					for (o = t.length, n = n ? 0 > n ? Math.max(0, o + n) : n : 0; o > n; n++)
						if (n in t && t[n] === e) return n
				}
				return -1
			},
			merge: function(e, n) {
				var o = n.length,
					r = e.length,
					i = 0;
				if ("number" == typeof o)
					for (; o > i; i++) e[r++] = n[i];
				else
					for (; n[i] !== t;) e[r++] = n[i++];
				return e.length = r, e
			},
			grep: function(e, t, n) {
				var o, r = [],
					i = 0,
					a = e.length;
				for (n = !!n; a > i; i++) o = !!t(e[i], i), n !== o && r.push(e[i]);
				return r
			},
			map: function(e, t, o) {
				var r, i = 0,
					a = e.length,
					s = n(e),
					l = [];
				if (s)
					for (; a > i; i++) r = t(e[i], i, o), null != r && (l[l.length] = r);
				else
					for (i in e) r = t(e[i], i, o), null != r && (l[l.length] = r);
				return ot.apply([], l)
			},
			guid: 1,
			proxy: function(e, n) {
				var o, r, i;
				return "string" == typeof n && (i = e[n], n = e, e = i), ct.isFunction(e) ? (o = it.call(arguments, 2), r = function() {
					return e.apply(n || this, o.concat(it.call(arguments)))
				}, r.guid = e.guid = e.guid || ct.guid++, r) : t
			},
			access: function(e, n, o, r, i, a, s) {
				var l = 0,
					u = e.length,
					c = null == o;
				if ("object" === ct.type(o)) {
					i = !0;
					for (l in o) ct.access(e, n, l, o[l], !0, a, s)
				} else if (r !== t && (i = !0, ct.isFunction(r) || (s = !0), c && (s ? (n.call(e, r), n = null) : (c = n, n = function(e, t, n) {
						return c.call(ct(e), n)
					})), n))
					for (; u > l; l++) n(e[l], o, s ? r : r.call(e[l], l, n(e[l], o)));
				return i ? e : c ? n.call(e) : u ? n(e[0], o) : a
			},
			now: function() {
				return (new Date).getTime()
			},
			swap: function(e, t, n, o) {
				var r, i, a = {};
				for (i in t) a[i] = e.style[i], e.style[i] = t[i];
				r = n.apply(e, o || []);
				for (i in t) e.style[i] = a[i];
				return r
			}
		}), ct.ready.promise = function(t) {
			if (!X)
				if (X = ct.Deferred(), "complete" === G.readyState) setTimeout(ct.ready);
				else if (G.addEventListener) G.addEventListener("DOMContentLoaded", xt, !1), e.addEventListener("load", xt, !1);
			else {
				G.attachEvent("onreadystatechange", xt), e.attachEvent("onload", xt);
				var n = !1;
				try {
					n = null == e.frameElement && G.documentElement
				} catch (o) {}
				n && n.doScroll && ! function r() {
					if (!ct.isReady) {
						try {
							n.doScroll("left")
						} catch (e) {
							return setTimeout(r, 50)
						}
						kt(), ct.ready()
					}
				}()
			}
			return X.promise(t)
		}, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
			et["[object " + t + "]"] = t.toLowerCase()
		}), U = ct(G),
		function(e, t) {
			function n(e, t, n, o) {
				var r, i, a, s, l, u, c, p, g, h;
				if ((t ? t.ownerDocument || t : W) !== O && j(t), t = t || O, n = n || [], !e || "string" != typeof e) return n;
				if (1 !== (s = t.nodeType) && 9 !== s) return [];
				if (Z && !o) {
					if (r = bt.exec(e))
						if (a = r[1]) {
							if (9 === s) {
								if (i = t.getElementById(a), !i || !i.parentNode) return n;
								if (i.id === a) return n.push(i), n
							} else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && P(t, i) && i.id === a) return n.push(i), n
						} else {
							if (r[2]) return et.apply(n, t.getElementsByTagName(e)), n;
							if ((a = r[3]) && x.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(a)), n
						}
					if (x.qsa && (!z || !z.test(e))) {
						if (p = c = q, g = t, h = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
							for (u = d(e), (c = t.getAttribute("id")) ? p = c.replace(Lt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + f(u[l]);
							g = ft.test(e) && t.parentNode || t, h = u.join(",")
						}
						if (h) try {
							return et.apply(n, g.querySelectorAll(h)), n
						} catch (m) {} finally {
							c || t.removeAttribute("id")
						}
					}
				}
				return w(e.replace(ut, "$1"), t, n, o)
			}

			function o() {
				function e(n, o) {
					return t.push(n += " ") > T.cacheLength && delete e[t.shift()], e[n] = o
				}
				var t = [];
				return e
			}

			function r(e) {
				return e[q] = !0, e
			}

			function i(e) {
				var t = O.createElement("div");
				try {
					return !!e(t)
				} catch (n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function a(e, t) {
				for (var n = e.split("|"), o = e.length; o--;) T.attrHandle[n[o]] = t
			}

			function s(e, t) {
				var n = t && e,
					o = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
				if (o) return o;
				if (n)
					for (; n = n.nextSibling;)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function l(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}

			function u(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}

			function c(e) {
				return r(function(t) {
					return t = +t, r(function(n, o) {
						for (var r, i = e([], n.length, t), a = i.length; a--;) n[r = i[a]] && (n[r] = !(o[r] = n[r]))
					})
				})
			}

			function p() {}

			function d(e, t) {
				var o, r, i, a, s, l, u, c = $[e + " "];
				if (c) return t ? 0 : c.slice(0);
				for (s = e, l = [], u = T.preFilter; s;) {
					(!o || (r = pt.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), o = !1, (r = dt.exec(s)) && (o = r.shift(), i.push({
						value: o,
						type: r[0].replace(ut, " ")
					}), s = s.slice(o.length));
					for (a in T.filter) !(r = yt[a].exec(s)) || u[a] && !(r = u[a](r)) || (o = r.shift(), i.push({
						value: o,
						type: a,
						matches: r
					}), s = s.slice(o.length));
					if (!o) break
				}
				return t ? s.length : s ? n.error(e) : $(e, l).slice(0)
			}

			function f(e) {
				for (var t = 0, n = e.length, o = ""; n > t; t++) o += e[t].value;
				return o
			}

			function g(e, t, n) {
				var o = t.dir,
					r = n && "parentNode" === o,
					i = _++;
				return t.first ? function(t, n, i) {
					for (; t = t[o];)
						if (1 === t.nodeType || r) return e(t, n, i)
				} : function(t, n, a) {
					var s, l, u, c = F + " " + i;
					if (a) {
						for (; t = t[o];)
							if ((1 === t.nodeType || r) && e(t, n, a)) return !0
					} else
						for (; t = t[o];)
							if (1 === t.nodeType || r)
								if (u = t[q] || (t[q] = {}), (l = u[o]) && l[0] === c) {
									if ((s = l[1]) === !0 || s === k) return s === !0
								} else if (l = u[o] = [c], l[1] = e(t, n, a) || k, l[1] === !0) return !0
				}
			}

			function h(e) {
				return e.length > 1 ? function(t, n, o) {
					for (var r = e.length; r--;)
						if (!e[r](t, n, o)) return !1;
					return !0
				} : e[0]
			}

			function m(e, t, n, o, r) {
				for (var i, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(i = e[s]) && (!n || n(i, o, r)) && (a.push(i), u && t.push(s));
				return a
			}

			function y(e, t, n, o, i, a) {
				return o && !o[q] && (o = y(o)), i && !i[q] && (i = y(i, a)), r(function(r, a, s, l) {
					var u, c, p, d = [],
						f = [],
						g = a.length,
						h = r || C(t || "*", s.nodeType ? [s] : s, []),
						y = !e || !r && t ? h : m(h, d, e, s, l),
						v = n ? i || (r ? e : g || o) ? [] : a : y;
					if (n && n(y, v, s, l), o)
						for (u = m(v, f), o(u, [], s, l), c = u.length; c--;)(p = u[c]) && (v[f[c]] = !(y[f[c]] = p));
					if (r) {
						if (i || e) {
							if (i) {
								for (u = [], c = v.length; c--;)(p = v[c]) && u.push(y[c] = p);
								i(null, v = [], u, l)
							}
							for (c = v.length; c--;)(p = v[c]) && (u = i ? nt.call(r, p) : d[c]) > -1 && (r[u] = !(a[u] = p))
						}
					} else v = m(v === a ? v.splice(g, v.length) : v), i ? i(null, a, v, l) : et.apply(a, v)
				})
			}

			function v(e) {
				for (var t, n, o, r = e.length, i = T.relative[e[0].type], a = i || T.relative[" "], s = i ? 1 : 0, l = g(function(e) {
						return e === t
					}, a, !0), u = g(function(e) {
						return nt.call(t, e) > -1
					}, a, !0), c = [function(e, n, o) {
						return !i && (o || n !== S) || ((t = n).nodeType ? l(e, n, o) : u(e, n, o))
					}]; r > s; s++)
					if (n = T.relative[e[s].type]) c = [g(h(c), n)];
					else {
						if (n = T.filter[e[s].type].apply(null, e[s].matches), n[q]) {
							for (o = ++s; r > o && !T.relative[e[o].type]; o++);
							return y(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
								value: " " === e[s - 2].type ? "*" : ""
							})).replace(ut, "$1"), n, o > s && v(e.slice(s, o)), r > o && v(e = e.slice(o)), r > o && f(e))
						}
						c.push(n)
					}
				return h(c)
			}

			function b(e, t) {
				var o = 0,
					i = t.length > 0,
					a = e.length > 0,
					s = function(r, s, l, u, c) {
						var p, d, f, g = [],
							h = 0,
							y = "0",
							v = r && [],
							b = null != c,
							C = S,
							w = r || a && T.find.TAG("*", c && s.parentNode || s),
							L = F += null == C ? 1 : Math.random() || .1;
						for (b && (S = s !== O && s, k = o); null != (p = w[y]); y++) {
							if (a && p) {
								for (d = 0; f = e[d++];)
									if (f(p, s, l)) {
										u.push(p);
										break
									}
								b && (F = L, k = ++o)
							}
							i && ((p = !f && p) && h--, r && v.push(p))
						}
						if (h += y, i && y !== h) {
							for (d = 0; f = t[d++];) f(v, g, s, l);
							if (r) {
								if (h > 0)
									for (; y--;) v[y] || g[y] || (g[y] = K.call(u));
								g = m(g)
							}
							et.apply(u, g), b && !r && g.length > 0 && h + t.length > 1 && n.uniqueSort(u)
						}
						return b && (F = L, S = C), v
					};
				return i ? r(s) : s
			}

			function C(e, t, o) {
				for (var r = 0, i = t.length; i > r; r++) n(e, t[r], o);
				return o
			}

			function w(e, t, n, o) {
				var r, i, a, s, l, u = d(e);
				if (!o && 1 === u.length) {
					if (i = u[0] = u[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && x.getById && 9 === t.nodeType && Z && T.relative[i[1].type]) {
						if (t = (T.find.ID(a.matches[0].replace(xt, kt), t) || [])[0], !t) return n;
						e = e.slice(i.shift().value.length)
					}
					for (r = yt.needsContext.test(e) ? 0 : i.length; r-- && (a = i[r], !T.relative[s = a.type]);)
						if ((l = T.find[s]) && (o = l(a.matches[0].replace(xt, kt), ft.test(i[0].type) && t.parentNode || t))) {
							if (i.splice(r, 1), e = o.length && f(i), !e) return et.apply(n, o), n;
							break
						}
				}
				return N(e, u)(o, t, !Z, n, ft.test(e)), n
			}
			var L, x, k, T, A, E, N, S, M, j, O, D, Z, z, H, R, P, q = "sizzle" + -new Date,
				W = e.document,
				F = 0,
				_ = 0,
				B = o(),
				$ = o(),
				I = o(),
				X = !1,
				U = function(e, t) {
					return e === t ? (X = !0, 0) : 0
				},
				Y = typeof t,
				V = 1 << 31,
				G = {}.hasOwnProperty,
				J = [],
				K = J.pop,
				Q = J.push,
				et = J.push,
				tt = J.slice,
				nt = J.indexOf || function(e) {
					for (var t = 0, n = this.length; n > t; t++)
						if (this[t] === e) return t;
					return -1
				},
				ot = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				rt = "[\\x20\\t\\r\\n\\f]",
				it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				at = it.replace("w", "w#"),
				st = "\\[" + rt + "*(" + it + ")" + rt + "*(?:([*^$|!~]?=)" + rt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + rt + "*\\]",
				lt = ":(" + it + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)",
				ut = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
				pt = new RegExp("^" + rt + "*," + rt + "*"),
				dt = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
				ft = new RegExp(rt + "*[+~]"),
				gt = new RegExp("=" + rt + "*([^\\]'\"]*)" + rt + "*\\]", "g"),
				ht = new RegExp(lt),
				mt = new RegExp("^" + at + "$"),
				yt = {
					ID: new RegExp("^#(" + it + ")"),
					CLASS: new RegExp("^\\.(" + it + ")"),
					TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + st),
					PSEUDO: new RegExp("^" + lt),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + ot + ")$", "i"),
					needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
				},
				vt = /^[^{]+\{\s*\[native \w/,
				bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				Ct = /^(?:input|select|textarea|button)$/i,
				wt = /^h\d$/i,
				Lt = /'|\\/g,
				xt = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
				kt = function(e, t, n) {
					var o = "0x" + t - 65536;
					return o !== o || n ? t : 0 > o ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
				};
			try {
				et.apply(J = tt.call(W.childNodes), W.childNodes), J[W.childNodes.length].nodeType
			} catch (Tt) {
				et = {
					apply: J.length ? function(e, t) {
						Q.apply(e, tt.call(t))
					} : function(e, t) {
						for (var n = e.length, o = 0; e[n++] = t[o++];);
						e.length = n - 1
					}
				}
			}
			E = n.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			}, x = n.support = {}, j = n.setDocument = function(e) {
				var t = e ? e.ownerDocument || e : W,
					n = t.defaultView;
				return t !== O && 9 === t.nodeType && t.documentElement ? (O = t, D = t.documentElement, Z = !E(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
					j()
				}), x.attributes = i(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), x.getElementsByTagName = i(function(e) {
					return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
				}), x.getElementsByClassName = i(function(e) {
					return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
				}), x.getById = i(function(e) {
					return D.appendChild(e).id = q, !t.getElementsByName || !t.getElementsByName(q).length
				}), x.getById ? (T.find.ID = function(e, t) {
					if (typeof t.getElementById !== Y && Z) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, T.filter.ID = function(e) {
					var t = e.replace(xt, kt);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete T.find.ID, T.filter.ID = function(e) {
					var t = e.replace(xt, kt);
					return function(e) {
						var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), T.find.TAG = x.getElementsByTagName ? function(e, t) {
					return typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(e) : void 0
				} : function(e, t) {
					var n, o = [],
						r = 0,
						i = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; n = i[r++];) 1 === n.nodeType && o.push(n);
						return o
					}
					return i
				}, T.find.CLASS = x.getElementsByClassName && function(e, t) {
					return typeof t.getElementsByClassName !== Y && Z ? t.getElementsByClassName(e) : void 0
				}, H = [], z = [], (x.qsa = vt.test(t.querySelectorAll)) && (i(function(e) {
					e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || z.push("\\[" + rt + "*(?:value|" + ot + ")"), e.querySelectorAll(":checked").length || z.push(":checked")
				}), i(function(e) {
					var n = t.createElement("input");
					n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && z.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), z.push(",.*:")
				})), (x.matchesSelector = vt.test(R = D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function(e) {
					x.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), H.push("!=", lt)
				}), z = z.length && new RegExp(z.join("|")), H = H.length && new RegExp(H.join("|")), P = vt.test(D.contains) || D.compareDocumentPosition ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						o = t && t.parentNode;
					return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
				} : function(e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, U = D.compareDocumentPosition ? function(e, n) {
					if (e === n) return X = !0, 0;
					var o = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
					return o ? 1 & o || !x.sortDetached && n.compareDocumentPosition(e) === o ? e === t || P(W, e) ? -1 : n === t || P(W, n) ? 1 : M ? nt.call(M, e) - nt.call(M, n) : 0 : 4 & o ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
				} : function(e, n) {
					var o, r = 0,
						i = e.parentNode,
						a = n.parentNode,
						l = [e],
						u = [n];
					if (e === n) return X = !0, 0;
					if (!i || !a) return e === t ? -1 : n === t ? 1 : i ? -1 : a ? 1 : M ? nt.call(M, e) - nt.call(M, n) : 0;
					if (i === a) return s(e, n);
					for (o = e; o = o.parentNode;) l.unshift(o);
					for (o = n; o = o.parentNode;) u.unshift(o);
					for (; l[r] === u[r];) r++;
					return r ? s(l[r], u[r]) : l[r] === W ? -1 : u[r] === W ? 1 : 0
				}, t) : O
			}, n.matches = function(e, t) {
				return n(e, null, null, t)
			}, n.matchesSelector = function(e, t) {
				if ((e.ownerDocument || e) !== O && j(e), t = t.replace(gt, "='$1']"), !(!x.matchesSelector || !Z || H && H.test(t) || z && z.test(t))) try {
					var o = R.call(e, t);
					if (o || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return o
				} catch (r) {}
				return n(t, O, null, [e]).length > 0
			}, n.contains = function(e, t) {
				return (e.ownerDocument || e) !== O && j(e), P(e, t)
			}, n.attr = function(e, n) {
				(e.ownerDocument || e) !== O && j(e);
				var o = T.attrHandle[n.toLowerCase()],
					r = o && G.call(T.attrHandle, n.toLowerCase()) ? o(e, n, !Z) : t;
				return r === t ? x.attributes || !Z ? e.getAttribute(n) : (r = e.getAttributeNode(n)) && r.specified ? r.value : null : r
			}, n.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, n.uniqueSort = function(e) {
				var t, n = [],
					o = 0,
					r = 0;
				if (X = !x.detectDuplicates, M = !x.sortStable && e.slice(0), e.sort(U), X) {
					for (; t = e[r++];) t === e[r] && (o = n.push(r));
					for (; o--;) e.splice(n[o], 1)
				}
				return e
			}, A = n.getText = function(e) {
				var t, n = "",
					o = 0,
					r = e.nodeType;
				if (r) {
					if (1 === r || 9 === r || 11 === r) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += A(e)
					} else if (3 === r || 4 === r) return e.nodeValue
				} else
					for (; t = e[o]; o++) n += A(t);
				return n
			}, T = n.selectors = {
				cacheLength: 50,
				createPseudo: r,
				match: yt,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(xt, kt), e[3] = (e[4] || e[5] || "").replace(xt, kt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
					},
					PSEUDO: function(e) {
						var n, o = !e[5] && e[2];
						return yt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : o && ht.test(o) && (n = d(o, !0)) && (n = o.indexOf(")", o.length - n) - o.length) && (e[0] = e[0].slice(0, n), e[2] = o.slice(0, n)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(xt, kt).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = B[e + " "];
						return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && B(e, function(e) {
							return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, t, o) {
						return function(r) {
							var i = n.attr(r, e);
							return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === o : "!=" === t ? i !== o : "^=" === t ? o && 0 === i.indexOf(o) : "*=" === t ? o && i.indexOf(o) > -1 : "$=" === t ? o && i.slice(-o.length) === o : "~=" === t ? (" " + i + " ").indexOf(o) > -1 : "|=" === t ? i === o || i.slice(0, o.length + 1) === o + "-" : !1) : !0
						}
					},
					CHILD: function(e, t, n, o, r) {
						var i = "nth" !== e.slice(0, 3),
							a = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === o && 0 === r ? function(e) {
							return !!e.parentNode
						} : function(t, n, l) {
							var u, c, p, d, f, g, h = i !== a ? "nextSibling" : "previousSibling",
								m = t.parentNode,
								y = s && t.nodeName.toLowerCase(),
								v = !l && !s;
							if (m) {
								if (i) {
									for (; h;) {
										for (p = t; p = p[h];)
											if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
										g = h = "only" === e && !g && "nextSibling"
									}
									return !0
								}
								if (g = [a ? m.firstChild : m.lastChild], a && v) {
									for (c = m[q] || (m[q] = {}), u = c[e] || [], f = u[0] === F && u[1], d = u[0] === F && u[2], p = f && m.childNodes[f]; p = ++f && p && p[h] || (d = f = 0) || g.pop();)
										if (1 === p.nodeType && ++d && p === t) {
											c[e] = [F, f, d];
											break
										}
								} else if (v && (u = (t[q] || (t[q] = {}))[e]) && u[0] === F) d = u[1];
								else
									for (;
										(p = ++f && p && p[h] || (d = f = 0) || g.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++d || (v && ((p[q] || (p[q] = {}))[e] = [F, d]), p !== t)););
								return d -= r, d === o || d % o === 0 && d / o >= 0
							}
						}
					},
					PSEUDO: function(e, t) {
						var o, i = T.pseudos[e] || T.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
						return i[q] ? i(t) : i.length > 1 ? (o = [e, e, "", t], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, n) {
							for (var o, r = i(e, t), a = r.length; a--;) o = nt.call(e, r[a]), e[o] = !(n[o] = r[a])
						}) : function(e) {
							return i(e, 0, o)
						}) : i
					}
				},
				pseudos: {
					not: r(function(e) {
						var t = [],
							n = [],
							o = N(e.replace(ut, "$1"));
						return o[q] ? r(function(e, t, n, r) {
							for (var i, a = o(e, null, r, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
						}) : function(e, r, i) {
							return t[0] = e, o(t, null, i, n), !n.pop()
						}
					}),
					has: r(function(e) {
						return function(t) {
							return n(e, t).length > 0
						}
					}),
					contains: r(function(e) {
						return function(t) {
							return (t.textContent || t.innerText || A(t)).indexOf(e) > -1
						}
					}),
					lang: r(function(e) {
						return mt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(xt, kt).toLowerCase(),
							function(t) {
								var n;
								do
									if (n = Z ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
								while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === D
					},
					focus: function(e) {
						return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === !1
					},
					disabled: function(e) {
						return e.disabled === !0
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
						return !0
					},
					parent: function(e) {
						return !T.pseudos.empty(e)
					},
					header: function(e) {
						return wt.test(e.nodeName)
					},
					input: function(e) {
						return Ct.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
					},
					first: c(function() {
						return [0]
					}),
					last: c(function(e, t) {
						return [t - 1]
					}),
					eq: c(function(e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: c(function(e, t) {
						for (var n = 0; t > n; n += 2) e.push(n);
						return e
					}),
					odd: c(function(e, t) {
						for (var n = 1; t > n; n += 2) e.push(n);
						return e
					}),
					lt: c(function(e, t, n) {
						for (var o = 0 > n ? n + t : n; --o >= 0;) e.push(o);
						return e
					}),
					gt: c(function(e, t, n) {
						for (var o = 0 > n ? n + t : n; ++o < t;) e.push(o);
						return e
					})
				}
			}, T.pseudos.nth = T.pseudos.eq;
			for (L in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) T.pseudos[L] = l(L);
			for (L in {
					submit: !0,
					reset: !0
				}) T.pseudos[L] = u(L);
			p.prototype = T.filters = T.pseudos, T.setFilters = new p, N = n.compile = function(e, t) {
				var n, o = [],
					r = [],
					i = I[e + " "];
				if (!i) {
					for (t || (t = d(e)), n = t.length; n--;) i = v(t[n]), i[q] ? o.push(i) : r.push(i);
					i = I(e, b(r, o))
				}
				return i
			}, x.sortStable = q.split("").sort(U).join("") === q, x.detectDuplicates = X, j(), x.sortDetached = i(function(e) {
				return 1 & e.compareDocumentPosition(O.createElement("div"))
			}), i(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || a("type|href|height|width", function(e, t, n) {
				return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), x.attributes && i(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || a("value", function(e, t, n) {
				return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
			}), i(function(e) {
				return null == e.getAttribute("disabled")
			}) || a(ot, function(e, t, n) {
				var o;
				return n ? void 0 : (o = e.getAttributeNode(t)) && o.specified ? o.value : e[t] === !0 ? t.toLowerCase() : null
			}), ct.find = n, ct.expr = n.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = n.uniqueSort, ct.text = n.getText, ct.isXMLDoc = n.isXML, ct.contains = n.contains
		}(e);
	var Tt = {};
	ct.Callbacks = function(e) {
		e = "string" == typeof e ? Tt[e] || o(e) : ct.extend({}, e);
		var n, r, i, a, s, l, u = [],
			c = !e.once && [],
			p = function(t) {
				for (r = e.memory && t, i = !0, s = l || 0, l = 0, a = u.length, n = !0; u && a > s; s++)
					if (u[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
						r = !1;
						break
					}
				n = !1, u && (c ? c.length && p(c.shift()) : r ? u = [] : d.disable())
			},
			d = {
				add: function() {
					if (u) {
						var t = u.length;
						! function o(t) {
							ct.each(t, function(t, n) {
								var r = ct.type(n);
								"function" === r ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
							})
						}(arguments), n ? a = u.length : r && (l = t, p(r))
					}
					return this
				},
				remove: function() {
					return u && ct.each(arguments, function(e, t) {
						for (var o;
							(o = ct.inArray(t, u, o)) > -1;) u.splice(o, 1), n && (a >= o && a--, s >= o && s--)
					}), this
				},
				has: function(e) {
					return e ? ct.inArray(e, u) > -1 : !(!u || !u.length)
				},
				empty: function() {
					return u = [], a = 0, this
				},
				disable: function() {
					return u = c = r = t, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return c = t, r || d.disable(), this
				},
				locked: function() {
					return !c
				},
				fireWith: function(e, t) {
					return !u || i && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : p(t)), this
				},
				fire: function() {
					return d.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return d
	}, ct.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", ct.Callbacks("once memory"), "resolved"],
					["reject", "fail", ct.Callbacks("once memory"), "rejected"],
					["notify", "progress", ct.Callbacks("memory")]
				],
				n = "pending",
				o = {
					state: function() {
						return n
					},
					always: function() {
						return r.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return ct.Deferred(function(n) {
							ct.each(t, function(t, i) {
								var a = i[0],
									s = ct.isFunction(e[t]) && e[t];
								r[i[1]](function() {
									var e = s && s.apply(this, arguments);
									e && ct.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === o ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? ct.extend(e, o) : o
					}
				},
				r = {};
			return o.pipe = o.then, ct.each(t, function(e, i) {
				var a = i[2],
					s = i[3];
				o[i[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), r[i[0]] = function() {
					return r[i[0] + "With"](this === r ? o : this, arguments), this
				}, r[i[0] + "With"] = a.fireWith
			}), o.promise(r), e && e.call(r, r), r
		},
		when: function(e) {
			var t, n, o, r = 0,
				i = it.call(arguments),
				a = i.length,
				s = 1 !== a || e && ct.isFunction(e.promise) ? a : 0,
				l = 1 === s ? e : ct.Deferred(),
				u = function(e, n, o) {
					return function(r) {
						n[e] = this, o[e] = arguments.length > 1 ? it.call(arguments) : r, o === t ? l.notifyWith(n, o) : --s || l.resolveWith(n, o)
					}
				};
			if (a > 1)
				for (t = new Array(a), n = new Array(a), o = new Array(a); a > r; r++) i[r] && ct.isFunction(i[r].promise) ? i[r].promise().done(u(r, o, i)).fail(l.reject).progress(u(r, n, t)) : --s;
			return s || l.resolveWith(o, i), l.promise()
		}
	}), ct.support = function(t) {
		var n, o, r, i, a, s, l, u, c, p = G.createElement("div");
		if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], o = p.getElementsByTagName("a")[0], !o || !o.style || !n.length) return t;
		i = G.createElement("select"), s = i.appendChild(G.createElement("option")), r = p.getElementsByTagName("input")[0], o.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== p.className, t.leadingWhitespace = 3 === p.firstChild.nodeType, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !!p.getElementsByTagName("link").length, t.style = /top/.test(o.getAttribute("style")), t.hrefNormalized = "/a" === o.getAttribute("href"), t.opacity = /^0.5/.test(o.style.opacity), t.cssFloat = !!o.style.cssFloat, t.checkOn = !!r.value, t.optSelected = s.selected, t.enctype = !!G.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !s.disabled;
		try {
			delete p.test
		} catch (d) {
			t.deleteExpando = !1
		}
		r = G.createElement("input"), r.setAttribute("value", ""), t.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), t.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), a = G.createDocumentFragment(), a.appendChild(r), t.appendChecked = r.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
			t.noCloneEvent = !1
		}), p.cloneNode(!0).click());
		for (c in {
				submit: !0,
				change: !0,
				focusin: !0
			}) p.setAttribute(l = "on" + c, "t"), t[c + "Bubbles"] = l in e || p.attributes[l].expando === !1;
		p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip;
		for (c in ct(t)) break;
		return t.ownLast = "0" !== c, ct(function() {
			var n, o, r, i = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				a = G.getElementsByTagName("body")[0];
			a && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = p.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === r[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(a, null != a.style.zoom ? {
				zoom: 1
			} : {}, function() {
				t.boxSizing = 4 === p.offsetWidth
			}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
				width: "4px"
			}).width, o = p.appendChild(G.createElement("div")), o.style.cssText = p.style.cssText = i, o.style.marginRight = o.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof p.style.zoom !== Y && (p.innerHTML = "", p.style.cssText = i + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = r = o = null)
		}), n = i = a = s = o = r = null, t
	}({});
	var At = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		Et = /([A-Z])/g;
	ct.extend({
		cache: {},
		noData: {
			applet: !0,
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return e = e.nodeType ? ct.cache[e[ct.expando]] : e[ct.expando], !!e && !s(e)
		},
		data: function(e, t, n) {
			return r(e, t, n)
		},
		removeData: function(e, t) {
			return i(e, t)
		},
		_data: function(e, t, n) {
			return r(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return i(e, t, !0)
		},
		acceptData: function(e) {
			if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
			var t = e.nodeName && ct.noData[e.nodeName.toLowerCase()];
			return !t || t !== !0 && e.getAttribute("classid") === t
		}
	}), ct.fn.extend({
		data: function(e, n) {
			var o, r, i = null,
				s = 0,
				l = this[0];
			if (e === t) {
				if (this.length && (i = ct.data(l), 1 === l.nodeType && !ct._data(l, "parsedAttrs"))) {
					for (o = l.attributes; s < o.length; s++) r = o[s].name, 0 === r.indexOf("data-") && (r = ct.camelCase(r.slice(5)), a(l, r, i[r]));
					ct._data(l, "parsedAttrs", !0)
				}
				return i
			}
			return "object" == typeof e ? this.each(function() {
				ct.data(this, e)
			}) : arguments.length > 1 ? this.each(function() {
				ct.data(this, e, n)
			}) : l ? a(l, e, ct.data(l, e)) : null
		},
		removeData: function(e) {
			return this.each(function() {
				ct.removeData(this, e)
			})
		}
	}), ct.extend({
		queue: function(e, t, n) {
			var o;
			return e ? (t = (t || "fx") + "queue", o = ct._data(e, t), n && (!o || ct.isArray(n) ? o = ct._data(e, t, ct.makeArray(n)) : o.push(n)), o || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = ct.queue(e, t),
				o = n.length,
				r = n.shift(),
				i = ct._queueHooks(e, t),
				a = function() {
					ct.dequeue(e, t)
				};
			"inprogress" === r && (r = n.shift(), o--), r && ("fx" === t && n.unshift("inprogress"), delete i.stop, r.call(e, a, i)), !o && i && i.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return ct._data(e, n) || ct._data(e, n, {
				empty: ct.Callbacks("once memory").add(function() {
					ct._removeData(e, t + "queue"), ct._removeData(e, n)
				})
			})
		}
	}), ct.fn.extend({
		queue: function(e, n) {
			var o = 2;
			return "string" != typeof e && (n = e, e = "fx", o--), arguments.length < o ? ct.queue(this[0], e) : n === t ? this : this.each(function() {
				var t = ct.queue(this, e, n);
				ct._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ct.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				ct.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = ct.fx ? ct.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var o = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(o)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			var o, r = 1,
				i = ct.Deferred(),
				a = this,
				s = this.length,
				l = function() {
					--r || i.resolveWith(a, [a])
				};
			for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) o = ct._data(a[s], e + "queueHooks"), o && o.empty && (r++, o.empty.add(l));
			return l(), i.promise(n)
		}
	});
	var Nt, St, Mt = /[\t\r\n\f]/g,
		jt = /\r/g,
		Ot = /^(?:input|select|textarea|button|object)$/i,
		Dt = /^(?:a|area)$/i,
		Zt = /^(?:checked|selected)$/i,
		zt = ct.support.getSetAttribute,
		Ht = ct.support.input;
	ct.fn.extend({
		attr: function(e, t) {
			return ct.access(this, ct.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				ct.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return ct.access(this, ct.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = ct.propFix[e] || e, this.each(function() {
				try {
					this[e] = t, delete this[e]
				} catch (n) {}
			})
		},
		addClass: function(e) {
			var t, n, o, r, i, a = 0,
				s = this.length,
				l = "string" == typeof e && e;
			if (ct.isFunction(e)) return this.each(function(t) {
				ct(this).addClass(e.call(this, t, this.className))
			});
			if (l)
				for (t = (e || "").match(dt) || []; s > a; a++)
					if (n = this[a], o = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Mt, " ") : " ")) {
						for (i = 0; r = t[i++];) o.indexOf(" " + r + " ") < 0 && (o += r + " ");
						n.className = ct.trim(o)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, o, r, i, a = 0,
				s = this.length,
				l = 0 === arguments.length || "string" == typeof e && e;
			if (ct.isFunction(e)) return this.each(function(t) {
				ct(this).removeClass(e.call(this, t, this.className))
			});
			if (l)
				for (t = (e || "").match(dt) || []; s > a; a++)
					if (n = this[a], o = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Mt, " ") : "")) {
						for (i = 0; r = t[i++];)
							for (; o.indexOf(" " + r + " ") >= 0;) o = o.replace(" " + r + " ", " ");
						n.className = e ? ct.trim(o) : ""
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ct.isFunction(e) ? this.each(function(n) {
				ct(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if ("string" === n)
					for (var t, o = 0, r = ct(this), i = e.match(dt) || []; t = i[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
				else(n === Y || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ct._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, o = this.length; o > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Mt, " ").indexOf(t) >= 0) return !0;
			return !1
		},
		val: function(e) {
			var n, o, r, i = this[0]; {
				if (arguments.length) return r = ct.isFunction(e), this.each(function(n) {
					var i;
					1 === this.nodeType && (i = r ? e.call(this, n, ct(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ct.isArray(i) && (i = ct.map(i, function(e) {
						return null == e ? "" : e + ""
					})), o = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], o && "set" in o && o.set(this, i, "value") !== t || (this.value = i))
				});
				if (i) return o = ct.valHooks[i.type] || ct.valHooks[i.nodeName.toLowerCase()], o && "get" in o && (n = o.get(i, "value")) !== t ? n : (n = i.value, "string" == typeof n ? n.replace(jt, "") : null == n ? "" : n)
			}
		}
	}), ct.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = ct.find.attr(e, "value");
					return null != t ? t : e.text
				}
			},
			select: {
				get: function(e) {
					for (var t, n, o = e.options, r = e.selectedIndex, i = "select-one" === e.type || 0 > r, a = i ? null : [], s = i ? r + 1 : o.length, l = 0 > r ? s : i ? r : 0; s > l; l++)
						if (n = o[l], !(!n.selected && l !== r || (ct.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
							if (t = ct(n).val(), i) return t;
							a.push(t)
						}
					return a
				},
				set: function(e, t) {
					for (var n, o, r = e.options, i = ct.makeArray(t), a = r.length; a--;) o = r[a], (o.selected = ct.inArray(ct(o).val(), i) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), i
				}
			}
		},
		attr: function(e, n, o) {
			var r, i, a = e.nodeType;
			if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === Y ? ct.prop(e, n, o) : (1 === a && ct.isXMLDoc(e) || (n = n.toLowerCase(), r = ct.attrHooks[n] || (ct.expr.match.bool.test(n) ? St : Nt)), o === t ? r && "get" in r && null !== (i = r.get(e, n)) ? i : (i = ct.find.attr(e, n), null == i ? t : i) : null !== o ? r && "set" in r && (i = r.set(e, o, n)) !== t ? i : (e.setAttribute(n, o + ""), o) : (ct.removeAttr(e, n), void 0))
		},
		removeAttr: function(e, t) {
			var n, o, r = 0,
				i = t && t.match(dt);
			if (i && 1 === e.nodeType)
				for (; n = i[r++];) o = ct.propFix[n] || n, ct.expr.match.bool.test(n) ? Ht && zt || !Zt.test(n) ? e[o] = !1 : e[ct.camelCase("default-" + n)] = e[o] = !1 : ct.attr(e, n, ""), e.removeAttribute(zt ? n : o)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!ct.support.radioValue && "radio" === t && ct.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, n, o) {
			var r, i, a, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ct.isXMLDoc(e), a && (n = ct.propFix[n] || n, i = ct.propHooks[n]), o !== t ? i && "set" in i && (r = i.set(e, o, n)) !== t ? r : e[n] = o : i && "get" in i && null !== (r = i.get(e, n)) ? r : e[n]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = ct.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : Ot.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), St = {
		set: function(e, t, n) {
			return t === !1 ? ct.removeAttr(e, n) : Ht && zt || !Zt.test(n) ? e.setAttribute(!zt && ct.propFix[n] || n, n) : e[ct.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, ct.each(ct.expr.match.bool.source.match(/\w+/g), function(e, n) {
		var o = ct.expr.attrHandle[n] || ct.find.attr;
		ct.expr.attrHandle[n] = Ht && zt || !Zt.test(n) ? function(e, n, r) {
			var i = ct.expr.attrHandle[n],
				a = r ? t : (ct.expr.attrHandle[n] = t) != o(e, n, r) ? n.toLowerCase() : null;
			return ct.expr.attrHandle[n] = i, a
		} : function(e, n, o) {
			return o ? t : e[ct.camelCase("default-" + n)] ? n.toLowerCase() : null
		}
	}), Ht && zt || (ct.attrHooks.value = {
		set: function(e, t, n) {
			return ct.nodeName(e, "input") ? (e.defaultValue = t, void 0) : Nt && Nt.set(e, t, n)
		}
	}), zt || (Nt = {
		set: function(e, n, o) {
			var r = e.getAttributeNode(o);
			return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(o)), r.value = n += "", "value" === o || n === e.getAttribute(o) ? n : t
		}
	}, ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function(e, n, o) {
		var r;
		return o ? t : (r = e.getAttributeNode(n)) && "" !== r.value ? r.value : null
	}, ct.valHooks.button = {
		get: function(e, n) {
			var o = e.getAttributeNode(n);
			return o && o.specified ? o.value : t
		},
		set: Nt.set
	}, ct.attrHooks.contenteditable = {
		set: function(e, t, n) {
			Nt.set(e, "" === t ? !1 : t, n)
		}
	}, ct.each(["width", "height"], function(e, t) {
		ct.attrHooks[t] = {
			set: function(e, n) {
				return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
			}
		}
	})), ct.support.hrefNormalized || ct.each(["href", "src"], function(e, t) {
		ct.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), ct.support.style || (ct.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || t
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	}), ct.support.optSelected || (ct.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		ct.propFix[this.toLowerCase()] = this
	}), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.each(["radio", "checkbox"], function() {
		ct.valHooks[this] = {
			set: function(e, t) {
				return ct.isArray(t) ? e.checked = ct.inArray(ct(e).val(), t) >= 0 : void 0
			}
		}, ct.support.checkOn || (ct.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Rt = /^(?:input|select|textarea)$/i,
		Pt = /^key/,
		qt = /^(?:mouse|contextmenu)|click/,
		Wt = /^(?:focusinfocus|focusoutblur)$/,
		Ft = /^([^.]*)(?:\.(.+)|)$/;
	ct.event = {
		global: {},
		add: function(e, n, o, r, i) {
			var a, s, l, u, c, p, d, f, g, h, m, y = ct._data(e);
			if (y) {
				for (o.handler && (u = o, o = u.handler, i = u.selector), o.guid || (o.guid = ct.guid++), (s = y.events) || (s = y.events = {}), (p = y.handle) || (p = y.handle = function(e) {
						return typeof ct === Y || e && ct.event.triggered === e.type ? t : ct.event.dispatch.apply(p.elem, arguments)
					}, p.elem = e), n = (n || "").match(dt) || [""], l = n.length; l--;) a = Ft.exec(n[l]) || [], g = m = a[1], h = (a[2] || "").split(".").sort(), g && (c = ct.event.special[g] || {}, g = (i ? c.delegateType : c.bindType) || g, c = ct.event.special[g] || {}, d = ct.extend({
					type: g,
					origType: m,
					data: r,
					handler: o,
					guid: o.guid,
					selector: i,
					needsContext: i && ct.expr.match.needsContext.test(i),
					namespace: h.join(".")
				}, u), (f = s[g]) || (f = s[g] = [], f.delegateCount = 0, c.setup && c.setup.call(e, r, h, p) !== !1 || (e.addEventListener ? e.addEventListener(g, p, !1) : e.attachEvent && e.attachEvent("on" + g, p))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = o.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), ct.event.global[g] = !0);
				e = null
			}
		},
		remove: function(e, t, n, o, r) {
			var i, a, s, l, u, c, p, d, f, g, h, m = ct.hasData(e) && ct._data(e);
			if (m && (c = m.events)) {
				for (t = (t || "").match(dt) || [""], u = t.length; u--;)
					if (s = Ft.exec(t[u]) || [], f = h = s[1], g = (s[2] || "").split(".").sort(), f) {
						for (p = ct.event.special[f] || {}, f = (o ? p.delegateType : p.bindType) || f, d = c[f] || [], s = s[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = i = d.length; i--;) a = d[i], !r && h !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || o && o !== a.selector && ("**" !== o || !a.selector) || (d.splice(i, 1), a.selector && d.delegateCount--, p.remove && p.remove.call(e, a));
						l && !d.length && (p.teardown && p.teardown.call(e, g, m.handle) !== !1 || ct.removeEvent(e, f, m.handle), delete c[f])
					} else
						for (f in c) ct.event.remove(e, f + t[u], n, o, !0);
				ct.isEmptyObject(c) && (delete m.handle, ct._removeData(e, "events"))
			}
		},
		trigger: function(n, o, r, i) {
			var a, s, l, u, c, p, d, f = [r || G],
				g = lt.call(n, "type") ? n.type : n,
				h = lt.call(n, "namespace") ? n.namespace.split(".") : [];
			if (l = p = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !Wt.test(g + ct.event.triggered) && (g.indexOf(".") >= 0 && (h = g.split("."), g = h.shift(), h.sort()), s = g.indexOf(":") < 0 && "on" + g, n = n[ct.expando] ? n : new ct.Event(g, "object" == typeof n && n), n.isTrigger = i ? 2 : 3, n.namespace = h.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = r), o = null == o ? [n] : ct.makeArray(o, [n]), c = ct.event.special[g] || {}, i || !c.trigger || c.trigger.apply(r, o) !== !1)) {
				if (!i && !c.noBubble && !ct.isWindow(r)) {
					for (u = c.delegateType || g, Wt.test(u + g) || (l = l.parentNode); l; l = l.parentNode) f.push(l), p = l;
					p === (r.ownerDocument || G) && f.push(p.defaultView || p.parentWindow || e)
				}
				for (d = 0;
					(l = f[d++]) && !n.isPropagationStopped();) n.type = d > 1 ? u : c.bindType || g, a = (ct._data(l, "events") || {})[n.type] && ct._data(l, "handle"), a && a.apply(l, o), a = s && l[s], a && ct.acceptData(l) && a.apply && a.apply(l, o) === !1 && n.preventDefault();
				if (n.type = g, !i && !n.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), o) === !1) && ct.acceptData(r) && s && r[g] && !ct.isWindow(r)) {
					p = r[s], p && (r[s] = null), ct.event.triggered = g;
					try {
						r[g]()
					} catch (m) {}
					ct.event.triggered = t, p && (r[s] = p)
				}
				return n.result
			}
		},
		dispatch: function(e) {
			e = ct.event.fix(e);
			var n, o, r, i, a, s = [],
				l = it.call(arguments),
				u = (ct._data(this, "events") || {})[e.type] || [],
				c = ct.event.special[e.type] || {};
			if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
				for (s = ct.event.handlers.call(this, e, u), n = 0;
					(i = s[n++]) && !e.isPropagationStopped();)
					for (e.currentTarget = i.elem, a = 0;
						(r = i.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, o = ((ct.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, l), o !== t && (e.result = o) === !1 && (e.preventDefault(), e.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, n) {
			var o, r, i, a, s = [],
				l = n.delegateCount,
				u = e.target;
			if (l && u.nodeType && (!e.button || "click" !== e.type))
				for (; u != this; u = u.parentNode || this)
					if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
						for (i = [], a = 0; l > a; a++) r = n[a], o = r.selector + " ", i[o] === t && (i[o] = r.needsContext ? ct(o, this).index(u) >= 0 : ct.find(o, this, null, [u]).length), i[o] && i.push(r);
						i.length && s.push({
							elem: u,
							handlers: i
						})
					}
			return l < n.length && s.push({
				elem: this,
				handlers: n.slice(l)
			}), s
		},
		fix: function(e) {
			if (e[ct.expando]) return e;
			var t, n, o, r = e.type,
				i = e,
				a = this.fixHooks[r];
			for (a || (this.fixHooks[r] = a = qt.test(r) ? this.mouseHooks : Pt.test(r) ? this.keyHooks : {}), o = a.props ? this.props.concat(a.props) : this.props, e = new ct.Event(i), t = o.length; t--;) n = o[t], e[n] = i[n];
			return e.target || (e.target = i.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, i) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, n) {
				var o, r, i, a = n.button,
					s = n.fromElement;
				return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || G, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== c() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === c() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function(e) {
					return ct.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, o) {
			var r = ct.extend(new ct.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			o ? ct.event.trigger(r, null, t) : ct.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
		}
	}, ct.removeEvent = G.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var o = "on" + t;
		e.detachEvent && (typeof e[o] === Y && (e[o] = null), e.detachEvent(o, n))
	}, ct.Event = function(e, t) {
		return this instanceof ct.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : u) : this.type = e, t && ct.extend(this, t), this.timeStamp = e && e.timeStamp || ct.now(), this[ct.expando] = !0, void 0) : new ct.Event(e, t)
	}, ct.Event.prototype = {
		isDefaultPrevented: u,
		isPropagationStopped: u,
		isImmediatePropagationStopped: u,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = l, this.stopPropagation()
		}
	}, ct.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		ct.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, o = this,
					r = e.relatedTarget,
					i = e.handleObj;
				return (!r || r !== o && !ct.contains(o, r)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), ct.support.submitBubbles || (ct.event.special.submit = {
		setup: function() {
			return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit", function(e) {
				var n = e.target,
					o = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form : t;
				o && !ct._data(o, "submitBubbles") && (ct.event.add(o, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), ct._data(o, "submitBubbles", !0))
			}), void 0)
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ct.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), void 0)
		}
	}), ct.support.changeBubbles || (ct.event.special.change = {
		setup: function() {
			return Rt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), ct.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, e, !0)
			})), !1) : (ct.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Rt.test(t.nodeName) && !ct._data(t, "changeBubbles") && (ct.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || ct.event.simulate("change", this.parentNode, e, !0)
				}), ct._data(t, "changeBubbles", !0))
			}), void 0)
		},
		handle: function(e) {
			var t = e.target;
			return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return ct.event.remove(this, "._change"), !Rt.test(this.nodeName)
		}
	}), ct.support.focusinBubbles || ct.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = 0,
			o = function(e) {
				ct.event.simulate(t, e.target, ct.event.fix(e), !0)
			};
		ct.event.special[t] = {
			setup: function() {
				0 === n++ && G.addEventListener(e, o, !0)
			},
			teardown: function() {
				0 === --n && G.removeEventListener(e, o, !0)
			}
		}
	}), ct.fn.extend({
		on: function(e, n, o, r, i) {
			var a, s;
			if ("object" == typeof e) {
				"string" != typeof n && (o = o || n, n = t);
				for (a in e) this.on(a, n, o, e[a], i);
				return this
			}
			if (null == o && null == r ? (r = n, o = n = t) : null == r && ("string" == typeof n ? (r = o, o = t) : (r = o, o = n, n = t)), r === !1) r = u;
			else if (!r) return this;
			return 1 === i && (s = r, r = function(e) {
				return ct().off(e), s.apply(this, arguments)
			}, r.guid = s.guid || (s.guid = ct.guid++)), this.each(function() {
				ct.event.add(this, e, r, o, n)
			})
		},
		one: function(e, t, n, o) {
			return this.on(e, t, n, o, 1)
		},
		off: function(e, n, o) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ct(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, n, e[i]);
				return this
			}
			return (n === !1 || "function" == typeof n) && (o = n, n = t), o === !1 && (o = u), this.each(function() {
				ct.event.remove(this, e, o, n)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				ct.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			return n ? ct.event.trigger(e, t, n, !0) : void 0
		}
	});
	var _t = /^.[^:#\[\.,]*$/,
		Bt = /^(?:parents|prev(?:Until|All))/,
		$t = ct.expr.match.needsContext,
		It = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	ct.fn.extend({
		find: function(e) {
			var t, n = [],
				o = this,
				r = o.length;
			if ("string" != typeof e) return this.pushStack(ct(e).filter(function() {
				for (t = 0; r > t; t++)
					if (ct.contains(o[t], this)) return !0
			}));
			for (t = 0; r > t; t++) ct.find(e, o[t], n);
			return n = this.pushStack(r > 1 ? ct.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		has: function(e) {
			var t, n = ct(e, this),
				o = n.length;
			return this.filter(function() {
				for (t = 0; o > t; t++)
					if (ct.contains(this, n[t])) return !0
			})
		},
		not: function(e) {
			return this.pushStack(d(this, e || [], !0))
		},
		filter: function(e) {
			return this.pushStack(d(this, e || [], !1))
		},
		is: function(e) {
			return !!d(this, "string" == typeof e && $t.test(e) ? ct(e) : e || [], !1).length
		},
		closest: function(e, t) {
			for (var n, o = 0, r = this.length, i = [], a = $t.test(e) || "string" != typeof e ? ct(e, t || this.context) : 0; r > o; o++)
				for (n = this[o]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ct.find.matchesSelector(n, e))) {
						n = i.push(n);
						break
					}
			return this.pushStack(i.length > 1 ? ct.unique(i) : i)
		},
		index: function(e) {
			return e ? "string" == typeof e ? ct.inArray(this[0], ct(e)) : ct.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			var n = "string" == typeof e ? ct(e, t) : ct.makeArray(e && e.nodeType ? [e] : e),
				o = ct.merge(this.get(), n);
			return this.pushStack(ct.unique(o))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), ct.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return ct.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return ct.dir(e, "parentNode", n)
		},
		next: function(e) {
			return p(e, "nextSibling")
		},
		prev: function(e) {
			return p(e, "previousSibling")
		},
		nextAll: function(e) {
			return ct.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return ct.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return ct.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return ct.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return ct.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return ct.sibling(e.firstChild)
		},
		contents: function(e) {
			return ct.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ct.merge([], e.childNodes)
		}
	}, function(e, t) {
		ct.fn[e] = function(n, o) {
			var r = ct.map(this, t, n);
			return "Until" !== e.slice(-5) && (o = n), o && "string" == typeof o && (r = ct.filter(o, r)), this.length > 1 && (It[e] || (r = ct.unique(r)), Bt.test(e) && (r = r.reverse())), this.pushStack(r)
		}
	}), ct.extend({
		filter: function(e, t, n) {
			var o = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? ct.find.matchesSelector(o, e) ? [o] : [] : ct.find.matches(e, ct.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		},
		dir: function(e, n, o) {
			for (var r = [], i = e[n]; i && 9 !== i.nodeType && (o === t || 1 !== i.nodeType || !ct(i).is(o));) 1 === i.nodeType && r.push(i), i = i[n];
			return r
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});
	var Xt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Ut = / jQuery\d+="(?:null|\d+)"/g,
		Yt = new RegExp("<(?:" + Xt + ")[\\s/>]", "i"),
		Vt = /^\s+/,
		Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Jt = /<([\w:]+)/,
		Kt = /<tbody/i,
		Qt = /<|&#?\w+;/,
		en = /<(?:script|style|link)/i,
		tn = /^(?:checkbox|radio)$/i,
		nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
		on = /^$|\/(?:java|ecma)script/i,
		rn = /^true\/(.*)/,
		an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		sn = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		ln = f(G),
		un = ln.appendChild(G.createElement("div"));
	sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ct.fn.extend({
		text: function(e) {
			return ct.access(this, function(e) {
				return e === t ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = g(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = g(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, o = e ? ct.filter(e, this) : this, r = 0; null != (n = o[r]); r++) t || 1 !== n.nodeType || ct.cleanData(C(n)), n.parentNode && (t && ct.contains(n.ownerDocument, n) && y(C(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && ct.cleanData(C(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && ct.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return ct.clone(this, e, t)
			})
		},
		html: function(e) {
			return ct.access(this, function(e) {
				var n = this[0] || {},
					o = 0,
					r = this.length;
				if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ut, "") : t;
				if (!("string" != typeof e || en.test(e) || !ct.support.htmlSerialize && Yt.test(e) || !ct.support.leadingWhitespace && Vt.test(e) || sn[(Jt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(Gt, "<$1></$2>");
					try {
						for (; r > o; o++) n = this[o] || {}, 1 === n.nodeType && (ct.cleanData(C(n, !1)), n.innerHTML = e);
						n = 0
					} catch (i) {}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = ct.map(this, function(e) {
					return [e.nextSibling, e.parentNode]
				}),
				t = 0;
			return this.domManip(arguments, function(n) {
				var o = e[t++],
					r = e[t++];
				r && (o && o.parentNode !== r && (o = this.nextSibling), ct(this).remove(), r.insertBefore(n, o))
			}, !0), t ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t, n) {
			e = ot.apply([], e);
			var o, r, i, a, s, l, u = 0,
				c = this.length,
				p = this,
				d = c - 1,
				f = e[0],
				g = ct.isFunction(f);
			if (g || !(1 >= c || "string" != typeof f || ct.support.checkClone) && nn.test(f)) return this.each(function(o) {
				var r = p.eq(o);
				g && (e[0] = f.call(this, o, r.html())), r.domManip(e, t, n)
			});
			if (c && (l = ct.buildFragment(e, this[0].ownerDocument, !1, !n && this), o = l.firstChild, 1 === l.childNodes.length && (l = o), o)) {
				for (a = ct.map(C(l, "script"), h), i = a.length; c > u; u++) r = l, u !== d && (r = ct.clone(r, !0, !0), i && ct.merge(a, C(r, "script"))), t.call(this[u], r, u);
				if (i)
					for (s = a[a.length - 1].ownerDocument, ct.map(a, m), u = 0; i > u; u++) r = a[u], on.test(r.type || "") && !ct._data(r, "globalEval") && ct.contains(s, r) && (r.src ? ct._evalUrl(r.src) : ct.globalEval((r.text || r.textContent || r.innerHTML || "").replace(an, "")));
				l = o = null
			}
			return this
		}
	}), ct.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		ct.fn[e] = function(e) {
			for (var n, o = 0, r = [], i = ct(e), a = i.length - 1; a >= o; o++) n = o === a ? this : this.clone(!0), ct(i[o])[t](n), rt.apply(r, n.get());
			return this.pushStack(r)
		}
	}), ct.extend({
		clone: function(e, t, n) {
			var o, r, i, a, s, l = ct.contains(e.ownerDocument, e);
			if (ct.support.html5Clone || ct.isXMLDoc(e) || !Yt.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) : (un.innerHTML = e.outerHTML, un.removeChild(i = un.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ct.isXMLDoc(e)))
				for (o = C(i), s = C(e), a = 0; null != (r = s[a]); ++a) o[a] && b(r, o[a]);
			if (t)
				if (n)
					for (s = s || C(e), o = o || C(i), a = 0; null != (r = s[a]); a++) v(r, o[a]);
				else v(e, i);
			return o = C(i, "script"), o.length > 0 && y(o, !l && C(e, "script")), o = s = r = null, i
		},
		buildFragment: function(e, t, n, o) {
			for (var r, i, a, s, l, u, c, p = e.length, d = f(t), g = [], h = 0; p > h; h++)
				if (i = e[h], i || 0 === i)
					if ("object" === ct.type(i)) ct.merge(g, i.nodeType ? [i] : i);
					else if (Qt.test(i)) {
				for (s = s || d.appendChild(t.createElement("div")), l = (Jt.exec(i) || ["", ""])[1].toLowerCase(), c = sn[l] || sn._default, s.innerHTML = c[1] + i.replace(Gt, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
				if (!ct.support.leadingWhitespace && Vt.test(i) && g.push(t.createTextNode(Vt.exec(i)[0])), !ct.support.tbody)
					for (i = "table" !== l || Kt.test(i) ? "<table>" !== c[1] || Kt.test(i) ? 0 : s : s.firstChild, r = i && i.childNodes.length; r--;) ct.nodeName(u = i.childNodes[r], "tbody") && !u.childNodes.length && i.removeChild(u);
				for (ct.merge(g, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
				s = d.lastChild
			} else g.push(t.createTextNode(i));
			for (s && d.removeChild(s), ct.support.appendChecked || ct.grep(C(g, "input"), w), h = 0; i = g[h++];)
				if ((!o || -1 === ct.inArray(i, o)) && (a = ct.contains(i.ownerDocument, i), s = C(d.appendChild(i), "script"), a && y(s), n))
					for (r = 0; i = s[r++];) on.test(i.type || "") && n.push(i);
			return s = null, d
		},
		cleanData: function(e, t) {
			for (var n, o, r, i, a = 0, s = ct.expando, l = ct.cache, u = ct.support.deleteExpando, c = ct.event.special; null != (n = e[a]); a++)
				if ((t || ct.acceptData(n)) && (r = n[s], i = r && l[r])) {
					if (i.events)
						for (o in i.events) c[o] ? ct.event.remove(n, o) : ct.removeEvent(n, o, i.handle);
					l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== Y ? n.removeAttribute(s) : n[s] = null, tt.push(r))
				}
		},
		_evalUrl: function(e) {
			return ct.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}
	}), ct.fn.extend({
		wrapAll: function(e) {
			if (ct.isFunction(e)) return this.each(function(t) {
				ct(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = ct(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return ct.isFunction(e) ? this.each(function(t) {
				ct(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = ct(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = ct.isFunction(e);
			return this.each(function(n) {
				ct(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var cn, pn, dn, fn = /alpha\([^)]*\)/i,
		gn = /opacity\s*=\s*([^)]*)/,
		hn = /^(top|right|bottom|left)$/,
		mn = /^(none|table(?!-c[ea]).+)/,
		yn = /^margin/,
		vn = new RegExp("^(" + pt + ")(.*)$", "i"),
		bn = new RegExp("^(" + pt + ")(?!px)[a-z%]+$", "i"),
		Cn = new RegExp("^([+-])=(" + pt + ")", "i"),
		wn = {
			BODY: "block"
		},
		Ln = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		xn = {
			letterSpacing: 0,
			fontWeight: 400
		},
		kn = ["Top", "Right", "Bottom", "Left"],
		Tn = ["Webkit", "O", "Moz", "ms"];
	ct.fn.extend({
		css: function(e, n) {
			return ct.access(this, function(e, n, o) {
				var r, i, a = {},
					s = 0;
				if (ct.isArray(n)) {
					for (i = pn(e), r = n.length; r > s; s++) a[n[s]] = ct.css(e, n[s], !1, i);
					return a
				}
				return o !== t ? ct.style(e, n, o) : ct.css(e, n)
			}, e, n, arguments.length > 1)
		},
		show: function() {
			return k(this, !0)
		},
		hide: function() {
			return k(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				x(this) ? ct(this).show() : ct(this).hide()
			})
		}
	}), ct.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = dn(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": ct.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, n, o, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, a, s, l = ct.camelCase(n),
					u = e.style;
				if (n = ct.cssProps[l] || (ct.cssProps[l] = L(u, l)), s = ct.cssHooks[n] || ct.cssHooks[l], o === t) return s && "get" in s && (i = s.get(e, !1, r)) !== t ? i : u[n];
				if (a = typeof o, "string" === a && (i = Cn.exec(o)) && (o = (i[1] + 1) * i[2] + parseFloat(ct.css(e, n)), a = "number"), !(null == o || "number" === a && isNaN(o) || ("number" !== a || ct.cssNumber[l] || (o += "px"), ct.support.clearCloneStyle || "" !== o || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (o = s.set(e, o, r)) === t))) try {
					u[n] = o
				} catch (c) {}
			}
		},
		css: function(e, n, o, r) {
			var i, a, s, l = ct.camelCase(n);
			return n = ct.cssProps[l] || (ct.cssProps[l] = L(e.style, l)), s = ct.cssHooks[n] || ct.cssHooks[l], s && "get" in s && (a = s.get(e, !0, o)), a === t && (a = dn(e, n, r)), "normal" === a && n in xn && (a = xn[n]), "" === o || o ? (i = parseFloat(a), o === !0 || ct.isNumeric(i) ? i || 0 : a) : a
		}
	}), e.getComputedStyle ? (pn = function(t) {
		return e.getComputedStyle(t, null)
	}, dn = function(e, n, o) {
		var r, i, a, s = o || pn(e),
			l = s ? s.getPropertyValue(n) || s[n] : t,
			u = e.style;
		return s && ("" !== l || ct.contains(e.ownerDocument, e) || (l = ct.style(e, n)), bn.test(l) && yn.test(n) && (r = u.width, i = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = r, u.minWidth = i, u.maxWidth = a)), l
	}) : G.documentElement.currentStyle && (pn = function(e) {
		return e.currentStyle
	}, dn = function(e, n, o) {
		var r, i, a, s = o || pn(e),
			l = s ? s[n] : t,
			u = e.style;
		return null == l && u && u[n] && (l = u[n]), bn.test(l) && !hn.test(n) && (r = u.left, i = e.runtimeStyle, a = i && i.left, a && (i.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = r, a && (i.left = a)), "" === l ? "auto" : l
	}), ct.each(["height", "width"], function(e, t) {
		ct.cssHooks[t] = {
			get: function(e, n, o) {
				return n ? 0 === e.offsetWidth && mn.test(ct.css(e, "display")) ? ct.swap(e, Ln, function() {
					return E(e, t, o)
				}) : E(e, t, o) : void 0
			},
			set: function(e, n, o) {
				var r = o && pn(e);
				return T(e, n, o ? A(e, t, o, ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, r), r) : 0)
			}
		}
	}), ct.support.opacity || (ct.cssHooks.opacity = {
		get: function(e, t) {
			return gn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				o = e.currentStyle,
				r = ct.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				i = o && o.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === ct.trim(i.replace(fn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || o && !o.filter) || (n.filter = fn.test(i) ? i.replace(fn, r) : i + " " + r)
		}
	}), ct(function() {
		ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
			get: function(e, t) {
				return t ? ct.swap(e, {
					display: "inline-block"
				}, dn, [e, "marginRight"]) : void 0
			}
		}), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function(e, t) {
			ct.cssHooks[t] = {
				get: function(e, n) {
					return n ? (n = dn(e, t), bn.test(n) ? ct(e).position()[t] + "px" : n) : void 0
				}
			}
		})
	}), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ct.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ct.css(e, "display"))
	}, ct.expr.filters.visible = function(e) {
		return !ct.expr.filters.hidden(e)
	}), ct.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		ct.cssHooks[e + t] = {
			expand: function(n) {
				for (var o = 0, r = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > o; o++) r[e + kn[o] + t] = i[o] || i[o - 2] || i[0];
				return r
			}
		}, yn.test(e) || (ct.cssHooks[e + t].set = T)
	});
	var An = /%20/g,
		En = /\[\]$/,
		Nn = /\r?\n/g,
		Sn = /^(?:submit|button|image|reset|file)$/i,
		Mn = /^(?:input|select|textarea|keygen)/i;
	ct.fn.extend({
		serialize: function() {
			return ct.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = ct.prop(this, "elements");
				return e ? ct.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !ct(this).is(":disabled") && Mn.test(this.nodeName) && !Sn.test(e) && (this.checked || !tn.test(e))
			}).map(function(e, t) {
				var n = ct(this).val();
				return null == n ? null : ct.isArray(n) ? ct.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Nn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Nn, "\r\n")
				}
			}).get()
		}
	}), ct.param = function(e, n) {
		var o, r = [],
			i = function(e, t) {
				t = ct.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (n === t && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(e) || e.jquery && !ct.isPlainObject(e)) ct.each(e, function() {
			i(this.name, this.value)
		});
		else
			for (o in e) M(o, e[o], n, i);
		return r.join("&").replace(An, "+")
	}, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		ct.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), ct.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, o) {
			return this.on(t, e, n, o)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var jn, On, Dn = ct.now(),
		Zn = /\?/,
		zn = /#.*$/,
		Hn = /([?&])_=[^&]*/,
		Rn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Pn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		qn = /^(?:GET|HEAD)$/,
		Wn = /^\/\//,
		Fn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		_n = ct.fn.load,
		Bn = {},
		$n = {},
		In = "*/".concat("*");
	try {
		On = V.href
	} catch (Xn) {
		On = G.createElement("a"), On.href = "", On = On.href
	}
	jn = Fn.exec(On.toLowerCase()) || [], ct.fn.load = function(e, n, o) {
		if ("string" != typeof e && _n) return _n.apply(this, arguments);
		var r, i, a, s = this,
			l = e.indexOf(" ");
		return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), ct.isFunction(n) ? (o = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ct.ajax({
			url: e,
			type: a,
			dataType: "html",
			data: n
		}).done(function(e) {
			i = arguments, s.html(r ? ct("<div>").append(ct.parseHTML(e)).find(r) : e)
		}).complete(o && function(e, t) {
			s.each(o, i || [e.responseText, t, e])
		}), this
	}, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		ct.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), ct.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: On,
			type: "GET",
			isLocal: Pn.test(jn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": In,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": ct.parseJSON,
				"text xml": ct.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? D(D(e, ct.ajaxSettings), t) : D(ct.ajaxSettings, e)
		},
		ajaxPrefilter: j(Bn),
		ajaxTransport: j($n),
		ajax: function(e, n) {
			function o(e, n, o, r) {
				var i, p, v, b, w, x = n;
				2 !== C && (C = 2, l && clearTimeout(l), c = t, s = r || "", L.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, o && (b = Z(d, L, o)), b = z(d, b, L, i), i ? (d.ifModified && (w = L.getResponseHeader("Last-Modified"), w && (ct.lastModified[a] = w), w = L.getResponseHeader("etag"), w && (ct.etag[a] = w)), 204 === e || "HEAD" === d.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = b.state, p = b.data, v = b.error, i = !v)) : (v = x, (e || !x) && (x = "error", 0 > e && (e = 0))), L.status = e, L.statusText = (n || x) + "", i ? h.resolveWith(f, [p, x, L]) : h.rejectWith(f, [L, x, v]), L.statusCode(y), y = t, u && g.trigger(i ? "ajaxSuccess" : "ajaxError", [L, d, i ? p : v]), m.fireWith(f, [L, x]), u && (g.trigger("ajaxComplete", [L, d]), --ct.active || ct.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (n = e, e = t), n = n || {};
			var r, i, a, s, l, u, c, p, d = ct.ajaxSetup({}, n),
				f = d.context || d,
				g = d.context && (f.nodeType || f.jquery) ? ct(f) : ct.event,
				h = ct.Deferred(),
				m = ct.Callbacks("once memory"),
				y = d.statusCode || {},
				v = {},
				b = {},
				C = 0,
				w = "canceled",
				L = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === C) {
							if (!p)
								for (p = {}; t = Rn.exec(s);) p[t[1].toLowerCase()] = t[2];
							t = p[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === C ? s : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return C || (e = b[n] = b[n] || e, v[e] = t), this
					},
					overrideMimeType: function(e) {
						return C || (d.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (2 > C)
								for (t in e) y[t] = [y[t], e[t]];
							else L.always(e[L.status]);
						return this
					},
					abort: function(e) {
						var t = e || w;
						return c && c.abort(t), o(0, t), this
					}
				};
			if (h.promise(L).complete = m.add, L.success = L.done, L.error = L.fail, d.url = ((e || d.url || On) + "").replace(zn, "").replace(Wn, jn[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ct.trim(d.dataType || "*").toLowerCase().match(dt) || [""], null == d.crossDomain && (r = Fn.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === jn[1] && r[2] === jn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (jn[3] || ("http:" === jn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ct.param(d.data, d.traditional)), O(Bn, d, n, L), 2 === C) return L;
			u = d.global, u && 0 === ct.active++ && ct.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !qn.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (Zn.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Hn.test(a) ? a.replace(Hn, "$1_=" + Dn++) : a + (Zn.test(a) ? "&" : "?") + "_=" + Dn++)), d.ifModified && (ct.lastModified[a] && L.setRequestHeader("If-Modified-Since", ct.lastModified[a]), ct.etag[a] && L.setRequestHeader("If-None-Match", ct.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && L.setRequestHeader("Content-Type", d.contentType), L.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + In + "; q=0.01" : "") : d.accepts["*"]);
			for (i in d.headers) L.setRequestHeader(i, d.headers[i]);
			if (d.beforeSend && (d.beforeSend.call(f, L, d) === !1 || 2 === C)) return L.abort();
			w = "abort";
			for (i in {
					success: 1,
					error: 1,
					complete: 1
				}) L[i](d[i]);
			if (c = O($n, d, n, L)) {
				L.readyState = 1, u && g.trigger("ajaxSend", [L, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
					L.abort("timeout")
				}, d.timeout));
				try {
					C = 1, c.send(v, o)
				} catch (x) {
					if (!(2 > C)) throw x;
					o(-1, x)
				}
			} else o(-1, "No Transport");
			return L
		},
		getJSON: function(e, t, n) {
			return ct.get(e, t, n, "json")
		},
		getScript: function(e, n) {
			return ct.get(e, t, n, "script")
		}
	}), ct.each(["get", "post"], function(e, n) {
		ct[n] = function(e, o, r, i) {
			return ct.isFunction(o) && (i = i || r, r = o, o = t), ct.ajax({
				url: e,
				type: n,
				dataType: i,
				data: o,
				success: r
			})
		}
	}), ct.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return ct.globalEval(e), e
			}
		}
	}), ct.ajaxPrefilter("script", function(e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), ct.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var n, o = G.head || ct("head")[0] || G.documentElement;
			return {
				send: function(t, r) {
					n = G.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
						(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || r(200, "success"))
					}, o.insertBefore(n, o.firstChild)
				},
				abort: function() {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var Un = [],
		Yn = /(=)\?(?=&|$)|\?\?/;
	ct.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Un.pop() || ct.expando + "_" + Dn++;
			return this[e] = !0, e
		}
	}), ct.ajaxPrefilter("json jsonp", function(n, o, r) {
		var i, a, s, l = n.jsonp !== !1 && (Yn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yn.test(n.data) && "data");
		return l || "jsonp" === n.dataTypes[0] ? (i = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Yn, "$1" + i) : n.jsonp !== !1 && (n.url += (Zn.test(n.url) ? "&" : "?") + n.jsonp + "=" + i), n.converters["script json"] = function() {
			return s || ct.error(i + " was not called"), s[0]
		}, n.dataTypes[0] = "json", a = e[i], e[i] = function() {
			s = arguments
		}, r.always(function() {
			e[i] = a, n[i] && (n.jsonpCallback = o.jsonpCallback, Un.push(i)), s && ct.isFunction(a) && a(s[0]), s = a = t
		}), "script") : void 0
	});
	var Vn, Gn, Jn = 0,
		Kn = e.ActiveXObject && function() {
			var e;
			for (e in Vn) Vn[e](t, !0)
		};
	ct.ajaxSettings.xhr = e.ActiveXObject ? function() {
		return !this.isLocal && H() || R()
	} : H, Gn = ct.ajaxSettings.xhr(), ct.support.cors = !!Gn && "withCredentials" in Gn, Gn = ct.support.ajax = !!Gn, Gn && ct.ajaxTransport(function(n) {
		if (!n.crossDomain || ct.support.cors) {
			var o;
			return {
				send: function(r, i) {
					var a, s, l = n.xhr();
					if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
						for (s in n.xhrFields) l[s] = n.xhrFields[s];
					n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (s in r) l.setRequestHeader(s, r[s])
					} catch (u) {}
					l.send(n.hasContent && n.data || null), o = function(e, r) {
						var s, u, c, p;
						try {
							if (o && (r || 4 === l.readyState))
								if (o = t, a && (l.onreadystatechange = ct.noop, Kn && delete Vn[a]), r) 4 !== l.readyState && l.abort();
								else {
									p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
									try {
										c = l.statusText
									} catch (d) {
										c = ""
									}
									s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
								}
						} catch (f) {
							r || i(-1, f)
						}
						p && i(s, c, p, u)
					}, n.async ? 4 === l.readyState ? setTimeout(o) : (a = ++Jn, Kn && (Vn || (Vn = {}, ct(e).unload(Kn)), Vn[a] = o), l.onreadystatechange = o) : o()
				},
				abort: function() {
					o && o(t, !0)
				}
			}
		}
	});
	var Qn, eo, to = /^(?:toggle|show|hide)$/,
		no = new RegExp("^(?:([+-])=|)(" + pt + ")([a-z%]*)$", "i"),
		oo = /queueHooks$/,
		ro = [_],
		io = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					o = n.cur(),
					r = no.exec(t),
					i = r && r[3] || (ct.cssNumber[e] ? "" : "px"),
					a = (ct.cssNumber[e] || "px" !== i && +o) && no.exec(ct.css(n.elem, e)),
					s = 1,
					l = 20;
				if (a && a[3] !== i) {
					i = i || a[3], r = r || [], a = +o || 1;
					do s = s || ".5", a /= s, ct.style(n.elem, e, a + i); while (s !== (s = n.cur() / o) && 1 !== s && --l)
				}
				return r && (a = n.start = +a || +o || 0, n.unit = i, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
			}]
		};
	ct.Animation = ct.extend(W, {
		tweener: function(e, t) {
			ct.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			for (var n, o = 0, r = e.length; r > o; o++) n = e[o], io[n] = io[n] || [], io[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? ro.unshift(e) : ro.push(e)
		}
	}), ct.Tween = B, B.prototype = {
		constructor: B,
		init: function(e, t, n, o, r, i) {
			this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = i || (ct.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = B.propHooks[this.prop];
			return e && e.get ? e.get(this) : B.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = B.propHooks[this.prop];
			return this.pos = t = this.options.duration ? ct.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
		}
	}, B.prototype.init.prototype = B.prototype, B.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ct.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				ct.fx.step[e.prop] ? ct.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ct.cssProps[e.prop]] || ct.cssHooks[e.prop]) ? ct.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, ct.each(["toggle", "show", "hide"], function(e, t) {
		var n = ct.fn[t];
		ct.fn[t] = function(e, o, r) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, o, r)
		}
	}), ct.fn.extend({
		fadeTo: function(e, t, n, o) {
			return this.filter(x).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, o)
		},
		animate: function(e, t, n, o) {
			var r = ct.isEmptyObject(e),
				i = ct.speed(t, n, o),
				a = function() {
					var t = W(this, ct.extend({}, e), i);
					(r || ct._data(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, r || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
		},
		stop: function(e, n, o) {
			var r = function(e) {
				var t = e.stop;
				delete e.stop, t(o)
			};
			return "string" != typeof e && (o = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					n = null != e && e + "queueHooks",
					i = ct.timers,
					a = ct._data(this);
				if (n) a[n] && a[n].stop && r(a[n]);
				else
					for (n in a) a[n] && a[n].stop && oo.test(n) && r(a[n]);
				for (n = i.length; n--;) i[n].elem !== this || null != e && i[n].queue !== e || (i[n].anim.stop(o), t = !1, i.splice(n, 1));
				(t || !o) && ct.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"), this.each(function() {
				var t, n = ct._data(this),
					o = n[e + "queue"],
					r = n[e + "queueHooks"],
					i = ct.timers,
					a = o ? o.length : 0;
				for (n.finish = !0, ct.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
				for (t = 0; a > t; t++) o[t] && o[t].finish && o[t].finish.call(this);
				delete n.finish
			})
		}
	}), ct.each({
		slideDown: $("show"),
		slideUp: $("hide"),
		slideToggle: $("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		ct.fn[e] = function(e, n, o) {
			return this.animate(t, e, n, o)
		}
	}), ct.speed = function(e, t, n) {
		var o = e && "object" == typeof e ? ct.extend({}, e) : {
			complete: n || !n && t || ct.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !ct.isFunction(t) && t
		};
		return o.duration = ct.fx.off ? 0 : "number" == typeof o.duration ? o.duration : o.duration in ct.fx.speeds ? ct.fx.speeds[o.duration] : ct.fx.speeds._default, (null == o.queue || o.queue === !0) && (o.queue = "fx"), o.old = o.complete, o.complete = function() {
			ct.isFunction(o.old) && o.old.call(this), o.queue && ct.dequeue(this, o.queue)
		}, o
	}, ct.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, ct.timers = [], ct.fx = B.prototype.init, ct.fx.tick = function() {
		var e, n = ct.timers,
			o = 0;
		for (Qn = ct.now(); o < n.length; o++) e = n[o], e() || n[o] !== e || n.splice(o--, 1);
		n.length || ct.fx.stop(), Qn = t
	}, ct.fx.timer = function(e) {
		e() && ct.timers.push(e) && ct.fx.start()
	}, ct.fx.interval = 13, ct.fx.start = function() {
		eo || (eo = setInterval(ct.fx.tick, ct.fx.interval))
	}, ct.fx.stop = function() {
		clearInterval(eo), eo = null
	}, ct.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function(e) {
		return ct.grep(ct.timers, function(t) {
			return e === t.elem
		}).length
	}), ct.fn.offset = function(e) {
		if (arguments.length) return e === t ? this : this.each(function(t) {
			ct.offset.setOffset(this, e, t)
		});
		var n, o, r = {
				top: 0,
				left: 0
			},
			i = this[0],
			a = i && i.ownerDocument;
		if (a) return n = a.documentElement, ct.contains(n, i) ? (typeof i.getBoundingClientRect !== Y && (r = i.getBoundingClientRect()), o = I(a), {
			top: r.top + (o.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: r.left + (o.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : r
	}, ct.offset = {
		setOffset: function(e, t, n) {
			var o = ct.css(e, "position");
			"static" === o && (e.style.position = "relative");
			var r, i, a = ct(e),
				s = a.offset(),
				l = ct.css(e, "top"),
				u = ct.css(e, "left"),
				c = ("absolute" === o || "fixed" === o) && ct.inArray("auto", [l, u]) > -1,
				p = {},
				d = {};
			c ? (d = a.position(), r = d.top, i = d.left) : (r = parseFloat(l) || 0, i = parseFloat(u) || 0), ct.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + r), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : a.css(p)
		}
	}, ct.fn.extend({
		position: function() {
			if (this[0]) {
				var e, t, n = {
						top: 0,
						left: 0
					},
					o = this[0];
				return "fixed" === ct.css(o, "position") ? t = o.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ct.nodeName(e[0], "html") || (n = e.offset()), n.top += ct.css(e[0], "borderTopWidth", !0), n.left += ct.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - ct.css(o, "marginTop", !0),
					left: t.left - n.left - ct.css(o, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || J; e && !ct.nodeName(e, "html") && "static" === ct.css(e, "position");) e = e.offsetParent;
				return e || J
			})
		}
	}), ct.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, n) {
		var o = /Y/.test(n);
		ct.fn[e] = function(r) {
			return ct.access(this, function(e, r, i) {
				var a = I(e);
				return i === t ? a ? n in a ? a[n] : a.document.documentElement[r] : e[r] : (a ? a.scrollTo(o ? ct(a).scrollLeft() : i, o ? i : ct(a).scrollTop()) : e[r] = i, void 0)
			}, e, r, arguments.length, null)
		}
	}), ct.each({
		Height: "height",
		Width: "width"
	}, function(e, n) {
		ct.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function(o, r) {
			ct.fn[r] = function(r, i) {
				var a = arguments.length && (o || "boolean" != typeof r),
					s = o || (r === !0 || i === !0 ? "margin" : "border");
				return ct.access(this, function(n, o, r) {
					var i;
					return ct.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (i = n.documentElement, Math.max(n.body["scroll" + e], i["scroll" + e], n.body["offset" + e], i["offset" + e], i["client" + e])) : r === t ? ct.css(n, o, s) : ct.style(n, o, r, s)
				}, n, a ? r : t, a, null)
			}
		})
	}), ct.fn.size = function() {
		return this.length
	}, ct.fn.andSelf = ct.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (e.jQuery = e.$ = ct, "function" == typeof define && define.amd && define("jquery", [], function() {
		return ct
	}))
}(window),
function(e, t) {
	e.rails !== t && e.error("jquery-ujs has already been loaded!");
	var n, o = e(document);
	e.rails = n = {
		linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
		buttonClickSelector: "button[data-remote]",
		inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
		formSubmitSelector: "form",
		formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
		disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
		enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
		requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
		fileInputSelector: "input[type=file]",
		linkDisableSelector: "a[data-disable-with]",
		CSRFProtection: function(t) {
			var n = e('meta[name="csrf-token"]').attr("content");
			n && t.setRequestHeader("X-CSRF-Token", n)
		},
		fire: function(t, n, o) {
			var r = e.Event(n);
			return t.trigger(r, o), r.result !== !1
		},
		confirm: function(e) {
			return confirm(e)
		},
		ajax: function(t) {
			return e.ajax(t)
		},
		href: function(e) {
			return e.attr("href")
		},
		handleRemote: function(o) {
			var r, i, a, s, l, u, c, p;
			if (n.fire(o, "ajax:before")) {
				if (s = o.data("cross-domain"), l = s === t ? null : s, u = o.data("with-credentials") || null, c = o.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, o.is("form")) {
					r = o.attr("method"), i = o.attr("action"), a = o.serializeArray();
					var d = o.data("ujs:submit-button");
					d && (a.push(d), o.data("ujs:submit-button", null))
				} else o.is(n.inputChangeSelector) ? (r = o.data("method"), i = o.data("url"), a = o.serialize(), o.data("params") && (a = a + "&" + o.data("params"))) : o.is(n.buttonClickSelector) ? (r = o.data("method") || "get", i = o.data("url"), a = o.serialize(), o.data("params") && (a = a + "&" + o.data("params"))) : (r = o.data("method"), i = n.href(o), a = o.data("params") || null);
				p = {
					type: r || "GET",
					data: a,
					dataType: c,
					beforeSend: function(e, r) {
						return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(o, "ajax:beforeSend", [e, r])
					},
					success: function(e, t, n) {
						o.trigger("ajax:success", [e, t, n])
					},
					complete: function(e, t) {
						o.trigger("ajax:complete", [e, t])
					},
					error: function(e, t, n) {
						o.trigger("ajax:error", [e, t, n])
					},
					crossDomain: l
				}, u && (p.xhrFields = {
					withCredentials: u
				}), i && (p.url = i);
				var f = n.ajax(p);
				return o.trigger("ajax:send", f), f
			}
			return !1
		},
		handleMethod: function(o) {
			var r = n.href(o),
				i = o.data("method"),
				a = o.attr("target"),
				s = e("meta[name=csrf-token]").attr("content"),
				l = e("meta[name=csrf-param]").attr("content"),
				u = e('<form method="post" action="' + r + '"></form>'),
				c = '<input name="_method" value="' + i + '" type="hidden" />';
			l !== t && s !== t && (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && u.attr("target", a), u.hide().append(c).appendTo("body"), u.submit()
		},
		disableFormElements: function(t) {
			t.find(n.disableSelector).each(function() {
				var t = e(this),
					n = t.is("button") ? "html" : "val";
				t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
			})
		},
		enableFormElements: function(t) {
			t.find(n.enableSelector).each(function() {
				var t = e(this),
					n = t.is("button") ? "html" : "val";
				t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
			})
		},
		allowAction: function(e) {
			var t, o = e.data("confirm"),
				r = !1;
			return o ? (n.fire(e, "confirm") && (r = n.confirm(o), t = n.fire(e, "confirm:complete", [r])), r && t) : !0
		},
		blankInputs: function(t, n, o) {
			var r, i, a = e(),
				s = n || "input,textarea",
				l = t.find(s);
			return l.each(function() {
				if (r = e(this), i = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !i == !o) {
					if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
					a = a.add(r)
				}
			}), a.length ? a : !1
		},
		nonBlankInputs: function(e, t) {
			return n.blankInputs(e, t, !0)
		},
		stopEverything: function(t) {
			return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
		},
		disableElement: function(e) {
			e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function(e) {
				return n.stopEverything(e)
			})
		},
		enableElement: function(e) {
			e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
		}
	}, n.fire(o, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, o) {
		e.crossDomain || n.CSRFProtection(o)
	}), o.delegate(n.linkDisableSelector, "ajax:complete", function() {
		n.enableElement(e(this))
	}), o.delegate(n.linkClickSelector, "click.rails", function(o) {
		var r = e(this),
			i = r.data("method"),
			a = r.data("params");
		if (!n.allowAction(r)) return n.stopEverything(o);
		if (r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== t) {
			if (!(!o.metaKey && !o.ctrlKey || i && "GET" !== i || a)) return !0;
			var s = n.handleRemote(r);
			return s === !1 ? n.enableElement(r) : s.error(function() {
				n.enableElement(r)
			}), !1
		}
		return r.data("method") ? (n.handleMethod(r), !1) : void 0
	}), o.delegate(n.buttonClickSelector, "click.rails", function(t) {
		var o = e(this);
		return n.allowAction(o) ? (n.handleRemote(o), !1) : n.stopEverything(t)
	}), o.delegate(n.inputChangeSelector, "change.rails", function(t) {
		var o = e(this);
		return n.allowAction(o) ? (n.handleRemote(o), !1) : n.stopEverything(t)
	}), o.delegate(n.formSubmitSelector, "submit.rails", function(o) {
		var r = e(this),
			i = r.data("remote") !== t,
			a = n.blankInputs(r, n.requiredInputSelector),
			s = n.nonBlankInputs(r, n.fileInputSelector);
		if (!n.allowAction(r)) return n.stopEverything(o);
		if (a && r.attr("novalidate") == t && n.fire(r, "ajax:aborted:required", [a])) return n.stopEverything(o);
		if (i) {
			if (s) {
				setTimeout(function() {
					n.disableFormElements(r)
				}, 13);
				var l = n.fire(r, "ajax:aborted:file", [s]);
				return l || setTimeout(function() {
					n.enableFormElements(r)
				}, 13), l
			}
			return n.handleRemote(r), !1
		}
		setTimeout(function() {
			n.disableFormElements(r)
		}, 13)
	}), o.delegate(n.formInputClickSelector, "click.rails", function(t) {
		var o = e(this);
		if (!n.allowAction(o)) return n.stopEverything(t);
		var r = o.attr("name"),
			i = r ? {
				name: r,
				value: o.val()
			} : null;
		o.closest("form").data("ujs:submit-button", i)
	}), o.delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function(t) {
		this == t.target && n.disableFormElements(e(this))
	}), o.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
		this == t.target && n.enableFormElements(e(this))
	}), e(function() {
		var t = e("meta[name=csrf-token]").attr("content"),
			n = e("meta[name=csrf-param]").attr("content");
		e('form input[name="' + n + '"]').val(t)
	}))
}(jQuery),
function() {
	var e, t, n, o, r, i, a, s, l, u, c, p, d, f, g, h, m, y, v, b, C, w, L, x, k, T, A, E, N, S, M, j, O, D, Z, z, H, R, P, q, W, F, _, B, $, I, X, U, Y, V, G, J, K, Q, et, tt, nt, ot, rt, it = [].indexOf || function(e) {
			for (var t = 0, n = this.length; n > t; t++)
				if (t in this && this[t] === e) return t;
			return -1
		},
		at = [].slice;
	z = {}, u = 10, Q = !1, g = null, j = null, k = ["html"], F = null, d = null, ot = null, b = function(e) {
		var t;
		return X(), l(), _(e), Q && (t = et(e)) ? (C(t), w(e)) : w(e, J)
	}, et = function(e) {
		var t;
		return t = z[e], t && !t.transitionCacheDisabled ? t : void 0
	}, h = function(e) {
		return null == e && (e = !0), Q = e
	}, w = function(e, t) {
		return null == t && (t = function() {}), tt("page:fetch", {
			url: e
		}), null != ot && ot.abort(), ot = new XMLHttpRequest, ot.open("GET", Y(e), !0), ot.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), ot.setRequestHeader("X-XHR-Referer", F), ot.onload = function() {
			var n;
			return tt("page:receive"), (n = q()) ? (c.apply(null, v(n)), B(), t(), tt("page:load")) : document.location.href = e
		}, ot.onloadend = function() {
			return ot = null
		}, ot.onerror = function() {
			return document.location.href = e
		}, ot.send()
	}, C = function(e) {
		return null != ot && ot.abort(), c(e.title, e.body), W(e), tt("page:restore")
	}, l = function() {
		return z[g.url] = {
			url: document.location.href,
			body: document.body,
			title: document.title,
			positionY: window.pageYOffset,
			positionX: window.pageXOffset,
			cachedAt: (new Date).getTime(),
			transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]")
		}, p(u)
	}, R = function(e) {
		return null == e && (e = u), /^[\d]+$/.test(e) ? u = parseInt(e) : void 0
	}, p = function(e) {
		var t, n, o, r, i, a;
		for (o = Object.keys(z), t = o.map(function(e) {
				return z[e].cachedAt
			}).sort(function(e, t) {
				return t - e
			}), a = [], r = 0, i = o.length; i > r; r++) n = o[r], z[n].cachedAt <= t[e] && (tt("page:expire", z[n]), a.push(delete z[n]));
		return a
	}, c = function(t, n, o, r) {
		return document.title = t, document.documentElement.replaceChild(n, document.body), null != o && e.update(o), r && m(), g = window.history.state, tt("page:change"), tt("page:update")
	}, m = function() {
		var e, t, n, o, r, i, a, s, l, u, c, p;
		for (i = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), a = 0, l = i.length; l > a; a++)
			if (r = i[a], "" === (c = r.type) || "text/javascript" === c) {
				for (t = document.createElement("script"), p = r.attributes, s = 0, u = p.length; u > s; s++) e = p[s], t.setAttribute(e.name, e.value);
				t.appendChild(document.createTextNode(r.innerHTML)), o = r.parentNode, n = r.nextSibling, o.removeChild(r), o.insertBefore(t, n)
			}
	}, V = function(e) {
		return e.innerHTML = e.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), e
	}, _ = function(e) {
		return e !== F ? window.history.pushState({
			turbolinks: !0,
			url: e
		}, "", e) : void 0
	}, B = function() {
		var e, t;
		return (e = ot.getResponseHeader("X-XHR-Redirected-To")) ? (t = U(e) === e ? document.location.hash : "", window.history.replaceState(g, "", e + t)) : void 0
	}, X = function() {
		return F = document.location.href
	}, I = function() {
		return window.history.replaceState({
			turbolinks: !0,
			url: document.location.href
		}, "", document.location.href)
	}, $ = function() {
		return g = window.history.state
	}, W = function(e) {
		return window.scrollTo(e.positionX, e.positionY)
	}, J = function() {
		return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0)
	}, Y = function(e) {
		return U(e)
	}, U = function(e) {
		var t;
		return t = e, null == e.href && (t = document.createElement("A"), t.href = e), t.href.replace(t.hash, "")
	}, P = function(e) {
		var t, n;
		return t = (null != (n = document.cookie.match(new RegExp(e + "=(\\w+)"))) ? n[1].toUpperCase() : void 0) || "", document.cookie = e + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", t
	}, tt = function(e, t) {
		var n;
		return n = document.createEvent("Events"), t && (n.data = t), n.initEvent(e, !0, !0), document.dispatchEvent(n)
	}, H = function() {
		return !tt("page:before-change")
	}, q = function() {
		var e, t, n, o, r, i;
		return t = function() {
			var e;
			return 400 <= (e = ot.status) && 600 > e
		}, i = function() {
			return ot.getResponseHeader("Content-Type").match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
		}, o = function(e) {
			var t, n, o, r, i;
			for (r = e.head.childNodes, i = [], n = 0, o = r.length; o > n; n++) t = r[n], null != ("function" == typeof t.getAttribute ? t.getAttribute("data-turbolinks-track") : void 0) && i.push(t.getAttribute("src") || t.getAttribute("href"));
			return i
		}, e = function(e) {
			var t;
			return j || (j = o(document)), t = o(e), t.length !== j.length || r(t, j).length !== j.length
		}, r = function(e, t) {
			var n, o, r, i, a;
			for (e.length > t.length && (i = [t, e], e = i[0], t = i[1]), a = [], o = 0, r = e.length; r > o; o++) n = e[o], it.call(t, n) >= 0 && a.push(n);
			return a
		}, !t() && i() && (n = d(ot.responseText), n && !e(n)) ? n : void 0
	}, v = function(t) {
		var n;
		return n = t.querySelector("title"), [null != n ? n.textContent : void 0, V(t.body), e.get(t).token, "runScripts"]
	}, e = {
		get: function(e) {
			var t;
			return null == e && (e = document), {
				node: t = e.querySelector('meta[name="csrf-token"]'),
				token: null != t ? "function" == typeof t.getAttribute ? t.getAttribute("content") : void 0 : void 0
			}
		},
		update: function(e) {
			var t;
			return t = this.get(), null != t.token && null != e && t.token !== e ? t.node.setAttribute("content", e) : void 0
		}
	}, o = function() {
		var e, t, n, o, r, i;
		t = function(e) {
			return (new DOMParser).parseFromString(e, "text/html")
		}, e = function(e) {
			var t;
			return t = document.implementation.createHTMLDocument(""), t.documentElement.innerHTML = e, t
		}, n = function(e) {
			var t;
			return t = document.implementation.createHTMLDocument(""), t.open("replace"), t.write(e), t.close(), t
		};
		try {
			if (window.DOMParser) return r = t("<html><body><p>test"), t
		} catch (a) {
			return o = a, r = e("<html><body><p>test"), e
		} finally {
			if (1 !== (null != r ? null != (i = r.body) ? i.childNodes.length : void 0 : void 0)) return n
		}
	}, E = function(e) {
		return e.defaultPrevented ? void 0 : (document.removeEventListener("click", L, !1), document.addEventListener("click", L, !1))
	}, L = function(e) {
		var t;
		return e.defaultPrevented || (t = y(e), "A" !== t.nodeName || T(e, t)) ? void 0 : (H() || nt(t.href), e.preventDefault())
	}, y = function(e) {
		var t;
		for (t = e.target; t.parentNode && "A" !== t.nodeName;) t = t.parentNode;
		return t
	}, f = function(e) {
		return location.protocol !== e.protocol || location.host !== e.host
	}, n = function(e) {
		return (e.hash && U(e)) === U(location) || e.href === location.href + "#"
	}, D = function(e) {
		var t;
		return t = U(e), t.match(/\.[a-z]+(\?.*)?$/g) && !t.match(new RegExp("\\.(?:" + k.join("|") + ")?(\\?.*)?$", "g"))
	}, O = function(e) {
		for (var t; !t && e !== document;) t = null != e.getAttribute("data-no-turbolink"), e = e.parentNode;
		return t
	}, K = function(e) {
		return 0 !== e.target.length
	}, Z = function(e) {
		return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
	}, T = function(e, t) {
		return f(t) || n(t) || D(t) || O(t) || K(t) || Z(e)
	}, t = function() {
		var e, t, n, o;
		for (t = 1 <= arguments.length ? at.call(arguments, 0) : [], n = 0, o = t.length; o > n; n++) e = t[n], k.push(e);
		return k
	}, N = function() {
		return document.addEventListener("DOMContentLoaded", function() {
			return tt("page:change"), tt("page:update")
		}, !0)
	}, M = function() {
		return "undefined" != typeof jQuery ? jQuery(document).on("ajaxSuccess", function(e, t) {
			return jQuery.trim(t.responseText) ? tt("page:update") : void 0
		}) : void 0
	}, S = function(e) {
		var t, n;
		return (null != (n = e.state) ? n.turbolinks : void 0) ? (t = z[e.state.url]) ? (l(), C(t)) : nt(e.target.location.href) : void 0
	}, A = function() {
		return I(), $(), d = o(), document.addEventListener("click", E, !0), window.addEventListener("popstate", S, !1)
	}, x = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/26/), a = window.history && window.history.pushState && window.history.replaceState && x, r = !navigator.userAgent.match(/CriOS\//), G = "GET" === (rt = P("request_method")) || "" === rt, s = a && r && G, i = document.addEventListener && document.createEvent, i && (N(), M()), s ? (nt = b, A()) : nt = function(e) {
		return document.location.href = e
	}, this.Turbolinks = {
		visit: nt,
		pagesCached: R,
		enableTransitionCache: h,
		allowLinkExtensions: t,
		supported: s
	}
}.call(this),
	function() {
		window.ZipAreasMap || (window.ZipAreasMap = {}), $(function() {
			return ZipAreasMap.selectedZipCodes = $("#zip-codes").val().split(","), ZipAreasMap.initialize(), $("#selected-zip-codes").text(ZipAreasMap.selectedZipCodes), $("#change-color").click(function() {
				var e;
				return e = RandomColor.generate(), ZipAreasMap.polygons.forEach(function(t) {
					return t.setOptions({
						fillColor: e,
						strokeColor: e
					})
				})
			})
		})
	}.call(this),
	function() {
		ZipAreasMap.initialize = function() {
			var e, t, n;
			return e = $("#zip-area-map-canvas").get(0), e ? (n = {
				center: new google.maps.LatLng(40.75532, -73.983677),
				zoom: 12
			}, t = new google.maps.Map(e, n), ZipAreasMap.polygons = [], ZipAreasMap.zipCodes.forEach(function(e) {
				return ZipAreasMap.polygons.push(e.polygon())
			}), ZipAreasMap.setActiveZipCodes = function() {
				var e;
				return e = ZipAreasMap.polygons.filter(function(e) {
					return e.active === !0
				}), ZipAreasMap.selectedZipCodes = e.map(function(e) {
					return e.zipCode
				}), $("#selected-zip-codes").text(ZipAreasMap.selectedZipCodes.join(", "))
			}, ZipAreasMap.polygons.forEach(function(e) {
				return e.setMap(t), google.maps.event.addListener(e, "click", function() {
					var e;
					return e = 0 === this.fillOpacity ? .5 : 0, this.setOptions({
						fillOpacity: e
					}), this.active = !this.active, ZipAreasMap.setActiveZipCodes()
				})
			})) : void 0
		}
	}.call(this),
	function() {
		window.RandomColor || (window.RandomColor = {}), RandomColor.generate = function() {
			return "#" + ("000000" + Math.floor(16777215 * Math.random()).toString(16)).slice(-6)
		}
	}.call(this),
	function() {
		var e;
		window.ZipAreasMap || (window.ZipAreasMap = {}), ZipAreasMap.zipCodes = [], e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.744149, -73.987733), new google.maps.LatLng(40.748934, -73.983973), new google.maps.LatLng(40.756112, -74.006533), new google.maps.LatLng(40.752352, -74.008242), new google.maps.LatLng(40.743465, -73.992177)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10001", "opacity"),
					zipCode: "10001",
					active: this.isCurrent("10001", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.714021, -73.997519), new google.maps.LatLng(40.708849, -73.996017), new google.maps.LatLng(40.712915, -73.976104), new google.maps.LatLng(40.719681, -73.97516), new google.maps.LatLng(40.724137, -73.992583)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10002", "opacity"),
					zipCode: "10002",
					active: this.isCurrent("10002", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.739705, -73.99081), new google.maps.LatLng(40.729451, -73.99662), new google.maps.LatLng(40.724323, -73.992519), new google.maps.LatLng(40.722956, -73.988759), new google.maps.LatLng(40.73492, -73.979871)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10003", "opacity"),
					zipCode: "10003",
					active: this.isCurrent("10003", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.706891, -74.016104), new google.maps.LatLng(40.703814, -74.017471), new google.maps.LatLng(40.704156, -74.005508), new google.maps.LatLng(40.704156, -74.00585), new google.maps.LatLng(40.706549, -74.012344)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10004", "opacity"),
					zipCode: "10004",
					active: this.isCurrent("10004", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.704156, -74.00585), new google.maps.LatLng(40.708941, -74.010293), new google.maps.LatLng(40.706549, -74.012344)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10005", "opacity"),
					zipCode: "10005",
					active: this.isCurrent("10005", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.708941, -74.010293), new google.maps.LatLng(40.709625, -74.009951), new google.maps.LatLng(40.710309, -74.011319), new google.maps.LatLng(40.706891, -74.016104), new google.maps.LatLng(40.706549, -74.012344)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10006", "opacity"),
					zipCode: "10006",
					active: this.isCurrent("10006", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.718171, -74.013028), new google.maps.LatLng(40.713385, -74.016446), new google.maps.LatLng(40.710309, -74.011319), new google.maps.LatLng(40.709625, -74.009951), new google.maps.LatLng(40.713385, -73.998671)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10007", "opacity"),
					zipCode: "10007",
					active: this.isCurrent("10007", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.732527, -73.97406), new google.maps.LatLng(40.73492, -73.979871), new google.maps.LatLng(40.722956, -73.988759)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10009", "opacity"),
					zipCode: "10009",
					active: this.isCurrent("10009", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.73492, -73.979871), new google.maps.LatLng(40.732527, -73.97406), new google.maps.LatLng(40.736287, -73.974402), new google.maps.LatLng(40.743123, -73.971668), new google.maps.LatLng(40.744149, -73.987733), new google.maps.LatLng(40.743465, -73.992177), new google.maps.LatLng(40.739705, -73.99081)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10010", "opacity"),
					zipCode: "10010",
					active: this.isCurrent("10010", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.729451, -73.99662), new google.maps.LatLng(40.739705, -73.99081), new google.maps.LatLng(40.743465, -73.992177), new google.maps.LatLng(40.752352, -74.008242), new google.maps.LatLng(40.742782, -74.009268), new google.maps.LatLng(40.731843, -74.001064)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10011", "opacity"),
					zipCode: "10011",
					active: this.isCurrent("10011", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.724323, -73.992519), new google.maps.LatLng(40.729451, -73.99662), new google.maps.LatLng(40.731843, -74.001064), new google.maps.LatLng(40.726716, -74.003115), new google.maps.LatLng(40.719538, -73.994228)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10012", "opacity"),
					zipCode: "10012",
					active: this.isCurrent("10012", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.719538, -73.994228), new google.maps.LatLng(40.726716, -74.003115), new google.maps.LatLng(40.726716, -74.015079), new google.maps.LatLng(40.718171, -74.013028), new google.maps.LatLng(40.713385, -73.998671), new google.maps.LatLng(40.714069, -73.997304)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10013", "opacity"),
					zipCode: "10013",
					active: this.isCurrent("10013", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.726716, -74.015079), new google.maps.LatLng(40.726716, -74.003115), new google.maps.LatLng(40.731843, -74.001064), new google.maps.LatLng(40.742782, -74.009268)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10014", "opacity"),
					zipCode: "10014",
					active: this.isCurrent("10014", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.747225, -73.968591), new google.maps.LatLng(40.752011, -73.981922), new google.maps.LatLng(40.748934, -73.983973), new google.maps.LatLng(40.744149, -73.987733), new google.maps.LatLng(40.743123, -73.971668)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10016", "opacity"),
					zipCode: "10016",
					active: this.isCurrent("10016", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.747225, -73.968591), new google.maps.LatLng(40.753378, -73.963122), new google.maps.LatLng(40.757822, -73.97782), new google.maps.LatLng(40.757138, -73.978162), new google.maps.LatLng(40.753378, -73.980897), new google.maps.LatLng(40.752011, -73.981922)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10017", "opacity"),
					zipCode: "10017",
					active: this.isCurrent("10017", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.753378, -73.980897), new google.maps.LatLng(40.76124, -74.001406), new google.maps.LatLng(40.760214, -74.003115), new google.maps.LatLng(40.756112, -74.006533), new google.maps.LatLng(40.748934, -73.983973), new google.maps.LatLng(40.752011, -73.981922)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10018", "opacity"),
					zipCode: "10018",
					active: this.isCurrent("10018", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.768076, -73.98158), new google.maps.LatLng(40.773203, -73.993886), new google.maps.LatLng(40.760214, -74.003115), new google.maps.LatLng(40.76124, -74.001406), new google.maps.LatLng(40.758505, -73.981239), new google.maps.LatLng(40.758847, -73.976795), new google.maps.LatLng(40.764316, -73.973035)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10019", "opacity"),
					zipCode: "10019",
					active: this.isCurrent("10019", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.757822, -73.97782), new google.maps.LatLng(40.758847, -73.976795), new google.maps.LatLng(40.758505, -73.981239), new google.maps.LatLng(40.757138, -73.978162)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10020", "opacity"),
					zipCode: "10020",
					active: this.isCurrent("10020", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.770127, -73.94774), new google.maps.LatLng(40.777647, -73.963122), new google.maps.LatLng(40.764658, -73.972351), new google.maps.LatLng(40.758163, -73.95902)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10021", "opacity"),
					zipCode: "10021",
					active: this.isCurrent("10021", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.757822, -73.97782), new google.maps.LatLng(40.753378, -73.963122), new google.maps.LatLng(40.758163, -73.95902), new google.maps.LatLng(40.764658, -73.972351), new google.maps.LatLng(40.764316, -73.973035), new google.maps.LatLng(40.758847, -73.976795)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10022", "opacity"),
					zipCode: "10022",
					active: this.isCurrent("10022", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.779356, -73.973719), new google.maps.LatLng(40.781407, -73.988075), new google.maps.LatLng(40.773203, -73.993886), new google.maps.LatLng(40.768076, -73.98158)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10023", "opacity"),
					zipCode: "10023",
					active: this.isCurrent("10023", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.788585, -73.966882), new google.maps.LatLng(40.808411, -73.96654), new google.maps.LatLng(40.817982, -73.962097), new google.maps.LatLng(40.781407, -73.988075), new google.maps.LatLng(40.779356, -73.973719)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10024", "opacity"),
					zipCode: "10024",
					active: this.isCurrent("10024", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.800549, -73.958337), new google.maps.LatLng(40.806018, -73.959362), new google.maps.LatLng(40.808411, -73.96654), new google.maps.LatLng(40.788585, -73.966882)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10025", "opacity"),
					zipCode: "10025",
					active: this.isCurrent("10025", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.803283, -73.944664), new google.maps.LatLng(40.806018, -73.959362), new google.maps.LatLng(40.800549, -73.958337), new google.maps.LatLng(40.796789, -73.949108), new google.maps.LatLng(40.800549, -73.946373)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10026", "opacity"),
					zipCode: "10026",
					active: this.isCurrent("10026", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.806018, -73.959362), new google.maps.LatLng(40.803283, -73.944664), new google.maps.LatLng(40.809436, -73.939879), new google.maps.LatLng(40.812854, -73.941929), new google.maps.LatLng(40.817298, -73.948082), new google.maps.LatLng(40.823109, -73.957995), new google.maps.LatLng(40.817982, -73.962097), new google.maps.LatLng(40.808411, -73.96654)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10027", "opacity"),
					zipCode: "10027",
					active: this.isCurrent("10027", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.777647, -73.942613), new google.maps.LatLng(40.782091, -73.960046), new google.maps.LatLng(40.777647, -73.963122), new google.maps.LatLng(40.770127, -73.94774)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10028", "opacity"),
					zipCode: "10028",
					active: this.isCurrent("10028", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.794054, -73.930991), new google.maps.LatLng(40.800549, -73.946373), new google.maps.LatLng(40.796789, -73.949108), new google.maps.LatLng(40.787902, -73.955602), new google.maps.LatLng(40.782774, -73.943639)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10029", "opacity"),
					zipCode: "10029",
					active: this.isCurrent("10029", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.823793, -73.94398), new google.maps.LatLng(40.817298, -73.948082), new google.maps.LatLng(40.812854, -73.941929), new google.maps.LatLng(40.820374, -73.936119)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10030", "opacity"),
					zipCode: "10030",
					active: this.isCurrent("10030", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.823793, -73.94398), new google.maps.LatLng(40.830287, -73.94022), new google.maps.LatLng(40.827894, -73.954577), new google.maps.LatLng(40.823109, -73.957995), new google.maps.LatLng(40.817298, -73.948082)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10031", "opacity"),
					zipCode: "10031",
					active: this.isCurrent("10031", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.827894, -73.954577), new google.maps.LatLng(40.830287, -73.94022), new google.maps.LatLng(40.836098, -73.934409), new google.maps.LatLng(40.842251, -73.930991), new google.maps.LatLng(40.850796, -73.946715)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10032", "opacity"),
					zipCode: "10032",
					active: this.isCurrent("10032", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.847036, -73.928598), new google.maps.LatLng(40.863102, -73.933726), new google.maps.LatLng(40.869938, -73.932358), new google.maps.LatLng(40.850796, -73.946715), new google.maps.LatLng(40.842251, -73.930991)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10033", "opacity"),
					zipCode: "10033",
					active: this.isCurrent("10033", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.869938, -73.932358), new google.maps.LatLng(40.863102, -73.933726), new google.maps.LatLng(40.860025, -73.918344)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10034", "opacity"),
					zipCode: "10034",
					active: this.isCurrent("10034", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.807385, -73.933384), new google.maps.LatLng(40.809436, -73.939879), new google.maps.LatLng(40.803283, -73.944664), new google.maps.LatLng(40.800549, -73.946373), new google.maps.LatLng(40.794054, -73.930991)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10035", "opacity"),
					zipCode: "10035",
					active: this.isCurrent("10035", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.757138, -73.978162), new google.maps.LatLng(40.758505, -73.981239), new google.maps.LatLng(40.76124, -74.001406), new google.maps.LatLng(40.753378, -73.980897)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10036", "opacity"),
					zipCode: "10036",
					active: this.isCurrent("10036", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.819349, -73.934068), new google.maps.LatLng(40.820374, -73.936119), new google.maps.LatLng(40.812854, -73.941929), new google.maps.LatLng(40.809436, -73.939879), new google.maps.LatLng(40.807385, -73.933384)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10037", "opacity"),
					zipCode: "10037",
					active: this.isCurrent("10037", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.704156, -74.00585), new google.maps.LatLng(40.704156, -74.005508), new google.maps.LatLng(40.707916, -73.999355), new google.maps.LatLng(40.714069, -73.997304), new google.maps.LatLng(40.713385, -73.998671), new google.maps.LatLng(40.709625, -74.009951), new google.maps.LatLng(40.708941, -74.010293)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10038", "opacity"),
					zipCode: "10038",
					active: this.isCurrent("10038", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.836098, -73.934409), new google.maps.LatLng(40.830287, -73.94022), new google.maps.LatLng(40.823793, -73.94398), new google.maps.LatLng(40.820374, -73.936119), new google.maps.LatLng(40.819349, -73.934068)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10039", "opacity"),
					zipCode: "10039",
					active: this.isCurrent("10039", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.847036, -73.928598), new google.maps.LatLng(40.860025, -73.918344), new google.maps.LatLng(40.863102, -73.933726)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10040", "opacity"),
					zipCode: "10040",
					active: this.isCurrent("10040", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.782774, -73.943639), new google.maps.LatLng(40.787902, -73.955602), new google.maps.LatLng(40.782091, -73.960046), new google.maps.LatLng(40.777647, -73.942613)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10128", "opacity"),
					zipCode: "10128",
					active: this.isCurrent("10128", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		}), e = RandomColor.generate(), ZipAreasMap.zipCodes.push({
			boundaries: [new google.maps.LatLng(40.703814, -74.017471), new google.maps.LatLng(40.706891, -74.016104), new google.maps.LatLng(40.710309, -74.011319), new google.maps.LatLng(40.713385, -74.016446)],
			polygon: function() {
				return new google.maps.Polygon({
					paths: this.boundaries,
					strokeColor: e,
					strokeOpacity: .8,
					strokeWeight: 2,
					fillColor: e,
					fillOpacity: this.isCurrent("10280", "opacity"),
					zipCode: "10280",
					active: this.isCurrent("10280", "active")
				})
			},
			isCurrent: function(e, t) {
				var n;
				return n = ZipAreasMap.selectedZipCodes.filter(function(t) {
					return t === e
				}), n.length && "opacity" === t ? .5 : "opacity" === t ? 0 : n.length && "active" === t ? !0 : !1
			}
		})
	}.call(this);