(function($){ var JST = { templates: {} }; JST.multiple = function anonymous(obj) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('');}return __p.join('');
};JST.multiple_header = function anonymous(obj) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('\n<h1>', title ,'</h1>\n\n');}return __p.join('');
};JST.multiple_footer = function anonymous(obj) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('\n<h1>', title ,'</h1>\n\n');}return __p.join('');
};JST.multiple_foo_bar = function anonymous(obj) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('\n'); if (foo) { __p.push('\n  '); _.each(foo, function(value) { __p.push('\n    <div>$', value ,'</div>\n  '); }); __p.push('\n'); } __p.push('');}return __p.join('');
};

JST.sample = function anonymous(obj) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h1>', title ,'</h1>\n<p>This is a sample template</p>\n'); if (foo) { __p.push('\n  '); _.each(foo, function(value) { __p.push('\n    <div>', value ,'</div>\n  '); }); __p.push('\n'); } __p.push('\n');}return __p.join('');
};window.JST = JST; })(jQuery);