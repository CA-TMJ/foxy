/* Foxy Dynamic Product Prices and Currency Conversion v0.4, https://foxy.io */
(function(c,b){var g=function(c){return new y(c)};g.version="0.1.3";var k=c.fxSetup||{rates:{},base:""};g.rates=k.rates;g.base=k.base;g.settings={from:k.from||g.base,to:k.to||g.base};var t=g.convert=function(c,b){if("object"===typeof c&&c.length){for(var d=0;d<c.length;d++)c[d]=t(c[d],b);return c}b=b||{};b.from||(b.from=g.settings.from);b.to||(b.to=g.settings.to);d=b.to;var z=b.from,l=g.rates;l[g.base]=1;if(!l[d]||!l[z])throw"fx error";d=z===g.base?l[d]:d===g.base?1/l[z]:1/l[z]*l[d];return c*d},y=
function(c){"string"===typeof c?(this._v=parseFloat(c.replace(/[^0-9-.]/g,"")),this._fx=c.replace(/([^A-Za-z])/g,"")):this._v=c};k=g.prototype=y.prototype;k.convert=function(){var c=Array.prototype.slice.call(arguments);c.unshift(this._v);return t.apply(g,c)};k.from=function(c){c=g(t(this._v,{from:c,to:g.base}));c._fx=g.base;return c};k.to=function(c){return t(this._v,{from:this._fx?this._fx:g.settings.from,to:c})};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=
module.exports=g),exports.fx=fx):"function"===typeof define&&define.amd?define([],function(){return g}):(g.noConflict=function(d){return function(){c.fx=d;g.noConflict=b;return g}}(c.fx),c.fx=g)})(this);
!function(c){"object"==typeof exports&&"undefined"!=typeof module?module.exports=c():"function"==typeof define&&define.amd?define([],c):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).numberCurrencyFormat=c()}(function(){return function t(b,g,k){function y(m,z){if(!g[m]){if(!b[m]){var l="function"==typeof require&&require;if(!z&&l)return l(m,!0);if(d)return d(m,!0);l=Error("Cannot find module '"+m+"'");throw l.code="MODULE_NOT_FOUND",l;}l=g[m]=
{exports:{}};b[m][0].call(l.exports,function(h){return y(b[m][1][h]||h)},l,l.exports,t,b,g,k)}return g[m].exports}for(var d="function"==typeof require&&require,m=0;m<k.length;m++)y(k[m]);return y}({1:[function(b,g,k){function t(b,g){return void 0!==b?b:g}function y(b){return b?{currency:b.currency||d.currency,thousandSeparator:t(b.thousandSeparator,d.thousandSeparator),decimalSeparator:t(b.decimalSeparator,d.decimalSeparator),showDecimals:b.showDecimals||d.showDecimals,decimalsDigits:t(b.decimalsDigits,
d.decimalsDigits),currencyPosition:b.currencyPosition||d.currencyPosition,spacing:t(b.spacing,d.spacing),arithmeticalRounding:t(b.arithmeticalRounding,d.arithmeticalRounding)}:d}var d={currency:"",showDecimals:"ALWAYS",thousandSeparator:",",decimalSeparator:".",currencyPosition:"RIGHT",decimalsDigits:2,spacing:!0,arithmeticalRounding:!1};g.exports={format:function(b,g){var d=y(g),l="AS_IS"===d.showDecimals?b.toString():parseFloat((d.arithmeticalRounding?function(b,d){return+(Math.round(b+"e+"+d)+
"e-"+d)}(b,d.decimalsDigits):+b).toString()).toFixed("NEVER"===d.showDecimals?0:d.decimalsDigits);if(isNaN(l))return b;l=l.split(".");var h=l[1]||"";h="ALWAYS"===d.showDecimals||"IF_NEEDED"===d.showDecimals&&0<+h||"AS_IS"===d.showDecimals&&0<h.length?d.decimalSeparator+h:"";l=(m=l[0],k=d.thousandSeparator,m.split("").reduce(function(b,d,h){return b+d+(h<m.length-1&&0==(m.length-h-1)%3&&"-"!==d?k:"")},"")+h);var m,k;return d.currency?(h=d.spacing?" ":"","LEFT"===d.currencyPosition?d.currency+h+l:l+
h+d.currency):l},unformat:function(b,d){var g=y(d),l=d&&d.decimalSeparator,h=b.replace(/\s/g,"").match(/[0-9]+|[^0-9]+/gi).map(function(b,d){return{value:b,isNumber:/[0-9]+/.test(b),index:d}}),m=h.filter(function(b){return b.isNumber}),k=h.filter(function(b){return!b.isNumber}),t=m[0],r=m[m.length-1],A=0<t.value?t:1<m.length&&0<m[1].value?m[1]:void 0;if(!A)return 0;var E=(A=0<A.index?h[A.index-1]:void 0)&&1===k.length&&/^[\.,]$/.test(A.value),B=r.index-1;h=0<=B&&h[B];k=k.filter(function(b){return b.index>
t.index&&b.index<B}).map(function(b){return b.value});k=0<k.length&&0>k.indexOf(h.value);var v=h&&h.value===l;g=r.value.length===g.decimalsDigits&&h&&/^[\.,]$/.test(h.value);l=(l?v:g||v||E||k)?r.value.length:0;r=(r=A&&A.value)&&"-"===r[r.length-1];m=m.map(function(b){return b.value}).join("");return parseFloat(m/Math.pow(10,l))*(r?-1:1)}}},{}]},{},[1])(1)});var FC=FC||{};
(function(c,b){function g(){for(var e=b.json.shipping_address.country,c=""==b.json.template_set?"DEFAULT":b.json.template_set,n="DEFAULT",F=0;F<settings.sets.length;F++)settings.sets[F].hasOwnProperty("countries")&&-1<settings.sets[F].countries.indexOf(e)&&(n=settings.sets[F].template_set);if(!v()&&(B(),n!=c)){m(n);return}H();t()}function k(){return settings.sets.map(function(b,c){return b.currency}).filter(function(b,c,n){return n.indexOf(b)===c})}function t(e){var q=k();e=void 0===e?!1:e;var n=
v();n.hasOwnProperty("rates")&&(Date.now()-n.rates.timestamp)/60<36E4*parseFloat(settings.max_rate_cache)&&(e||n.rates.fcsid==b.json.session_id)?(fx.rates=n.rates.rates,fx.base=n.rates.base,d()):e||(settings.use_openexchangerates?c.getJSON("https://openexchangerates.org/api/latest.json?app_id="+settings.use_openexchangerates+"&prettyprint=false&symbols="+q.join(","),function(b){y(b.rates,b.base);d()}):c.getJSON("http://www.floatrates.com/daily/"+settings.base+".json",function(b){for(var c={},e=0;e<
q.length;e++)if(b.hasOwnProperty(q[e].toLowerCase())||q[e]==settings.base)c[q[e]]=q[e]==settings.base?1:b[q[e].toLowerCase()].rate;y(c,settings.base);d()}))}function y(b,c){fx.rates=b;fx.base=c;B({rates:b,base:c,timestamp:Date.now()})}function d(){var e=v();if(!e)return console.log("FC.currency: Unable to find locale information"),!1;var q=A(),n=0<b.json.item_count?b.json.locale_info.int_curr_symbol.trim():e.locale.int_curr_symbol.trim();c(".fc-currency-price").each(function(){var q=E(c(this).html()),
d=c(this).data("fc-currency")?c(this).data("fc-currency"):settings.base,h=q;d!=n&&(h=fx.convert(q,{from:d,to:n}),h=z(h));c(this).html(b.util.money_format(e.currency_format,h).trim()).data("fc-currency",n).show()});c('form[action*="'+q+'"]').each(function(){var b=c(this).find('[name="price"], [name$=":price"]');if(0==b.length)return!1;var e=settings.base;if(c(this).data("fc-currency"))e=c(this).data("fc-currency");else{var q=/([\d\.]+)([A-Z]{3})$/i,d=b.first().val().replace(" ","");d.match(q);q.test(d)&&
(e=q.exec(d)[2].toUpperCase())}e!=n&&(c(this).find("[value*='{p'], [value*='|p']").each(function(){var b=this.value.match(D);b&&(b=fx.convert(parseFloat(b[3]),{from:e,to:n}),b=z(b),settings.convert_display_only||(this.value=this.value.replace(D,"$1p$2"+b.toFixed(2)+n.toLowerCase()+"$4")))}),b.each(function(){var b=E(this.value);b=fx.convert(b,{from:e,to:n});b=z(b);settings.convert_display_only||(this.value=b.toFixed(2)+n.toLowerCase())}),c(this).data("fc-currency",n));l()})}function m(e){b.client.request("https://"+
b.json.config.store_domain+"/cart?template_set="+e).done(function(){B();g()})}function H(){var e=v(),q=!1;e=0<b.json.item_count?""==b.json.template_set?"DEFAULT":b.json.template_set:e.template_set;for(var n=0;n<settings.sets.length;n++)settings.sets[n].template_set==e&&(q=e);q&&(c("[data-fc-template-set]."+settings.active_class).removeClass(settings.active_class),c('[data-fc-template-set="'+q+'"]').addClass(settings.active_class))}function z(b){var c=-1<["full","half","minimal","none",!1].indexOf(settings.rounding)?
settings.rounding:G.rounding;return"full"==c?Math.ceil(b):"half"==c?(c=b%1,Math.floor(b)+(0==c?0:.5>=c?.5:1)):"minimal"==c?Math.ceil(20*b)/20:b}function l(){ADJUST={};c("input,select").off("change.foxy-dynamic-price");c('form[action*="'+A()+'"]').each(function(){var b=c(this),d="",n={products:{}};c(this).find("[name='name'],[name^='name||'],[name$=':name'],[name*=':name||']").each(function(){var c=K(this.name),e=c?c+":":"",q=E(b.find("[name='"+e+"price'],[name^='"+e+"price||']").first().val());q=
{id:c,code:"",base_price:q?q:0,quantity:1,attributes:{},has_quantity:!1};var g=b.find("[name='"+e+"quantity'],[name^='"+e+"quantity||']");e=b.find("[name='"+e+"code'],[name^='"+e+"code||']");0<e.length&&(q.code=h(e.first().val()),""===d&&(d=q.code));if(0<g.length){e=0;var l=I(g);-1<["select","text","hidden"].indexOf(l)?(q.has_quantity=!0,e=parseFloat(h(g.val()))):-1<["radio","checkbox"].indexOf(l)&&(q.has_quantity=!0,1==g.filter(":checked").length&&(e=parseFloat(h(g.filter(":checked").val()))));isNaN(e)&&
(e=0);q.quantity=e}n.products[c]=q});b.attr("data-fc-form-code")&&(d=b.attr("data-fc-form-code"));""!==d&&(c(this).find("input,select").each(function(){var b=K(this.name),e=J(this.name)[2],q=I(c(this));if("quantity"==e)c(this).data("fc-adjust-for",d).on("change.foxy-dynamic-price",function(){var e=0;if(-1<["select","text"].indexOf(q)||-1<["radio","checkbox"].indexOf(q)&&c(this).is(":checked"))e=parseFloat(h(this.value));isNaN(e)&&(e=0);ADJUST[c(this).data("fc-adjust-for")].products[b].quantity=e;
r()});else if("price"==e&&"hidden"!=q)c(this).data("fc-adjust-for",d).on("change.foxy-dynamic-price",function(){var e=0;if(-1<["select","text"].indexOf(q)||-1<["radio","checkbox"].indexOf(q)&&c(this).is(":checked"))e=parseFloat(h(this.value));isNaN(e)&&(e=0);ADJUST[c(this).data("fc-adjust-for")].products[b].base_price=e;r()});else if("SELECT"==this.tagName){var g=!1;c(this).children("option").each(function(){-1<this.value.search(D)&&(g=!0)});g&&(c(this).data("fc-adjust-for",d),n.products[b].attributes[h(this.name)]=
h(this.value),c(this).on("change.foxy-dynamic-price",function(){ADJUST[c(this).data("fc-adjust-for")].products[b].attributes[h(this.name)]=h(this.value);r()}))}else if(-1<this.value.search(D))switch(c(this).data("fc-adjust-for",d),c(this).attr("type")){case "checkbox":c(this).is(":checked")?n.products[b].attributes[h(this.name)]=h(this.value):n.products[b].attributes[h(this.name)]="";c(this).on("change.foxy-dynamic-price",function(){c(this).is(":checked")?ADJUST[c(this).data("fc-adjust-for")].products[b].attributes[h(this.name)]=
h(this.value):ADJUST[c(this).data("fc-adjust-for")].products[b].attributes[h(this.name)]="";r()});break;case "radio":n.products[b].attributes.hasOwnProperty(h(this.name))||(n.products[b].attributes[h(this.name)]=""),c(this).is(":checked")&&(n.products[b].attributes[h(this.name)]=h(this.value)),c("[name='"+this.name+"']").data("fc-adjust-for",d).on("change.foxy-dynamic-price",function(){ADJUST[c(this).data("fc-adjust-for")].products[b].attributes[h(this.name)]=h(this.value);r()})}}),ADJUST[d]=n)});
C._ADJUST=ADJUST;r()}function h(b){return b.replace(/\|\|[\d\w]+(?:\|\|open)?$/,"")}function J(b){b=h(b);return b.match(/(?:(\d+):)?(.*)/)}function K(b){b=J(b);L.test(this.name)&&(prefix=parseInt(this.name.match(L)[0]));return void 0===b[1]?0:parseInt(b[1])}function I(b){if("SELECT"==b[0].tagName)return"select";if("INPUT"==b[0].tagName)switch(b.attr("type").toLowerCase()){case "text":case "number":case "tel":return"text";default:return b.attr("type").toLowerCase()}}function r(){for(f in ADJUST){var e=
0,d=0;for(p in ADJUST[f].products){var n=ADJUST[f].products[p].base_price,h=0;for(a in ADJUST[f].products[p].attributes){var g=ADJUST[f].products[p].attributes[a].match(D);if(g)switch(g[2]){case ":":n=parseFloat(g[3]);break;case "+":h+=parseFloat(g[3]);break;case "-":h-=parseFloat(g[3])}}n+=h;n*=ADJUST[f].products[p].quantity;e+=n;d+=ADJUST[f].products[p].quantity}"function"===typeof fcFormatPrice&&(e=fcFormatPrice(e,f));"function"===typeof fcFormatQuantity&&(d=fcFormatQuantity(d,f));n=v();e=b.util.money_format(n.currency_format,
e).trim();c("."+f+"_total, ."+f+"-total").html(e);c("."+f+"_total_quantity, ."+f+"-total-quantity").html(d)}}function A(){var c=v();return b.json.hasOwnProperty("config")?b.json.config.store_domain:c?c.store_domain:".foxycart.com"}function E(b){try{return numberCurrencyFormat.unformat(b)}catch(q){return!1}}function B(c){var e=v(),d=Object.assign({},e);e&&""==b.json.template_set&&"undefined"!==typeof c||Object.assign(d,{fcsid:b.json.session_id,store_domain:b.json.config.store_domain,template_set:""==
b.json.template_set?"DEFAULT":b.json.template_set,locale:b.json.locale_info,currency_format:b.json.config.currency_format});"object"===typeof c&&Object.assign(d,{rates:c});localStorage.setItem("fc_currency_config",JSON.stringify(d))}function v(){var c=JSON.parse(localStorage.getItem("fc_currency_config"));return null===c||b.hasOwnProperty("json")&&b.json.hasOwnProperty("session_id")&&c.fcsid!==b.json.session_id?!1:c}var C={version:.4},D=/([{\|])p([+\-:])([\d\.]+)(?:\D{3})?([\|}])/,L=/^(\d+):/,G={base:"USD",
sets:[],max_rate_cache:12,rounding:"minimal",convert_display_only:!1,active_class:"active",use_openexchangerates:!1};b.hasOwnProperty("util")||(b.util={},b.util.money_format=function(c,d){if("number"!==typeof d)return null;var e=b.json.locale_info;return c.replace(/%((=.|[+^(!-])*?)(\d*?)(#(\d+))?(\.(\d+))?([in%])/g,function(c,g,h,q,n,l,m,k,t){c=m="";if("%"===t)return"%";m=g&&/=./.test(g)?g.match(/=(.)/)[1]:" ";n=!g||-1===g.indexOf("!");q=parseInt(q,10)||0;(h=0>d)&&(d=-d);k=""===k||void 0===k?"i"===
t?e.int_frac_digits:e.frac_digits:parseInt(k,10);d=b.util.round(d,k);d=d.toFixed(k);var r=d.indexOf(".");k=-1!==r?d.slice(0,r):d;r=-1!==r?d.slice(r+1):"";var y=function(b,c,d){b=b.split("");b.splice(c,0,d);return b.join("")},v=k.length;l=parseInt(l,10);var z=v<l;if(z){var w=l-v;k=Array(w+1).join(m)+k}if(-1===g.indexOf("^")){l=e.mon_thousands_sep;v=e.mon_grouping;if(v[0]<k.length)for(var u=0,x=k.length;u<v.length;u++){x-=v[u];if(0>=x)break;z&&x<w&&(l=m);k=y(k,x,l)}if(0<v[u-1])for(;x>v[u-1];)x-=v[u-
1],z&&x<w&&(l=m),k=y(k,x,l)}m=r?k+e.mon_decimal_point+r:k;w="";n&&(w="i"===t?e.int_curr_symbol:e.currency_symbol);t=h?e.n_sign_posn:e.p_sign_posn;u=h?e.n_sep_by_space:e.p_sep_by_space;x=h?e.n_cs_precedes:e.p_cs_precedes;if(-1!==g.indexOf("("))c=(x?w+(1===u?" ":""):"")+m+(x?"":(1===u?"\u00a0":"")+w),c=h?"("+c+")":"\u00a0"+c+"\u00a0";else switch(l=e.positive_sign,n=e.negative_sign,k=h?n:l,r="",t&&(r=Array((h?l:n).length-k.length+1).join(" ")),t){case 0:c="("+(x?w+(1===u?"\u00a0":"")+m:m+(1===u?"\u00a0":
"")+w)+")";break;case 1:c=r+k+(2===u?"\u00a0":"")+(x?w+(1===u?"\u00a0":"")+m:m+(1===u?"\u00a0":"")+w);break;case 2:c=(x?w+(1===u?"\u00a0":"")+m:m+(1===u?"\u00a0":"")+w)+(2===u?"\u00a0":"")+k+r;break;case 3:c=x?r+k+(2===u?"\u00a0":"")+w+(1===u?"\u00a0":"")+m:m+(1===u?"\u00a0":"")+k+r+(2===u?"\u00a0":"")+w;break;case 4:c=x?w+(2===u?"\u00a0":"")+r+k+(1===u?"\u00a0":"")+m:m+(1===u?"\u00a0":"")+w+(2===u?"\u00a0":"")+k+r}q-=c.length;0<q&&(q=Array(q+1).join(" "),c=-1!==g.indexOf("-")?c+q:q+c);return c})},
b.util.round=function(b,c){var d=Math.pow(10,c);5<=10*b*d%10&&(b+=1/(10*d));return Math.round(b*d)/d});C.update=function(){settings=b.hasOwnProperty("currency_config")?Object.assign({},G,b.currency_config):Object.assign({},G);var c=b.hasOwnProperty("session")&&!0===b.session.initialized,d=v();!d||b.hasOwnProperty("json")&&0!=b.json.item_count||(b.hasOwnProperty("json")||(b.json={}),b.json.currency_format=d.currency_format,b.json.locale_info=d.locale,b.json.item_count=0);if(d&&!c||c)1<settings.sets.length?
c?g():(H(),t(!0)):(d||B(),l())};var M="function"==typeof b.onLoad?b.onLoad:function(){};b.onLoad=function(){b.client.on("ready.done",C.update);M()};c(function(){C.update();c("body").on("click","[data-fc-template-set]",function(b){var d=c(this).attr("data-fc-template-set");for(var e=!1,g=0;g<settings.sets.length;g++)settings.sets[g].template_set==d&&(e=settings.sets[g]);if(d=e)b.preventDefault(),m(d.template_set)})});b.currency=C})(jQuery,FC);
