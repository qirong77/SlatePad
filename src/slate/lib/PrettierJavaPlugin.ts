import prettier from 'prettier/standalone'

export var PrettierPluginJava = (function (oc) {
  'use strict'
  var W =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {}
  function sc(e) {
    if (e.__esModule) return e
    var t = e.default
    if (typeof t == 'function') {
      var n = function r() {
        if (this instanceof r) {
          var i = [null]
          i.push.apply(i, arguments)
          var a = Function.bind.apply(t, i)
          return new a()
        }
        return t.apply(this, arguments)
      }
      n.prototype = t.prototype
    } else n = {}
    return (
      Object.defineProperty(n, '__esModule', { value: !0 }),
      Object.keys(e).forEach(function (r) {
        var i = Object.getOwnPropertyDescriptor(e, r)
        Object.defineProperty(
          n,
          r,
          i.get
            ? i
            : {
                enumerable: !0,
                get: function () {
                  return e[r]
                }
              }
        )
      }),
      n
    )
  }
  var Ri = '6.5.0'
  function le(e) {
    return e && e.length === 0
  }
  function Kt(e) {
    return e == null ? [] : Object.keys(e)
  }
  function qe(e) {
    for (var t = [], n = Object.keys(e), r = 0; r < n.length; r++) t.push(e[n[r]])
    return t
  }
  function uc(e, t) {
    for (var n = [], r = Kt(e), i = 0; i < r.length; i++) {
      var a = r[i]
      n.push(t.call(null, e[a], a))
    }
    return n
  }
  function P(e, t) {
    for (var n = [], r = 0; r < e.length; r++) n.push(t.call(null, e[r], r))
    return n
  }
  function rt(e) {
    for (var t = [], n = 0; n < e.length; n++) {
      var r = e[n]
      Array.isArray(r) ? (t = t.concat(rt(r))) : t.push(r)
    }
    return t
  }
  function dt(e) {
    return le(e) ? void 0 : e[0]
  }
  function Ia(e) {
    var t = e && e.length
    return t ? e[t - 1] : void 0
  }
  function V(e, t) {
    if (Array.isArray(e)) for (var n = 0; n < e.length; n++) t.call(null, e[n], n)
    else if (Oi(e))
      for (var r = Kt(e), n = 0; n < r.length; n++) {
        var i = r[n],
          a = e[i]
        t.call(null, a, i)
      }
    else throw Error('non exhaustive match')
  }
  function Ft(e) {
    return typeof e == 'string'
  }
  function ht(e) {
    return e === void 0
  }
  function $t(e) {
    return e instanceof Function
  }
  function Ge(e, t) {
    return t === void 0 && (t = 1), e.slice(t, e.length)
  }
  function Jn(e, t) {
    return t === void 0 && (t = 1), e.slice(0, e.length - t)
  }
  function Tt(e, t) {
    var n = []
    if (Array.isArray(e))
      for (var r = 0; r < e.length; r++) {
        var i = e[r]
        t.call(null, i) && n.push(i)
      }
    return n
  }
  function un(e, t) {
    return Tt(e, function (n) {
      return !t(n)
    })
  }
  function mt(e, t) {
    for (var n = Object.keys(e), r = {}, i = 0; i < n.length; i++) {
      var a = n[i],
        o = e[a]
      t(o) && (r[a] = o)
    }
    return r
  }
  function G(e, t) {
    return Oi(e) ? e.hasOwnProperty(t) : !1
  }
  function Fe(e, t) {
    return (
      yn(e, function (n) {
        return n === t
      }) !== void 0
    )
  }
  function it(e) {
    for (var t = [], n = 0; n < e.length; n++) t.push(e[n])
    return t
  }
  function qn(e) {
    var t = {}
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
    return t
  }
  function yn(e, t) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n]
      if (t.call(null, r)) return r
    }
  }
  function cc(e, t) {
    for (var n = [], r = 0; r < e.length; r++) {
      var i = e[r]
      t.call(null, i) && n.push(i)
    }
    return n
  }
  function Ke(e, t, n) {
    for (
      var r = Array.isArray(e), i = r ? e : qe(e), a = r ? [] : Kt(e), o = n, s = 0;
      s < i.length;
      s++
    )
      o = t.call(null, o, i[s], r ? s : a[s])
    return o
  }
  function Hn(e) {
    return un(e, function (t) {
      return t == null
    })
  }
  function Ui(e, t) {
    t === void 0 &&
      (t = function (r) {
        return r
      })
    var n = []
    return Ke(
      e,
      function (r, i) {
        var a = t(i)
        return Fe(n, a) ? r : (n.push(a), r.concat(i))
      },
      []
    )
  }
  function gt(e) {
    return Array.isArray(e)
  }
  function Wt(e) {
    return e instanceof RegExp
  }
  function Oi(e) {
    return e instanceof Object
  }
  function vt(e, t) {
    for (var n = 0; n < e.length; n++) if (!t(e[n], n)) return !1
    return !0
  }
  function hr(e, t) {
    return un(e, function (n) {
      return Fe(t, n)
    })
  }
  function Ba(e, t) {
    for (var n = 0; n < e.length; n++) if (t(e[n])) return !0
    return !1
  }
  function lc(e, t) {
    for (var n = 0; n < e.length; n++) if (e[n] === t) return n
    return -1
  }
  function Lt(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
    for (var r = 0; r < t.length; r++)
      for (var i = t[r], a = Kt(i), o = 0; o < a.length; o++) {
        var s = a[o]
        e[s] = i[s]
      }
    return e
  }
  function fc(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
    for (var r = 0; r < t.length; r++) {
      var i = t[r]
      if (!ht(i))
        for (var a = Kt(i), o = 0; o < a.length; o++) {
          var s = a[o]
          G(e, s) || (e[s] = i[s])
        }
    }
    return e
  }
  function mr() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    return fc.apply(null, [{}].concat(e))
  }
  function Fa(e, t) {
    var n = {}
    return (
      V(e, function (r) {
        var i = t(r),
          a = n[i]
        a ? a.push(r) : (n[i] = [r])
      }),
      n
    )
  }
  function Ma(e, t) {
    for (var n = qn(e), r = Kt(t), i = 0; i < r.length; i++) {
      var a = r[i],
        o = t[a]
      n[a] = o
    }
    return n
  }
  function we() {}
  function ba(e) {
    return e
  }
  function pc(e) {
    for (var t = [], n = 0; n < e.length; n++) {
      var r = e[n]
      t.push(r !== void 0 ? r : void 0)
    }
    return t
  }
  function Ni(e) {
    console && console.error && console.error('Error: ' + e)
  }
  function _i(e) {
    console && console.warn && console.warn('Warning: ' + e)
  }
  function Pa() {
    return typeof Map == 'function'
  }
  function dc(e, t) {
    t.forEach(function (n) {
      var r = n.prototype
      Object.getOwnPropertyNames(r).forEach(function (i) {
        if (i !== 'constructor') {
          var a = Object.getOwnPropertyDescriptor(r, i)
          a && (a.get || a.set)
            ? Object.defineProperty(e.prototype, i, a)
            : (e.prototype[i] = n.prototype[i])
        }
      })
    })
  }
  function ka(e) {
    function t() {}
    t.prototype = e
    var n = new t()
    function r() {
      return typeof n.bar
    }
    return r(), r(), e
  }
  function vr(e) {
    return e[e.length - 1]
  }
  function xa(e) {
    var t = new Date().getTime(),
      n = e(),
      r = new Date().getTime(),
      i = r - t
    return { time: i, value: n }
  }
  var cn = {},
    hc = {
      get exports() {
        return cn
      },
      set exports(e) {
        cn = e
      }
    }
  ;(function (e) {
    ;(function (t, n) {
      e.exports ? (e.exports = n()) : (t.regexpToAst = n())
    })(typeof self < 'u' ? self : W, function () {
      function t() {}
      ;(t.prototype.saveState = function () {
        return { idx: this.idx, input: this.input, groupIdx: this.groupIdx }
      }),
        (t.prototype.restoreState = function (l) {
          ;(this.idx = l.idx), (this.input = l.input), (this.groupIdx = l.groupIdx)
        }),
        (t.prototype.pattern = function (l) {
          ;(this.idx = 0), (this.input = l), (this.groupIdx = 0), this.consumeChar('/')
          var T = this.disjunction()
          this.consumeChar('/')
          for (
            var E = {
              type: 'Flags',
              global: !1,
              ignoreCase: !1,
              multiLine: !1,
              unicode: !1,
              sticky: !1
            };
            this.isRegExpFlag();

          )
            switch (this.popChar()) {
              case 'g':
                s(E, 'global')
                break
              case 'i':
                s(E, 'ignoreCase')
                break
              case 'm':
                s(E, 'multiLine')
                break
              case 'u':
                s(E, 'unicode')
                break
              case 'y':
                s(E, 'sticky')
                break
            }
          if (this.idx !== this.input.length)
            throw Error('Redundant input: ' + this.input.substring(this.idx))
          return { type: 'Pattern', flags: E, value: T }
        }),
        (t.prototype.disjunction = function () {
          var l = []
          for (l.push(this.alternative()); this.peekChar() === '|'; )
            this.consumeChar('|'), l.push(this.alternative())
          return { type: 'Disjunction', value: l }
        }),
        (t.prototype.alternative = function () {
          for (var l = []; this.isTerm(); ) l.push(this.term())
          return { type: 'Alternative', value: l }
        }),
        (t.prototype.term = function () {
          return this.isAssertion() ? this.assertion() : this.atom()
        }),
        (t.prototype.assertion = function () {
          switch (this.popChar()) {
            case '^':
              return { type: 'StartAnchor' }
            case '$':
              return { type: 'EndAnchor' }
            case '\\':
              switch (this.popChar()) {
                case 'b':
                  return { type: 'WordBoundary' }
                case 'B':
                  return { type: 'NonWordBoundary' }
              }
              throw Error('Invalid Assertion Escape')
            case '(':
              this.consumeChar('?')
              var l
              switch (this.popChar()) {
                case '=':
                  l = 'Lookahead'
                  break
                case '!':
                  l = 'NegativeLookahead'
                  break
              }
              u(l)
              var T = this.disjunction()
              return this.consumeChar(')'), { type: l, value: T }
          }
          c()
        }),
        (t.prototype.quantifier = function (l) {
          var T
          switch (this.popChar()) {
            case '*':
              T = { atLeast: 0, atMost: 1 / 0 }
              break
            case '+':
              T = { atLeast: 1, atMost: 1 / 0 }
              break
            case '?':
              T = { atLeast: 0, atMost: 1 }
              break
            case '{':
              var E = this.integerIncludingZero()
              switch (this.popChar()) {
                case '}':
                  T = { atLeast: E, atMost: E }
                  break
                case ',':
                  var R
                  this.isDigit()
                    ? ((R = this.integerIncludingZero()), (T = { atLeast: E, atMost: R }))
                    : (T = { atLeast: E, atMost: 1 / 0 }),
                    this.consumeChar('}')
                  break
              }
              if (l === !0 && T === void 0) return
              u(T)
              break
          }
          if (!(l === !0 && T === void 0))
            return (
              u(T),
              this.peekChar(0) === '?' ? (this.consumeChar('?'), (T.greedy = !1)) : (T.greedy = !0),
              (T.type = 'Quantifier'),
              T
            )
        }),
        (t.prototype.atom = function () {
          var l
          switch (this.peekChar()) {
            case '.':
              l = this.dotAll()
              break
            case '\\':
              l = this.atomEscape()
              break
            case '[':
              l = this.characterClass()
              break
            case '(':
              l = this.group()
              break
          }
          return (
            l === void 0 && this.isPatternCharacter() && (l = this.patternCharacter()),
            u(l),
            this.isQuantifier() && (l.quantifier = this.quantifier()),
            l
          )
        }),
        (t.prototype.dotAll = function () {
          return (
            this.consumeChar('.'),
            {
              type: 'Set',
              complement: !0,
              value: [
                a(`
`),
                a('\r'),
                a('\u2028'),
                a('\u2029')
              ]
            }
          )
        }),
        (t.prototype.atomEscape = function () {
          switch ((this.consumeChar('\\'), this.peekChar())) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
              return this.decimalEscapeAtom()
            case 'd':
            case 'D':
            case 's':
            case 'S':
            case 'w':
            case 'W':
              return this.characterClassEscape()
            case 'f':
            case 'n':
            case 'r':
            case 't':
            case 'v':
              return this.controlEscapeAtom()
            case 'c':
              return this.controlLetterEscapeAtom()
            case '0':
              return this.nulCharacterAtom()
            case 'x':
              return this.hexEscapeSequenceAtom()
            case 'u':
              return this.regExpUnicodeEscapeSequenceAtom()
            default:
              return this.identityEscapeAtom()
          }
        }),
        (t.prototype.decimalEscapeAtom = function () {
          var l = this.positiveInteger()
          return { type: 'GroupBackReference', value: l }
        }),
        (t.prototype.characterClassEscape = function () {
          var l,
            T = !1
          switch (this.popChar()) {
            case 'd':
              l = f
              break
            case 'D':
              ;(l = f), (T = !0)
              break
            case 's':
              l = C
              break
            case 'S':
              ;(l = C), (T = !0)
              break
            case 'w':
              l = m
              break
            case 'W':
              ;(l = m), (T = !0)
              break
          }
          return u(l), { type: 'Set', value: l, complement: T }
        }),
        (t.prototype.controlEscapeAtom = function () {
          var l
          switch (this.popChar()) {
            case 'f':
              l = a('\f')
              break
            case 'n':
              l = a(`
`)
              break
            case 'r':
              l = a('\r')
              break
            case 't':
              l = a('	')
              break
            case 'v':
              l = a('\v')
              break
          }
          return u(l), { type: 'Character', value: l }
        }),
        (t.prototype.controlLetterEscapeAtom = function () {
          this.consumeChar('c')
          var l = this.popChar()
          if (/[a-zA-Z]/.test(l) === !1) throw Error('Invalid ')
          var T = l.toUpperCase().charCodeAt(0) - 64
          return { type: 'Character', value: T }
        }),
        (t.prototype.nulCharacterAtom = function () {
          return this.consumeChar('0'), { type: 'Character', value: a('\0') }
        }),
        (t.prototype.hexEscapeSequenceAtom = function () {
          return this.consumeChar('x'), this.parseHexDigits(2)
        }),
        (t.prototype.regExpUnicodeEscapeSequenceAtom = function () {
          return this.consumeChar('u'), this.parseHexDigits(4)
        }),
        (t.prototype.identityEscapeAtom = function () {
          var l = this.popChar()
          return { type: 'Character', value: a(l) }
        }),
        (t.prototype.classPatternCharacterAtom = function () {
          switch (this.peekChar()) {
            case `
`:
            case '\r':
            case '\u2028':
            case '\u2029':
            case '\\':
            case ']':
              throw Error('TBD')
            default:
              var l = this.popChar()
              return { type: 'Character', value: a(l) }
          }
        }),
        (t.prototype.characterClass = function () {
          var l = [],
            T = !1
          for (
            this.consumeChar('['), this.peekChar(0) === '^' && (this.consumeChar('^'), (T = !0));
            this.isClassAtom();

          ) {
            var E = this.classAtom(),
              R = E.type === 'Character'
            if (R && this.isRangeDash()) {
              this.consumeChar('-')
              var U = this.classAtom(),
                j = U.type === 'Character'
              if (j) {
                if (U.value < E.value) throw Error('Range out of order in character class')
                l.push({ from: E.value, to: U.value })
              } else o(E.value, l), l.push(a('-')), o(U.value, l)
            } else o(E.value, l)
          }
          return this.consumeChar(']'), { type: 'Set', complement: T, value: l }
        }),
        (t.prototype.classAtom = function () {
          switch (this.peekChar()) {
            case ']':
            case `
`:
            case '\r':
            case '\u2028':
            case '\u2029':
              throw Error('TBD')
            case '\\':
              return this.classEscape()
            default:
              return this.classPatternCharacterAtom()
          }
        }),
        (t.prototype.classEscape = function () {
          switch ((this.consumeChar('\\'), this.peekChar())) {
            case 'b':
              return this.consumeChar('b'), { type: 'Character', value: a('\b') }
            case 'd':
            case 'D':
            case 's':
            case 'S':
            case 'w':
            case 'W':
              return this.characterClassEscape()
            case 'f':
            case 'n':
            case 'r':
            case 't':
            case 'v':
              return this.controlEscapeAtom()
            case 'c':
              return this.controlLetterEscapeAtom()
            case '0':
              return this.nulCharacterAtom()
            case 'x':
              return this.hexEscapeSequenceAtom()
            case 'u':
              return this.regExpUnicodeEscapeSequenceAtom()
            default:
              return this.identityEscapeAtom()
          }
        }),
        (t.prototype.group = function () {
          var l = !0
          switch ((this.consumeChar('('), this.peekChar(0))) {
            case '?':
              this.consumeChar('?'), this.consumeChar(':'), (l = !1)
              break
            default:
              this.groupIdx++
              break
          }
          var T = this.disjunction()
          this.consumeChar(')')
          var E = { type: 'Group', capturing: l, value: T }
          return l && (E.idx = this.groupIdx), E
        }),
        (t.prototype.positiveInteger = function () {
          var l = this.popChar()
          if (i.test(l) === !1) throw Error('Expecting a positive integer')
          for (; r.test(this.peekChar(0)); ) l += this.popChar()
          return parseInt(l, 10)
        }),
        (t.prototype.integerIncludingZero = function () {
          var l = this.popChar()
          if (r.test(l) === !1) throw Error('Expecting an integer')
          for (; r.test(this.peekChar(0)); ) l += this.popChar()
          return parseInt(l, 10)
        }),
        (t.prototype.patternCharacter = function () {
          var l = this.popChar()
          switch (l) {
            case `
`:
            case '\r':
            case '\u2028':
            case '\u2029':
            case '^':
            case '$':
            case '\\':
            case '.':
            case '*':
            case '+':
            case '?':
            case '(':
            case ')':
            case '[':
            case '|':
              throw Error('TBD')
            default:
              return { type: 'Character', value: a(l) }
          }
        }),
        (t.prototype.isRegExpFlag = function () {
          switch (this.peekChar(0)) {
            case 'g':
            case 'i':
            case 'm':
            case 'u':
            case 'y':
              return !0
            default:
              return !1
          }
        }),
        (t.prototype.isRangeDash = function () {
          return this.peekChar() === '-' && this.isClassAtom(1)
        }),
        (t.prototype.isDigit = function () {
          return r.test(this.peekChar(0))
        }),
        (t.prototype.isClassAtom = function (l) {
          switch ((l === void 0 && (l = 0), this.peekChar(l))) {
            case ']':
            case `
`:
            case '\r':
            case '\u2028':
            case '\u2029':
              return !1
            default:
              return !0
          }
        }),
        (t.prototype.isTerm = function () {
          return this.isAtom() || this.isAssertion()
        }),
        (t.prototype.isAtom = function () {
          if (this.isPatternCharacter()) return !0
          switch (this.peekChar(0)) {
            case '.':
            case '\\':
            case '[':
            case '(':
              return !0
            default:
              return !1
          }
        }),
        (t.prototype.isAssertion = function () {
          switch (this.peekChar(0)) {
            case '^':
            case '$':
              return !0
            case '\\':
              switch (this.peekChar(1)) {
                case 'b':
                case 'B':
                  return !0
                default:
                  return !1
              }
            case '(':
              return (
                this.peekChar(1) === '?' && (this.peekChar(2) === '=' || this.peekChar(2) === '!')
              )
            default:
              return !1
          }
        }),
        (t.prototype.isQuantifier = function () {
          var l = this.saveState()
          try {
            return this.quantifier(!0) !== void 0
          } catch {
            return !1
          } finally {
            this.restoreState(l)
          }
        }),
        (t.prototype.isPatternCharacter = function () {
          switch (this.peekChar()) {
            case '^':
            case '$':
            case '\\':
            case '.':
            case '*':
            case '+':
            case '?':
            case '(':
            case ')':
            case '[':
            case '|':
            case '/':
            case `
`:
            case '\r':
            case '\u2028':
            case '\u2029':
              return !1
            default:
              return !0
          }
        }),
        (t.prototype.parseHexDigits = function (l) {
          for (var T = '', E = 0; E < l; E++) {
            var R = this.popChar()
            if (n.test(R) === !1) throw Error('Expecting a HexDecimal digits')
            T += R
          }
          var U = parseInt(T, 16)
          return { type: 'Character', value: U }
        }),
        (t.prototype.peekChar = function (l) {
          return l === void 0 && (l = 0), this.input[this.idx + l]
        }),
        (t.prototype.popChar = function () {
          var l = this.peekChar(0)
          return this.consumeChar(), l
        }),
        (t.prototype.consumeChar = function (l) {
          if (l !== void 0 && this.input[this.idx] !== l)
            throw Error(
              "Expected: '" +
                l +
                "' but found: '" +
                this.input[this.idx] +
                "' at offset: " +
                this.idx
            )
          if (this.idx >= this.input.length) throw Error('Unexpected end of input')
          this.idx++
        })
      var n = /[0-9a-fA-F]/,
        r = /[0-9]/,
        i = /[1-9]/
      function a(l) {
        return l.charCodeAt(0)
      }
      function o(l, T) {
        l.length !== void 0
          ? l.forEach(function (E) {
              T.push(E)
            })
          : T.push(l)
      }
      function s(l, T) {
        if (l[T] === !0) throw 'duplicate flag ' + T
        l[T] = !0
      }
      function u(l) {
        if (l === void 0) throw Error('Internal Error - Should never get here!')
      }
      function c() {
        throw Error('Internal Error - Should never get here!')
      }
      var p,
        f = []
      for (p = a('0'); p <= a('9'); p++) f.push(p)
      var m = [a('_')].concat(f)
      for (p = a('a'); p <= a('z'); p++) m.push(p)
      for (p = a('A'); p <= a('Z'); p++) m.push(p)
      var C = [
        a(' '),
        a('\f'),
        a(`
`),
        a('\r'),
        a('	'),
        a('\v'),
        a('	'),
        a(' '),
        a(' '),
        a(' '),
        a(' '),
        a(' '),
        a(' '),
        a(' '),
        a(' '),
        a(' '),
        a(' '),
        a(' '),
        a(' '),
        a(' '),
        a('\u2028'),
        a('\u2029'),
        a(' '),
        a(' '),
        a('　'),
        a('\uFEFF')
      ]
      function A() {}
      return (
        (A.prototype.visitChildren = function (l) {
          for (var T in l) {
            var E = l[T]
            l.hasOwnProperty(T) &&
              (E.type !== void 0
                ? this.visit(E)
                : Array.isArray(E) &&
                  E.forEach(function (R) {
                    this.visit(R)
                  }, this))
          }
        }),
        (A.prototype.visit = function (l) {
          switch (l.type) {
            case 'Pattern':
              this.visitPattern(l)
              break
            case 'Flags':
              this.visitFlags(l)
              break
            case 'Disjunction':
              this.visitDisjunction(l)
              break
            case 'Alternative':
              this.visitAlternative(l)
              break
            case 'StartAnchor':
              this.visitStartAnchor(l)
              break
            case 'EndAnchor':
              this.visitEndAnchor(l)
              break
            case 'WordBoundary':
              this.visitWordBoundary(l)
              break
            case 'NonWordBoundary':
              this.visitNonWordBoundary(l)
              break
            case 'Lookahead':
              this.visitLookahead(l)
              break
            case 'NegativeLookahead':
              this.visitNegativeLookahead(l)
              break
            case 'Character':
              this.visitCharacter(l)
              break
            case 'Set':
              this.visitSet(l)
              break
            case 'Group':
              this.visitGroup(l)
              break
            case 'GroupBackReference':
              this.visitGroupBackReference(l)
              break
            case 'Quantifier':
              this.visitQuantifier(l)
              break
          }
          this.visitChildren(l)
        }),
        (A.prototype.visitPattern = function (l) {}),
        (A.prototype.visitFlags = function (l) {}),
        (A.prototype.visitDisjunction = function (l) {}),
        (A.prototype.visitAlternative = function (l) {}),
        (A.prototype.visitStartAnchor = function (l) {}),
        (A.prototype.visitEndAnchor = function (l) {}),
        (A.prototype.visitWordBoundary = function (l) {}),
        (A.prototype.visitNonWordBoundary = function (l) {}),
        (A.prototype.visitLookahead = function (l) {}),
        (A.prototype.visitNegativeLookahead = function (l) {}),
        (A.prototype.visitCharacter = function (l) {}),
        (A.prototype.visitSet = function (l) {}),
        (A.prototype.visitGroup = function (l) {}),
        (A.prototype.visitGroupBackReference = function (l) {}),
        (A.prototype.visitQuantifier = function (l) {}),
        { RegExpParser: t, BaseRegExpVisitor: A, VERSION: '0.4.0' }
      )
    })
  })(hc)
  var Dr = {},
    mc = new cn.RegExpParser()
  function Er(e) {
    var t = e.toString()
    if (Dr.hasOwnProperty(t)) return Dr[t]
    var n = mc.pattern(t)
    return (Dr[t] = n), n
  }
  function vc() {
    Dr = {}
  }
  var Dc =
      (globalThis && globalThis.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })(),
    wa = 'Complement Sets are not supported for first char optimization',
    yr = `Unable to use "first char" lexer optimizations:
`
  function Ec(e, t) {
    t === void 0 && (t = !1)
    try {
      var n = Er(e),
        r = Ii(n.value, {}, n.flags.ignoreCase)
      return r
    } catch (a) {
      if (a.message === wa)
        t &&
          _i(
            '' +
              yr +
              ('	Unable to optimize: < ' +
                e.toString() +
                ` >
`) +
              `	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`
          )
      else {
        var i = ''
        t &&
          (i = `
	This will disable the lexer's first char optimizations.
	See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),
          Ni(
            yr +
              `
` +
              ('	Failed parsing: < ' +
                e.toString() +
                ` >
`) +
              ('	Using the regexp-to-ast library version: ' +
                cn.VERSION +
                `
`) +
              '	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues' +
              i
          )
      }
    }
    return []
  }
  function Ii(e, t, n) {
    switch (e.type) {
      case 'Disjunction':
        for (var r = 0; r < e.value.length; r++) Ii(e.value[r], t, n)
        break
      case 'Alternative':
        for (var i = e.value, r = 0; r < i.length; r++) {
          var a = i[r]
          switch (a.type) {
            case 'EndAnchor':
            case 'GroupBackReference':
            case 'Lookahead':
            case 'NegativeLookahead':
            case 'StartAnchor':
            case 'WordBoundary':
            case 'NonWordBoundary':
              continue
          }
          var o = a
          switch (o.type) {
            case 'Character':
              Cr(o.value, t, n)
              break
            case 'Set':
              if (o.complement === !0) throw Error(wa)
              V(o.value, function (c) {
                if (typeof c == 'number') Cr(c, t, n)
                else {
                  var p = c
                  if (n === !0) for (var f = p.from; f <= p.to; f++) Cr(f, t, n)
                  else {
                    for (var f = p.from; f <= p.to && f < Yn; f++) Cr(f, t, n)
                    if (p.to >= Yn)
                      for (
                        var m = p.from >= Yn ? p.from : Yn, C = p.to, A = en(m), l = en(C), T = A;
                        T <= l;
                        T++
                      )
                        t[T] = T
                  }
                }
              })
              break
            case 'Group':
              Ii(o.value, t, n)
              break
            default:
              throw Error('Non Exhaustive Match')
          }
          var s = o.quantifier !== void 0 && o.quantifier.atLeast === 0
          if ((o.type === 'Group' && Bi(o) === !1) || (o.type !== 'Group' && s === !1)) break
        }
        break
      default:
        throw Error('non exhaustive match!')
    }
    return qe(t)
  }
  function Cr(e, t, n) {
    var r = en(e)
    ;(t[r] = r), n === !0 && yc(e, t)
  }
  function yc(e, t) {
    var n = String.fromCharCode(e),
      r = n.toUpperCase()
    if (r !== n) {
      var i = en(r.charCodeAt(0))
      t[i] = i
    } else {
      var a = n.toLowerCase()
      if (a !== n) {
        var i = en(a.charCodeAt(0))
        t[i] = i
      }
    }
  }
  function ja(e, t) {
    return yn(e.value, function (n) {
      if (typeof n == 'number') return Fe(t, n)
      var r = n
      return (
        yn(t, function (i) {
          return r.from <= i && i <= r.to
        }) !== void 0
      )
    })
  }
  function Bi(e) {
    return e.quantifier && e.quantifier.atLeast === 0
      ? !0
      : e.value
      ? gt(e.value)
        ? vt(e.value, Bi)
        : Bi(e.value)
      : !1
  }
  var Cc = (function (e) {
    Dc(t, e)
    function t(n) {
      var r = e.call(this) || this
      return (r.targetCharCodes = n), (r.found = !1), r
    }
    return (
      (t.prototype.visitChildren = function (n) {
        if (this.found !== !0) {
          switch (n.type) {
            case 'Lookahead':
              this.visitLookahead(n)
              return
            case 'NegativeLookahead':
              this.visitNegativeLookahead(n)
              return
          }
          e.prototype.visitChildren.call(this, n)
        }
      }),
      (t.prototype.visitCharacter = function (n) {
        Fe(this.targetCharCodes, n.value) && (this.found = !0)
      }),
      (t.prototype.visitSet = function (n) {
        n.complement
          ? ja(n, this.targetCharCodes) === void 0 && (this.found = !0)
          : ja(n, this.targetCharCodes) !== void 0 && (this.found = !0)
      }),
      t
    )
  })(cn.BaseRegExpVisitor)
  function Fi(e, t) {
    if (t instanceof RegExp) {
      var n = Er(t),
        r = new Cc(e)
      return r.visit(n), r.found
    } else
      return (
        yn(t, function (i) {
          return Fe(e, i.charCodeAt(0))
        }) !== void 0
      )
  }
  var Va =
      (globalThis && globalThis.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })(),
    Mt = 'PATTERN',
    ln = 'defaultMode',
    Ar = 'modes',
    Ga = typeof new RegExp('(?:)').sticky == 'boolean'
  function Ac(e, t) {
    t = mr(t, {
      useSticky: Ga,
      debug: !1,
      safeMode: !1,
      positionTracking: 'full',
      lineTerminatorCharacters: [
        '\r',
        `
`
      ],
      tracer: function (R, U) {
        return U()
      }
    })
    var n = t.tracer
    n('initCharCodeToOptimizedIndexMap', function () {
      Wc()
    })
    var r
    n('Reject Lexer.NA', function () {
      r = un(e, function (R) {
        return R[Mt] === Rt.NA
      })
    })
    var i = !1,
      a
    n('Transform Patterns', function () {
      ;(i = !1),
        (a = P(r, function (R) {
          var U = R[Mt]
          if (Wt(U)) {
            var j = U.source
            return j.length === 1 && j !== '^' && j !== '$' && j !== '.'
              ? j
              : j.length === 2 &&
                j[0] === '\\' &&
                !Fe(
                  ['d', 'D', 's', 'S', 't', 'r', 'n', 't', '0', 'c', 'b', 'B', 'f', 'v', 'w', 'W'],
                  j[1]
                )
              ? j[1]
              : t.useSticky
              ? Wa(U)
              : Ka(U)
          } else {
            if ($t(U)) return (i = !0), { exec: U }
            if (G(U, 'exec')) return (i = !0), U
            if (typeof U == 'string') {
              if (U.length === 1) return U
              var Ne = U.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'),
                Je = new RegExp(Ne)
              return t.useSticky ? Wa(Je) : Ka(Je)
            } else throw Error('non exhaustive match')
          }
        }))
    })
    var o, s, u, c, p
    n('misc mapping', function () {
      ;(o = P(r, function (R) {
        return R.tokenTypeIdx
      })),
        (s = P(r, function (R) {
          var U = R.GROUP
          if (U !== Rt.SKIPPED) {
            if (Ft(U)) return U
            if (ht(U)) return !1
            throw Error('non exhaustive match')
          }
        })),
        (u = P(r, function (R) {
          var U = R.LONGER_ALT
          if (U) {
            var j = lc(r, U)
            return j
          }
        })),
        (c = P(r, function (R) {
          return R.PUSH_MODE
        })),
        (p = P(r, function (R) {
          return G(R, 'POP_MODE')
        }))
    })
    var f
    n('Line Terminator Handling', function () {
      var R = Ha(t.lineTerminatorCharacters)
      ;(f = P(r, function (U) {
        return !1
      })),
        t.positionTracking !== 'onlyOffset' &&
          (f = P(r, function (U) {
            if (G(U, 'LINE_BREAKS')) return U.LINE_BREAKS
            if (qa(U, R) === !1) return Fi(R, U.PATTERN)
          }))
    })
    var m, C, A, l
    n('Misc Mapping #2', function () {
      ;(m = P(r, Ja)),
        (C = P(a, Vc)),
        (A = Ke(
          r,
          function (R, U) {
            var j = U.GROUP
            return Ft(j) && j !== Rt.SKIPPED && (R[j] = []), R
          },
          {}
        )),
        (l = P(a, function (R, U) {
          return {
            pattern: a[U],
            longerAlt: u[U],
            canLineTerminator: f[U],
            isCustom: m[U],
            short: C[U],
            group: s[U],
            push: c[U],
            pop: p[U],
            tokenTypeIdx: o[U],
            tokenType: r[U]
          }
        }))
    })
    var T = !0,
      E = []
    return (
      t.safeMode ||
        n('First Char Optimization', function () {
          E = Ke(
            r,
            function (R, U, j) {
              if (typeof U.PATTERN == 'string') {
                var Ne = U.PATTERN.charCodeAt(0),
                  Je = en(Ne)
                Mi(R, Je, l[j])
              } else if (gt(U.START_CHARS_HINT)) {
                var Te
                V(U.START_CHARS_HINT, function (ke) {
                  var Be = typeof ke == 'string' ? ke.charCodeAt(0) : ke,
                    Ve = en(Be)
                  Te !== Ve && ((Te = Ve), Mi(R, Ve, l[j]))
                })
              } else if (Wt(U.PATTERN))
                if (U.PATTERN.unicode)
                  (T = !1),
                    t.ensureOptimizations &&
                      Ni(
                        '' +
                          yr +
                          ('	Unable to analyze < ' +
                            U.PATTERN.toString() +
                            ` > pattern.
`) +
                          `	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`
                      )
                else {
                  var Ye = Ec(U.PATTERN, t.ensureOptimizations)
                  le(Ye) && (T = !1),
                    V(Ye, function (ke) {
                      Mi(R, ke, l[j])
                    })
                }
              else
                t.ensureOptimizations &&
                  Ni(
                    '' +
                      yr +
                      ('	TokenType: <' +
                        U.name +
                        `> is using a custom token pattern without providing <start_chars_hint> parameter.
`) +
                      `	This will disable the lexer's first char optimizations.
	For details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`
                  ),
                  (T = !1)
              return R
            },
            []
          )
        }),
      n('ArrayPacking', function () {
        E = pc(E)
      }),
      {
        emptyGroups: A,
        patternIdxToConfig: l,
        charCodeToPatternIdxToConfig: E,
        hasCustom: i,
        canBeOptimized: T
      }
    )
  }
  function Sc(e, t) {
    var n = [],
      r = gc(e)
    n = n.concat(r.errors)
    var i = Lc(r.valid),
      a = i.valid
    return (
      (n = n.concat(i.errors)),
      (n = n.concat(Tc(a))),
      (n = n.concat(Fc(a))),
      (n = n.concat(Mc(a, t))),
      (n = n.concat(bc(a))),
      n
    )
  }
  function Tc(e) {
    var t = [],
      n = Tt(e, function (r) {
        return Wt(r[Mt])
      })
    return (
      (t = t.concat(Uc(n))),
      (t = t.concat(_c(n))),
      (t = t.concat(Ic(n))),
      (t = t.concat(Bc(n))),
      (t = t.concat(Oc(n))),
      t
    )
  }
  function gc(e) {
    var t = Tt(e, function (i) {
        return !G(i, Mt)
      }),
      n = P(t, function (i) {
        return {
          message: 'Token Type: ->' + i.name + "<- missing static 'PATTERN' property",
          type: ge.MISSING_PATTERN,
          tokenTypes: [i]
        }
      }),
      r = hr(e, t)
    return { errors: n, valid: r }
  }
  function Lc(e) {
    var t = Tt(e, function (i) {
        var a = i[Mt]
        return !Wt(a) && !$t(a) && !G(a, 'exec') && !Ft(a)
      }),
      n = P(t, function (i) {
        return {
          message:
            'Token Type: ->' +
            i.name +
            "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
          type: ge.INVALID_PATTERN,
          tokenTypes: [i]
        }
      }),
      r = hr(e, t)
    return { errors: n, valid: r }
  }
  var Rc = /[^\\][\$]/
  function Uc(e) {
    var t = (function (i) {
        Va(a, i)
        function a() {
          var o = (i !== null && i.apply(this, arguments)) || this
          return (o.found = !1), o
        }
        return (
          (a.prototype.visitEndAnchor = function (o) {
            this.found = !0
          }),
          a
        )
      })(cn.BaseRegExpVisitor),
      n = Tt(e, function (i) {
        var a = i[Mt]
        try {
          var o = Er(a),
            s = new t()
          return s.visit(o), s.found
        } catch {
          return Rc.test(a.source)
        }
      }),
      r = P(n, function (i) {
        return {
          message:
            `Unexpected RegExp Anchor Error:
	Token Type: ->` +
            i.name +
            `<- static 'PATTERN' cannot contain end of input anchor '$'
	See sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
          type: ge.EOI_ANCHOR_FOUND,
          tokenTypes: [i]
        }
      })
    return r
  }
  function Oc(e) {
    var t = Tt(e, function (r) {
        var i = r[Mt]
        return i.test('')
      }),
      n = P(t, function (r) {
        return {
          message: 'Token Type: ->' + r.name + "<- static 'PATTERN' must not match an empty string",
          type: ge.EMPTY_MATCH_PATTERN,
          tokenTypes: [r]
        }
      })
    return n
  }
  var Nc = /[^\\[][\^]|^\^/
  function _c(e) {
    var t = (function (i) {
        Va(a, i)
        function a() {
          var o = (i !== null && i.apply(this, arguments)) || this
          return (o.found = !1), o
        }
        return (
          (a.prototype.visitStartAnchor = function (o) {
            this.found = !0
          }),
          a
        )
      })(cn.BaseRegExpVisitor),
      n = Tt(e, function (i) {
        var a = i[Mt]
        try {
          var o = Er(a),
            s = new t()
          return s.visit(o), s.found
        } catch {
          return Nc.test(a.source)
        }
      }),
      r = P(n, function (i) {
        return {
          message:
            `Unexpected RegExp Anchor Error:
	Token Type: ->` +
            i.name +
            `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
          type: ge.SOI_ANCHOR_FOUND,
          tokenTypes: [i]
        }
      })
    return r
  }
  function Ic(e) {
    var t = Tt(e, function (r) {
        var i = r[Mt]
        return i instanceof RegExp && (i.multiline || i.global)
      }),
      n = P(t, function (r) {
        return {
          message:
            'Token Type: ->' +
            r.name +
            "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
          type: ge.UNSUPPORTED_FLAGS_FOUND,
          tokenTypes: [r]
        }
      })
    return n
  }
  function Bc(e) {
    var t = [],
      n = P(e, function (a) {
        return Ke(
          e,
          function (o, s) {
            return (
              a.PATTERN.source === s.PATTERN.source &&
                !Fe(t, s) &&
                s.PATTERN !== Rt.NA &&
                (t.push(s), o.push(s)),
              o
            )
          },
          []
        )
      })
    n = Hn(n)
    var r = Tt(n, function (a) {
        return a.length > 1
      }),
      i = P(r, function (a) {
        var o = P(a, function (u) {
            return u.name
          }),
          s = dt(a).PATTERN
        return {
          message:
            'The same RegExp pattern ->' +
            s +
            '<-' +
            ('has been used in all of the following Token Types: ' + o.join(', ') + ' <-'),
          type: ge.DUPLICATE_PATTERNS_FOUND,
          tokenTypes: a
        }
      })
    return i
  }
  function Fc(e) {
    var t = Tt(e, function (r) {
        if (!G(r, 'GROUP')) return !1
        var i = r.GROUP
        return i !== Rt.SKIPPED && i !== Rt.NA && !Ft(i)
      }),
      n = P(t, function (r) {
        return {
          message:
            'Token Type: ->' +
            r.name +
            "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
          type: ge.INVALID_GROUP_TYPE_FOUND,
          tokenTypes: [r]
        }
      })
    return n
  }
  function Mc(e, t) {
    var n = Tt(e, function (i) {
        return i.PUSH_MODE !== void 0 && !Fe(t, i.PUSH_MODE)
      }),
      r = P(n, function (i) {
        var a =
          'Token Type: ->' +
          i.name +
          "<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->" +
          i.PUSH_MODE +
          '<-which does not exist'
        return { message: a, type: ge.PUSH_MODE_DOES_NOT_EXIST, tokenTypes: [i] }
      })
    return r
  }
  function bc(e) {
    var t = [],
      n = Ke(
        e,
        function (r, i, a) {
          var o = i.PATTERN
          return (
            o === Rt.NA ||
              (Ft(o)
                ? r.push({ str: o, idx: a, tokenType: i })
                : Wt(o) && kc(o) && r.push({ str: o.source, idx: a, tokenType: i })),
            r
          )
        },
        []
      )
    return (
      V(e, function (r, i) {
        V(n, function (a) {
          var o = a.str,
            s = a.idx,
            u = a.tokenType
          if (i < s && Pc(o, r.PATTERN)) {
            var c =
              'Token: ->' +
              u.name +
              `<- can never be matched.
` +
              ('Because it appears AFTER the Token Type ->' + r.name + '<-') +
              `in the lexer's definition.
See https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#UNREACHABLE`
            t.push({ message: c, type: ge.UNREACHABLE_PATTERN, tokenTypes: [r, u] })
          }
        })
      }),
      t
    )
  }
  function Pc(e, t) {
    if (Wt(t)) {
      var n = t.exec(e)
      return n !== null && n.index === 0
    } else {
      if ($t(t)) return t(e, 0, [], {})
      if (G(t, 'exec')) return t.exec(e, 0, [], {})
      if (typeof t == 'string') return t === e
      throw Error('non exhaustive match')
    }
  }
  function kc(e) {
    var t = ['.', '\\', '[', ']', '|', '^', '$', '(', ')', '?', '*', '+', '{']
    return (
      yn(t, function (n) {
        return e.source.indexOf(n) !== -1
      }) === void 0
    )
  }
  function Ka(e) {
    var t = e.ignoreCase ? 'i' : ''
    return new RegExp('^(?:' + e.source + ')', t)
  }
  function Wa(e) {
    var t = e.ignoreCase ? 'iy' : 'y'
    return new RegExp('' + e.source, t)
  }
  function xc(e, t, n) {
    var r = []
    return (
      G(e, ln) ||
        r.push({
          message:
            'A MultiMode Lexer cannot be initialized without a <' +
            ln +
            `> property in its definition
`,
          type: ge.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
        }),
      G(e, Ar) ||
        r.push({
          message:
            'A MultiMode Lexer cannot be initialized without a <' +
            Ar +
            `> property in its definition
`,
          type: ge.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
        }),
      G(e, Ar) &&
        G(e, ln) &&
        !G(e.modes, e.defaultMode) &&
        r.push({
          message:
            'A MultiMode Lexer cannot be initialized with a ' +
            ln +
            ': <' +
            e.defaultMode +
            `>which does not exist
`,
          type: ge.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
        }),
      G(e, Ar) &&
        V(e.modes, function (i, a) {
          V(i, function (o, s) {
            ht(o) &&
              r.push({
                message:
                  'A Lexer cannot be initialized using an undefined Token Type. Mode:' +
                  ('<' +
                    a +
                    '> at index: <' +
                    s +
                    `>
`),
                type: ge.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
              })
          })
        }),
      r
    )
  }
  function wc(e, t, n) {
    var r = [],
      i = !1,
      a = Hn(
        rt(
          uc(e.modes, function (u) {
            return u
          })
        )
      ),
      o = un(a, function (u) {
        return u[Mt] === Rt.NA
      }),
      s = Ha(n)
    return (
      t &&
        V(o, function (u) {
          var c = qa(u, s)
          if (c !== !1) {
            var p = Kc(u, c),
              f = { message: p, type: c.issue, tokenType: u }
            r.push(f)
          } else G(u, 'LINE_BREAKS') ? u.LINE_BREAKS === !0 && (i = !0) : Fi(s, u.PATTERN) && (i = !0)
        }),
      t &&
        !i &&
        r.push({
          message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
          type: ge.NO_LINE_BREAKS_FLAGS
        }),
      r
    )
  }
  function jc(e) {
    var t = {},
      n = Kt(e)
    return (
      V(n, function (r) {
        var i = e[r]
        if (gt(i)) t[r] = []
        else throw Error('non exhaustive match')
      }),
      t
    )
  }
  function Ja(e) {
    var t = e.PATTERN
    if (Wt(t)) return !1
    if ($t(t)) return !0
    if (G(t, 'exec')) return !0
    if (Ft(t)) return !1
    throw Error('non exhaustive match')
  }
  function Vc(e) {
    return Ft(e) && e.length === 1 ? e.charCodeAt(0) : !1
  }
  var Gc = {
    test: function (e) {
      for (var t = e.length, n = this.lastIndex; n < t; n++) {
        var r = e.charCodeAt(n)
        if (r === 10) return (this.lastIndex = n + 1), !0
        if (r === 13)
          return (
            e.charCodeAt(n + 1) === 10 ? (this.lastIndex = n + 2) : (this.lastIndex = n + 1), !0
          )
      }
      return !1
    },
    lastIndex: 0
  }
  function qa(e, t) {
    if (G(e, 'LINE_BREAKS')) return !1
    if (Wt(e.PATTERN)) {
      try {
        Fi(t, e.PATTERN)
      } catch (n) {
        return { issue: ge.IDENTIFY_TERMINATOR, errMsg: n.message }
      }
      return !1
    } else {
      if (Ft(e.PATTERN)) return !1
      if (Ja(e)) return { issue: ge.CUSTOM_LINE_BREAK }
      throw Error('non exhaustive match')
    }
  }
  function Kc(e, t) {
    if (t.issue === ge.IDENTIFY_TERMINATOR)
      return (
        `Warning: unable to identify line terminator usage in pattern.
` +
        ('	The problem is in the <' +
          e.name +
          `> Token Type
`) +
        ('	 Root cause: ' +
          t.errMsg +
          `.
`) +
        '	For details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR'
      )
    if (t.issue === ge.CUSTOM_LINE_BREAK)
      return (
        `Warning: A Custom Token Pattern should specify the <line_breaks> option.
` +
        ('	The problem is in the <' +
          e.name +
          `> Token Type
`) +
        '	For details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK'
      )
    throw Error('non exhaustive match')
  }
  function Ha(e) {
    var t = P(e, function (n) {
      return Ft(n) && n.length > 0 ? n.charCodeAt(0) : n
    })
    return t
  }
  function Mi(e, t, n) {
    e[t] === void 0 ? (e[t] = [n]) : e[t].push(n)
  }
  var Yn = 256
  function en(e) {
    return e < Yn ? e : Sr[e]
  }
  var Sr = []
  function Wc() {
    if (le(Sr)) {
      Sr = new Array(65536)
      for (var e = 0; e < 65536; e++) Sr[e] = e > 255 ? 255 + ~~(e / 255) : e
    }
  }
  function Tr(e, t) {
    var n = e.tokenTypeIdx
    return n === t.tokenTypeIdx ? !0 : t.isParent === !0 && t.categoryMatchesMap[n] === !0
  }
  function gr(e, t) {
    return e.tokenTypeIdx === t.tokenTypeIdx
  }
  var Ya = 1,
    za = {}
  function zn(e) {
    var t = Jc(e)
    qc(t),
      Yc(t),
      Hc(t),
      V(t, function (n) {
        n.isParent = n.categoryMatches.length > 0
      })
  }
  function Jc(e) {
    for (var t = it(e), n = e, r = !0; r; ) {
      n = Hn(
        rt(
          P(n, function (a) {
            return a.CATEGORIES
          })
        )
      )
      var i = hr(n, t)
      ;(t = t.concat(i)), le(i) ? (r = !1) : (n = i)
    }
    return t
  }
  function qc(e) {
    V(e, function (t) {
      Za(t) || ((za[Ya] = t), (t.tokenTypeIdx = Ya++)),
        Qa(t) && !gt(t.CATEGORIES) && (t.CATEGORIES = [t.CATEGORIES]),
        Qa(t) || (t.CATEGORIES = []),
        zc(t) || (t.categoryMatches = []),
        Xc(t) || (t.categoryMatchesMap = {})
    })
  }
  function Hc(e) {
    V(e, function (t) {
      ;(t.categoryMatches = []),
        V(t.categoryMatchesMap, function (n, r) {
          t.categoryMatches.push(za[r].tokenTypeIdx)
        })
    })
  }
  function Yc(e) {
    V(e, function (t) {
      Xa([], t)
    })
  }
  function Xa(e, t) {
    V(e, function (n) {
      t.categoryMatchesMap[n.tokenTypeIdx] = !0
    }),
      V(t.CATEGORIES, function (n) {
        var r = e.concat(t)
        Fe(r, n) || Xa(r, n)
      })
  }
  function Za(e) {
    return G(e, 'tokenTypeIdx')
  }
  function Qa(e) {
    return G(e, 'CATEGORIES')
  }
  function zc(e) {
    return G(e, 'categoryMatches')
  }
  function Xc(e) {
    return G(e, 'categoryMatchesMap')
  }
  function Zc(e) {
    return G(e, 'tokenTypeIdx')
  }
  var $a = {
      buildUnableToPopLexerModeMessage: function (e) {
        return (
          'Unable to pop Lexer Mode after encountering Token ->' +
          e.image +
          '<- The Mode Stack is empty'
        )
      },
      buildUnexpectedCharactersMessage: function (e, t, n, r, i) {
        return (
          'unexpected character: ->' +
          e.charAt(t) +
          '<- at offset: ' +
          t +
          ',' +
          (' skipped ' + n + ' characters.')
        )
      }
    },
    ge
  ;(function (e) {
    ;(e[(e.MISSING_PATTERN = 0)] = 'MISSING_PATTERN'),
      (e[(e.INVALID_PATTERN = 1)] = 'INVALID_PATTERN'),
      (e[(e.EOI_ANCHOR_FOUND = 2)] = 'EOI_ANCHOR_FOUND'),
      (e[(e.UNSUPPORTED_FLAGS_FOUND = 3)] = 'UNSUPPORTED_FLAGS_FOUND'),
      (e[(e.DUPLICATE_PATTERNS_FOUND = 4)] = 'DUPLICATE_PATTERNS_FOUND'),
      (e[(e.INVALID_GROUP_TYPE_FOUND = 5)] = 'INVALID_GROUP_TYPE_FOUND'),
      (e[(e.PUSH_MODE_DOES_NOT_EXIST = 6)] = 'PUSH_MODE_DOES_NOT_EXIST'),
      (e[(e.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7)] = 'MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE'),
      (e[(e.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8)] =
        'MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY'),
      (e[(e.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9)] =
        'MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST'),
      (e[(e.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10)] =
        'LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED'),
      (e[(e.SOI_ANCHOR_FOUND = 11)] = 'SOI_ANCHOR_FOUND'),
      (e[(e.EMPTY_MATCH_PATTERN = 12)] = 'EMPTY_MATCH_PATTERN'),
      (e[(e.NO_LINE_BREAKS_FLAGS = 13)] = 'NO_LINE_BREAKS_FLAGS'),
      (e[(e.UNREACHABLE_PATTERN = 14)] = 'UNREACHABLE_PATTERN'),
      (e[(e.IDENTIFY_TERMINATOR = 15)] = 'IDENTIFY_TERMINATOR'),
      (e[(e.CUSTOM_LINE_BREAK = 16)] = 'CUSTOM_LINE_BREAK')
  })(ge || (ge = {}))
  var Xn = {
    deferDefinitionErrorsHandling: !1,
    positionTracking: 'full',
    lineTerminatorsPattern: /\n|\r\n?/g,
    lineTerminatorCharacters: [
      `
`,
      '\r'
    ],
    ensureOptimizations: !1,
    safeMode: !1,
    errorMessageProvider: $a,
    traceInitPerf: !1,
    skipValidations: !1
  }
  Object.freeze(Xn)
  var Rt = (function () {
    function e(t, n) {
      var r = this
      if (
        (n === void 0 && (n = Xn),
        (this.lexerDefinition = t),
        (this.lexerDefinitionErrors = []),
        (this.lexerDefinitionWarning = []),
        (this.patternIdxToConfig = {}),
        (this.charCodeToPatternIdxToConfig = {}),
        (this.modes = []),
        (this.emptyGroups = {}),
        (this.config = void 0),
        (this.trackStartLines = !0),
        (this.trackEndLines = !0),
        (this.hasCustom = !1),
        (this.canModeBeOptimized = {}),
        typeof n == 'boolean')
      )
        throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`)
      this.config = Ma(Xn, n)
      var i = this.config.traceInitPerf
      i === !0
        ? ((this.traceInitMaxIdent = 1 / 0), (this.traceInitPerf = !0))
        : typeof i == 'number' && ((this.traceInitMaxIdent = i), (this.traceInitPerf = !0)),
        (this.traceInitIndent = -1),
        this.TRACE_INIT('Lexer Constructor', function () {
          var a,
            o = !0
          r.TRACE_INIT('Lexer Config handling', function () {
            if (r.config.lineTerminatorsPattern === Xn.lineTerminatorsPattern)
              r.config.lineTerminatorsPattern = Gc
            else if (r.config.lineTerminatorCharacters === Xn.lineTerminatorCharacters)
              throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`)
            if (n.safeMode && n.ensureOptimizations)
              throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.')
            ;(r.trackStartLines = /full|onlyStart/i.test(r.config.positionTracking)),
              (r.trackEndLines = /full/i.test(r.config.positionTracking)),
              gt(t)
                ? ((a = { modes: {} }), (a.modes[ln] = it(t)), (a[ln] = ln))
                : ((o = !1), (a = qn(t)))
          }),
            r.config.skipValidations === !1 &&
              (r.TRACE_INIT('performRuntimeChecks', function () {
                r.lexerDefinitionErrors = r.lexerDefinitionErrors.concat(
                  xc(a, r.trackStartLines, r.config.lineTerminatorCharacters)
                )
              }),
              r.TRACE_INIT('performWarningRuntimeChecks', function () {
                r.lexerDefinitionWarning = r.lexerDefinitionWarning.concat(
                  wc(a, r.trackStartLines, r.config.lineTerminatorCharacters)
                )
              })),
            (a.modes = a.modes ? a.modes : {}),
            V(a.modes, function (p, f) {
              a.modes[f] = un(p, function (m) {
                return ht(m)
              })
            })
          var s = Kt(a.modes)
          if (
            (V(a.modes, function (p, f) {
              r.TRACE_INIT('Mode: <' + f + '> processing', function () {
                if (
                  (r.modes.push(f),
                  r.config.skipValidations === !1 &&
                    r.TRACE_INIT('validatePatterns', function () {
                      r.lexerDefinitionErrors = r.lexerDefinitionErrors.concat(Sc(p, s))
                    }),
                  le(r.lexerDefinitionErrors))
                ) {
                  zn(p)
                  var m
                  r.TRACE_INIT('analyzeTokenTypes', function () {
                    m = Ac(p, {
                      lineTerminatorCharacters: r.config.lineTerminatorCharacters,
                      positionTracking: n.positionTracking,
                      ensureOptimizations: n.ensureOptimizations,
                      safeMode: n.safeMode,
                      tracer: r.TRACE_INIT.bind(r)
                    })
                  }),
                    (r.patternIdxToConfig[f] = m.patternIdxToConfig),
                    (r.charCodeToPatternIdxToConfig[f] = m.charCodeToPatternIdxToConfig),
                    (r.emptyGroups = Ma(r.emptyGroups, m.emptyGroups)),
                    (r.hasCustom = m.hasCustom || r.hasCustom),
                    (r.canModeBeOptimized[f] = m.canBeOptimized)
                }
              })
            }),
            (r.defaultMode = a.defaultMode),
            !le(r.lexerDefinitionErrors) && !r.config.deferDefinitionErrorsHandling)
          ) {
            var u = P(r.lexerDefinitionErrors, function (p) {
                return p.message
              }),
              c = u.join(`-----------------------
`)
            throw new Error(
              `Errors detected in definition of Lexer:
` + c
            )
          }
          V(r.lexerDefinitionWarning, function (p) {
            _i(p.message)
          }),
            r.TRACE_INIT('Choosing sub-methods implementations', function () {
              if (
                (Ga
                  ? ((r.chopInput = ba), (r.match = r.matchWithTest))
                  : ((r.updateLastIndex = we), (r.match = r.matchWithExec)),
                o && (r.handleModes = we),
                r.trackStartLines === !1 && (r.computeNewColumn = ba),
                r.trackEndLines === !1 && (r.updateTokenEndLineColumnLocation = we),
                /full/i.test(r.config.positionTracking))
              )
                r.createTokenInstance = r.createFullToken
              else if (/onlyStart/i.test(r.config.positionTracking))
                r.createTokenInstance = r.createStartOnlyToken
              else if (/onlyOffset/i.test(r.config.positionTracking))
                r.createTokenInstance = r.createOffsetOnlyToken
              else
                throw Error(
                  'Invalid <positionTracking> config option: "' + r.config.positionTracking + '"'
                )
              r.hasCustom
                ? ((r.addToken = r.addTokenUsingPush),
                  (r.handlePayload = r.handlePayloadWithCustom))
                : ((r.addToken = r.addTokenUsingMemberAccess),
                  (r.handlePayload = r.handlePayloadNoCustom))
            }),
            r.TRACE_INIT('Failed Optimization Warnings', function () {
              var p = Ke(
                r.canModeBeOptimized,
                function (f, m, C) {
                  return m === !1 && f.push(C), f
                },
                []
              )
              if (n.ensureOptimizations && !le(p))
                throw Error(
                  'Lexer Modes: < ' +
                    p.join(', ') +
                    ` > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`
                )
            }),
            r.TRACE_INIT('clearRegExpParserCache', function () {
              vc()
            }),
            r.TRACE_INIT('toFastProperties', function () {
              ka(r)
            })
        })
    }
    return (
      (e.prototype.tokenize = function (t, n) {
        if ((n === void 0 && (n = this.defaultMode), !le(this.lexerDefinitionErrors))) {
          var r = P(this.lexerDefinitionErrors, function (o) {
              return o.message
            }),
            i = r.join(`-----------------------
`)
          throw new Error(
            `Unable to Tokenize because Errors detected in definition of Lexer:
` + i
          )
        }
        var a = this.tokenizeInternal(t, n)
        return a
      }),
      (e.prototype.tokenizeInternal = function (t, n) {
        var r = this,
          i,
          a,
          o,
          s,
          u,
          c,
          p,
          f,
          m,
          C,
          A,
          l,
          T,
          E,
          R = t,
          U = R.length,
          j = 0,
          Ne = 0,
          Je = this.hasCustom ? 0 : Math.floor(t.length / 10),
          Te = new Array(Je),
          Ye = [],
          ke = this.trackStartLines ? 1 : void 0,
          Be = this.trackStartLines ? 1 : void 0,
          Ve = jc(this.emptyGroups),
          Zt = this.trackStartLines,
          Bt = this.config.lineTerminatorsPattern,
          pt = 0,
          ut = [],
          jt = [],
          Qt = [],
          Vn = []
        Object.freeze(Vn)
        var St = void 0
        function Gn() {
          return ut
        }
        function Kn(S) {
          var F = en(S),
            L = jt[F]
          return L === void 0 ? Vn : L
        }
        var N = function (S) {
          if (Qt.length === 1 && S.tokenType.PUSH_MODE === void 0) {
            var F = r.config.errorMessageProvider.buildUnableToPopLexerModeMessage(S)
            Ye.push({
              offset: S.startOffset,
              line: S.startLine !== void 0 ? S.startLine : void 0,
              column: S.startColumn !== void 0 ? S.startColumn : void 0,
              length: S.image.length,
              message: F
            })
          } else {
            Qt.pop()
            var L = Ia(Qt)
            ;(ut = r.patternIdxToConfig[L]),
              (jt = r.charCodeToPatternIdxToConfig[L]),
              (pt = ut.length)
            var w = r.canModeBeOptimized[L] && r.config.safeMode === !1
            jt && w ? (St = Kn) : (St = Gn)
          }
        }
        function X(S) {
          Qt.push(S),
            (jt = this.charCodeToPatternIdxToConfig[S]),
            (ut = this.patternIdxToConfig[S]),
            (pt = ut.length),
            (pt = ut.length)
          var F = this.canModeBeOptimized[S] && this.config.safeMode === !1
          jt && F ? (St = Kn) : (St = Gn)
        }
        X.call(this, n)
        for (var q; j < U; ) {
          u = null
          var ee = R.charCodeAt(j),
            re = St(ee),
            Ce = re.length
          for (i = 0; i < Ce; i++) {
            q = re[i]
            var J = q.pattern
            c = null
            var ce = q.short
            if (
              (ce !== !1
                ? ee === ce && (u = J)
                : q.isCustom === !0
                ? ((E = J.exec(R, j, Te, Ve)),
                  E !== null ? ((u = E[0]), E.payload !== void 0 && (c = E.payload)) : (u = null))
                : (this.updateLastIndex(J, j), (u = this.match(J, t, j))),
              u !== null)
            ) {
              if (((s = q.longerAlt), s !== void 0)) {
                var de = ut[s],
                  ne = de.pattern
                ;(p = null),
                  de.isCustom === !0
                    ? ((E = ne.exec(R, j, Te, Ve)),
                      E !== null
                        ? ((o = E[0]), E.payload !== void 0 && (p = E.payload))
                        : (o = null))
                    : (this.updateLastIndex(ne, j), (o = this.match(ne, t, j))),
                  o && o.length > u.length && ((u = o), (c = p), (q = de))
              }
              break
            }
          }
          if (u !== null) {
            if (
              ((f = u.length),
              (m = q.group),
              m !== void 0 &&
                ((C = q.tokenTypeIdx),
                (A = this.createTokenInstance(u, j, C, q.tokenType, ke, Be, f)),
                this.handlePayload(A, c),
                m === !1 ? (Ne = this.addToken(Te, Ne, A)) : Ve[m].push(A)),
              (t = this.chopInput(t, f)),
              (j = j + f),
              (Be = this.computeNewColumn(Be, f)),
              Zt === !0 && q.canLineTerminator === !0)
            ) {
              var _e = 0,
                _ = void 0,
                fe = void 0
              Bt.lastIndex = 0
              do (_ = Bt.test(u)), _ === !0 && ((fe = Bt.lastIndex - 1), _e++)
              while (_ === !0)
              _e !== 0 &&
                ((ke = ke + _e),
                (Be = f - fe),
                this.updateTokenEndLineColumnLocation(A, m, fe, _e, ke, Be, f))
            }
            this.handleModes(q, N, X, A)
          } else {
            for (var De = j, ie = ke, d = Be, v = !1; !v && j < U; )
              for (R.charCodeAt(j), t = this.chopInput(t, 1), j++, a = 0; a < pt; a++) {
                var g = ut[a],
                  J = g.pattern,
                  ce = g.short
                if (
                  (ce !== !1
                    ? R.charCodeAt(j) === ce && (v = !0)
                    : g.isCustom === !0
                    ? (v = J.exec(R, j, Te, Ve) !== null)
                    : (this.updateLastIndex(J, j), (v = J.exec(t) !== null)),
                  v === !0)
                )
                  break
              }
            ;(l = j - De),
              (T = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(
                R,
                De,
                l,
                ie,
                d
              )),
              Ye.push({ offset: De, line: ie, column: d, length: l, message: T })
          }
        }
        return this.hasCustom || (Te.length = Ne), { tokens: Te, groups: Ve, errors: Ye }
      }),
      (e.prototype.handleModes = function (t, n, r, i) {
        if (t.pop === !0) {
          var a = t.push
          n(i), a !== void 0 && r.call(this, a)
        } else t.push !== void 0 && r.call(this, t.push)
      }),
      (e.prototype.chopInput = function (t, n) {
        return t.substring(n)
      }),
      (e.prototype.updateLastIndex = function (t, n) {
        t.lastIndex = n
      }),
      (e.prototype.updateTokenEndLineColumnLocation = function (t, n, r, i, a, o, s) {
        var u, c
        n !== void 0 &&
          ((u = r === s - 1),
          (c = u ? -1 : 0),
          (i === 1 && u === !0) || ((t.endLine = a + c), (t.endColumn = o - 1 + -c)))
      }),
      (e.prototype.computeNewColumn = function (t, n) {
        return t + n
      }),
      (e.prototype.createTokenInstance = function () {
        return null
      }),
      (e.prototype.createOffsetOnlyToken = function (t, n, r, i) {
        return { image: t, startOffset: n, tokenTypeIdx: r, tokenType: i }
      }),
      (e.prototype.createStartOnlyToken = function (t, n, r, i, a, o) {
        return {
          image: t,
          startOffset: n,
          startLine: a,
          startColumn: o,
          tokenTypeIdx: r,
          tokenType: i
        }
      }),
      (e.prototype.createFullToken = function (t, n, r, i, a, o, s) {
        return {
          image: t,
          startOffset: n,
          endOffset: n + s - 1,
          startLine: a,
          endLine: a,
          startColumn: o,
          endColumn: o + s - 1,
          tokenTypeIdx: r,
          tokenType: i
        }
      }),
      (e.prototype.addToken = function (t, n, r) {
        return 666
      }),
      (e.prototype.addTokenUsingPush = function (t, n, r) {
        return t.push(r), n
      }),
      (e.prototype.addTokenUsingMemberAccess = function (t, n, r) {
        return (t[n] = r), n++, n
      }),
      (e.prototype.handlePayload = function (t, n) {}),
      (e.prototype.handlePayloadNoCustom = function (t, n) {}),
      (e.prototype.handlePayloadWithCustom = function (t, n) {
        n !== null && (t.payload = n)
      }),
      (e.prototype.match = function (t, n, r) {
        return null
      }),
      (e.prototype.matchWithTest = function (t, n, r) {
        var i = t.test(n)
        return i === !0 ? n.substring(r, t.lastIndex) : null
      }),
      (e.prototype.matchWithExec = function (t, n) {
        var r = t.exec(n)
        return r !== null ? r[0] : r
      }),
      (e.prototype.TRACE_INIT = function (t, n) {
        if (this.traceInitPerf === !0) {
          this.traceInitIndent++
          var r = new Array(this.traceInitIndent + 1).join('	')
          this.traceInitIndent < this.traceInitMaxIdent && console.log(r + '--> <' + t + '>')
          var i = xa(n),
            a = i.time,
            o = i.value,
            s = a > 10 ? console.warn : console.log
          return (
            this.traceInitIndent < this.traceInitMaxIdent &&
              s(r + '<-- <' + t + '> time: ' + a + 'ms'),
            this.traceInitIndent--,
            o
          )
        } else return n()
      }),
      (e.SKIPPED =
        'This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.'),
      (e.NA = /NOT_APPLICABLE/),
      e
    )
  })()
  function fn(e) {
    return eo(e) ? e.LABEL : e.name
  }
  function Qc(e) {
    return e.name
  }
  function eo(e) {
    return Ft(e.LABEL) && e.LABEL !== ''
  }
  var $c = 'parent',
    to = 'categories',
    no = 'label',
    ro = 'group',
    io = 'push_mode',
    ao = 'pop_mode',
    oo = 'longer_alt',
    so = 'line_breaks',
    uo = 'start_chars_hint'
  function bi(e) {
    return el(e)
  }
  function el(e) {
    var t = e.pattern,
      n = {}
    if (((n.name = e.name), ht(t) || (n.PATTERN = t), G(e, $c)))
      throw `The parent property is no longer supported.
See: https://github.com/SAP/chevrotain/issues/564#issuecomment-349062346 for details.`
    return (
      G(e, to) && (n.CATEGORIES = e[to]),
      zn([n]),
      G(e, no) && (n.LABEL = e[no]),
      G(e, ro) && (n.GROUP = e[ro]),
      G(e, ao) && (n.POP_MODE = e[ao]),
      G(e, io) && (n.PUSH_MODE = e[io]),
      G(e, oo) && (n.LONGER_ALT = e[oo]),
      G(e, so) && (n.LINE_BREAKS = e[so]),
      G(e, uo) && (n.START_CHARS_HINT = e[uo]),
      n
    )
  }
  var tn = bi({ name: 'EOF', pattern: Rt.NA })
  zn([tn])
  function Lr(e, t, n, r, i, a, o, s) {
    return {
      image: t,
      startOffset: n,
      endOffset: r,
      startLine: i,
      endLine: a,
      startColumn: o,
      endColumn: s,
      tokenTypeIdx: e.tokenTypeIdx,
      tokenType: e
    }
  }
  function tl(e, t) {
    return Tr(e, t)
  }
  var Jt =
      (globalThis && globalThis.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })(),
    bt = (function () {
      function e(t) {
        this.definition = t
      }
      return (
        (e.prototype.accept = function (t) {
          t.visit(this),
            V(this.definition, function (n) {
              n.accept(t)
            })
        }),
        e
      )
    })(),
    ze = (function (e) {
      Jt(t, e)
      function t(n) {
        var r = e.call(this, []) || this
        return (
          (r.idx = 1),
          Lt(
            r,
            mt(n, function (i) {
              return i !== void 0
            })
          ),
          r
        )
      }
      return (
        Object.defineProperty(t.prototype, 'definition', {
          get: function () {
            return this.referencedRule !== void 0 ? this.referencedRule.definition : []
          },
          set: function (n) {},
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.accept = function (n) {
          n.visit(this)
        }),
        t
      )
    })(bt),
    pn = (function (e) {
      Jt(t, e)
      function t(n) {
        var r = e.call(this, n.definition) || this
        return (
          (r.orgText = ''),
          Lt(
            r,
            mt(n, function (i) {
              return i !== void 0
            })
          ),
          r
        )
      }
      return t
    })(bt),
    He = (function (e) {
      Jt(t, e)
      function t(n) {
        var r = e.call(this, n.definition) || this
        return (
          (r.ignoreAmbiguities = !1),
          Lt(
            r,
            mt(n, function (i) {
              return i !== void 0
            })
          ),
          r
        )
      }
      return t
    })(bt),
    Me = (function (e) {
      Jt(t, e)
      function t(n) {
        var r = e.call(this, n.definition) || this
        return (
          (r.idx = 1),
          Lt(
            r,
            mt(n, function (i) {
              return i !== void 0
            })
          ),
          r
        )
      }
      return t
    })(bt),
    at = (function (e) {
      Jt(t, e)
      function t(n) {
        var r = e.call(this, n.definition) || this
        return (
          (r.idx = 1),
          Lt(
            r,
            mt(n, function (i) {
              return i !== void 0
            })
          ),
          r
        )
      }
      return t
    })(bt),
    ot = (function (e) {
      Jt(t, e)
      function t(n) {
        var r = e.call(this, n.definition) || this
        return (
          (r.idx = 1),
          Lt(
            r,
            mt(n, function (i) {
              return i !== void 0
            })
          ),
          r
        )
      }
      return t
    })(bt),
    Ae = (function (e) {
      Jt(t, e)
      function t(n) {
        var r = e.call(this, n.definition) || this
        return (
          (r.idx = 1),
          Lt(
            r,
            mt(n, function (i) {
              return i !== void 0
            })
          ),
          r
        )
      }
      return t
    })(bt),
    Xe = (function (e) {
      Jt(t, e)
      function t(n) {
        var r = e.call(this, n.definition) || this
        return (
          (r.idx = 1),
          Lt(
            r,
            mt(n, function (i) {
              return i !== void 0
            })
          ),
          r
        )
      }
      return t
    })(bt),
    Ze = (function (e) {
      Jt(t, e)
      function t(n) {
        var r = e.call(this, n.definition) || this
        return (
          (r.idx = 1),
          (r.ignoreAmbiguities = !1),
          (r.hasPredicates = !1),
          Lt(
            r,
            mt(n, function (i) {
              return i !== void 0
            })
          ),
          r
        )
      }
      return t
    })(bt),
    he = (function () {
      function e(t) {
        ;(this.idx = 1),
          Lt(
            this,
            mt(t, function (n) {
              return n !== void 0
            })
          )
      }
      return (
        (e.prototype.accept = function (t) {
          t.visit(this)
        }),
        e
      )
    })()
  function co(e) {
    return P(e, Zn)
  }
  function Zn(e) {
    function t(i) {
      return P(i, Zn)
    }
    if (e instanceof ze) return { type: 'NonTerminal', name: e.nonTerminalName, idx: e.idx }
    if (e instanceof He) return { type: 'Flat', definition: t(e.definition) }
    if (e instanceof Me) return { type: 'Option', idx: e.idx, definition: t(e.definition) }
    if (e instanceof at)
      return { type: 'RepetitionMandatory', name: e.name, idx: e.idx, definition: t(e.definition) }
    if (e instanceof ot)
      return {
        type: 'RepetitionMandatoryWithSeparator',
        name: e.name,
        idx: e.idx,
        separator: Zn(new he({ terminalType: e.separator })),
        definition: t(e.definition)
      }
    if (e instanceof Xe)
      return {
        type: 'RepetitionWithSeparator',
        name: e.name,
        idx: e.idx,
        separator: Zn(new he({ terminalType: e.separator })),
        definition: t(e.definition)
      }
    if (e instanceof Ae)
      return { type: 'Repetition', name: e.name, idx: e.idx, definition: t(e.definition) }
    if (e instanceof Ze)
      return { type: 'Alternation', name: e.name, idx: e.idx, definition: t(e.definition) }
    if (e instanceof he) {
      var n = {
          type: 'Terminal',
          name: e.terminalType.name,
          label: fn(e.terminalType),
          idx: e.idx
        },
        r = e.terminalType.PATTERN
      return e.terminalType.PATTERN && (n.pattern = Wt(r) ? r.source : r), n
    } else {
      if (e instanceof pn)
        return { type: 'Rule', name: e.name, orgText: e.orgText, definition: t(e.definition) }
      throw Error('non exhaustive match')
    }
  }
  var Rr = (function () {
    function e() {}
    return (
      (e.prototype.walk = function (t, n) {
        var r = this
        n === void 0 && (n = []),
          V(t.definition, function (i, a) {
            var o = Ge(t.definition, a + 1)
            if (i instanceof ze) r.walkProdRef(i, o, n)
            else if (i instanceof he) r.walkTerminal(i, o, n)
            else if (i instanceof He) r.walkFlat(i, o, n)
            else if (i instanceof Me) r.walkOption(i, o, n)
            else if (i instanceof at) r.walkAtLeastOne(i, o, n)
            else if (i instanceof ot) r.walkAtLeastOneSep(i, o, n)
            else if (i instanceof Xe) r.walkManySep(i, o, n)
            else if (i instanceof Ae) r.walkMany(i, o, n)
            else if (i instanceof Ze) r.walkOr(i, o, n)
            else throw Error('non exhaustive match')
          })
      }),
      (e.prototype.walkTerminal = function (t, n, r) {}),
      (e.prototype.walkProdRef = function (t, n, r) {}),
      (e.prototype.walkFlat = function (t, n, r) {
        var i = n.concat(r)
        this.walk(t, i)
      }),
      (e.prototype.walkOption = function (t, n, r) {
        var i = n.concat(r)
        this.walk(t, i)
      }),
      (e.prototype.walkAtLeastOne = function (t, n, r) {
        var i = [new Me({ definition: t.definition })].concat(n, r)
        this.walk(t, i)
      }),
      (e.prototype.walkAtLeastOneSep = function (t, n, r) {
        var i = lo(t, n, r)
        this.walk(t, i)
      }),
      (e.prototype.walkMany = function (t, n, r) {
        var i = [new Me({ definition: t.definition })].concat(n, r)
        this.walk(t, i)
      }),
      (e.prototype.walkManySep = function (t, n, r) {
        var i = lo(t, n, r)
        this.walk(t, i)
      }),
      (e.prototype.walkOr = function (t, n, r) {
        var i = this,
          a = n.concat(r)
        V(t.definition, function (o) {
          var s = new He({ definition: [o] })
          i.walk(s, a)
        })
      }),
      e
    )
  })()
  function lo(e, t, n) {
    var r = [new Me({ definition: [new he({ terminalType: e.separator })].concat(e.definition) })],
      i = r.concat(t, n)
    return i
  }
  var nn = (function () {
      function e() {}
      return (
        (e.prototype.visit = function (t) {
          var n = t
          switch (n.constructor) {
            case ze:
              return this.visitNonTerminal(n)
            case He:
              return this.visitFlat(n)
            case Me:
              return this.visitOption(n)
            case at:
              return this.visitRepetitionMandatory(n)
            case ot:
              return this.visitRepetitionMandatoryWithSeparator(n)
            case Xe:
              return this.visitRepetitionWithSeparator(n)
            case Ae:
              return this.visitRepetition(n)
            case Ze:
              return this.visitAlternation(n)
            case he:
              return this.visitTerminal(n)
            case pn:
              return this.visitRule(n)
            default:
              throw Error('non exhaustive match')
          }
        }),
        (e.prototype.visitNonTerminal = function (t) {}),
        (e.prototype.visitFlat = function (t) {}),
        (e.prototype.visitOption = function (t) {}),
        (e.prototype.visitRepetition = function (t) {}),
        (e.prototype.visitRepetitionMandatory = function (t) {}),
        (e.prototype.visitRepetitionMandatoryWithSeparator = function (t) {}),
        (e.prototype.visitRepetitionWithSeparator = function (t) {}),
        (e.prototype.visitAlternation = function (t) {}),
        (e.prototype.visitTerminal = function (t) {}),
        (e.prototype.visitRule = function (t) {}),
        e
      )
    })(),
    nl =
      (globalThis && globalThis.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })()
  function rl(e) {
    return (
      e instanceof He ||
      e instanceof Me ||
      e instanceof Ae ||
      e instanceof at ||
      e instanceof ot ||
      e instanceof Xe ||
      e instanceof he ||
      e instanceof pn
    )
  }
  function Ur(e, t) {
    t === void 0 && (t = [])
    var n = e instanceof Me || e instanceof Ae || e instanceof Xe
    return n
      ? !0
      : e instanceof Ze
      ? Ba(e.definition, function (r) {
          return Ur(r, t)
        })
      : e instanceof ze && Fe(t, e)
      ? !1
      : e instanceof bt
      ? (e instanceof ze && t.push(e),
        vt(e.definition, function (r) {
          return Ur(r, t)
        }))
      : !1
  }
  function il(e) {
    return e instanceof Ze
  }
  function Ut(e) {
    if (e instanceof ze) return 'SUBRULE'
    if (e instanceof Me) return 'OPTION'
    if (e instanceof Ze) return 'OR'
    if (e instanceof at) return 'AT_LEAST_ONE'
    if (e instanceof ot) return 'AT_LEAST_ONE_SEP'
    if (e instanceof Xe) return 'MANY_SEP'
    if (e instanceof Ae) return 'MANY'
    if (e instanceof he) return 'CONSUME'
    throw Error('non exhaustive match')
  }
  var fo = (function (e) {
      nl(t, e)
      function t() {
        var n = (e !== null && e.apply(this, arguments)) || this
        return (
          (n.separator = '-'),
          (n.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: []
          }),
          n
        )
      }
      return (
        (t.prototype.reset = function () {
          this.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: []
          }
        }),
        (t.prototype.visitTerminal = function (n) {
          var r = n.terminalType.name + this.separator + 'Terminal'
          G(this.dslMethods, r) || (this.dslMethods[r] = []), this.dslMethods[r].push(n)
        }),
        (t.prototype.visitNonTerminal = function (n) {
          var r = n.nonTerminalName + this.separator + 'Terminal'
          G(this.dslMethods, r) || (this.dslMethods[r] = []), this.dslMethods[r].push(n)
        }),
        (t.prototype.visitOption = function (n) {
          this.dslMethods.option.push(n)
        }),
        (t.prototype.visitRepetitionWithSeparator = function (n) {
          this.dslMethods.repetitionWithSeparator.push(n)
        }),
        (t.prototype.visitRepetitionMandatory = function (n) {
          this.dslMethods.repetitionMandatory.push(n)
        }),
        (t.prototype.visitRepetitionMandatoryWithSeparator = function (n) {
          this.dslMethods.repetitionMandatoryWithSeparator.push(n)
        }),
        (t.prototype.visitRepetition = function (n) {
          this.dslMethods.repetition.push(n)
        }),
        (t.prototype.visitAlternation = function (n) {
          this.dslMethods.alternation.push(n)
        }),
        t
      )
    })(nn),
    Or = new fo()
  function al(e) {
    Or.reset(), e.accept(Or)
    var t = Or.dslMethods
    return Or.reset(), t
  }
  function Qn(e) {
    if (e instanceof ze) return Qn(e.referencedRule)
    if (e instanceof he) return ul(e)
    if (rl(e)) return ol(e)
    if (il(e)) return sl(e)
    throw Error('non exhaustive match')
  }
  function ol(e) {
    for (var t = [], n = e.definition, r = 0, i = n.length > r, a, o = !0; i && o; )
      (a = n[r]), (o = Ur(a)), (t = t.concat(Qn(a))), (r = r + 1), (i = n.length > r)
    return Ui(t)
  }
  function sl(e) {
    var t = P(e.definition, function (n) {
      return Qn(n)
    })
    return Ui(rt(t))
  }
  function ul(e) {
    return [e.terminalType]
  }
  var po = '_~IN~_',
    cl =
      (globalThis && globalThis.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })(),
    ll = (function (e) {
      cl(t, e)
      function t(n) {
        var r = e.call(this) || this
        return (r.topProd = n), (r.follows = {}), r
      }
      return (
        (t.prototype.startWalking = function () {
          return this.walk(this.topProd), this.follows
        }),
        (t.prototype.walkTerminal = function (n, r, i) {}),
        (t.prototype.walkProdRef = function (n, r, i) {
          var a = pl(n.referencedRule, n.idx) + this.topProd.name,
            o = r.concat(i),
            s = new He({ definition: o }),
            u = Qn(s)
          this.follows[a] = u
        }),
        t
      )
    })(Rr)
  function fl(e) {
    var t = {}
    return (
      V(e, function (n) {
        var r = new ll(n).startWalking()
        Lt(t, r)
      }),
      t
    )
  }
  function pl(e, t) {
    return e.name + t + po
  }
  var dl = 4,
    rn = 8,
    hl = 8,
    Cn = 1 << rn,
    Nr = 2 << rn,
    $n = 3 << rn,
    er = 4 << rn,
    tr = 5 << rn,
    An = 6 << rn
  function nr(e, t, n) {
    return n | t | e
  }
  var ml = 32 - hl
  function ho(e, t, n, r) {
    var i = (r + 1) << ml
    return nr(e, t, n) | i
  }
  var vl =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i
              }) ||
            function (r, i) {
              for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        e(t, n)
        function r() {
          this.constructor = t
        }
        t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
      }
    })()
  function mo(e, t) {
    isNaN(e.startOffset) === !0
      ? ((e.startOffset = t.startOffset), (e.endOffset = t.endOffset))
      : e.endOffset < t.endOffset && (e.endOffset = t.endOffset)
  }
  function vo(e, t) {
    isNaN(e.startOffset) === !0
      ? ((e.startOffset = t.startOffset),
        (e.startColumn = t.startColumn),
        (e.startLine = t.startLine),
        (e.endOffset = t.endOffset),
        (e.endColumn = t.endColumn),
        (e.endLine = t.endLine))
      : e.endOffset < t.endOffset &&
        ((e.endOffset = t.endOffset), (e.endColumn = t.endColumn), (e.endLine = t.endLine))
  }
  function Dl(e, t, n) {
    e.children[n] === void 0 ? (e.children[n] = [t]) : e.children[n].push(t)
  }
  function Do(e, t, n) {
    e.children[t] === void 0 ? (e.children[t] = [n]) : e.children[t].push(n)
  }
  var Pi = (function (e) {
    vl(t, e)
    function t(n) {
      var r = e.call(this) || this
      return (r.result = []), (r.ruleIdx = n), r
    }
    return (
      (t.prototype.collectNamedDSLMethod = function (n, r, i) {
        if (!ht(n.name)) {
          var a = void 0
          if (n instanceof Me || n instanceof Ae || n instanceof at || n instanceof Ze)
            a = new r({ definition: n.definition, idx: n.idx })
          else if (n instanceof ot || n instanceof Xe)
            a = new r({ definition: n.definition, idx: n.idx, separator: n.separator })
          else throw Error('non exhaustive match')
          var o = [a],
            s = nr(this.ruleIdx, i, n.idx)
          this.result.push({ def: o, key: s, name: n.name, orgProd: n })
        }
      }),
      (t.prototype.visitOption = function (n) {
        this.collectNamedDSLMethod(n, Me, Nr)
      }),
      (t.prototype.visitRepetition = function (n) {
        this.collectNamedDSLMethod(n, Ae, $n)
      }),
      (t.prototype.visitRepetitionMandatory = function (n) {
        this.collectNamedDSLMethod(n, at, er)
      }),
      (t.prototype.visitRepetitionMandatoryWithSeparator = function (n) {
        this.collectNamedDSLMethod(n, ot, An)
      }),
      (t.prototype.visitRepetitionWithSeparator = function (n) {
        this.collectNamedDSLMethod(n, Xe, tr)
      }),
      (t.prototype.visitAlternation = function (n) {
        var r = this
        this.collectNamedDSLMethod(n, Ze, Cn)
        var i = n.definition.length > 1
        V(n.definition, function (a, o) {
          if (!ht(a.name)) {
            var s = a.definition
            i ? (s = [new Me({ definition: a.definition })]) : (s = a.definition)
            var u = ho(r.ruleIdx, Cn, n.idx, o)
            r.result.push({ def: s, key: u, name: a.name, orgProd: a })
          }
        })
      }),
      t
    )
  })(nn)
  function El(e, t) {
    var n = { allRuleNames: [] }
    return (
      V(e, function (r) {
        var i = t[r.name]
        n.allRuleNames.push(r.name)
        var a = new Pi(i)
        r.accept(a),
          V(a.result, function (o) {
            o.def, o.key
            var s = o.name
            n.allRuleNames.push(r.name + s)
          })
      }),
      n
    )
  }
  var dn =
      (globalThis && globalThis.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })(),
    yl = (function (e) {
      dn(t, e)
      function t(n, r) {
        var i = e.call(this) || this
        return (
          (i.topProd = n),
          (i.path = r),
          (i.possibleTokTypes = []),
          (i.nextProductionName = ''),
          (i.nextProductionOccurrence = 0),
          (i.found = !1),
          (i.isAtEndOfPath = !1),
          i
        )
      }
      return (
        (t.prototype.startWalking = function () {
          if (((this.found = !1), this.path.ruleStack[0] !== this.topProd.name))
            throw Error("The path does not start with the walker's top Rule!")
          return (
            (this.ruleStack = it(this.path.ruleStack).reverse()),
            (this.occurrenceStack = it(this.path.occurrenceStack).reverse()),
            this.ruleStack.pop(),
            this.occurrenceStack.pop(),
            this.updateExpectedNext(),
            this.walk(this.topProd),
            this.possibleTokTypes
          )
        }),
        (t.prototype.walk = function (n, r) {
          r === void 0 && (r = []), this.found || e.prototype.walk.call(this, n, r)
        }),
        (t.prototype.walkProdRef = function (n, r, i) {
          if (
            n.referencedRule.name === this.nextProductionName &&
            n.idx === this.nextProductionOccurrence
          ) {
            var a = r.concat(i)
            this.updateExpectedNext(), this.walk(n.referencedRule, a)
          }
        }),
        (t.prototype.updateExpectedNext = function () {
          le(this.ruleStack)
            ? ((this.nextProductionName = ''),
              (this.nextProductionOccurrence = 0),
              (this.isAtEndOfPath = !0))
            : ((this.nextProductionName = this.ruleStack.pop()),
              (this.nextProductionOccurrence = this.occurrenceStack.pop()))
        }),
        t
      )
    })(Rr),
    Cl = (function (e) {
      dn(t, e)
      function t(n, r) {
        var i = e.call(this, n, r) || this
        return (
          (i.path = r),
          (i.nextTerminalName = ''),
          (i.nextTerminalOccurrence = 0),
          (i.nextTerminalName = i.path.lastTok.name),
          (i.nextTerminalOccurrence = i.path.lastTokOccurrence),
          i
        )
      }
      return (
        (t.prototype.walkTerminal = function (n, r, i) {
          if (
            this.isAtEndOfPath &&
            n.terminalType.name === this.nextTerminalName &&
            n.idx === this.nextTerminalOccurrence &&
            !this.found
          ) {
            var a = r.concat(i),
              o = new He({ definition: a })
            ;(this.possibleTokTypes = Qn(o)), (this.found = !0)
          }
        }),
        t
      )
    })(yl),
    _r = (function (e) {
      dn(t, e)
      function t(n, r) {
        var i = e.call(this) || this
        return (
          (i.topRule = n),
          (i.occurrence = r),
          (i.result = { token: void 0, occurrence: void 0, isEndOfRule: void 0 }),
          i
        )
      }
      return (
        (t.prototype.startWalking = function () {
          return this.walk(this.topRule), this.result
        }),
        t
      )
    })(Rr),
    Al = (function (e) {
      dn(t, e)
      function t() {
        return (e !== null && e.apply(this, arguments)) || this
      }
      return (
        (t.prototype.walkMany = function (n, r, i) {
          if (n.idx === this.occurrence) {
            var a = dt(r.concat(i))
            ;(this.result.isEndOfRule = a === void 0),
              a instanceof he &&
                ((this.result.token = a.terminalType), (this.result.occurrence = a.idx))
          } else e.prototype.walkMany.call(this, n, r, i)
        }),
        t
      )
    })(_r),
    Eo = (function (e) {
      dn(t, e)
      function t() {
        return (e !== null && e.apply(this, arguments)) || this
      }
      return (
        (t.prototype.walkManySep = function (n, r, i) {
          if (n.idx === this.occurrence) {
            var a = dt(r.concat(i))
            ;(this.result.isEndOfRule = a === void 0),
              a instanceof he &&
                ((this.result.token = a.terminalType), (this.result.occurrence = a.idx))
          } else e.prototype.walkManySep.call(this, n, r, i)
        }),
        t
      )
    })(_r),
    Sl = (function (e) {
      dn(t, e)
      function t() {
        return (e !== null && e.apply(this, arguments)) || this
      }
      return (
        (t.prototype.walkAtLeastOne = function (n, r, i) {
          if (n.idx === this.occurrence) {
            var a = dt(r.concat(i))
            ;(this.result.isEndOfRule = a === void 0),
              a instanceof he &&
                ((this.result.token = a.terminalType), (this.result.occurrence = a.idx))
          } else e.prototype.walkAtLeastOne.call(this, n, r, i)
        }),
        t
      )
    })(_r),
    yo = (function (e) {
      dn(t, e)
      function t() {
        return (e !== null && e.apply(this, arguments)) || this
      }
      return (
        (t.prototype.walkAtLeastOneSep = function (n, r, i) {
          if (n.idx === this.occurrence) {
            var a = dt(r.concat(i))
            ;(this.result.isEndOfRule = a === void 0),
              a instanceof he &&
                ((this.result.token = a.terminalType), (this.result.occurrence = a.idx))
          } else e.prototype.walkAtLeastOneSep.call(this, n, r, i)
        }),
        t
      )
    })(_r)
  function ki(e, t, n) {
    n === void 0 && (n = []), (n = it(n))
    var r = [],
      i = 0
    function a(c) {
      return c.concat(Ge(e, i + 1))
    }
    function o(c) {
      var p = ki(a(c), t, n)
      return r.concat(p)
    }
    for (; n.length < t && i < e.length; ) {
      var s = e[i]
      if (s instanceof He) return o(s.definition)
      if (s instanceof ze) return o(s.definition)
      if (s instanceof Me) r = o(s.definition)
      else if (s instanceof at) {
        var u = s.definition.concat([new Ae({ definition: s.definition })])
        return o(u)
      } else if (s instanceof ot) {
        var u = [
          new He({ definition: s.definition }),
          new Ae({ definition: [new he({ terminalType: s.separator })].concat(s.definition) })
        ]
        return o(u)
      } else if (s instanceof Xe) {
        var u = s.definition.concat([
          new Ae({ definition: [new he({ terminalType: s.separator })].concat(s.definition) })
        ])
        r = o(u)
      } else if (s instanceof Ae) {
        var u = s.definition.concat([new Ae({ definition: s.definition })])
        r = o(u)
      } else {
        if (s instanceof Ze)
          return (
            V(s.definition, function (c) {
              r = o(c.definition)
            }),
            r
          )
        if (s instanceof he) n.push(s.terminalType)
        else throw Error('non exhaustive match')
      }
      i++
    }
    return r.push({ partialPath: n, suffixDef: Ge(e, i) }), r
  }
  function Co(e, t, n, r) {
    var i = 'EXIT_NONE_TERMINAL',
      a = [i],
      o = 'EXIT_ALTERNATIVE',
      s = !1,
      u = t.length,
      c = u - r - 1,
      p = [],
      f = []
    for (f.push({ idx: -1, def: e, ruleStack: [], occurrenceStack: [] }); !le(f); ) {
      var m = f.pop()
      if (m === o) {
        s && Ia(f).idx <= c && f.pop()
        continue
      }
      var C = m.def,
        A = m.idx,
        l = m.ruleStack,
        T = m.occurrenceStack
      if (!le(C)) {
        var E = C[0]
        if (E === i) {
          var R = { idx: A, def: Ge(C), ruleStack: Jn(l), occurrenceStack: Jn(T) }
          f.push(R)
        } else if (E instanceof he)
          if (A < u - 1) {
            var U = A + 1,
              j = t[U]
            if (n(j, E.terminalType)) {
              var R = { idx: U, def: Ge(C), ruleStack: l, occurrenceStack: T }
              f.push(R)
            }
          } else if (A === u - 1)
            p.push({
              nextTokenType: E.terminalType,
              nextTokenOccurrence: E.idx,
              ruleStack: l,
              occurrenceStack: T
            }),
              (s = !0)
          else throw Error('non exhaustive match')
        else if (E instanceof ze) {
          var Ne = it(l)
          Ne.push(E.nonTerminalName)
          var Je = it(T)
          Je.push(E.idx)
          var R = { idx: A, def: E.definition.concat(a, Ge(C)), ruleStack: Ne, occurrenceStack: Je }
          f.push(R)
        } else if (E instanceof Me) {
          var Te = { idx: A, def: Ge(C), ruleStack: l, occurrenceStack: T }
          f.push(Te), f.push(o)
          var Ye = { idx: A, def: E.definition.concat(Ge(C)), ruleStack: l, occurrenceStack: T }
          f.push(Ye)
        } else if (E instanceof at) {
          var ke = new Ae({ definition: E.definition, idx: E.idx }),
            Be = E.definition.concat([ke], Ge(C)),
            R = { idx: A, def: Be, ruleStack: l, occurrenceStack: T }
          f.push(R)
        } else if (E instanceof ot) {
          var Ve = new he({ terminalType: E.separator }),
            ke = new Ae({ definition: [Ve].concat(E.definition), idx: E.idx }),
            Be = E.definition.concat([ke], Ge(C)),
            R = { idx: A, def: Be, ruleStack: l, occurrenceStack: T }
          f.push(R)
        } else if (E instanceof Xe) {
          var Te = { idx: A, def: Ge(C), ruleStack: l, occurrenceStack: T }
          f.push(Te), f.push(o)
          var Ve = new he({ terminalType: E.separator }),
            Zt = new Ae({ definition: [Ve].concat(E.definition), idx: E.idx }),
            Be = E.definition.concat([Zt], Ge(C)),
            Ye = { idx: A, def: Be, ruleStack: l, occurrenceStack: T }
          f.push(Ye)
        } else if (E instanceof Ae) {
          var Te = { idx: A, def: Ge(C), ruleStack: l, occurrenceStack: T }
          f.push(Te), f.push(o)
          var Zt = new Ae({ definition: E.definition, idx: E.idx }),
            Be = E.definition.concat([Zt], Ge(C)),
            Ye = { idx: A, def: Be, ruleStack: l, occurrenceStack: T }
          f.push(Ye)
        } else if (E instanceof Ze)
          for (var Bt = E.definition.length - 1; Bt >= 0; Bt--) {
            var pt = E.definition[Bt],
              ut = { idx: A, def: pt.definition.concat(Ge(C)), ruleStack: l, occurrenceStack: T }
            f.push(ut), f.push(o)
          }
        else if (E instanceof He)
          f.push({ idx: A, def: E.definition.concat(Ge(C)), ruleStack: l, occurrenceStack: T })
        else if (E instanceof pn) f.push(Tl(E, A, l, T))
        else throw Error('non exhaustive match')
      }
    }
    return p
  }
  function Tl(e, t, n, r) {
    var i = it(n)
    i.push(e.name)
    var a = it(r)
    return a.push(1), { idx: t, def: e.definition, ruleStack: i, occurrenceStack: a }
  }
  var Ao =
      (globalThis && globalThis.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })(),
    pe
  ;(function (e) {
    ;(e[(e.OPTION = 0)] = 'OPTION'),
      (e[(e.REPETITION = 1)] = 'REPETITION'),
      (e[(e.REPETITION_MANDATORY = 2)] = 'REPETITION_MANDATORY'),
      (e[(e.REPETITION_MANDATORY_WITH_SEPARATOR = 3)] = 'REPETITION_MANDATORY_WITH_SEPARATOR'),
      (e[(e.REPETITION_WITH_SEPARATOR = 4)] = 'REPETITION_WITH_SEPARATOR'),
      (e[(e.ALTERNATION = 5)] = 'ALTERNATION')
  })(pe || (pe = {}))
  function gl(e) {
    if (e instanceof Me) return pe.OPTION
    if (e instanceof Ae) return pe.REPETITION
    if (e instanceof at) return pe.REPETITION_MANDATORY
    if (e instanceof ot) return pe.REPETITION_MANDATORY_WITH_SEPARATOR
    if (e instanceof Xe) return pe.REPETITION_WITH_SEPARATOR
    if (e instanceof Ze) return pe.ALTERNATION
    throw Error('non exhaustive match')
  }
  function Ll(e, t, n, r, i, a) {
    var o = wi(e, t, n),
      s = Lo(o) ? gr : Tr
    return a(o, r, s, i)
  }
  function Rl(e, t, n, r, i, a) {
    var o = ji(e, t, i, n),
      s = Lo(o) ? gr : Tr
    return a(o[0], s, r)
  }
  function Ul(e, t, n, r) {
    var i = e.length,
      a = vt(e, function (u) {
        return vt(u, function (c) {
          return c.length === 1
        })
      })
    if (t)
      return function (u) {
        for (
          var c = P(u, function (U) {
              return U.GATE
            }),
            p = 0;
          p < i;
          p++
        ) {
          var f = e[p],
            m = f.length,
            C = c[p]
          if (!(C !== void 0 && C.call(this) === !1))
            e: for (var A = 0; A < m; A++) {
              for (var l = f[A], T = l.length, E = 0; E < T; E++) {
                var R = this.LA(E + 1)
                if (n(R, l[E]) === !1) continue e
              }
              return p
            }
        }
      }
    if (a && !r) {
      var o = P(e, function (u) {
          return rt(u)
        }),
        s = Ke(
          o,
          function (u, c, p) {
            return (
              V(c, function (f) {
                G(u, f.tokenTypeIdx) || (u[f.tokenTypeIdx] = p),
                  V(f.categoryMatches, function (m) {
                    G(u, m) || (u[m] = p)
                  })
              }),
              u
            )
          },
          []
        )
      return function () {
        var u = this.LA(1)
        return s[u.tokenTypeIdx]
      }
    } else
      return function () {
        for (var u = 0; u < i; u++) {
          var c = e[u],
            p = c.length
          e: for (var f = 0; f < p; f++) {
            for (var m = c[f], C = m.length, A = 0; A < C; A++) {
              var l = this.LA(A + 1)
              if (n(l, m[A]) === !1) continue e
            }
            return u
          }
        }
      }
  }
  function Ol(e, t, n) {
    var r = vt(e, function (c) {
        return c.length === 1
      }),
      i = e.length
    if (r && !n) {
      var a = rt(e)
      if (a.length === 1 && le(a[0].categoryMatches)) {
        var o = a[0],
          s = o.tokenTypeIdx
        return function () {
          return this.LA(1).tokenTypeIdx === s
        }
      } else {
        var u = Ke(
          a,
          function (c, p, f) {
            return (
              (c[p.tokenTypeIdx] = !0),
              V(p.categoryMatches, function (m) {
                c[m] = !0
              }),
              c
            )
          },
          []
        )
        return function () {
          var c = this.LA(1)
          return u[c.tokenTypeIdx] === !0
        }
      }
    } else
      return function () {
        e: for (var c = 0; c < i; c++) {
          for (var p = e[c], f = p.length, m = 0; m < f; m++) {
            var C = this.LA(m + 1)
            if (t(C, p[m]) === !1) continue e
          }
          return !0
        }
        return !1
      }
  }
  var Nl = (function (e) {
      Ao(t, e)
      function t(n, r, i) {
        var a = e.call(this) || this
        return (a.topProd = n), (a.targetOccurrence = r), (a.targetProdType = i), a
      }
      return (
        (t.prototype.startWalking = function () {
          return this.walk(this.topProd), this.restDef
        }),
        (t.prototype.checkIsTarget = function (n, r, i, a) {
          return n.idx === this.targetOccurrence && this.targetProdType === r
            ? ((this.restDef = i.concat(a)), !0)
            : !1
        }),
        (t.prototype.walkOption = function (n, r, i) {
          this.checkIsTarget(n, pe.OPTION, r, i) || e.prototype.walkOption.call(this, n, r, i)
        }),
        (t.prototype.walkAtLeastOne = function (n, r, i) {
          this.checkIsTarget(n, pe.REPETITION_MANDATORY, r, i) ||
            e.prototype.walkOption.call(this, n, r, i)
        }),
        (t.prototype.walkAtLeastOneSep = function (n, r, i) {
          this.checkIsTarget(n, pe.REPETITION_MANDATORY_WITH_SEPARATOR, r, i) ||
            e.prototype.walkOption.call(this, n, r, i)
        }),
        (t.prototype.walkMany = function (n, r, i) {
          this.checkIsTarget(n, pe.REPETITION, r, i) || e.prototype.walkOption.call(this, n, r, i)
        }),
        (t.prototype.walkManySep = function (n, r, i) {
          this.checkIsTarget(n, pe.REPETITION_WITH_SEPARATOR, r, i) ||
            e.prototype.walkOption.call(this, n, r, i)
        }),
        t
      )
    })(Rr),
    So = (function (e) {
      Ao(t, e)
      function t(n, r, i) {
        var a = e.call(this) || this
        return (
          (a.targetOccurrence = n), (a.targetProdType = r), (a.targetRef = i), (a.result = []), a
        )
      }
      return (
        (t.prototype.checkIsTarget = function (n, r) {
          n.idx === this.targetOccurrence &&
            this.targetProdType === r &&
            (this.targetRef === void 0 || n === this.targetRef) &&
            (this.result = n.definition)
        }),
        (t.prototype.visitOption = function (n) {
          this.checkIsTarget(n, pe.OPTION)
        }),
        (t.prototype.visitRepetition = function (n) {
          this.checkIsTarget(n, pe.REPETITION)
        }),
        (t.prototype.visitRepetitionMandatory = function (n) {
          this.checkIsTarget(n, pe.REPETITION_MANDATORY)
        }),
        (t.prototype.visitRepetitionMandatoryWithSeparator = function (n) {
          this.checkIsTarget(n, pe.REPETITION_MANDATORY_WITH_SEPARATOR)
        }),
        (t.prototype.visitRepetitionWithSeparator = function (n) {
          this.checkIsTarget(n, pe.REPETITION_WITH_SEPARATOR)
        }),
        (t.prototype.visitAlternation = function (n) {
          this.checkIsTarget(n, pe.ALTERNATION)
        }),
        t
      )
    })(nn)
  function To(e) {
    for (var t = new Array(e), n = 0; n < e; n++) t[n] = []
    return t
  }
  function xi(e) {
    for (var t = [''], n = 0; n < e.length; n++) {
      for (var r = e[n], i = [], a = 0; a < t.length; a++) {
        var o = t[a]
        i.push(o + '_' + r.tokenTypeIdx)
        for (var s = 0; s < r.categoryMatches.length; s++) {
          var u = '_' + r.categoryMatches[s]
          i.push(o + u)
        }
      }
      t = i
    }
    return t
  }
  function _l(e, t, n) {
    for (var r = 0; r < e.length; r++)
      if (r !== n)
        for (var i = e[r], a = 0; a < t.length; a++) {
          var o = t[a]
          if (i[o] === !0) return !1
        }
    return !0
  }
  function go(e, t) {
    for (
      var n = P(e, function (p) {
          return ki([p], 1)
        }),
        r = To(n.length),
        i = P(n, function (p) {
          var f = {}
          return (
            V(p, function (m) {
              var C = xi(m.partialPath)
              V(C, function (A) {
                f[A] = !0
              })
            }),
            f
          )
        }),
        a = n,
        o = 1;
      o <= t;
      o++
    ) {
      var s = a
      a = To(s.length)
      for (
        var u = function (p) {
            for (var f = s[p], m = 0; m < f.length; m++) {
              var C = f[m].partialPath,
                A = f[m].suffixDef,
                l = xi(C),
                T = _l(i, l, p)
              if (T || le(A) || C.length === t) {
                var E = r[p]
                if (Vi(E, C) === !1) {
                  E.push(C)
                  for (var R = 0; R < l.length; R++) {
                    var U = l[R]
                    i[p][U] = !0
                  }
                }
              } else {
                var j = ki(A, o + 1, C)
                ;(a[p] = a[p].concat(j)),
                  V(j, function (Ne) {
                    var Je = xi(Ne.partialPath)
                    V(Je, function (Te) {
                      i[p][Te] = !0
                    })
                  })
              }
            }
          },
          c = 0;
        c < s.length;
        c++
      )
        u(c)
    }
    return r
  }
  function wi(e, t, n, r) {
    var i = new So(e, pe.ALTERNATION, r)
    return t.accept(i), go(i.result, n)
  }
  function ji(e, t, n, r) {
    var i = new So(e, n)
    t.accept(i)
    var a = i.result,
      o = new Nl(t, e, n),
      s = o.startWalking(),
      u = new He({ definition: a }),
      c = new He({ definition: s })
    return go([u, c], r)
  }
  function Vi(e, t) {
    e: for (var n = 0; n < e.length; n++) {
      var r = e[n]
      if (r.length === t.length) {
        for (var i = 0; i < r.length; i++) {
          var a = t[i],
            o = r[i],
            s = a === o || o.categoryMatchesMap[a.tokenTypeIdx] !== void 0
          if (s === !1) continue e
        }
        return !0
      }
    }
    return !1
  }
  function Il(e, t) {
    return (
      e.length < t.length &&
      vt(e, function (n, r) {
        var i = t[r]
        return n === i || i.categoryMatchesMap[n.tokenTypeIdx]
      })
    )
  }
  function Lo(e) {
    return vt(e, function (t) {
      return vt(t, function (n) {
        return vt(n, function (r) {
          return le(r.categoryMatches)
        })
      })
    })
  }
  var Gi =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i
              }) ||
            function (r, i) {
              for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        e(t, n)
        function r() {
          this.constructor = t
        }
        t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
      }
    })()
  function Bl(e, t, n, r, i, a) {
    var o = P(e, function (R) {
        return Ml(R, i)
      }),
      s = P(e, function (R) {
        return Oo(R, R, i)
      }),
      u = [],
      c = [],
      p = []
    vt(s, le) &&
      ((u = P(e, function (R) {
        return Gl(R, i)
      })),
      (c = P(e, function (R) {
        return Kl(R, t, r, i)
      })),
      (p = ql(e, t, i)))
    var f = zl(e, n, i),
      m = P(n, function (R) {
        return wl(R, i)
      }),
      C = Fl(e, i),
      A = Xl(e, i),
      l = P(e, function (R) {
        return Jl(R, i)
      }),
      T = P(e, function (R) {
        return kl(R, i)
      }),
      E = P(e, function (R) {
        return jl(R, e, a, i)
      })
    return rt(o.concat(m, C, A, p, s, u, c, f, l, T, E))
  }
  function Fl(e, t) {
    var n = []
    return (
      V(e, function (r) {
        var i = new Pi('')
        r.accept(i)
        var a = P(i.result, function (o) {
          return o.orgProd
        })
        n.push(
          P(a, function (o) {
            return xl(r, o, t)
          })
        )
      }),
      rt(n)
    )
  }
  function Ml(e, t) {
    var n = new Pl()
    e.accept(n)
    var r = n.allProductions,
      i = Fa(r, bl),
      a = mt(i, function (s) {
        return s.length > 1
      }),
      o = P(qe(a), function (s) {
        var u = dt(s),
          c = t.buildDuplicateFoundError(e, s),
          p = Ut(u),
          f = {
            message: c,
            type: be.DUPLICATE_PRODUCTIONS,
            ruleName: e.name,
            dslName: p,
            occurrence: u.idx
          },
          m = Ro(u)
        return m && (f.parameter = m), f
      })
    return o
  }
  function bl(e) {
    return Ut(e) + '_#_' + e.idx + '_#_' + Ro(e)
  }
  function Ro(e) {
    return e instanceof he ? e.terminalType.name : e instanceof ze ? e.nonTerminalName : ''
  }
  var Pl = (function (e) {
      Gi(t, e)
      function t() {
        var n = (e !== null && e.apply(this, arguments)) || this
        return (n.allProductions = []), n
      }
      return (
        (t.prototype.visitNonTerminal = function (n) {
          this.allProductions.push(n)
        }),
        (t.prototype.visitOption = function (n) {
          this.allProductions.push(n)
        }),
        (t.prototype.visitRepetitionWithSeparator = function (n) {
          this.allProductions.push(n)
        }),
        (t.prototype.visitRepetitionMandatory = function (n) {
          this.allProductions.push(n)
        }),
        (t.prototype.visitRepetitionMandatoryWithSeparator = function (n) {
          this.allProductions.push(n)
        }),
        (t.prototype.visitRepetition = function (n) {
          this.allProductions.push(n)
        }),
        (t.prototype.visitAlternation = function (n) {
          this.allProductions.push(n)
        }),
        (t.prototype.visitTerminal = function (n) {
          this.allProductions.push(n)
        }),
        t
      )
    })(nn),
    hn = /^[a-zA-Z_]\w*$/,
    Uo = new RegExp(hn.source.replace('^', '^\\$'))
  function kl(e, t) {
    var n = [],
      r = e.name
    return (
      r.match(hn) ||
        n.push({
          message: t.buildInvalidRuleNameError({ topLevelRule: e, expectedPattern: hn }),
          type: be.INVALID_RULE_NAME,
          ruleName: r
        }),
      n
    )
  }
  function xl(e, t, n) {
    var r = [],
      i
    return (
      t.name.match(Uo) ||
        ((i = n.buildInvalidNestedRuleNameError(e, t)),
        r.push({ message: i, type: be.INVALID_NESTED_RULE_NAME, ruleName: e.name })),
      r
    )
  }
  function wl(e, t) {
    var n = [],
      r = e.name
    return (
      r.match(hn) ||
        n.push({
          message: t.buildTokenNameError({ tokenType: e, expectedPattern: hn }),
          type: be.INVALID_TOKEN_NAME
        }),
      n
    )
  }
  function jl(e, t, n, r) {
    var i = [],
      a = Ke(
        t,
        function (s, u) {
          return u.name === e.name ? s + 1 : s
        },
        0
      )
    if (a > 1) {
      var o = r.buildDuplicateRuleNameError({ topLevelRule: e, grammarName: n })
      i.push({ message: o, type: be.DUPLICATE_RULE_NAME, ruleName: e.name })
    }
    return i
  }
  function Vl(e, t, n) {
    var r = [],
      i
    return (
      Fe(t, e) ||
        ((i =
          'Invalid rule override, rule: ->' +
          e +
          '<- cannot be overridden in the grammar: ->' +
          n +
          '<-as it is not defined in any of the super grammars '),
        r.push({ message: i, type: be.INVALID_RULE_OVERRIDE, ruleName: e })),
      r
    )
  }
  function Oo(e, t, n, r) {
    r === void 0 && (r = [])
    var i = [],
      a = Ir(t.definition)
    if (le(a)) return []
    var o = e.name,
      s = Fe(a, e)
    s &&
      i.push({
        message: n.buildLeftRecursionError({ topLevelRule: e, leftRecursionPath: r }),
        type: be.LEFT_RECURSION,
        ruleName: o
      })
    var u = hr(a, r.concat([e])),
      c = P(u, function (p) {
        var f = it(r)
        return f.push(p), Oo(e, p, n, f)
      })
    return i.concat(rt(c))
  }
  function Ir(e) {
    var t = []
    if (le(e)) return t
    var n = dt(e)
    if (n instanceof ze) t.push(n.referencedRule)
    else if (
      n instanceof He ||
      n instanceof Me ||
      n instanceof at ||
      n instanceof ot ||
      n instanceof Xe ||
      n instanceof Ae
    )
      t = t.concat(Ir(n.definition))
    else if (n instanceof Ze)
      t = rt(
        P(n.definition, function (o) {
          return Ir(o.definition)
        })
      )
    else if (!(n instanceof he)) throw Error('non exhaustive match')
    var r = Ur(n),
      i = e.length > 1
    if (r && i) {
      var a = Ge(e)
      return t.concat(Ir(a))
    } else return t
  }
  var Ki = (function (e) {
    Gi(t, e)
    function t() {
      var n = (e !== null && e.apply(this, arguments)) || this
      return (n.alternations = []), n
    }
    return (
      (t.prototype.visitAlternation = function (n) {
        this.alternations.push(n)
      }),
      t
    )
  })(nn)
  function Gl(e, t) {
    var n = new Ki()
    e.accept(n)
    var r = n.alternations,
      i = Ke(
        r,
        function (a, o) {
          var s = Jn(o.definition),
            u = P(s, function (c, p) {
              var f = Co([c], [], null, 1)
              return le(f)
                ? {
                    message: t.buildEmptyAlternationError({
                      topLevelRule: e,
                      alternation: o,
                      emptyChoiceIdx: p
                    }),
                    type: be.NONE_LAST_EMPTY_ALT,
                    ruleName: e.name,
                    occurrence: o.idx,
                    alternative: p + 1
                  }
                : null
            })
          return a.concat(Hn(u))
        },
        []
      )
    return i
  }
  function Kl(e, t, n, r) {
    var i = new Ki()
    e.accept(i)
    var a = i.alternations,
      o = n[e.name]
    o &&
      (a = un(a, function (u) {
        return o[Ut(u) + (u.idx === 0 ? '' : u.idx)]
      })),
      (a = un(a, function (u) {
        return u.ignoreAmbiguities === !0
      }))
    var s = Ke(
      a,
      function (u, c) {
        var p = c.idx,
          f = c.maxLookahead || t,
          m = wi(p, e, f, c),
          C = Hl(m, c, e, r),
          A = Yl(m, c, e, r)
        return u.concat(C, A)
      },
      []
    )
    return s
  }
  var Wl = (function (e) {
    Gi(t, e)
    function t() {
      var n = (e !== null && e.apply(this, arguments)) || this
      return (n.allProductions = []), n
    }
    return (
      (t.prototype.visitRepetitionWithSeparator = function (n) {
        this.allProductions.push(n)
      }),
      (t.prototype.visitRepetitionMandatory = function (n) {
        this.allProductions.push(n)
      }),
      (t.prototype.visitRepetitionMandatoryWithSeparator = function (n) {
        this.allProductions.push(n)
      }),
      (t.prototype.visitRepetition = function (n) {
        this.allProductions.push(n)
      }),
      t
    )
  })(nn)
  function Jl(e, t) {
    var n = new Ki()
    e.accept(n)
    var r = n.alternations,
      i = Ke(
        r,
        function (a, o) {
          return (
            o.definition.length > 255 &&
              a.push({
                message: t.buildTooManyAlternativesError({ topLevelRule: e, alternation: o }),
                type: be.TOO_MANY_ALTS,
                ruleName: e.name,
                occurrence: o.idx
              }),
            a
          )
        },
        []
      )
    return i
  }
  function ql(e, t, n) {
    var r = []
    return (
      V(e, function (i) {
        var a = new Wl()
        i.accept(a)
        var o = a.allProductions
        V(o, function (s) {
          var u = gl(s),
            c = s.maxLookahead || t,
            p = s.idx,
            f = ji(p, i, u, c),
            m = f[0]
          if (le(rt(m))) {
            var C = n.buildEmptyRepetitionError({ topLevelRule: i, repetition: s })
            r.push({ message: C, type: be.NO_NON_EMPTY_LOOKAHEAD, ruleName: i.name })
          }
        })
      }),
      r
    )
  }
  function Hl(e, t, n, r) {
    var i = [],
      a = Ke(
        e,
        function (s, u, c) {
          return (
            t.definition[c].ignoreAmbiguities === !0 ||
              V(u, function (p) {
                var f = [c]
                V(e, function (m, C) {
                  c !== C && Vi(m, p) && t.definition[C].ignoreAmbiguities !== !0 && f.push(C)
                }),
                  f.length > 1 && !Vi(i, p) && (i.push(p), s.push({ alts: f, path: p }))
              }),
            s
          )
        },
        []
      ),
      o = P(a, function (s) {
        var u = P(s.alts, function (p) {
            return p + 1
          }),
          c = r.buildAlternationAmbiguityError({
            topLevelRule: n,
            alternation: t,
            ambiguityIndices: u,
            prefixPath: s.path
          })
        return {
          message: c,
          type: be.AMBIGUOUS_ALTS,
          ruleName: n.name,
          occurrence: t.idx,
          alternatives: [s.alts]
        }
      })
    return o
  }
  function Yl(e, t, n, r) {
    var i = [],
      a = Ke(
        e,
        function (o, s, u) {
          var c = P(s, function (p) {
            return { idx: u, path: p }
          })
          return o.concat(c)
        },
        []
      )
    return (
      V(a, function (o) {
        var s = t.definition[o.idx]
        if (s.ignoreAmbiguities !== !0) {
          var u = o.idx,
            c = o.path,
            p = cc(a, function (m) {
              return t.definition[m.idx].ignoreAmbiguities !== !0 && m.idx < u && Il(m.path, c)
            }),
            f = P(p, function (m) {
              var C = [m.idx + 1, u + 1],
                A = t.idx === 0 ? '' : t.idx,
                l = r.buildAlternationPrefixAmbiguityError({
                  topLevelRule: n,
                  alternation: t,
                  ambiguityIndices: C,
                  prefixPath: m.path
                })
              return {
                message: l,
                type: be.AMBIGUOUS_PREFIX_ALTS,
                ruleName: n.name,
                occurrence: A,
                alternatives: C
              }
            })
          i = i.concat(f)
        }
      }),
      i
    )
  }
  function zl(e, t, n) {
    var r = [],
      i = P(t, function (a) {
        return a.name
      })
    return (
      V(e, function (a) {
        var o = a.name
        if (Fe(i, o)) {
          var s = n.buildNamespaceConflictError(a)
          r.push({ message: s, type: be.CONFLICT_TOKENS_RULES_NAMESPACE, ruleName: o })
        }
      }),
      r
    )
  }
  function Xl(e, t) {
    var n = []
    return (
      V(e, function (r) {
        var i = new Pi('')
        r.accept(i)
        var a = Fa(i.result, function (s) {
            return s.name
          }),
          o = mt(a, function (s) {
            return s.length > 1
          })
        V(qe(o), function (s) {
          var u = P(s, function (p) {
              return p.orgProd
            }),
            c = t.buildDuplicateNestedRuleNameError(r, u)
          n.push({ message: c, type: be.DUPLICATE_NESTED_NAME, ruleName: r.name })
        })
      }),
      n
    )
  }
  var Wi = {
    buildMismatchTokenMessage: function (e) {
      var t = e.expected,
        n = e.actual
      e.previous, e.ruleName
      var r = eo(t),
        i = r ? '--> ' + fn(t) + ' <--' : 'token of type --> ' + t.name + ' <--',
        a = 'Expecting ' + i + " but found --> '" + n.image + "' <--"
      return a
    },
    buildNotAllInputParsedMessage: function (e) {
      var t = e.firstRedundant
      return e.ruleName, 'Redundant input, expecting EOF but found: ' + t.image
    },
    buildNoViableAltMessage: function (e) {
      var t = e.expectedPathsPerAlt,
        n = e.actual
      e.previous
      var r = e.customUserDescription
      e.ruleName
      var i = 'Expecting: ',
        a = dt(n).image,
        o =
          `
but found: '` +
          a +
          "'"
      if (r) return i + r + o
      var s = Ke(
          t,
          function (f, m) {
            return f.concat(m)
          },
          []
        ),
        u = P(s, function (f) {
          return (
            '[' +
            P(f, function (m) {
              return fn(m)
            }).join(', ') +
            ']'
          )
        }),
        c = P(u, function (f, m) {
          return '  ' + (m + 1) + '. ' + f
        }),
        p =
          `one of these possible Token sequences:
` +
          c.join(`
`)
      return i + p + o
    },
    buildEarlyExitMessage: function (e) {
      var t = e.expectedIterationPaths,
        n = e.actual,
        r = e.customUserDescription
      e.ruleName
      var i = 'Expecting: ',
        a = dt(n).image,
        o =
          `
but found: '` +
          a +
          "'"
      if (r) return i + r + o
      var s = P(t, function (c) {
          return (
            '[' +
            P(c, function (p) {
              return fn(p)
            }).join(',') +
            ']'
          )
        }),
        u =
          `expecting at least one iteration which starts with one of these possible Token sequences::
  ` +
          ('<' + s.join(' ,') + '>')
      return i + u + o
    }
  }
  Object.freeze(Wi)
  var No = {
      buildRuleNotFoundError: function (e, t) {
        var n =
          'Invalid grammar, reference to a rule which is not defined: ->' +
          t.nonTerminalName +
          `<-
inside top level rule: ->` +
          e.name +
          '<-'
        return n
      }
    },
    Br = {
      buildDuplicateFoundError: function (e, t) {
        function n(p) {
          return p instanceof he ? p.terminalType.name : p instanceof ze ? p.nonTerminalName : ''
        }
        var r = e.name,
          i = dt(t),
          a = i.idx,
          o = Ut(i),
          s = n(i),
          u = a > 0,
          c =
            '->' +
            o +
            (u ? a : '') +
            '<- ' +
            (s ? 'with argument: ->' + s + '<-' : '') +
            `
                  appears more than once (` +
            t.length +
            ' times) in the top level rule: ->' +
            r +
            `<-.                  
                  For further details see: https://sap.github.io/chevrotain/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `
        return (
          (c = c.replace(/[ \t]+/g, ' ')),
          (c = c.replace(
            /\s\s+/g,
            `
`
          )),
          c
        )
      },
      buildInvalidNestedRuleNameError: function (e, t) {
        var n =
          'Invalid nested rule name: ->' +
          t.name +
          '<- inside rule: ->' +
          e.name +
          `<-
` +
          ('it must match the pattern: ->' +
            Uo.toString() +
            `<-.
`) +
          "Note that this means a nested rule name must start with the '$'(dollar) sign."
        return n
      },
      buildDuplicateNestedRuleNameError: function (e, t) {
        var n = dt(t).name,
          r =
            'Duplicate nested rule name: ->' +
            n +
            '<- inside rule: ->' +
            e.name +
            `<-
A nested name must be unique in the scope of a top level grammar rule.`
        return r
      },
      buildNamespaceConflictError: function (e) {
        var t =
          `Namespace conflict found in grammar.
` +
          ('The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <' +
            e.name +
            `>.
`) +
          `To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`
        return t
      },
      buildAlternationPrefixAmbiguityError: function (e) {
        var t = P(e.prefixPath, function (i) {
            return fn(i)
          }).join(', '),
          n = e.alternation.idx === 0 ? '' : e.alternation.idx,
          r =
            'Ambiguous alternatives: <' +
            e.ambiguityIndices.join(' ,') +
            `> due to common lookahead prefix
` +
            ('in <OR' +
              n +
              '> inside <' +
              e.topLevelRule.name +
              `> Rule,
`) +
            ('<' +
              t +
              `> may appears as a prefix path in all these alternatives.
`) +
            `See: https://sap.github.io/chevrotain/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`
        return r
      },
      buildAlternationAmbiguityError: function (e) {
        var t = P(e.prefixPath, function (i) {
            return fn(i)
          }).join(', '),
          n = e.alternation.idx === 0 ? '' : e.alternation.idx,
          r =
            'Ambiguous Alternatives Detected: <' +
            e.ambiguityIndices.join(' ,') +
            '> in <OR' +
            n +
            '>' +
            (' inside <' +
              e.topLevelRule.name +
              `> Rule,
`) +
            ('<' +
              t +
              `> may appears as a prefix path in all these alternatives.
`)
        return (
          (r =
            r +
            `See: https://sap.github.io/chevrotain/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`),
          r
        )
      },
      buildEmptyRepetitionError: function (e) {
        var t = Ut(e.repetition)
        e.repetition.idx !== 0 && (t += e.repetition.idx)
        var n =
          'The repetition <' +
          t +
          '> within Rule <' +
          e.topLevelRule.name +
          `> can never consume any tokens.
This could lead to an infinite loop.`
        return n
      },
      buildTokenNameError: function (e) {
        var t = e.tokenType.name,
          n =
            'Invalid Grammar Token name: ->' +
            t +
            '<- it must match the pattern: ->' +
            e.expectedPattern.toString() +
            '<-'
        return n
      },
      buildEmptyAlternationError: function (e) {
        var t =
          'Ambiguous empty alternative: <' +
          (e.emptyChoiceIdx + 1) +
          '>' +
          (' in <OR' +
            e.alternation.idx +
            '> inside <' +
            e.topLevelRule.name +
            `> Rule.
`) +
          'Only the last alternative may be an empty alternative.'
        return t
      },
      buildTooManyAlternativesError: function (e) {
        var t =
          `An Alternation cannot have more than 256 alternatives:
` +
          ('<OR' +
            e.alternation.idx +
            '> inside <' +
            e.topLevelRule.name +
            `> Rule.
 has ` +
            (e.alternation.definition.length + 1) +
            ' alternatives.')
        return t
      },
      buildLeftRecursionError: function (e) {
        var t = e.topLevelRule.name,
          n = P(e.leftRecursionPath, function (a) {
            return a.name
          }),
          r = t + ' --> ' + n.concat([t]).join(' --> '),
          i =
            `Left Recursion found in grammar.
` +
            ('rule: <' +
              t +
              `> can be invoked from itself (directly or indirectly)
`) +
            (`without consuming any Tokens. The grammar path that causes this is: 
 ` +
              r +
              `
`) +
            ` To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.`
        return i
      },
      buildInvalidRuleNameError: function (e) {
        var t = e.topLevelRule.name,
          n = e.expectedPattern.toString(),
          r = 'Invalid grammar rule name: ->' + t + '<- it must match the pattern: ->' + n + '<-'
        return r
      },
      buildDuplicateRuleNameError: function (e) {
        var t
        e.topLevelRule instanceof pn ? (t = e.topLevelRule.name) : (t = e.topLevelRule)
        var n =
          'Duplicate definition, rule: ->' +
          t +
          '<- is already defined in the grammar: ->' +
          e.grammarName +
          '<-'
        return n
      }
    },
    Zl =
      (globalThis && globalThis.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })()
  function Ql(e, t) {
    var n = new $l(e, t)
    return n.resolveRefs(), n.errors
  }
  var $l = (function (e) {
    Zl(t, e)
    function t(n, r) {
      var i = e.call(this) || this
      return (i.nameToTopRule = n), (i.errMsgProvider = r), (i.errors = []), i
    }
    return (
      (t.prototype.resolveRefs = function () {
        var n = this
        V(qe(this.nameToTopRule), function (r) {
          ;(n.currTopLevel = r), r.accept(n)
        })
      }),
      (t.prototype.visitNonTerminal = function (n) {
        var r = this.nameToTopRule[n.nonTerminalName]
        if (r) n.referencedRule = r
        else {
          var i = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, n)
          this.errors.push({
            message: i,
            type: be.UNRESOLVED_SUBRULE_REF,
            ruleName: this.currTopLevel.name,
            unresolvedRefName: n.nonTerminalName
          })
        }
      }),
      t
    )
  })(nn)
  function _o(e) {
    e = mr(e, { errMsgProvider: No })
    var t = {}
    return (
      V(e.rules, function (n) {
        t[n.name] = n
      }),
      Ql(t, e.errMsgProvider)
    )
  }
  function Io(e) {
    return (
      (e = mr(e, { errMsgProvider: Br, ignoredIssues: {} })),
      Bl(e.rules, e.maxLookahead, e.tokenTypes, e.ignoredIssues, e.errMsgProvider, e.grammarName)
    )
  }
  function ef(e) {
    V(e.rules, function (t) {
      var n = new fo()
      t.accept(n),
        V(n.dslMethods, function (r) {
          V(r, function (i, a) {
            i.idx = a + 1
          })
        })
    })
  }
  var Bo = 'MismatchedTokenException',
    Fo = 'NoViableAltException',
    Mo = 'EarlyExitException',
    bo = 'NotAllInputParsedException',
    Po = [Bo, Fo, Mo, bo]
  Object.freeze(Po)
  function rr(e) {
    return Fe(Po, e.name)
  }
  function Fr(e, t, n) {
    ;(this.name = Bo),
      (this.message = e),
      (this.token = t),
      (this.previousToken = n),
      (this.resyncedTokens = [])
  }
  Fr.prototype = Error.prototype
  function Ji(e, t, n) {
    ;(this.name = Fo),
      (this.message = e),
      (this.token = t),
      (this.previousToken = n),
      (this.resyncedTokens = [])
  }
  Ji.prototype = Error.prototype
  function qi(e, t) {
    ;(this.name = bo), (this.message = e), (this.token = t), (this.resyncedTokens = [])
  }
  qi.prototype = Error.prototype
  function Hi(e, t, n) {
    ;(this.name = Mo),
      (this.message = e),
      (this.token = t),
      (this.previousToken = n),
      (this.resyncedTokens = [])
  }
  Hi.prototype = Error.prototype
  var Yi = {},
    ko = 'InRuleRecoveryException'
  function xo(e) {
    ;(this.name = ko), (this.message = e)
  }
  xo.prototype = Error.prototype
  var tf = (function () {
    function e() {}
    return (
      (e.prototype.initRecoverable = function (t) {
        ;(this.firstAfterRepMap = {}),
          (this.resyncFollows = {}),
          (this.recoveryEnabled = G(t, 'recoveryEnabled') ? t.recoveryEnabled : st.recoveryEnabled),
          this.recoveryEnabled && (this.attemptInRepetitionRecovery = nf)
      }),
      (e.prototype.getTokenToInsert = function (t) {
        var n = Lr(t, '', NaN, NaN, NaN, NaN, NaN, NaN)
        return (n.isInsertedInRecovery = !0), n
      }),
      (e.prototype.canTokenTypeBeInsertedInRecovery = function (t) {
        return !0
      }),
      (e.prototype.tryInRepetitionRecovery = function (t, n, r, i) {
        for (
          var a = this,
            o = this.findReSyncTokenType(),
            s = this.exportLexerState(),
            u = [],
            c = !1,
            p = this.LA(1),
            f = this.LA(1),
            m = function () {
              var C = a.LA(0),
                A = a.errorMessageProvider.buildMismatchTokenMessage({
                  expected: i,
                  actual: p,
                  previous: C,
                  ruleName: a.getCurrRuleFullName()
                }),
                l = new Fr(A, p, a.LA(0))
              ;(l.resyncedTokens = Jn(u)), a.SAVE_ERROR(l)
            };
          !c;

        )
          if (this.tokenMatcher(f, i)) {
            m()
            return
          } else if (r.call(this)) {
            m(), t.apply(this, n)
            return
          } else
            this.tokenMatcher(f, o)
              ? (c = !0)
              : ((f = this.SKIP_TOKEN()), this.addToResyncTokens(f, u))
        this.importLexerState(s)
      }),
      (e.prototype.shouldInRepetitionRecoveryBeTried = function (t, n, r) {
        return !(
          r === !1 ||
          t === void 0 ||
          n === void 0 ||
          this.tokenMatcher(this.LA(1), t) ||
          this.isBackTracking() ||
          this.canPerformInRuleRecovery(t, this.getFollowsForInRuleRecovery(t, n))
        )
      }),
      (e.prototype.getFollowsForInRuleRecovery = function (t, n) {
        var r = this.getCurrentGrammarPath(t, n),
          i = this.getNextPossibleTokenTypes(r)
        return i
      }),
      (e.prototype.tryInRuleRecovery = function (t, n) {
        if (this.canRecoverWithSingleTokenInsertion(t, n)) {
          var r = this.getTokenToInsert(t)
          return r
        }
        if (this.canRecoverWithSingleTokenDeletion(t)) {
          var i = this.SKIP_TOKEN()
          return this.consumeToken(), i
        }
        throw new xo('sad sad panda')
      }),
      (e.prototype.canPerformInRuleRecovery = function (t, n) {
        return (
          this.canRecoverWithSingleTokenInsertion(t, n) || this.canRecoverWithSingleTokenDeletion(t)
        )
      }),
      (e.prototype.canRecoverWithSingleTokenInsertion = function (t, n) {
        var r = this
        if (!this.canTokenTypeBeInsertedInRecovery(t) || le(n)) return !1
        var i = this.LA(1),
          a =
            yn(n, function (o) {
              return r.tokenMatcher(i, o)
            }) !== void 0
        return a
      }),
      (e.prototype.canRecoverWithSingleTokenDeletion = function (t) {
        var n = this.tokenMatcher(this.LA(2), t)
        return n
      }),
      (e.prototype.isInCurrentRuleReSyncSet = function (t) {
        var n = this.getCurrFollowKey(),
          r = this.getFollowSetFromFollowKey(n)
        return Fe(r, t)
      }),
      (e.prototype.findReSyncTokenType = function () {
        for (var t = this.flattenFollowSet(), n = this.LA(1), r = 2; ; ) {
          var i = n.tokenType
          if (Fe(t, i)) return i
          ;(n = this.LA(r)), r++
        }
      }),
      (e.prototype.getCurrFollowKey = function () {
        if (this.RULE_STACK.length === 1) return Yi
        var t = this.getLastExplicitRuleShortName(),
          n = this.getLastExplicitRuleOccurrenceIndex(),
          r = this.getPreviousExplicitRuleShortName()
        return {
          ruleName: this.shortRuleNameToFullName(t),
          idxInCallingRule: n,
          inRule: this.shortRuleNameToFullName(r)
        }
      }),
      (e.prototype.buildFullFollowKeyStack = function () {
        var t = this,
          n = this.RULE_STACK,
          r = this.RULE_OCCURRENCE_STACK
        return (
          le(this.LAST_EXPLICIT_RULE_STACK) ||
            ((n = P(this.LAST_EXPLICIT_RULE_STACK, function (i) {
              return t.RULE_STACK[i]
            })),
            (r = P(this.LAST_EXPLICIT_RULE_STACK, function (i) {
              return t.RULE_OCCURRENCE_STACK[i]
            }))),
          P(n, function (i, a) {
            return a === 0
              ? Yi
              : {
                  ruleName: t.shortRuleNameToFullName(i),
                  idxInCallingRule: r[a],
                  inRule: t.shortRuleNameToFullName(n[a - 1])
                }
          })
        )
      }),
      (e.prototype.flattenFollowSet = function () {
        var t = this,
          n = P(this.buildFullFollowKeyStack(), function (r) {
            return t.getFollowSetFromFollowKey(r)
          })
        return rt(n)
      }),
      (e.prototype.getFollowSetFromFollowKey = function (t) {
        if (t === Yi) return [tn]
        var n = t.ruleName + t.idxInCallingRule + po + t.inRule
        return this.resyncFollows[n]
      }),
      (e.prototype.addToResyncTokens = function (t, n) {
        return this.tokenMatcher(t, tn) || n.push(t), n
      }),
      (e.prototype.reSyncTo = function (t) {
        for (var n = [], r = this.LA(1); this.tokenMatcher(r, t) === !1; )
          (r = this.SKIP_TOKEN()), this.addToResyncTokens(r, n)
        return Jn(n)
      }),
      (e.prototype.attemptInRepetitionRecovery = function (t, n, r, i, a, o, s) {}),
      (e.prototype.getCurrentGrammarPath = function (t, n) {
        var r = this.getHumanReadableRuleStack(),
          i = it(this.RULE_OCCURRENCE_STACK),
          a = { ruleStack: r, occurrenceStack: i, lastTok: t, lastTokOccurrence: n }
        return a
      }),
      (e.prototype.getHumanReadableRuleStack = function () {
        var t = this
        return le(this.LAST_EXPLICIT_RULE_STACK)
          ? P(this.RULE_STACK, function (n) {
              return t.shortRuleNameToFullName(n)
            })
          : P(this.LAST_EXPLICIT_RULE_STACK, function (n) {
              return t.shortRuleNameToFullName(t.RULE_STACK[n])
            })
      }),
      e
    )
  })()
  function nf(e, t, n, r, i, a, o) {
    var s = this.getKeyForAutomaticLookahead(r, i),
      u = this.firstAfterRepMap[s]
    if (u === void 0) {
      var c = this.getCurrRuleFullName(),
        p = this.getGAstProductions()[c],
        f = new a(p, i)
      ;(u = f.startWalking()), (this.firstAfterRepMap[s] = u)
    }
    var m = u.token,
      C = u.occurrence,
      A = u.isEndOfRule
    this.RULE_STACK.length === 1 && A && m === void 0 && ((m = tn), (C = 1)),
      this.shouldInRepetitionRecoveryBeTried(m, C, o) && this.tryInRepetitionRecovery(e, t, n, m)
  }
  var rf = (function () {
    function e() {}
    return (
      (e.prototype.initLooksAhead = function (t) {
        ;(this.dynamicTokensEnabled = G(t, 'dynamicTokensEnabled')
          ? t.dynamicTokensEnabled
          : st.dynamicTokensEnabled),
          (this.maxLookahead = G(t, 'maxLookahead') ? t.maxLookahead : st.maxLookahead),
          (this.lookAheadFuncsCache = Pa() ? new Map() : []),
          Pa()
            ? ((this.getLaFuncFromCache = this.getLaFuncFromMap),
              (this.setLaFuncCache = this.setLaFuncCacheUsingMap))
            : ((this.getLaFuncFromCache = this.getLaFuncFromObj),
              (this.setLaFuncCache = this.setLaFuncUsingObj))
      }),
      (e.prototype.preComputeLookaheadFunctions = function (t) {
        var n = this
        V(t, function (r) {
          n.TRACE_INIT(r.name + ' Rule Lookahead', function () {
            var i = al(r),
              a = i.alternation,
              o = i.repetition,
              s = i.option,
              u = i.repetitionMandatory,
              c = i.repetitionMandatoryWithSeparator,
              p = i.repetitionWithSeparator
            V(a, function (f) {
              var m = f.idx === 0 ? '' : f.idx
              n.TRACE_INIT('' + Ut(f) + m, function () {
                var C = Ll(
                    f.idx,
                    r,
                    f.maxLookahead || n.maxLookahead,
                    f.hasPredicates,
                    n.dynamicTokensEnabled,
                    n.lookAheadBuilderForAlternatives
                  ),
                  A = nr(n.fullRuleNameToShort[r.name], Cn, f.idx)
                n.setLaFuncCache(A, C)
              })
            }),
              V(o, function (f) {
                n.computeLookaheadFunc(r, f.idx, $n, pe.REPETITION, f.maxLookahead, Ut(f))
              }),
              V(s, function (f) {
                n.computeLookaheadFunc(r, f.idx, Nr, pe.OPTION, f.maxLookahead, Ut(f))
              }),
              V(u, function (f) {
                n.computeLookaheadFunc(r, f.idx, er, pe.REPETITION_MANDATORY, f.maxLookahead, Ut(f))
              }),
              V(c, function (f) {
                n.computeLookaheadFunc(
                  r,
                  f.idx,
                  An,
                  pe.REPETITION_MANDATORY_WITH_SEPARATOR,
                  f.maxLookahead,
                  Ut(f)
                )
              }),
              V(p, function (f) {
                n.computeLookaheadFunc(
                  r,
                  f.idx,
                  tr,
                  pe.REPETITION_WITH_SEPARATOR,
                  f.maxLookahead,
                  Ut(f)
                )
              })
          })
        })
      }),
      (e.prototype.computeLookaheadFunc = function (t, n, r, i, a, o) {
        var s = this
        this.TRACE_INIT('' + o + (n === 0 ? '' : n), function () {
          var u = Rl(
              n,
              t,
              a || s.maxLookahead,
              s.dynamicTokensEnabled,
              i,
              s.lookAheadBuilderForOptional
            ),
            c = nr(s.fullRuleNameToShort[t.name], r, n)
          s.setLaFuncCache(c, u)
        })
      }),
      (e.prototype.lookAheadBuilderForOptional = function (t, n, r) {
        return Ol(t, n, r)
      }),
      (e.prototype.lookAheadBuilderForAlternatives = function (t, n, r, i) {
        return Ul(t, n, r, i)
      }),
      (e.prototype.getKeyForAutomaticLookahead = function (t, n) {
        var r = this.getLastExplicitRuleShortName()
        return nr(r, t, n)
      }),
      (e.prototype.getLaFuncFromCache = function (t) {}),
      (e.prototype.getLaFuncFromMap = function (t) {
        return this.lookAheadFuncsCache.get(t)
      }),
      (e.prototype.getLaFuncFromObj = function (t) {
        return this.lookAheadFuncsCache[t]
      }),
      (e.prototype.setLaFuncCache = function (t, n) {}),
      (e.prototype.setLaFuncCacheUsingMap = function (t, n) {
        this.lookAheadFuncsCache.set(t, n)
      }),
      (e.prototype.setLaFuncUsingObj = function (t, n) {
        this.lookAheadFuncsCache[t] = n
      }),
      e
    )
  })()
  function af(e) {
    return Mr(e.constructor)
  }
  var of = /^\s*function\s*(\S*)\s*\(/,
    wo = 'name'
  function Mr(e) {
    var t = e.name
    if (t) return t
    var n = e.toString().match(of)[1]
    return n
  }
  function jo(e, t) {
    var n = Object.getOwnPropertyDescriptor(e, wo)
    return ht(n) || n.configurable
      ? (Object.defineProperty(e, wo, { enumerable: !1, configurable: !0, writable: !1, value: t }),
        !0)
      : !1
  }
  function sf(e, t) {
    for (var n = Kt(e), r = n.length, i = 0; i < r; i++)
      for (var a = n[i], o = e[a], s = o.length, u = 0; u < s; u++) {
        var c = o[u]
        c.tokenTypeIdx === void 0 &&
          (c.fullName !== void 0 ? this[c.fullName](c.children, t) : this[c.name](c.children, t))
      }
  }
  function uf(e, t) {
    var n = function () {}
    jo(n, e + 'BaseSemantics')
    var r = {
      visit: function (i, a) {
        if ((gt(i) && (i = i[0]), !ht(i)))
          return i.fullName !== void 0
            ? this[i.fullName](i.children, a)
            : this[i.name](i.children, a)
      },
      validateVisitor: function () {
        var i = lf(this, t)
        if (!le(i)) {
          var a = P(i, function (o) {
            return o.msg
          })
          throw Error(
            'Errors Detected in CST Visitor <' +
              Mr(this.constructor) +
              `>:
	` +
              ('' +
                a
                  .join(
                    `

`
                  )
                  .replace(
                    /\n/g,
                    `
	`
                  ))
          )
        }
      }
    }
    return (n.prototype = r), (n.prototype.constructor = n), (n._RULE_NAMES = t), n
  }
  function cf(e, t, n) {
    var r = function () {}
    jo(r, e + 'BaseSemanticsWithDefaults')
    var i = Object.create(n.prototype)
    return (
      V(t, function (a) {
        i[a] = sf
      }),
      (r.prototype = i),
      (r.prototype.constructor = r),
      r
    )
  }
  var br
  ;(function (e) {
    ;(e[(e.REDUNDANT_METHOD = 0)] = 'REDUNDANT_METHOD'),
      (e[(e.MISSING_METHOD = 1)] = 'MISSING_METHOD')
  })(br || (br = {}))
  function lf(e, t) {
    var n = ff(e, t),
      r = df(e, t)
    return n.concat(r)
  }
  function ff(e, t) {
    var n = P(t, function (r) {
      if (!$t(e[r]))
        return {
          msg: 'Missing visitor method: <' + r + '> on ' + Mr(e.constructor) + ' CST Visitor.',
          type: br.MISSING_METHOD,
          methodName: r
        }
    })
    return Hn(n)
  }
  var pf = ['constructor', 'visit', 'validateVisitor']
  function df(e, t) {
    var n = []
    for (var r in e)
      hn.test(r) &&
        $t(e[r]) &&
        !Fe(pf, r) &&
        !Fe(t, r) &&
        n.push({
          msg:
            'Redundant visitor method: <' +
            r +
            '> on ' +
            Mr(e.constructor) +
            ` CST Visitor
There is no Grammar Rule corresponding to this method's name.
` +
            ('For utility methods on visitor classes use methods names that do not match /' +
              hn.source +
              '/.'),
          type: br.REDUNDANT_METHOD,
          methodName: r
        })
    return n
  }
  var hf = (function () {
      function e() {}
      return (
        (e.prototype.initTreeBuilder = function (t) {
          if (
            ((this.LAST_EXPLICIT_RULE_STACK = []),
            (this.CST_STACK = []),
            (this.outputCst = G(t, 'outputCst') ? t.outputCst : st.outputCst),
            (this.nodeLocationTracking = G(t, 'nodeLocationTracking')
              ? t.nodeLocationTracking
              : st.nodeLocationTracking),
            !this.outputCst)
          )
            (this.cstInvocationStateUpdate = we),
              (this.cstFinallyStateUpdate = we),
              (this.cstPostTerminal = we),
              (this.cstPostNonTerminal = we),
              (this.cstPostRule = we),
              (this.getLastExplicitRuleShortName = this.getLastExplicitRuleShortNameNoCst),
              (this.getPreviousExplicitRuleShortName = this.getPreviousExplicitRuleShortNameNoCst),
              (this.getLastExplicitRuleOccurrenceIndex =
                this.getLastExplicitRuleOccurrenceIndexNoCst),
              (this.manyInternal = this.manyInternalNoCst),
              (this.orInternal = this.orInternalNoCst),
              (this.optionInternal = this.optionInternalNoCst),
              (this.atLeastOneInternal = this.atLeastOneInternalNoCst),
              (this.manySepFirstInternal = this.manySepFirstInternalNoCst),
              (this.atLeastOneSepFirstInternal = this.atLeastOneSepFirstInternalNoCst)
          else if (/full/i.test(this.nodeLocationTracking))
            this.recoveryEnabled
              ? ((this.setNodeLocationFromToken = vo),
                (this.setNodeLocationFromNode = vo),
                (this.cstPostRule = we),
                (this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery))
              : ((this.setNodeLocationFromToken = we),
                (this.setNodeLocationFromNode = we),
                (this.cstPostRule = this.cstPostRuleFull),
                (this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular))
          else if (/onlyOffset/i.test(this.nodeLocationTracking))
            this.recoveryEnabled
              ? ((this.setNodeLocationFromToken = mo),
                (this.setNodeLocationFromNode = mo),
                (this.cstPostRule = we),
                (this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery))
              : ((this.setNodeLocationFromToken = we),
                (this.setNodeLocationFromNode = we),
                (this.cstPostRule = this.cstPostRuleOnlyOffset),
                (this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular))
          else if (/none/i.test(this.nodeLocationTracking))
            (this.setNodeLocationFromToken = we),
              (this.setNodeLocationFromNode = we),
              (this.cstPostRule = we),
              (this.setInitialNodeLocation = we)
          else
            throw Error(
              'Invalid <nodeLocationTracking> config option: "' + t.nodeLocationTracking + '"'
            )
        }),
        (e.prototype.setInitialNodeLocationOnlyOffsetRecovery = function (t) {
          t.location = { startOffset: NaN, endOffset: NaN }
        }),
        (e.prototype.setInitialNodeLocationOnlyOffsetRegular = function (t) {
          t.location = { startOffset: this.LA(1).startOffset, endOffset: NaN }
        }),
        (e.prototype.setInitialNodeLocationFullRecovery = function (t) {
          t.location = {
            startOffset: NaN,
            startLine: NaN,
            startColumn: NaN,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN
          }
        }),
        (e.prototype.setInitialNodeLocationFullRegular = function (t) {
          var n = this.LA(1)
          t.location = {
            startOffset: n.startOffset,
            startLine: n.startLine,
            startColumn: n.startColumn,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN
          }
        }),
        (e.prototype.cstNestedInvocationStateUpdate = function (t, n) {
          var r = {
            name: t,
            fullName: this.shortRuleNameToFull[this.getLastExplicitRuleShortName()] + t,
            children: {}
          }
          this.setInitialNodeLocation(r), this.CST_STACK.push(r)
        }),
        (e.prototype.cstInvocationStateUpdate = function (t, n) {
          this.LAST_EXPLICIT_RULE_STACK.push(this.RULE_STACK.length - 1)
          var r = { name: t, children: {} }
          this.setInitialNodeLocation(r), this.CST_STACK.push(r)
        }),
        (e.prototype.cstFinallyStateUpdate = function () {
          this.LAST_EXPLICIT_RULE_STACK.pop(), this.CST_STACK.pop()
        }),
        (e.prototype.cstNestedFinallyStateUpdate = function () {
          var t = this.CST_STACK.pop()
          this.cstPostRule(t)
        }),
        (e.prototype.cstPostRuleFull = function (t) {
          var n = this.LA(0),
            r = t.location
          r.startOffset <= n.startOffset
            ? ((r.endOffset = n.endOffset), (r.endLine = n.endLine), (r.endColumn = n.endColumn))
            : ((r.startOffset = NaN), (r.startLine = NaN), (r.startColumn = NaN))
        }),
        (e.prototype.cstPostRuleOnlyOffset = function (t) {
          var n = this.LA(0),
            r = t.location
          r.startOffset <= n.startOffset ? (r.endOffset = n.endOffset) : (r.startOffset = NaN)
        }),
        (e.prototype.cstPostTerminal = function (t, n) {
          var r = this.CST_STACK[this.CST_STACK.length - 1]
          Dl(r, n, t), this.setNodeLocationFromToken(r.location, n)
        }),
        (e.prototype.cstPostNonTerminal = function (t, n) {
          if (this.isBackTracking() !== !0) {
            var r = this.CST_STACK[this.CST_STACK.length - 1]
            Do(r, n, t), this.setNodeLocationFromNode(r.location, t.location)
          }
        }),
        (e.prototype.getBaseCstVisitorConstructor = function () {
          if (ht(this.baseCstVisitorConstructor)) {
            var t = uf(this.className, this.allRuleNames)
            return (this.baseCstVisitorConstructor = t), t
          }
          return this.baseCstVisitorConstructor
        }),
        (e.prototype.getBaseCstVisitorConstructorWithDefaults = function () {
          if (ht(this.baseCstVisitorWithDefaultsConstructor)) {
            var t = cf(this.className, this.allRuleNames, this.getBaseCstVisitorConstructor())
            return (this.baseCstVisitorWithDefaultsConstructor = t), t
          }
          return this.baseCstVisitorWithDefaultsConstructor
        }),
        (e.prototype.nestedRuleBeforeClause = function (t, n) {
          var r
          if (t.NAME !== void 0) return (r = t.NAME), this.nestedRuleInvocationStateUpdate(r, n), r
        }),
        (e.prototype.nestedAltBeforeClause = function (t, n, r, i) {
          var a = this.getLastExplicitRuleShortName(),
            o = ho(a, r, n, i),
            s
          if (t.NAME !== void 0)
            return (
              (s = t.NAME),
              this.nestedRuleInvocationStateUpdate(s, o),
              { shortName: o, nestedName: s }
            )
        }),
        (e.prototype.nestedRuleFinallyClause = function (t, n) {
          var r = this.CST_STACK,
            i = r[r.length - 1]
          this.nestedRuleFinallyStateUpdate()
          var a = r[r.length - 1]
          Do(a, n, i), this.setNodeLocationFromNode(a.location, i.location)
        }),
        (e.prototype.getLastExplicitRuleShortName = function () {
          var t = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 1]
          return this.RULE_STACK[t]
        }),
        (e.prototype.getLastExplicitRuleShortNameNoCst = function () {
          var t = this.RULE_STACK
          return t[t.length - 1]
        }),
        (e.prototype.getPreviousExplicitRuleShortName = function () {
          var t = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 2]
          return this.RULE_STACK[t]
        }),
        (e.prototype.getPreviousExplicitRuleShortNameNoCst = function () {
          var t = this.RULE_STACK
          return t[t.length - 2]
        }),
        (e.prototype.getLastExplicitRuleOccurrenceIndex = function () {
          var t = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 1]
          return this.RULE_OCCURRENCE_STACK[t]
        }),
        (e.prototype.getLastExplicitRuleOccurrenceIndexNoCst = function () {
          var t = this.RULE_OCCURRENCE_STACK
          return t[t.length - 1]
        }),
        (e.prototype.nestedRuleInvocationStateUpdate = function (t, n) {
          this.RULE_OCCURRENCE_STACK.push(1),
            this.RULE_STACK.push(n),
            this.cstNestedInvocationStateUpdate(t, n)
        }),
        (e.prototype.nestedRuleFinallyStateUpdate = function () {
          this.RULE_STACK.pop(),
            this.RULE_OCCURRENCE_STACK.pop(),
            this.cstNestedFinallyStateUpdate()
        }),
        e
      )
    })(),
    mf = (function () {
      function e() {}
      return (
        (e.prototype.initLexerAdapter = function () {
          ;(this.tokVector = []), (this.tokVectorLength = 0), (this.currIdx = -1)
        }),
        Object.defineProperty(e.prototype, 'input', {
          get: function () {
            return this.tokVector
          },
          set: function (t) {
            if (this.selfAnalysisDone !== !0)
              throw Error(
                "Missing <performSelfAnalysis> invocation at the end of the Parser's constructor."
              )
            this.reset(), (this.tokVector = t), (this.tokVectorLength = t.length)
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.SKIP_TOKEN = function () {
          return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : xr
        }),
        (e.prototype.LA = function (t) {
          var n = this.currIdx + t
          return n < 0 || this.tokVectorLength <= n ? xr : this.tokVector[n]
        }),
        (e.prototype.consumeToken = function () {
          this.currIdx++
        }),
        (e.prototype.exportLexerState = function () {
          return this.currIdx
        }),
        (e.prototype.importLexerState = function (t) {
          this.currIdx = t
        }),
        (e.prototype.resetLexerState = function () {
          this.currIdx = -1
        }),
        (e.prototype.moveToTerminatedState = function () {
          this.currIdx = this.tokVector.length - 1
        }),
        (e.prototype.getLexerPosition = function () {
          return this.exportLexerState()
        }),
        e
      )
    })(),
    vf = (function () {
      function e() {}
      return (
        (e.prototype.ACTION = function (t) {
          return t.call(this)
        }),
        (e.prototype.consume = function (t, n, r) {
          return this.consumeInternal(n, t, r)
        }),
        (e.prototype.subrule = function (t, n, r) {
          return this.subruleInternal(n, t, r)
        }),
        (e.prototype.option = function (t, n) {
          return this.optionInternal(n, t)
        }),
        (e.prototype.or = function (t, n) {
          return this.orInternal(n, t)
        }),
        (e.prototype.many = function (t, n) {
          return this.manyInternal(t, n)
        }),
        (e.prototype.atLeastOne = function (t, n) {
          return this.atLeastOneInternal(t, n)
        }),
        (e.prototype.CONSUME = function (t, n) {
          return this.consumeInternal(t, 0, n)
        }),
        (e.prototype.CONSUME1 = function (t, n) {
          return this.consumeInternal(t, 1, n)
        }),
        (e.prototype.CONSUME2 = function (t, n) {
          return this.consumeInternal(t, 2, n)
        }),
        (e.prototype.CONSUME3 = function (t, n) {
          return this.consumeInternal(t, 3, n)
        }),
        (e.prototype.CONSUME4 = function (t, n) {
          return this.consumeInternal(t, 4, n)
        }),
        (e.prototype.CONSUME5 = function (t, n) {
          return this.consumeInternal(t, 5, n)
        }),
        (e.prototype.CONSUME6 = function (t, n) {
          return this.consumeInternal(t, 6, n)
        }),
        (e.prototype.CONSUME7 = function (t, n) {
          return this.consumeInternal(t, 7, n)
        }),
        (e.prototype.CONSUME8 = function (t, n) {
          return this.consumeInternal(t, 8, n)
        }),
        (e.prototype.CONSUME9 = function (t, n) {
          return this.consumeInternal(t, 9, n)
        }),
        (e.prototype.SUBRULE = function (t, n) {
          return this.subruleInternal(t, 0, n)
        }),
        (e.prototype.SUBRULE1 = function (t, n) {
          return this.subruleInternal(t, 1, n)
        }),
        (e.prototype.SUBRULE2 = function (t, n) {
          return this.subruleInternal(t, 2, n)
        }),
        (e.prototype.SUBRULE3 = function (t, n) {
          return this.subruleInternal(t, 3, n)
        }),
        (e.prototype.SUBRULE4 = function (t, n) {
          return this.subruleInternal(t, 4, n)
        }),
        (e.prototype.SUBRULE5 = function (t, n) {
          return this.subruleInternal(t, 5, n)
        }),
        (e.prototype.SUBRULE6 = function (t, n) {
          return this.subruleInternal(t, 6, n)
        }),
        (e.prototype.SUBRULE7 = function (t, n) {
          return this.subruleInternal(t, 7, n)
        }),
        (e.prototype.SUBRULE8 = function (t, n) {
          return this.subruleInternal(t, 8, n)
        }),
        (e.prototype.SUBRULE9 = function (t, n) {
          return this.subruleInternal(t, 9, n)
        }),
        (e.prototype.OPTION = function (t) {
          return this.optionInternal(t, 0)
        }),
        (e.prototype.OPTION1 = function (t) {
          return this.optionInternal(t, 1)
        }),
        (e.prototype.OPTION2 = function (t) {
          return this.optionInternal(t, 2)
        }),
        (e.prototype.OPTION3 = function (t) {
          return this.optionInternal(t, 3)
        }),
        (e.prototype.OPTION4 = function (t) {
          return this.optionInternal(t, 4)
        }),
        (e.prototype.OPTION5 = function (t) {
          return this.optionInternal(t, 5)
        }),
        (e.prototype.OPTION6 = function (t) {
          return this.optionInternal(t, 6)
        }),
        (e.prototype.OPTION7 = function (t) {
          return this.optionInternal(t, 7)
        }),
        (e.prototype.OPTION8 = function (t) {
          return this.optionInternal(t, 8)
        }),
        (e.prototype.OPTION9 = function (t) {
          return this.optionInternal(t, 9)
        }),
        (e.prototype.OR = function (t) {
          return this.orInternal(t, 0)
        }),
        (e.prototype.OR1 = function (t) {
          return this.orInternal(t, 1)
        }),
        (e.prototype.OR2 = function (t) {
          return this.orInternal(t, 2)
        }),
        (e.prototype.OR3 = function (t) {
          return this.orInternal(t, 3)
        }),
        (e.prototype.OR4 = function (t) {
          return this.orInternal(t, 4)
        }),
        (e.prototype.OR5 = function (t) {
          return this.orInternal(t, 5)
        }),
        (e.prototype.OR6 = function (t) {
          return this.orInternal(t, 6)
        }),
        (e.prototype.OR7 = function (t) {
          return this.orInternal(t, 7)
        }),
        (e.prototype.OR8 = function (t) {
          return this.orInternal(t, 8)
        }),
        (e.prototype.OR9 = function (t) {
          return this.orInternal(t, 9)
        }),
        (e.prototype.MANY = function (t) {
          this.manyInternal(0, t)
        }),
        (e.prototype.MANY1 = function (t) {
          this.manyInternal(1, t)
        }),
        (e.prototype.MANY2 = function (t) {
          this.manyInternal(2, t)
        }),
        (e.prototype.MANY3 = function (t) {
          this.manyInternal(3, t)
        }),
        (e.prototype.MANY4 = function (t) {
          this.manyInternal(4, t)
        }),
        (e.prototype.MANY5 = function (t) {
          this.manyInternal(5, t)
        }),
        (e.prototype.MANY6 = function (t) {
          this.manyInternal(6, t)
        }),
        (e.prototype.MANY7 = function (t) {
          this.manyInternal(7, t)
        }),
        (e.prototype.MANY8 = function (t) {
          this.manyInternal(8, t)
        }),
        (e.prototype.MANY9 = function (t) {
          this.manyInternal(9, t)
        }),
        (e.prototype.MANY_SEP = function (t) {
          this.manySepFirstInternal(0, t)
        }),
        (e.prototype.MANY_SEP1 = function (t) {
          this.manySepFirstInternal(1, t)
        }),
        (e.prototype.MANY_SEP2 = function (t) {
          this.manySepFirstInternal(2, t)
        }),
        (e.prototype.MANY_SEP3 = function (t) {
          this.manySepFirstInternal(3, t)
        }),
        (e.prototype.MANY_SEP4 = function (t) {
          this.manySepFirstInternal(4, t)
        }),
        (e.prototype.MANY_SEP5 = function (t) {
          this.manySepFirstInternal(5, t)
        }),
        (e.prototype.MANY_SEP6 = function (t) {
          this.manySepFirstInternal(6, t)
        }),
        (e.prototype.MANY_SEP7 = function (t) {
          this.manySepFirstInternal(7, t)
        }),
        (e.prototype.MANY_SEP8 = function (t) {
          this.manySepFirstInternal(8, t)
        }),
        (e.prototype.MANY_SEP9 = function (t) {
          this.manySepFirstInternal(9, t)
        }),
        (e.prototype.AT_LEAST_ONE = function (t) {
          this.atLeastOneInternal(0, t)
        }),
        (e.prototype.AT_LEAST_ONE1 = function (t) {
          return this.atLeastOneInternal(1, t)
        }),
        (e.prototype.AT_LEAST_ONE2 = function (t) {
          this.atLeastOneInternal(2, t)
        }),
        (e.prototype.AT_LEAST_ONE3 = function (t) {
          this.atLeastOneInternal(3, t)
        }),
        (e.prototype.AT_LEAST_ONE4 = function (t) {
          this.atLeastOneInternal(4, t)
        }),
        (e.prototype.AT_LEAST_ONE5 = function (t) {
          this.atLeastOneInternal(5, t)
        }),
        (e.prototype.AT_LEAST_ONE6 = function (t) {
          this.atLeastOneInternal(6, t)
        }),
        (e.prototype.AT_LEAST_ONE7 = function (t) {
          this.atLeastOneInternal(7, t)
        }),
        (e.prototype.AT_LEAST_ONE8 = function (t) {
          this.atLeastOneInternal(8, t)
        }),
        (e.prototype.AT_LEAST_ONE9 = function (t) {
          this.atLeastOneInternal(9, t)
        }),
        (e.prototype.AT_LEAST_ONE_SEP = function (t) {
          this.atLeastOneSepFirstInternal(0, t)
        }),
        (e.prototype.AT_LEAST_ONE_SEP1 = function (t) {
          this.atLeastOneSepFirstInternal(1, t)
        }),
        (e.prototype.AT_LEAST_ONE_SEP2 = function (t) {
          this.atLeastOneSepFirstInternal(2, t)
        }),
        (e.prototype.AT_LEAST_ONE_SEP3 = function (t) {
          this.atLeastOneSepFirstInternal(3, t)
        }),
        (e.prototype.AT_LEAST_ONE_SEP4 = function (t) {
          this.atLeastOneSepFirstInternal(4, t)
        }),
        (e.prototype.AT_LEAST_ONE_SEP5 = function (t) {
          this.atLeastOneSepFirstInternal(5, t)
        }),
        (e.prototype.AT_LEAST_ONE_SEP6 = function (t) {
          this.atLeastOneSepFirstInternal(6, t)
        }),
        (e.prototype.AT_LEAST_ONE_SEP7 = function (t) {
          this.atLeastOneSepFirstInternal(7, t)
        }),
        (e.prototype.AT_LEAST_ONE_SEP8 = function (t) {
          this.atLeastOneSepFirstInternal(8, t)
        }),
        (e.prototype.AT_LEAST_ONE_SEP9 = function (t) {
          this.atLeastOneSepFirstInternal(9, t)
        }),
        (e.prototype.RULE = function (t, n, r) {
          if ((r === void 0 && (r = wr), Fe(this.definedRulesNames, t))) {
            var i = Br.buildDuplicateRuleNameError({
                topLevelRule: t,
                grammarName: this.className
              }),
              a = { message: i, type: be.DUPLICATE_RULE_NAME, ruleName: t }
            this.definitionErrors.push(a)
          }
          this.definedRulesNames.push(t)
          var o = this.defineRule(t, n, r)
          return (this[t] = o), o
        }),
        (e.prototype.OVERRIDE_RULE = function (t, n, r) {
          r === void 0 && (r = wr)
          var i = []
          ;(i = i.concat(Vl(t, this.definedRulesNames, this.className))),
            this.definitionErrors.push.apply(this.definitionErrors, i)
          var a = this.defineRule(t, n, r)
          return (this[t] = a), a
        }),
        (e.prototype.BACKTRACK = function (t, n) {
          return function () {
            this.isBackTrackingStack.push(1)
            var r = this.saveRecogState()
            try {
              return t.apply(this, n), !0
            } catch (i) {
              if (rr(i)) return !1
              throw i
            } finally {
              this.reloadRecogState(r), this.isBackTrackingStack.pop()
            }
          }
        }),
        (e.prototype.getGAstProductions = function () {
          return this.gastProductionsCache
        }),
        (e.prototype.getSerializedGastProductions = function () {
          return co(qe(this.gastProductionsCache))
        }),
        e
      )
    })(),
    Df = (function () {
      function e() {}
      return (
        (e.prototype.initRecognizerEngine = function (t, n) {
          if (
            ((this.className = af(this)),
            (this.shortRuleNameToFull = {}),
            (this.fullRuleNameToShort = {}),
            (this.ruleShortNameIdx = 256),
            (this.tokenMatcher = gr),
            (this.definedRulesNames = []),
            (this.tokensMap = {}),
            (this.allRuleNames = []),
            (this.isBackTrackingStack = []),
            (this.RULE_STACK = []),
            (this.RULE_OCCURRENCE_STACK = []),
            (this.gastProductionsCache = {}),
            G(n, 'serializedGrammar'))
          )
            throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://sap.github.io/chevrotain/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`)
          if (gt(t)) {
            if (le(t))
              throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`)
            if (typeof t[0].startOffset == 'number')
              throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://sap.github.io/chevrotain/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)
          }
          if (gt(t))
            this.tokensMap = Ke(
              t,
              function (o, s) {
                return (o[s.name] = s), o
              },
              {}
            )
          else if (G(t, 'modes') && vt(rt(qe(t.modes)), Zc)) {
            var r = rt(qe(t.modes)),
              i = Ui(r)
            this.tokensMap = Ke(
              i,
              function (o, s) {
                return (o[s.name] = s), o
              },
              {}
            )
          } else if (Oi(t)) this.tokensMap = qn(t)
          else
            throw new Error(
              '<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition'
            )
          this.tokensMap.EOF = tn
          var a = vt(qe(t), function (o) {
            return le(o.categoryMatches)
          })
          ;(this.tokenMatcher = a ? gr : Tr), zn(qe(this.tokensMap))
        }),
        (e.prototype.defineRule = function (t, n, r) {
          if (this.selfAnalysisDone)
            throw Error(
              'Grammar rule <' +
                t +
                `> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`
            )
          var i = G(r, 'resyncEnabled') ? r.resyncEnabled : wr.resyncEnabled,
            a = G(r, 'recoveryValueFunc') ? r.recoveryValueFunc : wr.recoveryValueFunc,
            o = this.ruleShortNameIdx << (dl + rn)
          this.ruleShortNameIdx++,
            (this.shortRuleNameToFull[o] = t),
            (this.fullRuleNameToShort[t] = o)
          function s(p) {
            try {
              if (this.outputCst === !0) {
                n.apply(this, p)
                var f = this.CST_STACK[this.CST_STACK.length - 1]
                return this.cstPostRule(f), f
              } else return n.apply(this, p)
            } catch (m) {
              return this.invokeRuleCatch(m, i, a)
            } finally {
              this.ruleFinallyStateUpdate()
            }
          }
          var u
          u = function (p, f) {
            return p === void 0 && (p = 0), this.ruleInvocationStateUpdate(o, t, p), s.call(this, f)
          }
          var c = 'ruleName'
          return (u[c] = t), (u.originalGrammarAction = n), u
        }),
        (e.prototype.invokeRuleCatch = function (t, n, r) {
          var i = this.RULE_STACK.length === 1,
            a = n && !this.isBackTracking() && this.recoveryEnabled
          if (rr(t)) {
            var o = t
            if (a) {
              var s = this.findReSyncTokenType()
              if (this.isInCurrentRuleReSyncSet(s))
                if (((o.resyncedTokens = this.reSyncTo(s)), this.outputCst)) {
                  var u = this.CST_STACK[this.CST_STACK.length - 1]
                  return (u.recoveredNode = !0), u
                } else return r()
              else {
                if (this.outputCst) {
                  var u = this.CST_STACK[this.CST_STACK.length - 1]
                  ;(u.recoveredNode = !0), (o.partialCstResult = u)
                }
                throw o
              }
            } else {
              if (i) return this.moveToTerminatedState(), r()
              throw o
            }
          } else throw t
        }),
        (e.prototype.optionInternal = function (t, n) {
          var r = this.getKeyForAutomaticLookahead(Nr, n),
            i = this.nestedRuleBeforeClause(t, r)
          try {
            return this.optionInternalLogic(t, n, r)
          } finally {
            i !== void 0 && this.nestedRuleFinallyClause(r, i)
          }
        }),
        (e.prototype.optionInternalNoCst = function (t, n) {
          var r = this.getKeyForAutomaticLookahead(Nr, n)
          return this.optionInternalLogic(t, n, r)
        }),
        (e.prototype.optionInternalLogic = function (t, n, r) {
          var i = this,
            a = this.getLaFuncFromCache(r),
            o,
            s
          if (t.DEF !== void 0) {
            if (((o = t.DEF), (s = t.GATE), s !== void 0)) {
              var u = a
              a = function () {
                return s.call(i) && u.call(i)
              }
            }
          } else o = t
          if (a.call(this) === !0) return o.call(this)
        }),
        (e.prototype.atLeastOneInternal = function (t, n) {
          var r = this.getKeyForAutomaticLookahead(er, t),
            i = this.nestedRuleBeforeClause(n, r)
          try {
            return this.atLeastOneInternalLogic(t, n, r)
          } finally {
            i !== void 0 && this.nestedRuleFinallyClause(r, i)
          }
        }),
        (e.prototype.atLeastOneInternalNoCst = function (t, n) {
          var r = this.getKeyForAutomaticLookahead(er, t)
          this.atLeastOneInternalLogic(t, n, r)
        }),
        (e.prototype.atLeastOneInternalLogic = function (t, n, r) {
          var i = this,
            a = this.getLaFuncFromCache(r),
            o,
            s
          if (n.DEF !== void 0) {
            if (((o = n.DEF), (s = n.GATE), s !== void 0)) {
              var u = a
              a = function () {
                return s.call(i) && u.call(i)
              }
            }
          } else o = n
          if (a.call(this) === !0)
            for (var c = this.doSingleRepetition(o); a.call(this) === !0 && c === !0; )
              c = this.doSingleRepetition(o)
          else throw this.raiseEarlyExitException(t, pe.REPETITION_MANDATORY, n.ERR_MSG)
          this.attemptInRepetitionRecovery(this.atLeastOneInternal, [t, n], a, er, t, Sl)
        }),
        (e.prototype.atLeastOneSepFirstInternal = function (t, n) {
          var r = this.getKeyForAutomaticLookahead(An, t),
            i = this.nestedRuleBeforeClause(n, r)
          try {
            this.atLeastOneSepFirstInternalLogic(t, n, r)
          } finally {
            i !== void 0 && this.nestedRuleFinallyClause(r, i)
          }
        }),
        (e.prototype.atLeastOneSepFirstInternalNoCst = function (t, n) {
          var r = this.getKeyForAutomaticLookahead(An, t)
          this.atLeastOneSepFirstInternalLogic(t, n, r)
        }),
        (e.prototype.atLeastOneSepFirstInternalLogic = function (t, n, r) {
          var i = this,
            a = n.DEF,
            o = n.SEP,
            s = this.getLaFuncFromCache(r)
          if (s.call(this) === !0) {
            a.call(this)
            for (
              var u = function () {
                return i.tokenMatcher(i.LA(1), o)
              };
              this.tokenMatcher(this.LA(1), o) === !0;

            )
              this.CONSUME(o), a.call(this)
            this.attemptInRepetitionRecovery(
              this.repetitionSepSecondInternal,
              [t, o, u, a, yo],
              u,
              An,
              t,
              yo
            )
          } else
            throw this.raiseEarlyExitException(t, pe.REPETITION_MANDATORY_WITH_SEPARATOR, n.ERR_MSG)
        }),
        (e.prototype.manyInternal = function (t, n) {
          var r = this.getKeyForAutomaticLookahead($n, t),
            i = this.nestedRuleBeforeClause(n, r)
          try {
            return this.manyInternalLogic(t, n, r)
          } finally {
            i !== void 0 && this.nestedRuleFinallyClause(r, i)
          }
        }),
        (e.prototype.manyInternalNoCst = function (t, n) {
          var r = this.getKeyForAutomaticLookahead($n, t)
          return this.manyInternalLogic(t, n, r)
        }),
        (e.prototype.manyInternalLogic = function (t, n, r) {
          var i = this,
            a = this.getLaFuncFromCache(r),
            o,
            s
          if (n.DEF !== void 0) {
            if (((o = n.DEF), (s = n.GATE), s !== void 0)) {
              var u = a
              a = function () {
                return s.call(i) && u.call(i)
              }
            }
          } else o = n
          for (var c = !0; a.call(this) === !0 && c === !0; ) c = this.doSingleRepetition(o)
          this.attemptInRepetitionRecovery(this.manyInternal, [t, n], a, $n, t, Al, c)
        }),
        (e.prototype.manySepFirstInternal = function (t, n) {
          var r = this.getKeyForAutomaticLookahead(tr, t),
            i = this.nestedRuleBeforeClause(n, r)
          try {
            this.manySepFirstInternalLogic(t, n, r)
          } finally {
            i !== void 0 && this.nestedRuleFinallyClause(r, i)
          }
        }),
        (e.prototype.manySepFirstInternalNoCst = function (t, n) {
          var r = this.getKeyForAutomaticLookahead(tr, t)
          this.manySepFirstInternalLogic(t, n, r)
        }),
        (e.prototype.manySepFirstInternalLogic = function (t, n, r) {
          var i = this,
            a = n.DEF,
            o = n.SEP,
            s = this.getLaFuncFromCache(r)
          if (s.call(this) === !0) {
            a.call(this)
            for (
              var u = function () {
                return i.tokenMatcher(i.LA(1), o)
              };
              this.tokenMatcher(this.LA(1), o) === !0;

            )
              this.CONSUME(o), a.call(this)
            this.attemptInRepetitionRecovery(
              this.repetitionSepSecondInternal,
              [t, o, u, a, Eo],
              u,
              tr,
              t,
              Eo
            )
          }
        }),
        (e.prototype.repetitionSepSecondInternal = function (t, n, r, i, a) {
          for (; r(); ) this.CONSUME(n), i.call(this)
          this.attemptInRepetitionRecovery(
            this.repetitionSepSecondInternal,
            [t, n, r, i, a],
            r,
            An,
            t,
            a
          )
        }),
        (e.prototype.doSingleRepetition = function (t) {
          var n = this.getLexerPosition()
          t.call(this)
          var r = this.getLexerPosition()
          return r > n
        }),
        (e.prototype.orInternalNoCst = function (t, n) {
          var r = gt(t) ? t : t.DEF,
            i = this.getKeyForAutomaticLookahead(Cn, n),
            a = this.getLaFuncFromCache(i),
            o = a.call(this, r)
          if (o !== void 0) {
            var s = r[o]
            return s.ALT.call(this)
          }
          this.raiseNoAltException(n, t.ERR_MSG)
        }),
        (e.prototype.orInternal = function (t, n) {
          var r = this.getKeyForAutomaticLookahead(Cn, n),
            i = this.nestedRuleBeforeClause(t, r)
          try {
            var a = gt(t) ? t : t.DEF,
              o = this.getLaFuncFromCache(r),
              s = o.call(this, a)
            if (s !== void 0) {
              var u = a[s],
                c = this.nestedAltBeforeClause(u, n, Cn, s)
              try {
                return u.ALT.call(this)
              } finally {
                c !== void 0 && this.nestedRuleFinallyClause(c.shortName, c.nestedName)
              }
            }
            this.raiseNoAltException(n, t.ERR_MSG)
          } finally {
            i !== void 0 && this.nestedRuleFinallyClause(r, i)
          }
        }),
        (e.prototype.ruleFinallyStateUpdate = function () {
          if (
            (this.RULE_STACK.pop(),
            this.RULE_OCCURRENCE_STACK.pop(),
            this.cstFinallyStateUpdate(),
            this.RULE_STACK.length === 0 && this.isAtEndOfInput() === !1)
          ) {
            var t = this.LA(1),
              n = this.errorMessageProvider.buildNotAllInputParsedMessage({
                firstRedundant: t,
                ruleName: this.getCurrRuleFullName()
              })
            this.SAVE_ERROR(new qi(n, t))
          }
        }),
        (e.prototype.subruleInternal = function (t, n, r) {
          var i
          try {
            var a = r !== void 0 ? r.ARGS : void 0
            return (
              (i = t.call(this, n, a)),
              this.cstPostNonTerminal(i, r !== void 0 && r.LABEL !== void 0 ? r.LABEL : t.ruleName),
              i
            )
          } catch (o) {
            this.subruleInternalError(o, r, t.ruleName)
          }
        }),
        (e.prototype.subruleInternalError = function (t, n, r) {
          throw (
            (rr(t) &&
              t.partialCstResult !== void 0 &&
              (this.cstPostNonTerminal(
                t.partialCstResult,
                n !== void 0 && n.LABEL !== void 0 ? n.LABEL : r
              ),
              delete t.partialCstResult),
            t)
          )
        }),
        (e.prototype.consumeInternal = function (t, n, r) {
          var i
          try {
            var a = this.LA(1)
            this.tokenMatcher(a, t) === !0
              ? (this.consumeToken(), (i = a))
              : this.consumeInternalError(t, a, r)
          } catch (o) {
            i = this.consumeInternalRecovery(t, n, o)
          }
          return this.cstPostTerminal(r !== void 0 && r.LABEL !== void 0 ? r.LABEL : t.name, i), i
        }),
        (e.prototype.consumeInternalError = function (t, n, r) {
          var i,
            a = this.LA(0)
          throw (
            (r !== void 0 && r.ERR_MSG
              ? (i = r.ERR_MSG)
              : (i = this.errorMessageProvider.buildMismatchTokenMessage({
                  expected: t,
                  actual: n,
                  previous: a,
                  ruleName: this.getCurrRuleFullName()
                })),
            this.SAVE_ERROR(new Fr(i, n, a)))
          )
        }),
        (e.prototype.consumeInternalRecovery = function (t, n, r) {
          if (
            this.recoveryEnabled &&
            r.name === 'MismatchedTokenException' &&
            !this.isBackTracking()
          ) {
            var i = this.getFollowsForInRuleRecovery(t, n)
            try {
              return this.tryInRuleRecovery(t, i)
            } catch (a) {
              throw a.name === ko ? r : a
            }
          } else throw r
        }),
        (e.prototype.saveRecogState = function () {
          var t = this.errors,
            n = it(this.RULE_STACK)
          return {
            errors: t,
            lexerState: this.exportLexerState(),
            RULE_STACK: n,
            CST_STACK: this.CST_STACK,
            LAST_EXPLICIT_RULE_STACK: this.LAST_EXPLICIT_RULE_STACK
          }
        }),
        (e.prototype.reloadRecogState = function (t) {
          ;(this.errors = t.errors),
            this.importLexerState(t.lexerState),
            (this.RULE_STACK = t.RULE_STACK)
        }),
        (e.prototype.ruleInvocationStateUpdate = function (t, n, r) {
          this.RULE_OCCURRENCE_STACK.push(r),
            this.RULE_STACK.push(t),
            this.cstInvocationStateUpdate(n, t)
        }),
        (e.prototype.isBackTracking = function () {
          return this.isBackTrackingStack.length !== 0
        }),
        (e.prototype.getCurrRuleFullName = function () {
          var t = this.getLastExplicitRuleShortName()
          return this.shortRuleNameToFull[t]
        }),
        (e.prototype.shortRuleNameToFullName = function (t) {
          return this.shortRuleNameToFull[t]
        }),
        (e.prototype.isAtEndOfInput = function () {
          return this.tokenMatcher(this.LA(1), tn)
        }),
        (e.prototype.reset = function () {
          this.resetLexerState(),
            (this.isBackTrackingStack = []),
            (this.errors = []),
            (this.RULE_STACK = []),
            (this.LAST_EXPLICIT_RULE_STACK = []),
            (this.CST_STACK = []),
            (this.RULE_OCCURRENCE_STACK = [])
        }),
        e
      )
    })(),
    Ef = (function () {
      function e() {}
      return (
        (e.prototype.initErrorHandler = function (t) {
          ;(this._errors = []),
            (this.errorMessageProvider = mr(t.errorMessageProvider, st.errorMessageProvider))
        }),
        (e.prototype.SAVE_ERROR = function (t) {
          if (rr(t))
            return (
              (t.context = {
                ruleStack: this.getHumanReadableRuleStack(),
                ruleOccurrenceStack: it(this.RULE_OCCURRENCE_STACK)
              }),
              this._errors.push(t),
              t
            )
          throw Error('Trying to save an Error which is not a RecognitionException')
        }),
        Object.defineProperty(e.prototype, 'errors', {
          get: function () {
            return it(this._errors)
          },
          set: function (t) {
            this._errors = t
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.raiseEarlyExitException = function (t, n, r) {
          for (
            var i = this.getCurrRuleFullName(),
              a = this.getGAstProductions()[i],
              o = ji(t, a, n, this.maxLookahead),
              s = o[0],
              u = [],
              c = 1;
            c <= this.maxLookahead;
            c++
          )
            u.push(this.LA(c))
          var p = this.errorMessageProvider.buildEarlyExitMessage({
            expectedIterationPaths: s,
            actual: u,
            previous: this.LA(0),
            customUserDescription: r,
            ruleName: i
          })
          throw this.SAVE_ERROR(new Hi(p, this.LA(1), this.LA(0)))
        }),
        (e.prototype.raiseNoAltException = function (t, n) {
          for (
            var r = this.getCurrRuleFullName(),
              i = this.getGAstProductions()[r],
              a = wi(t, i, this.maxLookahead),
              o = [],
              s = 1;
            s <= this.maxLookahead;
            s++
          )
            o.push(this.LA(s))
          var u = this.LA(0),
            c = this.errorMessageProvider.buildNoViableAltMessage({
              expectedPathsPerAlt: a,
              actual: o,
              previous: u,
              customUserDescription: n,
              ruleName: this.getCurrRuleFullName()
            })
          throw this.SAVE_ERROR(new Ji(c, this.LA(1), u))
        }),
        e
      )
    })(),
    yf = (function () {
      function e() {}
      return (
        (e.prototype.initContentAssist = function () {}),
        (e.prototype.computeContentAssist = function (t, n) {
          var r = this.gastProductionsCache[t]
          if (ht(r)) throw Error('Rule ->' + t + '<- does not exist in this grammar.')
          return Co([r], n, this.tokenMatcher, this.maxLookahead)
        }),
        (e.prototype.getNextPossibleTokenTypes = function (t) {
          var n = dt(t.ruleStack),
            r = this.getGAstProductions(),
            i = r[n],
            a = new Cl(i, t).startWalking()
          return a
        }),
        e
      )
    })(),
    Pr = { description: 'This Object indicates the Parser is during Recording Phase' }
  Object.freeze(Pr)
  var Vo = !0,
    Go = Math.pow(2, rn) - 1,
    Ko = bi({ name: 'RECORDING_PHASE_TOKEN', pattern: Rt.NA })
  zn([Ko])
  var Wo = Lr(
    Ko,
    `This IToken indicates the Parser is in Recording Phase
	See: https://sap.github.io/chevrotain/docs/guide/internals.html#grammar-recording for details`,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
  )
  Object.freeze(Wo)
  var Cf = {
      name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://sap.github.io/chevrotain/docs/guide/internals.html#grammar-recording for details`,
      children: {}
    },
    Af = (function () {
      function e() {}
      return (
        (e.prototype.initGastRecorder = function (t) {
          ;(this.recordingProdStack = []), (this.RECORDING_PHASE = !1)
        }),
        (e.prototype.enableRecording = function () {
          var t = this
          ;(this.RECORDING_PHASE = !0),
            this.TRACE_INIT('Enable Recording', function () {
              for (
                var n = function (i) {
                    var a = i > 0 ? i : ''
                    ;(t['CONSUME' + a] = function (o, s) {
                      return this.consumeInternalRecord(o, i, s)
                    }),
                      (t['SUBRULE' + a] = function (o, s) {
                        return this.subruleInternalRecord(o, i, s)
                      }),
                      (t['OPTION' + a] = function (o) {
                        return this.optionInternalRecord(o, i)
                      }),
                      (t['OR' + a] = function (o) {
                        return this.orInternalRecord(o, i)
                      }),
                      (t['MANY' + a] = function (o) {
                        this.manyInternalRecord(i, o)
                      }),
                      (t['MANY_SEP' + a] = function (o) {
                        this.manySepFirstInternalRecord(i, o)
                      }),
                      (t['AT_LEAST_ONE' + a] = function (o) {
                        this.atLeastOneInternalRecord(i, o)
                      }),
                      (t['AT_LEAST_ONE_SEP' + a] = function (o) {
                        this.atLeastOneSepFirstInternalRecord(i, o)
                      })
                  },
                  r = 0;
                r < 10;
                r++
              )
                n(r)
              ;(t.consume = function (i, a, o) {
                return this.consumeInternalRecord(a, i, o)
              }),
                (t.subrule = function (i, a, o) {
                  return this.subruleInternalRecord(a, i, o)
                }),
                (t.option = function (i, a) {
                  return this.optionInternalRecord(a, i)
                }),
                (t.or = function (i, a) {
                  return this.orInternalRecord(a, i)
                }),
                (t.many = function (i, a) {
                  this.manyInternalRecord(i, a)
                }),
                (t.atLeastOne = function (i, a) {
                  this.atLeastOneInternalRecord(i, a)
                }),
                (t.ACTION = t.ACTION_RECORD),
                (t.BACKTRACK = t.BACKTRACK_RECORD),
                (t.LA = t.LA_RECORD)
            })
        }),
        (e.prototype.disableRecording = function () {
          var t = this
          ;(this.RECORDING_PHASE = !1),
            this.TRACE_INIT('Deleting Recording methods', function () {
              for (var n = 0; n < 10; n++) {
                var r = n > 0 ? n : ''
                delete t['CONSUME' + r],
                  delete t['SUBRULE' + r],
                  delete t['OPTION' + r],
                  delete t['OR' + r],
                  delete t['MANY' + r],
                  delete t['MANY_SEP' + r],
                  delete t['AT_LEAST_ONE' + r],
                  delete t['AT_LEAST_ONE_SEP' + r]
              }
              delete t.consume,
                delete t.subrule,
                delete t.option,
                delete t.or,
                delete t.many,
                delete t.atLeastOne,
                delete t.ACTION,
                delete t.BACKTRACK,
                delete t.LA
            })
        }),
        (e.prototype.ACTION_RECORD = function (t) {}),
        (e.prototype.BACKTRACK_RECORD = function (t, n) {
          return function () {
            return !0
          }
        }),
        (e.prototype.LA_RECORD = function (t) {
          return xr
        }),
        (e.prototype.topLevelRuleRecord = function (t, n) {
          try {
            var r = new pn({ definition: [], name: t })
            return (
              (r.name = t),
              this.recordingProdStack.push(r),
              n.call(this),
              this.recordingProdStack.pop(),
              r
            )
          } catch (i) {
            if (i.KNOWN_RECORDER_ERROR !== !0)
              try {
                i.message =
                  i.message +
                  `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://sap.github.io/chevrotain/docs/guide/internals.html#grammar-recording`
              } catch {
                throw i
              }
            throw i
          }
        }),
        (e.prototype.optionInternalRecord = function (t, n) {
          return ir.call(this, Me, t, n)
        }),
        (e.prototype.atLeastOneInternalRecord = function (t, n) {
          ir.call(this, at, n, t)
        }),
        (e.prototype.atLeastOneSepFirstInternalRecord = function (t, n) {
          ir.call(this, ot, n, t, Vo)
        }),
        (e.prototype.manyInternalRecord = function (t, n) {
          ir.call(this, Ae, n, t)
        }),
        (e.prototype.manySepFirstInternalRecord = function (t, n) {
          ir.call(this, Xe, n, t, Vo)
        }),
        (e.prototype.orInternalRecord = function (t, n) {
          return Sf.call(this, t, n)
        }),
        (e.prototype.subruleInternalRecord = function (t, n, r) {
          if ((kr(n), !t || G(t, 'ruleName') === !1)) {
            var i = new Error(
              '<SUBRULE' +
                Jo(n) +
                '> argument is invalid' +
                (' expecting a Parser method reference but got: <' + JSON.stringify(t) + '>') +
                (`
 inside top level rule: <` +
                  this.recordingProdStack[0].name +
                  '>')
            )
            throw ((i.KNOWN_RECORDER_ERROR = !0), i)
          }
          var a = vr(this.recordingProdStack),
            o = t.ruleName,
            s = new ze({ idx: n, nonTerminalName: o, referencedRule: void 0 })
          return a.definition.push(s), this.outputCst ? Cf : Pr
        }),
        (e.prototype.consumeInternalRecord = function (t, n, r) {
          if ((kr(n), !Za(t))) {
            var i = new Error(
              '<CONSUME' +
                Jo(n) +
                '> argument is invalid' +
                (' expecting a TokenType reference but got: <' + JSON.stringify(t) + '>') +
                (`
 inside top level rule: <` +
                  this.recordingProdStack[0].name +
                  '>')
            )
            throw ((i.KNOWN_RECORDER_ERROR = !0), i)
          }
          var a = vr(this.recordingProdStack),
            o = new he({ idx: n, terminalType: t })
          return a.definition.push(o), Wo
        }),
        e
      )
    })()
  function ir(e, t, n, r) {
    r === void 0 && (r = !1), kr(n)
    var i = vr(this.recordingProdStack),
      a = $t(t) ? t : t.DEF,
      o = new e({ definition: [], idx: n })
    return (
      G(t, 'NAME') && (o.name = t.NAME),
      r && (o.separator = t.SEP),
      G(t, 'MAX_LOOKAHEAD') && (o.maxLookahead = t.MAX_LOOKAHEAD),
      this.recordingProdStack.push(o),
      a.call(this),
      i.definition.push(o),
      this.recordingProdStack.pop(),
      Pr
    )
  }
  function Sf(e, t) {
    var n = this
    kr(t)
    var r = vr(this.recordingProdStack),
      i = gt(e) === !1,
      a = i === !1 ? e : e.DEF,
      o = new Ze({ definition: [], idx: t, ignoreAmbiguities: i && e.IGNORE_AMBIGUITIES === !0 })
    G(e, 'NAME') && (o.name = e.NAME), G(e, 'MAX_LOOKAHEAD') && (o.maxLookahead = e.MAX_LOOKAHEAD)
    var s = Ba(a, function (u) {
      return $t(u.GATE)
    })
    return (
      (o.hasPredicates = s),
      r.definition.push(o),
      V(a, function (u) {
        var c = new He({ definition: [] })
        o.definition.push(c),
          G(u, 'NAME') && (c.name = u.NAME),
          G(u, 'IGNORE_AMBIGUITIES')
            ? (c.ignoreAmbiguities = u.IGNORE_AMBIGUITIES)
            : G(u, 'GATE') && (c.ignoreAmbiguities = !0),
          n.recordingProdStack.push(c),
          u.ALT.call(n),
          n.recordingProdStack.pop()
      }),
      Pr
    )
  }
  function Jo(e) {
    return e === 0 ? '' : '' + e
  }
  function kr(e) {
    if (e < 0 || e > Go) {
      var t = new Error(
        'Invalid DSL Method idx value: <' +
          e +
          `>
	` +
          ('Idx value must be a none negative value smaller than ' + (Go + 1))
      )
      throw ((t.KNOWN_RECORDER_ERROR = !0), t)
    }
  }
  var Tf = (function () {
      function e() {}
      return (
        (e.prototype.initPerformanceTracer = function (t) {
          if (G(t, 'traceInitPerf')) {
            var n = t.traceInitPerf,
              r = typeof n == 'number'
            ;(this.traceInitMaxIdent = r ? n : 1 / 0), (this.traceInitPerf = r ? n > 0 : n)
          } else (this.traceInitMaxIdent = 0), (this.traceInitPerf = st.traceInitPerf)
          this.traceInitIndent = -1
        }),
        (e.prototype.TRACE_INIT = function (t, n) {
          if (this.traceInitPerf === !0) {
            this.traceInitIndent++
            var r = new Array(this.traceInitIndent + 1).join('	')
            this.traceInitIndent < this.traceInitMaxIdent && console.log(r + '--> <' + t + '>')
            var i = xa(n),
              a = i.time,
              o = i.value,
              s = a > 10 ? console.warn : console.log
            return (
              this.traceInitIndent < this.traceInitMaxIdent &&
                s(r + '<-- <' + t + '> time: ' + a + 'ms'),
              this.traceInitIndent--,
              o
            )
          } else return n()
        }),
        e
      )
    })(),
    qo =
      (globalThis && globalThis.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })(),
    xr = Lr(tn, '', NaN, NaN, NaN, NaN, NaN, NaN)
  Object.freeze(xr)
  var st = Object.freeze({
      recoveryEnabled: !1,
      maxLookahead: 4,
      ignoredIssues: {},
      dynamicTokensEnabled: !1,
      outputCst: !0,
      errorMessageProvider: Wi,
      nodeLocationTracking: 'none',
      traceInitPerf: !1,
      skipValidations: !1
    }),
    wr = Object.freeze({ recoveryValueFunc: function () {}, resyncEnabled: !0 }),
    be
  ;(function (e) {
    ;(e[(e.INVALID_RULE_NAME = 0)] = 'INVALID_RULE_NAME'),
      (e[(e.DUPLICATE_RULE_NAME = 1)] = 'DUPLICATE_RULE_NAME'),
      (e[(e.INVALID_RULE_OVERRIDE = 2)] = 'INVALID_RULE_OVERRIDE'),
      (e[(e.DUPLICATE_PRODUCTIONS = 3)] = 'DUPLICATE_PRODUCTIONS'),
      (e[(e.UNRESOLVED_SUBRULE_REF = 4)] = 'UNRESOLVED_SUBRULE_REF'),
      (e[(e.LEFT_RECURSION = 5)] = 'LEFT_RECURSION'),
      (e[(e.NONE_LAST_EMPTY_ALT = 6)] = 'NONE_LAST_EMPTY_ALT'),
      (e[(e.AMBIGUOUS_ALTS = 7)] = 'AMBIGUOUS_ALTS'),
      (e[(e.CONFLICT_TOKENS_RULES_NAMESPACE = 8)] = 'CONFLICT_TOKENS_RULES_NAMESPACE'),
      (e[(e.INVALID_TOKEN_NAME = 9)] = 'INVALID_TOKEN_NAME'),
      (e[(e.INVALID_NESTED_RULE_NAME = 10)] = 'INVALID_NESTED_RULE_NAME'),
      (e[(e.DUPLICATE_NESTED_NAME = 11)] = 'DUPLICATE_NESTED_NAME'),
      (e[(e.NO_NON_EMPTY_LOOKAHEAD = 12)] = 'NO_NON_EMPTY_LOOKAHEAD'),
      (e[(e.AMBIGUOUS_PREFIX_ALTS = 13)] = 'AMBIGUOUS_PREFIX_ALTS'),
      (e[(e.TOO_MANY_ALTS = 14)] = 'TOO_MANY_ALTS')
  })(be || (be = {}))
  function gf(e) {
    return (
      e === void 0 && (e = void 0),
      function () {
        return e
      }
    )
  }
  var jr = (function () {
    function e(t, n) {
      n === void 0 && (n = st),
        (this.ignoredIssues = st.ignoredIssues),
        (this.definitionErrors = []),
        (this.selfAnalysisDone = !1)
      var r = this
      r.initErrorHandler(n),
        r.initLexerAdapter(),
        r.initLooksAhead(n),
        r.initRecognizerEngine(t, n),
        r.initRecoverable(n),
        r.initTreeBuilder(n),
        r.initContentAssist(),
        r.initGastRecorder(n),
        r.initPerformanceTracer(n),
        G(n, 'ignoredIssues') &&
          n.ignoredIssues !== st.ignoredIssues &&
          _i(`The <ignoredIssues> IParserConfig property is soft-deprecated and will be removed in future versions.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.`),
        (this.ignoredIssues = G(n, 'ignoredIssues') ? n.ignoredIssues : st.ignoredIssues),
        (this.skipValidations = G(n, 'skipValidations') ? n.skipValidations : st.skipValidations)
    }
    return (
      (e.performSelfAnalysis = function (t) {
        t.performSelfAnalysis()
      }),
      (e.prototype.performSelfAnalysis = function () {
        var t = this
        this.TRACE_INIT('performSelfAnalysis', function () {
          var n
          t.selfAnalysisDone = !0
          var r = t.className
          t.TRACE_INIT('toFastProps', function () {
            ka(t)
          }),
            t.TRACE_INIT('Grammar Recording', function () {
              try {
                t.enableRecording(),
                  V(t.definedRulesNames, function (a) {
                    var o = t[a],
                      s = o.originalGrammarAction,
                      u = void 0
                    t.TRACE_INIT(a + ' Rule', function () {
                      u = t.topLevelRuleRecord(a, s)
                    }),
                      (t.gastProductionsCache[a] = u)
                  })
              } finally {
                t.disableRecording()
              }
            })
          var i = []
          if (
            (t.TRACE_INIT('Grammar Resolving', function () {
              ;(i = _o({ rules: qe(t.gastProductionsCache) })),
                t.definitionErrors.push.apply(t.definitionErrors, i)
            }),
            t.TRACE_INIT('Grammar Validations', function () {
              if (le(i) && t.skipValidations === !1) {
                var a = Io({
                  rules: qe(t.gastProductionsCache),
                  maxLookahead: t.maxLookahead,
                  tokenTypes: qe(t.tokensMap),
                  ignoredIssues: t.ignoredIssues,
                  errMsgProvider: Br,
                  grammarName: r
                })
                t.definitionErrors.push.apply(t.definitionErrors, a)
              }
            }),
            le(t.definitionErrors) &&
              (t.recoveryEnabled &&
                t.TRACE_INIT('computeAllProdsFollows', function () {
                  var a = fl(qe(t.gastProductionsCache))
                  t.resyncFollows = a
                }),
              t.TRACE_INIT('ComputeLookaheadFunctions', function () {
                t.preComputeLookaheadFunctions(qe(t.gastProductionsCache))
              })),
            t.TRACE_INIT('expandAllNestedRuleNames', function () {
              var a = El(qe(t.gastProductionsCache), t.fullRuleNameToShort)
              t.allRuleNames = a.allRuleNames
            }),
            !e.DEFER_DEFINITION_ERRORS_HANDLING && !le(t.definitionErrors))
          )
            throw (
              ((n = P(t.definitionErrors, function (a) {
                return a.message
              })),
              new Error(
                `Parser Definition Errors detected:
 ` +
                  n.join(`
-------------------------------
`)
              ))
            )
        })
      }),
      (e.DEFER_DEFINITION_ERRORS_HANDLING = !1),
      e
    )
  })()
  dc(jr, [tf, rf, hf, mf, Df, vf, Ef, yf, Af, Tf])
  var Lf = (function (e) {
      qo(t, e)
      function t(n, r) {
        r === void 0 && (r = st)
        var i = this,
          a = qn(r)
        return (a.outputCst = !0), (i = e.call(this, n, a) || this), i
      }
      return t
    })(jr),
    Rf = (function (e) {
      qo(t, e)
      function t(n, r) {
        r === void 0 && (r = st)
        var i = this,
          a = qn(r)
        return (a.outputCst = !1), (i = e.call(this, n, a) || this), i
      }
      return t
    })(jr)
  function Uf(e, t) {
    var n = t === void 0 ? {} : t,
      r = n.resourceBase,
      i = r === void 0 ? 'https://unpkg.com/chevrotain@' + Ri + '/diagrams/' : r,
      a = n.css,
      o = a === void 0 ? 'https://unpkg.com/chevrotain@' + Ri + '/diagrams/diagrams.css' : a,
      s = `
<!-- This is a generated file -->
<!DOCTYPE html>
<meta charset="utf-8">
<style>
  body {
    background-color: hsl(30, 20%, 95%)
  }
</style>

`,
      u =
        `
<link rel='stylesheet' href='` +
        o +
        `'>
`,
      c =
        `
<script src='` +
        i +
        `vendor/railroad-diagrams.js'><\/script>
<script src='` +
        i +
        `src/diagrams_builder.js'><\/script>
<script src='` +
        i +
        `src/diagrams_behavior.js'><\/script>
<script src='` +
        i +
        `src/main.js'><\/script>
`,
      p = `
<div id="diagrams" align="center"></div>    
`,
      f =
        `
<script>
    window.serializedGrammar = ` +
        JSON.stringify(e, null, '  ') +
        `;
<\/script>
`,
      m = `
<script>
    var diagramsDiv = document.getElementById("diagrams");
    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);
<\/script>
`
    return s + u + c + p + f + m
  }
  var Ie = `
`
  function Of(e) {
    return (
      `
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['chevrotain'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('chevrotain'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.b);
    }
}(typeof self !== 'undefined' ? self : this, function (chevrotain) {

` +
      Ho(e) +
      `
    
return {
    ` +
      e.name +
      ': ' +
      e.name +
      ` 
}
}));
`
    )
  }
  function Nf(e) {
    return (
      `    
` +
      Ho(e) +
      `
return new ` +
      e.name +
      `(tokenVocabulary, config)    
`
    )
  }
  function Ho(e) {
    var t =
      `
function ` +
      e.name +
      `(tokenVocabulary, config) {
    // invoke super constructor
    // No support for embedded actions currently, so we can 'hardcode'
    // The use of CstParser.
    chevrotain.CstParser.call(this, tokenVocabulary, config)

    const $ = this

    ` +
      _f(e.rules) +
      `

    // very important to call this after all the rules have been defined.
    // otherwise the parser may not work correctly as it will lack information
    // derived during the self analysis phase.
    this.performSelfAnalysis(this)
}

// inheritance as implemented in javascript in the previous decade... :(
` +
      e.name +
      `.prototype = Object.create(chevrotain.CstParser.prototype)
` +
      e.name +
      '.prototype.constructor = ' +
      e.name +
      `    
    `
    return t
  }
  function _f(e) {
    var t = P(e, function (n) {
      return If(n, 1)
    })
    return t.join(`
`)
  }
  function If(e, t) {
    var n = We(t, '$.RULE("' + e.name + '", function() {') + Ie
    return (n += Vr(e.definition, t + 1)), (n += We(t + 1, '})') + Ie), n
  }
  function Bf(e, t) {
    var n = e.terminalType.name
    return We(t, '$.CONSUME' + e.idx + '(this.tokensMap.' + n + ')' + Ie)
  }
  function Ff(e, t) {
    return We(t, '$.SUBRULE' + e.idx + '($.' + e.nonTerminalName + ')' + Ie)
  }
  function Mf(e, t) {
    var n = We(t, '$.OR' + e.idx + '([') + Ie,
      r = P(e.definition, function (i) {
        return bf(i, t + 1)
      })
    return (n += r.join(',' + Ie)), (n += Ie + We(t, '])' + Ie)), n
  }
  function bf(e, t) {
    var n = We(t, '{') + Ie
    return (
      e.name && (n += We(t + 1, 'NAME: "' + e.name + '",') + Ie),
      (n += We(t + 1, 'ALT: function() {') + Ie),
      (n += Vr(e.definition, t + 1)),
      (n += We(t + 1, '}') + Ie),
      (n += We(t, '}')),
      n
    )
  }
  function Pf(e, t) {
    if (e instanceof ze) return Ff(e, t)
    if (e instanceof Me) return ar('OPTION', e, t)
    if (e instanceof at) return ar('AT_LEAST_ONE', e, t)
    if (e instanceof ot) return ar('AT_LEAST_ONE_SEP', e, t)
    if (e instanceof Xe) return ar('MANY_SEP', e, t)
    if (e instanceof Ae) return ar('MANY', e, t)
    if (e instanceof Ze) return Mf(e, t)
    if (e instanceof he) return Bf(e, t)
    if (e instanceof He) return Vr(e.definition, t)
    throw Error('non exhaustive match')
  }
  function ar(e, t, n) {
    var r = We(n, '$.' + (e + t.idx) + '(')
    return (
      t.name || t.separator
        ? ((r += '{' + Ie),
          t.name && (r += We(n + 1, 'NAME: "' + t.name + '"') + ',' + Ie),
          t.separator && (r += We(n + 1, 'SEP: this.tokensMap.' + t.separator.name) + ',' + Ie),
          (r += 'DEF: ' + Yo(t.definition, n + 2) + Ie),
          (r += We(n, '}') + Ie))
        : (r += Yo(t.definition, n + 1)),
      (r += We(n, ')') + Ie),
      r
    )
  }
  function Yo(e, t) {
    var n = 'function() {' + Ie
    return (n += Vr(e, t)), (n += We(t, '}') + Ie), n
  }
  function Vr(e, t) {
    var n = ''
    return (
      V(e, function (r) {
        n += Pf(r, t + 1)
      }),
      n
    )
  }
  function We(e, t) {
    var n = Array(e * 4 + 1).join(' ')
    return n + t
  }
  function kf(e) {
    var t = Nf({ name: e.name, rules: e.rules }),
      n = new Function('tokenVocabulary', 'config', 'chevrotain', t)
    return function (r) {
      return n(e.tokenVocabulary, r, require('../api'))
    }
  }
  function xf(e) {
    return Of({ name: e.name, rules: e.rules })
  }
  function wf() {
    console.warn(`The clearCache function was 'soft' removed from the Chevrotain API.
	 It performs no action other than printing this message.
	 Please avoid using it as it will be completely removed in the future`)
  }
  const Ot = sc(
    Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          Alternation: Ze,
          CstParser: Lf,
          EMPTY_ALT: gf,
          EOF: tn,
          EarlyExitException: Hi,
          EmbeddedActionsParser: Rf,
          Flat: He,
          GAstVisitor: nn,
          Lexer: Rt,
          get LexerDefinitionErrorType() {
            return ge
          },
          MismatchedTokenException: Fr,
          NoViableAltException: Ji,
          NonTerminal: ze,
          NotAllInputParsedException: qi,
          Option: Me,
          Parser: jr,
          get ParserDefinitionErrorType() {
            return be
          },
          Repetition: Ae,
          RepetitionMandatory: at,
          RepetitionMandatoryWithSeparator: ot,
          RepetitionWithSeparator: Xe,
          Rule: pn,
          Terminal: he,
          VERSION: Ri,
          assignOccurrenceIndices: ef,
          clearCache: wf,
          createSyntaxDiagramsCode: Uf,
          createToken: bi,
          createTokenInstance: Lr,
          defaultGrammarResolverErrorProvider: No,
          defaultGrammarValidatorErrorProvider: Br,
          defaultLexerErrorProvider: $a,
          defaultParserErrorProvider: Wi,
          generateParserFactory: kf,
          generateParserModule: xf,
          isRecognitionException: rr,
          resolveGrammar: _o,
          serializeGrammar: co,
          serializeProduction: Zn,
          tokenLabel: fn,
          tokenMatcher: tl,
          tokenName: Qc,
          validateGrammar: Io
        },
        Symbol.toStringTag,
        { value: 'Module' }
      )
    )
  )
  var jf = typeof W == 'object' && W && W.Object === Object && W,
    zo = jf,
    Vf = zo,
    Gf = typeof self == 'object' && self && self.Object === Object && self,
    Kf = Vf || Gf || Function('return this')(),
    qt = Kf,
    Wf = qt,
    Jf = Wf.Symbol,
    Gr = Jf
  function qf(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; ) i[n] = t(e[n], n, e)
    return i
  }
  var Xo = qf,
    Hf = Array.isArray,
    Nt = Hf,
    Zo = Gr,
    Qo = Object.prototype,
    Yf = Qo.hasOwnProperty,
    zf = Qo.toString,
    or = Zo ? Zo.toStringTag : void 0
  function Xf(e) {
    var t = Yf.call(e, or),
      n = e[or]
    try {
      e[or] = void 0
      var r = !0
    } catch {}
    var i = zf.call(e)
    return r && (t ? (e[or] = n) : delete e[or]), i
  }
  var Zf = Xf,
    Qf = Object.prototype,
    $f = Qf.toString
  function ep(e) {
    return $f.call(e)
  }
  var tp = ep,
    $o = Gr,
    np = Zf,
    rp = tp,
    ip = '[object Null]',
    ap = '[object Undefined]',
    es = $o ? $o.toStringTag : void 0
  function op(e) {
    return e == null ? (e === void 0 ? ap : ip) : es && es in Object(e) ? np(e) : rp(e)
  }
  var Sn = op
  function sp(e) {
    return e != null && typeof e == 'object'
  }
  var Tn = sp,
    up = Sn,
    cp = Tn,
    lp = '[object Symbol]'
  function fp(e) {
    return typeof e == 'symbol' || (cp(e) && up(e) == lp)
  }
  var Kr = fp,
    ts = Gr,
    pp = Xo,
    dp = Nt,
    hp = Kr,
    mp = 1 / 0,
    ns = ts ? ts.prototype : void 0,
    rs = ns ? ns.toString : void 0
  function is(e) {
    if (typeof e == 'string') return e
    if (dp(e)) return pp(e, is) + ''
    if (hp(e)) return rs ? rs.call(e) : ''
    var t = e + ''
    return t == '0' && 1 / e == -mp ? '-0' : t
  }
  var vp = is,
    Dp = vp
  function Ep(e) {
    return e == null ? '' : Dp(e)
  }
  var sr = Ep
  function yp(e, t, n) {
    var r = -1,
      i = e.length
    t < 0 && (t = -t > i ? 0 : i + t),
      (n = n > i ? i : n),
      n < 0 && (n += i),
      (i = t > n ? 0 : (n - t) >>> 0),
      (t >>>= 0)
    for (var a = Array(i); ++r < i; ) a[r] = e[r + t]
    return a
  }
  var Cp = yp,
    Ap = Cp
  function Sp(e, t, n) {
    var r = e.length
    return (n = n === void 0 ? r : n), !t && n >= r ? e : Ap(e, t, n)
  }
  var Tp = Sp,
    gp = '\\ud800-\\udfff',
    Lp = '\\u0300-\\u036f',
    Rp = '\\ufe20-\\ufe2f',
    Up = '\\u20d0-\\u20ff',
    Op = Lp + Rp + Up,
    Np = '\\ufe0e\\ufe0f',
    _p = '\\u200d',
    Ip = RegExp('[' + _p + gp + Op + Np + ']')
  function Bp(e) {
    return Ip.test(e)
  }
  var as = Bp
  function Fp(e) {
    return e.split('')
  }
  var Mp = Fp,
    os = '\\ud800-\\udfff',
    bp = '\\u0300-\\u036f',
    Pp = '\\ufe20-\\ufe2f',
    kp = '\\u20d0-\\u20ff',
    xp = bp + Pp + kp,
    wp = '\\ufe0e\\ufe0f',
    jp = '[' + os + ']',
    zi = '[' + xp + ']',
    Xi = '\\ud83c[\\udffb-\\udfff]',
    Vp = '(?:' + zi + '|' + Xi + ')',
    ss = '[^' + os + ']',
    us = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    cs = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    Gp = '\\u200d',
    ls = Vp + '?',
    fs = '[' + wp + ']?',
    Kp = '(?:' + Gp + '(?:' + [ss, us, cs].join('|') + ')' + fs + ls + ')*',
    Wp = fs + ls + Kp,
    Jp = '(?:' + [ss + zi + '?', zi, us, cs, jp].join('|') + ')',
    qp = RegExp(Xi + '(?=' + Xi + ')|' + Jp + Wp, 'g')
  function Hp(e) {
    return e.match(qp) || []
  }
  var Yp = Hp,
    zp = Mp,
    Xp = as,
    Zp = Yp
  function Qp(e) {
    return Xp(e) ? Zp(e) : zp(e)
  }
  var $p = Qp,
    ed = Tp,
    td = as,
    nd = $p,
    rd = sr
  function id(e) {
    return function (t) {
      t = rd(t)
      var n = td(t) ? nd(t) : void 0,
        r = n ? n[0] : t.charAt(0),
        i = n ? ed(n, 1).join('') : t.slice(1)
      return r[e]() + i
    }
  }
  var ad = id,
    od = ad,
    sd = od('toUpperCase'),
    ud = sd,
    cd = sr,
    ld = ud
  function fd(e) {
    return ld(cd(e).toLowerCase())
  }
  var pd = fd
  function dd(e, t, n, r) {
    var i = -1,
      a = e == null ? 0 : e.length
    for (r && a && (n = e[++i]); ++i < a; ) n = t(n, e[i], i, e)
    return n
  }
  var hd = dd
  function md(e) {
    return function (t) {
      return e == null ? void 0 : e[t]
    }
  }
  var vd = md,
    Dd = vd,
    Ed = {
      À: 'A',
      Á: 'A',
      Â: 'A',
      Ã: 'A',
      Ä: 'A',
      Å: 'A',
      à: 'a',
      á: 'a',
      â: 'a',
      ã: 'a',
      ä: 'a',
      å: 'a',
      Ç: 'C',
      ç: 'c',
      Ð: 'D',
      ð: 'd',
      È: 'E',
      É: 'E',
      Ê: 'E',
      Ë: 'E',
      è: 'e',
      é: 'e',
      ê: 'e',
      ë: 'e',
      Ì: 'I',
      Í: 'I',
      Î: 'I',
      Ï: 'I',
      ì: 'i',
      í: 'i',
      î: 'i',
      ï: 'i',
      Ñ: 'N',
      ñ: 'n',
      Ò: 'O',
      Ó: 'O',
      Ô: 'O',
      Õ: 'O',
      Ö: 'O',
      Ø: 'O',
      ò: 'o',
      ó: 'o',
      ô: 'o',
      õ: 'o',
      ö: 'o',
      ø: 'o',
      Ù: 'U',
      Ú: 'U',
      Û: 'U',
      Ü: 'U',
      ù: 'u',
      ú: 'u',
      û: 'u',
      ü: 'u',
      Ý: 'Y',
      ý: 'y',
      ÿ: 'y',
      Æ: 'Ae',
      æ: 'ae',
      Þ: 'Th',
      þ: 'th',
      ß: 'ss',
      Ā: 'A',
      Ă: 'A',
      Ą: 'A',
      ā: 'a',
      ă: 'a',
      ą: 'a',
      Ć: 'C',
      Ĉ: 'C',
      Ċ: 'C',
      Č: 'C',
      ć: 'c',
      ĉ: 'c',
      ċ: 'c',
      č: 'c',
      Ď: 'D',
      Đ: 'D',
      ď: 'd',
      đ: 'd',
      Ē: 'E',
      Ĕ: 'E',
      Ė: 'E',
      Ę: 'E',
      Ě: 'E',
      ē: 'e',
      ĕ: 'e',
      ė: 'e',
      ę: 'e',
      ě: 'e',
      Ĝ: 'G',
      Ğ: 'G',
      Ġ: 'G',
      Ģ: 'G',
      ĝ: 'g',
      ğ: 'g',
      ġ: 'g',
      ģ: 'g',
      Ĥ: 'H',
      Ħ: 'H',
      ĥ: 'h',
      ħ: 'h',
      Ĩ: 'I',
      Ī: 'I',
      Ĭ: 'I',
      Į: 'I',
      İ: 'I',
      ĩ: 'i',
      ī: 'i',
      ĭ: 'i',
      į: 'i',
      ı: 'i',
      Ĵ: 'J',
      ĵ: 'j',
      Ķ: 'K',
      ķ: 'k',
      ĸ: 'k',
      Ĺ: 'L',
      Ļ: 'L',
      Ľ: 'L',
      Ŀ: 'L',
      Ł: 'L',
      ĺ: 'l',
      ļ: 'l',
      ľ: 'l',
      ŀ: 'l',
      ł: 'l',
      Ń: 'N',
      Ņ: 'N',
      Ň: 'N',
      Ŋ: 'N',
      ń: 'n',
      ņ: 'n',
      ň: 'n',
      ŋ: 'n',
      Ō: 'O',
      Ŏ: 'O',
      Ő: 'O',
      ō: 'o',
      ŏ: 'o',
      ő: 'o',
      Ŕ: 'R',
      Ŗ: 'R',
      Ř: 'R',
      ŕ: 'r',
      ŗ: 'r',
      ř: 'r',
      Ś: 'S',
      Ŝ: 'S',
      Ş: 'S',
      Š: 'S',
      ś: 's',
      ŝ: 's',
      ş: 's',
      š: 's',
      Ţ: 'T',
      Ť: 'T',
      Ŧ: 'T',
      ţ: 't',
      ť: 't',
      ŧ: 't',
      Ũ: 'U',
      Ū: 'U',
      Ŭ: 'U',
      Ů: 'U',
      Ű: 'U',
      Ų: 'U',
      ũ: 'u',
      ū: 'u',
      ŭ: 'u',
      ů: 'u',
      ű: 'u',
      ų: 'u',
      Ŵ: 'W',
      ŵ: 'w',
      Ŷ: 'Y',
      ŷ: 'y',
      Ÿ: 'Y',
      Ź: 'Z',
      Ż: 'Z',
      Ž: 'Z',
      ź: 'z',
      ż: 'z',
      ž: 'z',
      Ĳ: 'IJ',
      ĳ: 'ij',
      Œ: 'Oe',
      œ: 'oe',
      ŉ: "'n",
      ſ: 's'
    },
    yd = Dd(Ed),
    Cd = yd,
    Ad = Cd,
    Sd = sr,
    Td = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    gd = '\\u0300-\\u036f',
    Ld = '\\ufe20-\\ufe2f',
    Rd = '\\u20d0-\\u20ff',
    Ud = gd + Ld + Rd,
    Od = '[' + Ud + ']',
    Nd = RegExp(Od, 'g')
  function _d(e) {
    return (e = Sd(e)), e && e.replace(Td, Ad).replace(Nd, '')
  }
  var Id = _d,
    Bd = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g
  function Fd(e) {
    return e.match(Bd) || []
  }
  var Md = Fd,
    bd = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
  function Pd(e) {
    return bd.test(e)
  }
  var kd = Pd,
    ps = '\\ud800-\\udfff',
    xd = '\\u0300-\\u036f',
    wd = '\\ufe20-\\ufe2f',
    jd = '\\u20d0-\\u20ff',
    Vd = xd + wd + jd,
    ds = '\\u2700-\\u27bf',
    hs = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    Gd = '\\xac\\xb1\\xd7\\xf7',
    Kd = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    Wd = '\\u2000-\\u206f',
    Jd =
      ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    ms = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    qd = '\\ufe0e\\ufe0f',
    vs = Gd + Kd + Wd + Jd,
    Ds = "['’]",
    Es = '[' + vs + ']',
    Hd = '[' + Vd + ']',
    ys = '\\d+',
    Yd = '[' + ds + ']',
    Cs = '[' + hs + ']',
    As = '[^' + ps + vs + ys + ds + hs + ms + ']',
    zd = '\\ud83c[\\udffb-\\udfff]',
    Xd = '(?:' + Hd + '|' + zd + ')',
    Zd = '[^' + ps + ']',
    Ss = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    Ts = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    gn = '[' + ms + ']',
    Qd = '\\u200d',
    gs = '(?:' + Cs + '|' + As + ')',
    $d = '(?:' + gn + '|' + As + ')',
    Ls = '(?:' + Ds + '(?:d|ll|m|re|s|t|ve))?',
    Rs = '(?:' + Ds + '(?:D|LL|M|RE|S|T|VE))?',
    Us = Xd + '?',
    Os = '[' + qd + ']?',
    eh = '(?:' + Qd + '(?:' + [Zd, Ss, Ts].join('|') + ')' + Os + Us + ')*',
    th = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    nh = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rh = Os + Us + eh,
    ih = '(?:' + [Yd, Ss, Ts].join('|') + ')' + rh,
    ah = RegExp(
      [
        gn + '?' + Cs + '+' + Ls + '(?=' + [Es, gn, '$'].join('|') + ')',
        $d + '+' + Rs + '(?=' + [Es, gn + gs, '$'].join('|') + ')',
        gn + '?' + gs + '+' + Ls,
        gn + '+' + Rs,
        nh,
        th,
        ys,
        ih
      ].join('|'),
      'g'
    )
  function oh(e) {
    return e.match(ah) || []
  }
  var sh = oh,
    uh = Md,
    ch = kd,
    lh = sr,
    fh = sh
  function ph(e, t, n) {
    return (
      (e = lh(e)), (t = n ? void 0 : t), t === void 0 ? (ch(e) ? fh(e) : uh(e)) : e.match(t) || []
    )
  }
  var dh = ph,
    hh = hd,
    mh = Id,
    vh = dh,
    Dh = "['’]",
    Eh = RegExp(Dh, 'g')
  function yh(e) {
    return function (t) {
      return hh(vh(mh(t).replace(Eh, '')), e, '')
    }
  }
  var Ch = yh,
    Ah = pd,
    Sh = Ch,
    Th = Sh(function (e, t, n) {
      return (t = t.toLowerCase()), e + (n ? Ah(t) : t)
    }),
    gh = Th,
    Zi,
    Ns
  function Lh() {
    if (Ns) return Zi
    Ns = 1
    const e = (s, u) => {
        for (let c = 0; c < u.length; c++) {
          const p = u[c],
            f = p[0],
            m = p[1]
          for (let C = f; C <= m; C++) s.add(C)
        }
      },
      t = new Set([
        181, 257, 259, 261, 263, 265, 267, 269, 271, 273, 275, 277, 279, 281, 283, 285, 287, 289,
        291, 293, 295, 297, 299, 301, 303, 305, 307, 309, 314, 316, 318, 320, 322, 324, 326, 331,
        333, 335, 337, 339, 341, 343, 345, 347, 349, 351, 353, 355, 357, 359, 361, 363, 365, 367,
        369, 371, 373, 375, 378, 380, 387, 389, 392, 402, 405, 414, 417, 419, 421, 424, 429, 432,
        436, 438, 454, 457, 460, 462, 464, 466, 468, 470, 472, 474, 479, 481, 483, 485, 487, 489,
        491, 493, 499, 501, 505, 507, 509, 511, 513, 515, 517, 519, 521, 523, 525, 527, 529, 531,
        533, 535, 537, 539, 541, 543, 545, 547, 549, 551, 553, 555, 557, 559, 561, 572, 578, 583,
        585, 587, 589, 881, 883, 887, 912, 985, 987, 989, 991, 993, 995, 997, 999, 1001, 1003, 1005,
        1013, 1016, 1121, 1123, 1125, 1127, 1129, 1131, 1133, 1135, 1137, 1139, 1141, 1143, 1145,
        1147, 1149, 1151, 1153, 1163, 1165, 1167, 1169, 1171, 1173, 1175, 1177, 1179, 1181, 1183,
        1185, 1187, 1189, 1191, 1193, 1195, 1197, 1199, 1201, 1203, 1205, 1207, 1209, 1211, 1213,
        1215, 1218, 1220, 1222, 1224, 1226, 1228, 1233, 1235, 1237, 1239, 1241, 1243, 1245, 1247,
        1249, 1251, 1253, 1255, 1257, 1259, 1261, 1263, 1265, 1267, 1269, 1271, 1273, 1275, 1277,
        1279, 1281, 1283, 1285, 1287, 1289, 1291, 1293, 1295, 1297, 1299, 1301, 1303, 1305, 1307,
        1309, 1311, 1313, 1315, 1317, 1319, 1321, 1323, 1325, 1327, 7681, 7683, 7685, 7687, 7689,
        7691, 7693, 7695, 7697, 7699, 7701, 7703, 7705, 7707, 7709, 7711, 7713, 7715, 7717, 7719,
        7721, 7723, 7725, 7727, 7729, 7731, 7733, 7735, 7737, 7739, 7741, 7743, 7745, 7747, 7749,
        7751, 7753, 7755, 7757, 7759, 7761, 7763, 7765, 7767, 7769, 7771, 7773, 7775, 7777, 7779,
        7781, 7783, 7785, 7787, 7789, 7791, 7793, 7795, 7797, 7799, 7801, 7803, 7805, 7807, 7809,
        7811, 7813, 7815, 7817, 7819, 7821, 7823, 7825, 7827, 7839, 7841, 7843, 7845, 7847, 7849,
        7851, 7853, 7855, 7857, 7859, 7861, 7863, 7865, 7867, 7869, 7871, 7873, 7875, 7877, 7879,
        7881, 7883, 7885, 7887, 7889, 7891, 7893, 7895, 7897, 7899, 7901, 7903, 7905, 7907, 7909,
        7911, 7913, 7915, 7917, 7919, 7921, 7923, 7925, 7927, 7929, 7931, 7933, 8126, 8458, 8467,
        8495, 8500, 8505, 8526, 8580, 11361, 11368, 11370, 11372, 11377, 11393, 11395, 11397, 11399,
        11401, 11403, 11405, 11407, 11409, 11411, 11413, 11415, 11417, 11419, 11421, 11423, 11425,
        11427, 11429, 11431, 11433, 11435, 11437, 11439, 11441, 11443, 11445, 11447, 11449, 11451,
        11453, 11455, 11457, 11459, 11461, 11463, 11465, 11467, 11469, 11471, 11473, 11475, 11477,
        11479, 11481, 11483, 11485, 11487, 11489, 11500, 11502, 11507, 11559, 11565, 42561, 42563,
        42565, 42567, 42569, 42571, 42573, 42575, 42577, 42579, 42581, 42583, 42585, 42587, 42589,
        42591, 42593, 42595, 42597, 42599, 42601, 42603, 42605, 42625, 42627, 42629, 42631, 42633,
        42635, 42637, 42639, 42641, 42643, 42645, 42647, 42649, 42651, 42787, 42789, 42791, 42793,
        42795, 42797, 42803, 42805, 42807, 42809, 42811, 42813, 42815, 42817, 42819, 42821, 42823,
        42825, 42827, 42829, 42831, 42833, 42835, 42837, 42839, 42841, 42843, 42845, 42847, 42849,
        42851, 42853, 42855, 42857, 42859, 42861, 42863, 42874, 42876, 42879, 42881, 42883, 42885,
        42887, 42892, 42894, 42897, 42903, 42905, 42907, 42909, 42911, 42913, 42915, 42917, 42919,
        42921, 42927, 42933, 42935, 42937, 42939, 42941, 42943, 42947, 43002, 119995, 120779, 748,
        750, 884, 890, 1369, 1600, 2042, 2074, 2084, 2088, 2417, 3654, 3782, 4348, 6103, 6211, 6823,
        7544, 8305, 8319, 11631, 11823, 12293, 12347, 40981, 42508, 42623, 42864, 42888, 43471,
        43494, 43632, 43741, 65392, 94179, 125259, 170, 186, 443, 660, 1749, 1791, 1808, 1969, 2365,
        2384, 2482, 2493, 2510, 2556, 2654, 2749, 2768, 2809, 2877, 2929, 2947, 2972, 3024, 3133,
        3200, 3261, 3294, 3389, 3406, 3517, 3716, 3749, 3773, 3840, 4159, 4193, 4238, 4696, 4800,
        6108, 6314, 7418, 12294, 12348, 12447, 12543, 13312, 19968, 42606, 42895, 42999, 43259,
        43642, 43697, 43712, 43714, 43762, 44032, 64285, 64318, 67592, 67644, 68096, 69415, 69956,
        70006, 70106, 70108, 70280, 70461, 70480, 70751, 70855, 71236, 71352, 71935, 72161, 72163,
        72192, 72250, 72272, 72349, 72768, 73030, 73112, 94032, 94208, 123214, 126500, 126503,
        126521, 126523, 126530, 126535, 126537, 126539, 126548, 126551, 126553, 126555, 126557,
        126559, 126564, 126590, 131072, 173824, 177984, 178208, 183984, 453, 456, 459, 498, 8124,
        8140, 8188, 256, 258, 260, 262, 264, 266, 268, 270, 272, 274, 276, 278, 280, 282, 284, 286,
        288, 290, 292, 294, 296, 298, 300, 302, 304, 306, 308, 310, 313, 315, 317, 319, 321, 323,
        325, 327, 330, 332, 334, 336, 338, 340, 342, 344, 346, 348, 350, 352, 354, 356, 358, 360,
        362, 364, 366, 368, 370, 372, 374, 379, 381, 388, 418, 420, 425, 428, 437, 444, 452, 455,
        458, 461, 463, 465, 467, 469, 471, 473, 475, 478, 480, 482, 484, 486, 488, 490, 492, 494,
        497, 500, 506, 508, 510, 512, 514, 516, 518, 520, 522, 524, 526, 528, 530, 532, 534, 536,
        538, 540, 542, 544, 546, 548, 550, 552, 554, 556, 558, 560, 562, 577, 584, 586, 588, 590,
        880, 882, 886, 895, 902, 908, 975, 984, 986, 988, 990, 992, 994, 996, 998, 1e3, 1002, 1004,
        1006, 1012, 1015, 1120, 1122, 1124, 1126, 1128, 1130, 1132, 1134, 1136, 1138, 1140, 1142,
        1144, 1146, 1148, 1150, 1152, 1162, 1164, 1166, 1168, 1170, 1172, 1174, 1176, 1178, 1180,
        1182, 1184, 1186, 1188, 1190, 1192, 1194, 1196, 1198, 1200, 1202, 1204, 1206, 1208, 1210,
        1212, 1214, 1219, 1221, 1223, 1225, 1227, 1229, 1232, 1234, 1236, 1238, 1240, 1242, 1244,
        1246, 1248, 1250, 1252, 1254, 1256, 1258, 1260, 1262, 1264, 1266, 1268, 1270, 1272, 1274,
        1276, 1278, 1280, 1282, 1284, 1286, 1288, 1290, 1292, 1294, 1296, 1298, 1300, 1302, 1304,
        1306, 1308, 1310, 1312, 1314, 1316, 1318, 1320, 1322, 1324, 1326, 4295, 4301, 7680, 7682,
        7684, 7686, 7688, 7690, 7692, 7694, 7696, 7698, 7700, 7702, 7704, 7706, 7708, 7710, 7712,
        7714, 7716, 7718, 7720, 7722, 7724, 7726, 7728, 7730, 7732, 7734, 7736, 7738, 7740, 7742,
        7744, 7746, 7748, 7750, 7752, 7754, 7756, 7758, 7760, 7762, 7764, 7766, 7768, 7770, 7772,
        7774, 7776, 7778, 7780, 7782, 7784, 7786, 7788, 7790, 7792, 7794, 7796, 7798, 7800, 7802,
        7804, 7806, 7808, 7810, 7812, 7814, 7816, 7818, 7820, 7822, 7824, 7826, 7828, 7838, 7840,
        7842, 7844, 7846, 7848, 7850, 7852, 7854, 7856, 7858, 7860, 7862, 7864, 7866, 7868, 7870,
        7872, 7874, 7876, 7878, 7880, 7882, 7884, 7886, 7888, 7890, 7892, 7894, 7896, 7898, 7900,
        7902, 7904, 7906, 7908, 7910, 7912, 7914, 7916, 7918, 7920, 7922, 7924, 7926, 7928, 7930,
        7932, 7934, 8025, 8027, 8029, 8031, 8450, 8455, 8469, 8484, 8486, 8488, 8517, 8579, 11360,
        11367, 11369, 11371, 11378, 11381, 11394, 11396, 11398, 11400, 11402, 11404, 11406, 11408,
        11410, 11412, 11414, 11416, 11418, 11420, 11422, 11424, 11426, 11428, 11430, 11432, 11434,
        11436, 11438, 11440, 11442, 11444, 11446, 11448, 11450, 11452, 11454, 11456, 11458, 11460,
        11462, 11464, 11466, 11468, 11470, 11472, 11474, 11476, 11478, 11480, 11482, 11484, 11486,
        11488, 11490, 11499, 11501, 11506, 42560, 42562, 42564, 42566, 42568, 42570, 42572, 42574,
        42576, 42578, 42580, 42582, 42584, 42586, 42588, 42590, 42592, 42594, 42596, 42598, 42600,
        42602, 42604, 42624, 42626, 42628, 42630, 42632, 42634, 42636, 42638, 42640, 42642, 42644,
        42646, 42648, 42650, 42786, 42788, 42790, 42792, 42794, 42796, 42798, 42802, 42804, 42806,
        42808, 42810, 42812, 42814, 42816, 42818, 42820, 42822, 42824, 42826, 42828, 42830, 42832,
        42834, 42836, 42838, 42840, 42842, 42844, 42846, 42848, 42850, 42852, 42854, 42856, 42858,
        42860, 42862, 42873, 42875, 42880, 42882, 42884, 42886, 42891, 42893, 42896, 42898, 42902,
        42904, 42906, 42908, 42910, 42912, 42914, 42916, 42918, 42920, 42934, 42936, 42938, 42940,
        42942, 42946, 119964, 119970, 120134, 120778, 12295, 66369, 66378, 36, 1423, 1547, 2555,
        2801, 3065, 3647, 6107, 43064, 65020, 65129, 65284, 123647, 126128, 95, 8276, 65343
      ])
    e(t, [
      [97, 122],
      [223, 246],
      [248, 255],
      [311, 312],
      [328, 329],
      [382, 384],
      [396, 397],
      [409, 411],
      [426, 427],
      [441, 442],
      [445, 447],
      [476, 477],
      [495, 496],
      [563, 569],
      [575, 576],
      [591, 659],
      [661, 687],
      [891, 893],
      [940, 974],
      [976, 977],
      [981, 983],
      [1007, 1011],
      [1019, 1020],
      [1072, 1119],
      [1230, 1231],
      [1376, 1416],
      [4304, 4346],
      [4349, 4351],
      [5112, 5117],
      [7296, 7304],
      [7424, 7467],
      [7531, 7543],
      [7545, 7578],
      [7829, 7837],
      [7935, 7943],
      [7952, 7957],
      [7968, 7975],
      [7984, 7991],
      [8e3, 8005],
      [8016, 8023],
      [8032, 8039],
      [8048, 8061],
      [8064, 8071],
      [8080, 8087],
      [8096, 8103],
      [8112, 8116],
      [8118, 8119],
      [8130, 8132],
      [8134, 8135],
      [8144, 8147],
      [8150, 8151],
      [8160, 8167],
      [8178, 8180],
      [8182, 8183],
      [8462, 8463],
      [8508, 8509],
      [8518, 8521],
      [11312, 11358],
      [11365, 11366],
      [11379, 11380],
      [11382, 11387],
      [11491, 11492],
      [11520, 11557],
      [42799, 42801],
      [42865, 42872],
      [42899, 42901],
      [43824, 43866],
      [43872, 43879],
      [43888, 43967],
      [64256, 64262],
      [64275, 64279],
      [65345, 65370],
      [66600, 66639],
      [66776, 66811],
      [68800, 68850],
      [71872, 71903],
      [93792, 93823],
      [119834, 119859],
      [119886, 119892],
      [119894, 119911],
      [119938, 119963],
      [119990, 119993],
      [119997, 120003],
      [120005, 120015],
      [120042, 120067],
      [120094, 120119],
      [120146, 120171],
      [120198, 120223],
      [120250, 120275],
      [120302, 120327],
      [120354, 120379],
      [120406, 120431],
      [120458, 120485],
      [120514, 120538],
      [120540, 120545],
      [120572, 120596],
      [120598, 120603],
      [120630, 120654],
      [120656, 120661],
      [120688, 120712],
      [120714, 120719],
      [120746, 120770],
      [120772, 120777],
      [125218, 125251],
      [688, 705],
      [710, 721],
      [736, 740],
      [1765, 1766],
      [2036, 2037],
      [7288, 7293],
      [7468, 7530],
      [7579, 7615],
      [8336, 8348],
      [11388, 11389],
      [12337, 12341],
      [12445, 12446],
      [12540, 12542],
      [42232, 42237],
      [42652, 42653],
      [42775, 42783],
      [43e3, 43001],
      [43763, 43764],
      [43868, 43871],
      [65438, 65439],
      [92992, 92995],
      [94099, 94111],
      [94176, 94177],
      [123191, 123197],
      [13313, 19893],
      [19969, 40943],
      [44033, 55203],
      [94209, 100343],
      [131073, 173782],
      [173825, 177972],
      [177985, 178205],
      [178209, 183969],
      [183985, 191456],
      [448, 451],
      [1488, 1514],
      [1519, 1522],
      [1568, 1599],
      [1601, 1610],
      [1646, 1647],
      [1649, 1747],
      [1774, 1775],
      [1786, 1788],
      [1810, 1839],
      [1869, 1957],
      [1994, 2026],
      [2048, 2069],
      [2112, 2136],
      [2144, 2154],
      [2208, 2228],
      [2230, 2237],
      [2308, 2361],
      [2392, 2401],
      [2418, 2432],
      [2437, 2444],
      [2447, 2448],
      [2451, 2472],
      [2474, 2480],
      [2486, 2489],
      [2524, 2525],
      [2527, 2529],
      [2544, 2545],
      [2565, 2570],
      [2575, 2576],
      [2579, 2600],
      [2602, 2608],
      [2610, 2611],
      [2613, 2614],
      [2616, 2617],
      [2649, 2652],
      [2674, 2676],
      [2693, 2701],
      [2703, 2705],
      [2707, 2728],
      [2730, 2736],
      [2738, 2739],
      [2741, 2745],
      [2784, 2785],
      [2821, 2828],
      [2831, 2832],
      [2835, 2856],
      [2858, 2864],
      [2866, 2867],
      [2869, 2873],
      [2908, 2909],
      [2911, 2913],
      [2949, 2954],
      [2958, 2960],
      [2962, 2965],
      [2969, 2970],
      [2974, 2975],
      [2979, 2980],
      [2984, 2986],
      [2990, 3001],
      [3077, 3084],
      [3086, 3088],
      [3090, 3112],
      [3114, 3129],
      [3160, 3162],
      [3168, 3169],
      [3205, 3212],
      [3214, 3216],
      [3218, 3240],
      [3242, 3251],
      [3253, 3257],
      [3296, 3297],
      [3313, 3314],
      [3333, 3340],
      [3342, 3344],
      [3346, 3386],
      [3412, 3414],
      [3423, 3425],
      [3450, 3455],
      [3461, 3478],
      [3482, 3505],
      [3507, 3515],
      [3520, 3526],
      [3585, 3632],
      [3634, 3635],
      [3648, 3653],
      [3713, 3714],
      [3718, 3722],
      [3724, 3747],
      [3751, 3760],
      [3762, 3763],
      [3776, 3780],
      [3804, 3807],
      [3904, 3911],
      [3913, 3948],
      [3976, 3980],
      [4096, 4138],
      [4176, 4181],
      [4186, 4189],
      [4197, 4198],
      [4206, 4208],
      [4213, 4225],
      [4352, 4680],
      [4682, 4685],
      [4688, 4694],
      [4698, 4701],
      [4704, 4744],
      [4746, 4749],
      [4752, 4784],
      [4786, 4789],
      [4792, 4798],
      [4802, 4805],
      [4808, 4822],
      [4824, 4880],
      [4882, 4885],
      [4888, 4954],
      [4992, 5007],
      [5121, 5740],
      [5743, 5759],
      [5761, 5786],
      [5792, 5866],
      [5873, 5880],
      [5888, 5900],
      [5902, 5905],
      [5920, 5937],
      [5952, 5969],
      [5984, 5996],
      [5998, 6e3],
      [6016, 6067],
      [6176, 6210],
      [6212, 6264],
      [6272, 6276],
      [6279, 6312],
      [6320, 6389],
      [6400, 6430],
      [6480, 6509],
      [6512, 6516],
      [6528, 6571],
      [6576, 6601],
      [6656, 6678],
      [6688, 6740],
      [6917, 6963],
      [6981, 6987],
      [7043, 7072],
      [7086, 7087],
      [7098, 7141],
      [7168, 7203],
      [7245, 7247],
      [7258, 7287],
      [7401, 7404],
      [7406, 7411],
      [7413, 7414],
      [8501, 8504],
      [11568, 11623],
      [11648, 11670],
      [11680, 11686],
      [11688, 11694],
      [11696, 11702],
      [11704, 11710],
      [11712, 11718],
      [11720, 11726],
      [11728, 11734],
      [11736, 11742],
      [12353, 12438],
      [12449, 12538],
      [12549, 12591],
      [12593, 12686],
      [12704, 12730],
      [12784, 12799],
      [40960, 40980],
      [40982, 42124],
      [42192, 42231],
      [42240, 42507],
      [42512, 42527],
      [42538, 42539],
      [42656, 42725],
      [43003, 43009],
      [43011, 43013],
      [43015, 43018],
      [43020, 43042],
      [43072, 43123],
      [43138, 43187],
      [43250, 43255],
      [43261, 43262],
      [43274, 43301],
      [43312, 43334],
      [43360, 43388],
      [43396, 43442],
      [43488, 43492],
      [43495, 43503],
      [43514, 43518],
      [43520, 43560],
      [43584, 43586],
      [43588, 43595],
      [43616, 43631],
      [43633, 43638],
      [43646, 43695],
      [43701, 43702],
      [43705, 43709],
      [43739, 43740],
      [43744, 43754],
      [43777, 43782],
      [43785, 43790],
      [43793, 43798],
      [43808, 43814],
      [43816, 43822],
      [43968, 44002],
      [55216, 55238],
      [55243, 55291],
      [63744, 64109],
      [64112, 64217],
      [64287, 64296],
      [64298, 64310],
      [64312, 64316],
      [64320, 64321],
      [64323, 64324],
      [64326, 64433],
      [64467, 64829],
      [64848, 64911],
      [64914, 64967],
      [65008, 65019],
      [65136, 65140],
      [65142, 65276],
      [65382, 65391],
      [65393, 65437],
      [65440, 65470],
      [65474, 65479],
      [65482, 65487],
      [65490, 65495],
      [65498, 65500],
      [65536, 65547],
      [65549, 65574],
      [65576, 65594],
      [65596, 65597],
      [65599, 65613],
      [65616, 65629],
      [65664, 65786],
      [66176, 66204],
      [66208, 66256],
      [66304, 66335],
      [66349, 66368],
      [66370, 66377],
      [66384, 66421],
      [66432, 66461],
      [66464, 66499],
      [66504, 66511],
      [66640, 66717],
      [66816, 66855],
      [66864, 66915],
      [67072, 67382],
      [67392, 67413],
      [67424, 67431],
      [67584, 67589],
      [67594, 67637],
      [67639, 67640],
      [67647, 67669],
      [67680, 67702],
      [67712, 67742],
      [67808, 67826],
      [67828, 67829],
      [67840, 67861],
      [67872, 67897],
      [67968, 68023],
      [68030, 68031],
      [68112, 68115],
      [68117, 68119],
      [68121, 68149],
      [68192, 68220],
      [68224, 68252],
      [68288, 68295],
      [68297, 68324],
      [68352, 68405],
      [68416, 68437],
      [68448, 68466],
      [68480, 68497],
      [68608, 68680],
      [68864, 68899],
      [69376, 69404],
      [69424, 69445],
      [69600, 69622],
      [69635, 69687],
      [69763, 69807],
      [69840, 69864],
      [69891, 69926],
      [69968, 70002],
      [70019, 70066],
      [70081, 70084],
      [70144, 70161],
      [70163, 70187],
      [70272, 70278],
      [70282, 70285],
      [70287, 70301],
      [70303, 70312],
      [70320, 70366],
      [70405, 70412],
      [70415, 70416],
      [70419, 70440],
      [70442, 70448],
      [70450, 70451],
      [70453, 70457],
      [70493, 70497],
      [70656, 70708],
      [70727, 70730],
      [70784, 70831],
      [70852, 70853],
      [71040, 71086],
      [71128, 71131],
      [71168, 71215],
      [71296, 71338],
      [71424, 71450],
      [71680, 71723],
      [72096, 72103],
      [72106, 72144],
      [72203, 72242],
      [72284, 72329],
      [72384, 72440],
      [72704, 72712],
      [72714, 72750],
      [72818, 72847],
      [72960, 72966],
      [72968, 72969],
      [72971, 73008],
      [73056, 73061],
      [73063, 73064],
      [73066, 73097],
      [73440, 73458],
      [73728, 74649],
      [74880, 75075],
      [77824, 78894],
      [82944, 83526],
      [92160, 92728],
      [92736, 92766],
      [92880, 92909],
      [92928, 92975],
      [93027, 93047],
      [93053, 93071],
      [93952, 94026],
      [100352, 101106],
      [110592, 110878],
      [110928, 110930],
      [110948, 110951],
      [110960, 111355],
      [113664, 113770],
      [113776, 113788],
      [113792, 113800],
      [113808, 113817],
      [123136, 123180],
      [123584, 123627],
      [124928, 125124],
      [126464, 126467],
      [126469, 126495],
      [126497, 126498],
      [126505, 126514],
      [126516, 126519],
      [126541, 126543],
      [126545, 126546],
      [126561, 126562],
      [126567, 126570],
      [126572, 126578],
      [126580, 126583],
      [126585, 126588],
      [126592, 126601],
      [126603, 126619],
      [126625, 126627],
      [126629, 126633],
      [126635, 126651],
      [194560, 195101],
      [8072, 8079],
      [8088, 8095],
      [8104, 8111],
      [65, 90],
      [192, 214],
      [216, 222],
      [376, 377],
      [385, 386],
      [390, 391],
      [393, 395],
      [398, 401],
      [403, 404],
      [406, 408],
      [412, 413],
      [415, 416],
      [422, 423],
      [430, 431],
      [433, 435],
      [439, 440],
      [502, 504],
      [570, 571],
      [573, 574],
      [579, 582],
      [904, 906],
      [910, 911],
      [913, 929],
      [931, 939],
      [978, 980],
      [1017, 1018],
      [1021, 1071],
      [1216, 1217],
      [1329, 1366],
      [4256, 4293],
      [5024, 5109],
      [7312, 7354],
      [7357, 7359],
      [7944, 7951],
      [7960, 7965],
      [7976, 7983],
      [7992, 7999],
      [8008, 8013],
      [8040, 8047],
      [8120, 8123],
      [8136, 8139],
      [8152, 8155],
      [8168, 8172],
      [8184, 8187],
      [8459, 8461],
      [8464, 8466],
      [8473, 8477],
      [8490, 8493],
      [8496, 8499],
      [8510, 8511],
      [11264, 11310],
      [11362, 11364],
      [11373, 11376],
      [11390, 11392],
      [42877, 42878],
      [42922, 42926],
      [42928, 42932],
      [42948, 42950],
      [65313, 65338],
      [66560, 66599],
      [66736, 66771],
      [68736, 68786],
      [71840, 71871],
      [93760, 93791],
      [119808, 119833],
      [119860, 119885],
      [119912, 119937],
      [119966, 119967],
      [119973, 119974],
      [119977, 119980],
      [119982, 119989],
      [120016, 120041],
      [120068, 120069],
      [120071, 120074],
      [120077, 120084],
      [120086, 120092],
      [120120, 120121],
      [120123, 120126],
      [120128, 120132],
      [120138, 120144],
      [120172, 120197],
      [120224, 120249],
      [120276, 120301],
      [120328, 120353],
      [120380, 120405],
      [120432, 120457],
      [120488, 120512],
      [120546, 120570],
      [120604, 120628],
      [120662, 120686],
      [120720, 120744],
      [125184, 125217],
      [5870, 5872],
      [8544, 8578],
      [8581, 8584],
      [12321, 12329],
      [12344, 12346],
      [42726, 42735],
      [65856, 65908],
      [66513, 66517],
      [74752, 74862],
      [162, 165],
      [2046, 2047],
      [2546, 2547],
      [8352, 8383],
      [65504, 65505],
      [65509, 65510],
      [73693, 73696],
      [8255, 8256],
      [65075, 65076],
      [65101, 65103]
    ])
    const r = new Set([
      1471, 1479, 1648, 1809, 2045, 2362, 2364, 2381, 2433, 2492, 2509, 2558, 2620, 2641, 2677,
      2748, 2765, 2817, 2876, 2879, 2893, 2902, 2946, 3008, 3021, 3072, 3076, 3201, 3260, 3263,
      3270, 3405, 3530, 3542, 3633, 3761, 3893, 3895, 3897, 4038, 4226, 4237, 4253, 6086, 6109,
      6313, 6450, 6683, 6742, 6752, 6754, 6783, 6964, 6972, 6978, 7142, 7149, 7405, 7412, 8417,
      11647, 42607, 43010, 43014, 43019, 43263, 43443, 43493, 43587, 43596, 43644, 43696, 43713,
      43766, 44005, 44008, 44013, 64286, 66045, 66272, 68159, 69633, 70003, 70196, 70206, 70367,
      70464, 70726, 70750, 70842, 71229, 71339, 71341, 71351, 72160, 72263, 72767, 73018, 73031,
      73109, 73111, 94031, 121461, 121476, 173, 1564, 1757, 1807, 2274, 6158, 65279, 69821, 69837,
      917505
    ])
    e(r, [
      [768, 879],
      [1155, 1159],
      [1425, 1469],
      [1473, 1474],
      [1476, 1477],
      [1552, 1562],
      [1611, 1631],
      [1750, 1756],
      [1759, 1764],
      [1767, 1768],
      [1770, 1773],
      [1840, 1866],
      [1958, 1968],
      [2027, 2035],
      [2070, 2073],
      [2075, 2083],
      [2085, 2087],
      [2089, 2093],
      [2137, 2139],
      [2259, 2273],
      [2275, 2306],
      [2369, 2376],
      [2385, 2391],
      [2402, 2403],
      [2497, 2500],
      [2530, 2531],
      [2561, 2562],
      [2625, 2626],
      [2631, 2632],
      [2635, 2637],
      [2672, 2673],
      [2689, 2690],
      [2753, 2757],
      [2759, 2760],
      [2786, 2787],
      [2810, 2815],
      [2881, 2884],
      [2914, 2915],
      [3134, 3136],
      [3142, 3144],
      [3146, 3149],
      [3157, 3158],
      [3170, 3171],
      [3276, 3277],
      [3298, 3299],
      [3328, 3329],
      [3387, 3388],
      [3393, 3396],
      [3426, 3427],
      [3538, 3540],
      [3636, 3642],
      [3655, 3662],
      [3764, 3772],
      [3784, 3789],
      [3864, 3865],
      [3953, 3966],
      [3968, 3972],
      [3974, 3975],
      [3981, 3991],
      [3993, 4028],
      [4141, 4144],
      [4146, 4151],
      [4153, 4154],
      [4157, 4158],
      [4184, 4185],
      [4190, 4192],
      [4209, 4212],
      [4229, 4230],
      [4957, 4959],
      [5906, 5908],
      [5938, 5940],
      [5970, 5971],
      [6002, 6003],
      [6068, 6069],
      [6071, 6077],
      [6089, 6099],
      [6155, 6157],
      [6277, 6278],
      [6432, 6434],
      [6439, 6440],
      [6457, 6459],
      [6679, 6680],
      [6744, 6750],
      [6757, 6764],
      [6771, 6780],
      [6832, 6845],
      [6912, 6915],
      [6966, 6970],
      [7019, 7027],
      [7040, 7041],
      [7074, 7077],
      [7080, 7081],
      [7083, 7085],
      [7144, 7145],
      [7151, 7153],
      [7212, 7219],
      [7222, 7223],
      [7376, 7378],
      [7380, 7392],
      [7394, 7400],
      [7416, 7417],
      [7616, 7673],
      [7675, 7679],
      [8400, 8412],
      [8421, 8432],
      [11503, 11505],
      [11744, 11775],
      [12330, 12333],
      [12441, 12442],
      [42612, 42621],
      [42654, 42655],
      [42736, 42737],
      [43045, 43046],
      [43204, 43205],
      [43232, 43249],
      [43302, 43309],
      [43335, 43345],
      [43392, 43394],
      [43446, 43449],
      [43452, 43453],
      [43561, 43566],
      [43569, 43570],
      [43573, 43574],
      [43698, 43700],
      [43703, 43704],
      [43710, 43711],
      [43756, 43757],
      [65024, 65039],
      [65056, 65071],
      [66422, 66426],
      [68097, 68099],
      [68101, 68102],
      [68108, 68111],
      [68152, 68154],
      [68325, 68326],
      [68900, 68903],
      [69446, 69456],
      [69688, 69702],
      [69759, 69761],
      [69811, 69814],
      [69817, 69818],
      [69888, 69890],
      [69927, 69931],
      [69933, 69940],
      [70016, 70017],
      [70070, 70078],
      [70089, 70092],
      [70191, 70193],
      [70198, 70199],
      [70371, 70378],
      [70400, 70401],
      [70459, 70460],
      [70502, 70508],
      [70512, 70516],
      [70712, 70719],
      [70722, 70724],
      [70835, 70840],
      [70847, 70848],
      [70850, 70851],
      [71090, 71093],
      [71100, 71101],
      [71103, 71104],
      [71132, 71133],
      [71219, 71226],
      [71231, 71232],
      [71344, 71349],
      [71453, 71455],
      [71458, 71461],
      [71463, 71467],
      [71727, 71735],
      [71737, 71738],
      [72148, 72151],
      [72154, 72155],
      [72193, 72202],
      [72243, 72248],
      [72251, 72254],
      [72273, 72278],
      [72281, 72283],
      [72330, 72342],
      [72344, 72345],
      [72752, 72758],
      [72760, 72765],
      [72850, 72871],
      [72874, 72880],
      [72882, 72883],
      [72885, 72886],
      [73009, 73014],
      [73020, 73021],
      [73023, 73029],
      [73104, 73105],
      [73459, 73460],
      [92912, 92916],
      [92976, 92982],
      [94095, 94098],
      [113821, 113822],
      [119143, 119145],
      [119163, 119170],
      [119173, 119179],
      [119210, 119213],
      [119362, 119364],
      [121344, 121398],
      [121403, 121452],
      [121499, 121503],
      [121505, 121519],
      [122880, 122886],
      [122888, 122904],
      [122907, 122913],
      [122915, 122916],
      [122918, 122922],
      [123184, 123190],
      [123628, 123631],
      [125136, 125142],
      [125252, 125258],
      [917760, 917999],
      [1536, 1541],
      [8203, 8207],
      [8234, 8238],
      [8288, 8292],
      [8294, 8303],
      [65529, 65531],
      [78896, 78904],
      [113824, 113827],
      [119155, 119162],
      [917536, 917631]
    ]),
      e(r, [
        [0, 8],
        [14, 27],
        [127, 159],
        [768, 879],
        [6832, 6911],
        [7616, 7679],
        [8400, 8447],
        [65056, 65071],
        [48, 57]
      ])
    const o = new Set(
      (function* () {
        yield* t, yield* r
      })()
    )
    return (Zi = { firstIdentChar: t, restIdentChar: o }), Zi
  }
  const { createToken: _s, Lexer: Ht } = Ot,
    Rh = gh
  let Wr
  const Qi = {}
  try {
    Wr = Lh()
  } catch {
    throw Error(
      'unicodesets.js file could not be found. Did you try to run the command: yarn run build ?'
    )
  }
  function Is(e) {
    let t = e
    return (
      Object.keys(Qi).forEach(n => {
        const r = Qi[n],
          i = new RegExp(`{{${n}}}`, 'g')
        t = t.replace(i, r)
      }),
      t
    )
  }
  function Qe(e, t) {
    Qi[e] = Is(t)
  }
  function Ln(e, t) {
    const n = Is(e)
    return new RegExp(n, t)
  }
  Qe('Digits', '[0-9]([0-9_]*[0-9])?'),
    Qe('ExponentPart', '[eE][+-]?{{Digits}}'),
    Qe('HexDigit', '[0-9a-fA-F]'),
    Qe('HexDigits', "{{HexDigit}}(({{HexDigit}}|'_')*{{HexDigit}})?"),
    Qe('FloatTypeSuffix', '[fFdD]'),
    Qe('LineTerminator', '(\\x0A|(\\x0D(\\x0A)?))'),
    Qe('UnicodeMarker', 'uu*'),
    Qe('UnicodeEscape', '\\\\{{UnicodeMarker}}{{HexDigit}}{4}'),
    Qe('RawInputCharacter', '\\\\{{UnicodeMarker}}[0-9a-fA-F]{4}'),
    Qe('UnicodeInputCharacter', '({{UnicodeEscape}}|{{RawInputCharacter}})'),
    Qe('OctalDigit', '[0-7]'),
    Qe('ZeroToThree', '[0-3]'),
    Qe('OctalEscape', '\\\\({{OctalDigit}}|{{ZeroToThree}}?{{OctalDigit}}{2})'),
    Qe('EscapeSequence', `\\\\[bstnfr"'\\\\]|{{OctalEscape}}`),
    Qe('StringCharacter', '(?:(?:{{EscapeSequence}})|{{UnicodeInputCharacter}})')
  function Uh(e, t) {
    let n = t,
      r = e.codePointAt(n)
    for (
      Wr.firstIdentChar.has(r) && (n++, r > 65535 && n++, (r = e.codePointAt(n)));
      Wr.restIdentChar.has(r);

    )
      n++, r > 65535 && n++, (r = e.codePointAt(n))
    return n === t ? null : [e.substring(t, n)]
  }
  const mn = _s({
      name: 'Identifier',
      pattern: { exec: Uh },
      line_breaks: !1,
      start_chars_hint: Array.from(Wr.firstIdentChar, e => String.fromCharCode(e))
    }),
    $i = [],
    ea = {}
  function k(e) {
    e.label ||
      (typeof e.pattern == 'string'
        ? (e.label = `'${e.pattern}'`)
        : e.pattern instanceof RegExp && (e.label = `'${e.name}'`))
    const t = _s(e)
    return $i.push(t), (ea[e.name] = t), t
  }
  function Yt(e) {
    return (e.longer_alt = mn), k(e)
  }
  const Oh = k({ name: 'RestrictedKeyword', pattern: Ht.NA }),
    Bs = k({ name: 'Keyword', pattern: Ht.NA }),
    Dt = k({ name: 'AssignmentOperator', pattern: Ht.NA }),
    je = k({ name: 'BinaryOperator', pattern: Ht.NA }),
    Rn = k({ name: 'UnaryPrefixOperator', pattern: Ht.NA }),
    Jr = k({ name: 'UnaryPrefixOperatorNotPlusMinus', pattern: Ht.NA }),
    Fs = k({ name: 'UnarySuffixOperator', pattern: Ht.NA }),
    Et = k({ name: 'Separators', pattern: Ht.NA })
  k({ name: 'WhiteSpace', pattern: Ln('[\\x09\\x20\\x0C]|{{LineTerminator}}'), group: Ht.SKIPPED }),
    k({ name: 'LineComment', pattern: /\/\/[^\n\r]*/, group: 'comments' }),
    k({ name: 'TraditionalComment', pattern: /\/\*([^*]|\*(?!\/))*\*\//, group: 'comments' }),
    k({ name: 'BinaryLiteral', pattern: /0[bB][01]([01_]*[01])?[lL]?/ }),
    k({
      name: 'FloatLiteral',
      pattern: Ln(
        '{{Digits}}\\.({{Digits}})?({{ExponentPart}})?({{FloatTypeSuffix}})?|\\.{{Digits}}({{ExponentPart}})?({{FloatTypeSuffix}})?|{{Digits}}{{ExponentPart}}({{FloatTypeSuffix}})?|{{Digits}}({{ExponentPart}})?{{FloatTypeSuffix}}'
      )
    }),
    k({ name: 'OctalLiteral', pattern: /0_*[0-7]([0-7_]*[0-7])?[lL]?/ }),
    k({
      name: 'HexFloatLiteral',
      pattern: Ln(
        '0[xX]({{HexDigits}}\\.?|({{HexDigits}})?\\.{{HexDigits}})[pP][+-]?{{Digits}}[fFdD]?'
      )
    }),
    k({ name: 'HexLiteral', pattern: /0[xX][0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?[lL]?/ }),
    k({ name: 'DecimalLiteral', pattern: Ln('(0|[1-9](_+{{Digits}}|({{Digits}})?))[lL]?') }),
    k({
      name: 'CharLiteral',
      pattern: Ln("'(?:[^\\\\']|(?:(?:{{EscapeSequence}})|{{UnicodeInputCharacter}}))'")
    }),
    k({ name: 'TextBlock', pattern: /"""\s*\n(\\"|\s|.)*?"""/ }),
    k({ name: 'StringLiteral', pattern: Ln('"(?:[^\\\\"]|{{StringCharacter}})*"') }),
    Ms([
      'open',
      'module',
      'requires',
      'transitive',
      'exports',
      'opens',
      'to',
      'uses',
      'provides',
      'with',
      'sealed',
      'non-sealed',
      'permits'
    ]).forEach(e => {
      Yt({ name: e[0].toUpperCase() + Rh(e.substr(1)), pattern: e, categories: [mn, Oh] })
    }),
    Ms([
      'abstract',
      'continue',
      'for',
      'new',
      'switch',
      'assert',
      'default',
      'if',
      'package',
      'synchronized',
      'boolean',
      'do',
      'goto',
      'private',
      'this',
      'break',
      'double',
      'implements',
      'protected',
      'throw',
      'byte',
      'else',
      'import',
      'public',
      'throws',
      'case',
      'enum',
      'return',
      'transient',
      'catch',
      'extends',
      'int',
      'short',
      'try',
      'char',
      'final',
      'interface',
      'static',
      'void',
      'class',
      'finally',
      'long',
      'strictfp',
      'volatile',
      'const',
      'float',
      'native',
      'super',
      'while',
      ['_', 'underscore']
    ]).forEach(e => {
      const t = Array.isArray(e),
        n = t ? e[1] : e,
        r = t ? e[0] : e,
        i = { name: n[0].toUpperCase() + n.substr(1), pattern: r, categories: Bs }
      t && (i.label = `'${n}'`), Yt(i)
    }),
    Yt({ name: 'Instanceof', pattern: 'instanceof', categories: [Bs, je] }),
    Yt({ name: 'Var', pattern: 'var', categories: mn }),
    Yt({ name: 'Yield', pattern: 'yield', categories: mn }),
    Yt({ name: 'Record', pattern: 'record', categories: mn }),
    Yt({ name: 'True', pattern: 'true' }),
    Yt({ name: 'False', pattern: 'false' }),
    Yt({ name: 'Null', pattern: 'null' }),
    k({ name: 'At', pattern: '@', categories: [Et] }),
    k({ name: 'Arrow', pattern: '->' }),
    k({ name: 'DotDotDot', pattern: '...', categories: [Et] }),
    k({ name: 'Dot', pattern: '.', categories: [Et] }),
    k({ name: 'Comma', pattern: ',', categories: [Et] }),
    k({ name: 'Semicolon', pattern: ';', categories: [Et] }),
    k({ name: 'ColonColon', pattern: '::', categories: [Et] }),
    k({ name: 'Colon', pattern: ':' }),
    k({ name: 'QuestionMark', pattern: '?' }),
    k({ name: 'LBrace', pattern: '(', categories: [Et] }),
    k({ name: 'RBrace', pattern: ')', categories: [Et] }),
    k({ name: 'LCurly', pattern: '{', categories: [Et] }),
    k({ name: 'RCurly', pattern: '}', categories: [Et] }),
    k({ name: 'LSquare', pattern: '[', categories: [Et] }),
    k({ name: 'RSquare', pattern: ']', categories: [Et] }),
    k({ name: 'MinusMinus', pattern: '--', categories: [Rn, Fs, Jr] }),
    k({ name: 'PlusPlus', pattern: '++', categories: [Rn, Fs, Jr] }),
    k({ name: 'Complement', pattern: '~', categories: [Rn, Jr] }),
    k({ name: 'LessEquals', pattern: '<=', categories: [je] }),
    k({ name: 'LessLessEquals', pattern: '<<=', categories: [Dt] }),
    k({ name: 'Less', pattern: '<', categories: [je] }),
    k({ name: 'GreaterEquals', pattern: '>=', categories: [je] }),
    k({ name: 'GreaterGreaterEquals', pattern: '>>=', categories: [Dt] }),
    k({ name: 'GreaterGreaterGreaterEquals', pattern: '>>>=', categories: [Dt] }),
    k({ name: 'Greater', pattern: '>', categories: [je] }),
    k({ name: 'EqualsEquals', pattern: '==', categories: [je] }),
    k({ name: 'Equals', pattern: '=', categories: [je, Dt] }),
    k({ name: 'MinusEquals', pattern: '-=', categories: [Dt] }),
    k({ name: 'Minus', pattern: '-', categories: [je, Rn] }),
    k({ name: 'PlusEquals', pattern: '+=', categories: [Dt] }),
    k({ name: 'Plus', pattern: '+', categories: [je, Rn] }),
    k({ name: 'AndAnd', pattern: '&&', categories: [je] }),
    k({ name: 'AndEquals', pattern: '&=', categories: [Dt] }),
    k({ name: 'And', pattern: '&', categories: [je] }),
    k({ name: 'XorEquals', pattern: '^=', categories: [Dt] }),
    k({ name: 'Xor', pattern: '^', categories: [je] }),
    k({ name: 'NotEquals', pattern: '!=', categories: [je] }),
    k({ name: 'OrOr', pattern: '||', categories: [je] }),
    k({ name: 'OrEquals', pattern: '|=', categories: [Dt] }),
    k({ name: 'Or', pattern: '|', categories: [je] }),
    k({ name: 'MultiplyEquals', pattern: '*=', categories: [Dt] }),
    k({ name: 'Star', pattern: '*', categories: [je] }),
    k({ name: 'DivideEquals', pattern: '/=', categories: [Dt] }),
    k({ name: 'Divide', pattern: '/', categories: [je] }),
    k({ name: 'ModuloEquals', pattern: '%=', categories: [Dt] }),
    k({ name: 'Modulo', pattern: '%', categories: [je] }),
    k({ name: 'Not', pattern: '!', categories: [Rn, Jr] }),
    $i.push(mn),
    (ea.Identifier = mn)
  function Ms(e) {
    return e.sort((t, n) => n.length - t.length)
  }
  var bs = { allTokens: $i, tokens: ea }
  function Nh() {
    return (
      (process && process.env && process.env['prettier-java-development-mode'] === 'enabled') === !1
    )
  }
  var Ps = { getSkipValidations: Nh }
  globalThis.process = globalThis.process
  const _h = Ot,
    { allTokens: Ih } = bs,
    { getSkipValidations: Bh } = Ps,
    Fh = _h.Lexer
  var Mh = new Fh(Ih, { ensureOptimizations: !0, skipValidations: Bh() })
  function bh(e, t) {
    e.RULE('literal', () => {
      e.OR([
        { ALT: () => e.SUBRULE(e.integerLiteral) },
        { ALT: () => e.SUBRULE(e.floatingPointLiteral) },
        { ALT: () => e.SUBRULE(e.booleanLiteral) },
        { ALT: () => e.CONSUME(t.CharLiteral) },
        { ALT: () => e.CONSUME(t.TextBlock) },
        { ALT: () => e.CONSUME(t.StringLiteral) },
        { ALT: () => e.CONSUME(t.Null) }
      ])
    }),
      e.RULE('integerLiteral', () => {
        e.OR([
          { ALT: () => e.CONSUME(t.DecimalLiteral) },
          { ALT: () => e.CONSUME(t.HexLiteral) },
          { ALT: () => e.CONSUME(t.OctalLiteral) },
          { ALT: () => e.CONSUME(t.BinaryLiteral) }
        ])
      }),
      e.RULE('floatingPointLiteral', () => {
        e.OR([
          { ALT: () => e.CONSUME(t.FloatLiteral) },
          { ALT: () => e.CONSUME(t.HexFloatLiteral) }
        ])
      }),
      e.RULE('booleanLiteral', () => {
        e.OR([{ ALT: () => e.CONSUME(t.True) }, { ALT: () => e.CONSUME(t.False) }])
      })
  }
  var Ph = { defineRules: bh }
  const { tokenMatcher: kh } = Ot
  function xh(e, t) {
    e.RULE('primitiveType', () => {
      e.MANY(() => {
        e.SUBRULE(e.annotation)
      }),
        e.OR([{ ALT: () => e.SUBRULE(e.numericType) }, { ALT: () => e.CONSUME(t.Boolean) }])
    }),
      e.RULE('numericType', () => {
        e.OR([
          { ALT: () => e.SUBRULE(e.integralType) },
          { ALT: () => e.SUBRULE(e.floatingPointType) }
        ])
      }),
      e.RULE('integralType', () => {
        e.OR([
          { ALT: () => e.CONSUME(t.Byte) },
          { ALT: () => e.CONSUME(t.Short) },
          { ALT: () => e.CONSUME(t.Int) },
          { ALT: () => e.CONSUME(t.Long) },
          { ALT: () => e.CONSUME(t.Char) }
        ])
      }),
      e.RULE('floatingPointType', () => {
        e.OR([{ ALT: () => e.CONSUME(t.Float) }, { ALT: () => e.CONSUME(t.Double) }])
      }),
      e.RULE('referenceType', () => {
        e.MANY(() => {
          e.SUBRULE(e.annotation)
        }),
          e.OR({
            DEF: [
              {
                ALT: () => {
                  e.SUBRULE(e.primitiveType), e.SUBRULE(e.dims)
                }
              },
              {
                ALT: () => {
                  e.SUBRULE(e.classOrInterfaceType),
                    e.OPTION(() => {
                      e.SUBRULE2(e.dims)
                    })
                }
              }
            ],
            IGNORE_AMBIGUITIES: !0
          })
      }),
      e.RULE('classOrInterfaceType', () => {
        e.SUBRULE(e.classType)
      }),
      e.RULE('classType', () => {
        e.MANY(() => {
          e.SUBRULE(e.annotation)
        }),
          e.CONSUME(t.Identifier),
          e.OPTION(() => {
            e.SUBRULE(e.typeArguments)
          }),
          e.MANY2(() => {
            e.CONSUME(t.Dot),
              e.MANY3(() => {
                e.SUBRULE2(e.annotation)
              }),
              e.CONSUME2(t.Identifier),
              e.OPTION2({
                GATE: () => kh(e.LA(2).tokenType, t.Greater) === !1,
                DEF: () => {
                  e.SUBRULE2(e.typeArguments)
                }
              })
          })
      }),
      e.RULE('interfaceType', () => {
        e.SUBRULE(e.classType)
      }),
      e.RULE('typeVariable', () => {
        e.MANY(() => {
          e.SUBRULE(e.annotation)
        }),
          e.CONSUME(t.Identifier)
      }),
      e.RULE('dims', () => {
        e.MANY(() => {
          e.SUBRULE(e.annotation)
        }),
          e.CONSUME(t.LSquare),
          e.CONSUME(t.RSquare),
          e.MANY2({
            GATE: () => e.BACKTRACK_LOOKAHEAD(e.isDims),
            DEF: () => {
              e.MANY3(() => {
                e.SUBRULE2(e.annotation)
              }),
                e.CONSUME2(t.LSquare),
                e.CONSUME2(t.RSquare)
            }
          })
      }),
      e.RULE('typeParameter', () => {
        e.MANY(() => {
          e.SUBRULE(e.typeParameterModifier)
        }),
          e.SUBRULE(e.typeIdentifier),
          e.OPTION(() => {
            e.SUBRULE(e.typeBound)
          })
      }),
      e.RULE('typeParameterModifier', () => {
        e.SUBRULE(e.annotation)
      }),
      e.RULE('typeBound', () => {
        e.CONSUME(t.Extends),
          e.SUBRULE(e.classOrInterfaceType),
          e.MANY2(() => {
            e.SUBRULE(e.additionalBound)
          })
      }),
      e.RULE('additionalBound', () => {
        e.CONSUME(t.And), e.SUBRULE(e.interfaceType)
      }),
      e.RULE('typeArguments', () => {
        e.CONSUME(t.Less), e.SUBRULE(e.typeArgumentList), e.CONSUME(t.Greater)
      }),
      e.RULE('typeArgumentList', () => {
        e.SUBRULE(e.typeArgument),
          e.MANY(() => {
            e.CONSUME(t.Comma), e.SUBRULE2(e.typeArgument)
          })
      }),
      e.RULE('typeArgument', () => {
        e.OR([
          { GATE: e.BACKTRACK(e.referenceType), ALT: () => e.SUBRULE(e.referenceType) },
          { ALT: () => e.SUBRULE(e.wildcard) }
        ])
      }),
      e.RULE('wildcard', () => {
        e.MANY(() => {
          e.SUBRULE(e.annotation)
        }),
          e.CONSUME(t.QuestionMark),
          e.OPTION(() => {
            e.SUBRULE(e.wildcardBounds)
          })
      }),
      e.RULE('wildcardBounds', () => {
        e.OR([{ ALT: () => e.CONSUME(t.Extends) }, { ALT: () => e.CONSUME(t.Super) }]),
          e.SUBRULE(e.referenceType)
      })
  }
  var wh = { defineRules: xh }
  const { tokenMatcher: ks } = Ot
  function jh(e, t) {
    e.RULE('moduleName', () => {
      e.CONSUME(t.Identifier),
        e.MANY(() => {
          e.CONSUME(t.Dot), e.CONSUME2(t.Identifier)
        })
    }),
      e.RULE('packageName', () => {
        e.CONSUME(t.Identifier),
          e.MANY(() => {
            e.CONSUME(t.Dot), e.CONSUME2(t.Identifier)
          })
      }),
      e.RULE('typeName', () => {
        e.CONSUME(t.Identifier),
          e.MANY(() => {
            e.CONSUME(t.Dot), e.CONSUME2(t.Identifier)
          })
      }),
      e.RULE('expressionName', () => {
        e.CONSUME(t.Identifier),
          e.MANY({
            GATE: () => ks(this.LA(2).tokenType, t.Identifier),
            DEF: () => {
              e.CONSUME(t.Dot), e.CONSUME2(t.Identifier)
            }
          })
      }),
      e.RULE('methodName', () => {
        e.CONSUME(t.Identifier)
      }),
      e.RULE('packageOrTypeName', () => {
        e.CONSUME(t.Identifier),
          e.MANY({
            GATE: () => ks(this.LA(2).tokenType, t.Star) === !1,
            DEF: () => {
              e.CONSUME(t.Dot), e.CONSUME2(t.Identifier)
            }
          })
      }),
      e.RULE('ambiguousName', () => {
        e.CONSUME(t.Identifier),
          e.MANY(() => {
            e.CONSUME(t.Dot), e.CONSUME2(t.Identifier)
          })
      })
  }
  var Vh = { defineRules: jh }
  const { isRecognitionException: Gh, tokenMatcher: Un, EOF: Kh } = Ot
  function Wh(e, t) {
    e.RULE('compilationUnit', () => {
      const n = e.BACKTRACK_LOOKAHEAD(e.isModuleCompilationUnit)
      e.OR([
        { GATE: () => n === !1, ALT: () => e.SUBRULE(e.ordinaryCompilationUnit) },
        { ALT: () => e.SUBRULE(e.modularCompilationUnit) }
      ]),
        e.CONSUME(Kh)
    }),
      e.RULE('ordinaryCompilationUnit', () => {
        e.OPTION({
          GATE: e.BACKTRACK(e.packageDeclaration),
          DEF: () => {
            e.SUBRULE(e.packageDeclaration)
          }
        }),
          e.MANY(() => {
            e.SUBRULE3(e.importDeclaration)
          }),
          e.MANY2(() => {
            e.SUBRULE(e.typeDeclaration)
          })
      }),
      e.RULE('modularCompilationUnit', () => {
        e.MANY(() => {
          e.SUBRULE(e.importDeclaration)
        }),
          e.SUBRULE(e.moduleDeclaration)
      }),
      e.RULE('packageDeclaration', () => {
        e.MANY(() => {
          e.SUBRULE(e.packageModifier)
        }),
          e.CONSUME(t.Package),
          e.CONSUME(t.Identifier),
          e.MANY2(() => {
            e.CONSUME(t.Dot), e.CONSUME2(t.Identifier)
          }),
          e.CONSUME2(t.Semicolon)
      }),
      e.RULE('packageModifier', () => {
        e.SUBRULE(e.annotation)
      }),
      e.RULE('importDeclaration', () => {
        e.OR([
          {
            ALT: () => {
              e.CONSUME(t.Import),
                e.OPTION(() => {
                  e.CONSUME(t.Static)
                }),
                e.SUBRULE(e.packageOrTypeName),
                e.OPTION2(() => {
                  e.CONSUME(t.Dot), e.CONSUME(t.Star)
                }),
                e.CONSUME(t.Semicolon)
            }
          },
          { ALT: () => e.SUBRULE(e.emptyStatement) }
        ])
      }),
      e.RULE('typeDeclaration', () => {
        const n = this.BACKTRACK_LOOKAHEAD(e.isClassDeclaration)
        e.OR([
          { GATE: () => n, ALT: () => e.SUBRULE(e.classDeclaration) },
          { ALT: () => e.SUBRULE(e.interfaceDeclaration) },
          { ALT: () => e.CONSUME(t.Semicolon) }
        ])
      }),
      e.RULE('moduleDeclaration', () => {
        e.MANY(() => {
          e.SUBRULE(e.annotation)
        }),
          e.OPTION(() => {
            e.CONSUME(t.Open)
          }),
          e.CONSUME(t.Module),
          e.CONSUME(t.Identifier),
          e.MANY2(() => {
            e.CONSUME(t.Dot), e.CONSUME2(t.Identifier)
          }),
          e.CONSUME(t.LCurly),
          e.MANY3(() => {
            e.SUBRULE(e.moduleDirective)
          }),
          e.CONSUME(t.RCurly)
      }),
      e.RULE('moduleDirective', () => {
        e.OR([
          { ALT: () => e.SUBRULE(e.requiresModuleDirective) },
          { ALT: () => e.SUBRULE(e.exportsModuleDirective) },
          { ALT: () => e.SUBRULE(e.opensModuleDirective) },
          { ALT: () => e.SUBRULE(e.usesModuleDirective) },
          { ALT: () => e.SUBRULE(e.providesModuleDirective) }
        ])
      }),
      e.RULE('requiresModuleDirective', () => {
        e.CONSUME(t.Requires),
          e.MANY({
            GATE: () =>
              (Un(e.LA(1).tokenType, t.Transitive) && Un(e.LA(2).tokenType, t.Separators)) === !1,
            DEF: () => {
              e.SUBRULE(e.requiresModifier)
            }
          }),
          e.SUBRULE(e.moduleName),
          e.CONSUME(t.Semicolon)
      }),
      e.RULE('exportsModuleDirective', () => {
        e.CONSUME(t.Exports),
          e.SUBRULE(e.packageName),
          e.OPTION(() => {
            e.CONSUME(t.To),
              e.SUBRULE(e.moduleName),
              e.MANY(() => {
                e.CONSUME(t.Comma), e.SUBRULE2(e.moduleName)
              })
          }),
          e.CONSUME(t.Semicolon)
      }),
      e.RULE('opensModuleDirective', () => {
        e.CONSUME(t.Opens),
          e.SUBRULE(e.packageName),
          e.OPTION(() => {
            e.CONSUME(t.To),
              e.SUBRULE(e.moduleName),
              e.MANY(() => {
                e.CONSUME(t.Comma), e.SUBRULE2(e.moduleName)
              })
          }),
          e.CONSUME(t.Semicolon)
      }),
      e.RULE('usesModuleDirective', () => {
        e.CONSUME(t.Uses), e.SUBRULE(e.typeName), e.CONSUME(t.Semicolon)
      }),
      e.RULE('providesModuleDirective', () => {
        e.CONSUME(t.Provides),
          e.SUBRULE(e.typeName),
          e.CONSUME(t.With),
          e.SUBRULE2(e.typeName),
          e.MANY(() => {
            e.CONSUME(t.Comma), e.SUBRULE3(e.typeName)
          }),
          e.CONSUME(t.Semicolon)
      }),
      e.RULE('requiresModifier', () => {
        e.OR([{ ALT: () => e.CONSUME(t.Transitive) }, { ALT: () => e.CONSUME(t.Static) }])
      }),
      e.RULE('isModuleCompilationUnit', () => {
        e.OPTION(() => (e.SUBRULE(e.packageDeclaration), !1))
        try {
          e.MANY(() => {
            e.SUBRULE2(e.importDeclaration)
          }),
            e.MANY2({
              GATE: () =>
                (Un(e.LA(1).tokenType, t.At) && Un(e.LA(2).tokenType, t.Interface)) === !1,
              DEF: () => {
                e.SUBRULE(e.annotation)
              }
            })
        } catch (r) {
          throw Gh(r)
            ? 'Cannot Identify if the source code is an OrdinaryCompilationUnit or  ModularCompilationUnit'
            : r
        }
        const n = this.LA(1).tokenType
        return Un(n, t.Open) || Un(n, t.Module)
      })
  }
  var Jh = { defineRules: Wh }
  const { isRecognitionException: qh, tokenMatcher: ue } = Ot
  function Hh(e, t) {
    e.RULE('classDeclaration', () => {
      e.MANY(() => {
        e.SUBRULE(e.classModifier)
      }),
        e.OR([
          { ALT: () => e.SUBRULE(e.normalClassDeclaration) },
          { ALT: () => e.SUBRULE(e.enumDeclaration) },
          { ALT: () => e.SUBRULE(e.recordDeclaration) }
        ])
    }),
      e.RULE('normalClassDeclaration', () => {
        e.CONSUME(t.Class),
          e.SUBRULE(e.typeIdentifier),
          e.OPTION(() => {
            e.SUBRULE(e.typeParameters)
          }),
          e.OPTION2(() => {
            e.SUBRULE(e.superclass)
          }),
          e.OPTION3(() => {
            e.SUBRULE(e.superinterfaces)
          }),
          e.OPTION4(() => {
            e.SUBRULE(e.classPermits)
          }),
          e.SUBRULE(e.classBody)
      }),
      e.RULE('classModifier', () => {
        e.OR([
          { ALT: () => e.SUBRULE(e.annotation) },
          { ALT: () => e.CONSUME(t.Public) },
          { ALT: () => e.CONSUME(t.Protected) },
          { ALT: () => e.CONSUME(t.Private) },
          { ALT: () => e.CONSUME(t.Abstract) },
          { ALT: () => e.CONSUME(t.Static) },
          { ALT: () => e.CONSUME(t.Final) },
          { ALT: () => e.CONSUME(t.Sealed) },
          { ALT: () => e.CONSUME(t.NonSealed) },
          { ALT: () => e.CONSUME(t.Strictfp) }
        ])
      }),
      e.RULE('typeParameters', () => {
        e.CONSUME(t.Less), e.SUBRULE(e.typeParameterList), e.CONSUME(t.Greater)
      }),
      e.RULE('typeParameterList', () => {
        e.SUBRULE(e.typeParameter),
          e.MANY(() => {
            e.CONSUME(t.Comma), e.SUBRULE2(e.typeParameter)
          })
      }),
      e.RULE('superclass', () => {
        e.CONSUME(t.Extends), e.SUBRULE(e.classType)
      }),
      e.RULE('superinterfaces', () => {
        e.CONSUME(t.Implements), e.SUBRULE(e.interfaceTypeList)
      }),
      e.RULE('interfaceTypeList', () => {
        e.SUBRULE(e.interfaceType),
          e.MANY(() => {
            e.CONSUME(t.Comma), e.SUBRULE2(e.interfaceType)
          })
      }),
      e.RULE('classPermits', () => {
        e.CONSUME(t.Permits),
          e.SUBRULE(e.typeName),
          e.MANY(() => {
            e.CONSUME(t.Comma), e.SUBRULE2(e.typeName)
          })
      }),
      e.RULE('classBody', () => {
        e.CONSUME(t.LCurly),
          e.MANY(() => {
            e.SUBRULE(e.classBodyDeclaration)
          }),
          e.CONSUME(t.RCurly)
      })
    const n = {
      unknown: 0,
      fieldDeclaration: 1,
      methodDeclaration: 2,
      classDeclaration: 3,
      interfaceDeclaration: 4,
      semiColon: 5,
      instanceInitializer: 6,
      staticInitializer: 7,
      constructorDeclaration: 8
    }
    e.RULE('classBodyDeclaration', () => {
      const r = e.BACKTRACK_LOOKAHEAD(e.identifyClassBodyDeclarationType)
      e.OR([
        {
          GATE: () => r >= n.fieldDeclaration && r <= n.semiColon,
          ALT: () => e.SUBRULE(e.classMemberDeclaration, { ARGS: [r] })
        },
        { ALT: () => e.SUBRULE(e.instanceInitializer) },
        { ALT: () => e.SUBRULE(e.staticInitializer) },
        {
          GATE: () => ue(r, n.constructorDeclaration),
          ALT: () => e.SUBRULE(e.constructorDeclaration)
        }
      ])
    }),
      e.RULE('classMemberDeclaration', r => {
        e.OR([
          { GATE: () => r === n.fieldDeclaration, ALT: () => e.SUBRULE(e.fieldDeclaration) },
          { GATE: () => r === n.methodDeclaration, ALT: () => e.SUBRULE(e.methodDeclaration) },
          { GATE: () => r === n.classDeclaration, ALT: () => e.SUBRULE(e.classDeclaration) },
          {
            GATE: () => r === n.interfaceDeclaration,
            ALT: () => e.SUBRULE(e.interfaceDeclaration)
          },
          { ALT: () => e.CONSUME(t.Semicolon) }
        ])
      }),
      e.RULE('fieldDeclaration', () => {
        e.MANY(() => {
          e.SUBRULE(e.fieldModifier)
        }),
          e.SUBRULE(e.unannType),
          e.SUBRULE(e.variableDeclaratorList),
          e.CONSUME(t.Semicolon)
      }),
      e.RULE('fieldModifier', () => {
        e.OR([
          { ALT: () => e.SUBRULE(e.annotation) },
          { ALT: () => e.CONSUME(t.Public) },
          { ALT: () => e.CONSUME(t.Protected) },
          { ALT: () => e.CONSUME(t.Private) },
          { ALT: () => e.CONSUME(t.Static) },
          { ALT: () => e.CONSUME(t.Final) },
          { ALT: () => e.CONSUME(t.Transient) },
          { ALT: () => e.CONSUME(t.Volatile) }
        ])
      }),
      e.RULE('variableDeclaratorList', () => {
        e.SUBRULE(e.variableDeclarator),
          e.MANY(() => {
            e.CONSUME(t.Comma), e.SUBRULE2(e.variableDeclarator)
          })
      }),
      e.RULE('variableDeclarator', () => {
        e.SUBRULE(e.variableDeclaratorId),
          e.OPTION(() => {
            e.CONSUME(t.Equals), e.SUBRULE(e.variableInitializer)
          })
      }),
      e.RULE('variableDeclaratorId', () => {
        e.CONSUME(t.Identifier),
          e.OPTION(() => {
            e.SUBRULE(e.dims)
          })
      }),
      e.RULE('variableInitializer', () => {
        e.OR([{ ALT: () => e.SUBRULE(e.expression) }, { ALT: () => e.SUBRULE(e.arrayInitializer) }])
      }),
      e.RULE('unannType', () => {
        e.OR([
          { ALT: () => e.SUBRULE(e.unannPrimitiveTypeWithOptionalDimsSuffix) },
          { ALT: () => e.SUBRULE(e.unannReferenceType) }
        ])
      }),
      e.RULE('unannPrimitiveTypeWithOptionalDimsSuffix', () => {
        e.SUBRULE(e.unannPrimitiveType),
          e.OPTION({
            GATE: () => this.BACKTRACK_LOOKAHEAD(e.isDims),
            DEF: () => e.SUBRULE2(e.dims)
          })
      }),
      e.RULE('unannPrimitiveType', () => {
        e.OR([{ ALT: () => e.SUBRULE(e.numericType) }, { ALT: () => e.CONSUME(t.Boolean) }])
      }),
      e.RULE('unannReferenceType', () => {
        e.SUBRULE(e.unannClassOrInterfaceType),
          e.OPTION({
            GATE: () => this.BACKTRACK_LOOKAHEAD(e.isDims),
            DEF: () => e.SUBRULE2(e.dims)
          })
      }),
      e.RULE('unannClassOrInterfaceType', () => {
        e.SUBRULE(e.unannClassType)
      }),
      e.RULE('unannClassType', () => {
        e.CONSUME(t.Identifier),
          e.OPTION(() => {
            e.SUBRULE(e.typeArguments)
          }),
          e.MANY2(() => {
            e.CONSUME(t.Dot),
              e.MANY3(() => {
                e.SUBRULE2(e.annotation)
              }),
              e.CONSUME2(t.Identifier),
              e.OPTION2(() => {
                e.SUBRULE2(e.typeArguments)
              })
          })
      }),
      e.RULE('unannInterfaceType', () => {
        e.SUBRULE(e.unannClassType)
      }),
      e.RULE('unannTypeVariable', () => {
        e.CONSUME(t.Identifier)
      }),
      e.RULE('methodDeclaration', () => {
        e.MANY(() => {
          e.SUBRULE(e.methodModifier)
        }),
          e.SUBRULE(e.methodHeader),
          e.SUBRULE(e.methodBody)
      }),
      e.RULE('methodModifier', () => {
        e.OR([
          { ALT: () => e.SUBRULE(e.annotation) },
          { ALT: () => e.CONSUME(t.Public) },
          { ALT: () => e.CONSUME(t.Protected) },
          { ALT: () => e.CONSUME(t.Private) },
          { ALT: () => e.CONSUME(t.Abstract) },
          { ALT: () => e.CONSUME(t.Static) },
          { ALT: () => e.CONSUME(t.Final) },
          { ALT: () => e.CONSUME(t.Synchronized) },
          { ALT: () => e.CONSUME(t.Native) },
          { ALT: () => e.CONSUME(t.Strictfp) }
        ])
      }),
      e.RULE('methodHeader', () => {
        e.OPTION(() => {
          e.SUBRULE(e.typeParameters),
            e.MANY(() => {
              e.SUBRULE(e.annotation)
            })
        }),
          e.SUBRULE(e.result),
          e.SUBRULE(e.methodDeclarator),
          e.OPTION2(() => {
            e.SUBRULE(e.throws)
          })
      }),
      e.RULE('result', () => {
        e.OR([{ ALT: () => e.SUBRULE(e.unannType) }, { ALT: () => e.CONSUME(t.Void) }])
      }),
      e.RULE('methodDeclarator', () => {
        e.CONSUME(t.Identifier),
          e.CONSUME(t.LBrace),
          e.OPTION(() => {
            e.SUBRULE(e.formalParameterList)
          }),
          e.CONSUME(t.RBrace),
          e.OPTION2(() => {
            e.SUBRULE(e.dims)
          })
      }),
      e.RULE('receiverParameter', () => {
        e.MANY(() => {
          e.SUBRULE(e.annotation)
        }),
          e.SUBRULE(e.unannType),
          e.OPTION(() => {
            e.CONSUME(t.Identifier), e.CONSUME(t.Dot)
          }),
          e.CONSUME(t.This)
      }),
      e.RULE('formalParameterList', () => {
        e.SUBRULE(e.formalParameter),
          e.MANY(() => {
            e.CONSUME(t.Comma), e.SUBRULE2(e.formalParameter)
          })
      }),
      e.RULE('formalParameter', () => {
        e.OR([
          {
            GATE: e.BACKTRACK(e.variableParaRegularParameter),
            ALT: () => e.SUBRULE(e.variableParaRegularParameter)
          },
          { ALT: () => e.SUBRULE(e.variableArityParameter) }
        ])
      }),
      e.RULE('variableParaRegularParameter', () => {
        e.MANY(() => {
          e.SUBRULE(e.variableModifier)
        }),
          e.SUBRULE(e.unannType),
          e.SUBRULE(e.variableDeclaratorId)
      }),
      e.RULE('variableArityParameter', () => {
        e.MANY(() => {
          e.SUBRULE(e.variableModifier)
        }),
          e.SUBRULE(e.unannType),
          e.MANY2(() => {
            e.SUBRULE(e.annotation)
          }),
          e.CONSUME(t.DotDotDot),
          e.CONSUME(t.Identifier)
      }),
      e.RULE('variableModifier', () => {
        e.OR([{ ALT: () => e.SUBRULE(e.annotation) }, { ALT: () => e.CONSUME(t.Final) }])
      }),
      e.RULE('throws', () => {
        e.CONSUME(t.Throws), e.SUBRULE(e.exceptionTypeList)
      }),
      e.RULE('exceptionTypeList', () => {
        e.SUBRULE(e.exceptionType),
          e.MANY(() => {
            e.CONSUME(t.Comma), e.SUBRULE2(e.exceptionType)
          })
      }),
      e.RULE('exceptionType', () => {
        e.SUBRULE(e.classType)
      }),
      e.RULE('methodBody', () => {
        e.OR([{ ALT: () => e.SUBRULE(e.block) }, { ALT: () => e.CONSUME(t.Semicolon) }])
      }),
      e.RULE('instanceInitializer', () => {
        e.SUBRULE(e.block)
      }),
      e.RULE('staticInitializer', () => {
        e.CONSUME(t.Static), e.SUBRULE(e.block)
      }),
      e.RULE('constructorDeclaration', () => {
        e.MANY(() => {
          e.SUBRULE(e.constructorModifier)
        }),
          e.SUBRULE(e.constructorDeclarator),
          e.OPTION(() => {
            e.SUBRULE(e.throws)
          }),
          e.SUBRULE(e.constructorBody)
      }),
      e.RULE('constructorModifier', () => {
        e.OR([
          { ALT: () => e.SUBRULE(e.annotation) },
          { ALT: () => e.CONSUME(t.Public) },
          { ALT: () => e.CONSUME(t.Protected) },
          { ALT: () => e.CONSUME(t.Private) }
        ])
      }),
      e.RULE('constructorDeclarator', () => {
        e.OPTION(() => {
          e.SUBRULE(e.typeParameters)
        }),
          e.SUBRULE(e.simpleTypeName),
          e.CONSUME(t.LBrace),
          e.OPTION2({
            GATE: e.BACKTRACK(e.receiverParameter),
            DEF: () => {
              e.SUBRULE(e.receiverParameter), e.CONSUME(t.Comma)
            }
          }),
          e.OPTION3(() => {
            e.SUBRULE(e.formalParameterList)
          }),
          e.CONSUME(t.RBrace)
      }),
      e.RULE('simpleTypeName', () => {
        e.CONSUME(t.Identifier)
      }),
      e.RULE('constructorBody', () => {
        e.CONSUME(t.LCurly),
          e.OPTION({
            GATE: e.BACKTRACK(e.explicitConstructorInvocation),
            DEF: () => {
              e.SUBRULE(e.explicitConstructorInvocation)
            }
          }),
          e.OPTION2(() => {
            e.SUBRULE(e.blockStatements)
          }),
          e.CONSUME(t.RCurly)
      }),
      e.RULE('explicitConstructorInvocation', () => {
        e.OR([
          { ALT: () => e.SUBRULE(e.unqualifiedExplicitConstructorInvocation) },
          { ALT: () => e.SUBRULE(e.qualifiedExplicitConstructorInvocation) }
        ])
      }),
      e.RULE('unqualifiedExplicitConstructorInvocation', () => {
        e.OPTION(() => {
          e.SUBRULE(e.typeArguments)
        }),
          e.OR([{ ALT: () => e.CONSUME(t.This) }, { ALT: () => e.CONSUME(t.Super) }]),
          e.CONSUME(t.LBrace),
          e.OPTION2(() => {
            e.SUBRULE(e.argumentList)
          }),
          e.CONSUME(t.RBrace),
          e.CONSUME(t.Semicolon)
      }),
      e.RULE('qualifiedExplicitConstructorInvocation', () => {
        e.SUBRULE(e.expressionName),
          e.CONSUME(t.Dot),
          e.OPTION(() => {
            e.SUBRULE(e.typeArguments)
          }),
          e.CONSUME(t.Super),
          e.CONSUME(t.LBrace),
          e.OPTION2(() => {
            e.SUBRULE(e.argumentList)
          }),
          e.CONSUME(t.RBrace),
          e.CONSUME(t.Semicolon)
      }),
      e.RULE('enumDeclaration', () => {
        e.MANY(() => {
          e.SUBRULE(e.classModifier)
        }),
          e.CONSUME(t.Enum),
          e.SUBRULE(e.typeIdentifier),
          e.OPTION(() => {
            e.SUBRULE(e.superinterfaces)
          }),
          e.SUBRULE(e.enumBody)
      }),
      e.RULE('enumBody', () => {
        e.CONSUME(t.LCurly),
          e.OPTION(() => {
            e.SUBRULE(e.enumConstantList)
          }),
          e.OPTION2(() => {
            e.CONSUME(t.Comma)
          }),
          e.OPTION3(() => {
            e.SUBRULE(e.enumBodyDeclarations)
          }),
          e.CONSUME(t.RCurly)
      }),
      e.RULE('enumConstantList', () => {
        e.SUBRULE(e.enumConstant),
          e.MANY({
            GATE: () => {
              const r = e.LA(2)
              return ue(r, t.Identifier) || ue(r, t.At)
            },
            DEF: () => {
              e.CONSUME(t.Comma), e.SUBRULE2(e.enumConstant)
            }
          })
      }),
      e.RULE('enumConstant', () => {
        e.MANY(() => {
          e.SUBRULE(e.enumConstantModifier)
        }),
          e.CONSUME(t.Identifier),
          e.OPTION(() => {
            e.CONSUME(t.LBrace),
              e.OPTION2(() => {
                e.SUBRULE(e.argumentList)
              }),
              e.CONSUME(t.RBrace)
          }),
          e.OPTION3(() => {
            e.SUBRULE(e.classBody)
          })
      }),
      e.RULE('enumConstantModifier', () => {
        e.SUBRULE(e.annotation)
      }),
      e.RULE('enumBodyDeclarations', () => {
        e.CONSUME(t.Semicolon),
          e.MANY(() => {
            e.SUBRULE(e.classBodyDeclaration)
          })
      }),
      e.RULE('recordDeclaration', () => {
        e.CONSUME(t.Record),
          e.SUBRULE(e.typeIdentifier),
          e.OPTION(() => {
            e.SUBRULE(e.typeParameters)
          }),
          e.SUBRULE(e.recordHeader),
          e.OPTION2(() => {
            e.SUBRULE(e.superinterfaces)
          }),
          e.SUBRULE(e.recordBody)
      }),
      e.RULE('recordHeader', () => {
        e.CONSUME(t.LBrace),
          e.OPTION(() => {
            e.SUBRULE(e.recordComponentList)
          }),
          e.CONSUME(t.RBrace)
      }),
      e.RULE('recordComponentList', () => {
        e.SUBRULE(e.recordComponent),
          e.MANY(() => {
            e.CONSUME(t.Comma), e.SUBRULE2(e.recordComponent)
          })
      }),
      e.RULE('recordComponent', () => {
        e.MANY(() => {
          e.SUBRULE(e.recordComponentModifier)
        }),
          e.SUBRULE(e.unannType),
          e.OR([
            { ALT: () => e.CONSUME(t.Identifier) },
            { ALT: () => e.SUBRULE(e.variableArityRecordComponent) }
          ])
      }),
      e.RULE('variableArityRecordComponent', () => {
        e.MANY(() => {
          e.SUBRULE(e.annotation)
        }),
          e.CONSUME(t.DotDotDot),
          e.CONSUME(t.Identifier)
      }),
      e.RULE('recordComponentModifier', () => {
        e.SUBRULE(e.annotation)
      }),
      e.RULE('recordBody', () => {
        e.CONSUME(t.LCurly),
          e.MANY(() => {
            e.SUBRULE(e.recordBodyDeclaration)
          }),
          e.CONSUME(t.RCurly)
      }),
      e.RULE('recordBodyDeclaration', () => {
        e.OR([
          {
            GATE: () => this.BACKTRACK_LOOKAHEAD(e.isCompactConstructorDeclaration),
            ALT: () => e.SUBRULE(e.compactConstructorDeclaration)
          },
          { ALT: () => e.SUBRULE(e.classBodyDeclaration) }
        ])
      }),
      e.RULE('compactConstructorDeclaration', () => {
        e.MANY(() => {
          e.SUBRULE(e.constructorModifier)
        }),
          e.SUBRULE(e.simpleTypeName),
          e.SUBRULE(e.constructorBody)
      }),
      e.RULE('isClassDeclaration', () => {
        let r = !1
        e.OPTION(() => {
          e.CONSUME(t.Semicolon)
        }) && (r = !0)
        try {
          e.MANY({
            GATE: () => (ue(e.LA(1).tokenType, t.At) && ue(e.LA(2).tokenType, t.Interface)) === !1,
            DEF: () => {
              e.SUBRULE(e.classModifier)
            }
          })
        } catch (a) {
          throw qh(a)
            ? 'Cannot Identify if the <TypeDeclaration> is a <ClassDeclaration> or an <InterfaceDeclaration>'
            : a
        }
        if (r) return !1
        const i = this.LA(1).tokenType
        return (
          ue(i, t.Class) ||
          ue(i, t.Enum) ||
          (ue(i, t.Record) && ue(this.LA(2).tokenType, t.Identifier))
        )
      }),
      e.RULE('identifyClassBodyDeclarationType', () => {
        try {
          let r = this.LA(1).tokenType,
            i = this.LA(2).tokenType
          switch (r) {
            case t.Semicolon:
              return n.semiColon
            case t.LCurly:
              return n.instanceInitializer
            case t.Static:
              switch (i) {
                case t.LCurly:
                  return n.staticInitializer
              }
          }
          if (
            (e.MANY({
              GATE: () =>
                (ue(e.LA(1).tokenType, t.At) && ue(e.LA(2).tokenType, t.Interface)) === !1,
              DEF: () => {
                e.OR([
                  {
                    GATE: () =>
                      (ue(e.LA(1).tokenType, t.At) && ue(e.LA(2).tokenType, t.Interface)) === !1,
                    ALT: () => e.SUBRULE(e.annotation)
                  },
                  { ALT: () => e.CONSUME(t.Public) },
                  { ALT: () => e.CONSUME(t.Protected) },
                  { ALT: () => e.CONSUME(t.Private) },
                  { ALT: () => e.CONSUME(t.Abstract) },
                  { ALT: () => e.CONSUME(t.Static) },
                  { ALT: () => e.CONSUME(t.Final) },
                  { ALT: () => e.CONSUME(t.Transient) },
                  { ALT: () => e.CONSUME(t.Volatile) },
                  { ALT: () => e.CONSUME(t.Synchronized) },
                  { ALT: () => e.CONSUME(t.Native) },
                  { ALT: () => e.CONSUME(t.Sealed) },
                  { ALT: () => e.CONSUME(t.NonSealed) },
                  { ALT: () => e.CONSUME(t.Strictfp) }
                ])
              }
            }),
            (r = this.LA(1).tokenType),
            (i = this.LA(2).tokenType),
            ue(r, t.Identifier) && ue(i, t.LBrace))
          )
            return n.constructorDeclaration
          if (ue(r, t.Class) || ue(r, t.Enum) || ue(r, t.Record)) return n.classDeclaration
          if (ue(r, t.Interface) || ue(r, t.At)) return n.interfaceDeclaration
          if (ue(r, t.Void)) return n.methodDeclaration
          if (ue(r, t.Less)) {
            this.SUBRULE(e.typeParameters)
            const o = this.LA(1).tokenType,
              s = this.LA(2).tokenType
            return ue(o, t.Identifier) && ue(s, t.LBrace)
              ? n.constructorDeclaration
              : n.methodDeclaration
          }
          this.SUBRULE(e.unannType)
          const a = this.LA(1)
          return (
            (i = this.LA(2).tokenType),
            ue(a, t.Identifier) && ue(i, t.LBrace)
              ? n.methodDeclaration
              : ue(a, t.Identifier)
              ? n.fieldDeclaration
              : n.unknown
          )
        } catch {
          throw Error('Cannot Identify the type of a <classBodyDeclaration>')
        }
      }),
      e.RULE(
        'isDims',
        () => (
          e.MANY(e.annotation),
          ue(this.LA(1).tokenType, t.LSquare) && ue(this.LA(2).tokenType, t.RSquare)
        )
      ),
      e.RULE('isCompactConstructorDeclaration', () => {
        e.MANY(e.constructorModifier), e.SUBRULE(e.simpleTypeName), e.CONSUME(t.LCurly)
      })
  }
  var Yh = { defineRules: Hh }
  const { tokenMatcher: ye } = Ot
  function zh(e, t) {
    e.RULE('interfaceDeclaration', () => {
      e.MANY({
        DEF: () => {
          e.SUBRULE(e.interfaceModifier)
        },
        MAX_LOOKAHEAD: 2
      }),
        e.OR([
          { ALT: () => e.SUBRULE(e.normalInterfaceDeclaration) },
          { ALT: () => e.SUBRULE(e.annotationTypeDeclaration) }
        ])
    }),
      e.RULE('normalInterfaceDeclaration', () => {
        e.CONSUME(t.Interface),
          e.SUBRULE(e.typeIdentifier),
          e.OPTION(() => {
            e.SUBRULE(e.typeParameters)
          }),
          e.OPTION2(() => {
            e.SUBRULE(e.extendsInterfaces)
          }),
          e.OPTION3(() => {
            e.SUBRULE(e.interfacePermits)
          }),
          e.SUBRULE(e.interfaceBody)
      }),
      e.RULE('interfaceModifier', () => {
        e.OR([
          { ALT: () => e.SUBRULE(e.annotation) },
          { ALT: () => e.CONSUME(t.Public) },
          { ALT: () => e.CONSUME(t.Protected) },
          { ALT: () => e.CONSUME(t.Private) },
          { ALT: () => e.CONSUME(t.Abstract) },
          { ALT: () => e.CONSUME(t.Static) },
          { ALT: () => e.CONSUME(t.Sealed) },
          { ALT: () => e.CONSUME(t.NonSealed) },
          { ALT: () => e.CONSUME(t.Strictfp) }
        ])
      }),
      e.RULE('extendsInterfaces', () => {
        e.CONSUME(t.Extends), e.SUBRULE(e.interfaceTypeList)
      }),
      e.RULE('interfacePermits', () => {
        e.CONSUME(t.Permits),
          e.SUBRULE(e.typeName),
          e.MANY(() => {
            e.CONSUME(t.Comma), e.SUBRULE2(e.typeName)
          })
      }),
      e.RULE('interfaceBody', () => {
        e.CONSUME(t.LCurly),
          e.MANY(() => {
            e.SUBRULE(e.interfaceMemberDeclaration)
          }),
          e.CONSUME(t.RCurly)
      })
    const n = {
      unknown: 0,
      constantDeclaration: 1,
      interfaceMethodDeclaration: 2,
      classDeclaration: 3,
      interfaceDeclaration: 4,
      semiColon: 5
    }
    e.RULE('interfaceMemberDeclaration', () => {
      const i = this.BACKTRACK_LOOKAHEAD(e.identifyInterfaceBodyDeclarationType)
      e.OR([
        { GATE: () => i === n.constantDeclaration, ALT: () => e.SUBRULE(e.constantDeclaration) },
        {
          GATE: () => i === n.interfaceMethodDeclaration,
          ALT: () => e.SUBRULE(e.interfaceMethodDeclaration)
        },
        { GATE: () => i === n.classDeclaration, ALT: () => e.SUBRULE(e.classDeclaration) },
        { GATE: () => i === n.interfaceDeclaration, ALT: () => e.SUBRULE(e.interfaceDeclaration) },
        { ALT: () => e.CONSUME(t.Semicolon) }
      ])
    }),
      e.RULE('constantDeclaration', () => {
        e.MANY(() => {
          e.SUBRULE(e.constantModifier)
        }),
          e.SUBRULE(e.unannType),
          e.SUBRULE(e.variableDeclaratorList),
          e.CONSUME(t.Semicolon)
      }),
      e.RULE('constantModifier', () => {
        e.OR([
          { ALT: () => e.SUBRULE(e.annotation) },
          { ALT: () => e.CONSUME(t.Public) },
          { ALT: () => e.CONSUME(t.Static) },
          { ALT: () => e.CONSUME(t.Final) }
        ])
      }),
      e.RULE('interfaceMethodDeclaration', () => {
        e.MANY(() => {
          e.SUBRULE(e.interfaceMethodModifier)
        }),
          e.SUBRULE(e.methodHeader),
          e.SUBRULE(e.methodBody)
      }),
      e.RULE('interfaceMethodModifier', () => {
        e.OR([
          { ALT: () => e.SUBRULE(e.annotation) },
          { ALT: () => e.CONSUME(t.Public) },
          { ALT: () => e.CONSUME(t.Private) },
          { ALT: () => e.CONSUME(t.Abstract) },
          { ALT: () => e.CONSUME(t.Default) },
          { ALT: () => e.CONSUME(t.Static) },
          { ALT: () => e.CONSUME(t.Strictfp) }
        ])
      }),
      e.RULE('annotationTypeDeclaration', () => {
        e.CONSUME(t.At),
          e.CONSUME(t.Interface),
          e.SUBRULE(e.typeIdentifier),
          e.SUBRULE(e.annotationTypeBody)
      }),
      e.RULE('annotationTypeBody', () => {
        e.CONSUME(t.LCurly),
          e.MANY(() => {
            e.SUBRULE(e.annotationTypeMemberDeclaration)
          }),
          e.CONSUME(t.RCurly)
      })
    const r = {
      unknown: 0,
      annotationTypeElementDeclaration: 2,
      constantDeclaration: 1,
      classDeclaration: 3,
      interfaceDeclaration: 4,
      semiColon: 5
    }
    e.RULE('annotationTypeMemberDeclaration', () => {
      const i = this.BACKTRACK_LOOKAHEAD(e.identifyAnnotationBodyDeclarationType)
      e.OR([
        {
          GATE: () => i === r.annotationTypeElementDeclaration,
          ALT: () => e.SUBRULE(e.annotationTypeElementDeclaration)
        },
        { GATE: () => i === r.constantDeclaration, ALT: () => e.SUBRULE(e.constantDeclaration) },
        { GATE: () => i === r.classDeclaration, ALT: () => e.SUBRULE(e.classDeclaration) },
        { GATE: () => i === r.interfaceDeclaration, ALT: () => e.SUBRULE(e.interfaceDeclaration) },
        { ALT: () => e.CONSUME(t.Semicolon) }
      ])
    }),
      e.RULE('annotationTypeElementDeclaration', () => {
        e.MANY(() => {
          e.SUBRULE(e.annotationTypeElementModifier)
        }),
          e.SUBRULE(e.unannType),
          e.CONSUME(t.Identifier),
          e.CONSUME(t.LBrace),
          e.CONSUME(t.RBrace),
          e.OPTION(() => {
            e.SUBRULE(e.dims)
          }),
          e.OPTION2(() => {
            e.SUBRULE(e.defaultValue)
          }),
          e.CONSUME(t.Semicolon)
      }),
      e.RULE('annotationTypeElementModifier', () => {
        e.OR([
          { ALT: () => e.SUBRULE(e.annotation) },
          { ALT: () => e.CONSUME(t.Public) },
          { ALT: () => e.CONSUME(t.Abstract) }
        ])
      }),
      e.RULE('defaultValue', () => {
        e.CONSUME(t.Default), e.SUBRULE(e.elementValue)
      }),
      e.RULE('annotation', () => {
        e.CONSUME(t.At),
          e.SUBRULE(e.typeName),
          e.OPTION(() => {
            e.CONSUME(t.LBrace),
              e.OR({
                DEF: [
                  { ALT: () => e.SUBRULE(e.elementValuePairList) },
                  { ALT: () => e.SUBRULE(e.elementValue) },
                  { ALT: () => {} }
                ],
                IGNORE_AMBIGUITIES: !0,
                MAX_LOOKAHEAD: 2
              }),
              e.CONSUME(t.RBrace)
          })
      }),
      e.RULE('elementValuePairList', () => {
        e.SUBRULE(e.elementValuePair),
          e.MANY(() => {
            e.CONSUME(t.Comma), e.SUBRULE2(e.elementValuePair)
          })
      }),
      e.RULE('elementValuePair', () => {
        e.CONSUME(t.Identifier), e.CONSUME(t.Equals), e.SUBRULE(e.elementValue)
      }),
      e.RULE('elementValue', () => {
        const i = this.BACKTRACK_LOOKAHEAD(e.isSimpleElementValueAnnotation)
        e.OR([
          { GATE: () => i === !1, ALT: () => e.SUBRULE(e.expression) },
          { ALT: () => e.SUBRULE(e.elementValueArrayInitializer) },
          { GATE: () => i === !0, ALT: () => e.SUBRULE(e.annotation) }
        ])
      }),
      e.RULE('elementValueArrayInitializer', () => {
        e.CONSUME(t.LCurly),
          e.OPTION(() => {
            e.SUBRULE(e.elementValueList)
          }),
          e.OPTION2(() => {
            e.CONSUME(t.Comma)
          }),
          e.CONSUME(t.RCurly)
      }),
      e.RULE('elementValueList', () => {
        e.SUBRULE(e.elementValue),
          e.MANY({
            GATE: () => ye(e.LA(2).tokenType, t.RCurly) === !1,
            DEF: () => {
              e.CONSUME(t.Comma), e.SUBRULE2(e.elementValue)
            }
          })
      }),
      e.RULE('identifyInterfaceBodyDeclarationType', () => {
        let i = this.LA(1).tokenType
        if (ye(i, t.Semicolon)) return n.semiColon
        if (
          (e.MANY({
            GATE: () => (ye(e.LA(1).tokenType, t.At) && ye(e.LA(2).tokenType, t.Interface)) === !1,
            DEF: () => {
              e.OR([
                { ALT: () => e.SUBRULE(e.annotation) },
                { ALT: () => e.CONSUME(t.Public) },
                { ALT: () => e.CONSUME(t.Protected) },
                { ALT: () => e.CONSUME(t.Private) },
                { ALT: () => e.CONSUME(t.Abstract) },
                { ALT: () => e.CONSUME(t.Static) },
                { ALT: () => e.CONSUME(t.Sealed) },
                { ALT: () => e.CONSUME(t.NonSealed) },
                { ALT: () => e.CONSUME(t.Strictfp) },
                { ALT: () => e.CONSUME(t.Final) },
                { ALT: () => e.CONSUME(t.Default) }
              ])
            }
          }),
          (i = this.LA(1).tokenType),
          ye(i, t.Class) || ye(i, t.Enum) || ye(i, t.Record))
        )
          return n.classDeclaration
        if (ye(i, t.Interface) || ye(i, t.At)) return n.interfaceDeclaration
        if (ye(i, t.Void) || ye(i, t.Less)) return n.interfaceMethodDeclaration
        this.SUBRULE(e.unannType)
        const a = this.LA(1),
          o = this.LA(2).tokenType
        return ye(a, t.Identifier) && ye(o, t.LBrace)
          ? n.interfaceMethodDeclaration
          : ye(a, t.Identifier)
          ? n.constantDeclaration
          : n.unknown
      }),
      e.RULE('identifyAnnotationBodyDeclarationType', () => {
        let i = this.LA(1).tokenType
        if (ye(i, t.Semicolon)) return r.semiColon
        if (
          (e.MANY({
            GATE: () => (ye(e.LA(1).tokenType, t.At) && ye(e.LA(2).tokenType, t.Interface)) === !1,
            DEF: () => {
              e.OR([
                { ALT: () => e.SUBRULE(e.annotation) },
                { ALT: () => e.CONSUME(t.Public) },
                { ALT: () => e.CONSUME(t.Protected) },
                { ALT: () => e.CONSUME(t.Private) },
                { ALT: () => e.CONSUME(t.Abstract) },
                { ALT: () => e.CONSUME(t.Static) },
                { ALT: () => e.CONSUME(t.Final) },
                { ALT: () => e.CONSUME(t.Strictfp) }
              ])
            }
          }),
          (i = this.LA(1).tokenType),
          ye(i, t.Class) || ye(i, t.Enum))
        )
          return r.classDeclaration
        if (ye(i, t.Interface) || ye(i, t.At)) return r.interfaceDeclaration
        this.SUBRULE(e.unannType), (i = this.LA(1).tokenType)
        const a = this.LA(2).tokenType
        return ye(i, t.Identifier) && ye(a, t.LBrace)
          ? r.annotationTypeElementDeclaration
          : ye(i, t.Identifier)
          ? r.constantDeclaration
          : r.unknown
      }),
      e.RULE('isSimpleElementValueAnnotation', () => {
        switch ((e.SUBRULE(e.annotation), this.LA(1).tokenType)) {
          case t.Comma:
          case t.Semicolon:
          case t.RCurly:
          case t.RBrace:
            return !0
          default:
            return !1
        }
      })
  }
  var Xh = { defineRules: zh }
  const { tokenMatcher: Zh } = Ot
  function Qh(e, t) {
    e.RULE('arrayInitializer', () => {
      e.CONSUME(t.LCurly),
        e.OPTION(() => {
          e.SUBRULE(e.variableInitializerList)
        }),
        e.OPTION2(() => {
          e.CONSUME(t.Comma)
        }),
        e.CONSUME(t.RCurly)
    }),
      e.RULE('variableInitializerList', () => {
        e.SUBRULE(e.variableInitializer),
          e.MANY({
            GATE: () => Zh(this.LA(2).tokenType, t.RCurly) === !1,
            DEF: () => {
              e.CONSUME(t.Comma), e.SUBRULE2(e.variableInitializer)
            }
          })
      })
  }
  var $h = { defineRules: Qh }
  const { tokenMatcher: On } = Ot
  function em(e, t) {
    e.RULE('block', () => {
      e.CONSUME(t.LCurly),
        e.OPTION(() => {
          e.SUBRULE(e.blockStatements)
        }),
        e.CONSUME(t.RCurly)
    }),
      e.RULE('blockStatements', () => {
        e.SUBRULE(e.blockStatement),
          e.MANY(() => {
            e.SUBRULE2(e.blockStatement)
          })
      }),
      e.RULE('blockStatement', () => {
        const n = this.BACKTRACK_LOOKAHEAD(e.isLocalVariableDeclaration),
          r = this.BACKTRACK_LOOKAHEAD(e.isClassDeclaration)
        e.OR({
          DEF: [
            { GATE: () => n, ALT: () => e.SUBRULE(e.localVariableDeclarationStatement) },
            { GATE: () => r, ALT: () => e.SUBRULE(e.classDeclaration) },
            { ALT: () => e.SUBRULE(e.interfaceDeclaration) },
            { ALT: () => e.SUBRULE(e.statement) }
          ],
          IGNORE_AMBIGUITIES: !0
        })
      }),
      e.RULE('localVariableDeclarationStatement', () => {
        e.SUBRULE(e.localVariableDeclaration), e.CONSUME(t.Semicolon)
      }),
      e.RULE('localVariableDeclaration', () => {
        e.MANY(() => {
          e.SUBRULE(e.variableModifier)
        }),
          e.SUBRULE(e.localVariableType),
          e.SUBRULE(e.variableDeclaratorList)
      }),
      e.RULE('localVariableType', () => {
        e.OR({
          DEF: [{ ALT: () => e.SUBRULE(e.unannType) }, { ALT: () => e.CONSUME(t.Var) }],
          IGNORE_AMBIGUITIES: !0
        })
      }),
      e.RULE('statement', () => {
        e.OR({
          DEF: [
            { ALT: () => e.SUBRULE(e.statementWithoutTrailingSubstatement) },
            { ALT: () => e.SUBRULE(e.labeledStatement) },
            { ALT: () => e.SUBRULE(e.ifStatement) },
            { ALT: () => e.SUBRULE(e.whileStatement) },
            { ALT: () => e.SUBRULE(e.forStatement) }
          ],
          MAX_LOOKAHEAD: 2
        })
      }),
      e.RULE('statementWithoutTrailingSubstatement', () => {
        e.OR({
          DEF: [
            { ALT: () => e.SUBRULE(e.block) },
            {
              GATE: () => this.BACKTRACK_LOOKAHEAD(e.yieldStatement),
              ALT: () => e.SUBRULE(e.yieldStatement)
            },
            { ALT: () => e.SUBRULE(e.emptyStatement) },
            {
              GATE: () => !On(this.LA(1).tokenType, t.Switch),
              ALT: () => e.SUBRULE(e.expressionStatement)
            },
            { ALT: () => e.SUBRULE(e.assertStatement) },
            { ALT: () => e.SUBRULE(e.switchStatement) },
            { ALT: () => e.SUBRULE(e.doStatement) },
            { ALT: () => e.SUBRULE(e.breakStatement) },
            { ALT: () => e.SUBRULE(e.continueStatement) },
            { ALT: () => e.SUBRULE(e.returnStatement) },
            { ALT: () => e.SUBRULE(e.synchronizedStatement) },
            { ALT: () => e.SUBRULE(e.throwStatement) },
            { ALT: () => e.SUBRULE(e.tryStatement) }
          ],
          IGNORE_AMBIGUITIES: !0
        })
      }),
      e.RULE('emptyStatement', () => {
        e.CONSUME(t.Semicolon)
      }),
      e.RULE('labeledStatement', () => {
        e.CONSUME(t.Identifier), e.CONSUME(t.Colon), e.SUBRULE(e.statement)
      }),
      e.RULE('expressionStatement', () => {
        e.SUBRULE(e.statementExpression), e.CONSUME(t.Semicolon)
      }),
      e.RULE('statementExpression', () => {
        e.SUBRULE(e.expression)
      }),
      e.RULE('ifStatement', () => {
        e.CONSUME(t.If),
          e.CONSUME(t.LBrace),
          e.SUBRULE(e.expression),
          e.CONSUME(t.RBrace),
          e.SUBRULE(e.statement),
          e.OPTION(() => {
            e.CONSUME(t.Else), e.SUBRULE2(e.statement)
          })
      }),
      e.RULE('assertStatement', () => {
        e.CONSUME(t.Assert),
          e.SUBRULE(e.expression),
          e.OPTION(() => {
            e.CONSUME(t.Colon), e.SUBRULE2(e.expression)
          }),
          e.CONSUME(t.Semicolon)
      }),
      e.RULE('switchStatement', () => {
        e.CONSUME(t.Switch),
          e.CONSUME(t.LBrace),
          e.SUBRULE(e.expression),
          e.CONSUME(t.RBrace),
          e.SUBRULE(e.switchBlock)
      }),
      e.RULE('switchBlock', () => {
        e.CONSUME(t.LCurly),
          e.OR([
            {
              GATE: () => this.BACKTRACK_LOOKAHEAD(e.isClassicSwitchLabel),
              ALT: () => e.MANY(() => e.SUBRULE(e.switchBlockStatementGroup))
            },
            { ALT: () => e.MANY2(() => e.SUBRULE(e.switchRule)) }
          ]),
          e.CONSUME(t.RCurly)
      }),
      e.RULE('switchBlockStatementGroup', () => {
        e.SUBRULE(e.switchLabel),
          e.CONSUME(t.Colon),
          e.OPTION(() => {
            e.SUBRULE(e.blockStatements)
          })
      }),
      e.RULE('switchLabel', () => {
        e.SUBRULE(e.caseOrDefaultLabel),
          e.MANY({
            GATE: () =>
              On(e.LA(1).tokenType, t.Colon) &&
              (On(e.LA(2).tokenType, t.Case) || On(e.LA(2).tokenType, t.Default)),
            DEF: () => {
              e.CONSUME(t.Colon), e.SUBRULE2(e.caseOrDefaultLabel)
            }
          })
      }),
      e.RULE('caseOrDefaultLabel', () => {
        e.OR([
          {
            ALT: () => {
              e.CONSUME(t.Case),
                e.SUBRULE(e.caseLabelElement),
                e.MANY(() => {
                  e.CONSUME(t.Comma), e.SUBRULE2(e.caseLabelElement)
                })
            }
          },
          { ALT: () => e.CONSUME(t.Default) }
        ])
      }),
      e.RULE('caseLabelElement', () => {
        e.OR([
          { ALT: () => e.CONSUME(t.Null) },
          { ALT: () => e.CONSUME(t.Default) },
          { GATE: () => this.BACKTRACK_LOOKAHEAD(e.pattern), ALT: () => e.SUBRULE(e.pattern) },
          { GATE: () => On(e.LA(1).tokenType, t.Null) === !1, ALT: () => e.SUBRULE(e.caseConstant) }
        ])
      }),
      e.RULE('switchRule', () => {
        e.SUBRULE(e.switchLabel),
          e.CONSUME(t.Arrow),
          e.OR([
            { ALT: () => e.SUBRULE(e.throwStatement) },
            { ALT: () => e.SUBRULE(e.block) },
            {
              ALT: () => {
                e.SUBRULE(e.expression), e.CONSUME(t.Semicolon)
              }
            }
          ])
      }),
      e.RULE('caseConstant', () => {
        e.SUBRULE(e.ternaryExpression)
      }),
      e.RULE('whileStatement', () => {
        e.CONSUME(t.While),
          e.CONSUME(t.LBrace),
          e.SUBRULE(e.expression),
          e.CONSUME(t.RBrace),
          e.SUBRULE(e.statement)
      }),
      e.RULE('doStatement', () => {
        e.CONSUME(t.Do),
          e.SUBRULE(e.statement),
          e.CONSUME(t.While),
          e.CONSUME(t.LBrace),
          e.SUBRULE(e.expression),
          e.CONSUME(t.RBrace),
          e.CONSUME(t.Semicolon)
      }),
      e.RULE('forStatement', () => {
        e.OR([
          {
            GATE: () => this.BACKTRACK_LOOKAHEAD(e.isBasicForStatement),
            ALT: () => e.SUBRULE(e.basicForStatement)
          },
          { ALT: () => e.SUBRULE(e.enhancedForStatement) }
        ])
      }),
      e.RULE('basicForStatement', () => {
        e.CONSUME(t.For),
          e.CONSUME(t.LBrace),
          e.OPTION(() => {
            e.SUBRULE(e.forInit)
          }),
          e.CONSUME(t.Semicolon),
          e.OPTION2(() => {
            e.SUBRULE(e.expression)
          }),
          e.CONSUME2(t.Semicolon),
          e.OPTION3(() => {
            e.SUBRULE(e.forUpdate)
          }),
          e.CONSUME(t.RBrace),
          e.SUBRULE(e.statement)
      }),
      e.RULE('forInit', () => {
        e.OR([
          {
            GATE: () => e.BACKTRACK_LOOKAHEAD(e.isLocalVariableDeclaration),
            ALT: () => e.SUBRULE(e.localVariableDeclaration)
          },
          { ALT: () => e.SUBRULE(e.statementExpressionList) }
        ])
      }),
      e.RULE('forUpdate', () => {
        e.SUBRULE(e.statementExpressionList)
      }),
      e.RULE('statementExpressionList', () => {
        e.SUBRULE(e.statementExpression),
          e.MANY(() => {
            e.CONSUME(t.Comma), e.SUBRULE2(e.statementExpression)
          })
      }),
      e.RULE('enhancedForStatement', () => {
        e.CONSUME(t.For),
          e.CONSUME(t.LBrace),
          e.MANY(() => {
            e.SUBRULE(e.variableModifier)
          }),
          e.SUBRULE(e.localVariableType),
          e.SUBRULE(e.variableDeclaratorId),
          e.CONSUME(t.Colon),
          e.SUBRULE(e.expression),
          e.CONSUME(t.RBrace),
          e.SUBRULE(e.statement)
      }),
      e.RULE('breakStatement', () => {
        e.CONSUME(t.Break),
          e.OPTION(() => {
            e.CONSUME(t.Identifier)
          }),
          e.CONSUME(t.Semicolon)
      }),
      e.RULE('continueStatement', () => {
        e.CONSUME(t.Continue),
          e.OPTION(() => {
            e.CONSUME(t.Identifier)
          }),
          e.CONSUME(t.Semicolon)
      }),
      e.RULE('returnStatement', () => {
        e.CONSUME(t.Return),
          e.OPTION(() => {
            e.SUBRULE(e.expression)
          }),
          e.CONSUME(t.Semicolon)
      }),
      e.RULE('throwStatement', () => {
        e.CONSUME(t.Throw), e.SUBRULE(e.expression), e.CONSUME(t.Semicolon)
      }),
      e.RULE('synchronizedStatement', () => {
        e.CONSUME(t.Synchronized),
          e.CONSUME(t.LBrace),
          e.SUBRULE(e.expression),
          e.CONSUME(t.RBrace),
          e.SUBRULE(e.block)
      }),
      e.RULE('tryStatement', () => {
        e.OR({
          DEF: [
            {
              ALT: () => {
                e.CONSUME(t.Try),
                  e.SUBRULE(e.block),
                  e.OR2([
                    {
                      ALT: () => {
                        e.SUBRULE(e.catches),
                          e.OPTION(() => {
                            e.SUBRULE(e.finally)
                          })
                      }
                    },
                    { ALT: () => e.SUBRULE2(e.finally) }
                  ])
              }
            },
            { ALT: () => e.SUBRULE(e.tryWithResourcesStatement) }
          ],
          MAX_LOOKAHEAD: 2
        })
      }),
      e.RULE('catches', () => {
        e.SUBRULE(e.catchClause),
          e.MANY(() => {
            e.SUBRULE2(e.catchClause)
          })
      }),
      e.RULE('catchClause', () => {
        e.CONSUME(t.Catch),
          e.CONSUME(t.LBrace),
          e.SUBRULE(e.catchFormalParameter),
          e.CONSUME(t.RBrace),
          e.SUBRULE(e.block)
      }),
      e.RULE('catchFormalParameter', () => {
        e.MANY(() => {
          e.SUBRULE(e.variableModifier)
        }),
          e.SUBRULE(e.catchType),
          e.SUBRULE(e.variableDeclaratorId)
      }),
      e.RULE('catchType', () => {
        e.SUBRULE(e.unannClassType),
          e.MANY(() => {
            e.CONSUME(t.Or), e.SUBRULE2(e.classType)
          })
      }),
      e.RULE('finally', () => {
        e.CONSUME(t.Finally), e.SUBRULE(e.block)
      }),
      e.RULE('tryWithResourcesStatement', () => {
        e.CONSUME(t.Try),
          e.SUBRULE(e.resourceSpecification),
          e.SUBRULE(e.block),
          e.OPTION(() => {
            e.SUBRULE(e.catches)
          }),
          e.OPTION2(() => {
            e.SUBRULE(e.finally)
          })
      }),
      e.RULE('resourceSpecification', () => {
        e.CONSUME(t.LBrace),
          e.SUBRULE(e.resourceList),
          e.OPTION(() => {
            e.CONSUME(t.Semicolon)
          }),
          e.CONSUME(t.RBrace)
      }),
      e.RULE('resourceList', () => {
        e.SUBRULE(e.resource),
          e.MANY({
            GATE: () => On(e.LA(2).tokenType, t.RBrace) === !1,
            DEF: () => {
              e.CONSUME(t.Semicolon), e.SUBRULE2(e.resource)
            }
          })
      }),
      e.RULE('resource', () => {
        e.OR([
          { GATE: e.BACKTRACK(e.resourceInit), ALT: () => e.SUBRULE(e.resourceInit) },
          { ALT: () => e.SUBRULE(e.variableAccess) }
        ])
      }),
      e.RULE('resourceInit', () => {
        e.MANY(() => {
          e.SUBRULE(e.variableModifier)
        }),
          e.SUBRULE(e.localVariableType),
          e.CONSUME(t.Identifier),
          e.CONSUME(t.Equals),
          e.SUBRULE(e.expression)
      }),
      e.RULE('yieldStatement', () => {
        e.CONSUME(t.Yield), e.SUBRULE(e.expression), e.CONSUME(t.Semicolon)
      }),
      e.RULE('variableAccess', () => {
        e.SUBRULE(e.primary)
      }),
      e.RULE(
        'isBasicForStatement',
        () => (
          e.CONSUME(t.For),
          e.CONSUME(t.LBrace),
          e.OPTION(() => {
            e.SUBRULE(e.forInit)
          }),
          e.CONSUME(t.Semicolon),
          !0
        )
      ),
      e.RULE('isLocalVariableDeclaration', () => {
        switch (
          (e.MANY(() => {
            e.SUBRULE(e.variableModifier)
          }),
          e.SUBRULE(e.localVariableType),
          e.SUBRULE(e.variableDeclaratorId),
          this.LA(1).tokenType)
        ) {
          case t.Semicolon:
          case t.Comma:
          case t.Equals:
            return !0
          default:
            return !1
        }
      }),
      e.RULE('isClassicSwitchLabel', () => {
        e.SUBRULE(e.switchLabel), e.CONSUME(t.Colon)
      })
  }
  var tm = { defineRules: em }
  const { tokenMatcher: Le } = Ot
  function nm(e, t) {
    e.RULE('expression', () => {
      e.OR([
        {
          GATE: () => this.BACKTRACK_LOOKAHEAD(e.isLambdaExpression),
          ALT: () => e.SUBRULE(e.lambdaExpression)
        },
        { ALT: () => e.SUBRULE(e.ternaryExpression) }
      ])
    }),
      e.RULE('lambdaExpression', () => {
        e.SUBRULE(e.lambdaParameters), e.CONSUME(t.Arrow), e.SUBRULE(e.lambdaBody)
      }),
      e.RULE('lambdaParameters', () => {
        e.OR([
          { ALT: () => e.SUBRULE(e.lambdaParametersWithBraces) },
          { ALT: () => e.CONSUME(t.Identifier) }
        ])
      }),
      e.RULE('lambdaParametersWithBraces', () => {
        e.CONSUME(t.LBrace),
          e.OPTION(() => {
            e.SUBRULE(e.lambdaParameterList)
          }),
          e.CONSUME(t.RBrace)
      }),
      e.RULE('lambdaParameterList', () => {
        e.OR([
          {
            GATE: () => {
              const r = this.LA(1).tokenType,
                i = this.LA(2).tokenType
              return Le(r, t.Identifier) && (Le(i, t.RBrace) || Le(i, t.Comma))
            },
            ALT: () => e.SUBRULE(e.inferredLambdaParameterList)
          },
          { ALT: () => e.SUBRULE(e.explicitLambdaParameterList) }
        ])
      }),
      e.RULE('inferredLambdaParameterList', () => {
        e.CONSUME(t.Identifier),
          e.MANY(() => {
            e.CONSUME(t.Comma), e.CONSUME2(t.Identifier)
          })
      }),
      e.RULE('explicitLambdaParameterList', () => {
        e.SUBRULE(e.lambdaParameter),
          e.MANY(() => {
            e.CONSUME(t.Comma), e.SUBRULE2(e.lambdaParameter)
          })
      }),
      e.RULE('lambdaParameter', () => {
        e.OR([
          {
            GATE: e.BACKTRACK(e.regularLambdaParameter),
            ALT: () => e.SUBRULE(e.regularLambdaParameter)
          },
          { ALT: () => e.SUBRULE(e.variableArityParameter) }
        ])
      }),
      e.RULE('regularLambdaParameter', () => {
        e.MANY(() => {
          e.SUBRULE(e.variableModifier)
        }),
          e.SUBRULE(e.lambdaParameterType),
          e.SUBRULE(e.variableDeclaratorId)
      }),
      e.RULE('lambdaParameterType', () => {
        e.OR({
          DEF: [{ ALT: () => e.SUBRULE(e.unannType) }, { ALT: () => e.CONSUME(t.Var) }],
          IGNORE_AMBIGUITIES: !0
        })
      }),
      e.RULE('lambdaBody', () => {
        e.OR([{ ALT: () => e.SUBRULE(e.expression) }, { ALT: () => e.SUBRULE(e.block) }])
      }),
      e.RULE('ternaryExpression', () => {
        e.SUBRULE(e.binaryExpression),
          e.OPTION(() => {
            e.CONSUME(t.QuestionMark),
              e.SUBRULE(e.expression),
              e.CONSUME(t.Colon),
              e.SUBRULE2(e.expression)
          })
      }),
      e.RULE('binaryExpression', () => {
        e.SUBRULE(e.unaryExpression),
          e.MANY(() => {
            e.OR({
              DEF: [
                {
                  ALT: () => {
                    e.CONSUME(t.Instanceof),
                      e.OR1([
                        {
                          GATE: () => this.BACKTRACK_LOOKAHEAD(e.pattern),
                          ALT: () => e.SUBRULE(e.pattern)
                        },
                        { ALT: () => e.SUBRULE(e.referenceType) }
                      ])
                  }
                },
                {
                  ALT: () => {
                    e.CONSUME(t.AssignmentOperator), e.SUBRULE2(e.expression)
                  }
                },
                {
                  GATE: () => Le(e.LA(2).tokenType, t.Less) || Le(e.LA(2).tokenType, t.Greater),
                  ALT: () => {
                    e.OR2([
                      {
                        GATE: () => e.LA(1).startOffset + 1 === e.LA(2).startOffset,
                        ALT: () => {
                          e.CONSUME(t.Less), e.CONSUME2(t.Less)
                        }
                      },
                      {
                        GATE: () => e.LA(1).startOffset + 1 === e.LA(2).startOffset,
                        ALT: () => {
                          e.CONSUME(t.Greater),
                            e.CONSUME2(t.Greater),
                            e.OPTION({
                              GATE: () => e.LA(0).startOffset + 1 === e.LA(1).startOffset,
                              DEF: () => e.CONSUME3(t.Greater)
                            })
                        }
                      }
                    ]),
                      e.SUBRULE2(e.unaryExpression)
                  }
                },
                {
                  ALT: () => {
                    e.CONSUME(t.BinaryOperator), e.SUBRULE3(e.unaryExpression)
                  }
                }
              ],
              IGNORE_AMBIGUITIES: !0
            })
          })
      }),
      e.RULE('unaryExpression', () => {
        e.MANY(() => {
          e.CONSUME(t.UnaryPrefixOperator)
        }),
          e.SUBRULE(e.primary),
          e.MANY2(() => {
            e.CONSUME(t.UnarySuffixOperator)
          })
      }),
      e.RULE('unaryExpressionNotPlusMinus', () => {
        e.MANY(() => {
          e.CONSUME(t.UnaryPrefixOperatorNotPlusMinus)
        }),
          e.SUBRULE(e.primary),
          e.MANY2(() => {
            e.CONSUME(t.UnarySuffixOperator)
          })
      }),
      e.RULE('primary', () => {
        e.SUBRULE(e.primaryPrefix),
          e.MANY(() => {
            e.SUBRULE(e.primarySuffix)
          })
      }),
      e.RULE('primaryPrefix', () => {
        let r = !1
        Le(e.LA(1).tokenType, t.LBrace) && (r = this.BACKTRACK_LOOKAHEAD(e.isCastExpression)),
          e.OR([
            { ALT: () => e.SUBRULE(e.literal) },
            { ALT: () => e.CONSUME(t.This) },
            { ALT: () => e.CONSUME(t.Void) },
            { ALT: () => e.SUBRULE(e.unannPrimitiveTypeWithOptionalDimsSuffix) },
            { ALT: () => e.SUBRULE(e.fqnOrRefType) },
            { GATE: () => r, ALT: () => e.SUBRULE(e.castExpression) },
            { ALT: () => e.SUBRULE(e.parenthesisExpression) },
            { ALT: () => e.SUBRULE(e.newExpression) },
            { ALT: () => e.SUBRULE(e.switchStatement) }
          ])
      }),
      e.RULE('primarySuffix', () => {
        e.OR({
          DEF: [
            {
              ALT: () => {
                e.CONSUME(t.Dot),
                  e.OR2([
                    { ALT: () => e.CONSUME(t.This) },
                    { ALT: () => e.SUBRULE(e.unqualifiedClassInstanceCreationExpression) },
                    {
                      ALT: () => {
                        e.OPTION(() => {
                          e.SUBRULE(e.typeArguments)
                        }),
                          e.CONSUME(t.Identifier)
                      }
                    }
                  ])
              }
            },
            { ALT: () => e.SUBRULE(e.methodInvocationSuffix) },
            { ALT: () => e.SUBRULE(e.classLiteralSuffix) },
            { ALT: () => e.SUBRULE(e.arrayAccessSuffix) },
            { ALT: () => e.SUBRULE(e.methodReferenceSuffix) }
          ],
          MAX_LOOKAHEAD: 2
        })
      }),
      e.RULE('fqnOrRefType', () => {
        e.SUBRULE(e.fqnOrRefTypePartFirst),
          e.MANY2({
            GATE: () =>
              Le(this.LA(2).tokenType, t.Class) === !1 &&
              Le(this.LA(2).tokenType, t.This) === !1 &&
              Le(this.LA(2).tokenType, t.New) === !1,
            DEF: () => {
              e.CONSUME(t.Dot), e.SUBRULE2(e.fqnOrRefTypePartRest)
            }
          }),
          e.OPTION({
            GATE: () => Le(e.LA(1).tokenType, t.At) || Le(e.LA(2).tokenType, t.RSquare),
            DEF: () => {
              e.SUBRULE(e.dims)
            }
          })
      }),
      e.RULE('fqnOrRefTypePartRest', () => {
        e.MANY(() => {
          e.SUBRULE(e.annotation)
        }),
          e.OPTION(() => e.SUBRULE2(e.typeArguments)),
          e.SUBRULE(e.fqnOrRefTypePartCommon)
      }),
      e.RULE('fqnOrRefTypePartCommon', () => {
        e.OR([{ ALT: () => e.CONSUME(t.Identifier) }, { ALT: () => e.CONSUME(t.Super) }])
        let r = !1
        Le(e.LA(1).tokenType, t.Less) && (r = this.BACKTRACK_LOOKAHEAD(e.isRefTypeInMethodRef)),
          e.OPTION2({
            GATE: () => r,
            DEF: () => {
              e.SUBRULE3(e.typeArguments)
            }
          })
      }),
      e.RULE('fqnOrRefTypePartFirst', () => {
        e.MANY(() => {
          e.SUBRULE(e.annotation)
        }),
          e.SUBRULE(e.fqnOrRefTypePartCommon)
      }),
      e.RULE('parenthesisExpression', () => {
        e.CONSUME(t.LBrace), e.SUBRULE(e.expression), e.CONSUME(t.RBrace)
      }),
      e.RULE('castExpression', () => {
        e.OR([
          {
            GATE: () => this.BACKTRACK_LOOKAHEAD(e.isPrimitiveCastExpression),
            ALT: () => e.SUBRULE(e.primitiveCastExpression)
          },
          { ALT: () => e.SUBRULE(e.referenceTypeCastExpression) }
        ])
      }),
      e.RULE('primitiveCastExpression', () => {
        e.CONSUME(t.LBrace),
          e.SUBRULE(e.primitiveType),
          e.CONSUME(t.RBrace),
          e.SUBRULE(e.unaryExpression)
      }),
      e.RULE('referenceTypeCastExpression', () => {
        e.CONSUME(t.LBrace),
          e.SUBRULE(e.referenceType),
          e.MANY(() => {
            e.SUBRULE(e.additionalBound)
          }),
          e.CONSUME(t.RBrace),
          e.OR([
            {
              GATE: () => this.BACKTRACK_LOOKAHEAD(e.isLambdaExpression),
              ALT: () => e.SUBRULE(e.lambdaExpression)
            },
            { ALT: () => e.SUBRULE(e.unaryExpressionNotPlusMinus) }
          ])
      })
    const n = { arrayCreationExpression: 1, unqualifiedClassInstanceCreationExpression: 2 }
    e.RULE('newExpression', () => {
      const r = this.BACKTRACK_LOOKAHEAD(e.identifyNewExpressionType)
      e.OR([
        {
          GATE: () => r === n.arrayCreationExpression,
          ALT: () => e.SUBRULE(e.arrayCreationExpression)
        },
        {
          GATE: () => r === n.unqualifiedClassInstanceCreationExpression,
          ALT: () => e.SUBRULE(e.unqualifiedClassInstanceCreationExpression)
        }
      ])
    }),
      e.RULE('unqualifiedClassInstanceCreationExpression', () => {
        e.CONSUME(t.New),
          e.OPTION(() => {
            e.SUBRULE(e.typeArguments)
          }),
          e.SUBRULE(e.classOrInterfaceTypeToInstantiate),
          e.CONSUME(t.LBrace),
          e.OPTION2(() => {
            e.SUBRULE(e.argumentList)
          }),
          e.CONSUME(t.RBrace),
          e.OPTION3(() => {
            e.SUBRULE(e.classBody)
          })
      }),
      e.RULE('classOrInterfaceTypeToInstantiate', () => {
        e.MANY(() => {
          e.SUBRULE(e.annotation)
        }),
          e.CONSUME(t.Identifier),
          e.MANY2(() => {
            e.CONSUME(t.Dot),
              e.MANY3(() => {
                e.SUBRULE2(e.annotation)
              }),
              e.CONSUME2(t.Identifier)
          }),
          e.OPTION(() => {
            e.SUBRULE(e.typeArgumentsOrDiamond)
          })
      }),
      e.RULE('typeArgumentsOrDiamond', () => {
        e.OR({
          DEF: [{ ALT: () => e.SUBRULE(e.diamond) }, { ALT: () => e.SUBRULE(e.typeArguments) }],
          MAX_LOOKAHEAD: 2
        })
      }),
      e.RULE('diamond', () => {
        e.CONSUME(t.Less), e.CONSUME(t.Greater)
      }),
      e.RULE('methodInvocationSuffix', () => {
        e.CONSUME(t.LBrace),
          e.OPTION2(() => {
            e.SUBRULE(e.argumentList)
          }),
          e.CONSUME(t.RBrace)
      }),
      e.RULE('argumentList', () => {
        e.SUBRULE(e.expression),
          e.MANY(() => {
            e.CONSUME(t.Comma), e.SUBRULE2(e.expression)
          })
      }),
      e.RULE('arrayCreationExpression', () => {
        e.CONSUME(t.New),
          e.OR([
            { GATE: e.BACKTRACK(e.primitiveType), ALT: () => e.SUBRULE(e.primitiveType) },
            { ALT: () => e.SUBRULE(e.classOrInterfaceType) }
          ]),
          e.OR2([
            {
              GATE: e.BACKTRACK(e.arrayCreationDefaultInitSuffix),
              ALT: () => e.SUBRULE(e.arrayCreationDefaultInitSuffix)
            },
            { ALT: () => e.SUBRULE(e.arrayCreationExplicitInitSuffix) }
          ])
      }),
      e.RULE('arrayCreationDefaultInitSuffix', () => {
        e.SUBRULE(e.dimExprs),
          e.OPTION(() => {
            e.SUBRULE(e.dims)
          })
      }),
      e.RULE('arrayCreationExplicitInitSuffix', () => {
        e.SUBRULE(e.dims), e.SUBRULE(e.arrayInitializer)
      }),
      e.RULE('dimExprs', () => {
        e.SUBRULE(e.dimExpr),
          e.MANY({
            GATE: () => Le(e.LA(2).tokenType, t.RSquare) === !1,
            DEF: () => e.SUBRULE2(e.dimExpr)
          })
      }),
      e.RULE('dimExpr', () => {
        e.MANY(() => {
          e.SUBRULE(e.annotation)
        }),
          e.CONSUME(t.LSquare),
          e.SUBRULE(e.expression),
          e.CONSUME(t.RSquare)
      }),
      e.RULE('classLiteralSuffix', () => {
        e.MANY(() => {
          e.CONSUME(t.LSquare), e.CONSUME(t.RSquare)
        }),
          e.CONSUME(t.Dot),
          e.CONSUME(t.Class)
      }),
      e.RULE('arrayAccessSuffix', () => {
        e.CONSUME(t.LSquare), e.SUBRULE(e.expression), e.CONSUME(t.RSquare)
      }),
      e.RULE('methodReferenceSuffix', () => {
        e.CONSUME(t.ColonColon),
          e.OPTION(() => {
            e.SUBRULE(e.typeArguments)
          }),
          e.OR([{ ALT: () => e.CONSUME(t.Identifier) }, { ALT: () => e.CONSUME(t.New) }])
      }),
      e.RULE('pattern', () => {
        e.SUBRULE(e.primaryPattern),
          e.OPTION(() => {
            e.CONSUME(t.AndAnd), e.SUBRULE(e.binaryExpression)
          })
      }),
      e.RULE('primaryPattern', () => {
        e.OR([
          {
            ALT: () => {
              e.CONSUME(t.LBrace), e.SUBRULE(e.pattern), e.CONSUME(t.RBrace)
            }
          },
          { ALT: () => e.SUBRULE(e.typePattern) }
        ])
      }),
      e.RULE('typePattern', () => {
        e.SUBRULE(e.localVariableDeclaration)
      }),
      e.RULE('identifyNewExpressionType', () => {
        e.CONSUME(t.New)
        const r = this.LA(1).tokenType
        if (Le(r, t.Less)) return n.unqualifiedClassInstanceCreationExpression
        try {
          e.SUBRULE(e.classOrInterfaceTypeToInstantiate)
        } catch {
          return n.arrayCreationExpression
        }
        const i = this.LA(1).tokenType
        return Le(i, t.LBrace)
          ? n.unqualifiedClassInstanceCreationExpression
          : n.arrayCreationExpression
      }),
      e.RULE('isLambdaExpression', () => {
        const r = this.LA(1).tokenType,
          i = this.LA(2).tokenType
        return Le(r, t.Identifier) && Le(i, t.Arrow)
          ? !0
          : Le(r, t.LBrace)
          ? (e.SUBRULE(e.lambdaParametersWithBraces), Le(this.LA(1).tokenType, t.Arrow))
          : !1
      }),
      e.RULE('isCastExpression', () =>
        this.BACKTRACK_LOOKAHEAD(e.isPrimitiveCastExpression)
          ? !0
          : this.BACKTRACK_LOOKAHEAD(e.isReferenceTypeCastExpression)
      ),
      e.RULE(
        'isPrimitiveCastExpression',
        () => (e.CONSUME(t.LBrace), e.SUBRULE(e.primitiveType), e.CONSUME(t.RBrace), !0)
      ),
      e.RULE('isReferenceTypeCastExpression', () => {
        e.CONSUME(t.LBrace),
          e.SUBRULE(e.referenceType),
          e.MANY(() => {
            e.SUBRULE(e.additionalBound)
          }),
          e.CONSUME(t.RBrace)
        const r = this.LA(1).tokenType
        return this.firstForUnaryExpressionNotPlusMinus.find(i => Le(r, i)) !== void 0
      }),
      e.RULE('isRefTypeInMethodRef', () => {
        let r
        e.SUBRULE(e.typeArguments)
        const i = e.OPTION(() => {
            e.SUBRULE(e.dims)
          }),
          a = this.LA(1).tokenType
        if (
          (Le(a, t.ColonColon) ? (r = !0) : i && (r = !1),
          e.OPTION2(() => {
            e.CONSUME(t.Dot), e.SUBRULE(e.classOrInterfaceType)
          }),
          r !== void 0)
        )
          return r
        const o = this.LA(1).tokenType
        return Le(o, t.ColonColon)
      })
  }
  function rm() {
    return this.computeContentAssist('unaryExpressionNotPlusMinus', [])
      .map(n => n.nextTokenType)
      .filter((n, r, i) => i.indexOf(n) === r)
  }
  var im = { defineRules: nm, computeFirstForUnaryExpressionNotPlusMinus: rm }
  function am() {
    ;(this.__data__ = []), (this.size = 0)
  }
  var om = am
  function sm(e, t) {
    return e === t || (e !== e && t !== t)
  }
  var xs = sm,
    um = xs
  function cm(e, t) {
    for (var n = e.length; n--; ) if (um(e[n][0], t)) return n
    return -1
  }
  var qr = cm,
    lm = qr,
    fm = Array.prototype,
    pm = fm.splice
  function dm(e) {
    var t = this.__data__,
      n = lm(t, e)
    if (n < 0) return !1
    var r = t.length - 1
    return n == r ? t.pop() : pm.call(t, n, 1), --this.size, !0
  }
  var hm = dm,
    mm = qr
  function vm(e) {
    var t = this.__data__,
      n = mm(t, e)
    return n < 0 ? void 0 : t[n][1]
  }
  var Dm = vm,
    Em = qr
  function ym(e) {
    return Em(this.__data__, e) > -1
  }
  var Cm = ym,
    Am = qr
  function Sm(e, t) {
    var n = this.__data__,
      r = Am(n, e)
    return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
  }
  var Tm = Sm,
    gm = om,
    Lm = hm,
    Rm = Dm,
    Um = Cm,
    Om = Tm
  function Nn(e) {
    var t = -1,
      n = e == null ? 0 : e.length
    for (this.clear(); ++t < n; ) {
      var r = e[t]
      this.set(r[0], r[1])
    }
  }
  ;(Nn.prototype.clear = gm),
    (Nn.prototype.delete = Lm),
    (Nn.prototype.get = Rm),
    (Nn.prototype.has = Um),
    (Nn.prototype.set = Om)
  var Hr = Nn,
    Nm = Hr
  function _m() {
    ;(this.__data__ = new Nm()), (this.size = 0)
  }
  var Im = _m
  function Bm(e) {
    var t = this.__data__,
      n = t.delete(e)
    return (this.size = t.size), n
  }
  var Fm = Bm
  function Mm(e) {
    return this.__data__.get(e)
  }
  var bm = Mm
  function Pm(e) {
    return this.__data__.has(e)
  }
  var km = Pm
  function xm(e) {
    var t = typeof e
    return e != null && (t == 'object' || t == 'function')
  }
  var Yr = xm,
    wm = Sn,
    jm = Yr,
    Vm = '[object AsyncFunction]',
    Gm = '[object Function]',
    Km = '[object GeneratorFunction]',
    Wm = '[object Proxy]'
  function Jm(e) {
    if (!jm(e)) return !1
    var t = wm(e)
    return t == Gm || t == Km || t == Vm || t == Wm
  }
  var ws = Jm,
    qm = qt,
    Hm = qm['__core-js_shared__'],
    Ym = Hm,
    ta = Ym,
    js = (function () {
      var e = /[^.]+$/.exec((ta && ta.keys && ta.keys.IE_PROTO) || '')
      return e ? 'Symbol(src)_1.' + e : ''
    })()
  function zm(e) {
    return !!js && js in e
  }
  var Xm = zm,
    Zm = Function.prototype,
    Qm = Zm.toString
  function $m(e) {
    if (e != null) {
      try {
        return Qm.call(e)
      } catch {}
      try {
        return e + ''
      } catch {}
    }
    return ''
  }
  var Vs = $m,
    ev = ws,
    tv = Xm,
    nv = Yr,
    rv = Vs,
    iv = /[\\^$.*+?()[\]{}|]/g,
    av = /^\[object .+?Constructor\]$/,
    ov = Function.prototype,
    sv = Object.prototype,
    uv = ov.toString,
    cv = sv.hasOwnProperty,
    lv = RegExp(
      '^' +
        uv
          .call(cv)
          .replace(iv, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    )
  function fv(e) {
    if (!nv(e) || tv(e)) return !1
    var t = ev(e) ? lv : av
    return t.test(rv(e))
  }
  var pv = fv
  function dv(e, t) {
    return e == null ? void 0 : e[t]
  }
  var hv = dv,
    mv = pv,
    vv = hv
  function Dv(e, t) {
    var n = vv(e, t)
    return mv(n) ? n : void 0
  }
  var _n = Dv,
    Ev = _n,
    yv = qt,
    Cv = Ev(yv, 'Map'),
    na = Cv,
    Av = _n,
    Sv = Av(Object, 'create'),
    zr = Sv,
    Gs = zr
  function Tv() {
    ;(this.__data__ = Gs ? Gs(null) : {}), (this.size = 0)
  }
  var gv = Tv
  function Lv(e) {
    var t = this.has(e) && delete this.__data__[e]
    return (this.size -= t ? 1 : 0), t
  }
  var Rv = Lv,
    Uv = zr,
    Ov = '__lodash_hash_undefined__',
    Nv = Object.prototype,
    _v = Nv.hasOwnProperty
  function Iv(e) {
    var t = this.__data__
    if (Uv) {
      var n = t[e]
      return n === Ov ? void 0 : n
    }
    return _v.call(t, e) ? t[e] : void 0
  }
  var Bv = Iv,
    Fv = zr,
    Mv = Object.prototype,
    bv = Mv.hasOwnProperty
  function Pv(e) {
    var t = this.__data__
    return Fv ? t[e] !== void 0 : bv.call(t, e)
  }
  var kv = Pv,
    xv = zr,
    wv = '__lodash_hash_undefined__'
  function jv(e, t) {
    var n = this.__data__
    return (this.size += this.has(e) ? 0 : 1), (n[e] = xv && t === void 0 ? wv : t), this
  }
  var Vv = jv,
    Gv = gv,
    Kv = Rv,
    Wv = Bv,
    Jv = kv,
    qv = Vv
  function In(e) {
    var t = -1,
      n = e == null ? 0 : e.length
    for (this.clear(); ++t < n; ) {
      var r = e[t]
      this.set(r[0], r[1])
    }
  }
  ;(In.prototype.clear = Gv),
    (In.prototype.delete = Kv),
    (In.prototype.get = Wv),
    (In.prototype.has = Jv),
    (In.prototype.set = qv)
  var Hv = In,
    Ks = Hv,
    Yv = Hr,
    zv = na
  function Xv() {
    ;(this.size = 0), (this.__data__ = { hash: new Ks(), map: new (zv || Yv)(), string: new Ks() })
  }
  var Zv = Xv
  function Qv(e) {
    var t = typeof e
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null
  }
  var $v = Qv,
    eD = $v
  function tD(e, t) {
    var n = e.__data__
    return eD(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map
  }
  var Xr = tD,
    nD = Xr
  function rD(e) {
    var t = nD(this, e).delete(e)
    return (this.size -= t ? 1 : 0), t
  }
  var iD = rD,
    aD = Xr
  function oD(e) {
    return aD(this, e).get(e)
  }
  var sD = oD,
    uD = Xr
  function cD(e) {
    return uD(this, e).has(e)
  }
  var lD = cD,
    fD = Xr
  function pD(e, t) {
    var n = fD(this, e),
      r = n.size
    return n.set(e, t), (this.size += n.size == r ? 0 : 1), this
  }
  var dD = pD,
    hD = Zv,
    mD = iD,
    vD = sD,
    DD = lD,
    ED = dD
  function Bn(e) {
    var t = -1,
      n = e == null ? 0 : e.length
    for (this.clear(); ++t < n; ) {
      var r = e[t]
      this.set(r[0], r[1])
    }
  }
  ;(Bn.prototype.clear = hD),
    (Bn.prototype.delete = mD),
    (Bn.prototype.get = vD),
    (Bn.prototype.has = DD),
    (Bn.prototype.set = ED)
  var ra = Bn,
    yD = Hr,
    CD = na,
    AD = ra,
    SD = 200
  function TD(e, t) {
    var n = this.__data__
    if (n instanceof yD) {
      var r = n.__data__
      if (!CD || r.length < SD - 1) return r.push([e, t]), (this.size = ++n.size), this
      n = this.__data__ = new AD(r)
    }
    return n.set(e, t), (this.size = n.size), this
  }
  var gD = TD,
    LD = Hr,
    RD = Im,
    UD = Fm,
    OD = bm,
    ND = km,
    _D = gD
  function Fn(e) {
    var t = (this.__data__ = new LD(e))
    this.size = t.size
  }
  ;(Fn.prototype.clear = RD),
    (Fn.prototype.delete = UD),
    (Fn.prototype.get = OD),
    (Fn.prototype.has = ND),
    (Fn.prototype.set = _D)
  var Ws = Fn,
    ID = '__lodash_hash_undefined__'
  function BD(e) {
    return this.__data__.set(e, ID), this
  }
  var FD = BD
  function MD(e) {
    return this.__data__.has(e)
  }
  var bD = MD,
    PD = ra,
    kD = FD,
    xD = bD
  function Zr(e) {
    var t = -1,
      n = e == null ? 0 : e.length
    for (this.__data__ = new PD(); ++t < n; ) this.add(e[t])
  }
  ;(Zr.prototype.add = Zr.prototype.push = kD), (Zr.prototype.has = xD)
  var wD = Zr
  function jD(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return !0
    return !1
  }
  var VD = jD
  function GD(e, t) {
    return e.has(t)
  }
  var KD = GD,
    WD = wD,
    JD = VD,
    qD = KD,
    HD = 1,
    YD = 2
  function zD(e, t, n, r, i, a) {
    var o = n & HD,
      s = e.length,
      u = t.length
    if (s != u && !(o && u > s)) return !1
    var c = a.get(e),
      p = a.get(t)
    if (c && p) return c == t && p == e
    var f = -1,
      m = !0,
      C = n & YD ? new WD() : void 0
    for (a.set(e, t), a.set(t, e); ++f < s; ) {
      var A = e[f],
        l = t[f]
      if (r) var T = o ? r(l, A, f, t, e, a) : r(A, l, f, e, t, a)
      if (T !== void 0) {
        if (T) continue
        m = !1
        break
      }
      if (C) {
        if (
          !JD(t, function (E, R) {
            if (!qD(C, R) && (A === E || i(A, E, n, r, a))) return C.push(R)
          })
        ) {
          m = !1
          break
        }
      } else if (!(A === l || i(A, l, n, r, a))) {
        m = !1
        break
      }
    }
    return a.delete(e), a.delete(t), m
  }
  var Js = zD,
    XD = qt,
    ZD = XD.Uint8Array,
    QD = ZD
  function $D(e) {
    var t = -1,
      n = Array(e.size)
    return (
      e.forEach(function (r, i) {
        n[++t] = [i, r]
      }),
      n
    )
  }
  var eE = $D
  function tE(e) {
    var t = -1,
      n = Array(e.size)
    return (
      e.forEach(function (r) {
        n[++t] = r
      }),
      n
    )
  }
  var nE = tE,
    qs = Gr,
    Hs = QD,
    rE = xs,
    iE = Js,
    aE = eE,
    oE = nE,
    sE = 1,
    uE = 2,
    cE = '[object Boolean]',
    lE = '[object Date]',
    fE = '[object Error]',
    pE = '[object Map]',
    dE = '[object Number]',
    hE = '[object RegExp]',
    mE = '[object Set]',
    vE = '[object String]',
    DE = '[object Symbol]',
    EE = '[object ArrayBuffer]',
    yE = '[object DataView]',
    Ys = qs ? qs.prototype : void 0,
    ia = Ys ? Ys.valueOf : void 0
  function CE(e, t, n, r, i, a, o) {
    switch (n) {
      case yE:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1
        ;(e = e.buffer), (t = t.buffer)
      case EE:
        return !(e.byteLength != t.byteLength || !a(new Hs(e), new Hs(t)))
      case cE:
      case lE:
      case dE:
        return rE(+e, +t)
      case fE:
        return e.name == t.name && e.message == t.message
      case hE:
      case vE:
        return e == t + ''
      case pE:
        var s = aE
      case mE:
        var u = r & sE
        if ((s || (s = oE), e.size != t.size && !u)) return !1
        var c = o.get(e)
        if (c) return c == t
        ;(r |= uE), o.set(e, t)
        var p = iE(s(e), s(t), r, i, a, o)
        return o.delete(e), p
      case DE:
        if (ia) return ia.call(e) == ia.call(t)
    }
    return !1
  }
  var AE = CE
  function SE(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n]
    return e
  }
  var TE = SE,
    gE = TE,
    LE = Nt
  function RE(e, t, n) {
    var r = t(e)
    return LE(e) ? r : gE(r, n(e))
  }
  var UE = RE
  function OE(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r; ) {
      var o = e[n]
      t(o, n, e) && (a[i++] = o)
    }
    return a
  }
  var NE = OE
  function _E() {
    return []
  }
  var IE = _E,
    BE = NE,
    FE = IE,
    ME = Object.prototype,
    bE = ME.propertyIsEnumerable,
    zs = Object.getOwnPropertySymbols,
    PE = zs
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              BE(zs(e), function (t) {
                return bE.call(e, t)
              }))
        }
      : FE,
    kE = PE
  function xE(e, t) {
    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n)
    return r
  }
  var wE = xE,
    jE = Sn,
    VE = Tn,
    GE = '[object Arguments]'
  function KE(e) {
    return VE(e) && jE(e) == GE
  }
  var WE = KE,
    Xs = WE,
    JE = Tn,
    Zs = Object.prototype,
    qE = Zs.hasOwnProperty,
    HE = Zs.propertyIsEnumerable,
    YE = Xs(
      (function () {
        return arguments
      })()
    )
      ? Xs
      : function (e) {
          return JE(e) && qE.call(e, 'callee') && !HE.call(e, 'callee')
        },
    Qs = YE,
    ur = {},
    zE = {
      get exports() {
        return ur
      },
      set exports(e) {
        ur = e
      }
    }
  function XE() {
    return !1
  }
  var ZE = XE
  ;(function (e, t) {
    var n = qt,
      r = ZE,
      i = t && !t.nodeType && t,
      a = i && !0 && e && !e.nodeType && e,
      o = a && a.exports === i,
      s = o ? n.Buffer : void 0,
      u = s ? s.isBuffer : void 0,
      c = u || r
    e.exports = c
  })(zE, ur)
  var QE = 9007199254740991,
    $E = /^(?:0|[1-9]\d*)$/
  function e0(e, t) {
    var n = typeof e
    return (
      (t = t ?? QE),
      !!t && (n == 'number' || (n != 'symbol' && $E.test(e))) && e > -1 && e % 1 == 0 && e < t
    )
  }
  var $s = e0,
    t0 = 9007199254740991
  function n0(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= t0
  }
  var aa = n0,
    r0 = Sn,
    i0 = aa,
    a0 = Tn,
    o0 = '[object Arguments]',
    s0 = '[object Array]',
    u0 = '[object Boolean]',
    c0 = '[object Date]',
    l0 = '[object Error]',
    f0 = '[object Function]',
    p0 = '[object Map]',
    d0 = '[object Number]',
    h0 = '[object Object]',
    m0 = '[object RegExp]',
    v0 = '[object Set]',
    D0 = '[object String]',
    E0 = '[object WeakMap]',
    y0 = '[object ArrayBuffer]',
    C0 = '[object DataView]',
    A0 = '[object Float32Array]',
    S0 = '[object Float64Array]',
    T0 = '[object Int8Array]',
    g0 = '[object Int16Array]',
    L0 = '[object Int32Array]',
    R0 = '[object Uint8Array]',
    U0 = '[object Uint8ClampedArray]',
    O0 = '[object Uint16Array]',
    N0 = '[object Uint32Array]',
    me = {}
  ;(me[A0] = me[S0] = me[T0] = me[g0] = me[L0] = me[R0] = me[U0] = me[O0] = me[N0] = !0),
    (me[o0] =
      me[s0] =
      me[y0] =
      me[u0] =
      me[C0] =
      me[c0] =
      me[l0] =
      me[f0] =
      me[p0] =
      me[d0] =
      me[h0] =
      me[m0] =
      me[v0] =
      me[D0] =
      me[E0] =
        !1)
  function _0(e) {
    return a0(e) && i0(e.length) && !!me[r0(e)]
  }
  var I0 = _0
  function B0(e) {
    return function (t) {
      return e(t)
    }
  }
  var F0 = B0,
    Qr = {},
    M0 = {
      get exports() {
        return Qr
      },
      set exports(e) {
        Qr = e
      }
    }
  ;(function (e, t) {
    var n = zo,
      r = t && !t.nodeType && t,
      i = r && !0 && e && !e.nodeType && e,
      a = i && i.exports === r,
      o = a && n.process,
      s = (function () {
        try {
          var u = i && i.require && i.require('util').types
          return u || (o && o.binding && o.binding('util'))
        } catch {}
      })()
    e.exports = s
  })(M0, Qr)
  var b0 = I0,
    P0 = F0,
    eu = Qr,
    tu = eu && eu.isTypedArray,
    k0 = tu ? P0(tu) : b0,
    nu = k0,
    x0 = wE,
    w0 = Qs,
    j0 = Nt,
    V0 = ur,
    G0 = $s,
    K0 = nu,
    W0 = Object.prototype,
    J0 = W0.hasOwnProperty
  function q0(e, t) {
    var n = j0(e),
      r = !n && w0(e),
      i = !n && !r && V0(e),
      a = !n && !r && !i && K0(e),
      o = n || r || i || a,
      s = o ? x0(e.length, String) : [],
      u = s.length
    for (var c in e)
      (t || J0.call(e, c)) &&
        !(
          o &&
          (c == 'length' ||
            (i && (c == 'offset' || c == 'parent')) ||
            (a && (c == 'buffer' || c == 'byteLength' || c == 'byteOffset')) ||
            G0(c, u))
        ) &&
        s.push(c)
    return s
  }
  var H0 = q0,
    Y0 = Object.prototype
  function z0(e) {
    var t = e && e.constructor,
      n = (typeof t == 'function' && t.prototype) || Y0
    return e === n
  }
  var X0 = z0
  function Z0(e, t) {
    return function (n) {
      return e(t(n))
    }
  }
  var Q0 = Z0,
    $0 = Q0,
    e1 = $0(Object.keys, Object),
    t1 = e1,
    n1 = X0,
    r1 = t1,
    i1 = Object.prototype,
    a1 = i1.hasOwnProperty
  function o1(e) {
    if (!n1(e)) return r1(e)
    var t = []
    for (var n in Object(e)) a1.call(e, n) && n != 'constructor' && t.push(n)
    return t
  }
  var s1 = o1,
    u1 = ws,
    c1 = aa
  function l1(e) {
    return e != null && c1(e.length) && !u1(e)
  }
  var $r = l1,
    f1 = H0,
    p1 = s1,
    d1 = $r
  function h1(e) {
    return d1(e) ? f1(e) : p1(e)
  }
  var Mn = h1,
    m1 = UE,
    v1 = kE,
    D1 = Mn
  function E1(e) {
    return m1(e, D1, v1)
  }
  var y1 = E1,
    ru = y1,
    C1 = 1,
    A1 = Object.prototype,
    S1 = A1.hasOwnProperty
  function T1(e, t, n, r, i, a) {
    var o = n & C1,
      s = ru(e),
      u = s.length,
      c = ru(t),
      p = c.length
    if (u != p && !o) return !1
    for (var f = u; f--; ) {
      var m = s[f]
      if (!(o ? m in t : S1.call(t, m))) return !1
    }
    var C = a.get(e),
      A = a.get(t)
    if (C && A) return C == t && A == e
    var l = !0
    a.set(e, t), a.set(t, e)
    for (var T = o; ++f < u; ) {
      m = s[f]
      var E = e[m],
        R = t[m]
      if (r) var U = o ? r(R, E, m, t, e, a) : r(E, R, m, e, t, a)
      if (!(U === void 0 ? E === R || i(E, R, n, r, a) : U)) {
        l = !1
        break
      }
      T || (T = m == 'constructor')
    }
    if (l && !T) {
      var j = e.constructor,
        Ne = t.constructor
      j != Ne &&
        'constructor' in e &&
        'constructor' in t &&
        !(
          typeof j == 'function' &&
          j instanceof j &&
          typeof Ne == 'function' &&
          Ne instanceof Ne
        ) &&
        (l = !1)
    }
    return a.delete(e), a.delete(t), l
  }
  var g1 = T1,
    L1 = _n,
    R1 = qt,
    U1 = L1(R1, 'DataView'),
    O1 = U1,
    N1 = _n,
    _1 = qt,
    I1 = N1(_1, 'Promise'),
    B1 = I1,
    F1 = _n,
    M1 = qt,
    b1 = F1(M1, 'Set'),
    P1 = b1,
    k1 = _n,
    x1 = qt,
    w1 = k1(x1, 'WeakMap'),
    j1 = w1,
    oa = O1,
    sa = na,
    ua = B1,
    ca = P1,
    la = j1,
    iu = Sn,
    bn = Vs,
    au = '[object Map]',
    V1 = '[object Object]',
    ou = '[object Promise]',
    su = '[object Set]',
    uu = '[object WeakMap]',
    cu = '[object DataView]',
    G1 = bn(oa),
    K1 = bn(sa),
    W1 = bn(ua),
    J1 = bn(ca),
    q1 = bn(la),
    vn = iu
  ;((oa && vn(new oa(new ArrayBuffer(1))) != cu) ||
    (sa && vn(new sa()) != au) ||
    (ua && vn(ua.resolve()) != ou) ||
    (ca && vn(new ca()) != su) ||
    (la && vn(new la()) != uu)) &&
    (vn = function (e) {
      var t = iu(e),
        n = t == V1 ? e.constructor : void 0,
        r = n ? bn(n) : ''
      if (r)
        switch (r) {
          case G1:
            return cu
          case K1:
            return au
          case W1:
            return ou
          case J1:
            return su
          case q1:
            return uu
        }
      return t
    })
  var H1 = vn,
    fa = Ws,
    Y1 = Js,
    z1 = AE,
    X1 = g1,
    lu = H1,
    fu = Nt,
    pu = ur,
    Z1 = nu,
    Q1 = 1,
    du = '[object Arguments]',
    hu = '[object Array]',
    ei = '[object Object]',
    $1 = Object.prototype,
    mu = $1.hasOwnProperty
  function ey(e, t, n, r, i, a) {
    var o = fu(e),
      s = fu(t),
      u = o ? hu : lu(e),
      c = s ? hu : lu(t)
    ;(u = u == du ? ei : u), (c = c == du ? ei : c)
    var p = u == ei,
      f = c == ei,
      m = u == c
    if (m && pu(e)) {
      if (!pu(t)) return !1
      ;(o = !0), (p = !1)
    }
    if (m && !p)
      return a || (a = new fa()), o || Z1(e) ? Y1(e, t, n, r, i, a) : z1(e, t, u, n, r, i, a)
    if (!(n & Q1)) {
      var C = p && mu.call(e, '__wrapped__'),
        A = f && mu.call(t, '__wrapped__')
      if (C || A) {
        var l = C ? e.value() : e,
          T = A ? t.value() : t
        return a || (a = new fa()), i(l, T, n, r, a)
      }
    }
    return m ? (a || (a = new fa()), X1(e, t, n, r, i, a)) : !1
  }
  var ty = ey,
    ny = ty,
    vu = Tn
  function Du(e, t, n, r, i) {
    return e === t
      ? !0
      : e == null || t == null || (!vu(e) && !vu(t))
      ? e !== e && t !== t
      : ny(e, t, n, r, Du, i)
  }
  var Eu = Du,
    ry = Ws,
    iy = Eu,
    ay = 1,
    oy = 2
  function sy(e, t, n, r) {
    var i = n.length,
      a = i,
      o = !r
    if (e == null) return !a
    for (e = Object(e); i--; ) {
      var s = n[i]
      if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
    }
    for (; ++i < a; ) {
      s = n[i]
      var u = s[0],
        c = e[u],
        p = s[1]
      if (o && s[2]) {
        if (c === void 0 && !(u in e)) return !1
      } else {
        var f = new ry()
        if (r) var m = r(c, p, u, e, t, f)
        if (!(m === void 0 ? iy(p, c, ay | oy, r, f) : m)) return !1
      }
    }
    return !0
  }
  var uy = sy,
    cy = Yr
  function ly(e) {
    return e === e && !cy(e)
  }
  var yu = ly,
    fy = yu,
    py = Mn
  function dy(e) {
    for (var t = py(e), n = t.length; n--; ) {
      var r = t[n],
        i = e[r]
      t[n] = [r, i, fy(i)]
    }
    return t
  }
  var hy = dy
  function my(e, t) {
    return function (n) {
      return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n))
    }
  }
  var Cu = my,
    vy = uy,
    Dy = hy,
    Ey = Cu
  function yy(e) {
    var t = Dy(e)
    return t.length == 1 && t[0][2]
      ? Ey(t[0][0], t[0][1])
      : function (n) {
          return n === e || vy(n, e, t)
        }
  }
  var Cy = yy,
    Ay = Nt,
    Sy = Kr,
    Ty = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    gy = /^\w*$/
  function Ly(e, t) {
    if (Ay(e)) return !1
    var n = typeof e
    return n == 'number' || n == 'symbol' || n == 'boolean' || e == null || Sy(e)
      ? !0
      : gy.test(e) || !Ty.test(e) || (t != null && e in Object(t))
  }
  var pa = Ly,
    Au = ra,
    Ry = 'Expected a function'
  function da(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function')) throw new TypeError(Ry)
    var n = function () {
      var r = arguments,
        i = t ? t.apply(this, r) : r[0],
        a = n.cache
      if (a.has(i)) return a.get(i)
      var o = e.apply(this, r)
      return (n.cache = a.set(i, o) || a), o
    }
    return (n.cache = new (da.Cache || Au)()), n
  }
  da.Cache = Au
  var Uy = da,
    Oy = Uy,
    Ny = 500
  function _y(e) {
    var t = Oy(e, function (r) {
        return n.size === Ny && n.clear(), r
      }),
      n = t.cache
    return t
  }
  var Iy = _y,
    By = Iy,
    Fy =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    My = /\\(\\)?/g,
    by = By(function (e) {
      var t = []
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(Fy, function (n, r, i, a) {
          t.push(i ? a.replace(My, '$1') : r || n)
        }),
        t
      )
    }),
    Py = by,
    ky = Nt,
    xy = pa,
    wy = Py,
    jy = sr
  function Vy(e, t) {
    return ky(e) ? e : xy(e, t) ? [e] : wy(jy(e))
  }
  var Su = Vy,
    Gy = Kr,
    Ky = 1 / 0
  function Wy(e) {
    if (typeof e == 'string' || Gy(e)) return e
    var t = e + ''
    return t == '0' && 1 / e == -Ky ? '-0' : t
  }
  var ti = Wy,
    Jy = Su,
    qy = ti
  function Hy(e, t) {
    t = Jy(t, e)
    for (var n = 0, r = t.length; e != null && n < r; ) e = e[qy(t[n++])]
    return n && n == r ? e : void 0
  }
  var Tu = Hy,
    Yy = Tu
  function zy(e, t, n) {
    var r = e == null ? void 0 : Yy(e, t)
    return r === void 0 ? n : r
  }
  var Xy = zy
  function Zy(e, t) {
    return e != null && t in Object(e)
  }
  var Qy = Zy,
    $y = Su,
    eC = Qs,
    tC = Nt,
    nC = $s,
    rC = aa,
    iC = ti
  function aC(e, t, n) {
    t = $y(t, e)
    for (var r = -1, i = t.length, a = !1; ++r < i; ) {
      var o = iC(t[r])
      if (!(a = e != null && n(e, o))) break
      e = e[o]
    }
    return a || ++r != i
      ? a
      : ((i = e == null ? 0 : e.length), !!i && rC(i) && nC(o, i) && (tC(e) || eC(e)))
  }
  var oC = aC,
    sC = Qy,
    uC = oC
  function cC(e, t) {
    return e != null && uC(e, t, sC)
  }
  var lC = cC,
    fC = Eu,
    pC = Xy,
    dC = lC,
    hC = pa,
    mC = yu,
    vC = Cu,
    DC = ti,
    EC = 1,
    yC = 2
  function CC(e, t) {
    return hC(e) && mC(t)
      ? vC(DC(e), t)
      : function (n) {
          var r = pC(n, e)
          return r === void 0 && r === t ? dC(n, e) : fC(t, r, EC | yC)
        }
  }
  var AC = CC
  function SC(e) {
    return e
  }
  var gu = SC
  function TC(e) {
    return function (t) {
      return t == null ? void 0 : t[e]
    }
  }
  var gC = TC,
    LC = Tu
  function RC(e) {
    return function (t) {
      return LC(t, e)
    }
  }
  var UC = RC,
    OC = gC,
    NC = UC,
    _C = pa,
    IC = ti
  function BC(e) {
    return _C(e) ? OC(IC(e)) : NC(e)
  }
  var FC = BC,
    MC = Cy,
    bC = AC,
    PC = gu,
    kC = Nt,
    xC = FC
  function wC(e) {
    return typeof e == 'function'
      ? e
      : e == null
      ? PC
      : typeof e == 'object'
      ? kC(e)
        ? bC(e[0], e[1])
        : MC(e)
      : xC(e)
  }
  var ha = wC,
    jC = ha,
    VC = $r,
    GC = Mn
  function KC(e) {
    return function (t, n, r) {
      var i = Object(t)
      if (!VC(t)) {
        var a = jC(n)
        ;(t = GC(t)),
          (n = function (s) {
            return a(i[s], s, i)
          })
      }
      var o = e(t, n, r)
      return o > -1 ? i[a ? t[o] : o] : void 0
    }
  }
  var WC = KC
  function JC(e, t, n, r) {
    for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i; ) if (t(e[a], a, e)) return a
    return -1
  }
  var ma = JC,
    qC = /\s/
  function HC(e) {
    for (var t = e.length; t-- && qC.test(e.charAt(t)); );
    return t
  }
  var YC = HC,
    zC = YC,
    XC = /^\s+/
  function ZC(e) {
    return e && e.slice(0, zC(e) + 1).replace(XC, '')
  }
  var QC = ZC,
    $C = QC,
    Lu = Yr,
    e2 = Kr,
    Ru = 0 / 0,
    t2 = /^[-+]0x[0-9a-f]+$/i,
    n2 = /^0b[01]+$/i,
    r2 = /^0o[0-7]+$/i,
    i2 = parseInt
  function a2(e) {
    if (typeof e == 'number') return e
    if (e2(e)) return Ru
    if (Lu(e)) {
      var t = typeof e.valueOf == 'function' ? e.valueOf() : e
      e = Lu(t) ? t + '' : t
    }
    if (typeof e != 'string') return e === 0 ? e : +e
    e = $C(e)
    var n = n2.test(e)
    return n || r2.test(e) ? i2(e.slice(2), n ? 2 : 8) : t2.test(e) ? Ru : +e
  }
  var o2 = a2,
    s2 = o2,
    Uu = 1 / 0,
    u2 = 17976931348623157e292
  function c2(e) {
    if (!e) return e === 0 ? e : 0
    if (((e = s2(e)), e === Uu || e === -Uu)) {
      var t = e < 0 ? -1 : 1
      return t * u2
    }
    return e === e ? e : 0
  }
  var l2 = c2,
    f2 = l2
  function p2(e) {
    var t = f2(e),
      n = t % 1
    return t === t ? (n ? t - n : t) : 0
  }
  var va = p2,
    d2 = ma,
    h2 = ha,
    m2 = va,
    v2 = Math.max,
    D2 = Math.min
  function E2(e, t, n) {
    var r = e == null ? 0 : e.length
    if (!r) return -1
    var i = r - 1
    return (
      n !== void 0 && ((i = m2(n)), (i = n < 0 ? v2(r + i, 0) : D2(i, r - 1))), d2(e, h2(t), i, !0)
    )
  }
  var Ou = E2,
    y2 = WC,
    C2 = Ou,
    A2 = y2(C2),
    S2 = A2
  const T2 = S2
  function g2(e, t) {
    let n,
      r,
      i,
      a = e.length
    for (r = 0; a; )
      (n = a >>> 1),
        (i = r + n),
        e[i].startOffset > t.startOffset ? (a = n) : ((r = i + 1), (a -= n + 1))
    return r
  }
  function Nu(e) {
    return e.image.match(/(\/\/(\s*)prettier-ignore(\s*))|(\/\*(\s*)prettier-ignore(\s*)\*\/)/gm)
  }
  function L2(e) {
    return e.image.match(
      /(\/\/(\s*)@formatter:(off|on)(\s*))|(\/\*(\s*)@formatter:(off|on)(\s*)\*\/)/gm
    )
  }
  function R2(e, t, n) {
    e.forEach(r => {
      t[r.startOffset] === void 0 && (t[r.startOffset] = r),
        n[r.endOffset] === void 0 && (n[r.endOffset] = r)
    })
  }
  function U2(e, t) {
    let n
    e.forEach(r => {
      n = g2(t, r)
      const i = n - 1 < 0 ? r.startOffset : t[n - 1].endOffset,
        a = n == t.length ? r.endOffset : t[n].startOffset
      r.extendedOffset = { startOffset: i, endOffset: a }
    })
  }
  function O2(e) {
    const t = {},
      n = {}
    return (
      e.forEach(r => {
        const i = r.extendedOffset.startOffset,
          a = r.extendedOffset.endOffset
        t[a] === void 0 ? (t[a] = [r]) : t[a].push(r), n[i] === void 0 ? (n[i] = [r]) : n[i].push(r)
      }),
      { commentsByExtendedEndOffset: t, commentsByExtendedStartOffset: n }
    )
  }
  function N2(e, t, n) {
    if (Nu(e)) return !1
    const r = n[e.extendedOffset.endOffset]
    if (r === void 0) return !0
    const i = t.location !== void 0 ? t.location.endLine : t.endLine
    if (e.startLine !== i) return !1
    const a = r.location !== void 0 ? r.location.startLine : r.startLine
    return e.endLine !== a
  }
  function _2(e, t, n, r) {
    if (e.length === 0) {
      n[NaN].leadingComments = t
      return
    }
    R2(e, n, r), U2(t, e)
    const { commentsByExtendedStartOffset: i, commentsByExtendedEndOffset: a } = O2(t),
      o = new Set(t)
    Object.keys(r).forEach(s => {
      if (i[s] !== void 0) {
        const u = i[s].filter(c => N2(c, r[s], n) && o.has(c))
        u.length > 0 && (r[s].trailingComments = u),
          u.forEach(c => {
            o.delete(c)
          })
      }
    }),
      Object.keys(n).forEach(s => {
        if (a[s] !== void 0) {
          const u = a[s].filter(c => o.has(c))
          u.length > 0 && (n[s].leadingComments = u)
          for (let c = 0; c < u.length; c++)
            if (Nu(u[c])) {
              n[s].ignore = !0
              break
            }
        }
      })
  }
  function I2(e) {
    const t = e.filter(o => L2(o))
    let n = !1,
      r = !0
    const i = []
    let a = {}
    return (
      t.forEach(o => {
        ;(r = o.image.slice(-3) === 'off'),
          n ? r || ((a.on = o), i.push(a), (a = {})) : r && (a.off = o),
          (n = r)
      }),
      t.length > 0 && r && ((a.on = void 0), i.push(a)),
      i
    )
  }
  function B2(e, t) {
    const n = T2(t, r => r.off.endOffset < e.location.startOffset)
    n !== void 0 && (n.on === void 0 || n.on.startOffset > e.location.endOffset) && (e.ignore = !0)
  }
  var _u = { matchFormatterOffOnPairs: I2, shouldNotFormat: B2, attachComments: _2 }
  const { Parser: F2, isRecognitionException: M2 } = Ot,
    { allTokens: b2, tokens: Pt } = bs,
    P2 = Ph,
    k2 = wh,
    x2 = Vh,
    w2 = Jh,
    j2 = Yh,
    V2 = Xh,
    G2 = $h,
    K2 = tm,
    Iu = im,
    { getSkipValidations: W2 } = Ps,
    { shouldNotFormat: J2 } = _u
  var q2 = class extends F2 {
    constructor() {
      super(b2, { maxLookahead: 1, nodeLocationTracking: 'full', skipValidations: W2() })
      const t = this
      ;(this.mostEnclosiveCstNodeByStartOffset = {}),
        (this.mostEnclosiveCstNodeByEndOffset = {}),
        t.RULE('typeIdentifier', () => {
          t.CONSUME(Pt.Identifier)
        }),
        P2.defineRules.call(this, t, Pt),
        k2.defineRules.call(this, t, Pt),
        x2.defineRules.call(this, t, Pt),
        j2.defineRules.call(this, t, Pt),
        w2.defineRules.call(this, t, Pt),
        V2.defineRules.call(this, t, Pt),
        G2.defineRules.call(this, t, Pt),
        K2.defineRules.call(this, t, Pt),
        Iu.defineRules.call(this, t, Pt),
        (this.firstForUnaryExpressionNotPlusMinus = []),
        this.performSelfAnalysis(),
        (this.firstForUnaryExpressionNotPlusMinus =
          Iu.computeFirstForUnaryExpressionNotPlusMinus.call(this))
    }
    cstPostNonTerminal(t, n) {
      super.cstPostNonTerminal(t, n),
        this.isBackTracking() === !1 &&
          ((this.mostEnclosiveCstNodeByStartOffset[t.location.startOffset] = t),
          (this.mostEnclosiveCstNodeByEndOffset[t.location.endOffset] = t),
          J2(t, this.onOffCommentPairs))
    }
    BACKTRACK_LOOKAHEAD(t, n = !1) {
      return this.ACTION(() => {
        this.isBackTrackingStack.push(1)
        const r = this.saveRecogState()
        try {
          return (this.outputCst = !1), t.call(this)
        } catch (i) {
          if (M2(i)) return n
          throw i
        } finally {
          ;(this.outputCst = !0), this.reloadRecogState(r), this.isBackTrackingStack.pop()
        }
      })
    }
    setOnOffCommentPairs(t) {
      this.onOffCommentPairs = t
    }
  }
  const H2 = Mh,
    Y2 = q2,
    { attachComments: z2, matchFormatterOffOnPairs: X2 } = _u,
    _t = new Y2(),
    Z2 = _t.getBaseCstVisitorConstructor(),
    Q2 = _t.getBaseCstVisitorConstructorWithDefaults()
  function $2(e, t = 'compilationUnit') {
    const n = H2.tokenize(e)
    if (n.errors.length > 0) {
      const i = n.errors[0]
      throw Error(
        'Sad sad panda, lexing errors detected in line: ' +
          i.line +
          ', column: ' +
          i.column +
          `!
` +
          i.message
      )
    }
    ;(_t.input = n.tokens),
      (_t.mostEnclosiveCstNodeByStartOffset = {}),
      (_t.mostEnclosiveCstNodeByEndOffset = {}),
      _t.setOnOffCommentPairs(X2(n.groups.comments))
    const r = _t[t]()
    if (_t.errors.length > 0) {
      const i = _t.errors[0]
      throw Error(
        'Sad sad panda, parsing errors detected in line: ' +
          i.token.startLine +
          ', column: ' +
          i.token.startColumn +
          `!
` +
          i.message +
          `!
	->` +
          i.context.ruleStack.join(`
	->`)
      )
    }
    return (
      z2(
        n.tokens,
        n.groups.comments,
        _t.mostEnclosiveCstNodeByStartOffset,
        _t.mostEnclosiveCstNodeByEndOffset
      ),
      r
    )
  }
  var Bu = { parse: $2, BaseJavaCstVisitor: Z2, BaseJavaCstVisitorWithDefaults: Q2 },
    eA = Bu
  function tA(e, t, n) {
    var r = eA.parse(e, n.entrypoint)
    return r
  }
  var nA = tA,
    ni = {},
    ct = {},
    Oe = {},
    yt = {},
    rA = {
      get exports() {
        return yt
      },
      set exports(e) {
        yt = e
      }
    }
  ;(function (e, t) {
    ;(function (n) {
      e.exports = n()
    })(function () {
      var n = Object.getOwnPropertyNames,
        r = (a, o) =>
          function () {
            return o || (0, a[n(a)[0]])((o = { exports: {} }).exports, o), o.exports
          },
        i = r({
          'dist/_doc.js.umd.js'(a, o) {
            var s = Object.create,
              u = Object.defineProperty,
              c = Object.getOwnPropertyDescriptor,
              p = Object.getOwnPropertyNames,
              f = Object.getPrototypeOf,
              m = Object.prototype.hasOwnProperty,
              C = (N, X) =>
                function () {
                  return N && (X = (0, N[p(N)[0]])((N = 0))), X
                },
              A = (N, X) =>
                function () {
                  return X || (0, N[p(N)[0]])((X = { exports: {} }).exports, X), X.exports
                },
              l = (N, X) => {
                for (var q in X) u(N, q, { get: X[q], enumerable: !0 })
              },
              T = (N, X, q, ee) => {
                if ((X && typeof X == 'object') || typeof X == 'function')
                  for (let re of p(X))
                    !m.call(N, re) &&
                      re !== q &&
                      u(N, re, { get: () => X[re], enumerable: !(ee = c(X, re)) || ee.enumerable })
                return N
              },
              E = (N, X, q) => (
                (q = N != null ? s(f(N)) : {}),
                T(X || !N || !N.__esModule ? u(q, 'default', { value: N, enumerable: !0 }) : q, N)
              ),
              R = N => T(u({}, '__esModule', { value: !0 }), N),
              U = C({ '<define:process>'() {} }),
              j = A({
                'src/document/doc-builders.js'(N, X) {
                  U()
                  function q(Z) {
                    return { type: 'concat', parts: Z }
                  }
                  function ee(Z) {
                    return { type: 'indent', contents: Z }
                  }
                  function re(Z, h) {
                    return { type: 'align', contents: h, n: Z }
                  }
                  function Ce(Z) {
                    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                    return {
                      type: 'group',
                      id: h.id,
                      contents: Z,
                      break: !!h.shouldBreak,
                      expandedStates: h.expandedStates
                    }
                  }
                  function J(Z) {
                    return re(Number.NEGATIVE_INFINITY, Z)
                  }
                  function ce(Z) {
                    return re({ type: 'root' }, Z)
                  }
                  function de(Z) {
                    return re(-1, Z)
                  }
                  function ne(Z, h) {
                    return Ce(Z[0], Object.assign(Object.assign({}, h), {}, { expandedStates: Z }))
                  }
                  function _e(Z) {
                    return { type: 'fill', parts: Z }
                  }
                  function _(Z, h) {
                    let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
                    return {
                      type: 'if-break',
                      breakContents: Z,
                      flatContents: h,
                      groupId: y.groupId
                    }
                  }
                  function fe(Z, h) {
                    return {
                      type: 'indent-if-break',
                      contents: Z,
                      groupId: h.groupId,
                      negate: h.negate
                    }
                  }
                  function De(Z) {
                    return { type: 'line-suffix', contents: Z }
                  }
                  var ie = { type: 'line-suffix-boundary' },
                    d = { type: 'break-parent' },
                    v = { type: 'trim' },
                    g = { type: 'line', hard: !0 },
                    S = { type: 'line', hard: !0, literal: !0 },
                    F = { type: 'line' },
                    L = { type: 'line', soft: !0 },
                    w = q([g, d]),
                    te = q([S, d]),
                    Ee = { type: 'cursor', placeholder: Symbol('cursor') }
                  function Ue(Z, h) {
                    const y = []
                    for (let I = 0; I < h.length; I++) I !== 0 && y.push(Z), y.push(h[I])
                    return q(y)
                  }
                  function Q(Z, h, y) {
                    let I = Z
                    if (h > 0) {
                      for (let K = 0; K < Math.floor(h / y); ++K) I = ee(I)
                      ;(I = re(h % y, I)), (I = re(Number.NEGATIVE_INFINITY, I))
                    }
                    return I
                  }
                  function oe(Z, h) {
                    return { type: 'label', label: Z, contents: h }
                  }
                  X.exports = {
                    concat: q,
                    join: Ue,
                    line: F,
                    softline: L,
                    hardline: w,
                    literalline: te,
                    group: Ce,
                    conditionalGroup: ne,
                    fill: _e,
                    lineSuffix: De,
                    lineSuffixBoundary: ie,
                    cursor: Ee,
                    breakParent: d,
                    ifBreak: _,
                    trim: v,
                    indent: ee,
                    indentIfBreak: fe,
                    align: re,
                    addAlignmentToDoc: Q,
                    markAsRoot: ce,
                    dedentToRoot: J,
                    dedent: de,
                    hardlineWithoutBreakParent: g,
                    literallineWithoutBreakParent: S,
                    label: oe
                  }
                }
              }),
              Ne = A({
                'src/common/end-of-line.js'(N, X) {
                  U()
                  function q(J) {
                    const ce = J.indexOf('\r')
                    return ce >= 0
                      ? J.charAt(ce + 1) ===
                        `
`
                        ? 'crlf'
                        : 'cr'
                      : 'lf'
                  }
                  function ee(J) {
                    switch (J) {
                      case 'cr':
                        return '\r'
                      case 'crlf':
                        return `\r
`
                      default:
                        return `
`
                    }
                  }
                  function re(J, ce) {
                    let de
                    switch (ce) {
                      case `
`:
                        de = /\n/g
                        break
                      case '\r':
                        de = /\r/g
                        break
                      case `\r
`:
                        de = /\r\n/g
                        break
                      default:
                        throw new Error(`Unexpected "eol" ${JSON.stringify(ce)}.`)
                    }
                    const ne = J.match(de)
                    return ne ? ne.length : 0
                  }
                  function Ce(J) {
                    return J.replace(
                      /\r\n?/g,
                      `
`
                    )
                  }
                  X.exports = {
                    guessEndOfLine: q,
                    convertEndOfLineToChars: ee,
                    countEndOfLineChars: re,
                    normalizeEndOfLine: Ce
                  }
                }
              }),
              Je = A({
                'src/utils/get-last.js'(N, X) {
                  U()
                  var q = ee => ee[ee.length - 1]
                  X.exports = q
                }
              })
            function Te() {
              let { onlyFirst: N = !1 } =
                arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
              const X = [
                '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
                '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
              ].join('|')
              return new RegExp(X, N ? void 0 : 'g')
            }
            var Ye = C({
              'node_modules/strip-ansi/node_modules/ansi-regex/index.js'() {
                U()
              }
            })
            function ke(N) {
              if (typeof N != 'string')
                throw new TypeError(`Expected a \`string\`, got \`${typeof N}\``)
              return N.replace(Te(), '')
            }
            var Be = C({
              'node_modules/strip-ansi/index.js'() {
                U(), Ye()
              }
            })
            function Ve(N) {
              return Number.isInteger(N)
                ? N >= 4352 &&
                    (N <= 4447 ||
                      N === 9001 ||
                      N === 9002 ||
                      (11904 <= N && N <= 12871 && N !== 12351) ||
                      (12880 <= N && N <= 19903) ||
                      (19968 <= N && N <= 42182) ||
                      (43360 <= N && N <= 43388) ||
                      (44032 <= N && N <= 55203) ||
                      (63744 <= N && N <= 64255) ||
                      (65040 <= N && N <= 65049) ||
                      (65072 <= N && N <= 65131) ||
                      (65281 <= N && N <= 65376) ||
                      (65504 <= N && N <= 65510) ||
                      (110592 <= N && N <= 110593) ||
                      (127488 <= N && N <= 127569) ||
                      (131072 <= N && N <= 262141))
                : !1
            }
            var Zt = C({
                'node_modules/is-fullwidth-code-point/index.js'() {
                  U()
                }
              }),
              Bt = A({
                'node_modules/emoji-regex/index.js'(N, X) {
                  U(),
                    (X.exports = function () {
                      return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g
                    })
                }
              }),
              pt = {}
            l(pt, { default: () => ut })
            function ut(N) {
              if (typeof N != 'string' || N.length === 0 || ((N = ke(N)), N.length === 0)) return 0
              N = N.replace((0, jt.default)(), '  ')
              let X = 0
              for (let q = 0; q < N.length; q++) {
                const ee = N.codePointAt(q)
                ee <= 31 ||
                  (ee >= 127 && ee <= 159) ||
                  (ee >= 768 && ee <= 879) ||
                  (ee > 65535 && q++, (X += Ve(ee) ? 2 : 1))
              }
              return X
            }
            var jt,
              Qt = C({
                'node_modules/string-width/index.js'() {
                  U(), Be(), Zt(), (jt = E(Bt()))
                }
              }),
              Vn = A({
                'src/utils/get-string-width.js'(N, X) {
                  U()
                  var q = (Qt(), R(pt)).default,
                    ee = /[^\x20-\x7F]/
                  function re(Ce) {
                    return Ce ? (ee.test(Ce) ? q(Ce) : Ce.length) : 0
                  }
                  X.exports = re
                }
              }),
              St = A({
                'src/document/doc-utils.js'(N, X) {
                  U()
                  var q = Je(),
                    { literalline: ee, join: re } = j(),
                    Ce = h => Array.isArray(h) || (h && h.type === 'concat'),
                    J = h => {
                      if (Array.isArray(h)) return h
                      if (h.type !== 'concat' && h.type !== 'fill')
                        throw new Error('Expect doc type to be `concat` or `fill`.')
                      return h.parts
                    },
                    ce = {}
                  function de(h, y, I, K) {
                    const x = [h]
                    for (; x.length > 0; ) {
                      const b = x.pop()
                      if (b === ce) {
                        I(x.pop())
                        continue
                      }
                      if ((I && x.push(b, ce), !y || y(b) !== !1))
                        if (Ce(b) || b.type === 'fill') {
                          const H = J(b)
                          for (let xe = H.length, Vt = xe - 1; Vt >= 0; --Vt) x.push(H[Vt])
                        } else if (b.type === 'if-break')
                          b.flatContents && x.push(b.flatContents),
                            b.breakContents && x.push(b.breakContents)
                        else if (b.type === 'group' && b.expandedStates)
                          if (K)
                            for (let H = b.expandedStates.length, xe = H - 1; xe >= 0; --xe)
                              x.push(b.expandedStates[xe])
                          else x.push(b.contents)
                        else b.contents && x.push(b.contents)
                    }
                  }
                  function ne(h, y) {
                    const I = new Map()
                    return K(h)
                    function K(b) {
                      if (I.has(b)) return I.get(b)
                      const H = x(b)
                      return I.set(b, H), H
                    }
                    function x(b) {
                      if (Array.isArray(b)) return y(b.map(K))
                      if (b.type === 'concat' || b.type === 'fill') {
                        const H = b.parts.map(K)
                        return y(Object.assign(Object.assign({}, b), {}, { parts: H }))
                      }
                      if (b.type === 'if-break') {
                        const H = b.breakContents && K(b.breakContents),
                          xe = b.flatContents && K(b.flatContents)
                        return y(
                          Object.assign(
                            Object.assign({}, b),
                            {},
                            { breakContents: H, flatContents: xe }
                          )
                        )
                      }
                      if (b.type === 'group' && b.expandedStates) {
                        const H = b.expandedStates.map(K),
                          xe = H[0]
                        return y(
                          Object.assign(
                            Object.assign({}, b),
                            {},
                            { contents: xe, expandedStates: H }
                          )
                        )
                      }
                      if (b.contents) {
                        const H = K(b.contents)
                        return y(Object.assign(Object.assign({}, b), {}, { contents: H }))
                      }
                      return y(b)
                    }
                  }
                  function _e(h, y, I) {
                    let K = I,
                      x = !1
                    function b(H) {
                      const xe = y(H)
                      if ((xe !== void 0 && ((x = !0), (K = xe)), x)) return !1
                    }
                    return de(h, b), K
                  }
                  function _(h) {
                    if (
                      (h.type === 'group' && h.break) ||
                      (h.type === 'line' && h.hard) ||
                      h.type === 'break-parent'
                    )
                      return !0
                  }
                  function fe(h) {
                    return _e(h, _, !1)
                  }
                  function De(h) {
                    if (h.length > 0) {
                      const y = q(h)
                      !y.expandedStates && !y.break && (y.break = 'propagated')
                    }
                    return null
                  }
                  function ie(h) {
                    const y = new Set(),
                      I = []
                    function K(b) {
                      if ((b.type === 'break-parent' && De(I), b.type === 'group')) {
                        if ((I.push(b), y.has(b))) return !1
                        y.add(b)
                      }
                    }
                    function x(b) {
                      b.type === 'group' && I.pop().break && De(I)
                    }
                    de(h, K, x, !0)
                  }
                  function d(h) {
                    return h.type === 'line' && !h.hard
                      ? h.soft
                        ? ''
                        : ' '
                      : h.type === 'if-break'
                      ? h.flatContents || ''
                      : h
                  }
                  function v(h) {
                    return ne(h, d)
                  }
                  var g = (h, y) =>
                    h && h.type === 'line' && h.hard && y && y.type === 'break-parent'
                  function S(h) {
                    if (!h) return h
                    if (Ce(h) || h.type === 'fill') {
                      const y = J(h)
                      for (; y.length > 1 && g(...y.slice(-2)); ) y.length -= 2
                      if (y.length > 0) {
                        const I = S(q(y))
                        y[y.length - 1] = I
                      }
                      return Array.isArray(h)
                        ? y
                        : Object.assign(Object.assign({}, h), {}, { parts: y })
                    }
                    switch (h.type) {
                      case 'align':
                      case 'indent':
                      case 'indent-if-break':
                      case 'group':
                      case 'line-suffix':
                      case 'label': {
                        const y = S(h.contents)
                        return Object.assign(Object.assign({}, h), {}, { contents: y })
                      }
                      case 'if-break': {
                        const y = S(h.breakContents),
                          I = S(h.flatContents)
                        return Object.assign(
                          Object.assign({}, h),
                          {},
                          { breakContents: y, flatContents: I }
                        )
                      }
                    }
                    return h
                  }
                  function F(h) {
                    return S(w(h))
                  }
                  function L(h) {
                    switch (h.type) {
                      case 'fill':
                        if (h.parts.every(I => I === '')) return ''
                        break
                      case 'group':
                        if (!h.contents && !h.id && !h.break && !h.expandedStates) return ''
                        if (
                          h.contents.type === 'group' &&
                          h.contents.id === h.id &&
                          h.contents.break === h.break &&
                          h.contents.expandedStates === h.expandedStates
                        )
                          return h.contents
                        break
                      case 'align':
                      case 'indent':
                      case 'indent-if-break':
                      case 'line-suffix':
                        if (!h.contents) return ''
                        break
                      case 'if-break':
                        if (!h.flatContents && !h.breakContents) return ''
                        break
                    }
                    if (!Ce(h)) return h
                    const y = []
                    for (const I of J(h)) {
                      if (!I) continue
                      const [K, ...x] = Ce(I) ? J(I) : [I]
                      typeof K == 'string' && typeof q(y) == 'string'
                        ? (y[y.length - 1] += K)
                        : y.push(K),
                        y.push(...x)
                    }
                    return y.length === 0
                      ? ''
                      : y.length === 1
                      ? y[0]
                      : Array.isArray(h)
                      ? y
                      : Object.assign(Object.assign({}, h), {}, { parts: y })
                  }
                  function w(h) {
                    return ne(h, y => L(y))
                  }
                  function te(h) {
                    const y = [],
                      I = h.filter(Boolean)
                    for (; I.length > 0; ) {
                      const K = I.shift()
                      if (K) {
                        if (Ce(K)) {
                          I.unshift(...J(K))
                          continue
                        }
                        if (y.length > 0 && typeof q(y) == 'string' && typeof K == 'string') {
                          y[y.length - 1] += K
                          continue
                        }
                        y.push(K)
                      }
                    }
                    return y
                  }
                  function Ee(h) {
                    return ne(h, y =>
                      Array.isArray(y)
                        ? te(y)
                        : y.parts
                        ? Object.assign(Object.assign({}, y), {}, { parts: te(y.parts) })
                        : y
                    )
                  }
                  function Ue(h) {
                    return ne(h, y =>
                      typeof y == 'string' &&
                      y.includes(`
`)
                        ? Q(y)
                        : y
                    )
                  }
                  function Q(h) {
                    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ee
                    return re(
                      y,
                      h.split(`
`)
                    ).parts
                  }
                  function oe(h) {
                    if (h.type === 'line') return !0
                  }
                  function Z(h) {
                    return _e(h, oe, !1)
                  }
                  X.exports = {
                    isConcat: Ce,
                    getDocParts: J,
                    willBreak: fe,
                    traverseDoc: de,
                    findInDoc: _e,
                    mapDoc: ne,
                    propagateBreaks: ie,
                    removeLines: v,
                    stripTrailingHardline: F,
                    normalizeParts: te,
                    normalizeDoc: Ee,
                    cleanDoc: w,
                    replaceTextEndOfLine: Q,
                    replaceEndOfLine: Ue,
                    canBreak: Z
                  }
                }
              }),
              Gn = A({
                'src/document/doc-printer.js'(N, X) {
                  U()
                  var { convertEndOfLineToChars: q } = Ne(),
                    ee = Je(),
                    re = Vn(),
                    { fill: Ce, cursor: J, indent: ce } = j(),
                    { isConcat: de, getDocParts: ne } = St(),
                    _e,
                    _ = 1,
                    fe = 2
                  function De() {
                    return { value: '', length: 0, queue: [] }
                  }
                  function ie(L, w) {
                    return v(L, { type: 'indent' }, w)
                  }
                  function d(L, w, te) {
                    return w === Number.NEGATIVE_INFINITY
                      ? L.root || De()
                      : w < 0
                      ? v(L, { type: 'dedent' }, te)
                      : w
                      ? w.type === 'root'
                        ? Object.assign(Object.assign({}, L), {}, { root: L })
                        : v(
                            L,
                            { type: typeof w == 'string' ? 'stringAlign' : 'numberAlign', n: w },
                            te
                          )
                      : L
                  }
                  function v(L, w, te) {
                    const Ee = w.type === 'dedent' ? L.queue.slice(0, -1) : [...L.queue, w]
                    let Ue = '',
                      Q = 0,
                      oe = 0,
                      Z = 0
                    for (const H of Ee)
                      switch (H.type) {
                        case 'indent':
                          I(), te.useTabs ? h(1) : y(te.tabWidth)
                          break
                        case 'stringAlign':
                          I(), (Ue += H.n), (Q += H.n.length)
                          break
                        case 'numberAlign':
                          ;(oe += 1), (Z += H.n)
                          break
                        default:
                          throw new Error(`Unexpected type '${H.type}'`)
                      }
                    return (
                      x(),
                      Object.assign(Object.assign({}, L), {}, { value: Ue, length: Q, queue: Ee })
                    )
                    function h(H) {
                      ;(Ue += '	'.repeat(H)), (Q += te.tabWidth * H)
                    }
                    function y(H) {
                      ;(Ue += ' '.repeat(H)), (Q += H)
                    }
                    function I() {
                      te.useTabs ? K() : x()
                    }
                    function K() {
                      oe > 0 && h(oe), b()
                    }
                    function x() {
                      Z > 0 && y(Z), b()
                    }
                    function b() {
                      ;(oe = 0), (Z = 0)
                    }
                  }
                  function g(L) {
                    if (L.length === 0) return 0
                    let w = 0
                    for (; L.length > 0 && typeof ee(L) == 'string' && /^[\t ]*$/.test(ee(L)); )
                      w += L.pop().length
                    if (L.length > 0 && typeof ee(L) == 'string') {
                      const te = ee(L).replace(/[\t ]*$/, '')
                      ;(w += ee(L).length - te.length), (L[L.length - 1] = te)
                    }
                    return w
                  }
                  function S(L, w, te, Ee, Ue) {
                    let Q = w.length
                    const oe = [L],
                      Z = []
                    for (; te >= 0; ) {
                      if (oe.length === 0) {
                        if (Q === 0) return !0
                        oe.push(w[--Q])
                        continue
                      }
                      const { mode: h, doc: y } = oe.pop()
                      if (typeof y == 'string') Z.push(y), (te -= re(y))
                      else if (de(y) || y.type === 'fill') {
                        const I = ne(y)
                        for (let K = I.length - 1; K >= 0; K--) oe.push({ mode: h, doc: I[K] })
                      } else
                        switch (y.type) {
                          case 'indent':
                          case 'align':
                          case 'indent-if-break':
                          case 'label':
                            oe.push({ mode: h, doc: y.contents })
                            break
                          case 'trim':
                            te += g(Z)
                            break
                          case 'group': {
                            if (Ue && y.break) return !1
                            const I = y.break ? _ : h,
                              K = y.expandedStates && I === _ ? ee(y.expandedStates) : y.contents
                            oe.push({ mode: I, doc: K })
                            break
                          }
                          case 'if-break': {
                            const K =
                              (y.groupId ? _e[y.groupId] || fe : h) === _
                                ? y.breakContents
                                : y.flatContents
                            K && oe.push({ mode: h, doc: K })
                            break
                          }
                          case 'line':
                            if (h === _ || y.hard) return !0
                            y.soft || (Z.push(' '), te--)
                            break
                          case 'line-suffix':
                            Ee = !0
                            break
                          case 'line-suffix-boundary':
                            if (Ee) return !1
                            break
                        }
                    }
                    return !1
                  }
                  function F(L, w) {
                    _e = {}
                    const te = w.printWidth,
                      Ee = q(w.endOfLine)
                    let Ue = 0
                    const Q = [{ ind: De(), mode: _, doc: L }],
                      oe = []
                    let Z = !1
                    const h = []
                    for (; Q.length > 0; ) {
                      const { ind: I, mode: K, doc: x } = Q.pop()
                      if (typeof x == 'string') {
                        const b =
                          Ee !==
                          `
`
                            ? x.replace(/\n/g, Ee)
                            : x
                        oe.push(b), (Ue += re(b))
                      } else if (de(x)) {
                        const b = ne(x)
                        for (let H = b.length - 1; H >= 0; H--)
                          Q.push({ ind: I, mode: K, doc: b[H] })
                      } else
                        switch (x.type) {
                          case 'cursor':
                            oe.push(J.placeholder)
                            break
                          case 'indent':
                            Q.push({ ind: ie(I, w), mode: K, doc: x.contents })
                            break
                          case 'align':
                            Q.push({ ind: d(I, x.n, w), mode: K, doc: x.contents })
                            break
                          case 'trim':
                            Ue -= g(oe)
                            break
                          case 'group':
                            switch (K) {
                              case fe:
                                if (!Z) {
                                  Q.push({ ind: I, mode: x.break ? _ : fe, doc: x.contents })
                                  break
                                }
                              case _: {
                                Z = !1
                                const b = { ind: I, mode: fe, doc: x.contents },
                                  H = te - Ue,
                                  xe = h.length > 0
                                if (!x.break && S(b, Q, H, xe)) Q.push(b)
                                else if (x.expandedStates) {
                                  const Vt = ee(x.expandedStates)
                                  if (x.break) {
                                    Q.push({ ind: I, mode: _, doc: Vt })
                                    break
                                  } else
                                    for (let Gt = 1; Gt < x.expandedStates.length + 1; Gt++)
                                      if (Gt >= x.expandedStates.length) {
                                        Q.push({ ind: I, mode: _, doc: Vt })
                                        break
                                      } else {
                                        const dr = x.expandedStates[Gt],
                                          Wn = { ind: I, mode: fe, doc: dr }
                                        if (S(Wn, Q, H, xe)) {
                                          Q.push(Wn)
                                          break
                                        }
                                      }
                                } else Q.push({ ind: I, mode: _, doc: x.contents })
                                break
                              }
                            }
                            x.id && (_e[x.id] = ee(Q).mode)
                            break
                          case 'fill': {
                            const b = te - Ue,
                              { parts: H } = x
                            if (H.length === 0) break
                            const [xe, Vt] = H,
                              Gt = { ind: I, mode: fe, doc: xe },
                              dr = { ind: I, mode: _, doc: xe },
                              Wn = S(Gt, [], b, h.length > 0, !0)
                            if (H.length === 1) {
                              Wn ? Q.push(Gt) : Q.push(dr)
                              break
                            }
                            const ac = { ind: I, mode: fe, doc: Vt },
                              Na = { ind: I, mode: _, doc: Vt }
                            if (H.length === 2) {
                              Wn ? Q.push(ac, Gt) : Q.push(Na, dr)
                              break
                            }
                            H.splice(0, 2)
                            const _a = { ind: I, mode: K, doc: Ce(H) },
                              Ug = H[0]
                            S({ ind: I, mode: fe, doc: [xe, Vt, Ug] }, [], b, h.length > 0, !0)
                              ? Q.push(_a, ac, Gt)
                              : Wn
                              ? Q.push(_a, Na, Gt)
                              : Q.push(_a, Na, dr)
                            break
                          }
                          case 'if-break':
                          case 'indent-if-break': {
                            const b = x.groupId ? _e[x.groupId] : K
                            if (b === _) {
                              const H =
                                x.type === 'if-break'
                                  ? x.breakContents
                                  : x.negate
                                  ? x.contents
                                  : ce(x.contents)
                              H && Q.push({ ind: I, mode: K, doc: H })
                            }
                            if (b === fe) {
                              const H =
                                x.type === 'if-break'
                                  ? x.flatContents
                                  : x.negate
                                  ? ce(x.contents)
                                  : x.contents
                              H && Q.push({ ind: I, mode: K, doc: H })
                            }
                            break
                          }
                          case 'line-suffix':
                            h.push({ ind: I, mode: K, doc: x.contents })
                            break
                          case 'line-suffix-boundary':
                            h.length > 0 &&
                              Q.push({ ind: I, mode: K, doc: { type: 'line', hard: !0 } })
                            break
                          case 'line':
                            switch (K) {
                              case fe:
                                if (x.hard) Z = !0
                                else {
                                  x.soft || (oe.push(' '), (Ue += 1))
                                  break
                                }
                              case _:
                                if (h.length > 0) {
                                  Q.push({ ind: I, mode: K, doc: x }, ...h.reverse()),
                                    (h.length = 0)
                                  break
                                }
                                x.literal
                                  ? I.root
                                    ? (oe.push(Ee, I.root.value), (Ue = I.root.length))
                                    : (oe.push(Ee), (Ue = 0))
                                  : ((Ue -= g(oe)), oe.push(Ee + I.value), (Ue = I.length))
                                break
                            }
                            break
                          case 'label':
                            Q.push({ ind: I, mode: K, doc: x.contents })
                            break
                        }
                      Q.length === 0 && h.length > 0 && (Q.push(...h.reverse()), (h.length = 0))
                    }
                    const y = oe.indexOf(J.placeholder)
                    if (y !== -1) {
                      const I = oe.indexOf(J.placeholder, y + 1),
                        K = oe.slice(0, y).join(''),
                        x = oe.slice(y + 1, I).join(''),
                        b = oe.slice(I + 1).join('')
                      return { formatted: K + x + b, cursorNodeStart: K.length, cursorNodeText: x }
                    }
                    return { formatted: oe.join('') }
                  }
                  X.exports = { printDocToString: F }
                }
              }),
              Kn = A({
                'src/document/doc-debug.js'(N, X) {
                  U()
                  var { isConcat: q, getDocParts: ee } = St()
                  function re(J) {
                    if (!J) return ''
                    if (q(J)) {
                      const ce = []
                      for (const de of ee(J))
                        if (q(de)) ce.push(...re(de).parts)
                        else {
                          const ne = re(de)
                          ne !== '' && ce.push(ne)
                        }
                      return { type: 'concat', parts: ce }
                    }
                    return J.type === 'if-break'
                      ? Object.assign(
                          Object.assign({}, J),
                          {},
                          { breakContents: re(J.breakContents), flatContents: re(J.flatContents) }
                        )
                      : J.type === 'group'
                      ? Object.assign(
                          Object.assign({}, J),
                          {},
                          {
                            contents: re(J.contents),
                            expandedStates: J.expandedStates && J.expandedStates.map(re)
                          }
                        )
                      : J.type === 'fill'
                      ? { type: 'fill', parts: J.parts.map(re) }
                      : J.contents
                      ? Object.assign(Object.assign({}, J), {}, { contents: re(J.contents) })
                      : J
                  }
                  function Ce(J) {
                    const ce = Object.create(null),
                      de = new Set()
                    return ne(re(J))
                    function ne(_, fe, De) {
                      if (typeof _ == 'string') return JSON.stringify(_)
                      if (q(_)) {
                        const ie = ee(_).map(ne).filter(Boolean)
                        return ie.length === 1 ? ie[0] : `[${ie.join(', ')}]`
                      }
                      if (_.type === 'line') {
                        const ie =
                          Array.isArray(De) && De[fe + 1] && De[fe + 1].type === 'break-parent'
                        return _.literal
                          ? ie
                            ? 'literalline'
                            : 'literallineWithoutBreakParent'
                          : _.hard
                          ? ie
                            ? 'hardline'
                            : 'hardlineWithoutBreakParent'
                          : _.soft
                          ? 'softline'
                          : 'line'
                      }
                      if (_.type === 'break-parent')
                        return Array.isArray(De) &&
                          De[fe - 1] &&
                          De[fe - 1].type === 'line' &&
                          De[fe - 1].hard
                          ? void 0
                          : 'breakParent'
                      if (_.type === 'trim') return 'trim'
                      if (_.type === 'indent') return 'indent(' + ne(_.contents) + ')'
                      if (_.type === 'align')
                        return _.n === Number.NEGATIVE_INFINITY
                          ? 'dedentToRoot(' + ne(_.contents) + ')'
                          : _.n < 0
                          ? 'dedent(' + ne(_.contents) + ')'
                          : _.n.type === 'root'
                          ? 'markAsRoot(' + ne(_.contents) + ')'
                          : 'align(' + JSON.stringify(_.n) + ', ' + ne(_.contents) + ')'
                      if (_.type === 'if-break')
                        return (
                          'ifBreak(' +
                          ne(_.breakContents) +
                          (_.flatContents ? ', ' + ne(_.flatContents) : '') +
                          (_.groupId
                            ? (_.flatContents ? '' : ', ""') + `, { groupId: ${_e(_.groupId)} }`
                            : '') +
                          ')'
                        )
                      if (_.type === 'indent-if-break') {
                        const ie = []
                        _.negate && ie.push('negate: true'),
                          _.groupId && ie.push(`groupId: ${_e(_.groupId)}`)
                        const d = ie.length > 0 ? `, { ${ie.join(', ')} }` : ''
                        return `indentIfBreak(${ne(_.contents)}${d})`
                      }
                      if (_.type === 'group') {
                        const ie = []
                        _.break && _.break !== 'propagated' && ie.push('shouldBreak: true'),
                          _.id && ie.push(`id: ${_e(_.id)}`)
                        const d = ie.length > 0 ? `, { ${ie.join(', ')} }` : ''
                        return _.expandedStates
                          ? `conditionalGroup([${_.expandedStates.map(v => ne(v)).join(',')}]${d})`
                          : `group(${ne(_.contents)}${d})`
                      }
                      if (_.type === 'fill')
                        return `fill([${_.parts.map(ie => ne(ie)).join(', ')}])`
                      if (_.type === 'line-suffix') return 'lineSuffix(' + ne(_.contents) + ')'
                      if (_.type === 'line-suffix-boundary') return 'lineSuffixBoundary'
                      if (_.type === 'label')
                        return `label(${JSON.stringify(_.label)}, ${ne(_.contents)})`
                      throw new Error('Unknown doc type ' + _.type)
                    }
                    function _e(_) {
                      if (typeof _ != 'symbol') return JSON.stringify(String(_))
                      if (_ in ce) return ce[_]
                      const fe = String(_).slice(7, -1) || 'symbol'
                      for (let De = 0; ; De++) {
                        const ie = fe + (De > 0 ? ` #${De}` : '')
                        if (!de.has(ie))
                          return de.add(ie), (ce[_] = `Symbol.for(${JSON.stringify(ie)})`)
                      }
                    }
                  }
                  X.exports = { printDocToDebug: Ce }
                }
              })
            U(), (o.exports = { builders: j(), printer: Gn(), utils: St(), debug: Kn() })
          }
        })
      return i()
    })
  })(rA)
  var Pe = {}
  Object.defineProperty(Pe, '__esModule', { value: !0 }),
    (Pe.isOrdinaryCompilationUnitCtx =
      Pe.isAnnotationCstNode =
      Pe.isTypeArgumentsCstNode =
      Pe.isCstElementOrUndefinedIToken =
      Pe.isIToken =
      Pe.isCstNode =
        void 0)
  function iA(e) {
    return !Da(e)
  }
  Pe.isCstNode = iA
  function Da(e) {
    return e.tokenType !== void 0 && e.image !== void 0
  }
  Pe.isIToken = Da
  function aA(e) {
    return e !== void 0 && Da(e)
  }
  Pe.isCstElementOrUndefinedIToken = aA
  var oA = function (e) {
    return e.name === 'typeArguments'
  }
  Pe.isTypeArgumentsCstNode = oA
  var sA = function (e) {
    return e.name === 'annotation'
  }
  Pe.isAnnotationCstNode = sA
  var uA = function (e) {
    return e.ordinaryCompilationUnit !== void 0
  }
  Pe.isOrdinaryCompilationUnitCtx = uA
  var ri = {}
  Object.defineProperty(ri, '__esModule', { value: !0 })
  var cA = function (e) {
    return e === '' || (Array.isArray(e) && e.length) === 0
  }
  ri.default = cA
  var Ea =
      (W && W.__spreadArray) ||
      function (e, t, n) {
        if (n || arguments.length === 2)
          for (var r = 0, i = t.length, a; r < i; r++)
            (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]))
        return e.concat(a || Array.prototype.slice.call(t))
      },
    lA =
      (W && W.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e }
      }
  Object.defineProperty(Oe, '__esModule', { value: !0 }),
    (Oe.processComments =
      Oe.getTokenLeadingComments =
      Oe.printNodeWithComments =
      Oe.printTokenWithComments =
        void 0)
  var ii = yt,
    Fu = Pe,
    fA = lA(ri),
    an = ii.builders.hardline,
    pA = ii.builders.lineSuffix,
    dA = ii.builders.breakParent,
    hA = ii.builders.literalline
  function ya(e) {
    return Mu(e, e.image, bu, DA)
  }
  Oe.printTokenWithComments = ya
  function mA(e, t) {
    return Mu(e, t, vA, EA)
  }
  Oe.printNodeWithComments = mA
  function Mu(e, t, n, r) {
    var i = n(e),
      a = r(e, t)
    return i.length === 0 && a.length === 0 ? t : Ea(Ea(Ea([], i, !0), [t], !1), a, !0)
  }
  function bu(e) {
    return Pu(e, e)
  }
  Oe.getTokenLeadingComments = bu
  function vA(e) {
    return Pu(e, e.location)
  }
  function Pu(e, t) {
    var n = []
    if (e.leadingComments !== void 0) {
      var r = e.leadingComments[0].endLine,
        i = void 0
      n.push(ai(e.leadingComments[0]))
      for (var a = 1; a < e.leadingComments.length; a++)
        (i = e.leadingComments[a].startLine - r),
          i === 1 || e.leadingComments[a].startOffset > t.startOffset
            ? n.push(an)
            : i > 1 && n.push(an, an),
          n.push(ai(e.leadingComments[a])),
          (r = e.leadingComments[a].endLine)
      ;(i = t.startLine - r),
        i === 1 || e.leadingComments[e.leadingComments.length - 1].startOffset > t.startOffset
          ? n.push(an)
          : i > 1 && n.push(an, an)
    }
    return n
  }
  function DA(e) {
    return ku(e, e.image, e)
  }
  function EA(e, t) {
    return ku(e, t, e.location)
  }
  function ku(e, t, n) {
    var r = [],
      i = n.endLine
    return (
      e.trailingComments !== void 0 &&
        e.trailingComments.forEach(function (a, o) {
          var s = ''
          a.startLine !== i ? r.push(an) : !(0, fA.default)(t) && o === 0 && (s = ' '),
            a.tokenType.name === 'LineComment' ? r.push(pA([s, ai(a), dA])) : r.push(ai(a)),
            (i = a.endLine)
        }),
      r
    )
  }
  function yA(e, t) {
    var n = !0
    if (e.tokenType.name === 'TraditionalComment' && t.length > 1) {
      for (var r = 1; r < t.length; r++)
        if (t[r].trim().charAt(0) !== '*') {
          n = !1
          break
        }
    } else n = !1
    return n
  }
  function CA(e) {
    for (var t = [e[0].trim()], n = 1; n < e.length; n++) t.push(an), t.push(' ' + e[n].trim())
    return t
  }
  function ai(e) {
    var t = [],
      n = e.image.split(`
`)
    return yA(e, n)
      ? CA(n)
      : (n.forEach(function (r) {
          t.push(r), t.push(hA)
        }),
        t.pop(),
        t)
  }
  function AA(e) {
    return Array.isArray(e)
      ? e.map(function (t) {
          return (0, Fu.isCstElementOrUndefinedIToken)(t) ? ya(t) : t
        })
      : (0, Fu.isCstElementOrUndefinedIToken)(e)
      ? ya(e)
      : e
  }
  Oe.processComments = AA
  var SA =
    (W && W.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i
              }) ||
            function (r, i) {
              for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if (typeof n != 'function' && n !== null)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null')
        e(t, n)
        function r() {
          this.constructor = t
        }
        t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
      }
    })()
  Object.defineProperty(ct, '__esModule', { value: !0 }), (ct.BaseCstPrettierPrinter = void 0)
  var TA = Bu,
    gA = Oe,
    LA = (function (e) {
      SA(t, e)
      function t() {
        var n = e.call(this) || this
        return (
          (n.mapVisit = function (r, i) {
            return r === void 0
              ? []
              : r.map(function (a) {
                  return n.visit(a, i)
                })
          }),
          (n.getSingle = function (r) {
            var i = Object.keys(r)
            if (i.length !== 1)
              throw Error('Expecting single key CST ctx but found: <'.concat(i.length, '> keys'))
            var a = i[0],
              o = r[a]
            if ((o == null ? void 0 : o.length) !== 1)
              throw Error(
                'Expecting single item in CST ctx key but found: <'.concat(
                  o == null ? void 0 : o.length,
                  '> items'
                )
              )
            return o[0]
          }),
          (n.orgVisit = n.visit),
          (n.visit = function (r, i) {
            if (r === void 0) return ''
            var a = Array.isArray(r) ? r[0] : r
            if (a.ignore)
              try {
                var o =
                    a.leadingComments !== void 0
                      ? a.leadingComments[0].startOffset
                      : a.location.startOffset,
                  s =
                    a.trailingComments !== void 0
                      ? a.trailingComments[a.trailingComments.length - 1].endOffset
                      : a.location.endOffset
                return this.prettierOptions.originalText.substring(o, s + 1)
              } catch (u) {
                throw Error(
                  u +
                    `
There might be a problem with prettier-ignore, please report an issue on https://github.com/jhipster/prettier-java/issues`
                )
              }
            return (0, gA.printNodeWithComments)(a, this.orgVisit.call(this, a, i))
          }),
          (n.visitSingle = function (r, i) {
            var a = this.getSingle(r)
            return this.visit(a, i)
          }),
          n
        )
      }
      return t
    })(TA.BaseJavaCstVisitor)
  ct.BaseCstPrettierPrinter = LA
  var oi = {},
    Y = {},
    RA = ma,
    UA = ha,
    OA = va,
    NA = Math.max
  function _A(e, t, n) {
    var r = e == null ? 0 : e.length
    if (!r) return -1
    var i = n == null ? 0 : OA(n)
    return i < 0 && (i = NA(r + i, 0)), RA(e, UA(t), i)
  }
  var IA = _A
  function BA(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; );
    return e
  }
  var FA = BA
  function MA(e) {
    return function (t, n, r) {
      for (var i = -1, a = Object(t), o = r(t), s = o.length; s--; ) {
        var u = o[e ? s : ++i]
        if (n(a[u], u, a) === !1) break
      }
      return t
    }
  }
  var xu = MA,
    bA = xu,
    PA = bA(),
    kA = PA,
    xA = kA,
    wA = Mn
  function jA(e, t) {
    return e && xA(e, t, wA)
  }
  var VA = jA,
    GA = $r
  function KA(e, t) {
    return function (n, r) {
      if (n == null) return n
      if (!GA(n)) return e(n, r)
      for (
        var i = n.length, a = t ? i : -1, o = Object(n);
        (t ? a-- : ++a < i) && r(o[a], a, o) !== !1;

      );
      return n
    }
  }
  var wu = KA,
    WA = VA,
    JA = wu,
    qA = JA(WA),
    HA = qA,
    YA = gu
  function zA(e) {
    return typeof e == 'function' ? e : YA
  }
  var ju = zA,
    XA = FA,
    ZA = HA,
    QA = ju,
    $A = Nt
  function eS(e, t) {
    var n = $A(e) ? XA : ZA
    return n(e, QA(t))
  }
  var si = eS
  function tS(e, t) {
    for (var n = e == null ? 0 : e.length; n-- && t(e[n], n, e) !== !1; );
    return e
  }
  var nS = tS,
    rS = xu,
    iS = rS(!0),
    aS = iS,
    oS = aS,
    sS = Mn
  function uS(e, t) {
    return e && oS(e, t, sS)
  }
  var cS = uS,
    lS = cS,
    fS = wu,
    pS = fS(lS, !0),
    dS = pS,
    hS = nS,
    mS = dS,
    vS = ju,
    DS = Nt
  function ES(e, t) {
    var n = DS(e) ? hS : mS
    return n(e, vS(t))
  }
  var yS = ES
  function CS(e) {
    return e !== e
  }
  var AS = CS
  function SS(e, t, n) {
    for (var r = n - 1, i = e.length; ++r < i; ) if (e[r] === t) return r
    return -1
  }
  var TS = SS,
    gS = ma,
    LS = AS,
    RS = TS
  function US(e, t, n) {
    return t === t ? RS(e, t, n) : gS(e, LS, n)
  }
  var OS = US,
    NS = Sn,
    _S = Nt,
    IS = Tn,
    BS = '[object String]'
  function FS(e) {
    return typeof e == 'string' || (!_S(e) && IS(e) && NS(e) == BS)
  }
  var MS = FS,
    bS = Xo
  function PS(e, t) {
    return bS(t, function (n) {
      return e[n]
    })
  }
  var kS = PS,
    xS = kS,
    wS = Mn
  function jS(e) {
    return e == null ? [] : xS(e, wS(e))
  }
  var VS = jS,
    GS = OS,
    KS = $r,
    WS = MS,
    JS = va,
    qS = VS,
    HS = Math.max
  function YS(e, t, n, r) {
    ;(e = KS(e) ? e : qS(e)), (n = n && !r ? JS(n) : 0)
    var i = e.length
    return (
      n < 0 && (n = HS(i + n, 0)), WS(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && GS(e, t, n) > -1
    )
  }
  var zS = YS,
    Ca = {},
    ui = {},
    on = {}
  Object.defineProperty(on, '__esModule', { value: !0 }),
    (on.isSingleArgumentLambdaExpressionWithBlock = on.isArgumentListSingleLambda = void 0)
  function XS(e) {
    if (e === void 0) return !1
    var t = e[0].children.expression
    if (t.length !== 1) return !1
    var n = t[0]
    return n.children.lambdaExpression !== void 0
  }
  on.isArgumentListSingleLambda = XS
  var ZS = function (e) {
    if (e === void 0) return !1
    var t = e[0].children.expression
    if (t.length !== 1) return !1
    var n = t[0]
    return (
      n.children.lambdaExpression !== void 0 &&
      n.children.lambdaExpression[0].children.lambdaBody[0].children.block !== void 0
    )
  }
  on.isSingleArgumentLambdaExpressionWithBlock = ZS
  var ci = {},
    ve = {}
  Object.defineProperty(ve, '__esModule', { value: !0 }),
    (ve.indentIfBreak =
      ve.ifBreak =
      ve.dedent =
      ve.indent =
      ve.fill =
      ve.group =
      ve.join =
      ve.concat =
        void 0)
  var Dn = oc.doc.builders,
    kt = Oe.processComments
  function QS(e) {
    var t = kt(e)
    return Array.isArray(e) ? t : ''
  }
  ve.concat = QS
  function $S(e, t) {
    var n = Dn.join(kt(e), kt(t))
    return Vu(n)
  }
  ve.join = $S
  function eT(e, t) {
    var n = Dn.group(kt(e), t)
    return n.contents === void 0 ? '' : n
  }
  ve.group = eT
  function tT(e) {
    var t = Dn.fill(kt(e))
    return Vu(t)
  }
  ve.fill = tT
  function nT(e) {
    var t = Dn.indent(kt(e))
    return t.contents.length === 0 ? '' : t
  }
  ve.indent = nT
  function rT(e) {
    var t = Dn.dedent(kt(e))
    return t.contents.length === 0 ? '' : t
  }
  ve.dedent = rT
  function iT(e, t) {
    return Dn.ifBreak(kt(e), kt(t))
  }
  ve.ifBreak = iT
  function aT(e, t) {
    return Dn.indentIfBreak(kt(e), t)
  }
  ve.indentIfBreak = aT
  var Vu = function (e) {
      var t
      return ((t = e.parts) === null || t === void 0 ? void 0 : t.length) === 0 ? '' : e
    },
    Gu
  function Ku() {
    if (Gu) return ci
    ;(Gu = 1), Object.defineProperty(ci, '__esModule', { value: !0 })
    var e = yt,
      t = on,
      n = Oe,
      r = ve,
      i = xt(),
      a = e.builders.softline,
      o = e.builders.ifBreak
    function s(u, c, p) {
      var f = Symbol('lambdaParameters'),
        m = this.visit(u, { lambdaParametersGroupId: f, isInsideMethodInvocationSuffix: !0 }),
        C = (0, t.isSingleArgumentLambdaExpressionWithBlock)(u)
          ? o((0, r.indent)((0, r.concat)([a, c])), (0, n.printTokenWithComments)(c), {
              groupId: f
            })
          : (0, r.indent)((0, r.concat)([a, c]))
      return (0, r.dedent)((0, i.putIntoBraces)(m, '', p, C))
    }
    return (ci.default = s), ci
  }
  var Wu
  function oT() {
    if (Wu) return ui
    Wu = 1
    var e =
      (W && W.__importDefault) ||
      function (s) {
        return s && s.__esModule ? s : { default: s }
      }
    Object.defineProperty(ui, '__esModule', { value: !0 })
    var t = yt,
      n = on,
      r = xt(),
      i = e(Ku()),
      a = t.builders.softline
    function o(s, u, c) {
      var p = (0, n.isArgumentListSingleLambda)(s)
      if (p) return i.default.call(this, s, u, c)
      var f = this.visit(s, { isInsideMethodInvocationSuffix: !0 })
      return (0, r.putIntoBraces)(f, a, c, u)
    }
    return (ui.default = o), ui
  }
  var Ju
  function Aa() {
    return (
      Ju ||
        ((Ju = 1),
        (function (e) {
          var t =
            (W && W.__importDefault) ||
            function (a) {
              return a && a.__esModule ? a : { default: a }
            }
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.isEmptyDoc = e.printSingleLambdaInvocation = e.printArgumentListWithBraces = void 0)
          var n = oT()
          Object.defineProperty(e, 'printArgumentListWithBraces', {
            enumerable: !0,
            get: function () {
              return t(n).default
            }
          })
          var r = Ku()
          Object.defineProperty(e, 'printSingleLambdaInvocation', {
            enumerable: !0,
            get: function () {
              return t(r).default
            }
          })
          var i = ri
          Object.defineProperty(e, 'isEmptyDoc', {
            enumerable: !0,
            get: function () {
              return t(i).default
            }
          })
        })(Ca)),
      Ca
    )
  }
  var $e = {}
  Object.defineProperty($e, '__esModule', { value: !0 }),
    ($e.hasComments =
      $e.hasTrailingLineComments =
      $e.hasLeadingLineComments =
      $e.hasTrailingComments =
      $e.hasLeadingComments =
        void 0)
  function qu(e) {
    return e.leadingComments !== void 0
  }
  $e.hasLeadingComments = qu
  function Hu(e) {
    return e.trailingComments !== void 0
  }
  $e.hasTrailingComments = Hu
  function sT(e) {
    return (
      e.leadingComments !== void 0 &&
      e.leadingComments.length !== 0 &&
      e.leadingComments[e.leadingComments.length - 1].tokenType.name === 'LineComment'
    )
  }
  $e.hasLeadingLineComments = sT
  function uT(e) {
    return (
      e.trailingComments !== void 0 &&
      e.trailingComments.length !== 0 &&
      e.trailingComments[e.trailingComments.length - 1].tokenType.name === 'LineComment'
    )
  }
  $e.hasTrailingLineComments = uT
  function cT(e) {
    return qu(e) || Hu(e)
  }
  $e.hasComments = cT
  var Yu
  function xt() {
    if (Yu) return Y
    Yu = 1
    var e =
        (W && W.__assign) ||
        function () {
          return (
            (e =
              Object.assign ||
              function (d) {
                for (var v, g = 1, S = arguments.length; g < S; g++) {
                  v = arguments[g]
                  for (var F in v) Object.prototype.hasOwnProperty.call(v, F) && (d[F] = v[F])
                }
                return d
              }),
            e.apply(this, arguments)
          )
        },
      t =
        (W && W.__spreadArray) ||
        function (d, v, g) {
          if (g || arguments.length === 2)
            for (var S = 0, F = v.length, L; S < F; S++)
              (L || !(S in v)) && (L || (L = Array.prototype.slice.call(v, 0, S)), (L[S] = v[S]))
          return d.concat(L || Array.prototype.slice.call(v))
        },
      n =
        (W && W.__importDefault) ||
        function (d) {
          return d && d.__esModule ? d : { default: d }
        }
    Object.defineProperty(Y, '__esModule', { value: !0 }),
      (Y.printArrayList =
        Y.isUniqueMethodInvocation =
        Y.sortImports =
        Y.isStatementEmptyStatement =
        Y.isShiftOperator =
        Y.separateTokensIntoGroups =
        Y.putIntoBraces =
        Y.getInterfaceBodyDeclarationsSeparator =
        Y.getClassBodyDeclarationsSeparator =
        Y.getBlankLinesSeparator =
        Y.isExplicitLambdaParameter =
        Y.displaySemicolon =
        Y.findDeepElementInPartsArray =
        Y.sortModifiers =
        Y.sortClassTypeChildren =
        Y.matchCategory =
        Y.sortNodes =
        Y.sortAnnotationIdentifier =
        Y.rejectAndConcat =
        Y.rejectAndJoin =
        Y.rejectSeparators =
        Y.reject =
        Y.rejectAndJoinSeps =
        Y.buildFqn =
          void 0)
    var r = n(IA),
      i = n(Ou),
      a = n(si),
      o = n(yS),
      s = n(zS),
      u = yt,
      c = Pe,
      p = Aa(),
      f = $e,
      m = Oe,
      C = ve,
      A = u.builders.indent,
      l = u.builders.hardline,
      T = u.builders.line,
      E = [
        'Public',
        'Protected',
        'Private',
        'Abstract',
        'Default',
        'Static',
        'Final',
        'Transient',
        'Volatile',
        'Synchronized',
        'Native',
        'Sealed',
        'NonSealed',
        'Strictfp'
      ]
    function R(d, v) {
      return U(v || [], d)
    }
    Y.buildFqn = R
    function U(d, v, g) {
      if (!Array.isArray(d)) return Je(d, v)
      for (var S = j(v), F = [], L = 0; L < d.length; L++) F.push(S[L], d[L]), g && F.push(g)
      return F.push.apply(F, S.slice(d.length)), (0, C.concat)(F)
    }
    Y.rejectAndJoinSeps = U
    function j(d) {
      return d.filter(function (v) {
        return typeof v == 'string' ? v !== '' : v != !1 && v !== void 0
      })
    }
    Y.reject = j
    function Ne(d, v) {
      for (var g = j(v), S = [], F = 0; F < g.length - 1; F++) g[F] !== '' && S.push(d[F])
      return S
    }
    Y.rejectSeparators = Ne
    function Je(d, v) {
      var g = j(v)
      return (0, C.join)(d, g)
    }
    Y.rejectAndJoin = Je
    function Te(d) {
      var v = j(d)
      return (0, C.concat)(v)
    }
    Y.rejectAndConcat = Te
    function Ye(d, v) {
      var g = t([], v, !0)
      return (
        d && d.length > 0 && (g = t(t([], g, !0), d, !0)),
        g.sort(function (S, F) {
          var L = (0, c.isCstNode)(S) ? S.children.At[0].startOffset : S.startOffset,
            w = (0, c.isCstNode)(F) ? F.children.At[0].startOffset : F.startOffset
          return L - w
        })
      )
    }
    Y.sortAnnotationIdentifier = Ye
    function ke(d) {
      var v = []
      return (
        (0, a.default)(d, function (g) {
          g && (v = v.concat(g))
        }),
        v.sort(function (g, S) {
          return g.startOffset - S.startOffset
        })
      )
    }
    function Be(d) {
      var v = []
      return (
        (0, a.default)(d, function (g) {
          g && (v = v.concat(g))
        }),
        v.sort(function (g, S) {
          var F = g.location.startOffset,
            L = S.location.startOffset
          return F - L
        })
      )
    }
    Y.sortNodes = Be
    function Ve(d, v) {
      var g = (d.tokenType.CATEGORIES || []).map(function (S) {
        return S.LABEL
      })
      return g.indexOf(v) !== -1
    }
    Y.matchCategory = Ve
    function Zt(d, v, g, S) {
      var F = t([], g, !0)
      return (
        d && d.length > 0 && (F = t(t([], F, !0), d, !0)),
        v && v.length > 0 && (F = t(t([], F, !0), v, !0)),
        S && S.length > 0 && (F = t(t([], F, !0), S, !0)),
        F.sort(function (L, w) {
          var te = (0, c.isCstNode)(L)
              ? L.children.At
                ? L.children.At[0].startOffset
                : L.children.Less[0].startOffset
              : L.startOffset,
            Ee = (0, c.isCstNode)(w)
              ? w.children.At
                ? w.children.At[0].startOffset
                : w.children.Less[0].startOffset
              : w.startOffset
          return te - Ee
        })
      )
    }
    Y.sortClassTypeChildren = Zt
    function Bt(d) {
      var v = [],
        g = [],
        S = [],
        F = !1
      return (
        (0, o.default)(d, function (L) {
          var w = L.children.annotation !== void 0,
            te = w && (L.name === 'methodModifier' || L.name === 'interfaceMethodModifier')
          w ? (te && !F ? S.unshift(L) : v.unshift(L)) : (g.unshift(L), (F = !0))
        }),
        F || ((v = v.concat(S)), (S = [])),
        g.sort(function (L, w) {
          var te = E.indexOf(Object.keys(L.children)[0]),
            Ee = E.indexOf(Object.keys(w.children)[0])
          return te - Ee
        }),
        [v, g.concat(S)]
      )
    }
    Y.sortModifiers = Bt
    function pt(d, v) {
      if (Array.isArray(d)) {
        if ((0, s.default)(d, v)) return !0
        for (var g = 0; g < d.length; g++) if (pt(d[g], v)) return !0
      } else for (var S in d) if (typeof d[S] == 'object' && pt(d[S], v)) return !0
      return !1
    }
    Y.findDeepElementInPartsArray = pt
    function ut(d, v) {
      return v !== void 0 && v.allowEmptyStatement
        ? (0, m.printTokenWithComments)(d)
        : (0, f.hasComments)(d)
        ? ((d.image = ''), (0, m.printTokenWithComments)(d))
        : ''
    }
    Y.displaySemicolon = ut
    function jt(d) {
      return (
        d &&
        d.lambdaParameterList &&
        d.lambdaParameterList[0] &&
        d.lambdaParameterList[0].children &&
        d.lambdaParameterList[0].children.explicitLambdaParameterList
      )
    }
    Y.isExplicitLambdaParameter = jt
    function Qt(d, v) {
      if ((v === void 0 && (v = l), d === void 0)) return []
      for (var g = [], S = 0; S < d.length - 1; S++) {
        var F = d[S],
          L = (0, f.hasTrailingComments)(F)
            ? F.trailingComments[F.trailingComments.length - 1].endLine
            : F.location.endLine,
          w = d[S + 1],
          te = (0, f.hasLeadingComments)(w) ? w.leadingComments[0].startLine : w.location.startLine
        te - L > 1 ? g.push([l, l]) : g.push(v)
      }
      return g
    }
    Y.getBlankLinesSeparator = Qt
    var Vn = function (d) {
      return Array.isArray(d) ? d.length === 2 && d[0] === l && d[1] === l : !1
    }
    function St(d, v, g) {
      for (
        var S = d.filter(function (oe) {
            return !g(oe)
          }),
          F = Qt(S),
          L = S.map(v),
          w = [],
          te = 0,
          Ee = 0;
        Ee < d.length - 1;
        Ee++
      )
        if (g(d[Ee])) (0, f.hasComments)(d[Ee]) && w.push(l)
        else if (te < S.length - 1) {
          var Ue = Vn(F[te]),
            Q = !Ue && (L[te + 1] || L[te]) ? l : ''
          w.push((0, C.concat)([F[te], Q])), (te += 1)
        }
      return w
    }
    function Gn(d) {
      if (d.children.classMemberDeclaration === void 0) return !0
      var v = d.children.classMemberDeclaration[0]
      if (v.children.fieldDeclaration !== void 0) {
        var g = v.children.fieldDeclaration[0]
        return !!(g.children.fieldModifier !== void 0 && q(g.children.fieldModifier))
      } else if (v.children.Semicolon !== void 0) return !1
      return !0
    }
    function Kn(d) {
      if (d.children.constantDeclaration !== void 0) {
        var v = d.children.constantDeclaration[0]
        return !!(v.children.constantModifier !== void 0 && q(v.children.constantModifier))
      } else if (d.children.interfaceMethodDeclaration !== void 0) {
        var g = d.children.interfaceMethodDeclaration[0]
        return !!(
          g.children.interfaceMethodModifier !== void 0 && ee(g.children.interfaceMethodModifier)
        )
      }
      return !0
    }
    function N(d) {
      return !!(
        d.children.classMemberDeclaration &&
        d.children.classMemberDeclaration[0].children.Semicolon !== void 0
      )
    }
    function X(d) {
      return d.children.Semicolon !== void 0
    }
    function q(d) {
      return d.some(function (v) {
        return v.children.annotation !== void 0
      })
    }
    function ee(d) {
      var v = (0, r.default)(d, function (S) {
          return S.children.annotation !== void 0
        }),
        g = (0, i.default)(d, function (S) {
          return S.children.annotation === void 0
        })
      return v < g || g === -1
    }
    function re(d) {
      return St(d, Gn, N)
    }
    Y.getClassBodyDeclarationsSeparator = re
    function Ce(d) {
      return St(d, Kn, X)
    }
    Y.getInterfaceBodyDeclarationsSeparator = Ce
    function J(d, v, g, S) {
      var F = (0, m.getTokenLeadingComments)(S),
        L = F.length !== 0 && F[F.length - 1] === l ? F.pop() : v
      delete S.leadingComments
      var w
      if ((0, p.isEmptyDoc)(d)) {
        if (F.length === 0) return (0, C.concat)([g, S])
        w = t([v], F, !0)
      } else F.length !== 0 ? (w = t([v, d, v], F, !0)) : (w = [v, d])
      return (0, C.group)(Te([g, A((0, C.concat)(w)), L, S]))
    }
    Y.putIntoBraces = J
    var ce = ['&&', '||', '&', '|', '^']
    function de(d) {
      var v = ke([d.Instanceof, d.AssignmentOperator, d.Less, d.Greater, d.BinaryOperator]),
        g = [],
        S = [],
        F = []
      return (
        v.forEach(function (L) {
          Ve(L, "'BinaryOperator'") && (0, s.default)(ce, L.image)
            ? (S.push(L), g.push(F), (F = []))
            : F.push(L)
        }),
        g.push(F),
        { groupsOfOperator: g, sortedBinaryOperators: S }
      )
    }
    Y.separateTokensIntoGroups = de
    function ne(d, v) {
      return d.length <= v + 1
        ? 'none'
        : d[v].image === '<' &&
          d[v + 1].image === '<' &&
          d[v].startOffset === d[v + 1].startOffset - 1
        ? 'leftShift'
        : d[v].image === '>' &&
          d[v + 1].image === '>' &&
          d[v].startOffset === d[v + 1].startOffset - 1
        ? d.length > v + 2 &&
          d[v + 2].image === '>' &&
          d[v + 1].startOffset === d[v + 2].startOffset - 1
          ? 'doubleRightShift'
          : 'rightShift'
        : 'none'
    }
    Y.isShiftOperator = ne
    function _e(d) {
      return d === ';' || (Array.isArray(d) && d[0] === ';')
    }
    Y.isStatementEmptyStatement = _e
    function _(d) {
      var v = [],
        g = []
      if (d !== void 0) {
        for (var S = 0; S < d.length; S++)
          d[S].children.Static !== void 0
            ? v.push(d[S])
            : d[S].children.emptyStatement === void 0 && g.push(d[S])
        var F = function (L, w) {
          return fe(L.children.packageOrTypeName[0], w.children.packageOrTypeName[0])
        }
        v.sort(F), g.sort(F)
      }
      return { staticImports: v, nonStaticImports: g }
    }
    Y.sortImports = _
    function fe(d, v) {
      for (
        var g = d.children.Identifier,
          S = v.children.Identifier,
          F = Math.min(g.length, S.length),
          L = 0;
        L < F;
        L++
      ) {
        if (g[L].image < S[L].image) return -1
        if (g[L].image > S[L].image) return 1
      }
      return g.length < S.length ? -1 : g.length > S.length ? 1 : 0
    }
    function De(d) {
      if (d === void 0) return 0
      var v = 0
      return (
        d.forEach(function (g) {
          if (g.children.methodInvocationSuffix !== void 0 && (v++, v > 1)) return 2
        }),
        v
      )
    }
    Y.isUniqueMethodInvocation = De
    function ie(d) {
      var v = d.list,
        g = d.extraComma,
        S = d.LCurly,
        F = d.RCurly,
        L = d.trailingComma,
        w
      return (
        L !== 'none' && v !== ''
          ? (w = g ? (0, C.ifBreak)(g[0], e(e({}, g[0]), { image: '' })) : (0, C.ifBreak)(',', ''))
          : (w = g ? e(e({}, g[0]), { image: '' }) : ''),
        J(Te([v, w]), T, S, F)
      )
    }
    return (Y.printArrayList = ie), Y
  }
  var lT =
    (W && W.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i
              }) ||
            function (r, i) {
              for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if (typeof n != 'function' && n !== null)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null')
        e(t, n)
        function r() {
          this.constructor = t
        }
        t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
      }
    })()
  Object.defineProperty(oi, '__esModule', { value: !0 }), (oi.ArraysPrettierVisitor = void 0)
  var Sa = xt(),
    fT = yt,
    pT = ct,
    dT = fT.builders.line,
    hT = (function (e) {
      lT(t, e)
      function t() {
        return (e !== null && e.apply(this, arguments)) || this
      }
      return (
        (t.prototype.arrayInitializer = function (n) {
          var r = this.visit(n.variableInitializerList)
          return (0, Sa.printArrayList)({
            list: r,
            extraComma: n.Comma,
            LCurly: n.LCurly[0],
            RCurly: n.RCurly[0],
            trailingComma: this.prettierOptions.trailingComma
          })
        }),
        (t.prototype.variableInitializerList = function (n) {
          var r = this.mapVisit(n.variableInitializer),
            i = n.Comma
              ? n.Comma.map(function (a) {
                  return (0, Sa.rejectAndConcat)([a, dT])
                })
              : []
          return (0, Sa.rejectAndJoinSeps)(i, r)
        }),
        t
      )
    })(pT.BaseCstPrettierPrinter)
  oi.ArraysPrettierVisitor = hT
  var li = {},
    mT =
      (W && W.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          if (typeof n != 'function' && n !== null)
            throw new TypeError(
              'Class extends value ' + String(n) + ' is not a constructor or null'
            )
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })(),
    cr =
      (W && W.__assign) ||
      function () {
        return (
          (cr =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n]
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
              }
              return e
            }),
          cr.apply(this, arguments)
        )
      },
    vT =
      (W && W.__spreadArray) ||
      function (e, t, n) {
        if (n || arguments.length === 2)
          for (var r = 0, i = t.length, a; r < i; r++)
            (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]))
        return e.concat(a || Array.prototype.slice.call(t))
      }
  Object.defineProperty(li, '__esModule', { value: !0 }),
    (li.BlocksAndStatementPrettierVisitor = void 0)
  var Ta = yt,
    ae = ve,
    zu = Oe,
    Xu = $e,
    M = xt(),
    DT = ct,
    lr = Ta.builders.line,
    zt = Ta.builders.softline,
    sn = Ta.builders.hardline,
    ET = (function (e) {
      mT(t, e)
      function t() {
        return (e !== null && e.apply(this, arguments)) || this
      }
      return (
        (t.prototype.block = function (n) {
          var r = this.visit(n.blockStatements)
          return (0, M.putIntoBraces)(r, sn, n.LCurly[0], n.RCurly[0])
        }),
        (t.prototype.blockStatements = function (n) {
          var r = this.mapVisit(n.blockStatement),
            i = (0, M.rejectSeparators)((0, M.getBlankLinesSeparator)(n.blockStatement), r)
          return (0, M.rejectAndJoinSeps)(i, r)
        }),
        (t.prototype.blockStatement = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.localVariableDeclarationStatement = function (n) {
          var r = this.visit(n.localVariableDeclaration)
          return (0, M.rejectAndConcat)([r, n.Semicolon[0]])
        }),
        (t.prototype.localVariableDeclaration = function (n) {
          var r = (0, M.sortModifiers)(n.variableModifier),
            i = this.mapVisit(r[0]),
            a = this.mapVisit(r[1]),
            o = this.visit(n.localVariableType),
            s = this.visit(n.variableDeclaratorList)
          return (0, M.rejectAndJoin)(sn, [
            (0, M.rejectAndJoin)(sn, i),
            (0, M.rejectAndJoin)(' ', [(0, M.rejectAndJoin)(' ', a), o, s])
          ])
        }),
        (t.prototype.localVariableType = function (n) {
          return n.unannType
            ? this.visitSingle(n)
            : (0, zu.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.statement = function (n, r) {
          if (n.labeledStatement !== void 0) {
            var i = cr({}, n.labeledStatement[0]),
              a = cr({}, n.labeledStatement[0].children.Colon[0]),
              o = cr({}, n.labeledStatement[0].children.statement[0]),
              s = []
            return (
              a.trailingComments !== void 0 &&
                (s.push.apply(s, a.trailingComments), delete a.trailingComments),
              o.leadingComments !== void 0 &&
                (s.push.apply(s, o.leadingComments), delete o.leadingComments),
              s.length !== 0 && (i.leadingComments = s),
              (i.children.Colon[0] = a),
              (i.children.statement[0] = o),
              this.visit([i])
            )
          }
          return this.visitSingle(n, r)
        }),
        (t.prototype.statementWithoutTrailingSubstatement = function (n, r) {
          return this.visitSingle(n, r)
        }),
        (t.prototype.emptyStatement = function (n, r) {
          return (0, M.displaySemicolon)(n.Semicolon[0], r)
        }),
        (t.prototype.labeledStatement = function (n) {
          var r = n.Identifier[0],
            i = this.visit(n.statement)
          return (0, M.rejectAndJoin)(n.Colon[0], [r, i])
        }),
        (t.prototype.expressionStatement = function (n) {
          var r = this.visit(n.statementExpression)
          return (0, M.rejectAndConcat)([r, n.Semicolon[0]])
        }),
        (t.prototype.statementExpression = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.ifStatement = function (n) {
          var r = this.visit(n.expression),
            i = this.visit(n.statement[0], { allowEmptyStatement: !0 }),
            a = (0, M.isStatementEmptyStatement)(i) ? '' : ' ',
            o = ''
          if (n.Else !== void 0) {
            var s = this.visit(n.statement[1], { allowEmptyStatement: !0 }),
              u = (0, M.isStatementEmptyStatement)(s) ? '' : ' ',
              c =
                (0, Xu.hasTrailingLineComments)(n.statement[0]) ||
                (0, Xu.hasLeadingLineComments)(n.Else[0])
                  ? sn
                  : ' '
            o = (0, M.rejectAndJoin)(u, [(0, ae.concat)([c, n.Else[0]]), s])
          }
          return (0, M.rejectAndConcat)([
            (0, M.rejectAndJoin)(' ', [
              n.If[0],
              (0, ae.concat)([(0, M.putIntoBraces)(r, zt, n.LBrace[0], n.RBrace[0]), a])
            ]),
            i,
            o
          ])
        }),
        (t.prototype.assertStatement = function (n) {
          var r = this.mapVisit(n.expression),
            i = n.Colon ? n.Colon[0] : ':'
          return (0, M.rejectAndConcat)([
            (0, ae.concat)([n.Assert[0], ' ']),
            (0, M.rejectAndJoin)((0, ae.concat)([' ', i, ' ']), r),
            n.Semicolon[0]
          ])
        }),
        (t.prototype.switchStatement = function (n) {
          var r = this.visit(n.expression),
            i = this.visit(n.switchBlock)
          return (0, M.rejectAndJoin)(' ', [
            n.Switch[0],
            (0, M.putIntoBraces)(r, zt, n.LBrace[0], n.RBrace[0]),
            i
          ])
        }),
        (t.prototype.switchBlock = function (n) {
          var r =
            n.switchBlockStatementGroup !== void 0
              ? this.mapVisit(n.switchBlockStatementGroup)
              : this.mapVisit(n.switchRule)
          return (0, M.putIntoBraces)((0, M.rejectAndJoin)(sn, r), sn, n.LCurly[0], n.RCurly[0])
        }),
        (t.prototype.switchBlockStatementGroup = function (n) {
          var r = this.visit(n.switchLabel),
            i = this.visit(n.blockStatements)
          return (0, ae.concat)([r, n.Colon[0], i && (0, ae.indent)([sn, i])])
        }),
        (t.prototype.switchLabel = function (n) {
          var r = this.mapVisit(n.caseOrDefaultLabel),
            i = n.Colon
              ? n.Colon.map(function (a) {
                  return (0, ae.concat)([a, sn])
                })
              : []
          return (0, ae.group)((0, M.rejectAndJoinSeps)(i, r))
        }),
        (t.prototype.caseOrDefaultLabel = function (n) {
          if (n.Case) {
            var r = this.mapVisit(n.caseLabelElement),
              i = n.Comma
                ? n.Comma.map(function (a) {
                    return (0, ae.concat)([a, lr])
                  })
                : []
            return (0, ae.group)(
              (0, ae.indent)(
                (0, M.rejectAndConcat)([
                  (0, ae.concat)([n.Case[0], ' ']),
                  (0, M.rejectAndJoinSeps)(i, r)
                ])
              )
            )
          }
          return (0, ae.concat)([n.Default[0]])
        }),
        (t.prototype.caseLabelElement = function (n) {
          return n.Default || n.Null ? this.getSingle(n) : this.visitSingle(n)
        }),
        (t.prototype.switchRule = function (n) {
          var r = this.visit(n.switchLabel),
            i
          return (
            n.throwStatement !== void 0
              ? (i = this.visit(n.throwStatement))
              : n.block !== void 0
              ? (i = this.visit(n.block))
              : (i = (0, ae.concat)([this.visit(n.expression), n.Semicolon[0]])),
            (0, ae.join)(' ', [r, n.Arrow[0], i])
          )
        }),
        (t.prototype.caseConstant = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.whileStatement = function (n) {
          var r = this.visit(n.expression),
            i = this.visit(n.statement[0], { allowEmptyStatement: !0 }),
            a = (0, M.isStatementEmptyStatement)(i) ? '' : ' '
          return (0, M.rejectAndJoin)(' ', [
            n.While[0],
            (0, M.rejectAndJoin)(a, [(0, M.putIntoBraces)(r, zt, n.LBrace[0], n.RBrace[0]), i])
          ])
        }),
        (t.prototype.doStatement = function (n) {
          var r = this.visit(n.statement[0], { allowEmptyStatement: !0 }),
            i = (0, M.isStatementEmptyStatement)(r) ? '' : ' ',
            a = this.visit(n.expression)
          return (0, M.rejectAndJoin)(' ', [
            (0, M.rejectAndJoin)(i, [n.Do[0], r]),
            n.While[0],
            (0, M.rejectAndConcat)([
              (0, M.putIntoBraces)(a, zt, n.LBrace[0], n.RBrace[0]),
              n.Semicolon[0]
            ])
          ])
        }),
        (t.prototype.forStatement = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.basicForStatement = function (n) {
          var r = this.visit(n.forInit),
            i = this.visit(n.expression),
            a = this.visit(n.forUpdate),
            o = this.visit(n.statement[0], { allowEmptyStatement: !0 }),
            s = (0, M.isStatementEmptyStatement)(o) ? '' : ' '
          return (0, M.rejectAndConcat)([
            (0, M.rejectAndJoin)(' ', [
              n.For[0],
              (0, M.putIntoBraces)(
                (0, M.rejectAndConcat)([
                  r,
                  (0, M.rejectAndJoin)(lr, [n.Semicolon[0], i]),
                  (0, M.rejectAndJoin)(lr, [n.Semicolon[1], a])
                ]),
                zt,
                n.LBrace[0],
                n.RBrace[0]
              )
            ]),
            s,
            o
          ])
        }),
        (t.prototype.forInit = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.forUpdate = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.statementExpressionList = function (n) {
          var r = this.mapVisit(n.statementExpression),
            i = n.Comma
              ? n.Comma.map(function (a) {
                  return (0, ae.concat)([(0, zu.printTokenWithComments)(a), ' '])
                })
              : []
          return (0, M.rejectAndJoinSeps)(i, r)
        }),
        (t.prototype.enhancedForStatement = function (n) {
          var r = this.mapVisit(n.variableModifier),
            i = this.visit(n.localVariableType),
            a = this.visit(n.variableDeclaratorId),
            o = this.visit(n.expression),
            s = this.visit(n.statement[0], { allowEmptyStatement: !0 }),
            u = (0, M.isStatementEmptyStatement)(s) ? '' : ' '
          return (0, M.rejectAndConcat)([
            (0, M.rejectAndJoin)(' ', [n.For[0], n.LBrace[0]]),
            (0, M.rejectAndJoin)(' ', [(0, M.rejectAndJoin)(' ', r), i, a]),
            (0, ae.concat)([' ', n.Colon[0], ' ']),
            o,
            (0, ae.concat)([n.RBrace[0], u]),
            s
          ])
        }),
        (t.prototype.breakStatement = function (n) {
          if (n.Identifier) {
            var r = n.Identifier[0]
            return (0, M.rejectAndConcat)([(0, ae.concat)([n.Break[0], ' ']), r, n.Semicolon[0]])
          }
          return (0, ae.concat)([n.Break[0], n.Semicolon[0]])
        }),
        (t.prototype.continueStatement = function (n) {
          if (n.Identifier) {
            var r = n.Identifier[0]
            return (0, M.rejectAndConcat)([(0, ae.concat)([n.Continue[0], ' ']), r, n.Semicolon[0]])
          }
          return (0, M.rejectAndConcat)([n.Continue[0], n.Semicolon[0]])
        }),
        (t.prototype.returnStatement = function (n) {
          if (n.expression) {
            var r = this.visit(n.expression, { addParenthesisToWrapStatement: !0 })
            return (0, M.rejectAndConcat)([(0, ae.concat)([n.Return[0], ' ']), r, n.Semicolon[0]])
          }
          return (0, M.rejectAndConcat)([n.Return[0], n.Semicolon[0]])
        }),
        (t.prototype.throwStatement = function (n) {
          var r = this.visit(n.expression)
          return (0, M.rejectAndConcat)([(0, ae.concat)([n.Throw[0], ' ']), r, n.Semicolon[0]])
        }),
        (t.prototype.synchronizedStatement = function (n) {
          var r = this.visit(n.expression),
            i = this.visit(n.block)
          return (0, M.rejectAndConcat)([
            (0, ae.join)(' ', [
              n.Synchronized[0],
              (0, ae.concat)([(0, M.putIntoBraces)(r, zt, n.LBrace[0], n.RBrace[0]), ' '])
            ]),
            i
          ])
        }),
        (t.prototype.tryStatement = function (n) {
          if (n.tryWithResourcesStatement) return this.visit(n.tryWithResourcesStatement)
          var r = this.visit(n.block),
            i = this.visit(n.catches),
            a = this.visit(n.finally)
          return (0, M.rejectAndJoin)(' ', [n.Try[0], r, i, a])
        }),
        (t.prototype.catches = function (n) {
          var r = this.mapVisit(n.catchClause)
          return (0, M.rejectAndJoin)(' ', r)
        }),
        (t.prototype.catchClause = function (n) {
          var r = this.visit(n.catchFormalParameter),
            i = this.visit(n.block)
          return (0, M.rejectAndConcat)([
            (0, ae.group)(
              (0, M.rejectAndConcat)([
                (0, M.rejectAndJoin)(' ', [n.Catch[0], n.LBrace[0]]),
                (0, ae.indent)((0, M.rejectAndConcat)([zt, r])),
                zt,
                (0, ae.concat)([n.RBrace[0], ' '])
              ])
            ),
            i
          ])
        }),
        (t.prototype.catchFormalParameter = function (n) {
          var r = this.mapVisit(n.variableModifier),
            i = this.visit(n.catchType),
            a = this.visit(n.variableDeclaratorId)
          return (0, M.rejectAndJoin)(' ', [(0, M.rejectAndJoin)(' ', r), i, a])
        }),
        (t.prototype.catchType = function (n) {
          var r = this.visit(n.unannClassType),
            i = this.mapVisit(n.classType),
            a = n.Or
              ? n.Or.map(function (o) {
                  return (0, ae.concat)([lr, o, ' '])
                })
              : []
          return (0, ae.group)((0, M.rejectAndJoinSeps)(a, vT([r], i, !0)))
        }),
        (t.prototype.finally = function (n) {
          var r = this.visit(n.block)
          return (0, M.rejectAndJoin)(' ', [n.Finally[0], r])
        }),
        (t.prototype.tryWithResourcesStatement = function (n) {
          var r = this.visit(n.resourceSpecification),
            i = this.visit(n.block),
            a = this.visit(n.catches),
            o = this.visit(n.finally)
          return (0, M.rejectAndJoin)(' ', [n.Try[0], r, i, a, o])
        }),
        (t.prototype.resourceSpecification = function (n) {
          var r = this.visit(n.resourceList),
            i = n.Semicolon ? n.Semicolon[0] : ''
          return (0, M.putIntoBraces)((0, M.rejectAndConcat)([r, i]), zt, n.LBrace[0], n.RBrace[0])
        }),
        (t.prototype.resourceList = function (n) {
          var r = this.mapVisit(n.resource),
            i = n.Semicolon
              ? n.Semicolon.map(function (a) {
                  return (0, ae.concat)([a, lr])
                })
              : ['']
          return (0, M.rejectAndJoinSeps)(i, r)
        }),
        (t.prototype.resource = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.resourceInit = function (n) {
          var r = this.mapVisit(n.variableModifier),
            i = this.visit(n.localVariableType),
            a = n.Identifier[0],
            o = this.visit(n.expression)
          return (0, M.rejectAndJoin)(' ', [(0, M.rejectAndJoin)(' ', r), i, a, n.Equals[0], o])
        }),
        (t.prototype.yieldStatement = function (n) {
          var r = this.visit(n.expression)
          return (0, ae.join)(' ', [n.Yield[0], (0, ae.concat)([r, n.Semicolon[0]])])
        }),
        (t.prototype.variableAccess = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.isBasicForStatement = function () {
          return 'isBasicForStatement'
        }),
        (t.prototype.isLocalVariableDeclaration = function () {
          return 'isLocalVariableDeclaration'
        }),
        (t.prototype.isClassicSwitchLabel = function () {
          return 'isClassicSwitchLabel'
        }),
        t
      )
    })(DT.BaseCstPrettierPrinter)
  li.BlocksAndStatementPrettierVisitor = ET
  var fi = {},
    yT =
      (W && W.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          if (typeof n != 'function' && n !== null)
            throw new TypeError(
              'Class extends value ' + String(n) + ' is not a constructor or null'
            )
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })(),
    Pn =
      (W && W.__assign) ||
      function () {
        return (
          (Pn =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n]
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
              }
              return e
            }),
          Pn.apply(this, arguments)
        )
      },
    CT =
      (W && W.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e }
      }
  Object.defineProperty(fi, '__esModule', { value: !0 }), (fi.ClassesPrettierVisitor = void 0)
  var AT = CT(si),
    D = xt(),
    B = ve,
    Ct = Oe,
    Zu = $e,
    pi = yt,
    ST = ct,
    ga = Pe,
    La = Aa(),
    Se = pi.builders.line,
    fr = pi.builders.softline,
    Re = pi.builders.hardline,
    di = pi.builders.lineSuffixBoundary,
    TT = (function (e) {
      yT(t, e)
      function t() {
        return (e !== null && e.apply(this, arguments)) || this
      }
      return (
        (t.prototype.classDeclaration = function (n) {
          var r = (0, D.sortModifiers)(n.classModifier),
            i = this.mapVisit(r[0]),
            a = this.mapVisit(r[1]),
            o
          n.normalClassDeclaration !== void 0
            ? (o = n.normalClassDeclaration)
            : n.enumDeclaration !== void 0
            ? (o = n.enumDeclaration)
            : (o = n.recordDeclaration)
          var s = this.visit(o)
          return (0, D.rejectAndJoin)(Re, [
            (0, D.rejectAndJoin)(Re, i),
            (0, D.rejectAndJoin)(' ', [(0, B.join)(' ', a), s])
          ])
        }),
        (t.prototype.normalClassDeclaration = function (n) {
          var r = this.visit(n.typeIdentifier),
            i = this.visit(n.typeParameters),
            a = this.visit(n.superclass),
            o = this.visit(n.superinterfaces),
            s = this.visit(n.classPermits),
            u = this.visit(n.classBody, { isNormalClassDeclaration: !0 }),
            c = ''
          a && (c = (0, B.indent)((0, D.rejectAndConcat)([Se, a])))
          var p = ''
          o && (p = (0, B.indent)((0, D.rejectAndConcat)([Se, o])))
          var f = ''
          return (
            s && (f = (0, B.indent)((0, D.rejectAndConcat)([Se, s]))),
            (0, D.rejectAndJoin)(' ', [
              (0, B.group)(
                (0, D.rejectAndConcat)([(0, D.rejectAndJoin)(' ', [n.Class[0], r]), i, c, p, f])
              ),
              u
            ])
          )
        }),
        (t.prototype.classModifier = function (n) {
          return n.annotation
            ? this.visit(n.annotation)
            : (0, Ct.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.typeParameters = function (n) {
          var r = this.visit(n.typeParameterList)
          return (0, D.putIntoBraces)(r, fr, n.Less[0], n.Greater[0])
        }),
        (t.prototype.typeParameterList = function (n) {
          var r = this.mapVisit(n.typeParameter),
            i = n.Comma
              ? n.Comma.map(function (a) {
                  return (0, B.concat)([a, Se])
                })
              : []
          return (0, B.group)((0, D.rejectAndJoinSeps)(i, r))
        }),
        (t.prototype.superclass = function (n) {
          return (0, B.join)(' ', [n.Extends[0], this.visit(n.classType)])
        }),
        (t.prototype.superinterfaces = function (n) {
          var r = this.visit(n.interfaceTypeList)
          return (0, B.group)(
            (0, D.rejectAndConcat)([
              n.Implements[0],
              (0, B.indent)((0, D.rejectAndConcat)([Se, r]))
            ])
          )
        }),
        (t.prototype.classPermits = function (n) {
          var r = this.mapVisit(n.typeName),
            i = n.Comma
              ? n.Comma.map(function (a) {
                  return (0, B.concat)([a, Se])
                })
              : []
          return (0, B.group)(
            (0, D.rejectAndConcat)([
              n.Permits[0],
              (0, B.indent)(
                (0, D.rejectAndConcat)([Se, (0, B.group)((0, D.rejectAndJoinSeps)(i, r))])
              )
            ])
          )
        }),
        (t.prototype.interfaceTypeList = function (n) {
          var r = this.mapVisit(n.interfaceType),
            i = n.Comma
              ? n.Comma.map(function (a) {
                  return (0, B.concat)([a, Se])
                })
              : []
          return (0, B.group)((0, D.rejectAndJoinSeps)(i, r))
        }),
        (t.prototype.classBody = function (n, r) {
          var i = ''
          if (n.classBodyDeclaration !== void 0) {
            var a = (0, D.reject)(this.mapVisit(n.classBodyDeclaration)),
              o = (0, D.getClassBodyDeclarationsSeparator)(n.classBodyDeclaration)
            i = (0, D.rejectAndJoinSeps)(o, a)
            var s = !1
            n.classBodyDeclaration.forEach(function (u) {
              ;((u.children.classMemberDeclaration &&
                !u.children.classMemberDeclaration[0].children.Semicolon) ||
                u.children.constructorDeclaration) &&
                (s = !0)
            }),
              (n.classBodyDeclaration[0].children.classMemberDeclaration ||
                n.classBodyDeclaration[0].children.constructorDeclaration) &&
                s &&
                r &&
                r.isNormalClassDeclaration &&
                (i = (0, D.rejectAndConcat)([Re, i]))
          }
          return (0, D.putIntoBraces)(i, Re, n.LCurly[0], n.RCurly[0])
        }),
        (t.prototype.classBodyDeclaration = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.classMemberDeclaration = function (n) {
          return n.Semicolon ? (0, D.displaySemicolon)(n.Semicolon[0]) : this.visitSingle(n)
        }),
        (t.prototype.fieldDeclaration = function (n) {
          var r = (0, D.sortModifiers)(n.fieldModifier),
            i = this.mapVisit(r[0]),
            a = this.mapVisit(r[1]),
            o = this.visit(n.unannType),
            s = this.visit(n.variableDeclaratorList)
          return (0, D.rejectAndJoin)(Re, [
            (0, D.rejectAndJoin)(Re, i),
            (0, D.rejectAndJoin)(' ', [
              (0, D.rejectAndJoin)(' ', a),
              o,
              (0, B.concat)([s, n.Semicolon[0]])
            ])
          ])
        }),
        (t.prototype.fieldModifier = function (n) {
          return n.annotation
            ? this.visit(n.annotation)
            : (0, Ct.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.variableDeclaratorList = function (n) {
          var r = this.mapVisit(n.variableDeclarator),
            i = n.Comma
              ? n.Comma.map(function (a) {
                  return (0, B.concat)([a, ' '])
                })
              : []
          return (0, D.rejectAndJoinSeps)(i, r)
        }),
        (t.prototype.variableDeclarator = function (n) {
          var r = this.visit(n.variableDeclaratorId)
          if (n.Equals) {
            var i = this.visit(n.variableInitializer)
            if ((0, Zu.hasLeadingLineComments)(n.variableInitializer[0]))
              return (0, B.group)(
                (0, B.indent)(
                  (0, D.rejectAndJoin)(Re, [(0, D.rejectAndJoin)(' ', [r, n.Equals[0]]), i])
                )
              )
            if (
              n.variableInitializer[0].children.arrayInitializer !== void 0 ||
              n.variableInitializer[0].children.expression[0].children.lambdaExpression !==
                void 0 ||
              (n.variableInitializer[0].children.expression[0].children.ternaryExpression !==
                void 0 &&
                n.variableInitializer[0].children.expression[0].children.ternaryExpression[0]
                  .children.QuestionMark !== void 0)
            ) {
              var a = Symbol('assignment')
              return (0, B.group)([
                (0, B.group)(r),
                ' ',
                n.Equals[0],
                (0, B.group)((0, B.indent)(Se), { id: a }),
                di,
                (0, B.indentIfBreak)(i, { groupId: a })
              ])
            }
            if (
              n.variableInitializer[0].children.expression[0].children.ternaryExpression !== void 0
            ) {
              var o =
                n.variableInitializer[0].children.expression[0].children.ternaryExpression[0]
                  .children.binaryExpression[0].children.unaryExpression[0].children.primary[0]
              if (o.children.primaryPrefix[0].children.castExpression !== void 0) {
                var a = Symbol('assignment')
                return (0, B.group)([
                  (0, B.group)(r),
                  ' ',
                  n.Equals[0],
                  (0, B.group)((0, B.indent)(Se), { id: a }),
                  di,
                  (0, B.indentIfBreak)(i, { groupId: a })
                ])
              }
              if (o.children.primaryPrefix[0].children.newExpression !== void 0) {
                var a = Symbol('assignment')
                return (0, B.group)([
                  (0, B.group)(r),
                  ' ',
                  n.Equals[0],
                  (0, B.group)((0, B.indent)(Se), { id: a }),
                  di,
                  (0, B.indentIfBreak)(i, { groupId: a })
                ])
              }
              var s =
                  o.children.primarySuffix !== void 0 &&
                  o.children.primarySuffix[0].children.methodInvocationSuffix !== void 0,
                u =
                  n.variableInitializer[0].children.expression[0].children.ternaryExpression[0]
                    .children.binaryExpression[0].children.unaryExpression.length === 1,
                c = s && u
              if (c) {
                var a = Symbol('assignment')
                return (0, B.group)([
                  (0, B.group)(r),
                  ' ',
                  n.Equals[0],
                  (0, B.group)((0, B.indent)(Se), { id: a }),
                  di,
                  (0, B.indentIfBreak)(i, { groupId: a })
                ])
              }
            }
            return (0, B.group)(
              (0, B.indent)(
                (0, D.rejectAndJoin)(Se, [(0, D.rejectAndJoin)(' ', [r, n.Equals[0]]), i])
              )
            )
          }
          return r
        }),
        (t.prototype.variableDeclaratorId = function (n) {
          var r = n.Identifier[0],
            i = this.visit(n.dims)
          return (0, D.rejectAndConcat)([r, i])
        }),
        (t.prototype.variableInitializer = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.unannType = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.unannPrimitiveTypeWithOptionalDimsSuffix = function (n) {
          var r = this.visit(n.unannPrimitiveType),
            i = this.visit(n.dims)
          return (0, D.rejectAndConcat)([r, i])
        }),
        (t.prototype.unannPrimitiveType = function (n) {
          return n.numericType
            ? this.visitSingle(n)
            : (0, Ct.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.unannReferenceType = function (n) {
          var r = this.visit(n.unannClassOrInterfaceType),
            i = this.visit(n.dims)
          return (0, D.rejectAndConcat)([r, i])
        }),
        (t.prototype.unannClassOrInterfaceType = function (n) {
          return this.visit(n.unannClassType)
        }),
        (t.prototype.unannClassType = function (n) {
          var r = this,
            i = (0, D.sortClassTypeChildren)(n.annotation, n.typeArguments, n.Identifier),
            a = [],
            o = []
          return (
            (0, AT.default)(i, function (s, u) {
              ;(0, ga.isTypeArgumentsCstNode)(s)
                ? (o.push(r.visit([s])), a.push((0, D.rejectAndConcat)(o)), (o = []))
                : (0, ga.isAnnotationCstNode)(s)
                ? (o.push(r.visit([s])), o.push(' '))
                : (o.push(s),
                  ((u + 1 < i.length && !(0, ga.isTypeArgumentsCstNode)(i[u + 1])) ||
                    u + 1 === i.length) &&
                    (a.push((0, D.rejectAndConcat)(o)), (o = [])))
            }),
            (0, D.rejectAndJoinSeps)(n.Dot, a)
          )
        }),
        (t.prototype.unannInterfaceType = function (n) {
          return this.visit(n.unannClassType)
        }),
        (t.prototype.unannTypeVariable = function (n) {
          return (0, Ct.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.methodDeclaration = function (n) {
          var r = (0, D.sortModifiers)(n.methodModifier),
            i = this.mapVisit(r[0]),
            a = this.mapVisit(r[1]),
            o = this.visit(n.methodHeader),
            s = this.visit(n.methodBody),
            u = (0, D.isStatementEmptyStatement)(s) ? '' : ' '
          return (0, D.rejectAndJoin)(Re, [
            (0, D.rejectAndJoin)(Re, i),
            (0, D.rejectAndJoin)(' ', [
              (0, D.rejectAndJoin)(' ', a),
              (0, D.rejectAndJoin)(u, [o, s])
            ])
          ])
        }),
        (t.prototype.methodModifier = function (n) {
          return n.annotation
            ? this.visit(n.annotation)
            : (0, Ct.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.methodHeader = function (n) {
          var r = this.visit(n.typeParameters),
            i = this.mapVisit(n.annotation),
            a = this.visit(n.result),
            o = this.visit(n.methodDeclarator),
            s = this.visit(n.throws)
          return (0, B.group)(
            (0, B.concat)([(0, D.rejectAndJoin)(' ', [r, (0, D.rejectAndJoin)(Se, i), a, o, s])])
          )
        }),
        (t.prototype.result = function (n) {
          return n.unannType
            ? this.visit(n.unannType)
            : (0, Ct.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.methodDeclarator = function (n) {
          var r = (0, Ct.printTokenWithComments)(n.Identifier[0]),
            i = this.visit(n.formalParameterList),
            a = this.visit(n.dims)
          return (0, D.rejectAndConcat)([
            r,
            (0, D.putIntoBraces)(i, fr, n.LBrace[0], n.RBrace[0]),
            a
          ])
        }),
        (t.prototype.receiverParameter = function (n) {
          var r = this.mapVisit(n.annotation),
            i = this.visit(n.unannType),
            a = n.Identifier ? (0, B.concat)([n.Identifier[0], n.Dot[0]]) : ''
          return (0, D.rejectAndJoin)('', [(0, D.rejectAndJoin)(' ', r), i, a, n.This[0]])
        }),
        (t.prototype.formalParameterList = function (n) {
          var r = this.mapVisit(n.formalParameter),
            i = n.Comma
              ? n.Comma.map(function (a) {
                  return (0, B.concat)([a, Se])
                })
              : []
          return (0, D.rejectAndJoinSeps)(i, r)
        }),
        (t.prototype.formalParameter = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.variableParaRegularParameter = function (n) {
          var r = this.mapVisit(n.variableModifier),
            i = this.visit(n.unannType),
            a = this.visit(n.variableDeclaratorId)
          return (0, D.rejectAndJoin)(' ', [(0, D.rejectAndJoin)(' ', r), i, a])
        }),
        (t.prototype.variableArityParameter = function (n) {
          var r = this.mapVisit(n.variableModifier),
            i = this.visit(n.unannType),
            a = this.mapVisit(n.annotation),
            o = n.Identifier[0],
            s = n.annotation === void 0 ? (0, B.concat)([i, n.DotDotDot[0]]) : i,
            u =
              n.annotation === void 0
                ? a
                : (0, B.concat)([(0, D.rejectAndJoin)(' ', a), n.DotDotDot[0]])
          return (0, D.rejectAndJoin)(' ', [(0, B.join)(' ', r), s, u, o])
        }),
        (t.prototype.variableModifier = function (n) {
          return n.annotation
            ? this.visit(n.annotation)
            : (0, Ct.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.throws = function (n) {
          var r = this.visit(n.exceptionTypeList),
            i = (0, B.join)(' ', [n.Throws[0], r])
          return (0, B.group)((0, B.indent)((0, D.rejectAndConcat)([fr, i])))
        }),
        (t.prototype.exceptionTypeList = function (n) {
          var r = this.mapVisit(n.exceptionType),
            i = n.Comma
              ? n.Comma.map(function (a) {
                  return (0, B.concat)([a, ' '])
                })
              : []
          return (0, D.rejectAndJoinSeps)(i, r)
        }),
        (t.prototype.exceptionType = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.methodBody = function (n) {
          return n.block ? this.visit(n.block) : (0, Ct.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.instanceInitializer = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.staticInitializer = function (n) {
          var r = this.visit(n.block)
          return (0, B.join)(' ', [n.Static[0], r])
        }),
        (t.prototype.constructorDeclaration = function (n) {
          var r = (0, D.sortModifiers)(n.constructorModifier),
            i = this.mapVisit(r[0]),
            a = this.mapVisit(r[1]),
            o = this.visit(n.constructorDeclarator),
            s = this.visit(n.throws),
            u = this.visit(n.constructorBody)
          return (0, D.rejectAndJoin)(' ', [
            (0, B.group)(
              (0, D.rejectAndJoin)(Re, [
                (0, D.rejectAndJoin)(Re, i),
                (0, D.rejectAndJoin)(' ', [(0, B.join)(' ', a), o, s])
              ])
            ),
            u
          ])
        }),
        (t.prototype.constructorModifier = function (n) {
          return n.annotation
            ? this.visit(n.annotation)
            : (0, Ct.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.constructorDeclarator = function (n) {
          var r = this.visit(n.typeParameters),
            i = this.visit(n.simpleTypeName),
            a = this.visit(n.receiverParameter),
            o = this.visit(n.formalParameterList),
            s = n.Comma
              ? n.Comma.map(function (u) {
                  return (0, B.concat)([u, ' '])
                })
              : []
          return (0, D.rejectAndJoin)(' ', [
            r,
            (0, B.concat)([
              i,
              (0, D.putIntoBraces)(
                (0, D.rejectAndJoinSeps)(s, [a, o]),
                fr,
                n.LBrace[0],
                n.RBrace[0]
              )
            ])
          ])
        }),
        (t.prototype.simpleTypeName = function (n) {
          return (0, Ct.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.constructorBody = function (n) {
          var r = this.visit(n.explicitConstructorInvocation),
            i = this.visit(n.blockStatements)
          return (0, D.putIntoBraces)(
            (0, D.rejectAndJoin)(Re, [r, i]),
            Re,
            n.LCurly[0],
            n.RCurly[0]
          )
        }),
        (t.prototype.explicitConstructorInvocation = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.unqualifiedExplicitConstructorInvocation = function (n) {
          var r = this.visit(n.typeArguments),
            i = n.This ? n.This[0] : n.Super[0],
            a = La.printArgumentListWithBraces.call(this, n.argumentList, n.RBrace[0], n.LBrace[0])
          return (0, D.rejectAndConcat)([
            r,
            i,
            (0, B.group)((0, D.rejectAndConcat)([a, n.Semicolon[0]]))
          ])
        }),
        (t.prototype.qualifiedExplicitConstructorInvocation = function (n) {
          var r = this.visit(n.expressionName),
            i = this.visit(n.typeArguments),
            a = La.printArgumentListWithBraces.call(this, n.argumentList, n.RBrace[0], n.LBrace[0])
          return (0, D.rejectAndConcat)([
            r,
            n.Dot[0],
            i,
            n.Super[0],
            (0, B.group)((0, D.rejectAndConcat)([a, n.Semicolon[0]]))
          ])
        }),
        (t.prototype.enumDeclaration = function (n) {
          var r = this.mapVisit(n.classModifier),
            i = this.visit(n.typeIdentifier),
            a = this.visit(n.superinterfaces),
            o = this.visit(n.enumBody)
          return (0, D.rejectAndJoin)(' ', [(0, B.join)(' ', r), n.Enum[0], i, a, o])
        }),
        (t.prototype.enumBody = function (n) {
          var r = this.visit(n.enumConstantList),
            i = this.visit(n.enumBodyDeclarations),
            a = n.enumConstantList !== void 0,
            o =
              n.enumBodyDeclarations === void 0 ||
              n.enumBodyDeclarations[0].children.classBodyDeclaration === void 0,
            s = !o && (0, Zu.hasLeadingComments)(n.enumBodyDeclarations[0]) ? Re : '',
            u
          return (
            a && o && this.prettierOptions.trailingComma !== 'none'
              ? (u = n.Comma ? n.Comma[0] : ',')
              : (u = n.Comma ? Pn(Pn({}, n.Comma[0]), { image: '' }) : ''),
            (0, D.putIntoBraces)((0, D.rejectAndConcat)([r, u, s, i]), Re, n.LCurly[0], n.RCurly[0])
          )
        }),
        (t.prototype.enumConstantList = function (n) {
          var r = this.mapVisit(n.enumConstant),
            i = (0, D.getBlankLinesSeparator)(n.enumConstant),
            a = n.Comma
              ? n.Comma.map(function (o, s) {
                  return (0, B.concat)([o, i[s]])
                })
              : []
          return (0, B.group)((0, D.rejectAndJoinSeps)(a, r))
        }),
        (t.prototype.enumConstant = function (n) {
          var r = (0, D.sortModifiers)(n.enumConstantModifier),
            i = this.mapVisit(r[0]),
            a = this.mapVisit(r[1]),
            o = n.Identifier[0],
            s = this.visit(n.classBody),
            u = n.LBrace
              ? La.printArgumentListWithBraces.call(this, n.argumentList, n.RBrace[0], n.LBrace[0])
              : ''
          return (0, D.rejectAndJoin)(Re, [
            (0, D.rejectAndJoin)(Re, i),
            (0, D.rejectAndJoin)(' ', [
              (0, D.rejectAndJoin)(' ', a),
              (0, D.rejectAndConcat)([o, u]),
              s
            ])
          ])
        }),
        (t.prototype.enumConstantModifier = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.enumBodyDeclarations = function (n) {
          if (n.classBodyDeclaration !== void 0) {
            var r = this.mapVisit(n.classBodyDeclaration),
              i = (0, D.getClassBodyDeclarationsSeparator)(n.classBodyDeclaration)
            return (0, D.rejectAndJoin)((0, B.concat)([Re, Re]), [
              n.Semicolon[0],
              (0, D.rejectAndJoinSeps)(i, r)
            ])
          }
          return (0, Ct.printTokenWithComments)(Pn(Pn({}, n.Semicolon[0]), { image: '' }))
        }),
        (t.prototype.recordDeclaration = function (n) {
          var r = this.visit(n.typeIdentifier),
            i = this.visit(n.typeParameters),
            a = this.visit(n.recordHeader),
            o = '',
            s = this.visit(n.superinterfaces)
          s && (o = (0, B.indent)((0, D.rejectAndConcat)([Se, s])))
          var u = this.visit(n.recordBody)
          return (0, D.rejectAndJoin)(' ', [
            (0, B.group)(
              (0, D.rejectAndConcat)([(0, D.rejectAndJoin)(' ', [n.Record[0], r]), i, a, o])
            ),
            u
          ])
        }),
        (t.prototype.recordHeader = function (n) {
          var r = this.visit(n.recordComponentList)
          return (0, D.putIntoBraces)(r, fr, n.LBrace[0], n.RBrace[0])
        }),
        (t.prototype.recordComponentList = function (n) {
          var r = this.mapVisit(n.recordComponent),
            i = (0, D.getBlankLinesSeparator)(n.recordComponent, Se),
            a = n.Comma
              ? n.Comma.map(function (o, s) {
                  return (0, B.concat)([o, i[s]])
                })
              : []
          return (0, D.rejectAndJoinSeps)(a, r)
        }),
        (t.prototype.recordComponent = function (n) {
          var r = this.mapVisit(n.recordComponentModifier),
            i = this.visit(n.unannType)
          if (n.Identifier !== void 0)
            return (0, B.group)(
              (0, D.rejectAndJoin)(Se, [(0, B.join)(Se, r), (0, B.join)(' ', [i, n.Identifier[0]])])
            )
          var a = this.visit(n.variableArityRecordComponent)
          return n.variableArityRecordComponent[0].children.annotation !== void 0
            ? (0, B.group)((0, D.rejectAndJoin)(Se, [(0, B.join)(Se, r), (0, B.join)(' ', [i, a])]))
            : (0, B.group)((0, D.rejectAndJoin)(Se, [(0, B.join)(Se, r), (0, B.concat)([i, a])]))
        }),
        (t.prototype.variableArityRecordComponent = function (n) {
          var r = this.mapVisit(n.annotation),
            i = n.Identifier[0]
          return (0, D.rejectAndJoin)(' ', [
            (0, D.rejectAndConcat)([(0, D.rejectAndJoin)(' ', r), n.DotDotDot[0]]),
            i
          ])
        }),
        (t.prototype.recordComponentModifier = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.recordBody = function (n) {
          return (0, D.putIntoBraces)(
            (0, D.rejectAndJoinSeps)(
              (0, D.getBlankLinesSeparator)(n.recordBodyDeclaration),
              this.mapVisit(n.recordBodyDeclaration)
            ),
            Re,
            n.LCurly[0],
            n.RCurly[0]
          )
        }),
        (t.prototype.recordBodyDeclaration = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.compactConstructorDeclaration = function (n) {
          var r = (0, D.sortModifiers)(n.constructorModifier),
            i = this.mapVisit(r[0]),
            a = this.mapVisit(r[1]),
            o = this.visit(n.simpleTypeName),
            s = this.visit(n.constructorBody)
          return (0, D.rejectAndJoin)(' ', [
            (0, B.group)(
              (0, D.rejectAndJoin)(Re, [
                (0, D.rejectAndJoin)(Re, i),
                (0, D.rejectAndJoin)(' ', [(0, B.join)(' ', a), o])
              ])
            ),
            s
          ])
        }),
        (t.prototype.isClassDeclaration = function () {
          return 'isClassDeclaration'
        }),
        (t.prototype.identifyClassBodyDeclarationType = function () {
          return 'identifyClassBodyDeclarationType'
        }),
        (t.prototype.isDims = function () {
          return 'isDims'
        }),
        (t.prototype.isCompactConstructorDeclaration = function () {
          return 'isCompactConstructorDeclaration'
        }),
        t
      )
    })(ST.BaseCstPrettierPrinter)
  fi.ClassesPrettierVisitor = TT
  var hi = {},
    mi = {}
  Object.defineProperty(mi, '__esModule', { value: !0 }),
    (mi.handleCommentsBinaryExpression = void 0)
  var gT = $e
  function LT(e) {
    var t = 1
    e.BinaryOperator !== void 0 &&
      e.BinaryOperator.forEach(function (n) {
        var r
        if ((0, gT.hasLeadingComments)(n)) {
          for (; e.unaryExpression[t].location.startOffset < n.endOffset; ) t++
          var i = n.leadingComments[0].startLine - 1 - n.startLine
          n.startLine !== e.unaryExpression[t].location.startLine &&
            n.leadingComments.forEach(function (a) {
              ;(a.startLine += 1), (a.endLine += 1)
            }),
            (n.startLine += i),
            (n.endLine += i),
            (e.unaryExpression[t].leadingComments = e.unaryExpression[t].leadingComments || []),
            (r = e.unaryExpression[t].leadingComments).unshift.apply(r, n.leadingComments),
            delete n.leadingComments
        }
      })
  }
  mi.handleCommentsBinaryExpression = LT
  var RT =
      (W && W.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          if (typeof n != 'function' && n !== null)
            throw new TypeError(
              'Class extends value ' + String(n) + ' is not a constructor or null'
            )
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })(),
    vi =
      (W && W.__spreadArray) ||
      function (e, t, n) {
        if (n || arguments.length === 2)
          for (var r = 0, i = t.length, a; r < i; r++)
            (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]))
        return e.concat(a || Array.prototype.slice.call(t))
      },
    UT =
      (W && W.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e }
      }
  Object.defineProperty(hi, '__esModule', { value: !0 }), (hi.ExpressionsPrettierVisitor = void 0)
  var OT = UT(si),
    Di = yt,
    NT = ct,
    _T = Pe,
    IT = on,
    Qu = Aa(),
    Ra = Oe,
    BT = mi,
    se = ve,
    O = xt(),
    $u = Di.builders.ifBreak,
    At = Di.builders.line,
    lt = Di.builders.softline,
    FT = Di.builders.indentIfBreak,
    MT = (function (e) {
      RT(t, e)
      function t() {
        return (e !== null && e.apply(this, arguments)) || this
      }
      return (
        (t.prototype.expression = function (n, r) {
          return this.visitSingle(n, r)
        }),
        (t.prototype.lambdaExpression = function (n, r) {
          var i = (0, se.group)(
              this.visit(n.lambdaParameters, r),
              r ? { id: r.lambdaParametersGroupId } : void 0
            ),
            a = this.visit(n.lambdaBody),
            o = n.lambdaBody[0].children.block !== void 0
          return o
            ? (0, O.rejectAndJoin)(' ', [
                i,
                n.Arrow[0],
                (r == null ? void 0 : r.lambdaParametersGroupId) !== void 0
                  ? FT(a, { groupId: r.lambdaParametersGroupId })
                  : a
              ])
            : (0, se.group)(
                (0, se.indent)(
                  (0, O.rejectAndJoin)(At, [(0, O.rejectAndJoin)(' ', [i, n.Arrow[0]]), a])
                )
              )
        }),
        (t.prototype.lambdaParameters = function (n, r) {
          return n.lambdaParametersWithBraces
            ? this.visitSingle(n, r)
            : (0, Ra.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.lambdaParametersWithBraces = function (n, r) {
          var i = this.visit(n.lambdaParameterList)
          if ((0, O.findDeepElementInPartsArray)(i, ',')) {
            var a = (0, O.putIntoBraces)(i, lt, n.LBrace[0], n.RBrace[0])
            return (r == null ? void 0 : r.isInsideMethodInvocationSuffix) === !0
              ? (0, se.indent)((0, se.concat)([lt, a]))
              : a
          }
          return (n.LBrace && n.RBrace && (!i || (0, O.isExplicitLambdaParameter)(n))) ||
            n.LBrace[0].leadingComments ||
            n.LBrace[0].trailingComments ||
            n.RBrace[0].leadingComments ||
            n.RBrace[0].trailingComments
            ? (0, O.rejectAndConcat)([n.LBrace[0], i, n.RBrace[0]])
            : i
        }),
        (t.prototype.lambdaParameterList = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.inferredLambdaParameterList = function (n) {
          var r = n.Comma
            ? n.Comma.map(function (i) {
                return (0, se.concat)([i, At])
              })
            : []
          return (0, O.rejectAndJoinSeps)(r, n.Identifier)
        }),
        (t.prototype.explicitLambdaParameterList = function (n) {
          var r = this.mapVisit(n.lambdaParameter),
            i = n.Comma
              ? n.Comma.map(function (a) {
                  return (0, se.concat)([a, At])
                })
              : []
          return (0, O.rejectAndJoinSeps)(i, r)
        }),
        (t.prototype.lambdaParameter = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.regularLambdaParameter = function (n) {
          var r = this.mapVisit(n.variableModifier),
            i = this.visit(n.lambdaParameterType),
            a = this.visit(n.variableDeclaratorId)
          return (0, O.rejectAndJoin)(' ', [(0, O.rejectAndJoin)(' ', r), i, a])
        }),
        (t.prototype.lambdaParameterType = function (n) {
          return n.unannType
            ? this.visitSingle(n)
            : (0, Ra.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.lambdaBody = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.ternaryExpression = function (n, r) {
          var i = this.visit(n.binaryExpression, r)
          if (n.QuestionMark) {
            var a = this.visit(n.expression[0]),
              o = this.visit(n.expression[1])
            return (0, se.indent)(
              (0, se.group)(
                (0, O.rejectAndConcat)([
                  (0, O.rejectAndJoin)(At, [
                    i,
                    (0, O.rejectAndJoin)(' ', [n.QuestionMark[0], a]),
                    (0, O.rejectAndJoin)(' ', [n.Colon[0], o])
                  ])
                ])
              )
            )
          }
          return i
        }),
        (t.prototype.binaryExpression = function (n, r) {
          ;(0, BT.handleCommentsBinaryExpression)(n)
          var i = this.mapVisit((0, O.sortNodes)([n.pattern, n.referenceType])),
            a = this.mapVisit(n.expression),
            o = this.mapVisit(n.unaryExpression),
            s = (0, O.separateTokensIntoGroups)(n),
            u = s.groupsOfOperator,
            c = s.sortedBinaryOperators,
            p = [],
            f = []
          return u.length === 1 && u[0].length === 0
            ? o.shift()
            : (u.forEach(function (m) {
                f = [o.shift()]
                for (var C = 0; C < m.length; C++) {
                  var A = m[C],
                    l = (0, O.isShiftOperator)(m, C)
                  A.tokenType.name === 'Instanceof'
                    ? f.push((0, O.rejectAndJoin)(' ', [n.Instanceof[0], i.shift()]))
                    : (0, O.matchCategory)(A, "'AssignmentOperator'")
                    ? f.push((0, se.indent)((0, O.rejectAndJoin)(At, [A, a.shift()])))
                    : l === 'leftShift' || l === 'rightShift'
                    ? (f.push(
                        (0, O.rejectAndJoin)(' ', [
                          (0, O.rejectAndConcat)([A, m[C + 1]]),
                          o.shift()
                        ])
                      ),
                      C++)
                    : l === 'doubleRightShift'
                    ? (f.push(
                        (0, O.rejectAndJoin)(' ', [
                          (0, O.rejectAndConcat)([A, m[C + 1], m[C + 2]]),
                          o.shift()
                        ])
                      ),
                      (C += 2))
                    : (0, O.matchCategory)(A, "'BinaryOperator'") &&
                      f.push((0, O.rejectAndJoin)(At, [A, o.shift()]))
                }
                p.push((0, se.group)((0, O.rejectAndJoin)(' ', f)))
              }),
              r !== void 0 && r.addParenthesisToWrapStatement
                ? (0, se.group)(
                    (0, se.concat)([
                      $u('(', ''),
                      (0, se.indent)(
                        (0, se.concat)([
                          lt,
                          (0, se.group)(
                            (0, O.rejectAndJoinSeps)(
                              c.map(function (m) {
                                return (0, se.concat)([' ', m, At])
                              }),
                              p
                            )
                          )
                        ])
                      ),
                      lt,
                      $u(')')
                    ])
                  )
                : (0, se.group)(
                    (0, O.rejectAndJoinSeps)(
                      c.map(function (m) {
                        return (0, se.concat)([' ', m, At])
                      }),
                      p
                    )
                  ))
        }),
        (t.prototype.unaryExpression = function (n) {
          var r = n.UnaryPrefixOperator ? n.UnaryPrefixOperator : [],
            i = this.visit(n.primary),
            a = n.UnarySuffixOperator ? n.UnarySuffixOperator : []
          return (0, O.rejectAndConcat)([(0, O.rejectAndConcat)(r), i, (0, O.rejectAndConcat)(a)])
        }),
        (t.prototype.unaryExpressionNotPlusMinus = function (n) {
          var r = n.UnaryPrefixOperatorNotPlusMinus
              ? (0, O.rejectAndJoin)(' ', n.UnaryPrefixOperatorNotPlusMinus)
              : '',
            i = this.visit(n.primary),
            a = n.UnarySuffixOperator ? (0, O.rejectAndJoin)(' ', n.UnarySuffixOperator) : ''
          return (0, O.rejectAndJoin)(' ', [r, i, a])
        }),
        (t.prototype.primary = function (n) {
          var r = (0, O.isUniqueMethodInvocation)(n.primarySuffix),
            i = this.visit(n.primaryPrefix, { shouldBreakBeforeFirstMethodInvocation: r > 1 }),
            a = []
          if (n.primarySuffix !== void 0) {
            var o = !0
            n.primarySuffix.length > 1 &&
              n.primarySuffix[1].children.methodInvocationSuffix &&
              Object.keys(n.primarySuffix[1].children.methodInvocationSuffix[0].children).length ===
                2 &&
              (o = !1),
              n.primarySuffix[0].children.Dot !== void 0 &&
                n.primaryPrefix[0].children.newExpression !== void 0 &&
                a.push(lt),
              a.push(
                this.visit(n.primarySuffix[0], {
                  shouldDedent:
                    r !== 1 &&
                    n.primaryPrefix[0] &&
                    n.primaryPrefix[0].children.fqnOrRefType &&
                    n.primaryPrefix[0].children.fqnOrRefType[0].children.Dot === void 0 &&
                    n.primarySuffix[0].children.methodInvocationSuffix &&
                    n.primarySuffix[0].children.methodInvocationSuffix[0].children.argumentList &&
                    n.primarySuffix[0].children.methodInvocationSuffix[0].children.argumentList[0]
                      .children.expression &&
                    n.primarySuffix[0].children.methodInvocationSuffix[0].children.argumentList[0]
                      .children.expression[0].children.lambdaExpression === void 0
                })
              )
            for (var s = 1; s < n.primarySuffix.length; s++)
              n.primarySuffix[s].children.Dot !== void 0 &&
                n.primarySuffix[s - 1].children.methodInvocationSuffix !== void 0 &&
                a.push(lt),
                a.push(this.visit(n.primarySuffix[s]))
            if (r === 1 && n.primaryPrefix[0].children.newExpression === void 0)
              return (0, se.group)(
                (0, O.rejectAndConcat)([
                  i,
                  o ? a[0] : (0, se.indent)(a[0]),
                  (0, se.indent)((0, O.rejectAndConcat)(a.slice(1)))
                ])
              )
          }
          return (0, se.group)(
            (0, O.rejectAndConcat)([i, (0, se.indent)((0, O.rejectAndConcat)(a))])
          )
        }),
        (t.prototype.primaryPrefix = function (n, r) {
          return n.This || n.Void
            ? (0, Ra.printTokenWithComments)(this.getSingle(n))
            : this.visitSingle(n, r)
        }),
        (t.prototype.primarySuffix = function (n, r) {
          if (n.Dot) {
            if (n.This) return (0, O.rejectAndConcat)([n.Dot[0], n.This[0]])
            if (n.Identifier) {
              var i = this.visit(n.typeArguments)
              return (0, O.rejectAndConcat)([n.Dot[0], i, n.Identifier[0]])
            }
            var a = this.visit(n.unqualifiedClassInstanceCreationExpression)
            return (0, O.rejectAndConcat)([n.Dot[0], a])
          }
          return this.visitSingle(n, r)
        }),
        (t.prototype.fqnOrRefType = function (n, r) {
          var i = this.visit(n.fqnOrRefTypePartFirst),
            a = this.mapVisit(n.fqnOrRefTypePartRest),
            o = this.visit(n.dims),
            s = n.Dot ? n.Dot : [],
            u = n.Dot && n.Dot.length === 1
          if (r !== void 0 && r.shouldBreakBeforeFirstMethodInvocation === !0) {
            if (u)
              return (0, O.rejectAndConcat)([
                (0, se.indent)(
                  (0, O.rejectAndJoin)((0, se.concat)([lt, s[0]]), [
                    i,
                    (0, O.rejectAndJoinSeps)(s.slice(1), a),
                    o
                  ])
                )
              ])
            if (n.Dot)
              return (0, se.indent)(
                (0, O.rejectAndConcat)([
                  (0, O.rejectAndJoinSeps)(
                    s.slice(0, s.length - 1),
                    vi([i], a.slice(0, a.length - 1), !0)
                  ),
                  lt,
                  (0, O.rejectAndConcat)([s[s.length - 1], a[a.length - 1]]),
                  o
                ])
              )
          }
          return (0, O.rejectAndConcat)([(0, O.rejectAndJoinSeps)(s, vi([i], a, !0)), o])
        }),
        (t.prototype.fqnOrRefTypePartFirst = function (n) {
          var r = this.mapVisit(n.annotation),
            i = this.visit(n.fqnOrRefTypePartCommon)
          return (0, O.rejectAndJoin)(' ', [(0, O.rejectAndJoin)(' ', r), i])
        }),
        (t.prototype.fqnOrRefTypePartRest = function (n) {
          var r = this.mapVisit(n.annotation),
            i = this.visit(n.fqnOrRefTypePartCommon),
            a = this.visit(n.typeArguments)
          return (0, O.rejectAndJoin)(' ', [
            (0, O.rejectAndJoin)(' ', r),
            (0, O.rejectAndConcat)([a, i])
          ])
        }),
        (t.prototype.fqnOrRefTypePartCommon = function (n) {
          var r = null
          n.Identifier ? (r = n.Identifier[0]) : (r = n.Super[0])
          var i = this.visit(n.typeArguments)
          return (0, O.rejectAndConcat)([r, i])
        }),
        (t.prototype.parenthesisExpression = function (n) {
          var r = this.visit(n.expression)
          return (0, O.putIntoBraces)(r, lt, n.LBrace[0], n.RBrace[0])
        }),
        (t.prototype.castExpression = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.primitiveCastExpression = function (n) {
          var r = this.visit(n.primitiveType),
            i = this.visit(n.unaryExpression)
          return (0, O.rejectAndJoin)(' ', [
            (0, O.rejectAndConcat)([n.LBrace[0], r, n.RBrace[0]]),
            i
          ])
        }),
        (t.prototype.referenceTypeCastExpression = function (n) {
          var r = this.visit(n.referenceType),
            i = n.additionalBound !== void 0,
            a = (0, O.rejectAndJoin)(At, this.mapVisit(n.additionalBound)),
            o = n.lambdaExpression
              ? this.visit(n.lambdaExpression)
              : this.visit(n.unaryExpressionNotPlusMinus)
          return (0, O.rejectAndJoin)(' ', [
            (0, O.putIntoBraces)(
              (0, O.rejectAndJoin)(At, [r, a]),
              i ? lt : '',
              n.LBrace[0],
              n.RBrace[0]
            ),
            o
          ])
        }),
        (t.prototype.newExpression = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.unqualifiedClassInstanceCreationExpression = function (n) {
          var r = this.visit(n.typeArguments),
            i = this.visit(n.classOrInterfaceTypeToInstantiate),
            a = Qu.printArgumentListWithBraces.call(this, n.argumentList, n.RBrace[0], n.LBrace[0]),
            o = this.visit(n.classBody)
          return (0, O.rejectAndJoin)(' ', [n.New[0], (0, O.rejectAndConcat)([r, i, a]), o])
        }),
        (t.prototype.classOrInterfaceTypeToInstantiate = function (n) {
          var r = this,
            i = (0, O.sortAnnotationIdentifier)(n.annotation, n.Identifier),
            a = [],
            o = []
          ;(0, OT.default)(i, function (c) {
            ;(0, _T.isAnnotationCstNode)(c)
              ? o.push(r.visit([c]))
              : (o.push(c), a.push((0, O.rejectAndJoin)(' ', o)), (o = []))
          })
          var s = this.visit(n.typeArgumentsOrDiamond),
            u = n.Dot ? n.Dot : []
          return (0, O.rejectAndConcat)([(0, O.rejectAndJoinSeps)(u, a), s])
        }),
        (t.prototype.typeArgumentsOrDiamond = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.diamond = function (n) {
          return (0, se.concat)([n.Less[0], n.Greater[0]])
        }),
        (t.prototype.methodInvocationSuffix = function (n, r) {
          var i = (0, IT.isArgumentListSingleLambda)(n.argumentList)
          if (i)
            return Qu.printSingleLambdaInvocation.call(
              this,
              n.argumentList,
              n.RBrace[0],
              n.LBrace[0]
            )
          var a = this.visit(n.argumentList)
          return r && r.shouldDedent
            ? (0, se.dedent)((0, O.putIntoBraces)(a, lt, n.LBrace[0], n.RBrace[0]))
            : (0, O.putIntoBraces)(a, lt, n.LBrace[0], n.RBrace[0])
        }),
        (t.prototype.argumentList = function (n, r) {
          var i = this.mapVisit(n.expression, r),
            a = n.Comma
              ? n.Comma.map(function (o) {
                  return (0, se.concat)([o, At])
                })
              : []
          return (0, O.rejectAndJoinSeps)(a, i)
        }),
        (t.prototype.arrayCreationExpression = function (n) {
          var r = n.primitiveType
              ? this.visit(n.primitiveType)
              : this.visit(n.classOrInterfaceType),
            i = n.arrayCreationDefaultInitSuffix
              ? this.visit(n.arrayCreationDefaultInitSuffix)
              : this.visit(n.arrayCreationExplicitInitSuffix)
          return (0, O.rejectAndConcat)([(0, se.concat)([n.New[0], ' ']), r, i])
        }),
        (t.prototype.arrayCreationDefaultInitSuffix = function (n) {
          var r = this.visit(n.dimExprs),
            i = this.visit(n.dims)
          return (0, O.rejectAndConcat)([r, i])
        }),
        (t.prototype.arrayCreationExplicitInitSuffix = function (n) {
          var r = this.visit(n.dims),
            i = this.visit(n.arrayInitializer)
          return (0, O.rejectAndJoin)(' ', [r, i])
        }),
        (t.prototype.dimExprs = function (n) {
          var r = this.mapVisit(n.dimExpr)
          return (0, O.rejectAndConcat)(r)
        }),
        (t.prototype.dimExpr = function (n) {
          var r = this.mapVisit(n.annotation),
            i = this.visit(n.expression)
          return (0, O.rejectAndJoin)(' ', [
            (0, O.rejectAndJoin)(' ', r),
            (0, O.rejectAndConcat)([n.LSquare[0], i, n.RSquare[0]])
          ])
        }),
        (t.prototype.classLiteralSuffix = function (n) {
          var r = []
          if (n.LSquare)
            for (var i = 0; i < n.LSquare.length; i++)
              r.push((0, se.concat)([n.LSquare[i], n.RSquare[i]]))
          return (0, O.rejectAndConcat)(vi(vi([], r, !0), [n.Dot[0], n.Class[0]], !1))
        }),
        (t.prototype.arrayAccessSuffix = function (n) {
          var r = this.visit(n.expression)
          return (0, O.rejectAndConcat)([n.LSquare[0], r, n.RSquare[0]])
        }),
        (t.prototype.methodReferenceSuffix = function (n) {
          var r = this.visit(n.typeArguments),
            i = n.New ? n.New[0] : n.Identifier[0]
          return (0, O.rejectAndConcat)([n.ColonColon[0], r, i])
        }),
        (t.prototype.pattern = function (n) {
          var r = this.visit(n.primaryPattern)
          if (n.AndAnd === void 0) return r
          var i = this.visit(n.binaryExpression)
          return (0, O.rejectAndConcat)([r, ' ', n.AndAnd[0], At, i])
        }),
        (t.prototype.primaryPattern = function (n) {
          if (n.LBrace === void 0) return this.visitSingle(n)
          var r = this.visit(n.pattern)
          return (0, O.putIntoBraces)(r, lt, n.LBrace[0], n.RBrace[0])
        }),
        (t.prototype.typePattern = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.identifyNewExpressionType = function () {
          return 'identifyNewExpressionType'
        }),
        (t.prototype.isLambdaExpression = function () {
          return 'isLambdaExpression'
        }),
        (t.prototype.isCastExpression = function () {
          return 'isCastExpression'
        }),
        (t.prototype.isPrimitiveCastExpression = function () {
          return 'isPrimitiveCastExpression'
        }),
        (t.prototype.isReferenceTypeCastExpression = function () {
          return 'isReferenceTypeCastExpression'
        }),
        (t.prototype.isRefTypeInMethodRef = function () {
          return 'isRefTypeInMethodRef'
        }),
        t
      )
    })(NT.BaseCstPrettierPrinter)
  hi.ExpressionsPrettierVisitor = MT
  var Ei = {},
    bT =
      (W && W.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          if (typeof n != 'function' && n !== null)
            throw new TypeError(
              'Class extends value ' + String(n) + ' is not a constructor or null'
            )
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })()
  Object.defineProperty(Ei, '__esModule', { value: !0 }), (Ei.InterfacesPrettierVisitor = void 0)
  var et = ve,
    pr = Oe,
    z = xt(),
    Ua = yt,
    PT = ct,
    En = Ua.builders.line,
    yi = Ua.builders.softline,
    Xt = Ua.builders.hardline,
    kT = (function (e) {
      bT(t, e)
      function t() {
        return (e !== null && e.apply(this, arguments)) || this
      }
      return (
        (t.prototype.interfaceDeclaration = function (n) {
          var r = (0, z.sortModifiers)(n.interfaceModifier),
            i = this.mapVisit(r[0]),
            a = this.mapVisit(r[1]),
            o = n.normalInterfaceDeclaration
              ? this.visit(n.normalInterfaceDeclaration)
              : this.visit(n.annotationTypeDeclaration)
          return (0, z.rejectAndJoin)(Xt, [
            (0, z.rejectAndJoin)(Xt, i),
            (0, z.rejectAndJoin)(' ', [(0, z.rejectAndJoin)(' ', a), o])
          ])
        }),
        (t.prototype.normalInterfaceDeclaration = function (n) {
          var r = this.visit(n.typeIdentifier),
            i = this.visit(n.typeParameters),
            a = this.visit(n.extendsInterfaces),
            o = this.visit(n.interfacePermits),
            s = this.visit(n.interfaceBody),
            u = ''
          a && (u = (0, et.indent)((0, z.rejectAndConcat)([yi, a])))
          var c = ''
          return (
            o && (c = (0, et.indent)((0, z.rejectAndConcat)([yi, o]))),
            (0, z.rejectAndJoin)(' ', [
              (0, et.group)(
                (0, z.rejectAndJoin)(' ', [n.Interface[0], (0, et.concat)([r, i]), u, c])
              ),
              s
            ])
          )
        }),
        (t.prototype.interfaceModifier = function (n) {
          return n.annotation
            ? this.visitSingle(n)
            : (0, pr.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.extendsInterfaces = function (n) {
          var r = this.visit(n.interfaceTypeList)
          return (0, et.group)(
            (0, z.rejectAndConcat)([n.Extends[0], (0, et.indent)((0, z.rejectAndConcat)([En, r]))])
          )
        }),
        (t.prototype.interfacePermits = function (n) {
          return this.classPermits(n)
        }),
        (t.prototype.interfaceBody = function (n) {
          var r = ''
          if (n.interfaceMemberDeclaration !== void 0) {
            var i = this.mapVisit(n.interfaceMemberDeclaration),
              a = (0, z.getInterfaceBodyDeclarationsSeparator)(n.interfaceMemberDeclaration)
            r = (0, z.rejectAndJoinSeps)(a, i)
          }
          return (0, z.putIntoBraces)(r, Xt, n.LCurly[0], n.RCurly[0])
        }),
        (t.prototype.interfaceMemberDeclaration = function (n) {
          return n.Semicolon ? (0, z.displaySemicolon)(n.Semicolon[0]) : this.visitSingle(n)
        }),
        (t.prototype.constantDeclaration = function (n) {
          var r = (0, z.sortModifiers)(n.constantModifier),
            i = this.mapVisit(r[0]),
            a = this.mapVisit(r[1]),
            o = this.visit(n.unannType),
            s = this.visit(n.variableDeclaratorList)
          return (0, z.rejectAndJoin)(Xt, [
            (0, z.rejectAndJoin)(Xt, i),
            (0, z.rejectAndJoin)(' ', [
              (0, z.rejectAndJoin)(' ', a),
              o,
              (0, z.rejectAndConcat)([s, n.Semicolon[0]])
            ])
          ])
        }),
        (t.prototype.constantModifier = function (n) {
          return n.annotation
            ? this.visitSingle(n)
            : (0, pr.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.interfaceMethodDeclaration = function (n) {
          var r = (0, z.sortModifiers)(n.interfaceMethodModifier),
            i = this.mapVisit(r[0]),
            a = this.mapVisit(r[1]),
            o = this.visit(n.methodHeader),
            s = this.visit(n.methodBody),
            u = (0, z.isStatementEmptyStatement)(s) ? '' : ' '
          return (0, z.rejectAndJoin)(Xt, [
            (0, z.rejectAndJoin)(Xt, i),
            (0, z.rejectAndJoin)(' ', [
              (0, z.rejectAndJoin)(' ', a),
              (0, z.rejectAndJoin)(u, [o, s])
            ])
          ])
        }),
        (t.prototype.interfaceMethodModifier = function (n) {
          return n.annotation
            ? this.visitSingle(n)
            : (0, pr.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.annotationTypeDeclaration = function (n) {
          var r = this.visit(n.typeIdentifier),
            i = this.visit(n.annotationTypeBody)
          return (0, z.rejectAndJoin)(' ', [(0, et.concat)([n.At[0], n.Interface[0]]), r, i])
        }),
        (t.prototype.annotationTypeBody = function (n) {
          var r = this.mapVisit(n.annotationTypeMemberDeclaration)
          return (0, z.rejectAndJoin)(En, [
            (0, et.indent)(
              (0, z.rejectAndJoin)(En, [
                n.LCurly[0],
                (0, z.rejectAndJoin)((0, et.concat)([En, En]), r)
              ])
            ),
            n.RCurly[0]
          ])
        }),
        (t.prototype.annotationTypeMemberDeclaration = function (n) {
          return n.Semicolon
            ? (0, pr.printTokenWithComments)(this.getSingle(n))
            : this.visitSingle(n)
        }),
        (t.prototype.annotationTypeElementDeclaration = function (n) {
          var r = (0, z.sortModifiers)(n.annotationTypeElementModifier),
            i = this.mapVisit(r[0]),
            a = this.mapVisit(r[1]),
            o = this.visit(n.unannType),
            s = n.Identifier[0],
            u = this.visit(n.dims),
            c = n.defaultValue ? (0, et.concat)([' ', this.visit(n.defaultValue)]) : ''
          return (0, z.rejectAndJoin)(Xt, [
            (0, z.rejectAndJoin)(Xt, i),
            (0, z.rejectAndJoin)(' ', [
              (0, z.rejectAndJoin)(' ', a),
              o,
              (0, z.rejectAndConcat)([
                s,
                (0, et.concat)([n.LBrace[0], n.RBrace[0]]),
                u,
                c,
                n.Semicolon[0]
              ])
            ])
          ])
        }),
        (t.prototype.annotationTypeElementModifier = function (n) {
          return n.annotation
            ? this.visitSingle(n)
            : (0, pr.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.defaultValue = function (n) {
          var r = this.visit(n.elementValue)
          return (0, z.rejectAndJoin)(' ', [n.Default[0], r])
        }),
        (t.prototype.annotation = function (n) {
          var r = this.visit(n.typeName),
            i = ''
          return (
            n.LBrace &&
              (n.elementValuePairList
                ? (i = (0, z.putIntoBraces)(
                    this.visit(n.elementValuePairList),
                    yi,
                    n.LBrace[0],
                    n.RBrace[0]
                  ))
                : n.elementValue &&
                  (i = (0, z.putIntoBraces)(
                    this.visit(n.elementValue),
                    yi,
                    n.LBrace[0],
                    n.RBrace[0]
                  ))),
            (0, et.group)((0, z.rejectAndConcat)([n.At[0], r, i]))
          )
        }),
        (t.prototype.elementValuePairList = function (n) {
          var r = this.mapVisit(n.elementValuePair),
            i = n.Comma
              ? n.Comma.map(function (a) {
                  return (0, et.concat)([a, En])
                })
              : []
          return (0, z.rejectAndJoinSeps)(i, r)
        }),
        (t.prototype.elementValuePair = function (n) {
          var r = n.Identifier[0],
            i = this.visit(n.elementValue)
          return (0, z.rejectAndJoin)(' ', [r, n.Equals[0], i])
        }),
        (t.prototype.elementValue = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.elementValueArrayInitializer = function (n) {
          var r = this.visit(n.elementValueList)
          return (0, z.printArrayList)({
            list: r,
            extraComma: n.Comma,
            LCurly: n.LCurly[0],
            RCurly: n.RCurly[0],
            trailingComma: this.prettierOptions.trailingComma
          })
        }),
        (t.prototype.elementValueList = function (n) {
          var r = this.mapVisit(n.elementValue),
            i = n.Comma
              ? n.Comma.map(function (a) {
                  return (0, et.concat)([a, En])
                })
              : []
          return (0, et.group)((0, z.rejectAndConcat)([(0, z.rejectAndJoinSeps)(i, r)]))
        }),
        (t.prototype.identifyInterfaceBodyDeclarationType = function () {
          return 'identifyInterfaceBodyDeclarationType'
        }),
        (t.prototype.identifyAnnotationBodyDeclarationType = function () {
          return 'identifyAnnotationBodyDeclarationType'
        }),
        (t.prototype.isSimpleElementValueAnnotation = function () {
          return 'isSimpleElementValueAnnotation'
        }),
        t
      )
    })(PT.BaseCstPrettierPrinter)
  Ei.InterfacesPrettierVisitor = kT
  var Ci = {},
    xT =
      (W && W.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          if (typeof n != 'function' && n !== null)
            throw new TypeError(
              'Class extends value ' + String(n) + ' is not a constructor or null'
            )
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })()
  Object.defineProperty(Ci, '__esModule', { value: !0 }),
    (Ci.LexicalStructurePrettierVisitor = void 0)
  var Ai = Oe,
    wT = ct,
    jT = (function (e) {
      xT(t, e)
      function t() {
        return (e !== null && e.apply(this, arguments)) || this
      }
      return (
        (t.prototype.literal = function (n) {
          return n.CharLiteral || n.TextBlock || n.StringLiteral || n.Null
            ? (0, Ai.printTokenWithComments)(this.getSingle(n))
            : this.visitSingle(n)
        }),
        (t.prototype.integerLiteral = function (n) {
          return (0, Ai.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.floatingPointLiteral = function (n) {
          return (0, Ai.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.booleanLiteral = function (n) {
          return (0, Ai.printTokenWithComments)(this.getSingle(n))
        }),
        t
      )
    })(wT.BaseCstPrettierPrinter)
  Ci.LexicalStructurePrettierVisitor = jT
  var Si = {},
    VT =
      (W && W.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          if (typeof n != 'function' && n !== null)
            throw new TypeError(
              'Class extends value ' + String(n) + ' is not a constructor or null'
            )
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })()
  Object.defineProperty(Si, '__esModule', { value: !0 }), (Si.NamesPrettierVisitor = void 0)
  var kn = xt(),
    ec = Oe,
    GT = ct,
    KT = (function (e) {
      VT(t, e)
      function t() {
        return (e !== null && e.apply(this, arguments)) || this
      }
      return (
        (t.prototype.typeIdentifier = function (n) {
          return (0, ec.printTokenWithComments)(n.Identifier[0])
        }),
        (t.prototype.moduleName = function (n) {
          return (0, kn.buildFqn)(n.Identifier, n.Dot)
        }),
        (t.prototype.packageName = function (n) {
          return (0, kn.buildFqn)(n.Identifier, n.Dot)
        }),
        (t.prototype.typeName = function (n) {
          return (0, kn.buildFqn)(n.Identifier, n.Dot)
        }),
        (t.prototype.expressionName = function (n) {
          return (0, kn.buildFqn)(n.Identifier, n.Dot)
        }),
        (t.prototype.methodName = function (n) {
          return (0, ec.printTokenWithComments)(n.Identifier[0])
        }),
        (t.prototype.packageOrTypeName = function (n) {
          return (0, kn.buildFqn)(n.Identifier, n.Dot)
        }),
        (t.prototype.ambiguousName = function (n) {
          return (0, kn.buildFqn)(n.Identifier, n.Dot)
        }),
        t
      )
    })(GT.BaseCstPrettierPrinter)
  Si.NamesPrettierVisitor = KT
  var Ti = {},
    WT =
      (W && W.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          if (typeof n != 'function' && n !== null)
            throw new TypeError(
              'Class extends value ' + String(n) + ' is not a constructor or null'
            )
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })(),
    Oa =
      (W && W.__spreadArray) ||
      function (e, t, n) {
        if (n || arguments.length === 2)
          for (var r = 0, i = t.length, a; r < i; r++)
            (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]))
        return e.concat(a || Array.prototype.slice.call(t))
      },
    JT =
      (W && W.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e }
      }
  Object.defineProperty(Ti, '__esModule', { value: !0 }),
    (Ti.TypesValuesAndVariablesPrettierVisitor = void 0)
  var tc = JT(si),
    It = ve,
    nc = Oe,
    tt = xt(),
    qT = ct,
    xn = Pe,
    HT = (function (e) {
      WT(t, e)
      function t() {
        return (e !== null && e.apply(this, arguments)) || this
      }
      return (
        (t.prototype.primitiveType = function (n) {
          var r = this.mapVisit(n.annotation),
            i = n.numericType ? this.visit(n.numericType) : this.getSingle(n)
          return (0, tt.rejectAndJoin)(' ', [(0, It.join)(' ', r), i])
        }),
        (t.prototype.numericType = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.integralType = function (n) {
          return (0, nc.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.floatingPointType = function (n) {
          return (0, nc.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.referenceType = function (n) {
          var r = this.mapVisit(n.annotation),
            i = n.primitiveType ? this.visit(n.primitiveType) : this.visit(n.classOrInterfaceType),
            a = this.visit(n.dims)
          return (0, tt.rejectAndJoin)(' ', [(0, It.join)(' ', r), (0, It.concat)([i, a])])
        }),
        (t.prototype.classOrInterfaceType = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.classType = function (n) {
          var r = this,
            i = (0, tt.sortClassTypeChildren)(n.annotation, n.typeArguments, n.Identifier),
            a = [],
            o = []
          return (
            (0, tc.default)(i, function (s, u) {
              ;(0, xn.isTypeArgumentsCstNode)(s)
                ? (o.push(r.visit([s])), a.push((0, tt.rejectAndConcat)(o)), (o = []))
                : (0, xn.isAnnotationCstNode)(s)
                ? o.push(r.visit([s]), ' ')
                : (o.push(s),
                  ((u + 1 < i.length && !(0, xn.isTypeArgumentsCstNode)(i[u + 1])) ||
                    u + 1 === i.length) &&
                    (a.push((0, tt.rejectAndConcat)(o)), (o = [])))
            }),
            (0, tt.rejectAndJoinSeps)(n.Dot, a)
          )
        }),
        (t.prototype.interfaceType = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.typeVariable = function (n) {
          var r = this.mapVisit(n.annotation),
            i = this.getSingle(n)
          return (0, tt.rejectAndJoin)(' ', [(0, It.join)(' ', r), i])
        }),
        (t.prototype.dims = function (n) {
          var r = this,
            i = Oa([], n.LSquare, !0)
          n.annotation && (i = Oa(Oa([], i, !0), n.annotation, !0)),
            (i = i.sort(function (s, u) {
              var c = (0, xn.isCstNode)(s) ? s.children.At[0].startOffset : s.startOffset,
                p = (0, xn.isCstNode)(u) ? u.children.At[0].startOffset : u.startOffset
              return c - p
            }))
          var a = [],
            o = []
          return (
            (0, tc.default)(i, function (s) {
              ;(0, xn.isCstNode)(s)
                ? o.push(r.visit([s]))
                : (a.push(
                    (0, tt.rejectAndConcat)([
                      (0, tt.rejectAndJoin)(' ', o),
                      (0, It.concat)([n.LSquare[0], n.RSquare[0]])
                    ])
                  ),
                  (o = []))
            }),
            (0, tt.rejectAndConcat)(a)
          )
        }),
        (t.prototype.typeParameter = function (n) {
          var r = this.mapVisit(n.typeParameterModifier),
            i = this.visit(n.typeIdentifier),
            a = this.visit(n.typeBound)
          return (0, tt.rejectAndJoin)(' ', [(0, It.join)(' ', r), i, a])
        }),
        (t.prototype.typeParameterModifier = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.typeBound = function (n) {
          var r = this.visit(n.classOrInterfaceType),
            i = this.mapVisit(n.additionalBound)
          return (0, tt.rejectAndJoin)(' ', [n.Extends[0], r, (0, It.join)(' ', i)])
        }),
        (t.prototype.additionalBound = function (n) {
          var r = this.visit(n.interfaceType)
          return (0, It.join)(' ', [n.And[0], r])
        }),
        (t.prototype.typeArguments = function (n) {
          var r = this.visit(n.typeArgumentList)
          return (0, tt.rejectAndConcat)([n.Less[0], r, n.Greater[0]])
        }),
        (t.prototype.typeArgumentList = function (n) {
          var r = this.mapVisit(n.typeArgument),
            i = n.Comma
              ? n.Comma.map(function (a) {
                  return (0, It.concat)([a, ' '])
                })
              : []
          return (0, tt.rejectAndJoinSeps)(i, r)
        }),
        (t.prototype.typeArgument = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.wildcard = function (n) {
          var r = this.mapVisit(n.annotation),
            i = this.visit(n.wildcardBounds)
          return (0, tt.rejectAndJoin)(' ', [(0, It.join)(' ', r), n.QuestionMark[0], i])
        }),
        (t.prototype.wildcardBounds = function (n) {
          var r = n.Extends ? n.Extends[0] : n.Super[0],
            i = this.visit(n.referenceType)
          return (0, It.join)(' ', [r, i])
        }),
        t
      )
    })(qT.BaseCstPrettierPrinter)
  Ti.TypesValuesAndVariablesPrettierVisitor = HT
  var gi = {},
    YT =
      (W && W.__extends) ||
      (function () {
        var e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, i) {
                  r.__proto__ = i
                }) ||
              function (r, i) {
                for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a])
              }),
            e(t, n)
          )
        }
        return function (t, n) {
          if (typeof n != 'function' && n !== null)
            throw new TypeError(
              'Class extends value ' + String(n) + ' is not a constructor or null'
            )
          e(t, n)
          function r() {
            this.constructor = t
          }
          t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
        }
      })()
  Object.defineProperty(gi, '__esModule', { value: !0 }),
    (gi.PackagesAndModulesPrettierVisitor = void 0)
  var nt = ve,
    zT = Oe,
    $ = xt(),
    Li = yt,
    XT = ct,
    ZT = Pe,
    wt = Li.builders.line,
    ft = Li.builders.hardline,
    wn = Li.builders.indent,
    jn = Li.builders.group,
    QT = (function (e) {
      YT(t, e)
      function t() {
        return (e !== null && e.apply(this, arguments)) || this
      }
      return (
        (t.prototype.compilationUnit = function (n) {
          var r = (0, ZT.isOrdinaryCompilationUnitCtx)(n)
            ? n.ordinaryCompilationUnit
            : n.modularCompilationUnit
          return (0, nt.concat)([this.visit(r[0]), wt])
        }),
        (t.prototype.ordinaryCompilationUnit = function (n) {
          var r = this.visit(n.packageDeclaration),
            i = (0, $.sortImports)(n.importDeclaration),
            a = this.mapVisit(i.nonStaticImports),
            o = this.mapVisit(i.staticImports),
            s = this.mapVisit(n.typeDeclaration)
          return (0, $.rejectAndConcat)([
            (0, $.rejectAndJoin)((0, nt.concat)([ft, ft]), [
              r,
              (0, $.rejectAndJoin)(ft, o),
              (0, $.rejectAndJoin)(ft, a),
              (0, $.rejectAndJoin)((0, nt.concat)([ft, ft]), s)
            ])
          ])
        }),
        (t.prototype.modularCompilationUnit = function (n) {
          var r = (0, $.sortImports)(n.importDeclaration),
            i = this.mapVisit(r.nonStaticImports),
            a = this.mapVisit(r.staticImports),
            o = this.visit(n.moduleDeclaration)
          return (0, $.rejectAndConcat)([
            (0, $.rejectAndJoin)((0, nt.concat)([ft, ft]), [
              (0, $.rejectAndJoin)(ft, a),
              (0, $.rejectAndJoin)(ft, i),
              o
            ])
          ])
        }),
        (t.prototype.packageDeclaration = function (n) {
          var r = this.mapVisit(n.packageModifier),
            i = (0, $.buildFqn)(n.Identifier, n.Dot)
          return (0, $.rejectAndJoin)(ft, [
            (0, $.rejectAndJoin)(ft, r),
            (0, nt.concat)([n.Package[0], ' ', i, n.Semicolon[0]])
          ])
        }),
        (t.prototype.packageModifier = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.importDeclaration = function (n) {
          if (n.emptyStatement !== void 0) return this.visit(n.emptyStatement)
          var r = n.Static ? n.Static[0] : '',
            i = this.visit(n.packageOrTypeName),
            a = n.Dot ? (0, nt.concat)([n.Dot[0], n.Star[0]]) : ''
          return (0, $.rejectAndJoin)(' ', [
            n.Import[0],
            r,
            (0, $.rejectAndConcat)([i, a, n.Semicolon[0]])
          ])
        }),
        (t.prototype.typeDeclaration = function (n) {
          return n.Semicolon ? (0, $.displaySemicolon)(n.Semicolon[0]) : this.visitSingle(n)
        }),
        (t.prototype.moduleDeclaration = function (n) {
          var r = this.mapVisit(n.annotation),
            i = n.Open ? n.Open[0] : '',
            a = (0, $.buildFqn)(n.Identifier, n.Dot),
            o = this.mapVisit(n.moduleDirective),
            s = (0, $.rejectAndJoinSeps)((0, $.getBlankLinesSeparator)(n.moduleDirective), o)
          return (0, $.rejectAndJoin)(' ', [
            (0, nt.join)(' ', r),
            i,
            n.Module[0],
            a,
            (0, $.putIntoBraces)(s, ft, n.LCurly[0], n.RCurly[0])
          ])
        }),
        (t.prototype.moduleDirective = function (n) {
          return this.visitSingle(n)
        }),
        (t.prototype.requiresModuleDirective = function (n) {
          var r = this.mapVisit(n.requiresModifier),
            i = this.visit(n.moduleName)
          return (0, $.rejectAndJoin)(' ', [
            n.Requires[0],
            (0, nt.join)(' ', r),
            (0, nt.concat)([i, n.Semicolon[0]])
          ])
        }),
        (t.prototype.exportsModuleDirective = function (n) {
          var r = this.visit(n.packageName),
            i = this.mapVisit(n.moduleName),
            a = n.Comma
              ? n.Comma.map(function (o) {
                  return (0, nt.concat)([o, wt])
                })
              : []
          return n.To
            ? jn(
                (0, $.rejectAndConcat)([
                  wn(
                    (0, $.rejectAndJoin)(wt, [
                      (0, $.rejectAndJoin)(' ', [n.Exports[0], r]),
                      jn(wn((0, $.rejectAndJoin)(wt, [n.To[0], (0, $.rejectAndJoinSeps)(a, i)])))
                    ])
                  ),
                  n.Semicolon[0]
                ])
              )
            : (0, $.rejectAndConcat)([(0, nt.concat)([n.Exports[0], ' ']), r, n.Semicolon[0]])
        }),
        (t.prototype.opensModuleDirective = function (n) {
          var r = this.visit(n.packageName)
          n.To && n.To[0]
          var i = this.mapVisit(n.moduleName),
            a = n.Comma
              ? n.Comma.map(function (o) {
                  return (0, nt.concat)([o, wt])
                })
              : []
          return n.To
            ? jn(
                (0, $.rejectAndConcat)([
                  wn(
                    (0, $.rejectAndJoin)(wt, [
                      (0, $.rejectAndJoin)(' ', [n.Opens[0], r]),
                      jn(wn((0, $.rejectAndJoin)(wt, [n.To[0], (0, $.rejectAndJoinSeps)(a, i)])))
                    ])
                  ),
                  n.Semicolon[0]
                ])
              )
            : (0, $.rejectAndConcat)([(0, nt.concat)([n.Opens[0], ' ']), r, n.Semicolon[0]])
        }),
        (t.prototype.usesModuleDirective = function (n) {
          var r = this.visit(n.typeName)
          return (0, $.rejectAndConcat)([(0, nt.concat)([n.Uses[0], ' ']), r, n.Semicolon[0]])
        }),
        (t.prototype.providesModuleDirective = function (n) {
          var r = this.visit(n.typeName[0]),
            i = this.mapVisit(n.typeName.slice(1)),
            a = n.Comma
              ? n.Comma.map(function (o) {
                  return (0, nt.concat)([o, wt])
                })
              : []
          return jn(
            (0, $.rejectAndConcat)([
              wn(
                (0, $.rejectAndJoin)(wt, [
                  (0, $.rejectAndJoin)(' ', [n.Provides[0], r]),
                  jn(wn((0, $.rejectAndJoin)(wt, [n.With[0], (0, $.rejectAndJoinSeps)(a, i)])))
                ])
              ),
              n.Semicolon[0]
            ])
          )
        }),
        (t.prototype.requiresModifier = function (n) {
          return (0, zT.printTokenWithComments)(this.getSingle(n))
        }),
        (t.prototype.isModuleCompilationUnit = function () {
          return 'isModuleCompilationUnit'
        }),
        t
      )
    })(XT.BaseCstPrettierPrinter)
  ;(gi.PackagesAndModulesPrettierVisitor = QT),
    Object.defineProperty(ni, '__esModule', { value: !0 }),
    (ni.createPrettierDoc = void 0)
  var rc = ct,
    $T = oi,
    eg = li,
    tg = fi,
    ng = hi,
    rg = Ei,
    ig = Ci,
    ag = Si,
    og = Ti,
    sg = gi
  ug(
    $T.ArraysPrettierVisitor,
    eg.BlocksAndStatementPrettierVisitor,
    tg.ClassesPrettierVisitor,
    ng.ExpressionsPrettierVisitor,
    rg.InterfacesPrettierVisitor,
    ig.LexicalStructurePrettierVisitor,
    ag.NamesPrettierVisitor,
    og.TypesValuesAndVariablesPrettierVisitor,
    sg.PackagesAndModulesPrettierVisitor
  )
  function ug() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    e.forEach(function (n) {
      var r = Object.getOwnPropertyNames(n.prototype),
        i = r.filter(function (a) {
          return a !== 'constructor'
        })
      i.forEach(function (a) {
        rc.BaseCstPrettierPrinter.prototype[a] = n.prototype[a]
      })
    })
  }
  var ic = new rc.BaseCstPrettierPrinter()
  function cg(e, t) {
    return (ic.prettierOptions = t), ic.visit(e)
  }
  ni.createPrettierDoc = cg
  var lg = ni.createPrettierDoc
  function fg(e, t, n) {
    var r = e.getValue()
    return lg(r, t)
  }
  var pg = fg,
    dg = {
      entrypoint: {
        type: 'choice',
        category: 'Global',
        default: 'compilationUnit',
        choices: [
          { value: 'arrayInitializer' },
          { value: 'variableInitializerList' },
          { value: 'block' },
          { value: 'blockStatements' },
          { value: 'blockStatement' },
          { value: 'localVariableDeclarationStatement' },
          { value: 'localVariableDeclaration' },
          { value: 'localVariableType' },
          { value: 'statement' },
          { value: 'statementWithoutTrailingSubstatement' },
          { value: 'emptyStatement' },
          { value: 'labeledStatement' },
          { value: 'expressionStatement' },
          { value: 'statementExpression' },
          { value: 'ifStatement' },
          { value: 'assertStatement' },
          { value: 'switchStatement' },
          { value: 'switchBlock' },
          { value: 'switchBlockStatementGroup' },
          { value: 'switchLabel' },
          { value: 'caseOrDefaultLabel' },
          { value: 'caseLabelElement' },
          { value: 'switchRule' },
          { value: 'caseConstant' },
          { value: 'whileStatement' },
          { value: 'doStatement' },
          { value: 'forStatement' },
          { value: 'basicForStatement' },
          { value: 'forInit' },
          { value: 'forUpdate' },
          { value: 'statementExpressionList' },
          { value: 'enhancedForStatement' },
          { value: 'breakStatement' },
          { value: 'continueStatement' },
          { value: 'returnStatement' },
          { value: 'throwStatement' },
          { value: 'synchronizedStatement' },
          { value: 'tryStatement' },
          { value: 'catches' },
          { value: 'catchClause' },
          { value: 'catchFormalParameter' },
          { value: 'catchType' },
          { value: 'finally' },
          { value: 'tryWithResourcesStatement' },
          { value: 'resourceSpecification' },
          { value: 'resourceList' },
          { value: 'resource' },
          { value: 'resourceInit' },
          { value: 'yieldStatement' },
          { value: 'variableAccess' },
          { value: 'isBasicForStatement' },
          { value: 'isLocalVariableDeclaration' },
          { value: 'isClassicSwitchLabel' },
          { value: 'classDeclaration' },
          { value: 'normalClassDeclaration' },
          { value: 'classModifier' },
          { value: 'typeParameters' },
          { value: 'typeParameterList' },
          { value: 'superclass' },
          { value: 'superinterfaces' },
          { value: 'interfaceTypeList' },
          { value: 'classPermits' },
          { value: 'classBody' },
          { value: 'classBodyDeclaration' },
          { value: 'classMemberDeclaration' },
          { value: 'fieldDeclaration' },
          { value: 'fieldModifier' },
          { value: 'variableDeclaratorList' },
          { value: 'variableDeclarator' },
          { value: 'variableDeclaratorId' },
          { value: 'variableInitializer' },
          { value: 'unannType' },
          { value: 'unannPrimitiveTypeWithOptionalDimsSuffix' },
          { value: 'unannPrimitiveType' },
          { value: 'unannReferenceType' },
          { value: 'unannClassOrInterfaceType' },
          { value: 'unannClassType' },
          { value: 'unannInterfaceType' },
          { value: 'unannTypeVariable' },
          { value: 'methodDeclaration' },
          { value: 'methodModifier' },
          { value: 'methodHeader' },
          { value: 'result' },
          { value: 'methodDeclarator' },
          { value: 'receiverParameter' },
          { value: 'formalParameterList' },
          { value: 'formalParameter' },
          { value: 'variableParaRegularParameter' },
          { value: 'variableArityParameter' },
          { value: 'variableModifier' },
          { value: 'throws' },
          { value: 'exceptionTypeList' },
          { value: 'exceptionType' },
          { value: 'methodBody' },
          { value: 'instanceInitializer' },
          { value: 'staticInitializer' },
          { value: 'constructorDeclaration' },
          { value: 'constructorModifier' },
          { value: 'constructorDeclarator' },
          { value: 'simpleTypeName' },
          { value: 'constructorBody' },
          { value: 'explicitConstructorInvocation' },
          { value: 'unqualifiedExplicitConstructorInvocation' },
          { value: 'qualifiedExplicitConstructorInvocation' },
          { value: 'enumDeclaration' },
          { value: 'enumBody' },
          { value: 'enumConstantList' },
          { value: 'enumConstant' },
          { value: 'enumConstantModifier' },
          { value: 'enumBodyDeclarations' },
          { value: 'recordDeclaration' },
          { value: 'recordHeader' },
          { value: 'recordComponentList' },
          { value: 'recordComponent' },
          { value: 'variableArityRecordComponent' },
          { value: 'recordComponentModifier' },
          { value: 'recordBody' },
          { value: 'recordBodyDeclaration' },
          { value: 'compactConstructorDeclaration' },
          { value: 'isClassDeclaration' },
          { value: 'identifyClassBodyDeclarationType' },
          { value: 'isDims' },
          { value: 'isCompactConstructorDeclaration' },
          { value: 'expression' },
          { value: 'lambdaExpression' },
          { value: 'lambdaParameters' },
          { value: 'lambdaParametersWithBraces' },
          { value: 'lambdaParameterList' },
          { value: 'inferredLambdaParameterList' },
          { value: 'explicitLambdaParameterList' },
          { value: 'lambdaParameter' },
          { value: 'regularLambdaParameter' },
          { value: 'lambdaParameterType' },
          { value: 'lambdaBody' },
          { value: 'ternaryExpression' },
          { value: 'binaryExpression' },
          { value: 'unaryExpression' },
          { value: 'unaryExpressionNotPlusMinus' },
          { value: 'primary' },
          { value: 'primaryPrefix' },
          { value: 'primarySuffix' },
          { value: 'fqnOrRefType' },
          { value: 'fqnOrRefTypePartRest' },
          { value: 'fqnOrRefTypePartCommon' },
          { value: 'fqnOrRefTypePartFirst' },
          { value: 'parenthesisExpression' },
          { value: 'castExpression' },
          { value: 'primitiveCastExpression' },
          { value: 'referenceTypeCastExpression' },
          { value: 'newExpression' },
          { value: 'unqualifiedClassInstanceCreationExpression' },
          { value: 'classOrInterfaceTypeToInstantiate' },
          { value: 'typeArgumentsOrDiamond' },
          { value: 'diamond' },
          { value: 'methodInvocationSuffix' },
          { value: 'argumentList' },
          { value: 'arrayCreationExpression' },
          { value: 'arrayCreationDefaultInitSuffix' },
          { value: 'arrayCreationExplicitInitSuffix' },
          { value: 'dimExprs' },
          { value: 'dimExpr' },
          { value: 'classLiteralSuffix' },
          { value: 'arrayAccessSuffix' },
          { value: 'methodReferenceSuffix' },
          { value: 'pattern' },
          { value: 'primaryPattern' },
          { value: 'typePattern' },
          { value: 'identifyNewExpressionType' },
          { value: 'isLambdaExpression' },
          { value: 'isCastExpression' },
          { value: 'isPrimitiveCastExpression' },
          { value: 'isReferenceTypeCastExpression' },
          { value: 'isRefTypeInMethodRef' },
          { value: 'interfaceDeclaration' },
          { value: 'normalInterfaceDeclaration' },
          { value: 'interfaceModifier' },
          { value: 'extendsInterfaces' },
          { value: 'interfacePermits' },
          { value: 'interfaceBody' },
          { value: 'interfaceMemberDeclaration' },
          { value: 'constantDeclaration' },
          { value: 'constantModifier' },
          { value: 'interfaceMethodDeclaration' },
          { value: 'interfaceMethodModifier' },
          { value: 'annotationTypeDeclaration' },
          { value: 'annotationTypeBody' },
          { value: 'annotationTypeMemberDeclaration' },
          { value: 'annotationTypeElementDeclaration' },
          { value: 'annotationTypeElementModifier' },
          { value: 'defaultValue' },
          { value: 'annotation' },
          { value: 'elementValuePairList' },
          { value: 'elementValuePair' },
          { value: 'elementValue' },
          { value: 'elementValueArrayInitializer' },
          { value: 'elementValueList' },
          { value: 'identifyInterfaceBodyDeclarationType' },
          { value: 'identifyAnnotationBodyDeclarationType' },
          { value: 'isSimpleElementValueAnnotation' },
          { value: 'literal' },
          { value: 'integerLiteral' },
          { value: 'floatingPointLiteral' },
          { value: 'booleanLiteral' },
          { value: 'moduleName' },
          { value: 'packageName' },
          { value: 'typeName' },
          { value: 'expressionName' },
          { value: 'methodName' },
          { value: 'packageOrTypeName' },
          { value: 'ambiguousName' },
          { value: 'compilationUnit' },
          { value: 'ordinaryCompilationUnit' },
          { value: 'modularCompilationUnit' },
          { value: 'packageDeclaration' },
          { value: 'packageModifier' },
          { value: 'importDeclaration' },
          { value: 'typeDeclaration' },
          { value: 'moduleDeclaration' },
          { value: 'moduleDirective' },
          { value: 'requiresModuleDirective' },
          { value: 'exportsModuleDirective' },
          { value: 'opensModuleDirective' },
          { value: 'usesModuleDirective' },
          { value: 'providesModuleDirective' },
          { value: 'requiresModifier' },
          { value: 'isModuleCompilationUnit' },
          { value: 'primitiveType' },
          { value: 'numericType' },
          { value: 'integralType' },
          { value: 'floatingPointType' },
          { value: 'referenceType' },
          { value: 'classOrInterfaceType' },
          { value: 'classType' },
          { value: 'interfaceType' },
          { value: 'typeVariable' },
          { value: 'dims' },
          { value: 'typeParameter' },
          { value: 'typeParameterModifier' },
          { value: 'typeBound' },
          { value: 'additionalBound' },
          { value: 'typeArguments' },
          { value: 'typeArgumentList' },
          { value: 'typeArgument' },
          { value: 'wildcard' },
          { value: 'wildcardBounds' }
        ],
        description: 'Prettify from the entrypoint, allowing to use prettier on snippet.'
      }
    },
    hg = nA,
    mg = pg,
    vg = dg,
    Dg = [
      {
        name: 'Java',
        parsers: ['java'],
        group: 'Java',
        tmScope: 'text.html.vue',
        aceMode: 'html',
        codemirrorMode: 'clike',
        codemirrorMimeType: 'text/x-java',
        extensions: ['.java'],
        linguistLanguageId: 181,
        vscodeLanguageIds: ['java']
      }
    ]
  function Eg() {
    return -1
  }
  function yg() {
    return -1
  }
  function Cg(e) {
    return /^\/\*\*[\n][\t\s]+\*\s@(prettier|format)[\n][\t\s]+\*\//.test(e)
  }
  var Ag = { java: { parse: hg, astFormat: 'java', locStart: Eg, locEnd: yg, hasPragma: Cg } }
  function Sg(e) {
    return e.ast_type && e.ast_type !== 'comment'
  }
  function Tg(e) {
    var t = e.getValue()
    switch (t.ast_type) {
      case 'comment':
        return t.value
      default:
        throw new Error('Not a comment: ' + JSON.stringify(t))
    }
  }
  function gg(e, t) {
    delete t.lineno, delete t.col_offset
  }
  var Lg = { java: { print: mg, printComment: Tg, canAttachComment: Sg, massageAstNode: gg } },
    Rg = { languages: Dg, printers: Lg, parsers: Ag, options: vg }
  return Rg
})(prettier) as any
//# sourceMappingURL=v2.1.0.iife.js.map
