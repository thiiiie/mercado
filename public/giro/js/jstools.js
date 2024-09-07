"use strict";
function updateLinkTarget() {
    try {
        var a = document.getElementsByName("mainSearchParams")[0];
        if (a && a.value) {
            var b = new URL(window.location.href)
              , c = new URLSearchParams(a.value);
            c.forEach(function(a, c) {
                b.searchParams.set(c, a)
            }),
            window.history.pushState({}, "", b.href)
        }
        var d = window.location.search;
        if (!d)
            return;
        var e = new URLSearchParams(d)
          , f = document.getElementById("link_target");
        if (f) {
            var g = new URL(f.href);
            e.forEach(function(a, b) {
                g.searchParams.set(b, a)
            }),
            f.href = g.href
        }
    } catch (a) {}
}
window.addEventListener("load", updateLinkTarget);
