function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    var url = encodeURIComponent(document.location.origin + document.location.pathname + "?share");
    temp.innerHTML = htmlStr.replace(/URI/g, url);
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-67228333-2', 'auto');
ga(function (tracker) {
    tracker.set('student', document.location.hostname.split(".")[0]);
});
ga('send', 'pageview');
