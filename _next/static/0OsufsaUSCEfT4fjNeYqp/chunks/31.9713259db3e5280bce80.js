(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{vcOE:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var i=n("17x9"),o=n.n(i),a=n("rePB"),r=n("q1tI"),s=n("5Hjz"),c=n("yLiY"),l=n.n(c),u=n("nOHt"),d="prod"===l()().publicRuntimeConfig.APP_ENV,g=!1,p=function(){var e,t,n,i,o,a;g||(g=!0,d?(e=window,t=document,n="script",i="ga",e.GoogleAnalyticsObject=i,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,o=t.createElement(n),a=t.getElementsByTagName(n)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",a.parentNode.insertBefore(o,a),window.ga("create","UA-5641939-1",{})):window.ga=function(){var e=[].slice.call(arguments);e[0]&&"gtm"===e[0].substr(0,3)||console.log("ga",e)})};function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,s={};e?(s.dimension3=t,s.dimension4=n?"pro":"basic"):s.dimension3=s.dimension4=s.user_id="none",e&&t&&"student"!==t&&(s.user_id=e),(null===i||void 0===i?void 0:i.length)?(s.dimension6=i.join(", "),s.contentGroup1=i.join(", ")):s.dimension6="none";var c=[];if(null===o||void 0===o?void 0:o.length){var l={ela:"Reading & writing",math:"Math",typing:"Typing","activity.topic.science":"Science",science:"Science","activity.topic.socialstudies":"Social studies","social-studies":"Social studies"},u=!0,d=!1,g=void 0;try{for(var p,v=o[Symbol.iterator]();!(u=(p=v.next()).done);u=!0)for(var f=p.value,m=0,h=Object.keys(l);m<h.length;m++){var w=h[m];if("string"===typeof f&&f.startsWith(w)){c.push(l[w]),delete l[w];break}}}catch(y){d=!0,g=y}finally{try{u||null==v.return||v.return()}finally{if(d)throw g}}}return s.dimension15=0!==(null===c||void 0===c?void 0:c.length)?c.join(", "):"none",s.dimension16=a||"none",s.dimension17=r||"none",s}var f=n("Aosi");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=l()().publicRuntimeConfig.APP_ENV,y="prod"===w||"qa"===w,b=!1,O=function(){b||(b=!0,y&&function(e,t,n,i,o){e[i]=e[i]||[],e[i].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var a=t.getElementsByTagName(n)[0],r=t.createElement(n);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-P22CW8",a.parentNode.insertBefore(r,a)}(window,document,"script","dataLayer"))},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=Object(r.useContext)(f.b),a=o.inGdpr,c=Object(r.useContext)(s.c),l=c.ready,d=c.memberId,g=c.memberType,p=c.isPremium,m=Object(r.useState)(null),w=m[0],y=m[1],j=Object(u.useRouter)();Object(r.useEffect)((function(){if(!1===a){if(!l)return;window.dataLayer=window.dataLayer||[];var o=v(d,g,p,e,t,n,i);if(!b)return window.dataLayer.push(h({},o)),y(j.asPath),void O();w!==j.asPath&&(y(j.asPath),setTimeout((function(){window.dataLayer.push(h({event:"page.routeChange","page.routeChange":{page:j.asPath,title:document.title}},o))}),1e3))}}),[a,l,j.asPath])};function P(e){var t=e.grades,n=void 0===t?[]:t,i=e.subjects,o=void 0===i?[]:i,a=e.contentType,c=void 0===a?null:a,l=e.pageType,d=void 0===l?null:l;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;p();var o=Object(r.useContext)(s.c),a=o.ready,c=o.memberId,l=o.memberType,d=o.isPremium,g=Object(r.useState)(null),f=g[0],m=g[1],h=Object(u.useRouter)();Object(r.useEffect)((function(){a&&f!==h.asPath&&(m(h.asPath),setTimeout((function(){window.ga("set",v(c,l,d,e,t,n,i)),window.ga("set","page",h.asPath),window.ga("set","title",document.title),window.ga("send","pageview")}),0))}),[a,c,h.asPath])}(n,o,c,d),j(n,o,c,d),null}P.propTypes={grades:o.a.arrayOf(o.a.string),subjects:o.a.arrayOf(o.a.string),contentType:o.a.string,pageType:o.a.string}}}]);
//# sourceMappingURL=31.9713259db3e5280bce80.js.map