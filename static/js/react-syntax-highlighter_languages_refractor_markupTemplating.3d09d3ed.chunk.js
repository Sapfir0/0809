(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[81],{40:function(e,t,n){"use strict";function a(e){!function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,o,r){if(n.language===a){var i=n.tokenStack=[];n.code=n.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,c=i.length;-1!==n.code.indexOf(o=t(a,c));)++c;return i[c]=e,o})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language===a&&n.tokenStack){n.grammar=e.languages[a];var o=0,r=Object.keys(n.tokenStack);!function i(c){for(var p=0;p<c.length&&!(o>=r.length);p++){var s=c[p];if("string"===typeof s||s.content&&"string"===typeof s.content){var u=r[o],l=n.tokenStack[u],g="string"===typeof s?s:s.content,f=t(a,u),k=g.indexOf(f);if(k>-1){++o;var m=g.substring(0,k),h=new e.Token(a,e.tokenize(l,n.grammar),"language-"+a,l),d=g.substring(k+f.length),y=[];m&&y.push.apply(y,i([m])),y.push(h),d&&y.push.apply(y,i([d])),"string"===typeof s?c.splice.apply(c,[p,1].concat(y)):s.content=y}}else s.content&&i(s.content)}return c}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.3d09d3ed.chunk.js.map