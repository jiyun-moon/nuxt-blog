(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{217:function(t,e,o){"use strict";var n=o(7),r=o(124)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),n(n.P+n.F*c,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o(70)("find")},219:function(t,e,o){var content=o(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("48a859a2",content,!0,{sourceMap:!1})},236:function(t,e,o){"use strict";var n=o(219);o.n(n).a},237:function(t,e,o){(e=o(20)(!1)).push([t.i,".page-single-post[data-v-ce3f4728]{padding:30px;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.post[data-v-ce3f4728]{width:100%}.post-title[data-v-ce3f4728]{margin:0}.post-info[data-v-ce3f4728]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:inherit;box-sizing:inherit;border-bottom:1px solid #ccc;padding:10px}.post-content[data-v-ce3f4728]{font-size:15px;font-weight:400;white-space:pre-line;text-align:left}.post-image[data-v-ce3f4728]{margin-top:20px;width:100%;height:auto}.post-feedback[data-v-ce3f4728]{width:60%;margin-top:30px;margin-right:auto;margin-left:auto;border-top:1px solid rgba(0,0,0,.1);padding-top:15px}.post-author[data-v-ce3f4728],.post-data[data-v-ce3f4728]{margin:0 10px;color:#9a9a9a}.post-feedback a[data-v-ce3f4728]{padding-left:5px;padding-right:5px;color:#46b784;text-decoration:none;-webkit-transition:color .4s ease;transition:color .4s ease}.post-feedback a[data-v-ce3f4728]:active,.post-feedback a[data-v-ce3f4728]:hover{color:#2a6d4f}@media (min-width:768px){.post[data-v-ce3f4728]{width:600px;margin:auto}.post-info[data-v-ce3f4728]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}",""]),t.exports=e},241:function(t,e,o){"use strict";o.r(e);o(217);var n={head:function(){var t=this.loadedPost;return{title:t.title,meta:[{hid:"description",name:"description",content:"".concat(t.title," - 포스트 보기")}]}},computed:{loadedPost:function(){var t=this.$route.params.id;return this.$store.getters.loadedPosts.find((function(e){return e.title===t}))}}},r=(o(236),o(5)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-single-post"},[o("section",{staticClass:"post"},[o("h1",{staticClass:"post-title"},[t._v(t._s(t.loadedPost.title))]),o("div",{staticClass:"post-info"},[o("span",{staticClass:"post-data"},[t._v(t._s(t.loadedPost.author))]),o("span",{staticClass:"post-author"},[t._v(t._s(t.loadedPost.updatedDate))])]),o("img",{staticClass:"post-image",attrs:{src:t.loadedPost.thumbnail,alt:"",width:"600"}}),o("p",{staticClass:"post-content"},[t._v(t._s(t.loadedPost.content))])]),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"post-feedback"},[e("p",[this._v("해당 포스트에 대해 궁금한 점이 있으면"),e("a",{attrs:{href:"mailto:duwkeksldpf@naver.com"}},[this._v("duwkeksldpf@naver.com")]),this._v("로 문의주세요.")])])}],!1,null,"ce3f4728",null);e.default=component.exports}}]);