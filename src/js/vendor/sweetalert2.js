/*!
 * sweetalert2 v11.7.3
 * Released under the MIT License.
 */
!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Sweetalert2 = t()
}(this, function () {
  "use strict";
  var e = {awaitingPromise: new WeakMap, promise: new WeakMap, innerParams: new WeakMap, domCache: new WeakMap};
  const t = e => {
      const t = {};
      for (const o in e) t[e[o]] = "swal2-" + e[o];
      return t
    },
    o = t(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
    n = t(["success", "warning", "info", "question", "error"]), s = "SweetAlert2:",
    a = e => e.charAt(0).toUpperCase() + e.slice(1), i = e => {
      console.warn(`${s} ${"object" == typeof e ? e.join(" ") : e}`)
    }, r = e => {
      console.error(`${s} ${e}`)
    }, l = [], c = e => "function" == typeof e ? e() : e, d = e => e && "function" == typeof e.toPromise,
    u = e => d(e) ? e.toPromise() : Promise.resolve(e), p = e => e && Promise.resolve(e) === e,
    m = () => document.body.querySelector(`.${o.container}`), w = e => {
      const t = m();
      return t ? t.querySelector(e) : null
    }, g = e => w(`.${e}`), h = () => g(o.popup), f = () => g(o.icon), b = () => g(o.title),
    y = () => g(o["html-container"]), v = () => g(o.image), x = () => g(o["progress-steps"]),
    k = () => g(o["validation-message"]), C = () => w(`.${o.actions} .${o.confirm}`),
    A = () => w(`.${o.actions} .${o.cancel}`), B = () => w(`.${o.actions} .${o.deny}`), $ = () => w(`.${o.loader}`),
    P = () => g(o.actions), E = () => g(o.footer), T = () => g(o["timer-progress-bar"]), S = () => g(o.close),
    L = () => {
      const e = Array.from(h().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((e, t) => {
          const o = parseInt(e.getAttribute("tabindex")), n = parseInt(t.getAttribute("tabindex"));
          return o > n ? 1 : o < n ? -1 : 0
        }),
        t = Array.from(h().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(e => "-1" !== e.getAttribute("tabindex"));
      return (e => {
        const t = [];
        for (let o = 0; o < e.length; o++) -1 === t.indexOf(e[o]) && t.push(e[o]);
        return t
      })(e.concat(t)).filter(e => K(e))
    },
    j = () => H(document.body, o.shown) && !H(document.body, o["toast-shown"]) && !H(document.body, o["no-backdrop"]),
    O = () => h() && H(h(), o.toast), M = {previousBodyPadding: null}, z = (e, t) => {
      if (e.textContent = "", t) {
        const o = (new DOMParser).parseFromString(t, "text/html");
        Array.from(o.querySelector("head").childNodes).forEach(t => {
          e.appendChild(t)
        }), Array.from(o.querySelector("body").childNodes).forEach(t => {
          t instanceof HTMLVideoElement || t instanceof HTMLAudioElement ? e.appendChild(t.cloneNode(!0)) : e.appendChild(t)
        })
      }
    }, H = (e, t) => {
      if (!t) return !1;
      const o = t.split(/\s+/);
      for (let t = 0; t < o.length; t++) if (!e.classList.contains(o[t])) return !1;
      return !0
    }, q = (e, t, s) => {
      if (((e, t) => {
        Array.from(e.classList).forEach(s => {
          Object.values(o).includes(s) || Object.values(n).includes(s) || Object.values(t.showClass).includes(s) || e.classList.remove(s)
        })
      })(e, t), t.customClass && t.customClass[s]) {
        if ("string" != typeof t.customClass[s] && !t.customClass[s].forEach) return void i(`Invalid type of customClass.${s}! Expected string or iterable object, got "${typeof t.customClass[s]}"`);
        N(e, t.customClass[s])
      }
    }, I = (e, t) => {
      if (!t) return null;
      switch (t) {
        case"select":
        case"textarea":
        case"file":
          return e.querySelector(`.${o.popup} > .${o[t]}`);
        case"checkbox":
          return e.querySelector(`.${o.popup} > .${o.checkbox} input`);
        case"radio":
          return e.querySelector(`.${o.popup} > .${o.radio} input:checked`) || e.querySelector(`.${o.popup} > .${o.radio} input:first-child`);
        case"range":
          return e.querySelector(`.${o.popup} > .${o.range} input`);
        default:
          return e.querySelector(`.${o.popup} > .${o.input}`)
      }
    }, D = e => {
      if (e.focus(), "file" !== e.type) {
        const t = e.value;
        e.value = "", e.value = t
      }
    }, V = (e, t, o) => {
      e && t && ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)), t.forEach(t => {
        Array.isArray(e) ? e.forEach(e => {
          o ? e.classList.add(t) : e.classList.remove(t)
        }) : o ? e.classList.add(t) : e.classList.remove(t)
      }))
    }, N = (e, t) => {
      V(e, t, !0)
    }, F = (e, t) => {
      V(e, t, !1)
    }, R = (e, t) => {
      const o = Array.from(e.children);
      for (let e = 0; e < o.length; e++) {
        const n = o[e];
        if (n instanceof HTMLElement && H(n, t)) return n
      }
    }, U = (e, t, o) => {
      o === `${parseInt(o)}` && (o = parseInt(o)), o || 0 === parseInt(o) ? e.style[t] = "number" == typeof o ? `${o}px` : o : e.style.removeProperty(t)
    }, _ = function (e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flex";
      e.style.display = t
    }, W = e => {
      e.style.display = "none"
    }, Y = (e, t, o, n) => {
      const s = e.querySelector(t);
      s && (s.style[o] = n)
    }, Z = function (e, t) {
      t ? _(e, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "flex") : W(e)
    }, K = e => !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
    X = e => !!(e.scrollHeight > e.clientHeight), J = e => {
      const t = window.getComputedStyle(e), o = parseFloat(t.getPropertyValue("animation-duration") || "0"),
        n = parseFloat(t.getPropertyValue("transition-duration") || "0");
      return o > 0 || n > 0
    }, G = function (e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const o = T();
      K(o) && (t && (o.style.transition = "none", o.style.width = "100%"), setTimeout(() => {
        o.style.transition = `width ${e / 1e3}s linear`, o.style.width = "0%"
      }, 10))
    }, Q = {}, ee = e => new Promise(t => {
      if (!e) return t();
      const o = window.scrollX, n = window.scrollY;
      Q.restoreFocusTimeout = setTimeout(() => {
        Q.previousActiveElement instanceof HTMLElement ? (Q.previousActiveElement.focus(), Q.previousActiveElement = null) : document.body && document.body.focus(), t()
      }, 100), window.scrollTo(o, n)
    }), te = () => "undefined" == typeof window || "undefined" == typeof document,
    oe = `\n <div aria-labelledby="${o.title}" aria-describedby="${o["html-container"]}" class="${o.popup}" tabindex="-1">\n   <button type="button" class="${o.close}"></button>\n   <ul class="${o["progress-steps"]}"></ul>\n   <div class="${o.icon}"></div>\n   <img class="${o.image}" />\n   <h2 class="${o.title}" id="${o.title}"></h2>\n   <div class="${o["html-container"]}" id="${o["html-container"]}"></div>\n   <input class="${o.input}" />\n   <input type="file" class="${o.file}" />\n   <div class="${o.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${o.select}"></select>\n   <div class="${o.radio}"></div>\n   <label for="${o.checkbox}" class="${o.checkbox}">\n     <input type="checkbox" />\n     <span class="${o.label}"></span>\n   </label>\n   <textarea class="${o.textarea}"></textarea>\n   <div class="${o["validation-message"]}" id="${o["validation-message"]}"></div>\n   <div class="${o.actions}">\n     <div class="${o.loader}"></div>\n     <button type="button" class="${o.confirm}"></button>\n     <button type="button" class="${o.deny}"></button>\n     <button type="button" class="${o.cancel}"></button>\n   </div>\n   <div class="${o.footer}"></div>\n   <div class="${o["timer-progress-bar-container"]}">\n     <div class="${o["timer-progress-bar"]}"></div>\n   </div>\n </div>\n`.replace(/(^|\n)\s*/g, ""),
    ne = () => {
      Q.currentInstance.resetValidationMessage()
    }, se = e => {
      const t = (() => {
        const e = m();
        return !!e && (e.remove(), F([document.documentElement, document.body], [o["no-backdrop"], o["toast-shown"], o["has-column"]]), !0)
      })();
      if (te()) return void r("SweetAlert2 requires document to initialize");
      const n = document.createElement("div");
      n.className = o.container, t && N(n, o["no-transition"]), z(n, oe);
      const s = "string" == typeof (a = e.target) ? document.querySelector(a) : a;
      var a;
      s.appendChild(n), (e => {
        const t = h();
        t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true")
      })(e), (e => {
        "rtl" === window.getComputedStyle(e).direction && N(m(), o.rtl)
      })(s), (() => {
        const e = h(), t = R(e, o.input), n = R(e, o.file), s = e.querySelector(`.${o.range} input`),
          a = e.querySelector(`.${o.range} output`), i = R(e, o.select), r = e.querySelector(`.${o.checkbox} input`),
          l = R(e, o.textarea);
        t.oninput = ne, n.onchange = ne, i.onchange = ne, r.onchange = ne, l.oninput = ne, s.oninput = (() => {
          ne(), a.value = s.value
        }), s.onchange = (() => {
          ne(), a.value = s.value
        })
      })()
    }, ae = (e, t) => {
      e instanceof HTMLElement ? t.appendChild(e) : "object" == typeof e ? ie(e, t) : e && z(t, e)
    }, ie = (e, t) => {
      e.jquery ? re(t, e) : z(t, e.toString())
    }, re = (e, t) => {
      if (e.textContent = "", 0 in t) for (let o = 0; o in t; o++) e.appendChild(t[o].cloneNode(!0)); else e.appendChild(t.cloneNode(!0))
    }, le = (() => {
      if (te()) return !1;
      const e = document.createElement("div"), t = {WebkitAnimation: "webkitAnimationEnd", animation: "animationend"};
      for (const o in t) if (Object.prototype.hasOwnProperty.call(t, o) && void 0 !== e.style[o]) return t[o];
      return !1
    })();

  function ce(e, t, n) {
    Z(e, n[`show${a(t)}Button`], "inline-block"), z(e, n[`${t}ButtonText`]), e.setAttribute("aria-label", n[`${t}ButtonAriaLabel`]), e.className = o[t], q(e, n, `${t}Button`), N(e, n[`${t}ButtonClass`])
  }

  const de = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], ue = (e, t) => {
    e.placeholder && !t.inputPlaceholder || (e.placeholder = t.inputPlaceholder)
  }, pe = (e, t, n) => {
    if (n.inputLabel) {
      e.id = o.input;
      const s = document.createElement("label"), a = o["input-label"];
      s.setAttribute("for", e.id), s.className = a, "object" == typeof n.customClass && N(s, n.customClass.inputLabel), s.innerText = n.inputLabel, t.insertAdjacentElement("beforebegin", s)
    }
  }, me = e => R(h(), o[e] || o.input), we = (e, t) => {
    ["string", "number"].includes(typeof t) ? e.value = `${t}` : p(t) || i(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)
  }, ge = {};
  ge.text = ge.email = ge.password = ge.number = ge.tel = ge.url = ((e, t) => (we(e, t.inputValue), pe(e, e, t), ue(e, t), e.type = t.input, e)), ge.file = ((e, t) => (pe(e, e, t), ue(e, t), e)), ge.range = ((e, t) => {
    const o = e.querySelector("input"), n = e.querySelector("output");
    return we(o, t.inputValue), o.type = t.input, we(n, t.inputValue), pe(o, e, t), e
  }), ge.select = ((e, t) => {
    if (e.textContent = "", t.inputPlaceholder) {
      const o = document.createElement("option");
      z(o, t.inputPlaceholder), o.value = "", o.disabled = !0, o.selected = !0, e.appendChild(o)
    }
    return pe(e, e, t), e
  }), ge.radio = (e => (e.textContent = "", e)), ge.checkbox = ((e, t) => {
    const n = I(h(), "checkbox");
    n.value = "1", n.id = o.checkbox, n.checked = Boolean(t.inputValue);
    const s = e.querySelector("span");
    return z(s, t.inputPlaceholder), n
  }), ge.textarea = ((e, t) => (we(e, t.inputValue), ue(e, t), pe(e, e, t), setTimeout(() => {
    if ("MutationObserver" in window) {
      const t = parseInt(window.getComputedStyle(h()).width);
      new MutationObserver(() => {
        const o = e.offsetWidth + (n = e, parseInt(window.getComputedStyle(n).marginLeft) + parseInt(window.getComputedStyle(n).marginRight));
        var n;
        h().style.width = o > t ? `${o}px` : null
      }).observe(e, {attributes: !0, attributeFilter: ["style"]})
    }
  }), e));
  const he = (t, n) => {
    const s = y();
    q(s, n, "htmlContainer"), n.html ? (ae(n.html, s), _(s, "block")) : n.text ? (s.textContent = n.text, _(s, "block")) : W(s), ((t, n) => {
      const s = h(), a = e.innerParams.get(t), i = !a || n.input !== a.input;
      de.forEach(e => {
        const t = R(s, o[e]);
        ((e, t) => {
          const o = I(h(), e);
          if (o) {
            (e => {
              for (let t = 0; t < e.attributes.length; t++) {
                const o = e.attributes[t].name;
                ["type", "value", "style"].includes(o) || e.removeAttribute(o)
              }
            })(o);
            for (const e in t) o.setAttribute(e, t[e])
          }
        })(e, n.inputAttributes), t.className = o[e], i && W(t)
      }), n.input && (i && (e => {
        if (!ge[e.input]) return void r(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${e.input}"`);
        const t = me(e.input), o = ge[e.input](t, e);
        _(t), e.inputAutoFocus && setTimeout(() => {
          D(o)
        })
      })(n), (e => {
        const t = me(e.input);
        "object" == typeof e.customClass && N(t, e.customClass.input)
      })(n))
    })(t, n)
  }, fe = (e, t) => {
    for (const o in n) t.icon !== o && F(e, n[o]);
    N(e, n[t.icon]), ve(e, t), be(), q(e, t, "icon")
  }, be = () => {
    const e = h(), t = window.getComputedStyle(e).getPropertyValue("background-color"),
      o = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
    for (let e = 0; e < o.length; e++) o[e].style.backgroundColor = t
  }, ye = (e, t) => {
    let o, n = e.innerHTML;
    t.iconHtml ? o = xe(t.iconHtml) : "success" === t.icon ? (o = '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n', n = n.replace(/ style=".*?"/g, "")) : o = "error" === t.icon ? '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n' : xe({
      question: "?",
      warning: "!",
      info: "i"
    }[t.icon]), n.trim() !== o.trim() && z(e, o)
  }, ve = (e, t) => {
    if (t.iconColor) {
      e.style.color = t.iconColor, e.style.borderColor = t.iconColor;
      for (const o of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) Y(e, o, "backgroundColor", t.iconColor);
      Y(e, ".swal2-success-ring", "borderColor", t.iconColor)
    }
  }, xe = e => `<div class="${o["icon-content"]}">${e}</div>`, ke = (e, t) => {
    e.className = `${o.popup} ${K(e) ? t.showClass.popup : ""}`, t.toast ? (N([document.documentElement, document.body], o["toast-shown"]), N(e, o.toast)) : N(e, o.modal), q(e, t, "popup"), "string" == typeof t.customClass && N(e, t.customClass), t.icon && N(e, o[`icon-${t.icon}`])
  }, Ce = (t, s) => {
    ((e, t) => {
      const o = m(), n = h();
      t.toast ? (U(o, "width", t.width), n.style.width = "100%", n.insertBefore($(), f())) : U(n, "width", t.width), U(n, "padding", t.padding), t.color && (n.style.color = t.color), t.background && (n.style.background = t.background), W(k()), ke(n, t)
    })(0, s), ((e, t) => {
      const n = m();
      n && (function (e, t) {
        "string" == typeof t ? e.style.background = t : t || N([document.documentElement, document.body], o["no-backdrop"])
      }(n, t.backdrop), function (e, t) {
        t in o ? N(e, o[t]) : (i('The "position" parameter is not valid, defaulting to "center"'), N(e, o.center))
      }(n, t.position), function (e, t) {
        if (t && "string" == typeof t) {
          const n = `grow-${t}`;
          n in o && N(e, o[n])
        }
      }(n, t.grow), q(n, t, "container"))
    })(0, s), ((e, t) => {
      const n = x();
      t.progressSteps && 0 !== t.progressSteps.length ? (_(n), n.textContent = "", t.currentProgressStep >= t.progressSteps.length && i("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), t.progressSteps.forEach((e, s) => {
        const a = (e => {
          const t = document.createElement("li");
          return N(t, o["progress-step"]), z(t, e), t
        })(e);
        if (n.appendChild(a), s === t.currentProgressStep && N(a, o["active-progress-step"]), s !== t.progressSteps.length - 1) {
          const e = (e => {
            const t = document.createElement("li");
            return N(t, o["progress-step-line"]), e.progressStepsDistance && U(t, "width", e.progressStepsDistance), t
          })(t);
          n.appendChild(e)
        }
      })) : W(n)
    })(0, s), ((t, o) => {
      const s = e.innerParams.get(t), a = f();
      if (s && o.icon === s.icon) return ye(a, o), void fe(a, o);
      if (o.icon || o.iconHtml) {
        if (o.icon && -1 === Object.keys(n).indexOf(o.icon)) return r(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${o.icon}"`), void W(a);
        _(a), ye(a, o), fe(a, o), N(a, o.showClass.icon)
      } else W(a)
    })(t, s), ((e, t) => {
      const n = v();
      t.imageUrl ? (_(n, ""), n.setAttribute("src", t.imageUrl), n.setAttribute("alt", t.imageAlt), U(n, "width", t.imageWidth), U(n, "height", t.imageHeight), n.className = o.image, q(n, t, "image")) : W(n)
    })(0, s), ((e, t) => {
      const o = b();
      Z(o, t.title || t.titleText, "block"), t.title && ae(t.title, o), t.titleText && (o.innerText = t.titleText), q(o, t, "title")
    })(0, s), ((e, t) => {
      const o = S();
      z(o, t.closeButtonHtml), q(o, t, "closeButton"), Z(o, t.showCloseButton), o.setAttribute("aria-label", t.closeButtonAriaLabel)
    })(0, s), he(t, s), ((e, t) => {
      const n = P(), s = $();
      t.showConfirmButton || t.showDenyButton || t.showCancelButton ? _(n) : W(n), q(n, t, "actions"), function (e, t, n) {
        const s = C(), a = B(), i = A();
        ce(s, "confirm", n), ce(a, "deny", n), ce(i, "cancel", n), function (e, t, n, s) {
          s.buttonsStyling ? (N([e, t, n], o.styled), s.confirmButtonColor && (e.style.backgroundColor = s.confirmButtonColor, N(e, o["default-outline"])), s.denyButtonColor && (t.style.backgroundColor = s.denyButtonColor, N(t, o["default-outline"])), s.cancelButtonColor && (n.style.backgroundColor = s.cancelButtonColor, N(n, o["default-outline"]))) : F([e, t, n], o.styled)
        }(s, a, i, n), n.reverseButtons && (n.toast ? (e.insertBefore(i, s), e.insertBefore(a, s)) : (e.insertBefore(i, t), e.insertBefore(a, t), e.insertBefore(s, t)))
      }(n, s, t), z(s, t.loaderHtml), q(s, t, "loader")
    })(0, s), ((e, t) => {
      const o = E();
      Z(o, t.footer), t.footer && ae(t.footer, o), q(o, t, "footer")
    })(0, s), "function" == typeof s.didRender && s.didRender(h())
  };

  function Ae() {
    const t = e.innerParams.get(this);
    if (!t) return;
    const n = e.domCache.get(this);
    W(n.loader), O() ? t.icon && _(f()) : Be(n), F([n.popup, n.actions], o.loading), n.popup.removeAttribute("aria-busy"), n.popup.removeAttribute("data-loading"), n.confirmButton.disabled = !1, n.denyButton.disabled = !1, n.cancelButton.disabled = !1
  }

  const Be = e => {
      const t = e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));
      t.length ? _(t[0], "inline-block") : K(C()) || K(B()) || K(A()) || W(e.actions)
    }, $e = () => C() && C().click(),
    Pe = Object.freeze({cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer"}),
    Ee = e => {
      e.keydownTarget && e.keydownHandlerAdded && (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {capture: e.keydownListenerCapture}), e.keydownHandlerAdded = !1)
    }, Te = (e, t) => {
      const o = L();
      if (o.length) return (e += t) === o.length ? e = 0 : -1 === e && (e = o.length - 1), void o[e].focus();
      h().focus()
    }, Se = ["ArrowRight", "ArrowDown"], Le = ["ArrowLeft", "ArrowUp"], je = (t, o, n) => {
      const s = e.innerParams.get(t);
      s && (o.isComposing || 229 === o.keyCode || (s.stopKeydownPropagation && o.stopPropagation(), "Enter" === o.key ? Oe(t, o, s) : "Tab" === o.key ? Me(o) : [...Se, ...Le].includes(o.key) ? ze(o.key) : "Escape" === o.key && He(o, s, n)))
    }, Oe = (e, t, o) => {
      if (c(o.allowEnterKey) && t.target && e.getInput() && t.target instanceof HTMLElement && t.target.outerHTML === e.getInput().outerHTML) {
        if (["textarea", "file"].includes(o.input)) return;
        $e(), t.preventDefault()
      }
    }, Me = e => {
      const t = e.target, o = L();
      let n = -1;
      for (let e = 0; e < o.length; e++) if (t === o[e]) {
        n = e;
        break
      }
      e.shiftKey ? Te(n, -1) : Te(n, 1), e.stopPropagation(), e.preventDefault()
    }, ze = e => {
      const t = [C(), B(), A()];
      if (document.activeElement instanceof HTMLElement && !t.includes(document.activeElement)) return;
      const o = Se.includes(e) ? "nextElementSibling" : "previousElementSibling";
      let n = document.activeElement;
      for (let e = 0; e < P().children.length; e++) {
        if (!(n = n[o])) return;
        if (n instanceof HTMLButtonElement && K(n)) break
      }
      n instanceof HTMLButtonElement && n.focus()
    }, He = (e, t, o) => {
      c(t.allowEscapeKey) && (e.preventDefault(), o(Pe.esc))
    };
  var qe = {swalPromiseResolve: new WeakMap, swalPromiseReject: new WeakMap};
  const Ie = () => {
      Array.from(document.body.children).forEach(e => {
        e.hasAttribute("data-previous-aria-hidden") ? (e.setAttribute("aria-hidden", e.getAttribute("data-previous-aria-hidden")), e.removeAttribute("data-previous-aria-hidden")) : e.removeAttribute("aria-hidden")
      })
    }, De = e => {
      const t = e.target, o = m();
      return !(Ve(e) || Ne(e) || t !== o && (X(o) || !(t instanceof HTMLElement) || "INPUT" === t.tagName || "TEXTAREA" === t.tagName || X(y()) && y().contains(t)))
    }, Ve = e => e.touches && e.touches.length && "stylus" === e.touches[0].touchType,
    Ne = e => e.touches && e.touches.length > 1, Fe = () => {
      if (H(document.body, o.iosfix)) {
        const e = parseInt(document.body.style.top, 10);
        F(document.body, o.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e
      }
    }, Re = () => {
      null !== M.previousBodyPadding && (document.body.style.paddingRight = `${M.previousBodyPadding}px`, M.previousBodyPadding = null)
    };

  function Ue(e, t, n, s) {
    O() ? Je(e, s) : (ee(n).then(() => Je(e, s)), Ee(Q)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), t.innerHTML = "") : t.remove(), j() && (Re(), Fe(), Ie()), F([document.documentElement, document.body], [o.shown, o["height-auto"], o["no-backdrop"], o["toast-shown"]])
  }

  function _e(e) {
    e = Ze(e);
    const t = qe.swalPromiseResolve.get(this), o = We(this);
    this.isAwaitingPromise() ? e.isDismissed || (Ye(this), t(e)) : o && t(e)
  }

  const We = t => {
    const o = h();
    if (!o) return !1;
    const n = e.innerParams.get(t);
    if (!n || H(o, n.hideClass.popup)) return !1;
    F(o, n.showClass.popup), N(o, n.hideClass.popup);
    const s = m();
    return F(s, n.showClass.backdrop), N(s, n.hideClass.backdrop), Ke(t, o, n), !0
  }, Ye = t => {
    t.isAwaitingPromise() && (e.awaitingPromise.delete(t), e.innerParams.get(t) || t._destroy())
  }, Ze = e => void 0 === e ? {isConfirmed: !1, isDenied: !1, isDismissed: !0} : Object.assign({
    isConfirmed: !1,
    isDenied: !1,
    isDismissed: !1
  }, e), Ke = (e, t, o) => {
    const n = m(), s = le && J(t);
    "function" == typeof o.willClose && o.willClose(t), s ? Xe(e, t, n, o.returnFocus, o.didClose) : Ue(e, n, o.returnFocus, o.didClose)
  }, Xe = (e, t, o, n, s) => {
    Q.swalCloseEventFinishedCallback = Ue.bind(null, e, o, n, s), t.addEventListener(le, function (e) {
      e.target === t && (Q.swalCloseEventFinishedCallback(), delete Q.swalCloseEventFinishedCallback)
    })
  }, Je = (e, t) => {
    setTimeout(() => {
      "function" == typeof t && t.bind(e.params)(), e._destroy()
    })
  };

  function Ge(t, o, n) {
    const s = e.domCache.get(t);
    o.forEach(e => {
      s[e].disabled = n
    })
  }

  function Qe(e, t) {
    if (e) if ("radio" === e.type) {
      const o = e.parentNode.parentNode.querySelectorAll("input");
      for (let e = 0; e < o.length; e++) o[e].disabled = t
    } else e.disabled = t
  }

  const et = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconColor: void 0,
      iconHtml: void 0,
      template: void 0,
      toast: !1,
      showClass: {popup: "swal2-show", backdrop: "swal2-backdrop-show", icon: "swal2-icon-show"},
      hideClass: {popup: "swal2-hide", backdrop: "swal2-backdrop-hide", icon: "swal2-icon-hide"},
      customClass: {},
      target: "body",
      color: void 0,
      backdrop: !0,
      heightAuto: !0,
      allowOutsideClick: !0,
      allowEscapeKey: !0,
      allowEnterKey: !0,
      stopKeydownPropagation: !0,
      keydownListenerCapture: !1,
      showConfirmButton: !0,
      showDenyButton: !1,
      showCancelButton: !1,
      preConfirm: void 0,
      preDeny: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      denyButtonText: "No",
      denyButtonAriaLabel: "",
      denyButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: !0,
      reverseButtons: !1,
      focusConfirm: !0,
      focusDeny: !1,
      focusCancel: !1,
      returnFocus: !0,
      showCloseButton: !1,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      loaderHtml: "",
      showLoaderOnConfirm: !1,
      showLoaderOnDeny: !1,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: !1,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputLabel: "",
      inputValue: "",
      inputOptions: {},
      inputAutoFocus: !0,
      inputAutoTrim: !0,
      inputAttributes: {},
      inputValidator: void 0,
      returnInputValueOnDeny: !1,
      validationMessage: void 0,
      grow: !1,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      willOpen: void 0,
      didOpen: void 0,
      didRender: void 0,
      willClose: void 0,
      didClose: void 0,
      didDestroy: void 0,
      scrollbarPadding: !0
    },
    tt = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
    ot = {},
    nt = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
    st = e => Object.prototype.hasOwnProperty.call(et, e), at = e => -1 !== tt.indexOf(e), it = e => ot[e], rt = e => {
      st(e) || i(`Unknown parameter "${e}"`)
    }, lt = e => {
      nt.includes(e) && i(`The parameter "${e}" is incompatible with toasts`)
    }, ct = e => {
      it(e) && ((e, t) => {
        var o;
        o = `"${e}" is deprecated and will be removed in the next major release. Please use "${t}" instead.`, l.includes(o) || (l.push(o), i(o))
      })(e, it(e))
    }, dt = t => {
      t.isAwaitingPromise() ? (ut(e, t), e.awaitingPromise.set(t, !0)) : (ut(qe, t), ut(e, t))
    }, ut = (e, t) => {
      for (const o in e) e[o].delete(t)
    };
  var pt = Object.freeze({
    __proto__: null, _destroy: function () {
      const t = e.domCache.get(this), o = e.innerParams.get(this);
      o ? (t.popup && Q.swalCloseEventFinishedCallback && (Q.swalCloseEventFinishedCallback(), delete Q.swalCloseEventFinishedCallback), "function" == typeof o.didDestroy && o.didDestroy(), (e => {
        dt(e), delete e.params, delete Q.keydownHandler, delete Q.keydownTarget, delete Q.currentInstance
      })(this)) : dt(this)
    }, close: _e, closeModal: _e, closePopup: _e, closeToast: _e, disableButtons: function () {
      Ge(this, ["confirmButton", "denyButton", "cancelButton"], !0)
    }, disableInput: function () {
      Qe(this.getInput(), !0)
    }, disableLoading: Ae, enableButtons: function () {
      Ge(this, ["confirmButton", "denyButton", "cancelButton"], !1)
    }, enableInput: function () {
      Qe(this.getInput(), !1)
    }, getInput: function (t) {
      const o = e.innerParams.get(t || this), n = e.domCache.get(t || this);
      return n ? I(n.popup, o.input) : null
    }, handleAwaitingPromise: Ye, hideLoading: Ae, isAwaitingPromise: function () {
      return !!e.awaitingPromise.get(this)
    }, rejectPromise: function (e) {
      const t = qe.swalPromiseReject.get(this);
      Ye(this), t && t(e)
    }, resetValidationMessage: function () {
      const t = e.domCache.get(this);
      t.validationMessage && W(t.validationMessage);
      const n = this.getInput();
      n && (n.removeAttribute("aria-invalid"), n.removeAttribute("aria-describedby"), F(n, o.inputerror))
    }, showValidationMessage: function (t) {
      const n = e.domCache.get(this), s = e.innerParams.get(this);
      z(n.validationMessage, t), n.validationMessage.className = o["validation-message"], s.customClass && s.customClass.validationMessage && N(n.validationMessage, s.customClass.validationMessage), _(n.validationMessage);
      const a = this.getInput();
      a && (a.setAttribute("aria-invalid", !0), a.setAttribute("aria-describedby", o["validation-message"]), D(a), N(a, o.inputerror))
    }, update: function (t) {
      const o = h(), n = e.innerParams.get(this);
      if (!o || H(o, n.hideClass.popup)) return void i("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
      const s = (e => {
        const t = {};
        return Object.keys(e).forEach(o => {
          at(o) ? t[o] = e[o] : i(`Invalid parameter to update: ${o}`)
        }), t
      })(t), a = Object.assign({}, n, s);
      Ce(this, a), e.innerParams.set(this, a), Object.defineProperties(this, {
        params: {
          value: Object.assign({}, this.params, t),
          writable: !1,
          enumerable: !0
        }
      })
    }
  });
  const mt = e => {
    let t = h();
    t || new Xt, t = h();
    const o = $();
    O() ? W(f()) : wt(t, e), _(o), t.setAttribute("data-loading", "true"), t.setAttribute("aria-busy", "true"), t.focus()
  }, wt = (e, t) => {
    const n = P(), s = $();
    !t && K(C()) && (t = C()), _(n), t && (W(t), s.setAttribute("data-button-to-replace", t.className)), s.parentNode.insertBefore(s, t), N([e, n], o.loading)
  }, gt = {
    select: (e, t, n) => {
      const s = R(e, o.select), a = (e, t, o) => {
        const s = document.createElement("option");
        s.value = o, z(s, t), s.selected = ft(o, n.inputValue), e.appendChild(s)
      };
      t.forEach(e => {
        const t = e[0], o = e[1];
        if (Array.isArray(o)) {
          const e = document.createElement("optgroup");
          e.label = t, e.disabled = !1, s.appendChild(e), o.forEach(t => a(e, t[1], t[0]))
        } else a(s, o, t)
      }), s.focus()
    }, radio: (e, t, n) => {
      const s = R(e, o.radio);
      t.forEach(e => {
        const t = e[0], a = e[1], i = document.createElement("input"), r = document.createElement("label");
        i.type = "radio", i.name = o.radio, i.value = t, ft(t, n.inputValue) && (i.checked = !0);
        const l = document.createElement("span");
        z(l, a), l.className = o.label, r.appendChild(i), r.appendChild(l), s.appendChild(r)
      });
      const a = s.querySelectorAll("input");
      a.length && a[0].focus()
    }
  }, ht = e => {
    const t = [];
    return "undefined" != typeof Map && e instanceof Map ? e.forEach((e, o) => {
      let n = e;
      "object" == typeof n && (n = ht(n)), t.push([o, n])
    }) : Object.keys(e).forEach(o => {
      let n = e[o];
      "object" == typeof n && (n = ht(n)), t.push([o, n])
    }), t
  }, ft = (e, t) => t && t.toString() === e.toString(), bt = (t, o) => {
    const n = e.innerParams.get(t);
    if (!n.input) return void r(`The "input" parameter is needed to be set when using returnInputValueOn${a(o)}`);
    const s = ((e, t) => {
      const o = e.getInput();
      if (!o) return null;
      switch (t.input) {
        case"checkbox":
          return (e => e.checked ? 1 : 0)(o);
        case"radio":
          return (e => e.checked ? e.value : null)(o);
        case"file":
          return (e => e.files.length ? null !== e.getAttribute("multiple") ? e.files : e.files[0] : null)(o);
        default:
          return t.inputAutoTrim ? o.value.trim() : o.value
      }
    })(t, n);
    n.inputValidator ? yt(t, s, o) : t.getInput().checkValidity() ? "deny" === o ? vt(t, s) : Ct(t, s) : (t.enableButtons(), t.showValidationMessage(n.validationMessage))
  }, yt = (t, o, n) => {
    const s = e.innerParams.get(t);
    t.disableInput(), Promise.resolve().then(() => u(s.inputValidator(o, s.validationMessage))).then(e => {
      t.enableButtons(), t.enableInput(), e ? t.showValidationMessage(e) : "deny" === n ? vt(t, o) : Ct(t, o)
    })
  }, vt = (t, o) => {
    const n = e.innerParams.get(t || void 0);
    n.showLoaderOnDeny && mt(B()), n.preDeny ? (e.awaitingPromise.set(t || void 0, !0), Promise.resolve().then(() => u(n.preDeny(o, n.validationMessage))).then(e => {
      !1 === e ? (t.hideLoading(), Ye(t)) : t.close({isDenied: !0, value: void 0 === e ? o : e})
    }).catch(e => kt(t || void 0, e))) : t.close({isDenied: !0, value: o})
  }, xt = (e, t) => {
    e.close({isConfirmed: !0, value: t})
  }, kt = (e, t) => {
    e.rejectPromise(t)
  }, Ct = (t, o) => {
    const n = e.innerParams.get(t || void 0);
    n.showLoaderOnConfirm && mt(), n.preConfirm ? (t.resetValidationMessage(), e.awaitingPromise.set(t || void 0, !0), Promise.resolve().then(() => u(n.preConfirm(o, n.validationMessage))).then(e => {
      K(k()) || !1 === e ? (t.hideLoading(), Ye(t)) : xt(t, void 0 === e ? o : e)
    }).catch(e => kt(t || void 0, e))) : xt(t, o)
  }, At = e => e.showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton;
  let Bt = !1;
  const $t = e => e instanceof Element || (e => "object" == typeof e && e.jquery)(e), Pt = () => {
    if (Q.timeout) return (() => {
      const e = T(), t = parseInt(window.getComputedStyle(e).width);
      e.style.removeProperty("transition"), e.style.width = "100%";
      const o = t / parseInt(window.getComputedStyle(e).width) * 100;
      e.style.width = `${o}%`
    })(), Q.timeout.stop()
  }, Et = () => {
    if (Q.timeout) {
      const e = Q.timeout.start();
      return G(e), e
    }
  };
  let Tt = !1;
  const St = {}, Lt = e => {
    for (let t = e.target; t && t !== document; t = t.parentNode) for (const e in St) {
      const o = t.getAttribute(e);
      if (o) return void St[e].fire({template: o})
    }
  };
  var jt = Object.freeze({
    __proto__: null,
    argsToParams: e => {
      const t = {};
      return "object" != typeof e[0] || $t(e[0]) ? ["title", "html", "icon"].forEach((o, n) => {
        const s = e[n];
        "string" == typeof s || $t(s) ? t[o] = s : void 0 !== s && r(`Unexpected type of ${o}! Expected "string" or "Element", got ${typeof s}`)
      }) : Object.assign(t, e[0]), t
    },
    bindClickHandler: function () {
      St[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "data-swal-template"] = this, Tt || (document.body.addEventListener("click", Lt), Tt = !0)
    },
    clickCancel: () => A() && A().click(),
    clickConfirm: $e,
    clickDeny: () => B() && B().click(),
    enableLoading: mt,
    fire: function () {
      for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
      return new this(...t)
    },
    getActions: P,
    getCancelButton: A,
    getCloseButton: S,
    getConfirmButton: C,
    getContainer: m,
    getDenyButton: B,
    getFocusableElements: L,
    getFooter: E,
    getHtmlContainer: y,
    getIcon: f,
    getIconContent: () => g(o["icon-content"]),
    getImage: v,
    getInputLabel: () => g(o["input-label"]),
    getLoader: $,
    getPopup: h,
    getProgressSteps: x,
    getTimerLeft: () => Q.timeout && Q.timeout.getTimerLeft(),
    getTimerProgressBar: T,
    getTitle: b,
    getValidationMessage: k,
    increaseTimer: e => {
      if (Q.timeout) {
        const t = Q.timeout.increase(e);
        return G(t, !0), t
      }
    },
    isDeprecatedParameter: it,
    isLoading: () => h().hasAttribute("data-loading"),
    isTimerRunning: () => Q.timeout && Q.timeout.isRunning(),
    isUpdatableParameter: at,
    isValidParameter: st,
    isVisible: () => K(h()),
    mixin: function (e) {
      return class extends (this) {
        _main(t, o) {
          return super._main(t, Object.assign({}, e, o))
        }
      }
    },
    resumeTimer: Et,
    showLoading: mt,
    stopTimer: Pt,
    toggleTimer: () => {
      const e = Q.timeout;
      return e && (e.running ? Pt() : Et())
    }
  });
  const Ot = ["swal-title", "swal-html", "swal-footer"], Mt = (e, t) => {
    Array.from(e.attributes).forEach(o => {
      -1 === t.indexOf(o.name) && i([`Unrecognized attribute "${o.name}" on <${e.tagName.toLowerCase()}>.`, "" + (t.length ? `Allowed attributes are: ${t.join(", ")}` : "To set the value, use HTML within the element.")])
    })
  }, zt = e => {
    const t = m(), n = h();
    "function" == typeof e.willOpen && e.willOpen(n);
    const s = window.getComputedStyle(document.body).overflowY;
    Dt(t, n, e), setTimeout(() => {
      qt(t, n)
    }, 10), j() && (It(t, e.scrollbarPadding, s), Array.from(document.body.children).forEach(e => {
      e === m() || e.contains(m()) || (e.hasAttribute("aria-hidden") && e.setAttribute("data-previous-aria-hidden", e.getAttribute("aria-hidden")), e.setAttribute("aria-hidden", "true"))
    })), O() || Q.previousActiveElement || (Q.previousActiveElement = document.activeElement), "function" == typeof e.didOpen && setTimeout(() => e.didOpen(n)), F(t, o["no-transition"])
  }, Ht = e => {
    const t = h();
    if (e.target !== t) return;
    const o = m();
    t.removeEventListener(le, Ht), o.style.overflowY = "auto"
  }, qt = (e, t) => {
    le && J(t) ? (e.style.overflowY = "hidden", t.addEventListener(le, Ht)) : e.style.overflowY = "auto"
  }, It = (e, t, n) => {
    (() => {
      if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !H(document.body, o.iosfix)) {
        const e = document.body.scrollTop;
        document.body.style.top = -1 * e + "px", N(document.body, o.iosfix), (() => {
          const e = m();
          let t;
          e.ontouchstart = (e => {
            t = De(e)
          }), e.ontouchmove = (e => {
            t && (e.preventDefault(), e.stopPropagation())
          })
        })(), (() => {
          const e = navigator.userAgent, t = !!e.match(/iPad/i) || !!e.match(/iPhone/i), o = !!e.match(/WebKit/i);
          if (t && o && !e.match(/CriOS/i)) {
            const e = 44;
            h().scrollHeight > window.innerHeight - e && (m().style.paddingBottom = `${e}px`)
          }
        })()
      }
    })(), t && "hidden" !== n && (null === M.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (M.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = `${M.previousBodyPadding + (() => {
      const e = document.createElement("div");
      e.className = o["scrollbar-measure"], document.body.appendChild(e);
      const t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t
    })()}px`)), setTimeout(() => {
      e.scrollTop = 0
    })
  }, Dt = (e, t, n) => {
    N(e, n.showClass.backdrop), t.style.setProperty("opacity", "0", "important"), _(t, "grid"), setTimeout(() => {
      N(t, n.showClass.popup), t.style.removeProperty("opacity")
    }, 10), N([document.documentElement, document.body], o.shown), n.heightAuto && n.backdrop && !n.toast && N([document.documentElement, document.body], o["height-auto"])
  };
  var Vt = {
    email: (e, t) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address"),
    url: (e, t) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")
  };
  let Nt;

  class Ft {
    constructor() {
      if ("undefined" == typeof window) return;
      Nt = this;
      for (var t = arguments.length, o = new Array(t), n = 0; n < t; n++) o[n] = arguments[n];
      const s = Object.freeze(this.constructor.argsToParams(o));
      Object.defineProperties(this, {params: {value: s, writable: !1, enumerable: !0, configurable: !0}});
      const a = Nt._main(Nt.params);
      e.promise.set(this, a)
    }

    _main(t) {
      let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (e => {
        !1 === e.backdrop && e.allowOutsideClick && i('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
        for (const t in e) rt(t), e.toast && lt(t), ct(t)
      })(Object.assign({}, o, t)), Q.currentInstance && (Q.currentInstance._destroy(), j() && Ie()), Q.currentInstance = Nt;
      const n = Ut(t, o);
      (function (e) {
        !function (e) {
          e.inputValidator || Object.keys(Vt).forEach(t => {
            e.input === t && (e.inputValidator = Vt[t])
          })
        }(e), e.showLoaderOnConfirm && !e.preConfirm && i("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), function (e) {
          (!e.target || "string" == typeof e.target && !document.querySelector(e.target) || "string" != typeof e.target && !e.target.appendChild) && (i('Target parameter is not valid, defaulting to "body"'), e.target = "body")
        }(e), "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />")), se(e)
      })(n), Object.freeze(n), Q.timeout && (Q.timeout.stop(), delete Q.timeout), clearTimeout(Q.restoreFocusTimeout);
      const s = _t(Nt);
      return Ce(Nt, n), e.innerParams.set(Nt, n), Rt(Nt, s, n)
    }

    then(t) {
      return e.promise.get(this).then(t)
    }

    finally(t) {
      return e.promise.get(this).finally(t)
    }
  }

  const Rt = (t, o, n) => new Promise((s, a) => {
      const i = e => {
        t.close({isDismissed: !0, dismiss: e})
      };
      qe.swalPromiseResolve.set(t, s), qe.swalPromiseReject.set(t, a), o.confirmButton.onclick = (() => {
        (t => {
          const o = e.innerParams.get(t);
          t.disableButtons(), o.input ? bt(t, "confirm") : Ct(t, !0)
        })(t)
      }), o.denyButton.onclick = (() => {
        (t => {
          const o = e.innerParams.get(t);
          t.disableButtons(), o.returnInputValueOnDeny ? bt(t, "deny") : vt(t, !1)
        })(t)
      }), o.cancelButton.onclick = (() => {
        ((e, t) => {
          e.disableButtons(), t(Pe.cancel)
        })(t, i)
      }), o.closeButton.onclick = (() => {
        i(Pe.close)
      }), ((t, o, n) => {
        e.innerParams.get(t).toast ? ((t, o, n) => {
          o.popup.onclick = (() => {
            const o = e.innerParams.get(t);
            o && (At(o) || o.timer || o.input) || n(Pe.close)
          })
        })(t, o, n) : ((e => {
          e.popup.onmousedown = (() => {
            e.container.onmouseup = function (t) {
              e.container.onmouseup = void 0, t.target === e.container && (Bt = !0)
            }
          })
        })(o), (e => {
          e.container.onmousedown = (() => {
            e.popup.onmouseup = function (t) {
              e.popup.onmouseup = void 0, (t.target === e.popup || e.popup.contains(t.target)) && (Bt = !0)
            }
          })
        })(o), ((t, o, n) => {
          o.container.onclick = (s => {
            const a = e.innerParams.get(t);
            Bt ? Bt = !1 : s.target === o.container && c(a.allowOutsideClick) && n(Pe.backdrop)
          })
        })(t, o, n))
      })(t, o, i), ((e, t, o, n) => {
        Ee(t), o.toast || (t.keydownHandler = (t => je(e, t, n)), t.keydownTarget = o.keydownListenerCapture ? window : h(), t.keydownListenerCapture = o.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {capture: t.keydownListenerCapture}), t.keydownHandlerAdded = !0)
      })(t, Q, n, i), ((e, t) => {
        "select" === t.input || "radio" === t.input ? ((e, t) => {
          const o = h(), n = e => {
            gt[t.input](o, ht(e), t)
          };
          d(t.inputOptions) || p(t.inputOptions) ? (mt(C()), u(t.inputOptions).then(t => {
            e.hideLoading(), n(t)
          })) : "object" == typeof t.inputOptions ? n(t.inputOptions) : r("Unexpected type of inputOptions! Expected object, Map or Promise, got " + typeof t.inputOptions)
        })(e, t) : ["text", "email", "number", "tel", "textarea"].includes(t.input) && (d(t.inputValue) || p(t.inputValue)) && (mt(C()), ((e, t) => {
          const o = e.getInput();
          W(o), u(t.inputValue).then(n => {
            o.value = "number" === t.input ? `${parseFloat(n) || 0}` : `${n}`, _(o), o.focus(), e.hideLoading()
          }).catch(t => {
            r(`Error in inputValue promise: ${t}`), o.value = "", _(o), o.focus(), e.hideLoading()
          })
        })(e, t))
      })(t, n), zt(n), Wt(Q, n, i), Yt(o, n), setTimeout(() => {
        o.container.scrollTop = 0
      })
    }), Ut = (e, t) => {
      const o = (e => {
        const t = "string" == typeof e.template ? document.querySelector(e.template) : e.template;
        if (!t) return {};
        const o = t.content;
        return (e => {
          const t = Ot.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
          Array.from(e.children).forEach(e => {
            const o = e.tagName.toLowerCase();
            t.includes(o) || i(`Unrecognized element <${o}>`)
          })
        })(o), Object.assign((e => {
          const t = {};
          return Array.from(e.querySelectorAll("swal-param")).forEach(e => {
            Mt(e, ["name", "value"]);
            const o = e.getAttribute("name"), n = e.getAttribute("value");
            t[o] = "boolean" == typeof et[o] ? "false" !== n : "object" == typeof et[o] ? JSON.parse(n) : n
          }), t
        })(o), (e => {
          const t = {};
          return Array.from(e.querySelectorAll("swal-function-param")).forEach(e => {
            const o = e.getAttribute("name"), n = e.getAttribute("value");
            t[o] = new Function(`return ${n}`)()
          }), t
        })(o), (e => {
          const t = {};
          return Array.from(e.querySelectorAll("swal-button")).forEach(e => {
            Mt(e, ["type", "color", "aria-label"]);
            const o = e.getAttribute("type");
            t[`${o}ButtonText`] = e.innerHTML, t[`show${a(o)}Button`] = !0, e.hasAttribute("color") && (t[`${o}ButtonColor`] = e.getAttribute("color")), e.hasAttribute("aria-label") && (t[`${o}ButtonAriaLabel`] = e.getAttribute("aria-label"))
          }), t
        })(o), (e => {
          const t = {}, o = e.querySelector("swal-image");
          return o && (Mt(o, ["src", "width", "height", "alt"]), o.hasAttribute("src") && (t.imageUrl = o.getAttribute("src")), o.hasAttribute("width") && (t.imageWidth = o.getAttribute("width")), o.hasAttribute("height") && (t.imageHeight = o.getAttribute("height")), o.hasAttribute("alt") && (t.imageAlt = o.getAttribute("alt"))), t
        })(o), (e => {
          const t = {}, o = e.querySelector("swal-icon");
          return o && (Mt(o, ["type", "color"]), o.hasAttribute("type") && (t.icon = o.getAttribute("type")), o.hasAttribute("color") && (t.iconColor = o.getAttribute("color")), t.iconHtml = o.innerHTML), t
        })(o), (e => {
          const t = {}, o = e.querySelector("swal-input");
          o && (Mt(o, ["type", "label", "placeholder", "value"]), t.input = o.getAttribute("type") || "text", o.hasAttribute("label") && (t.inputLabel = o.getAttribute("label")), o.hasAttribute("placeholder") && (t.inputPlaceholder = o.getAttribute("placeholder")), o.hasAttribute("value") && (t.inputValue = o.getAttribute("value")));
          const n = Array.from(e.querySelectorAll("swal-input-option"));
          return n.length && (t.inputOptions = {}, n.forEach(e => {
            Mt(e, ["value"]);
            const o = e.getAttribute("value"), n = e.innerHTML;
            t.inputOptions[o] = n
          })), t
        })(o), ((e, t) => {
          const o = {};
          for (const n in t) {
            const s = t[n], a = e.querySelector(s);
            a && (Mt(a, []), o[s.replace(/^swal-/, "")] = a.innerHTML.trim())
          }
          return o
        })(o, Ot))
      })(e), n = Object.assign({}, et, t, o, e);
      return n.showClass = Object.assign({}, et.showClass, n.showClass), n.hideClass = Object.assign({}, et.hideClass, n.hideClass), n
    }, _t = t => {
      const o = {
        popup: h(),
        container: m(),
        actions: P(),
        confirmButton: C(),
        denyButton: B(),
        cancelButton: A(),
        loader: $(),
        closeButton: S(),
        validationMessage: k(),
        progressSteps: x()
      };
      return e.domCache.set(t, o), o
    }, Wt = (e, t, o) => {
      const n = T();
      W(n), t.timer && (e.timeout = new class {
        constructor(e, t) {
          this.callback = e, this.remaining = t, this.running = !1, this.start()
        }

        start() {
          return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
        }

        stop() {
          return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= (new Date).getTime() - this.started.getTime()), this.remaining
        }

        increase(e) {
          const t = this.running;
          return t && this.stop(), this.remaining += e, t && this.start(), this.remaining
        }

        getTimerLeft() {
          return this.running && (this.stop(), this.start()), this.remaining
        }

        isRunning() {
          return this.running
        }
      }(() => {
        o("timer"), delete e.timeout
      }, t.timer), t.timerProgressBar && (_(n), q(n, t, "timerProgressBar"), setTimeout(() => {
        e.timeout && e.timeout.running && G(t.timer)
      })))
    }, Yt = (e, t) => {
      t.toast || (c(t.allowEnterKey) ? Zt(e, t) || Te(-1, 1) : Kt())
    },
    Zt = (e, t) => t.focusDeny && K(e.denyButton) ? (e.denyButton.focus(), !0) : t.focusCancel && K(e.cancelButton) ? (e.cancelButton.focus(), !0) : !(!t.focusConfirm || !K(e.confirmButton) || (e.confirmButton.focus(), 0)),
    Kt = () => {
      document.activeElement instanceof HTMLElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
    };
  Object.assign(Ft.prototype, pt), Object.assign(Ft, jt), Object.keys(pt).forEach(e => {
    Ft[e] = function () {
      if (Nt) return Nt[e](...arguments)
    }
  }), Ft.DismissReason = Pe, Ft.version = "11.7.3";
  const Xt = Ft;
  return Xt.default = Xt, Xt
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2), "undefined" != typeof document && function (e, t) {
  var o = e.createElement("style");
  if (e.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = t); else try {
    o.innerHTML = t
  } catch (e) {
    o.innerText = t
  }
}(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}');
