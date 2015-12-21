/*!
 * The MIT License
 *
 * Copyright (c) 2012 James Allardice
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 *  // Modifying file to force compilation
 */
(function(d){function e(h,g,f){if(h.addEventListener){return h.addEventListener(g,f,false)}if(h.attachEvent){return h.attachEvent("on"+g,f)}}function c(g,j){var h,f;for(h=0,f=g.length;h<f;h++){if(g[h]===j){return true}}return false}function b(h,g){var f;if(h.createTextRange){f=h.createTextRange();f.move("character",g);f.select()}else{if(h.selectionStart){h.focus();h.setSelectionRange(g,g)}}}function a(g,f){try{g.type=f;return true}catch(h){return false}}d.Placeholders={Utils:{addEventListener:e,inArray:c,moveCaret:b,changeType:a}}}(this));(function(c){var L=["text","search","url","tel","email","password","number","textarea"],t=[27,33,34,35,36,37,38,39,40,8,46],s="#ccc",I="placeholdersjs",y=new RegExp("\\b"+I+"\\b"),z,n,B="data-placeholder-value",N="data-placeholder-active",k="data-placeholder-type",A="data-placeholder-submit",o="data-placeholder-bound",h="data-placeholder-focus",P="data-placeholder-live",l=document.createElement("input"),r=document.getElementsByTagName("head")[0],D=document.documentElement,x=c.Placeholders,O=x.Utils,E,a,j,m,g,F,G,J,Q,u,R;function q(S){var i;if(S.value===S.getAttribute(B)&&S.getAttribute(N)==="true"){S.setAttribute(N,"false");S.value="";S.className=S.className.replace(y,"");i=S.getAttribute(k);if(i){S.type=i}return true}return false}function M(S){var i,T=S.getAttribute(B);if(S.value===""&&T){S.setAttribute(N,"true");S.value=T;S.className+=" "+I;i=S.getAttribute(k);if(i){S.type="text"}else{if(S.type==="password"){if(O.changeType(S,"text")){S.setAttribute(k,"password")}}}return true}return false}function H(W,Y){var U,X,V,S,T;if(W&&W.getAttribute(B)){Y(W)}else{U=W?W.getElementsByTagName("input"):z;X=W?W.getElementsByTagName("textarea"):n;for(T=0,S=U.length+X.length;T<S;T++){V=T<U.length?U[T]:X[T-U.length];Y(V)}}}function C(i){H(i,q)}function f(i){H(i,M)}function b(i){return function(){if(E&&i.value===i.getAttribute(B)&&i.getAttribute(N)==="true"){O.moveCaret(i,0)}else{q(i)}}}function w(i){return function(){M(i)}}function e(i){return function(S){j=i.value;if(i.getAttribute(N)==="true"){return !(j===i.getAttribute(B)&&O.inArray(t,S.keyCode))}}}function K(i){return function(){var S;if(i.getAttribute(N)==="true"&&i.value!==j){i.className=i.className.replace(y,"");i.value=i.value.replace(i.getAttribute(B),"");i.setAttribute(N,false);S=i.getAttribute(k);if(S){i.type=S}}if(i.value===""){i.blur();O.moveCaret(i,0)}}}function d(i){return function(){if(i===document.activeElement&&i.value===i.getAttribute(B)&&i.getAttribute(N)==="true"){O.moveCaret(i,0)}}}function p(i){return function(){C(i)}}function v(i){if(i.form){J=i.form;if(!J.getAttribute(A)){O.addEventListener(J,"submit",p(J));J.setAttribute(A,"true")}}O.addEventListener(i,"focus",b(i));O.addEventListener(i,"blur",w(i));if(E){O.addEventListener(i,"keydown",e(i));O.addEventListener(i,"keyup",K(i));O.addEventListener(i,"click",d(i))}i.setAttribute(o,"true");i.setAttribute(B,F);M(i)}if(l.placeholder===void 0){z=document.getElementsByTagName("input");n=document.getElementsByTagName("textarea");E=D.getAttribute(h)==="false";a=D.getAttribute(P)!=="false";m=document.createElement("style");m.type="text/css";g=document.createTextNode("."+I+" { color:"+s+"; }");if(m.styleSheet){m.styleSheet.cssText=g.nodeValue}else{m.appendChild(g)}r.insertBefore(m,r.firstChild);for(R=0,u=z.length+n.length;R<u;R++){Q=R<z.length?z[R]:n[R-z.length];F=Q.getAttribute("placeholder");if(F&&O.inArray(L,Q.type)){v(Q)}}G=setInterval(function(){for(R=0,u=z.length+n.length;R<u;R++){Q=R<z.length?z[R]:n[R-z.length];F=Q.getAttribute("placeholder");if(F&&O.inArray(L,Q.type)){if(!Q.getAttribute(o)){v(Q)}if(F!==Q.getAttribute(B)||(Q.type==="password"&&!Q.getAttribute(k))){if(Q.type==="password"&&!Q.getAttribute(k)&&O.changeType(Q,"text")){Q.setAttribute(k,"password")}if(Q.value===Q.getAttribute(B)){Q.value=F}Q.setAttribute(B,F)}}}if(!a){clearInterval(G)}},100)}x.disable=C;x.enable=f}(this));function deselect(){var a=$(document.activeElement);if(!a.is("input")){document.selection.empty();a.focus()}}function pwblurHandler(){var b=$(this),a=b.val();if(b.attr("datapl")===undefined){b.attr("datapl",b.attr("placeholder"))}if(a===""||a===b.attr("placeholder")){$("<input type='text' class='dummy-input placeholdersjs'/>").attr({name:b.attr("name"),value:a,tabindex:b.attr("tabindex"),placeholder:b.attr("datapl")}).insertBefore(b);b.remove()}else{deselect()}}function pwFocusHandler(){this.select()}function focusHandler(){var b=$(this),a=b.attr("placeholder");$("<input type='password' />").attr({name:b.attr("name"),value:"",tabindex:b.attr("tabindex"),datapl:b.attr("placeholder")}).insertBefore(b).focus();b.remove()}var loginTabCallback=function(){if($.browser.msie&&($.browser.version<9)){$("[placeholder]").filter('[type="password"]').each(pwblurHandler)}};$(document).ready(function(){if($.browser.msie){if($.browser.version<10){$(document).on("click",".reset",function(){Placeholders.enable($(this).closest("form")[0])});$(document).on("focus",'[type="password"]',pwFocusHandler);if($.browser.version>8){$(document).on("blur",'[type="password"]',deselect)}}if($.browser.version<9){$(document).on("blur",'[type="password"]',pwblurHandler);$(document).on("focus",".dummy-input",focusHandler)}}});