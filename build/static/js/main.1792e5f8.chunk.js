(this["webpackJsonpipo-landing"]=this["webpackJsonpipo-landing"]||[]).push([[0],{29:function(e,a,t){e.exports=t(71)},34:function(e,a,t){},37:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n,l=t(0),c=t.n(l),r=t(24),s=t.n(r),m=t(5),i=(t(34),t(2)),o=t(25),E=t(27),u="/",f="/pawnshop",_="/trading",C="/usa",h="/contacts",d=991,g={number:"69"},p={facebook:"https://www.facebook.com/",instagram:"https://www.instagram.com/",youtube:"https://www.youtube.com/",telegram:"https://t.me/",viber:"viber://add?number="},v=(Object(E.a)(n||(n=Object(o.a)(["\n  from {\n    opacity: 0;\n    transform: translate3d(0, 50px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"]))),t(7)),w=t(28),N=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a?(Array.isArray(a)||(a=a.split(" ")),a=a.filter((function(e){return e})),[e].concat(Object(w.a)(a)).join(" ")):e},b={ru:{},en:{},es:{}},k=(function(){var e=localStorage.getItem("lang");if(e)return e;switch(navigator.language){case"en-US":return"en";case"ru-RU":return"ru";case"es-ES":return"es";default:navigator.language&&b[navigator.language]&&navigator.language}}(),Object(l.createContext)({words:{},changeLang:function(){},selectedLang:""}));k.displayName="MultiLangContext";t(37);var x=Object(i.g)((function(e){var a=Object(i.f)(),t=Object(l.useState)(!1),n=Object(v.a)(t,2),r=n[0],s=n[1],o=Object(l.useContext)(k),E=(o.selectedLang,o.changeLang),p=function(e,a){var t=Object(l.useState)("IS_GREATER_THAN"===e?window.innerWidth>=a:window.innerWidth<=a),n=Object(v.a)(t,2),c=n[0],r=n[1];return Object(l.useEffect)((function(){var t=function(){return r("IS_GREATER_THAN"===e?window.innerWidth>=a:window.innerWidth<=a)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[a,e]),c}("IS_GREATER_THAN",d),w=function(){p||s(!r)};return Object(l.useEffect)((function(){var e,t=(e=a.location.search,e?(/^[?#]/.test(e)?e.slice(1):e).split("&").reduce((function(e,a){var t=a.split("="),n=Object(v.a)(t,2),l=n[0],c=n[1];return e[l]=c?decodeURIComponent(c.replace(/\+/g," ")):"",e}),{}):{}).lang;t&&E(t)}),[a.location.search]),c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__container"},c.a.createElement("button",{className:N("header__bars",[r&&"open"]),onClick:function(){return s(!r)}}),c.a.createElement("a",{className:"header__logotype",href:"/#hero"}),c.a.createElement("div",{className:"header__nav-wrapper"},c.a.createElement("nav",{className:"header__nav"},c.a.createElement("div",{className:"header__links"},c.a.createElement(m.b,{to:u,onClick:function(){return w()}},"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"),c.a.createElement(m.b,{to:f,onClick:function(){return w()}},"\u0410\u0432\u0442\u043e\u043b\u043e\u043c\u0431\u0430\u0440\u0434"),c.a.createElement(m.b,{to:_,onClick:function(){return w()}},"\u0412\u0438\u043a\u0443\u043f/\u043f\u0440\u043e\u0434\u0430\u0436 \u0430\u0432\u0442\u043e"),c.a.createElement(m.b,{to:C,onClick:function(){return w()}},"\u041f\u0440\u0438\u0433\u043e\u043d \u0430\u0432\u0442\u043e i\u0437 \u0421\u0428\u0410"),c.a.createElement(m.b,{to:h,onClick:function(){return w()}},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438")),c.a.createElement("a",{href:"tel:".concat(g.number),className:"link-btn link-btn--dark link-btn--sm",rel:"noopener noreferrer"},c.a.createElement("span",null,"\u0417\u0430\u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443\u0432\u0430\u0442\u0438"),c.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("g",{clipPath:"url(#clip0)"},c.a.createElement("path",{d:"M15.5646 11.7424L13.3317 9.50954C12.5343 8.71209 11.1786 9.0311 10.8596 10.0678C10.6204 10.7855 9.82296 11.1842 9.10526 11.0247C7.51037 10.626 5.35726 8.5526 4.95854 6.87797C4.71931 6.16024 5.19778 5.36279 5.91548 5.12359C6.95216 4.80461 7.27113 3.44895 6.47369 2.65151L4.24084 0.418659C3.60288 -0.139553 2.64595 -0.139553 2.08774 0.418659L0.572591 1.93381C-0.942555 3.5287 0.73208 7.75516 4.48007 11.5032C8.22807 15.2511 12.4545 17.0056 14.0494 15.4106L15.5646 13.8955C16.1228 13.2575 16.1228 12.3006 15.5646 11.7424Z",fill:"white"})),c.a.createElement("defs",null,c.a.createElement("clipPath",{id:"clip0"},c.a.createElement("rect",{width:"16",height:"16",fill:"white"}))))))))))})),j=(t(41),t(42),function(e){return c.a.createElement("div",{className:"social"},c.a.createElement("a",{href:p.facebook,className:"social__link",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("svg",{width:"9",height:"17",viewBox:"0 0 9 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M8.40876 9.5625H5.94526V17H2.66058V9.5625H0V6.47461H2.66058V4.15039C2.66058 3.26497 2.82482 2.51237 3.15328 1.89258C3.48175 1.27279 3.94161 0.807943 4.53285 0.498047C5.14599 0.166016 5.84672 0 6.63504 0C6.9854 0 7.35766 0.0221354 7.75182 0.0664062C8.14599 0.0885417 8.45255 0.121745 8.67153 0.166016L9 0.199219V2.82227H7.68613C7.07299 2.82227 6.62409 2.98828 6.33942 3.32031C6.07664 3.63021 5.94526 4.01758 5.94526 4.48242V6.47461H8.86861L8.40876 9.5625Z",fill:"white"}))),c.a.createElement("a",{href:p.instagram,className:"social__link",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("svg",{width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M5.38839 5.42634C6.24851 4.56622 7.28571 4.13616 8.5 4.13616C9.71429 4.13616 10.7388 4.56622 11.5737 5.42634C12.4338 6.26116 12.8638 7.28571 12.8638 8.5C12.8638 9.71429 12.4338 10.7515 11.5737 11.6116C10.7388 12.4464 9.71429 12.8638 8.5 12.8638C7.28571 12.8638 6.24851 12.4464 5.38839 11.6116C4.55357 10.7515 4.13616 9.71429 4.13616 8.5C4.13616 7.28571 4.55357 6.26116 5.38839 5.42634ZM6.48884 10.5112C7.04539 11.0677 7.71577 11.346 8.5 11.346C9.28423 11.346 9.95461 11.0677 10.5112 10.5112C11.0677 9.95461 11.346 9.28423 11.346 8.5C11.346 7.71577 11.0677 7.04539 10.5112 6.48884C9.95461 5.93229 9.28423 5.65402 8.5 5.65402C7.71577 5.65402 7.04539 5.93229 6.48884 6.48884C5.93229 7.04539 5.65402 7.71577 5.65402 8.5C5.65402 9.28423 5.93229 9.95461 6.48884 10.5112ZM13.7366 3.26339C13.939 3.44048 14.0402 3.66815 14.0402 3.94643C14.0402 4.2247 13.939 4.46503 13.7366 4.66741C13.5595 4.86979 13.3318 4.97098 13.0536 4.97098C12.7753 4.97098 12.535 4.86979 12.3326 4.66741C12.1302 4.46503 12.029 4.2247 12.029 3.94643C12.029 3.66815 12.1302 3.44048 12.3326 3.26339C12.535 3.06101 12.7753 2.95982 13.0536 2.95982C13.3318 2.95982 13.5595 3.06101 13.7366 3.26339ZM16.9621 5.00893C16.9874 5.69196 17 6.85565 17 8.5C17 10.1443 16.9874 11.308 16.9621 11.9911C16.8862 13.5342 16.4182 14.7359 15.558 15.596C14.7232 16.4308 13.5342 16.8735 11.9911 16.9241C11.308 16.9747 10.1443 17 8.5 17C6.85565 17 5.69196 16.9747 5.00893 16.9241C3.46577 16.8482 2.27679 16.3929 1.44196 15.558C1.1131 15.2545 0.84747 14.9003 0.645089 14.4955C0.442708 14.0908 0.290923 13.6987 0.189732 13.3192C0.113839 12.9397 0.0758929 12.497 0.0758929 11.9911C0.0252976 11.308 0 10.1443 0 8.5C0 6.85565 0.0252976 5.67932 0.0758929 4.97098C0.151786 3.45313 0.607143 2.27679 1.44196 1.44196C2.27679 0.581845 3.46577 0.113839 5.00893 0.0379464C5.69196 0.0126488 6.85565 0 8.5 0C10.1443 0 11.308 0.0126488 11.9911 0.0379464C13.5342 0.113839 14.7232 0.581845 15.558 1.44196C16.4182 2.27679 16.8862 3.46577 16.9621 5.00893ZM15.1406 13.5089C15.2165 13.3065 15.2798 13.0536 15.3304 12.75C15.381 12.4211 15.4189 12.0417 15.4442 11.6116C15.4695 11.1563 15.4821 10.7894 15.4821 10.5112C15.4821 10.2329 15.4821 9.84077 15.4821 9.33482C15.4821 8.82887 15.4821 8.5506 15.4821 8.5C15.4821 8.42411 15.4821 8.14583 15.4821 7.66518C15.4821 7.15923 15.4821 6.76711 15.4821 6.48884C15.4821 6.21057 15.4695 5.8564 15.4442 5.42634C15.4189 4.97098 15.381 4.59152 15.3304 4.28795C15.2798 3.95908 15.2165 3.69345 15.1406 3.49107C14.8371 2.70685 14.2932 2.16295 13.5089 1.85938C13.3065 1.78348 13.0409 1.72024 12.7121 1.66964C12.4085 1.61905 12.029 1.5811 11.5737 1.5558C11.1436 1.53051 10.7894 1.51786 10.5112 1.51786C10.2582 1.51786 9.86607 1.51786 9.33482 1.51786C8.82887 1.51786 8.5506 1.51786 8.5 1.51786C8.4494 1.51786 8.17113 1.51786 7.66518 1.51786C7.15923 1.51786 6.76711 1.51786 6.48884 1.51786C6.21057 1.51786 5.84375 1.53051 5.38839 1.5558C4.95833 1.5811 4.57887 1.61905 4.25 1.66964C3.94643 1.72024 3.69345 1.78348 3.49107 1.85938C2.70685 2.16295 2.16295 2.70685 1.85938 3.49107C1.78348 3.69345 1.72024 3.95908 1.66964 4.28795C1.61905 4.59152 1.5811 4.97098 1.5558 5.42634C1.53051 5.8564 1.51786 6.21057 1.51786 6.48884C1.51786 6.74182 1.51786 7.13393 1.51786 7.66518C1.51786 8.17113 1.51786 8.4494 1.51786 8.5C1.51786 8.60119 1.51786 8.84152 1.51786 9.22098C1.51786 9.57515 1.51786 9.87872 1.51786 10.1317C1.51786 10.3594 1.51786 10.6629 1.51786 11.0424C1.54315 11.4219 1.56845 11.7507 1.59375 12.029C1.61905 12.282 1.65699 12.5476 1.70759 12.8259C1.75818 13.1042 1.80878 13.3318 1.85938 13.5089C2.18824 14.2932 2.73214 14.8371 3.49107 15.1406C3.69345 15.2165 3.94643 15.2798 4.25 15.3304C4.57887 15.381 4.95833 15.4189 5.38839 15.4442C5.84375 15.4695 6.19792 15.4821 6.45089 15.4821C6.72917 15.4821 7.12128 15.4821 7.62723 15.4821C8.15848 15.4821 8.4494 15.4821 8.5 15.4821C8.57589 15.4821 8.85417 15.4821 9.33482 15.4821C9.84077 15.4821 10.2329 15.4821 10.5112 15.4821C10.7894 15.4821 11.1436 15.4695 11.5737 15.4442C12.029 15.4189 12.4085 15.381 12.7121 15.3304C13.0409 15.2798 13.3065 15.2165 13.5089 15.1406C14.2932 14.8118 14.8371 14.2679 15.1406 13.5089Z",fill:"white"}))),c.a.createElement("a",{href:p.viber,className:"social__link",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("svg",{width:"21",height:"22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M20.225 12.735c.657-5.524-.315-9.012-2.068-10.59h.001C15.33-.55 5.776-.95 2.392 2.264.872 3.837.337 6.145.278 9.001c-.059 2.857-.128 8.21 4.86 9.661h.004l-.005 2.218s-.034.898.54 1.079c.656.212.953-.205 2.995-2.643 3.413.296 6.035-.382 6.333-.481.69-.231 4.59-.747 5.22-6.1zm-11.217 5.02s-2.16 2.695-2.832 3.394c-.22.228-.461.207-.458-.244 0-.297.017-3.682.017-3.682-4.229-1.212-3.98-5.77-3.934-8.153.046-2.386.483-4.34 1.77-5.655C6.54.632 14.915 1.254 17.049 3.26c2.609 2.312 1.68 8.846 1.686 9.07-.536 4.467-3.697 4.75-4.278 4.944-.249.082-2.554.675-5.449.482z",fill:"#fff"}),c.a.createElement("path",{d:"M10.204 3.939c-.353 0-.353.55 0 .554 2.738.022 4.993 1.93 5.017 5.43 0 .37.541.366.537-.004h-.001c-.03-3.772-2.492-5.959-5.553-5.98z",fill:"#fff"}),c.a.createElement("path",{d:"M13.805 9.344c-.008.364.532.382.536.012.045-2.08-1.237-3.793-3.647-3.973-.353-.026-.39.529-.038.554 2.09.159 3.191 1.585 3.15 3.407zM13.228 11.71c-.453-.263-.914-.1-1.105.158l-.399.516c-.202.262-.58.227-.58.227C8.38 11.881 7.64 8.99 7.64 8.99s-.033-.392.22-.602l.498-.412c.25-.198.407-.675.153-1.143-.678-1.226-1.134-1.648-1.366-1.973-.243-.305-.61-.374-.991-.168h-.009c-.793.464-1.66 1.332-1.383 2.226.474.942 1.345 3.946 4.12 6.216 1.305 1.073 3.37 2.173 4.246 2.427l.008.013c.863.288 1.703-.614 2.151-1.43v-.007c.2-.395.133-.77-.157-1.014-.516-.502-1.293-1.057-1.903-1.413z",fill:"#fff"}),c.a.createElement("path",{d:"M11.072 7.429c.88.051 1.308.511 1.354 1.456.016.37.552.344.536-.025-.059-1.234-.702-1.922-1.861-1.986-.353-.021-.386.534-.03.555z",fill:"#fff"}))))}),A=function(){return c.a.createElement("footer",{id:"footer",className:"footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"footer__top"},c.a.createElement("a",{className:"footer__logotype",href:"/#hero"},c.a.createElement("img",{src:"/media/images/svg/logotype-light.svg",alt:""})),c.a.createElement("nav",{className:"footer__nav"},c.a.createElement("a",{href:"#hero"},"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"),c.a.createElement("a",{href:"#calculator"},"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"),c.a.createElement("a",{href:"#conditions"},"\u0423\u043c\u043e\u0432\u0438"),c.a.createElement("a",{href:"#reviews"},"\u0412\u0456\u0434\u0433\u0443\u043a\u0438"),c.a.createElement("a",{href:"#FAQ"},"FAQ"),c.a.createElement("a",{href:"#contacts"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"))),c.a.createElement("div",{className:"footer__bottom"},c.a.createElement("p",{className:"footer__copyright"},"Copyright \xa9 ",(new Date).getFullYear(),", PR CREDIT"),c.a.createElement("div",{className:"footer__social"},c.a.createElement("p",null,"\u0417\u0432'\u044f\u0436\u0456\u0442\u044c\u0441\u044f \u0437 \u043d\u0430\u043c\u0438:"),c.a.createElement(j,null)))))},L=(t(43),t(44),function(){return c.a.createElement("section",{className:"hero",id:"hero"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"hero__container"},c.a.createElement("h1",{className:"title hero__title"},"\u0410\u0432\u0442\u043e\u043b\u043e\u043c\u0431\u0430\u0440\u0434 ",c.a.createElement("span",null," PR CREDIT")," \u0443 \u041a\u0438\u0454\u0432\u0456"),c.a.createElement("h3",{className:"hero__subtitle hidden"}),c.a.createElement("a",{href:"tel:".concat(g.number),className:"link-btn link-btn--dark",rel:"noopener noreferrer"},c.a.createElement("span",null,"\u0417\u0430\u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443\u0432\u0430\u0442\u0438"),c.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("g",null,c.a.createElement("path",{d:"M15.5646 11.7424L13.3317 9.50954C12.5343 8.71209 11.1786 9.0311 10.8596 10.0678C10.6204 10.7855 9.82296 11.1842 9.10526 11.0247C7.51037 10.626 5.35726 8.5526 4.95854 6.87797C4.71931 6.16024 5.19778 5.36279 5.91548 5.12359C6.95216 4.80461 7.27113 3.44895 6.47369 2.65151L4.24084 0.418659C3.60288 -0.139553 2.64595 -0.139553 2.08774 0.418659L0.572591 1.93381C-0.942555 3.5287 0.73208 7.75516 4.48007 11.5032C8.22807 15.2511 12.4545 17.0056 14.0494 15.4106L15.5646 13.8955C16.1228 13.2575 16.1228 12.3006 15.5646 11.7424Z",fill:"white"})),c.a.createElement("defs",null,c.a.createElement("clipPath",{id:"clip0"},c.a.createElement("rect",{width:"16",height:"16",fill:"white"}))))))),c.a.createElement("a",{className:"hero__scroll",href:"#calculator"}))}),R=t(26),y=t.n(R),S=(t(60),{dots:!0,arrows:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:1,centerPadding:"20px",responsive:[{breakpoint:1100,settings:{slidesToShow:3}},{breakpoint:991,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]}),T=function(){return c.a.createElement("section",{className:"section team team__section",id:"reviews"},c.a.createElement("div",{className:"container"},c.a.createElement("h3",{className:"title team__title"},"\u041d\u0430\u0448\u0456 \u0432\u0456\u0434\u0433\u0443\u043a\u0438"),c.a.createElement(y.a,S,c.a.createElement("div",{className:"team__item"},c.a.createElement("div",{className:"team__flex"},c.a.createElement("img",{src:"/media/images/sections/reviews/1.jpg",alt:"",className:"team__image"}),c.a.createElement("span",{className:"team__name"},"\u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f")),c.a.createElement("p",{className:"team__text"},"\u041d\u0430\u0434\u0435\u0436\u043d\u044b\u0439 \u0430\u0432\u0442\u043e\u043b\u043e\u043c\u0431\u0430\u0440\u0434, \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0439 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u043d\u043e\u0439, \u043d\u043e \u0438 \u043c\u043e\u0438\u043c\u0438 \u0437\u043d\u0430\u043a\u043e\u043c\u044b\u043c\u0438.",c.a.createElement("br",null)," \u041f\u0440\u043e\u0446\u0435\u0441\u0441 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u0440\u0435\u0434\u0438\u0442\u0430 \u043e\u0447\u0435\u043d\u044c \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0438 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0439, \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u0441\u043f\u0440\u0430\u0432\u043e\u043a \u043e \u0434\u043e\u0445\u043e\u0434\u0430\u0445, \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u044b\u0445 \u0438\u0441\u0442\u043e\u0440\u0438\u0439 \u0438 \u043f\u0440\u043e\u0447\u0435\u0439 \u0431\u0443\u043c\u0430\u0436\u043d\u043e\u0439 \u0432\u043e\u043b\u043e\u043a\u0438\u0442\u044b.",c.a.createElement("br",null)," \u0420\u0435\u0430\u043b\u044c\u043d\u043e \u043a\u0440\u0443\u0442\u043e!")),c.a.createElement("div",{className:"team__item"},c.a.createElement("div",{className:"team__flex"},c.a.createElement("img",{src:"/media/images/sections/reviews/0.jpg",alt:"",className:"team__image"}),c.a.createElement("span",{className:"team__name"},"\u0414\u043c\u0438\u0442\u0440\u0438\u0439")),c.a.createElement("p",{className:"team__text"},"\u0427\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f, \u0432 \u044d\u0442\u043e\u043c \u0443\u0431\u0435\u0434\u0438\u043b\u0441\u044f \u043b\u0438\u0447\u043d\u043e.",c.a.createElement("br",null)," \u0412\u0441\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0432 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u0437\u044f\u0442\u044c \u043e\u0442\u0441\u0440\u043e\u0447\u043a\u0443.",c.a.createElement("br",null)," \u0412 \u043e\u0431\u0449\u0435\u043c, \u043c\u043d\u0435 \u043f\u043e\u043c\u043e\u0433\u043b\u0438, \u044f \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u0435\u043d!")),c.a.createElement("div",{className:"team__item"},c.a.createElement("div",{className:"team__flex"},c.a.createElement("img",{src:"/media/images/sections/reviews/2.jpg",alt:"",className:"team__image"}),c.a.createElement("span",{className:"team__name"},"\u0410\u043d\u0434\u0440\u0435\u0439")),c.a.createElement("p",{className:"team__text"},"\u0412\u0441\u044f \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043a\u0440\u0435\u0434\u0438\u0442\u0430 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u0430\u044f \u0438 \u043b\u0435\u0433\u043a\u0430\u044f, \u043d\u0435 \u043d\u0430\u0434\u043e \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043b\u0438\u0448\u043d\u0438\u0445 \u0431\u0443\u043c\u0430\u0436\u0435\u043a \u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u0435\u0439.",c.a.createElement("br",null)," \u041e\u0442\u043b\u0438\u0447\u043d\u044b\u0439 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b, \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u0435\u0442 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0438 \u0432\u0435\u0436\u043b\u0438\u0432\u043e \u043f\u043e \u043b\u044e\u0431\u043e\u043c\u0443 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0435\u043c\u0443 \u0432\u043e\u043f\u0440\u043e\u0441\u0443.")),c.a.createElement("div",{className:"team__item"},c.a.createElement("div",{className:"team__flex"},c.a.createElement("img",{src:"/media/images/sections/reviews/3.jpg",alt:"",className:"team__image"}),c.a.createElement("span",{className:"team__name"},"\u0413\u0435\u043d\u043d\u0430\u0434\u0438\u0439")),c.a.createElement("p",{className:"team__text"},'\u0412\u0441\u0435\u043c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u044e \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u043e\u0435 \u0430\u0433\u0435\u043d\u0441\u0442\u0432\u043e "PR CREDIT"-\u0442\u0430\u043a \u043a\u0430\u043a \u0432 \u043d\u0435\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044b-\u0440\u0435\u0431\u044f\u0442\u0430 \u043a\u043e\u043c\u043f\u0435\u0442\u0435\u043d\u0442\u043d\u044b \u0432 \u0441\u0432\u043e\u0435\u043c \u0434\u0435\u043b\u0435,\u0447\u0442\u043e \u0441\u0440\u0430\u0437\u0443 \u043f\u043e\u0440\u0430\u0434\u043e\u0432\u0430\u043b\u043e!!!',c.a.createElement("br",null),'\u0421\u043f\u0430\u0441\u0438\u0431\u043e,\u0432\u0430\u043c "PR CREDIT"-\u0437\u0430 \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u0441\u043a\u0438\u0439 \u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434!!!')),c.a.createElement("div",{className:"team__item"},c.a.createElement("div",{className:"team__flex"},c.a.createElement("img",{src:"/media/images/sections/reviews/4.jpg",alt:"",className:"team__image"}),c.a.createElement("span",{className:"team__name"},"\u041a\u0430\u0440\u0438\u043d\u0430")),c.a.createElement("p",{className:"team__text"},"\u0417\u0434\u0435\u0441\u044c \u043e\u0447\u0435\u043d\u044c \u0443\u0434\u043e\u0431\u043d\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f, \u043d\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u0432 \u043b\u043e\u043c\u0431\u0430\u0440\u0434\u0435, \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u0437\u044f\u0442\u044c \u043e\u0442\u0441\u0440\u043e\u0447\u043a\u0443 \u043f\u043b\u0430\u0442\u0435\u0436\u0430 \u0438 \u043f\u043e\u0433\u0430\u0441\u0438\u0442\u044c \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u043e\u0437\u0436\u0435.")))))},I=(t(61),function(e){var a=e.ask,t=e.activeItem,n=e.setActiveItem;return c.a.createElement("li",{className:"FAQ__item","data-is-active":t},c.a.createElement("h5",{onClick:function(){n(t?null:a)}},a,c.a.createElement("span",{className:"FAQ__icon"})),e.children)}),M=function(){var e=Object(l.useState)(null),a=Object(v.a)(e,2),t=a[0],n=a[1];return c.a.createElement("section",{className:"section FAQ",id:"FAQ"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"FAQ__wrapper"},c.a.createElement("div",{className:"FAQ__title-block"},c.a.createElement("h2",{className:"FAQ__title title title--light"},c.a.createElement("span",null,"FAQ")," ",c.a.createElement("br",null)," \u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456 \u043d\u0430 \u0447\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u043d\u0456 \u043f\u0438\u0442\u0430\u043d\u043d\u044f")),c.a.createElement("ul",{className:"FAQ__table"},[{ask:"\u0427\u0438 \u043c\u043e\u0436\u043b\u0438\u0432\u0435 \u0434\u043e\u0441\u0442\u0440\u043e\u043a\u043e\u0432\u0435 \u043f\u043e\u0433\u0430\u0448\u0435\u043d\u043d\u044f \u043f\u043e\u0437\u0438\u043a\u0438?",answers:["\u0422\u0430\u043a, \u0442\u0430\u043a\u0435 \u043f\u043e\u0433\u0430\u0448\u0435\u043d\u043d\u044f \u043c\u043e\u0436\u043b\u0438\u0432\u043e. \u0412 \u043d\u0430\u0448\u0456\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0457 \u0434\u043e\u0441\u0442\u0440\u043e\u043a\u043e\u0432\u0435 \u043f\u043e\u0433\u0430\u0448\u0435\u043d\u043d\u044f \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u0431\u0435\u0437 \u0431\u0443\u0434\u044c-\u044f\u043a\u0438\u0445 \u0448\u0442\u0440\u0430\u0444\u043d\u0438\u0445 \u0441\u0430\u043d\u043a\u0446\u0456\u0439."]},{ask:"\u0412\u0456\u0434 \u0447\u043e\u0433\u043e \u0437\u0430\u043b\u0435\u0436\u0430\u0442\u044c \u0443\u043c\u043e\u0432\u0438 \u043f\u043e\u0437\u0438\u043a\u0438 (\u0432\u0456\u0434\u0441\u043e\u0442\u043a\u043e\u0432\u0430 \u0441\u0442\u0430\u0432\u043a\u0430 \u0456 \u0441\u0443\u043c\u0430 \u0432\u0438\u0434\u0430\u0447\u0456)?",answers:["\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u0430, \u043d\u0430 \u044f\u043a\u0443 \u043c\u043e\u0436\u0435 \u0440\u043e\u0437\u0440\u0430\u0445\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u043d\u0430\u0448 \u043a\u043b\u0456\u0454\u043d\u0442, \u0437\u0430\u043b\u0435\u0436\u0438\u0442\u044c \u0432\u0456\u0434: \u0432\u0430\u0440\u0442\u043e\u0441\u0442\u0456 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0456\u043b\u044f, \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u043e\u0457 \u0456\u0441\u0442\u043e\u0440\u0456\u0457 \u043a\u043b\u0456\u0454\u043d\u0442\u0430, \u0430 \u0442\u0430\u043a\u043e\u0436, \u043f\u0440\u0430\u0432\u043e\u0432\u043e\u0457 \u0444\u043e\u0440\u043c\u0438 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u043e\u0437\u0438\u043a\u0438 (\u0447\u0438 \u0431\u0443\u0434\u0435 \u0446\u0435 \u043a\u0440\u0435\u0434\u0438\u0442 \u0430\u0431\u043e \u043b\u0456\u0437\u0438\u043d\u0433, \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0456\u043b\u044c \u0431\u0443\u0434\u0435 \u0437\u0430\u043b\u0438\u0448\u0430\u0442\u0438\u0441\u044f \u0443 \u043d\u0430\u0441 \u043d\u0430 \u0441\u0442\u043e\u044f\u043d\u0446\u0456 \u0430\u0431\u043e \u0432 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u0456 \u0443 \u043a\u043b\u0456\u0454\u043d\u0442\u0430).\n\n\u0412\u0456\u0434\u0441\u043e\u0442\u043a\u043e\u0432\u0430 \u0441\u0442\u0430\u0432\u043a\u0430 \u0432\u0438\u0437\u043d\u0430\u0447\u0430\u0454\u0442\u044c\u0441\u044f \u0442\u0430\u043a \u0441\u0430\u043c\u043e \u0456\u043d\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043b\u044c\u043d\u043e \u0456 \u0437\u0430\u043b\u0435\u0436\u0438\u0442\u044c \u0432\u0456\u0434 \u0442\u0435\u0440\u043c\u0456\u043d\u0443 \u043f\u043e\u0437\u0438\u043a\u0438, \u0441\u0443\u043c\u0438 \u0456 \u043f\u0440\u0430\u0432\u043e\u0432\u043e\u0457 \u0444\u043e\u0440\u043c\u0438 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044f \u0442\u0430\u043a\u043e\u0457 \u043f\u043e\u0437\u0438\u043a\u0438."]},{ask:"\u041d\u0430 \u044f\u043a\u0438\u0439 \u0442\u0435\u0440\u043c\u0456\u043d \u0432\u0438\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u043a\u0440\u0435\u0434\u0438\u0442 \u043f\u0456\u0434 \u0437\u0430\u0441\u0442\u0430\u0432\u0443 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0456\u043b\u044f?",answers:["\u041c\u0456\u043d\u0456\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u0442\u0435\u0440\u043c\u0456\u043d \u043a\u0440\u0435\u0434\u0438\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u044f\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0435\u043d\u0438\u0439 \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0432\u0441\u0442\u0432\u043e\u043c - 2 \u043c\u0456\u0441\u044f\u0446\u0456, \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 - 12 \u043c\u0456\u0441\u044f\u0446\u0456\u0432, \u0437 \u043f\u0440\u0430\u0432\u043e\u043c \u043f\u0440\u043e\u043b\u043e\u043d\u0433\u0430\u0446\u0456\u0457 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443 \u043d\u0430 \u0442\u0430\u043a\u0438\u0439 \u0436\u0435 \u0442\u0435\u0440\u043c\u0456\u043d.\n\n\u041c\u0456\u043d\u0456\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u0442\u0435\u0440\u043c\u0456\u043d (2 \u043c\u0456\u0441\u044f\u0446\u0456), \u0436\u043e\u0434\u043d\u0438\u043c \u0447\u0438\u043d\u043e\u043c \u043d\u0435 \u043e\u0431\u043c\u0435\u0436\u0443\u0454 \u043f\u0440\u0430\u0432\u043e \u043a\u043b\u0456\u0454\u043d\u0442\u0430 \u043f\u043e\u0433\u0430\u0441\u0438\u0442\u0438 \u043f\u043e\u0437\u0438\u043a\u0443 \u0434\u043e\u0441\u0442\u0440\u043e\u043a\u043e\u0432\u043e \u0456 \u0431\u0435\u0437 \u0448\u0442\u0440\u0430\u0444\u043d\u0438\u0445 \u0441\u0430\u043d\u043a\u0446\u0456\u0439."]},{ask:"\u0427\u0438 \u043c\u043e\u0436\u043b\u0438\u0432\u0438\u0439 \u043a\u0440\u0435\u0434\u0438\u0442 \u043f\u0456\u0434 \u0437\u0430\u0441\u0442\u0430\u0432\u0443 \u0430\u0432\u0442\u043e, \u044f\u043a\u0449\u043e \u0432 \u043c\u0438\u043d\u0443\u043b\u043e\u043c\u0443 \u0431\u0443\u043b\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0438 \u0437 \u043a\u0440\u0435\u0434\u0438\u0442\u043d\u043e\u044e \u0456\u0441\u0442\u043e\u0440\u0456\u0454\u044e?",answers:["\u041c\u043e\u0436\u043b\u0438\u0432\u0438\u0439, \u0430\u043b\u0435 \u043c\u0438 \u0437\u043c\u0443\u0448\u0435\u043d\u0456 \u0432\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u0446\u0435\u0439 \u0440\u0438\u0437\u0438\u043a \u0456 \u0432\u0438\u0434\u0430\u0442\u0438 \u0442\u0440\u043e\u0445\u0438 \u043c\u0435\u043d\u0448\u0443 \u0441\u0443\u043c\u0443 \u0430\u0431\u043e \u0437\u0430\u043f\u0440\u043e\u043f\u043e\u043d\u0443\u0432\u0430\u0442\u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0443 \u0441\u0443\u043c\u0443, \u0430\u043b\u0435 \u0437 \u0431\u0435\u0437\u043f\u0435\u0447\u043d\u043e\u0457 \u043f\u0440\u0430\u0432\u043e\u0432\u043e\u044e \u0444\u043e\u0440\u043c\u043e\u044e \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u043e\u0437\u0438\u043a\u0438."]}].map((function(e){return c.a.createElement(I,{ask:e.ask,setActiveItem:n,activeItem:t===e.ask,key:e.ask},c.a.createElement("div",{className:"FAQ__text"},e.answers.map((function(e){return c.a.createElement("p",{key:e,dangerouslySetInnerHTML:{__html:e}})}))))}))))))},O=t(20),F=(t(62),function(){return c.a.createElement("section",{id:"contacts",className:"section contacts"},c.a.createElement("div",{className:"container"},c.a.createElement("h2",{className:"title contacts__title"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"),c.a.createElement("div",{className:"contacts__items"},c.a.createElement("div",{className:"contacts-map"},c.a.createElement(O.a,{defaultCenter:[50.3140768,29.9590459],defaultZoom:9.5},c.a.createElement(O.b,{width:50,anchor:[50.3140768,29.9590459]}))),c.a.createElement("div",{className:"contacts-info"},c.a.createElement("p",{className:"contacts-info__text"},c.a.createElement("span",null,"\u041d\u0430\u0437\u0432\u0430:")," PR CREDIT"),c.a.createElement("p",{className:"contacts-info__text"},c.a.createElement("span",null,"\u0410\u0434\u0440\u0435\u0441\u0430:")," \u043c. \u041a\u0438\u0457\u0432, \u0432\u0443\u043b. \u0422\u0443\u043f\u043e\u043b\u0454\u0432\u0430, 1\u0411"),c.a.createElement("p",{className:"contacts-info__text"},c.a.createElement("span",null,"\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u043d\u0430 Google Maps: "),c.a.createElement("a",{href:"https://goo.gl/maps/rf2SE1ggbB5Ec4fv8",target:"_blank",rel:"noopener noreferrer"}," https://goo.gl/maps/rf2SE1ggbB5Ec4fv8")),c.a.createElement("p",{className:"contacts-info__text"},c.a.createElement("span",null,"\u0420\u043e\u0431\u043e\u0447\u0456 \u0433\u043e\u0434\u0438\u043d\u0438:")," 07:00 - 20:00 \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0434\u043d\u044f"),c.a.createElement("p",{className:"contacts-info__text"},c.a.createElement("span",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u0434\u043b\u044f \u0434\u043e\u0432\u0456\u0434\u043a\u0438 \u0442\u0430 \u0431\u0440\u043e\u043d\u044e\u0432\u0430\u043d\u043d\u044f: "),c.a.createElement("a",{href:"tel:".concat(g.number)}," +380 (50) 050 50 50")),c.a.createElement("p",{className:"contacts-info__text"},c.a.createElement("span",null,"\u0421\u043e\u0446\u0456\u0430\u043b\u044c\u043d\u0456 \u043c\u0435\u0440\u0435\u0436\u0456:")),c.a.createElement(j,null)))))}),Q=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(L,null),c.a.createElement(T,null),c.a.createElement(M,null),c.a.createElement(F,null))},H=(t(63),t(13),t(64),t(65),t(66),t(67),t(68),t(69),t(70),function(){return c.a.createElement("div",{className:"root__container"},c.a.createElement("div",{className:"content"},c.a.createElement(x,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:u,component:Q}))),c.a.createElement(A,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(m.a,null,c.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.1792e5f8.chunk.js.map