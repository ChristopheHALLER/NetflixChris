(function(e){function t(t){for(var n,o,s=t[0],l=t[1],d=t[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(m.length)m.shift()();return a.push.apply(a,d||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==i[l]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},i={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"10a1":function(e,t,r){"use strict";r("93e1")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("div",{staticClass:"app"},[r("h1",[e._v("NETFLEX")]),r("h2",[e._v("LA PASSION DU CINEMA QUI MARCHE PAS")]),r("router-link",{staticClass:"btn btn-red"},[e._v("Voir les informations ")]),r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:{name:"Home",params:{movie:e.movie,movies:e.movies}}}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:{name:"Admin"}}},[e._v("Admin")])],1),r("router-view"),r("br"),r("br"),r("br"),r("div",{staticClass:"wrap"}),r("ul",{staticClass:"demo",attrs:{id:""}})],1)])},a=[],o=new n["default"],s=o,l={name:"App",components:{},data:function(){return{movies:[{id:1,title:"Belmondo Le marginal ",genres:["comedy"],rating:4,review:"Un coup de coeur",description:"Le Marginal est un film français réalisé par Jacques Deray, sorti en 1983. Écrit par Deray et Jean Herman, et dialogué par Michel Audiard, il met en vedette Jean-Paul Belmondo dans le rôle d'un commissaire de police",img:"http://ekladata.com/2BXmgJt3gqoWdXrDsmbn1EE49DI.jpg"},{id:2,title:"Belmondo Le professionnel ",genres:["drama"],rating:9,review:"With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",description:"Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won.",img:"marginal.jpg"},{id:3,title:"Belmondo Peur sur la Ville",genres:["thriller"],rating:9,review:"With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",description:"Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won.",img:"peurville.jpg"},{id:4,title:"Luca",genres:["Enfant - Gamin"],rating:9,review:"Jouissif",description:"Pour réaliser le plus gros casse de l'histoire, un homme mystérieux nommé The Professor recrute une bande de huit braqueurs",img:"https://flox-demo.pyxl.dev/assets/poster/jTswp6KyDYKtvC52GbHagrZbGvD.jpg"},{id:5,title:"Dear Evan Hansen",genres:["Crime - Drama"],rating:3,review:"Intriguant",description:"Une famille en pleines vacances tropicales découvre que la plage sur laquelle elle s'est posée pour quelques heures fait rapidement vieillir les membres, résumant leur vie entière en l'espace d'une seule journée.",img:"https://flox-demo.pyxl.dev/assets/poster/11sowWt2GlQj6lGG4foLldXMyzF.jpg"},{id:6,title:"Big Brother",genres:["Peur - Walah"],rating:9,review:"Intriguant",description:"Pour réaliser le plus gros casse de l'histoire, un homme mystérieux nommé The Professor recrute une bande de huit braqueurs",img:"https://image.tmdb.org/t/p/w185/9Gkcvdz89Q7w0glDDga1c8m5vaW.jpg"},{id:7,title:"Luca",genres:["Enfant - Gamin"],rating:9,review:"Jouissif",description:"Pour réaliser le plus gros casse de l'histoire, un homme mystérieux nommé The Professor recrute une bande de huit braqueurs",img:"https://flox-demo.pyxl.dev/assets/poster/7BCTdek5LFHglcgl7shsm7igJAH.jpg"},{id:8,title:"Old",genres:["Crime - Drama"],rating:9,review:"Intriguant",description:"Une famille en pleines vacances tropicales découvre que la plage sur laquelle elle s'est posée pour quelques heures fait rapidement vieillir les membres, résumant leur vie entière en l'espace d'une seule journée.",img:"https://flox-demo.pyxl.dev/assets/poster/jbMZkxLHVDSKiZh0HppCthRW96k.jpg"},{id:9,title:"Big Brother",genres:["Peur - Walah"],rating:9,review:"Intriguant",description:"Pour réaliser le plus gros casse de l'histoire, un homme mystérieux nommé The Professor recrute une bande de huit braqueurs",img:"https://flox-demo.pyxl.dev/assets/poster/amwo4CjYKynZ2yKvKMxoiRSsaE1.jpg"}]}},methods:{addMovie:function(e){var t={id:this.movies.length+1,title:e.newTitle,genres:e.newGenres,rating:e.newRating,review:e.newReview,description:e.newDescription,img:e.Newimg};console.log(t),this.movies.push(t)}},mounted:function(){var e=this;s.$on("emit-test",(function(t){console.log("Film bien ajouter"),e.addMovie(t)}))},goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}},d=l,c=(r("5c0b"),r("2877")),u=Object(c["a"])(d,i,a,!1,null,null,null),m=u.exports,p=r("ce5b"),v=r.n(p);r("bf40");n["default"].use(v.a);var f={theme:{dark:!0}},h=new v.a(f),g=r("8c4f"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form"},[r("p",[e._v("Titre:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.add.newTitle,expression:"add.newTitle"}],attrs:{type:"text",autocomplete:"off"},domProps:{value:e.add.newTitle},on:{keyup:e.getResult,input:function(t){t.target.composing||e.$set(e.add,"newTitle",t.target.value)}}}),r("v-col",{attrs:{cols:"2"}},[r("v-autocomplete",{attrs:{items:e.AutoCompletefilm,"item-text":"title",dense:"",filled:"",label:"Recherche Film"},model:{value:e.add,callback:function(t){e.add=t},expression:"add"}})],1),r("p",[e._v("Review:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.add.newReview,expression:"add.newReview"}],attrs:{type:"text"},domProps:{value:e.add.newReview},on:{input:function(t){t.target.composing||e.$set(e.add,"newReview",t.target.value)}}}),r("p",[e._v("Description:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.add.newDescription,expression:"add.newDescription"}],attrs:{type:"text"},domProps:{value:e.add.newDescription},on:{input:function(t){t.target.composing||e.$set(e.add,"newDescription",t.target.value)}}}),r("p",[e._v("Image:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.add.Newimg,expression:"add.Newimg"}],attrs:{type:"text"},domProps:{value:e.add.Newimg},on:{input:function(t){t.target.composing||e.$set(e.add,"Newimg",t.target.value)}}}),r("br"),r("br"),r("p",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.add.newGenres,expression:"add.newGenres"}],attrs:{type:"checkbox",id:"jack",value:"horreur"},domProps:{checked:Array.isArray(e.add.newGenres)?e._i(e.add.newGenres,"horreur")>-1:e.add.newGenres},on:{change:function(t){var r=e.add.newGenres,n=t.target,i=!!n.checked;if(Array.isArray(r)){var a="horreur",o=e._i(r,a);n.checked?o<0&&e.$set(e.add,"newGenres",r.concat([a])):o>-1&&e.$set(e.add,"newGenres",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.add,"newGenres",i)}}}),r("label",{attrs:{for:"jack"}},[e._v("Horreur")])]),r("p",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.add.newGenres,expression:"add.newGenres"}],attrs:{type:"checkbox",id:"john",value:"jouissif"},domProps:{checked:Array.isArray(e.add.newGenres)?e._i(e.add.newGenres,"jouissif")>-1:e.add.newGenres},on:{change:function(t){var r=e.add.newGenres,n=t.target,i=!!n.checked;if(Array.isArray(r)){var a="jouissif",o=e._i(r,a);n.checked?o<0&&e.$set(e.add,"newGenres",r.concat([a])):o>-1&&e.$set(e.add,"newGenres",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.add,"newGenres",i)}}}),r("label",{attrs:{for:"john"}},[e._v("Jouissif")])]),r("p",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.add.newGenres,expression:"add.newGenres"}],attrs:{type:"checkbox",id:"mike",value:"comedie"},domProps:{checked:Array.isArray(e.add.newGenres)?e._i(e.add.newGenres,"comedie")>-1:e.add.newGenres},on:{change:function(t){var r=e.add.newGenres,n=t.target,i=!!n.checked;if(Array.isArray(r)){var a="comedie",o=e._i(r,a);n.checked?o<0&&e.$set(e.add,"newGenres",r.concat([a])):o>-1&&e.$set(e.add,"newGenres",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.add,"newGenres",i)}}}),r("label",{attrs:{for:"mike"}},[e._v("Comedie")])]),r("p",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.add.newGenres,expression:"add.newGenres"}],attrs:{type:"checkbox",id:"mike",value:"policier"},domProps:{checked:Array.isArray(e.add.newGenres)?e._i(e.add.newGenres,"policier")>-1:e.add.newGenres},on:{change:function(t){var r=e.add.newGenres,n=t.target,i=!!n.checked;if(Array.isArray(r)){var a="policier",o=e._i(r,a);n.checked?o<0&&e.$set(e.add,"newGenres",r.concat([a])):o>-1&&e.$set(e.add,"newGenres",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.add,"newGenres",i)}}}),r("label",{attrs:{for:"mike"}},[e._v("Policier")])]),r("v-rating",{attrs:{name:"vrating","v-model":e.add.newRating,"background-color":"red lighten-3",color:"red",length:"10",size:"20"}}),r("button",{attrs:{name:"vote",value:"Poster un Film"},on:{click:e.emitTest}},[e._v(" Ajouter ")])],1)},b=[],y=r("bc3a"),_=r.n(y),x={name:"MovieCreation",props:{moviecreation:Function},data:function(){return{AutoCompletefilm:[],add:{title:"",newGenres:[],newRating:0,newReview:"",newDescription:""}}},methods:{emitTest:function(){s.$emit("emit-test",this.add)},getResult:function(){var e=this;this.loading=!0,_.a.get("https://api.themoviedb.org/3/search/movie?api_key=80d0dd074cbffeb2db4b0123882c7f44&query="+this.add.newTitle).then((function(t){console.log(t.data.data),e.AutoCompletefilm=t.data.results,e.loading=!1})).catch((function(e){this.error=e})).then((function(){}))}},destroyed:function(){console.log("Mon composant est detruit")}},G=x,k=(r("b628"),Object(c["a"])(G,w,b,!1,null,null,null)),j=k.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("div",{staticClass:"box"},[r("img",{staticClass:"imgaffiche",attrs:{src:e.movie.img,alt:"affiche",width:"250em"}})]),r("div",{staticClass:"box"},[r("p",[e._v(" "+e._s(e.movie.title)+" "),r("br"),e._v(" "),r("br"),e._v(" "+e._s(e.movie.genres)+" "),r("br"),e._v(" "),r("br"),e._v(" "+e._s(e.movie.review)+" "),r("br"),e._v(" "),r("br"),e._v(" "+e._s(e.movie.description)+" "),r("br")]),r("router-link",{attrs:{to:{name:"Movie",params:{id:e.movie.id,movie:e.movie}}}},[r("v-btn",{attrs:{type:"button",color:"danger"}},[e._v("Afficher Détails")])],1)],1),r("v-rating",{attrs:{"v-model":e.movie.rating,name:"vrating",value:e.movie.rating,"background-color":"red lighten-3",color:"red",length:"10",readonly:"",size:"20"}})],1)},A=[],$={name:"Movie",props:{movie:Object}},C=$,D=(r("6c92"),Object(c["a"])(C,P,A,!1,null,null,null)),R=D.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1"),r("select",{directives:[{name:"model",rawName:"v-model",value:e.dataFiler,expression:"dataFiler"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.dataFiler=t.target.multiple?r:r[0]}}},[r("option",{attrs:{disabled:"",value:""}},[e._v("Choisissez")]),r("option",[e._v("comedy")]),r("option",[e._v("thriller")]),r("option",[e._v("drama")])]),r("span",[e._v("Sélectionné : "+e._s(e.dataFiler))]),e._l(e.filteredItems,(function(e){return r("li",{key:e.id},[r("movie",{attrs:{movie:e}})],1)})),r("h2",[e._v("Nombre de film : "+e._s(e.filteredItems.length))])],2)},T=[],N=(r("4de4"),r("caad"),r("2532"),{name:"HelloWorld",props:{movies:[]},components:{Movie:R},data:function(){return{dataFiler:""}},computed:{filteredItems:function(){var e=this;return""===this.dataFiler?this.movies:this.movies.filter((function(t){return t.genres.includes(e.dataFiler)}))}},watch:{dataFiler:function(){console.log("La liste est chargé"),alert("La liste est chargé")}}}),O=N,q=(r("10a1"),Object(c["a"])(O,M,T,!1,null,"4075c8f2",null)),F=q.exports;n["default"].use(g["a"]),n["default"].config.productionTip=!1;var H=[{path:"/",name:"Home",component:F,props:!0},{path:"/admin",name:"Admin",component:j,props:!0},{path:"movie/:id",name:"Movie",component:R,props:!0}],E=new g["a"]({routes:H});new n["default"]({render:function(e){return e(m)},router:E,vuetify:h}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"6c92":function(e,t,r){"use strict";r("82a6")},"82a6":function(e,t,r){},8451:function(e,t,r){},"93e1":function(e,t,r){},"9c0c":function(e,t,r){},b628:function(e,t,r){"use strict";r("8451")}});
//# sourceMappingURL=app.84ef9ac2.js.map