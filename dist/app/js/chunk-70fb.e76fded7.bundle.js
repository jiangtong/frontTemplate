(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-70fb"],{yF3u:function(n,t,e){"use strict";e.r(t);var r=e("7sDq"),a=e.n(r),i=e("9RyN"),u=e.n(i),o=e("hp2J"),s=e.n(o),c=e("qcWJ"),l=e.n(c),f=e("kOQm"),h=e.n(f),p=e("lrLM"),d=e.n(p),v=e("Q+0f"),y=e.n(v),k=e("W897"),m=e.n(k),w=e("6/rC"),g=e.n(w),D=e("ys4u"),J=function(){function n(t){s()(this,n),this.url=t,this.pageSize=10,this.pageNo=1}return l()(n,[{key:"reloadData",value:function(n){return D.a[this.url](g()({pageNum:this.pageNo,pageSize:this.pageSize},n))}},{key:"editData",value:function(n){}},{key:"removeData",value:function(n){}}]),n}();e.d(t,"default",function(){return b});var b=function(n){function t(n){return s()(this,t),h()(this,d()(t).call(this,n))}return y()(t,n),l()(t,[{key:"componentDidMount",value:function(){var n=u()(a.a.mark(function n(){var t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.listModal=new J("majorList"),n.next=3,this.listModal.reloadData();case 3:t=n.sent,console.log(t);case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return m.a.createElement("div",null)}}]),t}(k.Component)},ys4u:function(n,t,e){"use strict";e.d(t,"a",function(){return p});var r=e("hp2J"),a=e.n(r),i=e("qcWJ"),u=e.n(i),o=e("kOQm"),s=e.n(o),c=e("lrLM"),l=e.n(c),f=e("Q+0f"),h=e.n(f),p=new(function(n){function t(n){return a()(this,t),s()(this,l()(t).call(this,n))}return h()(t,n),u()(t,[{key:"teacherType4College",value:function(n){return this.post("/teacher/baseInfo/teacherType4College",n)}},{key:"majorList",value:function(n){return this.post("/major/admin/baseInfo/majorList",n)}}]),t}(e("pgwy").a))}}]);