webpackJsonp([13],{slOM:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("Xxa5"),a=r.n(s),n=r("exGp"),o=r.n(n),i=r("Vmrw"),l=r("gyMJ"),c=r("L/hj"),u={data:function(){return{self:this,gradient:"to top right, #1A237E, #BBDEFB",form:{admin_name:null,password:null},valid:!1,fixed:!1}},components:{Footer:i.a},methods:{submit:function(){var e=this;return o()(a.a.mark(function t(){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=9;break}return e.$refs.loading.open(),t.next=4,l.a.base.submit(e.form);case 4:return r=t.sent,t.next=7,c.a.sleep();case 7:e.$refs.loading.close(),1===r.code?(e.$refs.message.open("申请成功","success"),c.a.toRouter("home",e)):e.$refs.message.open(r.error,"error");case 9:case"end":return t.stop()}},t,e)}))()}}},f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-jumbotron",{attrs:{gradient:e.gradient,height:"100%"}},[r("v-container",{attrs:{fluid:"fluid","fill-height":"fill-height"}},[r("v-layout",{attrs:{"align-center":"align-center","justify-center":"justify-center"}},[r("v-flex",{attrs:{xs12:"xs12",sm8:"sm8",md4:"md4"}},[r("div",{staticClass:"pa-3 text-xs-center"},[r("div",{staticClass:"display-3 py-4",staticStyle:{color:"#1565C0"}})]),r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"dark",color:"primary"}},[r("v-toolbar-title",[e._v("提交申请")]),r("v-spacer")],1),r("v-card-text",[r("v-form",{ref:"form"},[r("v-text-field",{attrs:{"prepend-icon":"person",rules:[function(e){return!!e||"Username is required"}],type:"text"},model:{value:e.form.user_name,callback:function(t){e.$set(e.form,"user_name",t)},expression:"form.user_name"}}),r("v-text-field",{attrs:{"prepend-icon":"lock",rules:[function(e){return!!e||"class is required"}],type:"text"},model:{value:e.form.class,callback:function(t){e.$set(e.form,"class",t)},expression:"form.class"}}),r("v-text-field",{attrs:{"prepend-icon":"lock",rules:[function(e){return!!e||"detail is required"}],type:"text"},model:{value:e.form.datail,callback:function(t){e.$set(e.form,"datail",t)},expression:"form.datail"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary"},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1)],1),r("Footer",{attrs:{fixed:e.fixed}}),r("MyLoading",{ref:"loading"}),r("MyMessage",{ref:"message"})],1)},staticRenderFns:[]},d=r("VU/8")(u,f,!1,null,null,null);t.default=d.exports}});
//# sourceMappingURL=13.05d2bf5754f52c66683b.js.map