(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[506],{2085:function(e,t,n){"use strict";n.r(t),n.d(t,"itemVersionPropertyName",function(){return I}),n.d(t,"ItemOpenApprovalDialogAction",function(){return O}),n.d(t,"OpenApprovalDialogAction",function(){return w});var a=n(0),i=n("react-lib"),r=n(44),o=n(16),s=n(56),c=n(26),d=n(22),l=n(188),u=n(157),f=n(37),p=n(54),m=n(266),_=n(1),h=n(36),b=n(214),g=n(1087),v=n(465),y=n(153),S=n(1267),D=n(210),I="owshiddenversion",x=Object(u.e)(function(){return Object(a.__awaiter)(void 0,void 0,void 0,function(){return Object(a.__generator)(this,function(e){switch(e.label){case 0:return[4,Promise.all([n.e("ondemand.resx-ondemand"),n.e(507)]).then(n.bind(null,4243))];case 1:return[2,e.sent().NewApprovalRequestDialog]}})})}),C=Object(u.e)(function(){return Object(a.__awaiter)(void 0,void 0,void 0,function(){return Object(a.__generator)(this,function(e){switch(e.label){case 0:return[4,Promise.all([n.e("ondemand.resx-ondemand"),n.e(507)]).then(n.bind(null,4243))];case 1:return[2,e.sent().ApprovalDetailsDialog]}})})}),O=Object(s.t)(function(e,t){if(!D.n.isFeatureEnabled(v.n))return null;var o=e.dispatch,s=Object(r.e)(e);if(!s)return null;var u=t.itemKeys,O=t.statusAllowed;if(0===u.length)return null;if(u.length>1)return null;var w=u[0];if(!e.demandItemFacet(g.t,w))return null;var E=Object(p.e)(e,w);if(!E)return null;var A=Object(m.e)(e,w),L=null==A?void 0:A.id,k=e.demandItemFacet(_.Ye,w),M=e.demandItemFacet(_.Bt,w),P=M?M[I]:void 0,T=e.demandItemFacet(_.kn,w),U=e.demandItemFacet(g.e,w),F=e.demandItemFacet(h.O,b.e),H=F&&F.language||window.navigator.language,R=e.demandItemFacet(_.St,w),N=f.e.hasItemPermission({permissions:R},f.e.editListItems);if(!L||!k||!P)return null;if(void 0!==U&&O&&-1===O.indexOf(U))return null;var B=function(){return Object(a.__awaiter)(void 0,void 0,void 0,function(){var e,t;return Object(a.__generator)(this,function(a){switch(a.label){case 0:return[4,Promise.resolve().then(n.bind(null,1468))];case 1:return e=a.sent().refreshItemsInSet,[4,o(e({items:(t={},t[s]=Object(y.e)(u,function(){return{}}),t)}))];case 2:return a.sent(),[2]}})})};if(U===S.e.NotSubmitted){var j=N,V=Object(d.o)(function(e){var t=e.resolve,n=e.reject;return i.createElement(x,{onSubmit:function(){return Object(a.__awaiter)(void 0,void 0,void 0,function(){return Object(a.__generator)(this,function(e){switch(e.label){case 0:return[4,B()];case 1:return e.sent(),t(),[2]}})})},onDismiss:function(){n(new l.e)},pageContext:E,listId:L,itemId:k,url:"",version:P,defaultTitle:T})});return i.createElement(c.e,{isAvailable:j,onExecute:V})}return V=Object(d.o)(function(e){var t=e.resolve,n=e.reject;return i.createElement(C,{onSubmit:function(){return Object(a.__awaiter)(void 0,void 0,void 0,function(){return Object(a.__generator)(this,function(e){switch(e.label){case 0:return[4,B()];case 1:return e.sent(),t(),[2]}})})},onDismiss:function(){n(new l.e)},pageContext:E,listId:L,itemId:k,url:"",version:P,language:H,resubmitTitle:T})}),i.createElement(c.e,{isAvailable:!0,onExecute:V})}),w=Object(o.r)()(O)},2086:function(e,t,n){"use strict";n.r(t),n.d(t,"ConfigureApprovalsAction",function(){return g});var a=n(0),i=n("react-lib"),r=n(16),o=n(56),s=n(26),c=n(22),d=n(188),l=n(157),u=n(54),f=n(266),p=n(1087),m=n(210),_=n(465),h=Object(l.e)(function(){return Object(a.__awaiter)(void 0,void 0,void 0,function(){return Object(a.__generator)(this,function(e){switch(e.label){case 0:return[4,Promise.all([n.e("ondemand.resx-ondemand"),n.e(507)]).then(n.bind(null,4243))];case 1:return[2,e.sent().ConfigureApprovalsDialog]}})})}),b=Object(o.t)(function(e,t){if(!m.n.isFeatureEnabled(_.n))return null;var n=t.itemKey,a=Object(u.e)(e,n);if(!a)return null;var r=Object(f.e)(e,n),o=null==r?void 0:r.id;if(!o)return null;var l=!!e.demandItemFacet(p.t,n),b=Object(c.o)(function(e){e.resolve;var t=e.reject;return i.createElement(h,{onDismiss:function(){t(new d.e)},pageContext:a,listId:o,isApprovalsEnabled:l})});return i.createElement(s.e,{isAvailable:!0,onExecute:b})}),g=Object(r.n)()(b)}}]);