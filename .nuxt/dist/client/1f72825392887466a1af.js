(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{201:function(t,e,n){var content=n(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("455416a7",content,!0,{sourceMap:!1})},202:function(t,e,n){var content=n(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("7fe2a488",content,!0,{sourceMap:!1})},204:function(t,e,n){"use strict";var o=n(201);n.n(o).a},205:function(t,e,n){(e=n(20)(!1)).push([t.i,".post-preview[data-v-0bb82e00]{overflow:hidden;border:1px solid hsla(0,0%,66.7%,.45);border-radius:6px;-webkit-box-shadow:0 2px 2px hsla(0,0%,66.7%,.45);box-shadow:0 2px 2px hsla(0,0%,66.7%,.45);background-color:#fff;-webkit-box-flex:1;-ms-flex:1 0 90%;flex:1 0 90%;margin-left:5%;margin-right:5%;margin-bottom:15px}a[data-v-0bb82e00]{text-decoration:none;color:#052234}a:active .post-content[data-v-0bb82e00],a:hover .post-content[data-v-0bb82e00]{background:rgba(16,109,168,.1)}a:focus .post-content[data-v-0bb82e00]{-webkit-box-shadow:0 -100px 50px 30px rgba(54,37,250,.4);box-shadow:0 -100px 50px 30px rgba(54,37,250,.4)}.post-thumbnail[data-v-0bb82e00]{width:100%;height:150px;margin:0;background-position:50%;background-size:cover}.post-title[data-v-0bb82e00]{margin-bottom:10px}.post-text[data-v-0bb82e00]{margin-top:0}.post-content[data-v-0bb82e00]{padding:10px;text-align:center;-webkit-transition:all .4s ease;transition:all .4s ease}@media (min-width:768px){.post-preview[data-v-0bb82e00]{-webkit-box-flex:0;-ms-flex:0 0 45%;flex:0 0 45%;margin-left:10px;margin-right:10px}}",""]),t.exports=e},206:function(t,e,n){"use strict";var o=n(202);n.n(o).a},207:function(t,e,n){(e=n(20)(!1)).push([t.i,".post-list[data-v-26ab6698]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:20px}",""]),t.exports=e},208:function(t,e,n){"use strict";var o={name:"PostPreview",props:{id:{type:String,required:!0},thumbnail:{type:String,required:!0},title:{type:String,required:!0},content:{type:String,required:!0},isAdmin:{type:Boolean,default:!0}},computed:{ellipseContent:function(){return this.content.length<65?this.content:this.content.slice(0,60)+"..."},postLink:function(){return this.isAdmin?"/admin/"+this.title:"/posts/"+this.title}}},r=(n(204),n(5)),l={components:{PostPreview:Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"post-preview"},[n("nuxt-link",{attrs:{to:t.postLink}},[n("figure",{staticClass:"post-thumbnail",style:{"background-image":"url("+t.thumbnail+")"}}),n("div",{staticClass:"post-content"},[n("h2",{staticClass:"post-title"},[t._v(t._s(t.title))]),n("p",{staticClass:"post-text"},[t._v(t._s(t.ellipseContent))])])])],1)}),[],!1,null,"0bb82e00",null).exports},props:{isAdmin:{type:Boolean,default:!1},posts:{type:Array,required:!0}}},c=(n(206),Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"post-list"},t._l(t.posts,(function(e){return n("post-preview",{key:e.id,attrs:{id:e.id,isAdmin:t.isAdmin,title:e.title,thumbnail:e.thumbnail,content:e.content}})})),1)}),[],!1,null,"26ab6698",null));e.a=c.exports},220:function(t,e,n){var content=n(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("09bce340",content,!0,{sourceMap:!1})},238:function(t,e,n){"use strict";var o=n(220);n.n(o).a},239:function(t,e,n){(e=n(20)(!1)).push([t.i,"a[data-v-91397b24]{text-decoration:none;color:#052234;-webkit-transition:all .4s ease;transition:all .4s ease}a:active .post-content[data-v-91397b24],a:hover .post-content[data-v-91397b24]{background-color:rgba(14,94,145,.26)}@media (min-width:768px){.intro h1[data-v-91397b24]{font-size:2rem}}",""]),t.exports=e},240:function(t,e,n){"use strict";n.r(e);var o={head:{title:"홈 - 바나나케찹의 들쑥날쑥 개발일지",meta:[{hid:"description",name:"description",content:"블로그 메인화면 - 블로그 글 목록입니다."}]},components:{postList:n(208).a},computed:{loadedPosts:function(){return this.$store.getters.loadedPosts}},created:function(){this.$store.dispatch("setPosts",this.loadedPosts)}},r=(n(238),n(5)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-home"},[e("post-list",{attrs:{posts:this.loadedPosts}})],1)}),[],!1,null,"91397b24",null);e.default=component.exports}}]);