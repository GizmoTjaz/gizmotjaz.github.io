(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3,4],{196:function(t,e,o){var content=o(200);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(71).default)("350c2ae1",content,!0,{sourceMap:!1})},197:function(t,e,o){var content=o(204);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(71).default)("1124f188",content,!0,{sourceMap:!1})},198:function(t,e,o){"use strict";o.r(e);var r={name:"ProjectControl",props:{icon:{type:String,required:!0},location:{type:String,required:!0}}},c=(o(199),o(32)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project-control"},[o("a",{attrs:{href:t.location}},[o("ion-icon",{attrs:{name:t.icon}})],1)])}),[],!1,null,"580e788f",null);e.default=component.exports},199:function(t,e,o){"use strict";o(196)},200:function(t,e,o){var r=o(70)(!1);r.push([t.i,".project-control[data-v-580e788f]{display:inline-flex;flex-direction:row;align-items:center}ion-icon[data-v-580e788f]{font-size:25px;cursor:pointer}@media screen and (max-width:1050px){ion-icon[data-v-580e788f]{font-size:15px}}",""]),t.exports=r},201:function(t,e,o){var content=o(207);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(71).default)("1f081b11",content,!0,{sourceMap:!1})},202:function(t){t.exports=JSON.parse('{"js":"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png","ts":"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png","react-native":"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react-native/react-native.png","html":"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png","css":"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png","react":"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png","electron":"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/electron/electron.png","jquery":"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/jquery/jquery.png","vue":"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"}')},203:function(t,e,o){"use strict";o(197)},204:function(t,e,o){var r=o(70)(!1);r.push([t.i,"img[data-v-3f283add]{width:25px;height:25px;border-radius:5px;margin-left:3px}.electron[data-v-3f283add]{background-color:#eee}@media screen and (max-width:1050px){img[data-v-3f283add]{width:15px;height:15px;border-radius:2px}}",""]),t.exports=r},205:function(t,e,o){"use strict";o.r(e);var r=o(202),c={name:"ProjectLanguage",props:{language:{type:String,required:!0}},computed:{languageIcon:function(){return r[this.language]}}},n=(o(203),o(32)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{class:t.language,attrs:{src:t.languageIcon,alt:t.language,draggable:"false"}})}),[],!1,null,"3f283add",null);e.default=component.exports},206:function(t,e,o){"use strict";o(201)},207:function(t,e,o){var r=o(70)(!1);r.push([t.i,".project-card[data-v-a2b3cdf2]{position:relative;background-color:#222;background:linear-gradient(180deg,#222 80%,#000 200%);background-repeat:no-repeat;border-radius:.5rem;margin-bottom:.5rem}.project-details[data-v-a2b3cdf2]{padding-left:15px}.project-details *[data-v-a2b3cdf2]{text-align:left}.project-info[data-v-a2b3cdf2]{margin-top:15px;margin-bottom:5px;display:flex;flex-direction:row;justify-content:flex-start;align-content:center;align-items:center}.project-title[data-v-a2b3cdf2]{margin-top:0;margin-bottom:0}.project-languages-container[data-v-a2b3cdf2]{position:absolute;right:0;top:0;padding-right:10px;padding-top:15px}.project-languages[data-v-a2b3cdf2]{display:inline-flex;flex-direction:row}.project-controls[data-v-a2b3cdf2]{position:absolute;right:0;bottom:0;padding-right:10px;padding-bottom:10px}.project-logo[data-v-a2b3cdf2]{width:auto;height:29px;margin-right:5px}@media screen and (max-width:1050px){.project-title[data-v-a2b3cdf2]{font-size:15px}.project-logo[data-v-a2b3cdf2]{height:15px}}",""]),t.exports=r},208:function(t,e,o){"use strict";o.r(e);var r={name:"ProjectCard",components:{ProjectControl:o(198).default},props:{project:{type:Object,required:!0}}},c=(o(206),o(32)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project-card"},[o("div",{staticClass:"project-details"},[o("div",{staticClass:"project-info"},[t.project.logo?o("img",{staticClass:"project-logo",attrs:{src:t.project.logo,alt:"Project logo"}}):t._e(),t._v(" "),o("h2",{staticClass:"project-title"},[t._v(t._s(t.project.name))])]),t._v(" "),o("p",[t._v(t._s(t.project.description))])]),t._v(" "),o("div",{staticClass:"project-languages-container"},t._l(t.project.languages,(function(t,e){return o("div",{key:e,staticClass:"project-languages"},[o("ProjectLanguage",{attrs:{language:t}})],1)})),0),t._v(" "),o("div",{staticClass:"project-controls"},[o("ProjectControl",{attrs:{icon:"open-outline",location:t.project.url}})],1)])}),[],!1,null,"a2b3cdf2",null);e.default=component.exports;installComponents(component,{ProjectLanguage:o(205).default,ProjectControl:o(198).default})}}]);