function cffOrderEditScriptLoader() {
  var r = window.location.href.indexOf("/account") >= 0,
    e = window.location.href.indexOf("cff_order_cart") >= 0,
    o = function () {
      var r = r || {},
        e = r.checkout || {},
        o = window.Checkout;
      if (o) {
        var t = window.location.href,
          i = t.split("/orders/");
        if (2 == i.length) return !0;
      }
      if (e.order_id) return !0;
      var n = window.location.href.indexOf("orders") > -1,
        d = window.location.href.indexOf("checkout.shopify.com") > -1,
        c = window.location.href.indexOf("thank_you") > -1,
        f = d && (c || n),
        a = c && window.location.href.indexOf("checkouts") > -1;
      return f || a;
    },
    t = r || e || o();
  if (t) {
    var i = "//d3g420rgevyqxw.cloudfront.net/cffOrderEdit.production.min.js",
      n = document.createElement("script");
    n.setAttribute("async", ""),
      n.setAttribute("src", i),
      document.head.appendChild(n);
  }
}
cffOrderEditScriptLoader();
