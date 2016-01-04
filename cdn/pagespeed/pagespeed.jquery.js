/*
 * Fallback for Google Pagespeed sharding.
 *
 * Presumptions:
 *    Pagespeed sharding is on.
 *    This javascript is included at the bottom of the body (or there-abouts).
 *    The website in question includes jQuery on this page.
 *    Pagespeed is sharding the jQuery javascript (it isn't being loaded externally).
 *    If the user cannot get one of the shard subdomains, they cannot get them all.
 *
 * Logic:
 *    If jQuery isn't available then the user has likely failed to load all static*.* content,
 *    so this adds jQuery, and then replaces the SRC/HREF tags of pagespeed links to the non-sharded equivalents.
 *
 * Pitfalls:
 *    This may not fix a situation where a user can hit some, but not all shard subdomains.
 *    If background images are used that reference sharded domains, they'll be missing, because I'm not scraping for those.
 */
(function () {
    if (typeof window.jQuery === 'undefined') {
        var js = document.createElement('script');
        js.type = 'text/javascript';
        js.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
        document.getElementsByTagName('head')[0].appendChild(js);
        var wait = function () {
            if (typeof window.jQuery != 'undefined') {
                (function ($) {
                    $(document).ready(function () {
                        $('script, link[type="text/css"], style, img').each(function () {
                            var src = $(this).attr('src'),
                                href = $(this).attr('href'),
                                url = src,
                                attribute = 'src';
                            if (!url) {
                                attribute = 'href';
                                url = href;
                            }
                            if (url && url.indexOf('.pagespeed.') !== -1) {
                                var newurl = url.replace(/\/\/static\d*\./, '//');
                                if (newurl !== url){
                                    $(this).attr(attribute, newurl);
                                }
                            }
                        });
                    });
                })(jQuery);
            } else {
                window.setTimeout(wait, 50);
            }
        };
        window.setTimeout(wait, 50);
    }
})();
