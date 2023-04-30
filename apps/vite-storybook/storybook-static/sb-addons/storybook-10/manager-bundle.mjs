try{
var a0=__STORYBOOKAPI__,{ActiveTabs:h0,Consumer:r0,ManagerContext:i0,Provider:l0,addons:_,combineParameters:n0,controlOrMetaKey:e0,controlOrMetaSymbol:v0,eventMatchesShortcut:g0,eventToShortcut:o0,isMacLike:c0,isShortcutTaken:d0,keyToSymbol:z0,merge:p0,mockChannel:H0,optionOrAltSymbol:M0,shortcutMatchesShortcut:u0,shortcutToHumanString:f0,types:x0,useAddonState:s0,useArgTypes:m0,useArgs:V0,useChannel:L0,useGlobalTypes:R0,useGlobals:w0,useParameter:B0,useSharedState:A0,useStoryPrepared:F0,useStorybookApi:C0,useStorybookState:S0}=__STORYBOOKAPI__;var Z=(()=>{let t;return typeof window<"u"?t=window:typeof globalThis<"u"?t=globalThis:typeof window<"u"?t=window:typeof self<"u"?t=self:t={},t})();var E0=__STORYBOOKCLIENTLOGGER__,{deprecate:O0,logger:K,once:N0,pretty:G0}=__STORYBOOKCLIENTLOGGER__;function s(){return s=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var h=arguments[a];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&(t[r]=h[r])}return t},s.apply(this,arguments)}function l1(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function V(t,a){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(h,r){return h.__proto__=r,h},V(t,a)}function n1(t,a){t.prototype=Object.create(a.prototype),t.prototype.constructor=t,V(t,a)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},E(t)}function e1(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function v1(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function B(t,a,h){return v1()?B=Reflect.construct.bind():B=function(r,i,l){var n=[null];n.push.apply(n,i);var c=Function.bind.apply(r,n),d=new c;return l&&V(d,l.prototype),d},B.apply(null,arguments)}function O(t){var a=typeof Map=="function"?new Map:void 0;return O=function(h){if(h===null||!e1(h))return h;if(typeof h!="function")throw new TypeError("Super expression must either be null or a function");if(typeof a<"u"){if(a.has(h))return a.get(h);a.set(h,r)}function r(){return B(h,arguments,E(this).constructor)}return r.prototype=Object.create(h.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),V(r,h)},O(t)}var g1={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function o1(){for(var t=arguments.length,a=new Array(t),h=0;h<t;h++)a[h]=arguments[h];var r=a[0],i=[],l;for(l=1;l<a.length;l+=1)i.push(a[l]);return i.forEach(function(n){r=r.replace(/%[a-z]/,n)}),r}var H=function(t){n1(a,t);function a(h){for(var r,i=arguments.length,l=new Array(i>1?i-1:0),n=1;n<i;n++)l[n-1]=arguments[n];return r=t.call(this,o1.apply(void 0,[g1[h]].concat(l)))||this,l1(r)}return a}(O(Error));function P(t){return Math.round(t*255)}function c1(t,a,h){return P(t)+","+P(a)+","+P(h)}function L(t,a,h,r){if(r===void 0&&(r=c1),a===0)return r(h,h,h);var i=(t%360+360)%360/60,l=(1-Math.abs(2*h-1))*a,n=l*(1-Math.abs(i%2-1)),c=0,d=0,p=0;i>=0&&i<1?(c=l,d=n):i>=1&&i<2?(c=n,d=l):i>=2&&i<3?(d=l,p=n):i>=3&&i<4?(d=n,p=l):i>=4&&i<5?(c=n,p=l):i>=5&&i<6&&(c=l,p=n);var f=h-l/2,x=c+f,M=d+f,k=p+f;return r(x,M,k)}var $={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function d1(t){if(typeof t!="string")return t;var a=t.toLowerCase();return $[a]?"#"+$[a]:t}var z1=/^#[a-fA-F0-9]{6}$/,p1=/^#[a-fA-F0-9]{8}$/,H1=/^#[a-fA-F0-9]{3}$/,M1=/^#[a-fA-F0-9]{4}$/,T=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,u1=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,f1=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,x1=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function S(t){if(typeof t!="string")throw new H(3);var a=d1(t);if(a.match(z1))return{red:parseInt(""+a[1]+a[2],16),green:parseInt(""+a[3]+a[4],16),blue:parseInt(""+a[5]+a[6],16)};if(a.match(p1)){var h=parseFloat((parseInt(""+a[7]+a[8],16)/255).toFixed(2));return{red:parseInt(""+a[1]+a[2],16),green:parseInt(""+a[3]+a[4],16),blue:parseInt(""+a[5]+a[6],16),alpha:h}}if(a.match(H1))return{red:parseInt(""+a[1]+a[1],16),green:parseInt(""+a[2]+a[2],16),blue:parseInt(""+a[3]+a[3],16)};if(a.match(M1)){var r=parseFloat((parseInt(""+a[4]+a[4],16)/255).toFixed(2));return{red:parseInt(""+a[1]+a[1],16),green:parseInt(""+a[2]+a[2],16),blue:parseInt(""+a[3]+a[3],16),alpha:r}}var i=T.exec(a);if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10)};var l=u1.exec(a.substring(0,50));if(l)return{red:parseInt(""+l[1],10),green:parseInt(""+l[2],10),blue:parseInt(""+l[3],10),alpha:parseFloat(""+l[4])>1?parseFloat(""+l[4])/100:parseFloat(""+l[4])};var n=f1.exec(a);if(n){var c=parseInt(""+n[1],10),d=parseInt(""+n[2],10)/100,p=parseInt(""+n[3],10)/100,f="rgb("+L(c,d,p)+")",x=T.exec(f);if(!x)throw new H(4,a,f);return{red:parseInt(""+x[1],10),green:parseInt(""+x[2],10),blue:parseInt(""+x[3],10)}}var M=x1.exec(a.substring(0,50));if(M){var k=parseInt(""+M[1],10),r1=parseInt(""+M[2],10)/100,i1=parseInt(""+M[3],10)/100,W="rgb("+L(k,r1,i1)+")",w=T.exec(W);if(!w)throw new H(4,a,W);return{red:parseInt(""+w[1],10),green:parseInt(""+w[2],10),blue:parseInt(""+w[3],10),alpha:parseFloat(""+M[4])>1?parseFloat(""+M[4])/100:parseFloat(""+M[4])}}throw new H(5)}function s1(t){var a=t.red/255,h=t.green/255,r=t.blue/255,i=Math.max(a,h,r),l=Math.min(a,h,r),n=(i+l)/2;if(i===l)return t.alpha!==void 0?{hue:0,saturation:0,lightness:n,alpha:t.alpha}:{hue:0,saturation:0,lightness:n};var c,d=i-l,p=n>.5?d/(2-i-l):d/(i+l);switch(i){case a:c=(h-r)/d+(h<r?6:0);break;case h:c=(r-a)/d+2;break;default:c=(a-h)/d+4;break}return c*=60,t.alpha!==void 0?{hue:c,saturation:p,lightness:n,alpha:t.alpha}:{hue:c,saturation:p,lightness:n}}function Y(t){return s1(S(t))}var m1=function(t){return t.length===7&&t[1]===t[2]&&t[3]===t[4]&&t[5]===t[6]?"#"+t[1]+t[3]+t[5]:t},N=m1;function u(t){var a=t.toString(16);return a.length===1?"0"+a:a}function D(t){return u(Math.round(t*255))}function V1(t,a,h){return N("#"+D(t)+D(a)+D(h))}function F(t,a,h){return L(t,a,h,V1)}function L1(t,a,h){if(typeof t=="number"&&typeof a=="number"&&typeof h=="number")return F(t,a,h);if(typeof t=="object"&&a===void 0&&h===void 0)return F(t.hue,t.saturation,t.lightness);throw new H(1)}function R1(t,a,h,r){if(typeof t=="number"&&typeof a=="number"&&typeof h=="number"&&typeof r=="number")return r>=1?F(t,a,h):"rgba("+L(t,a,h)+","+r+")";if(typeof t=="object"&&a===void 0&&h===void 0&&r===void 0)return t.alpha>=1?F(t.hue,t.saturation,t.lightness):"rgba("+L(t.hue,t.saturation,t.lightness)+","+t.alpha+")";throw new H(2)}function G(t,a,h){if(typeof t=="number"&&typeof a=="number"&&typeof h=="number")return N("#"+u(t)+u(a)+u(h));if(typeof t=="object"&&a===void 0&&h===void 0)return N("#"+u(t.red)+u(t.green)+u(t.blue));throw new H(6)}function R(t,a,h,r){if(typeof t=="string"&&typeof a=="number"){var i=S(t);return"rgba("+i.red+","+i.green+","+i.blue+","+a+")"}else{if(typeof t=="number"&&typeof a=="number"&&typeof h=="number"&&typeof r=="number")return r>=1?G(t,a,h):"rgba("+t+","+a+","+h+","+r+")";if(typeof t=="object"&&a===void 0&&h===void 0&&r===void 0)return t.alpha>=1?G(t.red,t.green,t.blue):"rgba("+t.red+","+t.green+","+t.blue+","+t.alpha+")"}throw new H(7)}var w1=function(t){return typeof t.red=="number"&&typeof t.green=="number"&&typeof t.blue=="number"&&(typeof t.alpha!="number"||typeof t.alpha>"u")},B1=function(t){return typeof t.red=="number"&&typeof t.green=="number"&&typeof t.blue=="number"&&typeof t.alpha=="number"},A1=function(t){return typeof t.hue=="number"&&typeof t.saturation=="number"&&typeof t.lightness=="number"&&(typeof t.alpha!="number"||typeof t.alpha>"u")},F1=function(t){return typeof t.hue=="number"&&typeof t.saturation=="number"&&typeof t.lightness=="number"&&typeof t.alpha=="number"};function X(t){if(typeof t!="object")throw new H(8);if(B1(t))return R(t);if(w1(t))return G(t);if(F1(t))return R1(t);if(A1(t))return L1(t);throw new H(8)}function J(t,a,h){return function(){var r=h.concat(Array.prototype.slice.call(arguments));return r.length>=a?t.apply(this,r):J(t,a,r)}}function b(t){return J(t,t.length,[])}function y(t,a,h){return Math.max(t,Math.min(a,h))}function C1(t,a){if(a==="transparent")return a;var h=Y(a);return X(s({},h,{lightness:y(0,1,h.lightness-parseFloat(t))}))}var S1=b(C1),b1=S1;function y1(t,a){if(a==="transparent")return a;var h=Y(a);return X(s({},h,{lightness:y(0,1,h.lightness+parseFloat(t))}))}var k1=b(y1),P1=k1;function T1(t,a){if(a==="transparent")return a;var h=S(a),r=typeof h.alpha=="number"?h.alpha:1,i=s({},h,{alpha:y(0,1,(r*100+parseFloat(t)*100)/100)});return R(i)}var K0=b(T1);function D1(t,a){if(a==="transparent")return a;var h=S(a),r=typeof h.alpha=="number"?h.alpha:1,i=s({},h,{alpha:y(0,1,+(r*100-parseFloat(t)*100).toFixed(2)/100)});return R(i)}var U1=b(D1),I1=U1,o={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},q={app:"#F6F9FC",bar:o.lightest,content:o.lightest,gridCellSize:10,hoverable:I1(.93,o.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},C={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},E1={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:q.app,appContentBg:o.lightest,appBorderColor:o.border,appBorderRadius:4,fontBase:C.fonts.base,fontCode:C.fonts.mono,textColor:o.darkest,textInverseColor:o.lightest,textMutedColor:o.mediumdark,barTextColor:o.mediumdark,barSelectedColor:o.secondary,barBg:o.lightest,buttonBg:q.app,buttonBorder:o.medium,booleanBg:o.mediumlight,booleanSelectedBg:o.lightest,inputBg:o.lightest,inputBorder:o.border,inputTextColor:o.darkest,inputBorderRadius:4},Q=E1,O1={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:C.fonts.base,fontCode:C.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:"#798186",barSelectedColor:o.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:o.lightest,inputBorderRadius:4},N1=O1,{window:U}=Z;var G1=t=>typeof t!="string"?(K.warn(`Color passed to theme object should be a string. Instead ${t}(${typeof t}) was passed.`),!1):!0,j1=t=>!/(gradient|var|calc)/.test(t),W1=(t,a)=>t==="darken"?R(`${b1(1,a)}`,.95):t==="lighten"?R(`${P1(1,a)}`,.95):a,t1=t=>a=>{if(!G1(a)||!j1(a))return a;try{return W1(t,a)}catch{return a}},Q0=t1("lighten"),Y0=t1("darken"),_1=()=>!U||!U.matchMedia?"light":U.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",A={light:Q,dark:N1,normal:Q},I=_1(),j=(t={base:I},a)=>{let h={...A[I],...A[t.base]||{},...t,base:A[t.base]?t.base:I};return{...a,...h,barSelectedColor:t.barSelectedColor||h.colorSecondary}};var z={pink:"#f9b1cc",purple:"#7966CC",yellow:"#FFE600",white:"#F9F8F5",beige:"#F2EFE8",black:"#1C161D",blue:"#87B1E8",green:"#7FE6A7",orange:"#FAA447",red:"#EA5766"};var m=__REACT__,{Children:c2,Component:d2,Fragment:z2,Profiler:p2,PureComponent:H2,StrictMode:M2,Suspense:u2,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:f2,cloneElement:x2,createContext:s2,createElement:Z1,createFactory:m2,createRef:V2,forwardRef:L2,isValidElement:R2,lazy:w2,memo:B2,useCallback:A2,useContext:F2,useDebugValue:C2,useEffect:S2,useImperativeHandle:b2,useLayoutEffect:y2,useMemo:k2,useReducer:P2,useRef:T2,useState:D2,version:U2}=__REACT__;var a1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$1=m.createContext&&m.createContext(a1);var h1=j({base:"light",fontBase:'"Open Sans", sans-serif',fontCode:"monospace",brandTitle:"Connecting events",brandUrl:"https://example.com",brandImage:"/logo-d-trans.png",brandTarget:"_self",colorPrimary:z.pink,colorSecondary:z.blue,appBg:z.beige,appContentBg:z.white,appBorderColor:z.peach,appBorderRadius:4,textColor:z.black,textInverseColor:z.white,barTextColor:z.black,barSelectedColor:z.peach,barBg:z.beige,inputBg:z.white,inputBorder:z.peach,inputTextColor:z.black,inputBorderRadius:2});_.setConfig({isFullscreen:!1,showNav:!0,showPanel:!0,panelPosition:"bottom",enableShortcuts:!0,showToolbar:!0,theme:h1,selectedPanel:void 0,initialActive:"sidebar",sidebar:{showRoots:!1,collapsedRoots:["other"]},toolbar:{title:{hidden:!1},zoom:{hidden:!1},eject:{hidden:!1},copy:{hidden:!1},fullscreen:{hidden:!1}}});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.mjs.map
