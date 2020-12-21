(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__1mv58",image:"ImageGallery_image__1AgXG",Loader:"ImageGallery_Loader__o_viL"}},11:function(e,a,t){e.exports={LoaderContainer:"Loader_LoaderContainer__4S_SO",searchQuery:"Loader_searchQuery__1uHID",hourglass:"Loader_hourglass__26UcI",flip:"Loader_flip__32YyY",fill:"Loader_fill__2z82R",glare:"Loader_glare__1wFFI"}},12:function(e,a,t){e.exports={error:"ImageError_error__UiY89",queryName:"ImageError_queryName__1s2Dc",ImageError:"ImageError_ImageError__HH8hI"}},14:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1XfAl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3J18y"}},15:function(e,a,t){e.exports={Overlay:"Modal_Overlay__HHKMb"}},25:function(e,a,t){e.exports={App:"App_App__H34LH"}},27:function(e,a,t){e.exports={Button:"Button_Button__39RVB"}},5:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__1dkT6",ImageGallery:"Searchbar_ImageGallery__1rENI",ImageGalleryItem:"Searchbar_ImageGalleryItem__20RDe",ImageGalleryItem_Image:"Searchbar_ImageGalleryItem_Image__10OIo"}},53:function(e,a,t){"use strict";t.r(a);var r=t(1),c=t(0),n=t.n(c),o=t(4),s=t.n(o),l=t(3),i=t(9),u=t(25),m=t.n(u),j=(t(33),t(5)),b=t.n(j);function d(e){var a=e.onFormSubmit,t=Object(c.useState)(""),n=Object(l.a)(t,2),o=n[0],s=n[1],u=Object(c.useState)(1),m=Object(l.a)(u,2),j=m[0],d=m[1];return Object(r.jsx)("header",{className:b.a.Searchbar,children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(a(o.toLowerCase(),j),s(""),d(1)):Object(i.b)("Type something to find.")},className:b.a.SearchForm,children:[Object(r.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(r.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(r.jsx)("input",{className:b.a.SearchFormInput,value:o,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){s(e.currentTarget.value)}})]})})}var g=t(16),h=t(10),_=t.n(h),O=t(26),p=t.n(O),y=t(6),I=t.n(y);function f(e,a){return p.a.get("https://pixabay.com/api/?key=18968535-a98ecca7bd1b0403c78b07ef3&q=".concat(e,"&page=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e}))}var x=f;f.propTypes={query:I.a.string,searchQuery:I.a.string};var v=t(14),S=t.n(v),N=function(e){return e.query.map((function(e){return Object(r.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(r.jsx)("img",{src:e.webformatURL,alt:e.largeImageURL,className:S.a.ImageGalleryItemImage})},e.id)}))},G=t(11),L=t.n(G);function C(e){var a=e.searchQuery;return Object(r.jsxs)("div",{className:L.a.LoaderContainer,children:[Object(r.jsxs)("p",{children:["\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435, \u0438\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443"," ",Object(r.jsx)("span",{className:L.a.searchQuery,children:a})]}),Object(r.jsx)("div",{className:L.a.hourglass})]})}var w=t(12),E=t.n(w),k=t.p+"static/media/jW.1da8fd95.gif";function Q(e){var a=e.error,t=e.searchQuery;return a?Object(r.jsx)("div",{children:a.message}):Object(r.jsxs)("div",{className:E.a.error,children:["\u041d\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443"," ",Object(r.jsx)("span",{className:E.a.queryName,children:t}),Object(r.jsx)("img",{src:k,alt:"",className:E.a.ImageError})]})}var q=t(15),F=t.n(q);function B(e){var a=e.onClose,t=e.children,n=function(e){"Escape"===e.code&&a()};return Object(c.useEffect)((function(){window.addEventListener("keydown",n)})),Object(r.jsx)("div",{className:F.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(r.jsx)("div",{className:F.a.Modal,children:t})})}var H=t(27),A=t.n(H);function R(e){var a=e.onClick;return Object(r.jsx)("button",{type:"button",onClick:a,className:A.a.Button,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435"})}var T="idle",M="pending",D="resolved",U="rejected",J=function(e){var a=e.searchQuery,t=e.queryCurrentPage,n=Object(c.useState)([]),o=Object(l.a)(n,2),s=o[0],i=o[1],u=Object(c.useState)(null),m=Object(l.a)(u,2),j=m[0],b=m[1],d=Object(c.useState)(T),h=Object(l.a)(d,2),O=h[0],p=h[1],y=Object(c.useState)(1),I=Object(l.a)(y,2),f=I[0],v=I[1],S=Object(c.useState)(!1),G=Object(l.a)(S,2),L=G[0],w=G[1],E=Object(c.useState)(""),k=Object(l.a)(E,2),q=k[0],F=k[1],H=Object(c.useRef)(!0),A=function(){x(a,f).then((function(e){var a=e.data.hits;a.length?(i([].concat(Object(g.a)(s),Object(g.a)(a))),p(D),v(f+1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),window.addEventListener("click",J)):(i(s),p(U))})).catch((function(e){b(e),p(U)}))},J=function(e){"IMG"===e.target.nodeName&&(F(e.target.alt),Y())},Y=function(){w(!L)};return Object(c.useEffect)((function(){H.current?H.current=!1:(p(M),i([]),v(t),A())}),[t,a]),O===T?Object(r.jsx)("div",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."}):O===M?Object(r.jsx)("div",{className:_.a.Loader,children:Object(r.jsx)(C,{searchQuery:a})}):O===U?Object(r.jsx)(Q,{error:j,searchQuery:a}):O===D?Object(r.jsxs)("ul",{className:_.a.ImageGallery,children:[Object(r.jsx)(N,{query:s}),L&&Object(r.jsx)(B,{onClose:Y,children:Object(r.jsx)("img",{src:q,alt:"",className:_.a.image})}),Object(r.jsx)(R,{onClick:A})]}):void 0},Y=function(){var e=Object(c.useState)(""),a=Object(l.a)(e,2),t=a[0],n=a[1],o=Object(c.useState)(1),s=Object(l.a)(o,2),u=s[0],j=s[1];return Object(r.jsxs)("div",{className:m.a.App,children:[Object(r.jsx)(d,{onFormSubmit:function(e){n(e),j(1)}}),Object(r.jsx)(J,{searchQuery:t,queryCurrentPage:u}),Object(r.jsx)(i.a,{autoClose:3e3,position:"top-center"})]})};s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(Y,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.5c6f7a87.chunk.js.map