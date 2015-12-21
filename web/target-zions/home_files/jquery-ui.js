/*! jQuery UI - v1.9.2 - 2014-07-18
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.accordion.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(b,f){var a=0,e=/^ui-id-\d+$/;b.ui=b.ui||{};if(b.ui.version){return}b.extend(b.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});b.fn.extend({_focus:b.fn.focus,focus:function(g,h){return typeof g==="number"?this.each(function(){var i=this;setTimeout(function(){b(i).focus();if(h){h.call(i)}},g)}):this._focus.apply(this,arguments)},scrollParent:function(){var g;if((b.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){g=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(b.css(this,"position"))&&(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))}).eq(0)}else{g=this.parents().filter(function(){return(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))}).eq(0)}return(/fixed/).test(this.css("position"))||!g.length?b(document):g},zIndex:function(j){if(j!==f){return this.css("zIndex",j)}if(this.length){var h=b(this[0]),g,i;while(h.length&&h[0]!==document){g=h.css("position");if(g==="absolute"||g==="relative"||g==="fixed"){i=parseInt(h.css("zIndex"),10);if(!isNaN(i)&&i!==0){return i}}h=h.parent()}}return 0},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++a)}})},removeUniqueId:function(){return this.each(function(){if(e.test(this.id)){b(this).removeAttr("id")}})}});function d(i,g){var k,j,h,l=i.nodeName.toLowerCase();if("area"===l){k=i.parentNode;j=k.name;if(!i.href||!j||k.nodeName.toLowerCase()!=="map"){return false}h=b("img[usemap=#"+j+"]")[0];return !!h&&c(h)}return(/input|select|textarea|button|object/.test(l)?!i.disabled:"a"===l?i.href||g:g)&&c(i)}function c(g){return b.expr.filters.visible(g)&&!b(g).parents().andSelf().filter(function(){return b.css(this,"visibility")==="hidden"}).length}b.extend(b.expr[":"],{data:b.expr.createPseudo?b.expr.createPseudo(function(g){return function(h){return !!b.data(h,g)}}):function(j,h,g){return !!b.data(j,g[3])},focusable:function(g){return d(g,!isNaN(b.attr(g,"tabindex")))},tabbable:function(i){var g=b.attr(i,"tabindex"),h=isNaN(g);return(h||g>=0)&&d(i,!h)}});b(function(){var g=document.body,h=g.appendChild(h=document.createElement("div"));h.offsetHeight;b.extend(h.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});b.support.minHeight=h.offsetHeight===100;b.support.selectstart="onselectstart" in h;g.removeChild(h).style.display="none"});if(!b("<a>").outerWidth(1).jquery){b.each(["Width","Height"],function(j,g){var h=g==="Width"?["Left","Right"]:["Top","Bottom"],k=g.toLowerCase(),m={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};function l(o,n,i,p){b.each(h,function(){n-=parseFloat(b.css(o,"padding"+this))||0;if(i){n-=parseFloat(b.css(o,"border"+this+"Width"))||0}if(p){n-=parseFloat(b.css(o,"margin"+this))||0}});return n}b.fn["inner"+g]=function(i){if(i===f){return m["inner"+g].call(this)}return this.each(function(){b(this).css(k,l(this,i)+"px")})};b.fn["outer"+g]=function(i,n){if(typeof i!=="number"){return m["outer"+g].call(this,i)}return this.each(function(){b(this).css(k,l(this,i,true,n)+"px")})}})}if(b("<a>").data("a-b","a").removeData("a-b").data("a-b")){b.fn.removeData=(function(g){return function(h){if(arguments.length){return g.call(this,b.camelCase(h))}else{return g.call(this)}}})(b.fn.removeData)}(function(){var g=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];b.ui.ie=g.length?true:false;b.ui.ie6=parseFloat(g[1],10)===6})();b.fn.extend({disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){g.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});b.extend(b.ui,{plugin:{add:function(h,j,l){var g,k=b.ui[h].prototype;for(g in l){k.plugins[g]=k.plugins[g]||[];k.plugins[g].push([j,l[g]])}},call:function(g,j,h){var k,l=g.plugins[j];if(!l||!g.element[0].parentNode||g.element[0].parentNode.nodeType===11){return}for(k=0;k<l.length;k++){if(g.options[l[k][0]]){l[k][1].apply(g.element,h)}}}},contains:b.contains,hasScroll:function(j,h){if(b(j).css("overflow")==="hidden"){return false}var g=(h&&h==="left")?"scrollLeft":"scrollTop",i=false;if(j[g]>0){return true}j[g]=1;i=(j[g]>0);j[g]=0;return i},isOverAxis:function(h,g,i){return(h>g)&&(h<(g+i))},isOver:function(l,h,k,j,g,i){return b.ui.isOverAxis(l,k,g)&&b.ui.isOverAxis(h,j,i)}})})(jQuery);(function(b,e){var a=0,d=Array.prototype.slice,c=b.cleanData;b.cleanData=function(f){for(var g=0,h;(h=f[g])!=null;g++){try{b(h).triggerHandler("remove")}catch(j){}}c(f)};b.widget=function(g,j,f){var m,l,i,k,h=g.split(".")[0];g=g.split(".")[1];m=h+"-"+g;if(!f){f=j;j=b.Widget}b.expr[":"][m.toLowerCase()]=function(n){return !!b.data(n,m)};b[h]=b[h]||{};l=b[h][g];i=b[h][g]=function(n,o){if(!this._createWidget){return new i(n,o)}if(arguments.length){this._createWidget(n,o)}};b.extend(i,l,{version:f.version,_proto:b.extend({},f),_childConstructors:[]});k=new j();k.options=b.widget.extend({},k.options);b.each(f,function(o,n){if(b.isFunction(n)){f[o]=(function(){var p=function(){return j.prototype[o].apply(this,arguments)},q=function(r){return j.prototype[o].apply(this,r)};return function(){var t=this._super,r=this._superApply,s;this._super=p;this._superApply=q;s=n.apply(this,arguments);this._super=t;this._superApply=r;return s}})()}});i.prototype=b.widget.extend(k,{widgetEventPrefix:l?k.widgetEventPrefix:g},f,{constructor:i,namespace:h,widgetName:g,widgetBaseClass:m,widgetFullName:m});if(l){b.each(l._childConstructors,function(o,p){var n=p.prototype;b.widget(n.namespace+"."+n.widgetName,i,p._proto)});delete l._childConstructors}else{j._childConstructors.push(i)}b.widget.bridge(g,i)};b.widget.extend=function(k){var g=d.call(arguments,1),j=0,f=g.length,h,i;for(;j<f;j++){for(h in g[j]){i=g[j][h];if(g[j].hasOwnProperty(h)&&i!==e){if(b.isPlainObject(i)){k[h]=b.isPlainObject(k[h])?b.widget.extend({},k[h],i):b.widget.extend({},i)}else{k[h]=i}}}}return k};b.widget.bridge=function(g,f){var h=f.prototype.widgetFullName||g;b.fn[g]=function(k){var i=typeof k==="string",j=d.call(arguments,1),l=this;k=!i&&j.length?b.widget.extend.apply(null,[k].concat(j)):k;if(i){this.each(function(){var n,m=b.data(this,h);if(!m){return b.error("cannot call methods on "+g+" prior to initialization; attempted to call method '"+k+"'")}if(!b.isFunction(m[k])||k.charAt(0)==="_"){return b.error("no such method '"+k+"' for "+g+" widget instance")}n=m[k].apply(m,j);if(n!==m&&n!==e){l=n&&n.jquery?l.pushStack(n.get()):n;return false}})}else{this.each(function(){var m=b.data(this,h);if(m){m.option(k||{})._init()}else{b.data(this,h,new f(k,this))}})}return l}};b.Widget=function(){};b.Widget._childConstructors=[];b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(f,g){g=b(g||this.defaultElement||this)[0];this.element=b(g);this.uuid=a++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=b.widget.extend({},this.options,this._getCreateOptions(),f);this.bindings=b();this.hoverable=b();this.focusable=b();if(g!==this){b.data(g,this.widgetName,this);b.data(g,this.widgetFullName,this);this._on(true,this.element,{remove:function(h){if(h.target===g){this.destroy()}}});this.document=b(g.style?g.ownerDocument:g.document||g);this.window=b(this.document[0].defaultView||this.document[0].parentWindow)}this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:b.noop,_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:b.noop,widget:function(){return this.element},option:function(j,k){var f=j,l,h,g;if(arguments.length===0){return b.widget.extend({},this.options)}if(typeof j==="string"){f={};l=j.split(".");j=l.shift();if(l.length){h=f[j]=b.widget.extend({},this.options[j]);for(g=0;g<l.length-1;g++){h[l[g]]=h[l[g]]||{};h=h[l[g]]}j=l.pop();if(k===e){return h[j]===e?null:h[j]}h[j]=k}else{if(k===e){return this.options[j]===e?null:this.options[j]}f[j]=k}}this._setOptions(f);return this},_setOptions:function(f){var g;for(g in f){this._setOption(g,f[g])}return this},_setOption:function(f,g){this.options[f]=g;if(f==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!g).attr("aria-disabled",g);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_on:function(i,h,g){var j,f=this;if(typeof i!=="boolean"){g=h;h=i;i=false}if(!g){g=h;h=this.element;j=this.widget()}else{h=j=b(h);this.bindings=this.bindings.add(h)}b.each(g,function(p,o){function m(){if(!i&&(f.options.disabled===true||b(this).hasClass("ui-state-disabled"))){return}return(typeof o==="string"?f[o]:o).apply(f,arguments)}if(typeof o!=="string"){m.guid=o.guid=o.guid||m.guid||b.guid++}var n=p.match(/^(\w+)\s*(.*)$/),l=n[1]+f.eventNamespace,k=n[2];if(k){j.delegate(k,l,m)}else{h.bind(l,m)}})},_off:function(g,f){f=(f||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;g.unbind(f).undelegate(f)},_delay:function(i,h){function g(){return(typeof i==="string"?f[i]:i).apply(f,arguments)}var f=this;return setTimeout(g,h||0)},_hoverable:function(f){this.hoverable=this.hoverable.add(f);this._on(f,{mouseenter:function(g){b(g.currentTarget).addClass("ui-state-hover")},mouseleave:function(g){b(g.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(f){this.focusable=this.focusable.add(f);this._on(f,{focusin:function(g){b(g.currentTarget).addClass("ui-state-focus")},focusout:function(g){b(g.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(f,g,h){var k,j,i=this.options[f];h=h||{};g=b.Event(g);g.type=(f===this.widgetEventPrefix?f:this.widgetEventPrefix+f).toLowerCase();g.target=this.element[0];j=g.originalEvent;if(j){for(k in j){if(!(k in g)){g[k]=j[k]}}}this.element.trigger(g,h);return !(b.isFunction(i)&&i.apply(this.element[0],[g].concat(h))===false||g.isDefaultPrevented())}};b.each({show:"fadeIn",hide:"fadeOut"},function(g,f){b.Widget.prototype["_"+g]=function(j,i,l){if(typeof i==="string"){i={effect:i}}var k,h=!i?g:i===true||typeof i==="number"?f:i.effect||f;i=i||{};if(typeof i==="number"){i={duration:i}}k=!b.isEmptyObject(i);i.complete=l;if(i.delay){j.delay(i.delay)}if(k&&b.effects&&(b.effects.effect[h]||b.uiBackCompat!==false&&b.effects[h])){j[g](i)}else{if(h!==g&&j[h]){j[h](i.duration,i.easing,l)}else{j.queue(function(m){b(this)[g]();if(l){l.call(j[0])}m()})}}}});if(b.uiBackCompat!==false){b.Widget.prototype._getCreateOptions=function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]}}})(jQuery);(function(d,e){var b=0,c={},a={};c.height=c.paddingTop=c.paddingBottom=c.borderTopWidth=c.borderBottomWidth="hide";a.height=a.paddingTop=a.paddingBottom=a.borderTopWidth=a.borderBottomWidth="show";d.widget("ui.accordion",{version:"1.9.2",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var g=this.accordionId="ui-accordion-"+(this.element.attr("id")||++b),f=this.options;this.prevShow=this.prevHide=d();this.element.addClass("ui-accordion ui-widget ui-helper-reset");this.headers=this.element.find(f.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");this._hoverable(this.headers);this._focusable(this.headers);this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide();if(!f.collapsible&&(f.active===false||f.active==null)){f.active=0}if(f.active<0){f.active+=this.headers.length}this.active=this._findActive(f.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top");this.active.next().addClass("ui-accordion-content-active").show();this._createIcons();this.refresh();this.element.attr("role","tablist");this.headers.attr("role","tab").each(function(l){var m=d(this),k=m.attr("id"),h=m.next(),j=h.attr("id");if(!k){k=g+"-header-"+l;m.attr("id",k)}if(!j){j=g+"-panel-"+l;h.attr("id",j)}m.attr("aria-controls",j);h.attr("aria-labelledby",k)}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)}else{this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"})}this._on(this.headers,{keydown:"_keydown"});this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._setupEvents(f.event)},_getCreateEventData:function(){return{header:this.active,content:!this.active.length?d():this.active.next()}},_createIcons:function(){var f=this.options.icons;if(f){d("<span>").addClass("ui-accordion-header-icon ui-icon "+f.header).prependTo(this.headers);this.active.children(".ui-accordion-header-icon").removeClass(f.header).addClass(f.activeHeader);this.headers.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var f;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")}});this._destroyIcons();f=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")}});if(this.options.heightStyle!=="content"){f.css("height","")}},_setOption:function(f,g){if(f==="active"){this._activate(g);return}if(f==="event"){if(this.options.event){this._off(this.headers,this.options.event)}this._setupEvents(g)}this._super(f,g);if(f==="collapsible"&&!g&&this.options.active===false){this._activate(0)}if(f==="icons"){this._destroyIcons();if(g){this._createIcons()}}if(f==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!g)}},_keydown:function(i){if(i.altKey||i.ctrlKey){return}var j=d.ui.keyCode,h=this.headers.length,f=this.headers.index(i.target),g=false;switch(i.keyCode){case j.RIGHT:case j.DOWN:g=this.headers[(f+1)%h];break;case j.LEFT:case j.UP:g=this.headers[(f-1+h)%h];break;case j.SPACE:case j.ENTER:this._eventHandler(i);break;case j.HOME:g=this.headers[0];break;case j.END:g=this.headers[h-1];break}if(g){d(i.target).attr("tabIndex",-1);d(g).attr("tabIndex",0);g.focus();i.preventDefault()}},_panelKeyDown:function(f){if(f.keyCode===d.ui.keyCode.UP&&f.ctrlKey){d(f.currentTarget).prev().focus()}},refresh:function(){var h,i,f=this.options.heightStyle,g=this.element.parent();if(f==="fill"){if(!d.support.minHeight){i=g.css("overflow");g.css("overflow","hidden")}h=g.height();this.element.siblings(":visible").each(function(){var k=d(this),j=k.css("position");if(j==="absolute"||j==="fixed"){return}h-=k.outerHeight(true)});if(i){g.css("overflow",i)}this.headers.each(function(){h-=d(this).outerHeight(true)});this.headers.next().each(function(){d(this).height(Math.max(0,h-d(this).innerHeight()+d(this).height()))}).css("overflow","auto")}else{if(f==="auto"){h=0;this.headers.next().each(function(){h=Math.max(h,d(this).css("height","").height())}).height(h)}}},_activate:function(f){var g=this._findActive(f)[0];if(g===this.active[0]){return}g=g||this.active[0];this._eventHandler({target:g,currentTarget:g,preventDefault:d.noop})},_findActive:function(f){return typeof f==="number"?this.headers.eq(f):d()},_setupEvents:function(g){var f={};if(!g){return}d.each(g.split(" "),function(i,h){f[h]="_eventHandler"});this._on(this.headers,f)},_eventHandler:function(f){var n=this.options,i=this.active,j=d(f.currentTarget),l=j[0]===i[0],g=l&&n.collapsible,h=g?d():j.next(),k=i.next(),m={oldHeader:i,oldPanel:k,newHeader:g?d():j,newPanel:h};f.preventDefault();if((l&&!n.collapsible)||(this._trigger("beforeActivate",f,m)===false)){return}n.active=g?false:this.headers.index(j);this.active=l?d():j;this._toggle(m);i.removeClass("ui-accordion-header-active ui-state-active");if(n.icons){i.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header)}if(!l){j.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");if(n.icons){j.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader)}j.next().addClass("ui-accordion-content-active")}},_toggle:function(h){var f=h.newPanel,g=this.prevShow.length?this.prevShow:h.oldPanel;this.prevShow.add(this.prevHide).stop(true,true);this.prevShow=f;this.prevHide=g;if(this.options.animate){this._animate(f,g,h)}else{g.hide();f.show();this._toggleComplete(h)}g.attr({"aria-expanded":"false","aria-hidden":"true"});g.prev().attr("aria-selected","false");if(f.length&&g.length){g.prev().attr("tabIndex",-1)}else{if(f.length){this.headers.filter(function(){return d(this).attr("tabIndex")===0}).attr("tabIndex",-1)}}f.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(f,n,j){var m,l,i,k=this,o=0,p=f.length&&(!n.length||(f.index()<n.index())),h=this.options.animate||{},q=p&&h.down||h,g=function(){k._toggleComplete(j)};if(typeof q==="number"){i=q}if(typeof q==="string"){l=q}l=l||q.easing||h.easing;i=i||q.duration||h.duration;if(!n.length){return f.animate(a,i,l,g)}if(!f.length){return n.animate(c,i,l,g)}m=f.show().outerHeight();n.animate(c,{duration:i,easing:l,step:function(r,s){s.now=Math.round(r)}});f.hide().animate(a,{duration:i,easing:l,complete:g,step:function(r,s){s.now=Math.round(r);if(s.prop!=="height"){o+=s.now}else{if(k.options.heightStyle!=="content"){s.now=Math.round(m-n.outerHeight()-o);o=0}}}})},_toggleComplete:function(g){var f=g.oldPanel;f.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");if(f.length){f.parent()[0].className=f.parent()[0].className}this._trigger("activate",null,g)}});if(d.uiBackCompat!==false){(function(g,f){g.extend(f.options,{navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}});var h=f._create;f._create=function(){if(this.options.navigation){var j=this,l=this.element.find(this.options.header),i=l.next(),k=l.add(i).find("a").filter(this.options.navigationFilter)[0];if(k){l.add(i).each(function(m){if(g.contains(this,k)){j.options.active=Math.floor(m/2);return false}})}}h.call(this)}}(jQuery,jQuery.ui.accordion.prototype));(function(h,f){h.extend(f.options,{heightStyle:null,autoHeight:true,clearStyle:false,fillSpace:false});var i=f._create,g=f._setOption;h.extend(f,{_create:function(){this.options.heightStyle=this.options.heightStyle||this._mergeHeightStyle();i.call(this)},_setOption:function(j){if(j==="autoHeight"||j==="clearStyle"||j==="fillSpace"){this.options.heightStyle=this._mergeHeightStyle()}g.apply(this,arguments)},_mergeHeightStyle:function(){var j=this.options;if(j.fillSpace){return"fill"}if(j.clearStyle){return"content"}if(j.autoHeight){return"auto"}}})}(jQuery,jQuery.ui.accordion.prototype));(function(h,g){h.extend(g.options.icons,{activeHeader:null,headerSelected:"ui-icon-triangle-1-s"});var f=g._createIcons;g._createIcons=function(){if(this.options.icons){this.options.icons.activeHeader=this.options.icons.activeHeader||this.options.icons.headerSelected}f.call(this)}}(jQuery,jQuery.ui.accordion.prototype));(function(h,g){g.activate=g._activate;var f=g._findActive;g._findActive=function(i){if(i===-1){i=false}if(i&&typeof i!=="number"){i=this.headers.index(this.headers.filter(i));if(i===-1){i=false}}return f.call(this,i)}}(jQuery,jQuery.ui.accordion.prototype));jQuery.ui.accordion.prototype.resize=jQuery.ui.accordion.prototype.refresh;(function(h,g){h.extend(g.options,{change:null,changestart:null});var f=g._trigger;g._trigger=function(j,k,l){var i=f.apply(this,arguments);if(!i){return false}if(j==="beforeActivate"){i=f.call(this,"changestart",k,{oldHeader:l.oldHeader,oldContent:l.oldPanel,newHeader:l.newHeader,newContent:l.newPanel})}else{if(j==="activate"){i=f.call(this,"change",k,{oldHeader:l.oldHeader,oldContent:l.oldPanel,newHeader:l.newHeader,newContent:l.newPanel})}}return i}}(jQuery,jQuery.ui.accordion.prototype));(function(g,f){g.extend(f.options,{animate:null,animated:"slide"});var h=f._create;f._create=function(){var i=this.options;if(i.animate===null){if(!i.animated){i.animate=false}else{if(i.animated==="slide"){i.animate=300}else{if(i.animated==="bounceslide"){i.animate={duration:200,down:{easing:"easeOutBounce",duration:1000}}}else{i.animate=i.animated}}}}h.call(this)}}(jQuery,jQuery.ui.accordion.prototype))}})(jQuery);