(this["webpackJsonpmovie-pedia"]=this["webpackJsonpmovie-pedia"]||[]).push([[0],{143:function(e,t,a){},154:function(e,t,a){},192:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},218:function(e,t,a){},220:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);a(143),a(144),a(145),a(146);var n,r,c=a(1),s=a(27),i=a.n(s),o=a(17),l=a(11),d=a(14),u=a(9),j=(a(154),a(40)),b="SET_STATE_VARIABLE",p="GET_CURRENT_SEARCH_DATA",h="SET_CURRENT_SEARCH_DATA",m="GET_CURRENT_MOVIE_DATA",O="SET_CURRENT_MOVIE_DATA",x="GET_MOVIES",g="SET_MOVIES",f="AUTHORISE_USER",v="LOGOUT",_="SET_CURRENT_USER_DATA",N="UPDATE_USER",w="DELETE_USER",y=function(){return{type:v}},S=function(e){return{type:_,data:e}},k=function(e,t){return{type:b,svType:e,val:t}},E=a(2),L=Object(o.b)((function(e){return{isLoggedIn:!!e.auth.token,user:e.auth}}),(function(e){return{signout:function(){return e(y())},setStateVar:function(t,a){return e(k(t,a))}}}))((function(e){var t=e.handleSearch,a=e.isLoggedIn,n=e.user,r=e.signout,s=e.setStateVar,i=Object(c.useState)(!1),o=Object(u.a)(i,2),d=o[0],b=o[1],p=Object(c.useState)(!1),h=Object(u.a)(p,2),m=h[0],O=h[1];return Object(E.jsxs)("div",{className:"navbar",children:[Object(E.jsx)("div",{className:"mobile_menu ".concat(m&&"animate"),children:m&&(a?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("span",{children:["Hi, ",n.first_name," ",n.last_name]}),Object(E.jsx)("span",{className:"divider"}),Object(E.jsx)("span",{children:Object(E.jsx)(l.b,{to:"/profile",onClick:function(){O(!1)},children:"My Profile"})}),Object(E.jsx)("span",{children:Object(E.jsx)(l.b,{to:"/watchlist",onClick:function(){O(!1)},children:"My Watchlist"})}),Object(E.jsx)("span",{className:"divider"}),Object(E.jsx)("span",{onClick:function(e){e.preventDefault(),s("authSuccess",!1),O(!1),r()},children:"Signout"})]}):Object(E.jsx)("span",{children:Object(E.jsx)(l.b,{to:"/auth",className:"menu_signin",onClick:function(){O(!1)},children:"Signin"})}))}),Object(E.jsxs)("div",{className:"nav_left",children:[Object(E.jsx)(l.b,{to:"/",children:Object(E.jsx)("img",{src:"https://pngimage.net/wp-content/uploads/2018/06/mp-png-5.png"})}),Object(E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 hamburger",fill:"none",viewBox:"0 0 24 24",stroke:"black",onClick:function(e){e.preventDefault(),O(!m)},children:Object(E.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})]}),Object(E.jsx)("div",{className:"nav_center",children:Object(E.jsx)("input",{type:"text",placeholder:"Search movies...",className:"input",id:"searchBar",onChange:t})}),Object(E.jsx)("div",{className:"nav_right",children:a?Object(E.jsxs)("div",{className:"user_data",onClick:function(e){e.preventDefault(),b(!d)},children:[Object(E.jsx)(j.a,{color:j.a.getRandomColor("sitebase",["red","green","blue","violet"]),name:"".concat(n.first_name," ").concat(n.last_name),size:"35",className:"user_avatar",src:n.profile_pic}),Object(E.jsxs)("span",{children:["Hi, ",n.first_name,Object(E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{height:"20px",width:"15px",marginLeft:"5px"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(E.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:4,d:"M19 9l-7 7-7-7"})})]}),d?Object(E.jsxs)("div",{className:"user_dropdown",children:[Object(E.jsx)("span",{children:Object(E.jsx)(l.b,{to:"/profile",children:"My Profile"})}),Object(E.jsx)("span",{children:Object(E.jsx)(l.b,{to:"/watchlist",children:"My Watchlist"})}),Object(E.jsx)("span",{className:"divider"}),Object(E.jsx)("span",{onClick:function(e){e.preventDefault(),s("authSuccess",!1),b(!1),r()},children:"Signout"})]}):null]}):Object(E.jsx)(l.b,{to:"/auth",className:"login",children:"Signin"})})]})})),C=a(61),T=a(38),R=a(131),A=a.n(R),D=Object(T.css)(n||(n=Object(C.a)(["\n  top: 35vh;\n  margin: auto auto;\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),P=function(e){var t=e.size,a=e.color,n=e.loading;return Object(E.jsx)(A.a,{css:D,size:t,color:a,loading:n})},M=a(132),V=a.n(M),U=(Object(T.css)(r||(r=Object(C.a)(["\n  top: 35vh;\n  margin: auto auto;\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),function(e){var t=e.size,a=e.color,n=e.loading;return Object(E.jsx)(V.a,{size:t,color:a,loading:n})}),I=(a(192),Object(o.b)((function(e){return{loading:e.stateVariables.authLoading,error:e.stateVariables.authError,success:e.stateVariables.authSuccess,user:e.auth}}),(function(e){return{authorise:function(t,a){return e(function(e,t){return{type:f,isLogin:e,data:t}}(t,a))},setStateVar:function(t,a){return e(k(t,a))}}}))((function(e){var t=e.loading,a=e.error,n=e.success,r=e.user,s=e.authorise,i=e.setStateVar,o=Object(c.useState)(!0),l=Object(u.a)(o,2),j=l[0],b=l[1],p=Object(c.useState)(""),h=Object(u.a)(p,2),m=h[0],O=h[1],x=Object(c.useState)(""),g=Object(u.a)(x,2),f=g[0],v=g[1],_=Object(c.useState)(""),N=Object(u.a)(_,2),w=N[0],y=N[1],S=Object(c.useState)(""),k=Object(u.a)(S,2),L=k[0],C=k[1],T=Object(c.useState)(""),R=Object(u.a)(T,2),A=R[0],D=R[1],P=Object(c.useState)(""),M=Object(u.a)(P,2),V=M[0],I=M[1],z=Object(c.useState)(""),F=Object(u.a)(z,2),B=F[0],G=F[1],H=Object(c.useState)(""),W=Object(u.a)(H,2),J=W[0],Q=W[1],q=Object(c.useState)(""),X=Object(u.a)(q,2),Z=X[0],$=X[1],Y=Object(c.useState)(""),K=Object(u.a)(Y,2),ee=K[0],te=K[1],ae=function(e){ne();var t=e.target.name,a=e.target.value;"first_name"===t?O(a):"last_name"===t?y(a):"email"===t?D(a):"password"===t?G(a):$(a)};var ne=function(){v(""),C(""),I(""),Q(""),te(""),i("authError",!1),i("authLoading",!1)},re=Object(d.g)();return Object(c.useEffect)((function(){n&&r.token&&re.goBack()}),[n,a,t,r]),Object(E.jsx)("div",{className:"auth_bg",children:Object(E.jsxs)("div",{className:"auth_middle_cntnr",children:[Object(E.jsx)("p",{className:"auth_type_heading",children:j?"Signin":"Create an account"}),Object(E.jsx)("div",{className:"switch",onClick:function(e){e.preventDefault(),ne(),b(!j)},children:j?Object(E.jsxs)("span",{children:["Don't have an account? ",Object(E.jsx)("span",{children:"Signup"})]}):Object(E.jsxs)("span",{children:["Already have an account? ",Object(E.jsx)("span",{className:"",children:"Login"})]})}),a&&Object(E.jsx)("p",{className:"auth_error",children:a}),!j&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:"auth_field",children:[Object(E.jsx)("input",{type:"text",name:"first_name",value:m,placeholder:"First Name",className:f?"error_border":"",onChange:ae}),f&&Object(E.jsx)("p",{className:"error",children:f})]}),Object(E.jsxs)("div",{className:"auth_field",children:[Object(E.jsx)("input",{type:"text",name:"last_name",placeholder:"Last Name",value:w,className:L?"error_border":"",onChange:ae}),L&&Object(E.jsx)("p",{className:"error",children:L})]})]}),Object(E.jsxs)("div",{className:"auth_field",children:[Object(E.jsx)("input",{placeholder:"Email",type:"email",name:"email",value:A,className:V?"error_border":"",onChange:ae}),V&&Object(E.jsx)("p",{className:"error",children:V})]}),Object(E.jsxs)("div",{className:"auth_field",children:[Object(E.jsx)("input",{placeholder:"Password",type:"password",name:"password",value:B,className:J?"error_border":"",onChange:ae}),J&&Object(E.jsx)("p",{className:"error",children:J})]}),!j&&Object(E.jsxs)("div",{className:"auth_field",children:[Object(E.jsx)("input",{placeholder:"Confirm Password",type:"password",name:"confirm_pass",className:ee?"error_border":"",value:Z,onChange:ae}),ee&&Object(E.jsx)("p",{className:"error",children:ee})]}),Object(E.jsx)("button",{className:"signup",onClick:function(e){if(e.preventDefault(),!t){if(i("authError",""),!function(){var e="This field is required!";if(!j){if(!m)return v(e),!1;if(!w)return C(e),!1}if(!A)return I(e),!1;if(!function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(A))return I("Please enter a valid email!"),!1;if(!B)return Q(e),!1;if(!j){if(!Z)return te(e),!1;if(B!==Z)return te("The passwords do not match"),!1}return!0}())return;s(j,j?{email:A,password:B}:{first_name:m,last_name:w,email:A,password:B})}},children:t?Object(E.jsx)(U,{size:25,color:"white",loading:t}):j?"Login":"Signup"})]})})}))),z=a(78),F=function(){return Object(E.jsx)(z.d,{color:"#daa520",className:"font-small darken-3 pt-0",children:Object(E.jsx)("div",{className:"footer-copyright text-center py-3",children:Object(E.jsxs)(z.c,{fluid:!0,children:["Copyright \xa9 ",(new Date).getFullYear()+" ",Object(E.jsx)("a",{href:"https://www.MDBootstrap.com",children:" Arpit Gupta "}),". All Rights Reserved"]})})})},B=(a(211),function(){return Object(E.jsxs)("div",{className:"not_found",children:[Object(E.jsx)("h1",{children:"Error 404"}),Object(E.jsx)("h3",{children:"The page you were looking for could not be found!"}),Object(E.jsx)("h3",{children:"Please check the url and try again!"})]})}),G=(a(212),a(246)),H=a(247),W=a(248),J=function(e){return e.children},Q=function(e,t){return{type:p,searchQuery:e,pageNum:t}},q=function(e){return{type:h,data:e}},X=Object(o.b)((function(e){return{state:{isLoading:e.stateVariables.searchLoading,search:e.currentSearch}}}),(function(e){return{handleLiveSearch:function(t,a){return e(Q(t,a))}}}))(Object(d.h)((function(e){var t=e.state,a=e.handleLiveSearch,n=Object(c.useState)(!0),r=Object(u.a)(n,2),s=r[0],i=r[1],o=function(){a(t.search.curr_search,t.search.curr_page-1)},d=function(){a(t.search.curr_search,t.search.curr_page+1)};return Object(c.useEffect)((function(){t.isLoading||i(!1)}),[t.isLoading]),s?Object(E.jsx)(P,{color:"#daa520",loading:s,size:100}):function(e){var a=null;return t.search.totPages>1&&(a=1===t.search.curr_page?Object(E.jsx)("button",{type:"submit",className:"next",onClick:d,children:"NEXT"}):t.search.curr_page===t.search.totPages?Object(E.jsx)("button",{type:"submit",className:"prev",onClick:o,children:"PREV"}):Object(E.jsxs)(J,{children:[Object(E.jsx)("button",{type:"submit",className:"prev",onClick:o,children:"PREV"}),Object(E.jsx)("button",{type:"submit",className:"next",onClick:d,children:"NEXT"})]})),Object(E.jsxs)(G.a,{className:"resultsContainer",children:[Object(E.jsx)(H.a,{className:"next_prev",children:a}),Object(E.jsx)(H.a,{className:"ROW",children:e.movies.map((function(e){var t;return t=e.poster_path?"https://image.tmdb.org/t/p/original/".concat(e.poster_path):"https://www.warnersstellian.com/Content/images/product_image_not_available.png",Object(E.jsx)(W.a,{md:"3.5",className:"movie",children:Object(E.jsxs)("div",{className:"img_container",children:[Object(E.jsx)("img",{src:t,alt:e.original_title,className:"image"}),Object(E.jsx)("button",{type:"submit",className:"more_details",children:Object(E.jsx)(l.b,{to:"/movie/".concat(e.id),style:{textDecoration:"none",color:"black"},children:"More Details"})})]})},e.id)}))}),Object(E.jsx)(H.a,{className:"next_prev",children:a})]})}(t.search)}))),Z=(a(213),a(214),function(e){var t=e.movies;return Object(E.jsxs)("div",{id:"banner",className:"carousel slide carousel-fade","data-bs-ride":"carousel",children:[Object(E.jsx)("div",{className:"carousel-inner",children:t.map((function(e,t){return Object(E.jsxs)("div",{className:0===t?"carousel-item active":"carousel-item",children:[Object(E.jsx)("div",{className:"IMAGE_CONTAINER",style:{background:"url(https://image.tmdb.org/t/p/w500/".concat(e.backdrop_path,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",filter:"brightness(0.35)"}}),Object(E.jsxs)("div",{className:"carousel-caption d-block",children:[Object(E.jsx)("h5",{className:"caption",children:e.original_title}),Object(E.jsx)(l.b,{to:"/movie/".concat(e.id),style:{textDecoration:"none"},children:Object(E.jsx)("button",{className:"btn btn-md more_INFO",children:"MORE INFO"})})]})]},e.id)}))}),Object(E.jsxs)("a",{className:"carousel-control-prev",href:"#banner",role:"button","data-bs-slide":"prev",children:[Object(E.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(E.jsx)("span",{className:"visually-hidden"})]}),Object(E.jsxs)("a",{className:"carousel-control-next",href:"#banner",role:"button","data-bs-slide":"next",children:[Object(E.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(E.jsx)("span",{className:"visually-hidden"})]})]})}),$=(a(215),function(e){var t=e.type,a=e.movies;return Object(E.jsxs)(J,{children:[Object(E.jsx)("h1",{className:"movie_type text-left pl-2",children:t}),Object(E.jsx)("div",{className:"container-fluid rows",children:a.map((function(e){return Object(E.jsxs)("div",{className:"row_movie",children:[Object(E.jsx)("div",{className:"image_cont",children:Object(E.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),className:"row_IMG"})}),Object(E.jsx)("div",{className:"more_info",children:Object(E.jsx)(l.b,{to:"/movie/".concat(e.id),children:Object(E.jsx)("button",{className:"more_details",children:"More Details"})})})]},e.id)}))})]})}),Y=Object(o.b)((function(e){return{data:e.homepage}}))((function(e){var t=e.data;return Object(E.jsxs)("div",{className:"Home",children:[Object(E.jsx)(Z,{movies:t.banner}),Object(E.jsx)($,{movies:t.nowPlaying,type:"Now Playing"}),Object(E.jsx)($,{movies:t.trending,type:"Trending"}),Object(E.jsx)($,{movies:t.topRated,type:"Top Rated"}),Object(E.jsx)($,{movies:t.upcoming,type:"Upcoming"})]})})),K=(a(216),function(e){return{type:O,data:e}}),ee=Object(o.b)((function(e){return{state:{isLoading:e.stateVariables.movieLoading,movie_data:e.movieData.movieData,searchQuery:e.currentSearch.curr_search}}}),(function(e){return{getCurrentMovie:function(t){return e(function(e){return{type:m,id:e}}(t))}}}))(Object(d.h)((function(e){var t=e.match,a=e.state,n=e.getCurrentMovie;Object(c.useEffect)((function(){n(+t.params.id)}),[]);var r=function(e){return e.map((function(e){return e.name})).join(", ")},s=function(e){for(var t=e.toString(),a="",n=t.length;n>3;){n-=3,a=","+t.substr(n,3)+a}return a=t.substr(0,n)+a},i=null,o=null,l=null;return a.movie_data&&(l=(o=a.movie_data).tagline?o.tagline:"No wind favors s/he who has no destined port...",i="https://image.tmdb.org/t/p/w500/".concat(o.poster_path)),!a.movie_data||a.movie_data&&a.movie_data.id!==+t.params.id?Object(E.jsx)(P,{color:"#daa520",loading:a.loading,size:100}):Object(E.jsx)("div",{className:"container Movie",children:Object(E.jsxs)("div",{className:"row main_row",children:[Object(E.jsx)("div",{className:"col-xs-12 col-md-4 image_container",style:{background:"url(".concat(i,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",minHeight:"500px"}}),Object(E.jsxs)("div",{className:"col-xs-12 col-md-8 movie_data_container",children:[Object(E.jsx)("h1",{className:"title",children:o.original_title}),Object(E.jsx)("h5",{className:"tagline",children:l}),Object(E.jsx)("p",{className:"overview",children:o.overview}),Object(E.jsx)("h5",{className:"genres_title",children:" GENRES: "}),Object(E.jsxs)("h5",{className:"genres",children:[" ",r(o.genres)," "]}),Object(E.jsx)("h5",{className:"prod_companies_title",children:"PRODUCTION COMPANIES:"}),Object(E.jsx)("h5",{className:"prod_companies",children:r(o.production_companies)}),Object(E.jsxs)("div",{className:"container fluid m-0 p-0 mini_cont",children:[Object(E.jsxs)("div",{className:"row mini_cont_row",children:[Object(E.jsxs)("div",{className:"col col-xs-6",children:[Object(E.jsx)("h5",{className:"genres_title",children:" RELEASE DATE: "}),Object(E.jsx)("h5",{className:"genres",children:o.release_date})]}),Object(E.jsxs)("div",{className:"col col-xs-6",children:[Object(E.jsx)("h5",{className:"genres_title",children:" REVENUE: "}),Object(E.jsxs)("h5",{className:"genres",children:["$",0!==o.revenue?s(o.revenue):1e6]})]})]}),Object(E.jsxs)("div",{className:"row mini_cont_row",children:[Object(E.jsxs)("div",{className:"col col-xs-6",children:[Object(E.jsx)("h5",{className:"genres_title",children:" RUNNING TIME: "}),Object(E.jsxs)("h5",{className:"genres",children:[o.runtime," MINS"]})]}),Object(E.jsxs)("div",{className:"col col-xs-6",children:[Object(E.jsx)("h5",{className:"genres_title",children:" IMDB RATING: "}),Object(E.jsxs)("h5",{className:"genres",children:[o.vote_average,"/10 ",Object(E.jsxs)("span",{className:"vote_cnt",children:["(",s(o.vote_count),")"]})]})]})]})]})]})]})})}))),te=a(15),ae=a.n(te),ne=a(137),re=(a(218),Object(o.b)((function(e){return{user:e.auth,updateSuccess:e.stateVariables.updateSuccess,updateLoading:e.stateVariables.updateLoading,updateError:e.stateVariables.updateError,deleteSuccess:e.stateVariables.deleteSuccess,deleteLoading:e.stateVariables.deleteLoading,deleteError:e.stateVariables.deleteError}}),(function(e){return{updateUser:function(t,a){return e(function(e,t){return{type:N,token:e,data:t}}(t,a))},deleteUserFromDB:function(t){return e(function(e){return{type:w,token:e}}(t))},setStateVar:function(t,a){return e(k(t,a))}}}))((function(e){var t=e.user,a=e.setStateVar,n=e.updateUser,r=e.updateSuccess,s=e.updateLoading,i=e.updateError,o=e.deleteUserFromDB,l=e.deleteLoading,b=e.deleteError,p=(e.deleteSuccess,Object(c.useState)(!1)),h=Object(u.a)(p,2),m=h[0],O=h[1],x=Object(c.useRef)(null),g=Object(c.useState)(""),f=Object(u.a)(g,2),v=f[0],_=f[1],N=Object(c.useState)(""),w=Object(u.a)(N,2),y=w[0],S=w[1],k=Object(c.useState)(""),L=Object(u.a)(k,2),C=L[0],T=L[1],R=Object(c.useState)(""),A=Object(u.a)(R,2),D=A[0],P=A[1],M=Object(c.useState)(""),V=Object(u.a)(M,2),I=V[0],z=V[1],F=Object(c.useState)(""),B=Object(u.a)(F,2),G=B[0],H=B[1],W=Object(c.useState)(""),J=Object(u.a)(W,2),Q=J[0],q=J[1],X=Object(c.useState)(""),Z=Object(u.a)(X,2),$=Z[0],Y=Z[1],K=Object(c.useState)(""),ee=Object(u.a)(K,2),te=ee[0],re=ee[1],ce=Object(c.useState)(""),se=Object(u.a)(ce,2),ie=se[0],oe=se[1],le=Object(d.g)();Object(c.useEffect)((function(){de()}),[]),Object(c.useEffect)((function(){t.token||le.goBack(),t&&(_(t.profile_pic),S(""),T(t.first_name),P(""),z(t.last_name),H(""),q(""),Y(""),re(""),oe(""),r&&O(!1))}),[t,r]);var de=function(){a("updateError",""),a("deleteError",""),S(""),P(""),H(""),Y(""),oe("")},ue=function(e){e.preventDefault(),de();var t=e.target.name,a=e.target.value;"firstName"===t?T(a):"lastName"===t?z(a):"newPassword"===t?q(a):re(a)},je=function(e){return new Promise((function(t,a){var n=new FileReader;n.readAsBinaryString(e),n.onload=function(){t(n.result)},n.onerror=function(e){a(e)}}))},be=function(){var e=Object(ne.a)(ae.a.mark((function e(t){var a,n,r;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=t.target.files)||!a[0]){e.next=14;break}if(!((n=a[0]).size>2097152)){e.next=6;break}return _(""),e.abrupt("return",S("File size should not exceed 2mb!"));case 6:if(-1!==["image/png","image/jpeg","image/jpg","image/gif"].indexOf(n.type)){e.next=10;break}return _(""),e.abrupt("return",S("The allowed file types are .png, .jpg, .jpeg, .gif"));case 10:return e.next=12,je(n);case 12:r=e.sent,_(r);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsx)("div",{className:"profile_main_container",children:Object(E.jsxs)("div",{children:[i&&Object(E.jsx)("p",{className:"actionsError",children:i}),b&&Object(E.jsx)("p",{className:"actionsError",children:b}),Object(E.jsxs)("div",{className:"avatar",children:[Object(E.jsx)(j.a,{color:j.a.getRandomColor("sitebase",["red","green","blue","violet"]),name:"".concat(C," ").concat(I),size:"130",round:!0,className:"user_avatar_profile",src:v}),y&&Object(E.jsx)("p",{className:"errorText",children:y}),m?v?Object(E.jsxs)("div",{className:"selected_image",children:[Object(E.jsx)("span",{className:"btn remove_image",onClick:function(e){e.preventDefault(),_(""),S("")},children:"Remove"}),Object(E.jsx)("span",{className:"btn upload_image",onClick:function(e){e.preventDefault(),S(""),x.current.click()},children:"Update"})]}):Object(E.jsx)("div",{className:"selected_image",children:Object(E.jsx)("span",{className:"btn upload_image",onClick:function(e){e.preventDefault(),S(""),x.current.click()},children:"Upload new image"})}):null,Object(E.jsx)("input",{ref:x,type:"file",name:"image_input",accept:"image/png, image/jpeg, image/jpg, image/gif",onChange:function(e){return be(e)},style:{display:"none"}})]}),Object(E.jsxs)("div",{className:"profile_field",children:[Object(E.jsx)("span",{children:"First Name"}),Object(E.jsx)("input",{className:"profile_input ".concat(D&&"error_border"),type:"text",value:C,name:"firstName",onChange:ue,readOnly:!m}),D&&Object(E.jsx)("p",{className:"errorText",children:D})]}),Object(E.jsxs)("div",{className:"profile_field",children:[Object(E.jsx)("span",{children:"Last Name"}),Object(E.jsx)("input",{className:"profile_input ".concat(G&&"error_border"),type:"text",value:I,name:"lastName",onChange:ue,readOnly:!m}),G&&Object(E.jsx)("p",{className:"errorText",children:G})]}),Object(E.jsxs)("div",{className:"profile_field",children:[Object(E.jsx)("span",{children:"Email"}),Object(E.jsx)("input",{className:"profile_input",type:"email",value:t.email,readOnly:!0})]}),m&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:"profile_field",children:[Object(E.jsx)("span",{children:"New Password"}),Object(E.jsx)("input",{className:"profile_input ".concat(Q&&"error_border"),type:"password",name:"newPassword",onChange:ue}),$&&Object(E.jsx)("p",{className:"errorText",children:$})]}),Q.length&&Object(E.jsxs)("div",{className:"profile_field",children:[Object(E.jsx)("span",{children:"Confirm new password"}),Object(E.jsx)("input",{className:"profile_input ".concat(ie&&"error_border"),type:"password",name:"confirmPassword",onChange:ue}),ie&&Object(E.jsx)("p",{className:"errorText",children:ie})]})]}),Object(E.jsx)("div",{className:"profile_actions",children:m?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("button",{className:"btn cancel_edit",onClick:function(e){e.preventDefault(),T(t.first_name),P(""),z(t.last_name),H(""),_(t.profile_pic),S(""),q(""),Y(""),re(""),oe(""),O(!1)},children:"Cancel edit"}),s?Object(E.jsx)("button",{className:"updateLoading",children:Object(E.jsx)(U,{size:25,color:"white",loading:s})}):Object(E.jsx)("button",{className:"btn update_profile",onClick:function(e){if(e.preventDefault(),function(){var e="This field cannot be empty!";if(!C)return P(e),!1;if(!I)return H(e),!1;if(Q){if(!te)return oe(e),!1;if(Q!==te)return Y("The passwords do not match"),oe("The passwords do not match"),!1}return!0}()){var a={profilePic:v,firstName:C,lastName:I,newPassword:Q,confirmPassword:te};n(t.token,a)}},children:"Update profile"})]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("button",{className:"btn edit_profile",onClick:function(e){e.preventDefault(),O(!0)},children:"Edit profile"}),l?Object(E.jsx)("button",{className:"deleteLoading",children:Object(E.jsx)(U,{size:25,color:"white",loading:l})}):Object(E.jsx)("button",{className:"btn delete_profile",onClick:function(e){e.preventDefault(),o(t.token)},children:"Delete profile"})]})})]})})}))),ce=(a(219),a(220),Object(o.b)((function(e){return{state:{isLoading:e.stateVariables.homepageLoading,isSearchLoading:e.stateVariables.searchLoading,isMovieLoading:e.stateVariables.movieLoading,toRedirect:e.stateVariables.redirect,search:e.currentSearch}}}),(function(e){return{getAllMovies:function(){return e({type:x})},handleLiveSearch:function(t,a){return e(Q(t,a))}}}))((function(e){var t=e.state,a=e.getAllMovies,n=e.handleLiveSearch;return Object(c.useEffect)((function(){a()}),[]),Object(E.jsx)(l.a,{children:Object(E.jsxs)("div",{className:"App",id:"##",children:[Object(E.jsx)(L,{handleSearch:function(e){n(encodeURI(e.target.value),1)}}),t.isLoading?Object(E.jsx)(P,{color:"#daa520",loading:t.isLoading,size:100}):Object(E.jsxs)(E.Fragment,{children:[t.toRedirect?Object(E.jsx)(d.a,{to:"/"}):null,Object(E.jsxs)(d.d,{children:[Object(E.jsx)(d.b,{path:"/",exact:!0,children:t.search.curr_search?Object(E.jsx)(X,{}):Object(E.jsx)(Y,{})}),Object(E.jsx)(d.b,{path:"/movie/:id",component:ee}),Object(E.jsx)(d.b,{path:"/auth",component:I}),Object(E.jsx)(d.b,{path:"/profile",component:re}),Object(E.jsx)(d.b,{component:B})]}),t.isLoading||t.isMovieLoading||t.isSearchLoading?null:Object(E.jsx)(F,{})]})]})})}))),se=a(23),ie=a(142),oe=a(77),le=a(138),de=a.n(le),ue=a(139),je=a(140),be=a.n(je),pe=a(141),he=a(24),me={movies:[],currPage:0,totPages:0,curr_search:null},Oe=a(62),xe={homepageLoading:!1,homepageError:!1,searchLoading:!1,searchError:!1,movieLoading:!1,movieError:!1,redirect:!1,authLoading:!1,authSuccess:!1,authError:"",updateSuccess:!1,updateLoading:!1,updateError:"",deleteSuccess:!1,deleteLoading:!1,deleteError:""},ge={movieData:null},fe={banner:[],nowPlaying:[],trending:[],topRated:[],upcoming:[]},ve={_id:"",profile_pic:"",first_name:"",last_name:"",email:"",watchlist:[],token:""},_e=Object(se.combineReducers)({currentSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return e=Object(he.a)({},t.data);default:return e}},stateVariables:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return e=Object(he.a)(Object(he.a)({},e),{},Object(Oe.a)({},t.svType,t.val));default:return e}},movieData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return e=Object(he.a)(Object(he.a)({},e),{},{movieData:t.data});default:return e}},homepage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var a={banner:t.data[0].data.results,nowPlaying:t.data[1].data.results,trending:t.data[2].data.results,topRated:t.data[3].data.results,upcoming:t.data[4].data.results};return e=Object(he.a)({},a);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return delete t.data.password,e=Object(he.a)({},t.data);case v:return e={_id:"",profile_pic:"",first_name:"",last_name:"",email:"",watchlist:[],token:""};default:return e}}}),Ne=a(5),we=a(25),ye=a.n(we),Se="3e4103174dec93f06df85aeacabc112c",ke="https://api.themoviedb.org/3",Ee=function(e,t){return ye.a.get("".concat(ke,"/search/movie?api_key=").concat(Se,"&query=").concat(e,"&page=").concat(t))},Le=function(){return ye.a.get("".concat(ke,"/movie/popular?api_key=").concat(Se,"&language=en-US&page=1"))},Ce=function(e){return ye.a.get("".concat(ke).concat(e,"?api_key=").concat(Se))},Te=function(e){return ye.a.get("".concat(ke,"/movie/").concat(e,"?api_key=").concat(Se,"&language=en-US"))},Re="http://localhost:5000",Ae=function(e,t){var a;return a="".concat(Re,e?"/login":"/signup"),ye.a.post(a,t,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}})},De=function(e,t){return ye.a.put("".concat(Re,"/update"),t,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(e)}})},Pe=function(e){return ye.a.delete("".concat(Re,"/delete"),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(e)}})},Me=ae.a.mark(Ge),Ve=ae.a.mark(He),Ue=ae.a.mark(We),Ie=ae.a.mark(Je),ze=ae.a.mark(Qe),Fe=ae.a.mark(qe),Be=ae.a.mark(Xe);function Ge(e){var t,a,n,r,c;return ae.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(t=e.searchQuery,a=e.pageNum,s.prev=1,t&&""!==t){s.next=14;break}return n={movies:[],curr_page:0,totPages:0,curr_search:null},s.next=6,Object(Ne.d)(q(n));case 6:return s.next=8,Object(Ne.d)(k("redirect",!0));case 8:return s.next=10,Object(Ne.c)(500);case 10:return s.next=12,Object(Ne.d)(k("redirect",!1));case 12:s.next=24;break;case 14:return s.next=16,Object(Ne.d)(k("searchLoading",!0));case 16:return s.next=18,Object(Ne.b)(Ee,t,a);case 18:return r=s.sent,c={movies:r.data.results,curr_page:a,totPages:r.data.total_pages,curr_search:t},s.next=22,Object(Ne.d)(q(c));case 22:return s.next=24,Object(Ne.d)(k("searchLoading",!1));case 24:s.next=32;break;case 26:return s.prev=26,s.t0=s.catch(1),s.next=30,Object(Ne.d)(k("searchLoading",!1));case 30:return s.next=32,Object(Ne.d)(k("searchError",!0));case 32:case"end":return s.stop()}}),Me,null,[[1,26]])}function He(){var e,t;return ae.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Ne.d)(k("homepageLoading",!0));case 3:return e=["/movie/now_playing","/trending/movie/week","/movie/top_rated","/movie/upcoming"],a.t0=Ne.a,a.next=7,Object(Ne.b)(Le);case 7:return a.t1=a.sent,a.next=10,Object(Ne.b)(Ce,e[0]);case 10:return a.t2=a.sent,a.next=13,Object(Ne.b)(Ce,e[1]);case 13:return a.t3=a.sent,a.next=16,Object(Ne.b)(Ce,e[2]);case 16:return a.t4=a.sent,a.next=19,Object(Ne.b)(Ce,e[3]);case 19:return a.t5=a.sent,a.t6=[a.t1,a.t2,a.t3,a.t4,a.t5],a.next=23,(0,a.t0)(a.t6);case 23:return t=a.sent,a.next=26,Object(Ne.d)({type:g,data:t});case 26:return a.next=28,Object(Ne.d)(k("homepageLoading",!1));case 28:a.next=36;break;case 30:return a.prev=30,a.t7=a.catch(0),a.next=34,Object(Ne.d)(k("homepageLoading",!1));case 34:return a.next=36,Object(Ne.d)(k("homepageError",!0));case 36:case"end":return a.stop()}}),Ve,null,[[0,30]])}function We(e){var t,a;return ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,n.prev=1,n.next=4,Object(Ne.d)(k("movieLoading",!0));case 4:return n.next=6,Object(Ne.b)(Te,t);case 6:return a=n.sent,n.next=9,Object(Ne.d)(K(a.data));case 9:return n.next=11,Object(Ne.d)(k("movieLoading",!1));case 11:n.next=19;break;case 13:return n.prev=13,n.t0=n.catch(1),n.next=17,Object(Ne.d)(k("movieLoading",!1));case 17:return n.next=19,Object(Ne.d)(k("movieError",!0));case 19:case"end":return n.stop()}}),Ue,null,[[1,13]])}function Je(e){var t,a,n;return ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.isLogin,a=e.data,r.prev=1,r.next=4,Object(Ne.d)(k("authLoading",!0));case 4:return r.next=6,Object(Ne.b)(Ae,t,JSON.stringify(a));case 6:return n=r.sent,r.next=9,Object(Ne.d)(S(n.data));case 9:return r.next=11,Object(Ne.d)(k("authLoading",!1));case 11:return r.next=13,Object(Ne.d)(k("authSuccess",!0));case 13:r.next=21;break;case 15:return r.prev=15,r.t0=r.catch(1),r.next=19,Object(Ne.d)(k("authLoading",!1));case 19:return r.next=21,Object(Ne.d)(k("authError",r.t0.response.data));case 21:case"end":return r.stop()}}),Ie,null,[[1,15]])}function Qe(e){var t,a,n;return ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.token,a=e.data,r.prev=1,r.next=4,Object(Ne.d)(k("updateLoading",!0));case 4:return r.next=6,Object(Ne.b)(De,t,JSON.stringify(a));case 6:return n=r.sent,r.next=9,Object(Ne.d)(S(n.data));case 9:return r.next=11,Object(Ne.d)(k("updateSuccess",!0));case 11:return r.next=13,Object(Ne.d)(k("updateLoading",!1));case 13:r.next=21;break;case 15:return r.prev=15,r.t0=r.catch(1),r.next=19,Object(Ne.d)(k("updateLoading",!1));case 19:return r.next=21,Object(Ne.d)(k("updateError",r.t0.response.data));case 21:case"end":return r.stop()}}),ze,null,[[1,15]])}function qe(e){var t;return ae.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.token,a.prev=1,a.next=4,Object(Ne.d)(k("deleteLoading",!0));case 4:return a.next=6,Object(Ne.b)(Pe,t);case 6:return a.next=8,Object(Ne.d)(y());case 8:return a.next=10,Object(Ne.d)(k("deleteLoading",!1));case 10:a.next=18;break;case 12:return a.prev=12,a.t0=a.catch(1),a.next=16,Object(Ne.d)(k("deleteLoading",!1));case 16:return a.next=18,Object(Ne.d)(k("deleteError",a.t0.response.data));case 18:case"end":return a.stop()}}),Fe,null,[[1,12]])}function Xe(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ne.f)(p,Ge);case 2:return e.next=4,Object(Ne.e)(x,He);case 4:return e.next=6,Object(Ne.e)(m,We);case 6:return e.next=8,Object(Ne.e)(f,Je);case 8:return e.next=10,Object(Ne.f)(N,Qe);case 10:return e.next=12,Object(Ne.f)(w,qe);case 12:case"end":return e.stop()}}),Be)}var Ze={key:"root",storage:de.a,stateReconciler:be.a},$e=Object(ie.a)(),Ye=Object(se.createStore)(Object(oe.a)(Ze,_e),Object(pe.composeWithDevTools)(Object(se.applyMiddleware)($e))),Ke=Object(oe.b)(Ye);$e.run(Xe),i.a.render(Object(E.jsx)(o.a,{store:Ye,children:Object(E.jsx)(ue.PersistGate,{loading:Object(E.jsx)(E.Fragment,{}),persistor:Ke,children:Object(E.jsx)(ce,{})})}),document.getElementById("root"))}},[[241,1,2]]]);
//# sourceMappingURL=main.86d02217.chunk.js.map