(this.webpackJsonppublishing=this.webpackJsonppublishing||[]).push([[0],{71:function(e,n,t){e.exports=t(80)},80:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(63),i=t.n(o),l=t(60),c=t(28),m=t(2),s=t(1),u=t(3),d=t(4);function p(){var e=Object(m.a)(["\n  width: 100%;\n  height: 40px;\n  border: ",";\n  border-radius: ",";\n  text-align: center;\n  padding: 7px 0px;\n  font-size: 14px;\n  cursor: pointer;\n  background-color: ",";\n  color: ",";\n\n  transition: all 0.2s ease-in-out;\n  :hover {\n    background-color: ",";\n    box-shadow: ",";\n  }\n"]);return p=function(){return e},e}var f=s.d.button(p(),(function(e){return e.theme.borderDefault}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.whiteColor}),(function(e){return e.theme.darkBrownColor}),(function(e){return e.theme.lightGreyColor}),(function(e){return e.theme.boxShadow})),h=function(e){var n=e.type,t=void 0===n?"button":n,a=e.className,o=e.text,i=e.onClick,l=e.children,c=e.color,m=void 0===c?"":c,s=e.disabled;return r.a.createElement(f,{type:t,className:a,onClick:i,color:m,disabled:s},o||l)};function g(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n  height: 40px;\n  border: ",";\n  border: ",";\n\n  border-radius: 5px;\n  text-align: center;\n  font-size: 14px;\n  cursor: ",";\n  background-color: ",";\n  color: ",";\n\n  transition: all 0.2s ease-in-out;\n\n  :hover {\n    box-shadow: ",";\n  }\n"]);return g=function(){return e},e}var x=s.d.div(g(),(function(e){return e.theme.borderDefault}),(function(e){return"red"===e.color?e.theme.borderRed:null}),(function(e){return e.pointer?"pointer":null}),(function(e){return e.theme.whiteColor}),(function(e){return"red"===e.color?e.theme.redColor:null}),(function(e){return e.theme.boxShadow})),b=function(e){var n=e.className,t=e.onClick,a=e.children,o=e.color,i=void 0===o?"":o,l=e.pointer,c=void 0!==l&&l;return r.a.createElement(x,{className:n,onClick:t,color:i,pointer:c},a)},v=t(39);function w(){var e=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  border-top: ",";\n  /**Temp */\n\n  & .mainRow {\n    margin-bottom: 10px;\n    & .number {\n      width: 32px;\n      height: 32px;\n      background-color: ",";\n      border: none;\n      color: ",";\n      text-align: center;\n      font-weight: 700;\n    }\n    & .titleCol {\n      display: flex;\n    }\n    & .title {\n      margin-left: 1.25em;\n      display: flex;\n      align-items: center;\n    }\n    & .arrow {\n      margin-right: 1.25em;\n      transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n\n    & .dropped {\n      transform: translate(0, -25%) rotate(180deg);\n    }\n  }\n\n  & .mainRow:nth-child(1) {\n    flex-grow: 9;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px 20px 0px 20px;\n    margin-bottom: 1.25em;\n  }\n  & .mainRow:nth-child(2) {\n    flex-grow: 5;\n  }\n  "," {\n    display: flex;\n    flex-flow: column nowrap;\n  }\n"]);return w=function(){return e},e}var E=function(e){var n=e.className,t=e.idx,o=e.title,i=e.children,l=Object(a.useState)(!1),c=Object(v.a)(l,2),m=c[0],s=c[1],u=r.a.cloneElement(i,{isDropped:m});return r.a.createElement(y,{isDropped:m,className:n},r.a.createElement("div",{onClick:function(e){s(!m)},className:"mainRow"},r.a.createElement("div",{className:"titleCol"},r.a.createElement(b,{className:"number"},t),r.a.createElement("div",{className:"title"},o)),r.a.createElement("span",{className:m?"arrow dropped":"arrow"},r.a.createElement(d.a,{size:20}))),r.a.createElement("div",{className:"mainRow"},u))},y=s.d.div(w(),(function(e){return e.theme.borderDefault}),(function(e){return e.theme.brownColor}),(function(e){return e.theme.whiteColor}),Object(u.down)("lg"));function C(){var e=Object(m.a)(["\n  width: 100%;\n  padding: 0px 20px;\n  max-height: 0;\n  max-height: ",";\n  transition: max-height 0.15s ease-out;\n  overflow: hidden;\n\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: nowrap;\n  width: 100%;\n"]);return C=function(){return e},e}var N=function(e){var n=e.className,t=e.children,a=e.isDropped;return r.a.createElement(k,{className:n,isDropped:a},t)},k=s.d.div(C(),(function(e){return e.isDropped?"1400px":"0"})),_=t(10),j=function(e){var n=e.className,t=e.count;return r.a.createElement("div",{className:n},Object(_.a)(Array(Number(t)).keys()).map((function(e,n){return r.a.createElement(d.i,{key:n,color:"#AFA196"})})),Object(_.a)(Array(5-Number(t)).keys()).map((function(e,n){return r.a.createElement(d.i,{key:n,color:"#E9EAE9"})})))};function O(){var e=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin-bottom: 20px;\n  "," {\n    justify-content: center;\n    align-items: center;\n  }\n  & .title {\n    font-size: 3.5em;\n    font-weight: 700;\n    text-transform: uppercase;\n    margin: 0.625em 0 0.15em;\n    "," {\n      font-size: 2.5em;\n    }\n  }\n  & .subTitle {\n    margin: 0 0 0.5em;\n    "," {\n      margin: 0 10px 0.5em;\n    }\n  }\n  & .price {\n    margin: 0 0 0.3em;\n    font-size: 2.5em;\n  }\n\n  & .star {\n    display: flex;\n    & .stars {\n      margin-right: 7px;\n    }\n  }\n"]);return O=function(){return e},e}var A=function(e){var n=e.title,t=e.subTitle,a=e.price,o=e.total;return r.a.createElement(B,null,r.a.createElement("div",{className:"title"},n),r.a.createElement("div",{className:"subTitle"},t),r.a.createElement("div",{className:"price"},a),r.a.createElement("div",{className:"star"},r.a.createElement(j,{className:"stars",count:5}),r.a.createElement("span",null,o," Reviews")))},B=s.d.div(O(),Object(u.down)("lg"),Object(u.down)("lg"),Object(u.down)("lg"));function F(){var e=Object(m.a)(["\n  /* flex-grow: 1; */\n\n  border: ",";\n  margin: 1px;\n\n  & .row:nth-child(1) {\n    background-color: ",";\n    color: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 70px;\n\n    border-bottom: ",";\n  }\n  & .row:nth-child(2) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 20px 5px;\n    border: ",";\n  }\n\n  & .row__title {\n    font-size: 1.2em;\n  }\n  & .subTitle {\n    font-size: 0.9em;\n  }\n  & .image {\n    width: 128px;\n    height: 70px;\n  }\n  & .imageContent {\n    text-align: center;\n    padding-top: 10px;\n    /* padding: 0px 2px; */\n  }\n"]);return F=function(){return e},e}var z=function(e){var n=e.className,t=e.title,a=e.subTitle,o=e.imageURL,i=e.imageContent,l=e.isActive,c=void 0!==l&&l;return r.a.createElement(L,{isActive:c,className:n},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row__title"},t),r.a.createElement("div",{className:"subTitle"},a)),o?r.a.createElement("div",{className:"row"},r.a.createElement("img",{alt:"\uc0c1\ud488\uc774\ubbf8\uc9c0",src:o,className:"image"}),r.a.createElement("div",{className:"imageContent"},i)):null)},L=s.d.div(F(),(function(e){return e.theme.borderDefault}),(function(e){return e.isActive?e.theme.brownColor:e.theme.whiteColor}),(function(e){return e.isActive?e.theme.whiteColor:e.theme.brownColor}),(function(e){return e.isActive?null:e.theme.borderDefault}),(function(e){return e.isActive?e.theme.borderBrown:e.theme.borderBrownTransparent}));function S(){var e=Object(m.a)(["\n  /* width: 90px; */\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: center;\n  & .label {\n    width: 25%;\n    transition: all 0.15s ease-out;\n  }\n  & .label:hover {\n    background-color: ",";\n    box-shadow: ",";\n  }\n"]);return S=function(){return e},e}var R=function(e){var n=e.formik,t=e.name,a=e.count,o=n.values[t];return r.a.createElement(M,null,[Object(_.a)(Array(a).keys()).map((function(e,a){return r.a.createElement("input",{onChange:n.handleChange,type:"radio",id:"".concat(t).concat(e+1),name:t,value:e+1})}))],[Object(_.a)(Array(a).keys()).map((function(e,n){return r.a.createElement("label",{className:"label",for:"".concat(t).concat(e+1)},r.a.createElement(z,{isActive:o==="".concat(e+1),title:"".concat(11*(e+1),'"'),subTitle:"included"}))}))])},M=s.d.div(S(),(function(e){return e.theme.lightGreyColor}),(function(e){return e.theme.boxShadow}));function D(){var e=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: center;\n  & .label {\n    /* width: 50%; */\n    flex-grow: 1;\n    transition: all 0.15s ease-out;\n  }\n  & .label:hover {\n    background-color: ",";\n    box-shadow: ",";\n  }\n"]);return D=function(){return e},e}var T=function(e){var n=e.formik,t=e.name,a=e.count,o=n.values[t];return r.a.createElement(G,null,[Object(_.a)(Array(a).keys()).map((function(e,a){return r.a.createElement("input",{onChange:n.handleChange,type:"radio",id:"".concat(t).concat(e+1),name:t,value:e+1})}))],[Object(_.a)(Array(a).keys()).map((function(e,n){return r.a.createElement("label",{className:"label",for:"".concat(t).concat(e+1)},r.a.createElement(z,{isActive:o==="".concat(e+1),title:"Standard",subTitle:"included",imageContent:"Standard left chaise",imageURL:"https://d2cquv6wfilehq.cloudfront.net/skin/frontend/interiordefine/default/images/depth-diagram-200420.svg"}))}))])},G=s.d.div(D(),(function(e){return e.theme.lightGreyColor}),(function(e){return e.theme.boxShadow}));function I(){var e=Object(m.a)(["\n  height: 150px;\n  padding: 10px 5px;\n  & .row {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n  }\n  & .rowContent {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n  }\n\n  & .row__title {\n    font-size: 1.2em;\n  }\n  & .subTitle {\n    font-size: 0.9em;\n  }\n  & .imageContainer {\n    position: relative;\n  }\n\n  & .check {\n    width: 75px;\n    height: 75px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    display: ",";\n  }\n  & .image {\n    width: 75px;\n    height: 75px;\n    border: ",";\n  }\n  & .image:hover {\n    border: ",";\n  }\n  & .imageTitle {\n    margin-top: 5px;\n  }\n  & .imageContent {\n    text-align: center;\n    padding-top: 5px;\n    font-size: 0.7em;\n    letter-spacing: 0.02em;\n  }\n"]);return I=function(){return e},e}var q=function(e){var n=e.className,t=e.imageURL,a=e.imageTitle,o=e.imageContent,i=e.isActive,l=void 0!==i&&i;return e.row,r.a.createElement(P,{isActive:l,className:n},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"imageContainer"},r.a.createElement("img",{alt:"\uc0c1\ud488\uc774\ubbf8\uc9c0",src:t,className:"image"}),r.a.createElement("div",{className:"check"},r.a.createElement(d.d,{size:24}))),r.a.createElement("div",{className:"rowContent"},r.a.createElement("div",{className:"imageTitle"},a),r.a.createElement("div",{className:"imageContent"},o))))},P=s.d.div(I(),(function(e){return e.isActive?null:"none"}),(function(e){return e.isActive?e.theme.borderBrownStrong:e.theme.borderBrownDefault}),(function(e){return e.theme.borderBrownHover}));function U(){var e=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: center;\n\n  & .label {\n    width: 25%;\n    width: ",";\n    transition: all 0.15s ease-out;\n  }\n  & .label:hover {\n    background-color: ",";\n    box-shadow: ",";\n  }\n"]);return U=function(){return e},e}var W=function(e){var n=e.formik,t=e.name,a=e.count,o=e.row,i=void 0!==o&&o,l=n.values[t];return r.a.createElement(V,{row:i},Object(_.a)(Array(a).keys()).map((function(e,a){return r.a.createElement("input",{onChange:n.handleChange,type:"radio",id:"".concat(t).concat(a+1),name:t,value:a+1})})),Object(_.a)(Array(a).keys()).map((function(e,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"label",for:"".concat(t).concat(n+1)},r.a.createElement(q,{row:i,isActive:l==="".concat(n+1),imageTitle:"Seafoam",imageContent:"Performance Textured Weave",imageURL:"https://d2cquv6wfilehq.cloudfront.net/media/swatches/medium/1597968225_wave_1.png"})))})))},V=s.d.div(U(),(function(e){return e.row?"25%":"50%"}),(function(e){return e.theme.lightGreyColor}),(function(e){return e.theme.boxShadow}));function $(){var e=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  max-width: 1400px;\n  margin: 0 auto;\n  background-color: ",";\n  padding-bottom: 70px;\n\n  "," {\n    max-width: unset;\n    background-color: unset;\n  }\n  & .mainColumn:nth-child(1) {\n    flex-grow: 9;\n    background-color: azure;\n    "," {\n    }\n  }\n  & .mainColumn:nth-child(2) {\n    flex-grow: 5;\n    max-width: 500px;\n    padding: 0px 20px;\n    "," {\n      max-width: unset;\n      padding: 0px 5px;\n    }\n  }\n  "," {\n    display: flex;\n    flex-flow: column nowrap;\n  }\n\n  & .delivered {\n    margin: 20px 0px;\n  }\n  & .payContainer {\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    align-items: center;\n    padding: 0px 20px;\n  }\n  & .ButtonMentOutterContainer {\n    width: 100%;\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    align-items: center;\n\n    & .ButtonMentContainer {\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 0px 40px 0 64px;\n    }\n\n    & .ButtonMent {\n      width: 100%;\n      height: 60px;\n      margin: 10px 0px;\n      background-color: ",";\n      color: ",";\n      max-width: 380px;\n      width: 100%;\n    }\n    & .ButtonMent:nth-child(2) {\n      background-color: ",";\n    }\n  }\n\n  & .BoxMentOutterContainer {\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    & .BoxMent {\n      height: 50px;\n      margin: 10px 0px;\n      width: 100%;\n    }\n\n    & .BoxMentContainer {\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 0px 40px 0 64px;\n    }\n  }\n\n  & input {\n    margin: 0;\n    padding: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  & .sampleImage {\n    width: 100%;\n  }\n"]);return $=function(){return e},e}var H=function(e){var n=e.className,t=e.formik;return r.a.createElement(J,{className:n},r.a.createElement("div",{className:"mainColumn"},r.a.createElement("img",{alt:"\uc0c1\ud488\uc774\ubbf8\uc9c0",className:"sampleImage",src:"https://i.pinimg.com/originals/9b/66/0c/9b660c3c79e2c630c14a216214023e90.jpg"})),r.a.createElement("div",{className:"mainColumn"},r.a.createElement(A,{price:"$2995",total:"5",title:"SLOAN",subTitle:"3-Piece U-Sectional"}),r.a.createElement("form",{onSubmit:t.handleSubmit},r.a.createElement(E,{idx:"1",title:"Choose Fabric"},r.a.createElement(N,null,r.a.createElement(W,{formik:t,name:"fabric",row:!0,count:5}))),r.a.createElement(E,{idx:"2",title:"Choose legs"},r.a.createElement(N,null,r.a.createElement(W,{formik:t,name:"legs",count:7}))),r.a.createElement(E,{idx:"3",title:"Choose Size"},r.a.createElement(N,null,r.a.createElement(R,{formik:t,name:"size",count:8}))),r.a.createElement(E,{idx:"4",title:"Choose totalDepth"},r.a.createElement(N,null,r.a.createElement(T,{formik:t,name:"totalDepth",count:2}))),r.a.createElement(E,{idx:"5",title:"Choose leftChaiseLength"},r.a.createElement(N,null,r.a.createElement(T,{formik:t,name:"leftChaiseLength",count:2}))),r.a.createElement(E,{idx:"6",title:"Choose rightChaiseLength"},r.a.createElement(N,null,r.a.createElement(T,{formik:t,name:"rightChaiseLength",count:2}))),r.a.createElement(E,{idx:"7",title:"Choose cushions"},r.a.createElement(N,null,r.a.createElement(R,{formik:t,name:"cushions",count:2}))),r.a.createElement(E,{idx:"8",title:"Choose cushionFill"},r.a.createElement(N,null,r.a.createElement(T,{formik:t,name:"cushionFill",count:4})))),r.a.createElement("div",{className:"payContainer"},r.a.createElement("div",{className:"ButtonMentOutterContainer"},r.a.createElement(h,{className:"ButtonMent",onClick:function(){console.log("purchaseFormik",t.values)}},r.a.createElement("div",{className:"ButtonMentContainer"},r.a.createElement("span",{className:"w7 sll"},"$2995"),r.a.createElement("span",null,"Add to Cart"),r.a.createElement(d.c,{size:24}))),r.a.createElement(h,{className:"ButtonMent"},"As low as $167/mo with Affirm")),r.a.createElement("div",{className:"delivered"},"Orders are typically delivered in 10\u201314 weeks."),r.a.createElement("div",{className:"BoxMentOutterContainer"},r.a.createElement(b,{pointer:!0,className:"BoxMent"},r.a.createElement("div",{className:"BoxMentContainer"},r.a.createElement(d.h,{size:24}),r.a.createElement("span",null,"Shipping starting at $149"),r.a.createElement(d.b,{size:24}))),r.a.createElement(b,{pointer:!0,className:"BoxMent"},r.a.createElement("div",{className:"BoxMentContainer"},r.a.createElement(d.l,{size:24}),r.a.createElement("span",null,"60-day returns"),r.a.createElement(d.b,{size:24})))))))},J=s.d.div($(),(function(e){return e.theme.yellowColor}),Object(u.down)("lg"),Object(u.down)("lg"),Object(u.down)("lg"),Object(u.down)("lg"),(function(e){return e.theme.greyColor}),(function(e){return e.theme.whiteColor}),(function(e){return e.theme.brownColor}));function K(){var e=Object(m.a)(["\n  border: 0;\n  border: ",";\n  border-radius: 5px;\n  background-color: ",";\n  color: ",";\n  height: 35px;\n  font-size: 12px;\n  padding: 0px 15px;\n"]);return K=function(){return e},e}var Q=s.d.input(K(),(function(e){return e.theme.boxBorder}),(function(e){return e.theme.whiteColor}),(function(e){return e.theme.darkBrownColor})),X=function(e){var n=e.placeholder,t=e.required,a=void 0!==t&&t,o=e.value,i=e.onChange,l=e.type,c=void 0===l?"text":l,m=e.className,s=e.id,u=e.onBlur;return r.a.createElement(Q,{className:m,placeholder:n,required:a,value:o,onChange:i,type:c,id:s,onBlur:u})};function Y(){var e=Object(m.a)(["\n  width: 40px;\n  height: 40px;\n  border: ",";\n  border-radius: 5px;\n  text-align: center;\n  padding: 7px 0px;\n  font-size: 14px;\n  cursor: pointer;\n  background-color: ",";\n  color: ",";\n\n  transition: all 0.2s ease-in-out;\n\n  :hover {\n    color: ",";\n    border: ",";\n  }\n"]);return Y=function(){return e},e}var Z=s.d.button(Y(),(function(e){return e.theme.borderDefault}),(function(e){return e.theme.whiteColor}),(function(e){return e.theme.darkBrownColor}),(function(e){return e.theme.brownColor}),(function(e){return e.theme.borderBrown})),ee=function(e){var n=e.type,t=void 0===n?"button":n,a=e.className,o=e.text,i=e.onClick,l=e.children,c=e.color,m=void 0===c?"":c,s=e.disabled;return r.a.createElement(Z,{type:t,className:a,onClick:i,color:m,disabled:s},o||l)},ne=function(e){var n=e.className,t=e.value,o=void 0===t?1:t,i=e.onChange,l=Object(a.useState)(o),c=Object(v.a)(l,2),m=c[0],s=c[1],u=function(e){i(String(m))},p=function(e){s(e)};return r.a.createElement("div",{className:n},Object(_.a)(Array(Number(m)).keys()).map((function(e,n){return r.a.createElement(d.i,{key:n,color:"#AFA196",onMouseEnter:function(){return p(n+1)},onMouseLeave:function(){s(Number(o))},onClick:function(){return u()}})})),Object(_.a)(Array(5-Number(m)).keys()).map((function(e,n){return r.a.createElement(d.i,{key:n,color:"#E9EAE9",onClick:function(){return u(Number(m))},onMouseEnter:function(){return p(Number(m)+n+1)}})})))};function te(){var e=Object(m.a)(["\n  & .title {\n    padding: 56px 0px 22px;\n    text-transform: capitalize;\n  }\n  & .reviewFromContainer {\n  }\n  & .reviewFrom {\n    display: flex;\n    flex-direction: column;\n\n    & .star {\n      font-size: 25px;\n    }\n\n    & label {\n      margin-bottom: 5px;\n    }\n\n    & .ConnectColumnContainer {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      "," {\n        flex-direction: column;\n        & .ConnectMessage {\n          margin-bottom: 5px;\n        }\n      }\n    }\n\n    & .ConnectColumn {\n      /* justify-content: center; */\n      /* align-items: center; */\n    }\n    & .ConnectColumn:nth-child(1) {\n      width: 273px;\n      "," {\n        width: 100%;\n      }\n    }\n    & .ConnectColumn:nth-child(2) {\n      display: flex;\n      width: 100%;\n    }\n    & .ConnectColumnItem {\n      display: flex;\n      flex-direction: column;\n      width: 50%;\n      padding-right: 10px;\n    }\n    & .spanOR {\n      margin: 0px 10px;\n      width: 80px;\n    }\n    & .socialButton {\n      margin-right: 5px;\n    }\n    & .submitButton {\n      margin-top: 15px;\n      width: 172px;\n      align-self: flex-end;\n    }\n\n    & .ErrorMessage {\n      margin-top: 15px;\n    }\n  }\n"]);return te=function(){return e},e}var ae=function(e){var n=e.className,t=e.formik;return r.a.createElement(re,{className:n},r.a.createElement("h2",{className:"title"},"Write a Review"),r.a.createElement("div",{className:"reviewFromContainer"},r.a.createElement("form",{className:"reviewFrom",onSubmit:t.handleSubmit},"\xa0\xa0",r.a.createElement("label",{htmlFor:"score"},"Score:"),r.a.createElement(ne,{className:"star",value:t.values.score,id:"score",onChange:function(e){console.log(e),t.setFieldValue("score",e)},onBlur:t.handleBlur}),"\xa0\xa0",r.a.createElement("label",{htmlFor:"title"},"title"),r.a.createElement(X,{type:"text",id:"title",value:t.values.title,onChange:t.handleChange,onBlur:t.handleBlur}),"\xa0\xa0",r.a.createElement("label",{htmlFor:"reviews"},"reviews"),r.a.createElement(X,{type:"text",id:"reviews",value:t.values.reviews,onChange:t.handleChange,onBlur:t.handleBlur}),r.a.createElement("div",{className:"ConnectColumnContainer"},r.a.createElement("div",{className:"ConnectColumn"},"\xa0\xa0",r.a.createElement("div",{className:"ConnectMessage"},"Connect with:"),r.a.createElement(ee,{className:"socialButton"},r.a.createElement(d.g,null)),r.a.createElement(ee,{className:"socialButton"},r.a.createElement(d.m,null)),r.a.createElement(ee,{className:"socialButton"},r.a.createElement(d.f,null)),r.a.createElement("span",{className:"spanOR"}," -or- ")),r.a.createElement("div",{className:"ConnectColumn"},r.a.createElement("div",{className:"ConnectColumnItem"},"\xa0\xa0",r.a.createElement("label",{htmlFor:"name"},"Use your name:"),r.a.createElement(X,{type:"text",id:"name",value:t.values.name,onChange:t.handleChange,onBlur:t.handleBlur})),r.a.createElement("div",{className:"ConnectColumnItem"},"\xa0\xa0",r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement(X,{type:"text",id:"email",value:t.values.email,onChange:t.handleChange,onBlur:t.handleBlur})))),t.errors.score&&t.touched.score&&r.a.createElement(b,{color:"red",className:"ErrorMessage"},t.errors.score),t.errors.title&&t.touched.title&&r.a.createElement(b,{color:"red",className:"ErrorMessage"},t.errors.title),t.errors.reviews&&t.touched.reviews&&r.a.createElement(b,{color:"red",className:"ErrorMessage"},t.errors.reviews),t.errors.name&&t.touched.name&&r.a.createElement(b,{color:"red",className:"ErrorMessage"},t.errors.name),t.errors.email&&t.touched.email&&r.a.createElement(b,{color:"red",className:"ErrorMessage"},t.errors.email),r.a.createElement(h,{className:"submitButton",type:"submit",disabled:t.isSubmitting,text:"Post"}))))},re=s.d.div(te(),Object(u.down)("sm"),Object(u.down)("sm"));function oe(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 23px;\n\n  & .stars {\n    width: 100px;\n  }\n  & .rate {\n    width: 100px;\n  }\n  & .ProgressContainer {\n    margin-left: 5px;\n    width: 80%;\n  }\n  & .OutterProgress {\n    width: 100%;\n    max-width: 220px;\n    height: 11px;\n    background-color: ",";\n  }\n\n  & .InnerProgress {\n    width: ","%;\n    height: 11px;\n    background-color: ",";\n  }\n"]);return oe=function(){return e},e}function ie(){var e=Object(m.a)(["\n  border-top: ",";\n\n  & .title {\n    padding: 56px 0px 22px;\n  }\n\n  & .columnList {\n    display: flex;\n    width: 100%;\n    "," {\n      flex-direction: column;\n    }\n    & .column:nth-child(1) {\n      width: 255px;\n    }\n    & .column:nth-child(2) {\n      width: 100%;\n    }\n  }\n  & .column {\n    & .rateList {\n      display: flex;\n      flex-direction: column;\n      "," {\n        justify-content: space-between;\n      }\n    }\n\n    & .rateItem {\n      display: flex;\n    }\n\n    & .star {\n      display: flex;\n      & .stars {\n        margin-right: 7px;\n        "," {\n          margin-bottom: 17px;\n        }\n      }\n    }\n\n    & .buttonReview {\n      margin-top: 30px;\n      width: 80%;\n      "," {\n        display: none;\n      }\n    }\n  }\n\n  & .column:nth-child(1) {\n    /* flex: 255px 255px 255px; */\n    width: 255px;\n    display: flex;\n    flex-direction: column;\n  }\n  & .column:nth-child(2) {\n  }\n  & .column:nth-child(3) {\n  }\n"]);return ie=function(){return e},e}var le=function(e){var n=e.className,t=e.reviewsWrite,a=t.total,o=t.rates;return r.a.createElement(ce,{className:n},r.a.createElement("h2",{className:"title"},"Read Reviews From Our Customers"),r.a.createElement("div",{className:"columnList"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"star"},r.a.createElement(j,{className:"stars",count:5}),r.a.createElement("span",null,a," Reviews")),r.a.createElement("div",null,r.a.createElement(h,{className:"buttonReview"},"Write A Review"))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"rateList"},o.map((function(e,n){return r.a.createElement(me,{className:"rateItem",rate:e,total:a,idx:n,key:n})}))))))},ce=s.d.div(ie(),(function(e){return e.theme.borderDefault}),Object(u.down)("sm"),Object(u.down)("sm"),Object(u.down)("sm"),Object(u.down)("sm")),me=function(e){var n=e.className,t=e.rate,a=e.idx,o=t/e.total*100;return r.a.createElement(se,{className:n,percentage:o},r.a.createElement(j,{className:"stars",count:5-a}),r.a.createElement("div",{className:"rate"},"( ",t," )"),r.a.createElement("div",{className:"ProgressContainer"},r.a.createElement("div",{className:"OutterProgress"},r.a.createElement("div",{className:"InnerProgress"}))))},se=s.d.div(oe(),(function(e){return e.theme.lightGreyColor}),(function(e){return e.percentage}),(function(e){return e.theme.brownColor}));function ue(){var e=Object(m.a)(["\n  height: 42px;\n  border-bottom: ",";\n\n  & .reviewList {\n    width: 100%;\n    height: 100%;\n    /* overflow-x: scroll; */\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    & .reviewItem {\n      height: 100%;\n      width: 100px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-bottom: ",";\n    }\n  }\n"]);return ue=function(){return e},e}var de=function(e){var n=e.className,t=e.reviewList;return r.a.createElement(pe,{className:n},r.a.createElement("ul",{className:"reviewList"},t.map((function(e,n){return r.a.createElement("li",{className:"reviewItem",key:n},e)}))))},pe=s.d.div(ue(),(function(e){return e.theme.borderDefault}),(function(e){return e.theme.borderBrown}));function fe(){var e=Object(m.a)(["\n  ","\n  background-color:",";\n  border-radius:50%;\n"]);return fe=function(){return e},e}function he(){var e=Object(m.a)(["\n  ","\n  background-image:url(",");\n  background-size:cover;\n  border-radius:50%;\n"]);return he=function(){return e},e}var ge=function(e){var n;return"sm"===e?n=30:"md"===e?n=80:"lg"===e&&(n=150),"\n        width:".concat(n,"px;\n        height:").concat(n,"px;\n        ")},xe=s.d.div(he(),(function(e){return ge(e.size)}),(function(e){return e.url})),be=s.d.div(fe(),(function(e){return ge(e.size)}),(function(e){return e.theme.brownColor})),ve=function(e){var n=e.size,t=void 0===n?"md":n,a=e.url,o=void 0===a?void 0:a,i=e.className;return o?r.a.createElement(xe,{className:i,size:t,url:o}):r.a.createElement(be,{className:i,size:t})};function we(){var e=Object(m.a)(["\n  width: 60px;\n  height: 60px;\n  color: ",";\n  & .circle__wrapper {\n    padding: 10px;\n    width: inherit;\n    height: inherit;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    border-radius: 50%;\n    border: ",";\n    transition: all 0.3s linear;\n  }\n  & .circle__wrapper:hover {\n    background-color: ",";\n  }\n"]);return we=function(){return e},e}var Ee=function(e){var n=e.className,t=e.isUp,a=e.handleClick,o=e.count;return r.a.createElement(ye,{className:n},r.a.createElement("div",{className:"circle__wrapper",onClick:a},t?r.a.createElement(d.k,null):r.a.createElement(d.j,null),r.a.createElement("div",null," ",o)))},ye=s.d.div(we(),(function(e){return e.theme.greyColor}),(function(e){return e.theme.borderDefault}),(function(e){return e.theme.lightGreyColor}));function Ce(){var e=Object(m.a)(["\n  & .hidden {\n    display: ",";\n    transition: opacity 0.4s ease-in-out;\n    opacity: ",";\n  }\n"]);return Ce=function(){return e},e}var Ne=function(e){var n=e.className,t=e.text,o=e.chunk,i=void 0===o?300:o,l=Object(a.useState)(!0),c=Object(v.a)(l,2),m=c[0],s=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,{className:n,short:m},r.a.createElement("span",{className:"visible"},t.substring(0,i)),r.a.createElement("span",{className:"hidden"},t.substring(i))),r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){return s(!m)},className:"button brown"},m?" ...Read More":" ...Read Less"))},ke=s.d.span(Ce(),(function(e){return e.short?"none":"line"}),(function(e){return e.short?0:1}));function _e(){var e=Object(m.a)(["\n  padding: 35px 0px;\n  border-bottom: ",";\n  /**header */\n  & .comment__header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    & .comment__headerLeft {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      & .comment__avatar {\n        margin-right: 20px;\n      }\n\n      & .comment__name {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n      }\n      & .comment__profile {\n        & .comment__profile__ {\n          display: flex;\n        }\n        & .name {\n          /* margin-right: 73px; */\n\n          margin-right: 4.3em;\n          "," {\n            margin-right: 1em;\n          }\n        }\n        & .star {\n          margin-top: 10px;\n        }\n      }\n    }\n    & .comment__headerRight {\n      "," {\n        display: none;\n      }\n    }\n  }\n\n  /**content */\n  & .comment__content {\n    margin: 20px 0px 20px 100px;\n    display: flex;\n    justify-content: space-between;\n    "," {\n      flex-direction: column;\n      margin-left: 0px;\n    }\n    & .content__columm:nth-child(1) {\n      width: 50%;\n      "," {\n        width: 100%;\n      }\n    }\n    & .content__columm:nth-child(2) {\n      display: flex;\n      flex-direction: column;\n      "," {\n        margin-top: 20px;\n      }\n      & .content__ment {\n        display: flex;\n        justify-content: space-between;\n      }\n\n      & .comment__createAt {\n        "," {\n          display: none;\n        }\n      }\n    }\n    & .content__buttonList {\n      margin-top: 10px;\n      display: flex;\n\n      & .button {\n        margin-left: 20px;\n        "," {\n          margin-left: 0px;\n          margin-right: 20px;\n        }\n      }\n    }\n  }\n  /**footer */\n  & .comment__footer {\n    margin-left: 100px;\n    "," {\n      margin-left: 0px;\n    }\n  }\n"]);return _e=function(){return e},e}var je=function(e){var n=e.className,t=e.name,a=e.rate,o=e.commentTitle,i=e.commentConent,l=e.createAt,c=e.like,m=e.disLike,s=e.reviewedOn;return r.a.createElement(Oe,{className:n},r.a.createElement("div",{className:"comment__header"},r.a.createElement("div",{className:"comment__headerLeft"},r.a.createElement(ve,{className:"comment__avatar"}),r.a.createElement("div",{className:"comment__profile"},r.a.createElement("div",{className:"comment__profile__"},r.a.createElement("span",{className:"name black"},t),r.a.createElement("span",{className:"verified"},r.a.createElement(d.e,{color:"#AFA196",style:{marginRight:"10px"}}),"Verified Buyer")),r.a.createElement(j,{className:"star",count:a})),r.a.createElement("div",{className:"comment__verified"})),r.a.createElement("div",{className:"comment__headerRight"},r.a.createElement("div",{className:"comment__createAt black"},l))),r.a.createElement("div",{className:"comment__content"},r.a.createElement("div",{className:"content__columm"},r.a.createElement("div",{className:"content__title"},o),r.a.createElement("div",{className:"content__content"},i.length>300?r.a.createElement(Ne,{text:i}):i),r.a.createElement("div",{className:"comment__share"})),r.a.createElement("div",{className:"content__columm"},r.a.createElement("div",{className:"content__ment"},r.a.createElement("div",{className:"ment"}," Was This Review Helpful?"),r.a.createElement("div",{className:"comment__createAt black"},l)),r.a.createElement("div",{className:"content__buttonList"},r.a.createElement(Ee,{className:"button",isUp:!0,count:c}),r.a.createElement(Ee,{className:"button",count:m})))),r.a.createElement("div",{className:"comment__footer"},r.a.createElement("div",{className:"comment__reviewedOn"},r.a.createElement("span",null,"Reviewed on: "),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:s.src},r.a.createElement("span",{className:"brown"},s.name)))))},Oe=s.d.div(_e(),(function(e){return e.theme.borderDefault}),Object(u.down)("sm"),Object(u.down)("sm"),Object(u.down)("sm"),Object(u.down)("sm"),Object(u.down)("sm"),Object(u.up)("sm"),Object(u.down)("sm"),Object(u.down)("sm"));function Ae(){var e=Object(m.a)(["\n  width: 100%;\n  max-width: 1440px;\n  margin: 0px auto;\n  padding: 0px 20px;\n\n  & .comments__header {\n  }\n  & .comments__List {\n    & .comment__item {\n    }\n  }\n"]);return Ae=function(){return e},e}function Be(){var e=Object(m.a)([""]);return Be=function(){return e},e}var Fe=s.d.div(Be()),ze=s.d.div(Ae()),Le=function(e){var n=e.dummyComments,t=e.reviewList,a=e.reviewsWrite,o=e.reviewFormik,i=e.purchaseFormik;return r.a.createElement(Fe,null,r.a.createElement(H,{className:"product",formik:i}),r.a.createElement(ze,null,r.a.createElement("div",{className:"comments"},r.a.createElement(le,{reviewsWrite:a}),r.a.createElement(ae,{formik:o}),r.a.createElement(de,{reviewList:t}),r.a.createElement("div",{className:"comments__List"},n.map((function(e,n){return r.a.createElement(je,{key:n,className:"comment__item",name:e.name,rate:e.rate,commentTitle:e.commentTitle,commentConent:e.commentConent,createAt:e.createAt,like:e.like,disLike:e.disLike,reviewedOn:e.reviewedOn})}))))))},Se=[{name:"Karli T.",rate:5,commentTitle:"Love our new couch.",commentConent:"Love the couch. Great to be able to make so many choices . Delivery was easy and timely. Company was great at updates .",createAt:"08/13/20",like:"5",disLike:"0",reviewedOn:{name:"Sloan",src:"https://www.interiordefine.com/sloan-custom-sectional-sofa-with-right-chaise?___store=default"}},{name:"dumm T.",rate:3,commentTitle:"Great to be new couch.",commentConent:"Great to be Great to bex choices . Delivery was easy and timely. Company was great at updates reat to be Great to bex choices . Delivery was easy and timely. Company was great at updates reat to be Great to bex choices . Delivery was easy and timely. Company was great at updates reat to be Great to bex choices . Delivery was easy and timely. Company was great at updates reat to be Great to bex choices . Delivery was easy and timely. Company was great at updates reat to be Great to bex choices . Delivery was easy and timely. Company was great at updates .",createAt:"07/10/20",like:"2",disLike:"3",reviewedOn:{name:"Sloan",src:"https://www.interiordefine.com/sloan-custom-sectional-sofa-with-right-chaise?___store=default"}}],Re=["Reviews(262)"],Me={total:262,rates:[224,34,3,1,0]};var De=function(){var e=Object(l.a)({initialValues:{email:"",score:"2"},onSubmit:function(e,n){var t=n.setSubmitting;t(!0),console.log("handleSubmit reviewFormik data",e),t(!1)},validationSchema:c.a().shape({score:c.b().required("\ud3c9\uc810\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."),title:c.b().required("\uc81c\ubaa9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."),reviews:c.b().required("\ub9ac\ubdf0\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694."),name:c.b().required("\uc774\ub984\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."),email:c.b().email("\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc774\uba54\uc77c \uc785\ub2c8\ub2e4.").required("\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.")})}),n=Object(l.a)({initialValues:{fabric:"1",legs:"1",size:"1",totalDepth:"1",leftChaiseLength:"1",rightChaiseLength:"1",cushions:"1",cushionFill:"1"},onSubmit:function(e,n){var t=n.setSubmitting;t(!0),console.log("handleSubmit purchaseFormik data",e),t(!1)}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(Le,{reviewList:Re,dummyComments:Se,reviewsWrite:Me,reviewFormik:e,purchaseFormik:n}))};var Te=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(De,null))},Ge={whiteColor:"".concat("#FFFFFF"),blackColor:"".concat("#151515"),brownColor:"".concat("#AFA196"),darkBrownColor:"".concat("#676564"),greyColor:"".concat("#676564"),lightGreyColor:"".concat("#F8F8F8"),redColor:"".concat("#CE4C44"),yellowColor:"".concat("#FBF9F7"),borderDefault:"1px solid ".concat("#F8F8F8",";"),borderBrownTransparent:"2px solid transparent",borderBrown:"2px solid ".concat("#AFA196",";"),borderBrownDefault:"4px solid transparent;",borderBrownHover:"4px solid ".concat("#AAAAAA",";"),borderBrownStrong:"4px solid ".concat("#AFA196",";"),borderRed:"1px solid ".concat("#CE4C44",";"),borderRadius:"30px",boxBorder:"1px solid ".concat("#F8F8F8"),boxShadow:"0 1px 5px 0 rgba(21, 21, 21, 0.15);",breakpoints:{sm:"576px",md:"768px",lg:"992px",xl:"1200px"}},Ie=t(70);function qe(){var e=Object(m.a)(["\n    ",";\n\n    *{\n        box-sizing: border-box;\n    }\n    body{\n        /* background-color: ","; */\n        /* color: ","; */\n        font-size:14px;\n        font-family: 'Noto Sans KR', sans-serif;\n        color:",";\n        line-height: 1.3;\n        letter-spacing: .09em;\n        font-weight:300;\n        \n    }\n    a {\n        color:",";\n        text-decoration:none;\n    }\n    input:focus{\n        outline:none;\n    }\n    .black{\n        color:",";\n    } \n    .brown{\n        color:",";\n    }\n    .w4{\n        font-weight:400;\n    }\n    .w5{\n        font-weight:500;\n    }\n    .w6{\n        font-weight:600;\n    }\n    .w7{\n        font-weight:700;\n    }\n    .ss{\n        font-size:0.75em;\n    }\n    .sm{\n        font-size:1em;\n    }\n    .sl{\n        font-size:1.25em;\n    }\n    .sll{\n        font-size:1.5em;\n    }\n    \n"]);return qe=function(){return e},e}var Pe=Object(s.b)(qe(),Ie.a,(function(e){return e.theme.whiteColor}),(function(e){return e.theme.blackColor}),(function(e){return e.theme.darkBrownColor}),(function(e){return e.theme.blackColor}),(function(e){return e.theme.blackColor}),(function(e){return e.theme.brownColor}));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{theme:Ge},r.a.createElement(Te,null),r.a.createElement(Pe,null))),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.2c36544e.chunk.js.map