(this["webpackJsonpmovie-pedia"]=this["webpackJsonpmovie-pedia"]||[]).push([[0],{142:function(e,t,a){},153:function(e,t,a){},191:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},217:function(e,t,a){},239:function(e,t,a){"use strict";a.r(t);a(142),a(143),a(144),a(145);var n,c,r=a(1),s=a(26),i=a.n(s),o=a(18),l=a(10),d=a(13),u=a(15),j=(a(153),a(76)),b="SET_STATE_VARIABLE",h="GET_CURRENT_SEARCH_DATA",m="SET_CURRENT_SEARCH_DATA",O="GET_CURRENT_MOVIE_DATA",p="SET_CURRENT_MOVIE_DATA",x="GET_MOVIES",g="SET_MOVIES",v="AUTHORISE_USER",f="LOGOUT",_="SET_CURRENT_USER_DATA",N=function(e){return{type:_,data:e}},w=function(e,t){return{type:b,svType:e,val:t}},y=a(2),S=Object(o.b)((function(e){return{isLoggedIn:!!e.auth.token,user:e.auth}}),(function(e){return{signout:function(){return e({type:f})},setStateVar:function(t,a){return e(w(t,a))}}}))((function(e){var t=e.handleSearch,a=e.isLoggedIn,n=e.user,c=e.signout,s=e.setStateVar,i=Object(r.useState)(!1),o=Object(u.a)(i,2),d=o[0],b=o[1],h=Object(r.useState)(!1),m=Object(u.a)(h,2),O=m[0],p=m[1];return Object(y.jsxs)("div",{className:"navbar",children:[Object(y.jsx)("div",{className:"mobile_menu ".concat(O&&"animate"),children:O&&(a?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("span",{children:["Hi, ",n.first_name," ",n.last_name]}),Object(y.jsx)("span",{className:"divider"}),Object(y.jsx)("span",{children:Object(y.jsx)(l.b,{to:"/profile",onClick:function(){p(!1)},children:"My Profile"})}),Object(y.jsx)("span",{children:Object(y.jsx)(l.b,{to:"/watchlist",onClick:function(){p(!1)},children:"My Watchlist"})}),Object(y.jsx)("span",{className:"divider"}),Object(y.jsx)("span",{onClick:function(e){e.preventDefault(),s("authSuccess",!1),p(!1),c()},children:"Signout"})]}):Object(y.jsx)("span",{children:Object(y.jsx)(l.b,{to:"/auth",className:"menu_signin",onClick:function(){p(!1)},children:"Signin"})}))}),Object(y.jsxs)("div",{className:"nav_left",children:[Object(y.jsx)(l.b,{to:"/",children:Object(y.jsx)("img",{src:"https://pngimage.net/wp-content/uploads/2018/06/mp-png-5.png"})}),Object(y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 hamburger",fill:"none",viewBox:"0 0 24 24",stroke:"black",onClick:function(e){e.preventDefault(),p(!O)},children:Object(y.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})]}),Object(y.jsx)("div",{className:"nav_center",children:Object(y.jsx)("input",{type:"text",placeholder:"Search movies...",className:"input",id:"searchBar",onChange:t})}),Object(y.jsx)("div",{className:"nav_right",children:a?Object(y.jsxs)("div",{className:"user_data",onClick:function(e){e.preventDefault(),b(!d)},children:[Object(y.jsx)(j.a,{color:j.a.getRandomColor("sitebase",["red","green","blue","violet"]),name:"".concat(n.first_name," ").concat(n.last_name),size:"35",className:"user_avatar"}),Object(y.jsxs)("span",{children:["Hi, ",n.first_name,Object(y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{height:"20px",width:"15px",marginLeft:"5px"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(y.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:4,d:"M19 9l-7 7-7-7"})})]}),d?Object(y.jsxs)("div",{className:"user_dropdown",children:[Object(y.jsx)("span",{children:Object(y.jsx)(l.b,{to:"/profile",children:"My Profile"})}),Object(y.jsx)("span",{children:Object(y.jsx)(l.b,{to:"/watchlist",children:"My Watchlist"})}),Object(y.jsx)("span",{className:"divider"}),Object(y.jsx)("span",{onClick:function(e){e.preventDefault(),s("authSuccess",!1),b(!1),c()},children:"Signout"})]}):null]}):Object(y.jsx)(l.b,{to:"/auth",className:"login",children:"Signin"})})]})})),k=a(60),E=a(38),L=a(131),R=a.n(L),C=Object(E.css)(n||(n=Object(k.a)(["\n  top: 35vh;\n  margin: auto auto;\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),T=function(e){var t=e.size,a=e.color,n=e.loading;return Object(y.jsx)(R.a,{css:C,size:t,color:a,loading:n})},A=a(132),M=a.n(A),D=(Object(E.css)(c||(c=Object(k.a)(["\n  top: 35vh;\n  margin: auto auto;\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),function(e){var t=e.size,a=e.color,n=e.loading;return Object(y.jsx)(M.a,{size:t,color:a,loading:n})}),P=(a(191),Object(o.b)((function(e){return{loading:e.stateVariables.authLoading,error:e.stateVariables.authError,success:e.stateVariables.authSuccess,user:e.auth}}),(function(e){return{authorise:function(t,a){return e(function(e,t){return{type:v,isLogin:e,data:t}}(t,a))},setStateVar:function(t,a){return e(w(t,a))}}}))((function(e){var t=e.loading,a=e.error,n=e.success,c=e.user,s=e.authorise,i=e.setStateVar,o=Object(r.useState)(!0),l=Object(u.a)(o,2),j=l[0],b=l[1],h=Object(r.useState)(""),m=Object(u.a)(h,2),O=m[0],p=m[1],x=Object(r.useState)(""),g=Object(u.a)(x,2),v=g[0],f=g[1],_=Object(r.useState)(""),N=Object(u.a)(_,2),w=N[0],S=N[1],k=Object(r.useState)(""),E=Object(u.a)(k,2),L=E[0],R=E[1],C=Object(r.useState)(""),T=Object(u.a)(C,2),A=T[0],M=T[1],P=Object(r.useState)(""),I=Object(u.a)(P,2),V=I[0],U=I[1],z=Object(r.useState)(""),G=Object(u.a)(z,2),B=G[0],F=G[1],H=Object(r.useState)(""),W=Object(u.a)(H,2),J=W[0],Q=W[1],q=Object(r.useState)(""),X=Object(u.a)(q,2),Z=X[0],$=X[1],Y=Object(r.useState)(""),K=Object(u.a)(Y,2),ee=K[0],te=K[1],ae=function(e){ne();var t=e.target.name,a=e.target.value;"first_name"===t?p(a):"last_name"===t?S(a):"email"===t?M(a):"password"===t?F(a):$(a)};var ne=function(){f(""),R(""),U(""),Q(""),te(""),i("authError",!1),i("authLoading",!1)},ce=Object(d.g)();return Object(r.useEffect)((function(){n&&c.token&&ce.goBack()}),[n,a,t,c]),Object(y.jsx)("div",{className:"auth_bg",children:Object(y.jsxs)("div",{className:"auth_middle_cntnr",children:[Object(y.jsx)("p",{className:"auth_type_heading",children:j?"Signin":"Create an account"}),Object(y.jsx)("div",{className:"switch",onClick:function(e){e.preventDefault(),ne(),b(!j)},children:j?Object(y.jsxs)("span",{children:["Don't have an account? ",Object(y.jsx)("span",{children:"Signup"})]}):Object(y.jsxs)("span",{children:["Already have an account? ",Object(y.jsx)("span",{className:"",children:"Login"})]})}),a&&Object(y.jsx)("p",{className:"auth_error",children:a}),!j&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"auth_field",children:[Object(y.jsx)("input",{type:"text",name:"first_name",value:O,placeholder:"First Name",className:v?"error_border":"",onChange:ae}),v&&Object(y.jsx)("p",{className:"error",children:v})]}),Object(y.jsxs)("div",{className:"auth_field",children:[Object(y.jsx)("input",{type:"text",name:"last_name",placeholder:"Last Name",value:w,className:L?"error_border":"",onChange:ae}),L&&Object(y.jsx)("p",{className:"error",children:L})]})]}),Object(y.jsxs)("div",{className:"auth_field",children:[Object(y.jsx)("input",{placeholder:"Email",type:"email",name:"email",value:A,className:V?"error_border":"",onChange:ae}),V&&Object(y.jsx)("p",{className:"error",children:V})]}),Object(y.jsxs)("div",{className:"auth_field",children:[Object(y.jsx)("input",{placeholder:"Password",type:"password",name:"password",value:B,className:J?"error_border":"",onChange:ae}),J&&Object(y.jsx)("p",{className:"error",children:J})]}),!j&&Object(y.jsxs)("div",{className:"auth_field",children:[Object(y.jsx)("input",{placeholder:"Confirm Password",type:"password",name:"confirm_pass",className:ee?"error_border":"",value:Z,onChange:ae}),ee&&Object(y.jsx)("p",{className:"error",children:ee})]}),Object(y.jsx)("button",{className:"signup",onClick:function(e){if(e.preventDefault(),!t){if(i("authError",""),!function(){var e="This field is required!";if(!j){if(!O)return f(e),!1;if(!w)return R(e),!1}if(!A)return U(e),!1;if(!function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(A))return U("Please enter a valid email!"),!1;if(!B)return Q(e),!1;if(!j){if(!Z)return te(e),!1;if(B!==Z)return te("The passwords do not match"),!1}return!0}())return;s(j,j?{email:A,password:B}:{first_name:O,last_name:w,email:A,password:B})}},children:t?Object(y.jsx)(D,{size:25,color:"white",loading:t}):j?"Login":"Signup"})]})})}))),I=a(78),V=function(){return Object(y.jsx)(I.d,{color:"#daa520",className:"font-small darken-3 pt-0",children:Object(y.jsx)("div",{className:"footer-copyright text-center py-3",children:Object(y.jsxs)(I.c,{fluid:!0,children:["Copyright \xa9 ",(new Date).getFullYear()+" ",Object(y.jsx)("a",{href:"https://www.MDBootstrap.com",children:" Arpit Gupta "}),". All Rights Reserved"]})})})},U=(a(210),function(){return Object(y.jsxs)("div",{className:"not_found",children:[Object(y.jsx)("h1",{children:"Error 404"}),Object(y.jsx)("h3",{children:"The page you were looking for could not be found!"}),Object(y.jsx)("h3",{children:"Please check the url and try again!"})]})}),z=(a(211),a(244)),G=a(245),B=a(246),F=function(e){return e.children},H=function(e,t){return{type:h,searchQuery:e,pageNum:t}},W=function(e){return{type:m,data:e}},J=Object(o.b)((function(e){return{state:{isLoading:e.stateVariables.searchLoading,search:e.currentSearch}}}),(function(e){return{handleLiveSearch:function(t,a){return e(H(t,a))}}}))(Object(d.h)((function(e){var t=e.state,a=e.handleLiveSearch,n=Object(r.useState)(!0),c=Object(u.a)(n,2),s=c[0],i=c[1],o=function(){a(t.search.curr_search,t.search.curr_page-1)},d=function(){a(t.search.curr_search,t.search.curr_page+1)};return Object(r.useEffect)((function(){t.isLoading||i(!1)}),[t.isLoading]),s?Object(y.jsx)(T,{color:"#daa520",loading:s,size:100}):function(e){var a=null;return t.search.totPages>1&&(a=1===t.search.curr_page?Object(y.jsx)("button",{type:"submit",className:"next",onClick:d,children:"NEXT"}):t.search.curr_page===t.search.totPages?Object(y.jsx)("button",{type:"submit",className:"prev",onClick:o,children:"PREV"}):Object(y.jsxs)(F,{children:[Object(y.jsx)("button",{type:"submit",className:"prev",onClick:o,children:"PREV"}),Object(y.jsx)("button",{type:"submit",className:"next",onClick:d,children:"NEXT"})]})),Object(y.jsxs)(z.a,{className:"resultsContainer",children:[Object(y.jsx)(G.a,{className:"next_prev",children:a}),Object(y.jsx)(G.a,{className:"ROW",children:e.movies.map((function(e){var t;return t=e.poster_path?"https://image.tmdb.org/t/p/original/".concat(e.poster_path):"https://www.warnersstellian.com/Content/images/product_image_not_available.png",Object(y.jsx)(B.a,{md:"3.5",className:"movie",children:Object(y.jsxs)("div",{className:"img_container",children:[Object(y.jsx)("img",{src:t,alt:e.original_title,className:"image"}),Object(y.jsx)("button",{type:"submit",className:"more_details",children:Object(y.jsx)(l.b,{to:"/movie/".concat(e.id),style:{textDecoration:"none",color:"black"},children:"More Details"})})]})},e.id)}))}),Object(y.jsx)(G.a,{className:"next_prev",children:a})]})}(t.search)}))),Q=(a(212),a(213),function(e){var t=e.movies;return Object(y.jsxs)("div",{id:"banner",className:"carousel slide carousel-fade","data-bs-ride":"carousel",children:[Object(y.jsx)("div",{className:"carousel-inner",children:t.map((function(e,t){return Object(y.jsxs)("div",{className:0===t?"carousel-item active":"carousel-item",children:[Object(y.jsx)("div",{className:"IMAGE_CONTAINER",style:{background:"url(https://image.tmdb.org/t/p/w500/".concat(e.backdrop_path,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",filter:"brightness(0.35)"}}),Object(y.jsxs)("div",{className:"carousel-caption d-block",children:[Object(y.jsx)("h5",{className:"caption",children:e.original_title}),Object(y.jsx)(l.b,{to:"/movie/".concat(e.id),style:{textDecoration:"none"},children:Object(y.jsx)("button",{className:"btn btn-md more_INFO",children:"MORE INFO"})})]})]},e.id)}))}),Object(y.jsxs)("a",{className:"carousel-control-prev",href:"#banner",role:"button","data-bs-slide":"prev",children:[Object(y.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(y.jsx)("span",{className:"visually-hidden"})]}),Object(y.jsxs)("a",{className:"carousel-control-next",href:"#banner",role:"button","data-bs-slide":"next",children:[Object(y.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(y.jsx)("span",{className:"visually-hidden"})]})]})}),q=(a(214),function(e){var t=e.type,a=e.movies;return Object(y.jsxs)(F,{children:[Object(y.jsx)("h1",{className:"movie_type text-left pl-2",children:t}),Object(y.jsx)("div",{className:"container-fluid rows",children:a.map((function(e){return Object(y.jsxs)("div",{className:"row_movie",children:[Object(y.jsx)("div",{className:"image_cont",children:Object(y.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),className:"row_IMG"})}),Object(y.jsx)("div",{className:"more_info",children:Object(y.jsx)(l.b,{to:"/movie/".concat(e.id),children:Object(y.jsx)("button",{className:"more_details",children:"More Details"})})})]},e.id)}))})]})}),X=Object(o.b)((function(e){return{data:e.homepage}}))((function(e){var t=e.data;return Object(y.jsxs)("div",{className:"Home",children:[Object(y.jsx)(Q,{movies:t.banner}),Object(y.jsx)(q,{movies:t.nowPlaying,type:"Now Playing"}),Object(y.jsx)(q,{movies:t.trending,type:"Trending"}),Object(y.jsx)(q,{movies:t.topRated,type:"Top Rated"}),Object(y.jsx)(q,{movies:t.upcoming,type:"Upcoming"})]})})),Z=(a(215),function(e){return{type:p,data:e}}),$=Object(o.b)((function(e){return{state:{isLoading:e.stateVariables.movieLoading,movie_data:e.movieData.movieData,searchQuery:e.currentSearch.curr_search}}}),(function(e){return{getCurrentMovie:function(t){return e(function(e){return{type:O,id:e}}(t))}}}))(Object(d.h)((function(e){var t=e.match,a=e.state,n=e.getCurrentMovie;Object(r.useEffect)((function(){n(+t.params.id)}),[]);var c=function(e){return e.map((function(e){return e.name})).join(", ")},s=function(e){for(var t=e.toString(),a="",n=t.length;n>3;){n-=3,a=","+t.substr(n,3)+a}return a=t.substr(0,n)+a},i=null,o=null,l=null;return a.movie_data&&(l=(o=a.movie_data).tagline?o.tagline:"No wind favors s/he who has no destined port...",i="https://image.tmdb.org/t/p/w500/".concat(o.poster_path)),!a.movie_data||a.movie_data&&a.movie_data.id!==+t.params.id?Object(y.jsx)(T,{color:"#daa520",loading:a.loading,size:100}):Object(y.jsx)("div",{className:"container Movie",children:Object(y.jsxs)("div",{className:"row main_row",children:[Object(y.jsx)("div",{className:"col-xs-12 col-md-4 image_container",style:{background:"url(".concat(i,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",minHeight:"500px"}}),Object(y.jsxs)("div",{className:"col-xs-12 col-md-8 movie_data_container",children:[Object(y.jsx)("h1",{className:"title",children:o.original_title}),Object(y.jsx)("h5",{className:"tagline",children:l}),Object(y.jsx)("p",{className:"overview",children:o.overview}),Object(y.jsx)("h5",{className:"genres_title",children:" GENRES: "}),Object(y.jsxs)("h5",{className:"genres",children:[" ",c(o.genres)," "]}),Object(y.jsx)("h5",{className:"prod_companies_title",children:"PRODUCTION COMPANIES:"}),Object(y.jsx)("h5",{className:"prod_companies",children:c(o.production_companies)}),Object(y.jsxs)("div",{className:"container fluid m-0 p-0 mini_cont",children:[Object(y.jsxs)("div",{className:"row mini_cont_row",children:[Object(y.jsxs)("div",{className:"col col-xs-6",children:[Object(y.jsx)("h5",{className:"genres_title",children:" RELEASE DATE: "}),Object(y.jsx)("h5",{className:"genres",children:o.release_date})]}),Object(y.jsxs)("div",{className:"col col-xs-6",children:[Object(y.jsx)("h5",{className:"genres_title",children:" REVENUE: "}),Object(y.jsxs)("h5",{className:"genres",children:["$",0!==o.revenue?s(o.revenue):1e6]})]})]}),Object(y.jsxs)("div",{className:"row mini_cont_row",children:[Object(y.jsxs)("div",{className:"col col-xs-6",children:[Object(y.jsx)("h5",{className:"genres_title",children:" RUNNING TIME: "}),Object(y.jsxs)("h5",{className:"genres",children:[o.runtime," MINS"]})]}),Object(y.jsxs)("div",{className:"col col-xs-6",children:[Object(y.jsx)("h5",{className:"genres_title",children:" IMDB RATING: "}),Object(y.jsxs)("h5",{className:"genres",children:[o.vote_average,"/10 ",Object(y.jsxs)("span",{className:"vote_cnt",children:["(",s(o.vote_count),")"]})]})]})]})]})]})]})})}))),Y=(a(216),a(217),Object(o.b)((function(e){return{state:{isLoading:e.stateVariables.homepageLoading,isSearchLoading:e.stateVariables.searchLoading,isMovieLoading:e.stateVariables.movieLoading,toRedirect:e.stateVariables.redirect,search:e.currentSearch}}}),(function(e){return{getAllMovies:function(){return e({type:x})},handleLiveSearch:function(t,a){return e(H(t,a))}}}))((function(e){var t=e.state,a=e.getAllMovies,n=e.handleLiveSearch;return Object(r.useEffect)((function(){a()}),[]),Object(y.jsx)(l.a,{children:Object(y.jsxs)("div",{className:"App",id:"##",children:[Object(y.jsx)(S,{handleSearch:function(e){n(encodeURI(e.target.value),1)}}),t.isLoading?Object(y.jsx)(T,{color:"#daa520",loading:t.isLoading,size:100}):Object(y.jsxs)(y.Fragment,{children:[t.toRedirect?Object(y.jsx)(d.a,{to:"/"}):null,Object(y.jsxs)(d.d,{children:[Object(y.jsx)(d.b,{path:"/",exact:!0,children:t.search.curr_search?Object(y.jsx)(J,{}):Object(y.jsx)(X,{})}),Object(y.jsx)(d.b,{path:"/movie/:id",component:$}),Object(y.jsx)(d.b,{path:"/auth",component:P}),Object(y.jsx)(d.b,{component:U})]}),t.isLoading||t.isMovieLoading||t.isSearchLoading?null:Object(y.jsx)(V,{})]})]})})}))),K=a(22),ee=a(141),te=a(77),ae=a(137),ne=a.n(ae),ce=a(138),re=a(139),se=a.n(re),ie=a(140),oe=a(23),le={movies:[],currPage:0,totPages:0,curr_search:null},de=a(61),ue={homepageLoading:!1,homepageError:!1,searchLoading:!1,searchError:!1,movieLoading:!1,movieError:!1,redirect:!1,authLoading:!1,authSuccess:!1,authError:""},je={movieData:null},be={banner:[],nowPlaying:[],trending:[],topRated:[],upcoming:[]},he={first_name:"",last_name:"",email:"",_id:"",watchlist:[],token:""},me=Object(K.combineReducers)({currentSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return e=Object(oe.a)({},t.data);default:return e}},stateVariables:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return e=Object(oe.a)(Object(oe.a)({},e),{},Object(de.a)({},t.svType,t.val));default:return e}},movieData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return e=Object(oe.a)(Object(oe.a)({},e),{},{movieData:t.data});default:return e}},homepage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var a={banner:t.data[0].data.results,nowPlaying:t.data[1].data.results,trending:t.data[2].data.results,topRated:t.data[3].data.results,upcoming:t.data[4].data.results};return e=Object(oe.a)({},a);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return delete t.data.password,e=Object(oe.a)({},t.data);case f:return e={first_name:"",last_name:"",email:"",_id:"",watchlist:[],token:""};default:return e}}}),Oe=a(24),pe=a.n(Oe),xe=a(7),ge=a(34),ve=a.n(ge),fe="3e4103174dec93f06df85aeacabc112c",_e="https://api.themoviedb.org/3",Ne=function(e,t){return ve.a.get("".concat(_e,"/search/movie?api_key=").concat(fe,"&query=").concat(e,"&page=").concat(t))},we=function(){return ve.a.get("".concat(_e,"/movie/popular?api_key=").concat(fe,"&language=en-US&page=1"))},ye=function(e){return ve.a.get("".concat(_e).concat(e,"?api_key=").concat(fe))},Se=function(e){return ve.a.get("".concat(_e,"/movie/").concat(e,"?api_key=").concat(fe,"&language=en-US"))},ke="https://movie-pedia-backend.herokuapp.com",Ee=function(e,t){var a;return a="".concat(ke,e?"/login":"/signup"),ve.a.post(a,t,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}})},Le=pe.a.mark(Me),Re=pe.a.mark(De),Ce=pe.a.mark(Pe),Te=pe.a.mark(Ie),Ae=pe.a.mark(Ve);function Me(e){var t,a,n,c,r;return pe.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(t=e.searchQuery,a=e.pageNum,s.prev=1,t&&""!==t){s.next=14;break}return n={movies:[],curr_page:0,totPages:0,curr_search:null},s.next=6,Object(xe.d)(W(n));case 6:return s.next=8,Object(xe.d)(w("redirect",!0));case 8:return s.next=10,Object(xe.c)(500);case 10:return s.next=12,Object(xe.d)(w("redirect",!1));case 12:s.next=24;break;case 14:return s.next=16,Object(xe.d)(w("searchLoading",!0));case 16:return s.next=18,Object(xe.b)(Ne,t,a);case 18:return c=s.sent,r={movies:c.data.results,curr_page:a,totPages:c.data.total_pages,curr_search:t},s.next=22,Object(xe.d)(W(r));case 22:return s.next=24,Object(xe.d)(w("searchLoading",!1));case 24:s.next=32;break;case 26:return s.prev=26,s.t0=s.catch(1),s.next=30,Object(xe.d)(w("searchLoading",!1));case 30:return s.next=32,Object(xe.d)(w("searchError",!0));case 32:case"end":return s.stop()}}),Le,null,[[1,26]])}function De(){var e,t;return pe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(xe.d)(w("homepageLoading",!0));case 3:return e=["/movie/now_playing","/trending/movie/week","/movie/top_rated","/movie/upcoming"],a.t0=xe.a,a.next=7,Object(xe.b)(we);case 7:return a.t1=a.sent,a.next=10,Object(xe.b)(ye,e[0]);case 10:return a.t2=a.sent,a.next=13,Object(xe.b)(ye,e[1]);case 13:return a.t3=a.sent,a.next=16,Object(xe.b)(ye,e[2]);case 16:return a.t4=a.sent,a.next=19,Object(xe.b)(ye,e[3]);case 19:return a.t5=a.sent,a.t6=[a.t1,a.t2,a.t3,a.t4,a.t5],a.next=23,(0,a.t0)(a.t6);case 23:return t=a.sent,a.next=26,Object(xe.d)({type:g,data:t});case 26:return a.next=28,Object(xe.d)(w("homepageLoading",!1));case 28:a.next=36;break;case 30:return a.prev=30,a.t7=a.catch(0),a.next=34,Object(xe.d)(w("homepageLoading",!1));case 34:return a.next=36,Object(xe.d)(w("homepageError",!0));case 36:case"end":return a.stop()}}),Re,null,[[0,30]])}function Pe(e){var t,a;return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,n.prev=1,n.next=4,Object(xe.d)(w("movieLoading",!0));case 4:return n.next=6,Object(xe.b)(Se,t);case 6:return a=n.sent,n.next=9,Object(xe.d)(Z(a.data));case 9:return n.next=11,Object(xe.d)(w("movieLoading",!1));case 11:n.next=19;break;case 13:return n.prev=13,n.t0=n.catch(1),n.next=17,Object(xe.d)(w("movieLoading",!1));case 17:return n.next=19,Object(xe.d)(w("movieError",!0));case 19:case"end":return n.stop()}}),Ce,null,[[1,13]])}function Ie(e){var t,a,n;return pe.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.isLogin,a=e.data,c.prev=1,c.next=4,Object(xe.d)(w("authLoading",!0));case 4:return c.next=6,Object(xe.b)(Ee,t,JSON.stringify(a));case 6:return n=c.sent,c.next=9,Object(xe.d)(N(n.data));case 9:return c.next=11,Object(xe.d)(w("authLoading",!1));case 11:return c.next=13,Object(xe.d)(w("authSuccess",!0));case 13:c.next=21;break;case 15:return c.prev=15,c.t0=c.catch(1),c.next=19,Object(xe.d)(w("authLoading",!1));case 19:return c.next=21,Object(xe.d)(w("authError",c.t0.response.data));case 21:case"end":return c.stop()}}),Te,null,[[1,15]])}function Ve(){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xe.f)(h,Me);case 2:return e.next=4,Object(xe.e)(x,De);case 4:return e.next=6,Object(xe.e)(O,Pe);case 6:return e.next=8,Object(xe.e)(v,Ie);case 8:case"end":return e.stop()}}),Ae)}var Ue={key:"root",storage:ne.a,stateReconciler:se.a},ze=Object(ee.a)(),Ge=Object(K.createStore)(Object(te.a)(Ue,me),Object(ie.composeWithDevTools)(Object(K.applyMiddleware)(ze))),Be=Object(te.b)(Ge);ze.run(Ve),i.a.render(Object(y.jsx)(o.a,{store:Ge,children:Object(y.jsx)(ce.PersistGate,{loading:Object(y.jsx)(y.Fragment,{}),persistor:Be,children:Object(y.jsx)(Y,{})})}),document.getElementById("root"))}},[[239,1,2]]]);
//# sourceMappingURL=main.35b454eb.chunk.js.map