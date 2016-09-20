/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-formvalidation-inputtypes-microdata-setclasses !*/
!function(e,t,n){function a(e,t){return typeof e===t}function i(){var e,t,n,i,o,s,r;for(var l in f)if(f.hasOwnProperty(l)){if(e=[],t=f[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=a(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],r=s.split("."),1===r.length?Modernizr[r[0]]=i:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=i),d.push((i?"":"no-")+r.join("-"))}}function o(e){var t=u.className,n=Modernizr._config.classPrefix||"";if(c&&(t=t.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),c?u.className.baseVal=t:u.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):c?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function r(){var e=t.body;return e||(e=s(c?"svg":"body"),e.fake=!0),e}function l(e,n,a,i){var o,l,d,f,p="modernizr",c=s("div"),m=r();if(parseInt(a,10))for(;a--;)d=s("div"),d.id=i?i[a]:p+(a+1),c.appendChild(d);return o=s("style"),o.type="text/css",o.id="s"+p,(m.fake?m:c).appendChild(o),m.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),c.id=p,m.fake&&(m.style.background="",m.style.overflow="hidden",f=u.style.overflow,u.style.overflow="hidden",u.appendChild(m)),l=n(c,e),m.fake?(m.parentNode.removeChild(m),u.style.overflow=f,u.offsetHeight):c.parentNode.removeChild(c),!!l}var d=[],f=[],p={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){f.push({name:e,fn:t,options:n})},addAsyncTest:function(e){f.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=p,Modernizr=new Modernizr,Modernizr.addTest("microdata","getItems"in t);var u=t.documentElement,c="svg"===u.nodeName.toLowerCase(),m=s("input"),v="search tel url email datetime date month week time datetime-local number range color".split(" "),h={};Modernizr.inputtypes=function(e){for(var a,i,o,s=e.length,r="1)",l=0;s>l;l++)m.setAttribute("type",a=e[l]),o="text"!==m.type&&"style"in m,o&&(m.value=r,m.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&m.style.WebkitAppearance!==n?(u.appendChild(m),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(m,null).WebkitAppearance&&0!==m.offsetHeight,u.removeChild(m)):/^(search|tel)$/.test(a)||(o=/^(url|email)$/.test(a)?m.checkValidity&&m.checkValidity()===!1:m.value!=r)),h[e[l]]=!!o;return h}(v);var g=p.testStyles=l;Modernizr.addTest("formvalidation",function(){var t=s("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var n,a=!1;return Modernizr.formvalidationapi=!0,t.addEventListener("submit",function(t){(!e.opera||e.operamini)&&t.preventDefault(),t.stopPropagation()},!1),t.innerHTML='<input name="modTest" required="required" /><button></button>',g("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),n=t.getElementsByTagName("input")[0],n.addEventListener("invalid",function(e){a=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!n.validationMessage,t.getElementsByTagName("button")[0].click()}),a}),i(),o(d),delete p.addTest,delete p.addAsyncTest;for(var y=0;y<Modernizr._q.length;y++)Modernizr._q[y]();e.Modernizr=Modernizr}(window,document);