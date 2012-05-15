var basepath = 'http://mikesmullin.github.com/jfiller-bookmarklet/jfiller/';
jQuery('head').append('<link rel="stylesheet" href="'+ basepath +'jfiller.css" type="text/css" />');
jQuery.getScript(basepath +'jquery.cookie.js', function() {
  jQuery.getScript(basepath +'jfiller.js', function() {
    jQuery('form').FillIt();
  });
});
