(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{211:function(t,r,n){"use strict";var e=n(0),i=n(19);r.a=function(){var t=Object(e.useContext)(i.a);if(null===t)throw new Error("Docusaurus context not provided");return t}},212:function(t,r,n){"use strict";n.d(r,"b",(function(){return u})),n.d(r,"a",(function(){return o}));var e=n(211),i=n(214);function u(){var t=Object(e.a)().siteConfig,r=(t=void 0===t?{}:t).baseUrl,n=void 0===r?"/":r,u=t.url;return{withBaseUrl:function(t,r){return function(t,r,n,e){var u=void 0===e?{}:e,o=u.forcePrependBaseUrl,c=void 0!==o&&o,a=u.absolute,s=void 0!==a&&a;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return r+n;var f=n.startsWith(r)?n:r+n.replace(/^\//,"");return s?t+f:f}(u,n,t,r)}}}function o(t,r){return void 0===r&&(r={}),(0,u().withBaseUrl)(t,r)}},214:function(t,r,n){"use strict";function e(t){return!0===/^(\w*:|\/\/)/.test(t)}function i(t){return void 0!==t&&!e(t)}n.d(r,"b",(function(){return e})),n.d(r,"a",(function(){return i}))},63:function(t,r,n){"use strict";n.r(r);var e=n(2),i=n(0),u=n.n(i),o=n(212);r.default=function(t){return u.a.createElement("img",Object(e.a)({src:Object(o.a)("img/spring_boot.svg"),alt:"Spring Boot"},t))}}}]);