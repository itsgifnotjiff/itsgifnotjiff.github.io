(function(e){function t(t){for(var r,s,o=t[0],l=t[1],c=t[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},i=[];function s(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0a1467db"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(e);var c=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,a[1](c)}n[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-main",[a("v-banner",{attrs:{color:"red lighten-4","single-line":""},scopedSlots:e._u([{key:"actions",fn:function(t){var r=t.dismiss;return[a("v-btn",{attrs:{"x-large":"",text:"",color:"error"},on:{click:r}},[e._v(" Dismiss ")])]}}]),model:{value:e.banner,callback:function(t){e.banner=t},expression:"banner"}},[a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",[a("v-card",{staticClass:"ma-4 pa-4",attrs:{color:"error"}},[a("span",{staticClass:"text-h5 white--text text-center ma-8"},[e._v(" Please enable popups for this website in order to be able to export the animated GIF files. ")])])],1)],1)],1),a("router-view")],1)],1)},i=[],s={name:"GeoGIF",data:function(){return{banner:!0}}},o=s,l=(a("034f"),a("2877")),c=a("6544"),u=a.n(c),p=a("7496"),d=a("e4e5"),m=a("8336"),f=a("b0af"),y=a("62ad"),v=a("f6c4"),h=a("0fd9"),g=Object(l["a"])(o,n,i,!1,null,null,null),x=g.exports;u()(g,{VApp:p["a"],VBanner:d["a"],VBtn:m["a"],VCard:f["a"],VCol:y["a"],VMain:v["a"],VRow:h["a"]});a("d3b7"),a("3ca3"),a("ddb0");var b=a("8c4f"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Map")},T=[],S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[e.listFlag?a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-text-field",{staticClass:"mt-2",staticStyle:{margin:"0.5rem"},attrs:{color:"white",label:"Search GeoMet-Weather Layers",rounded:"",filled:""},model:{value:e.searchGeoMet,callback:function(t){e.searchGeoMet=t},expression:"searchGeoMet"}})],1):e._e(),e.listFlag?e._e():a("v-row",{attrs:{justify:"center"}},[a("v-card",{attrs:{loading:""}},[a("v-card-title",[e._v(" Loading GeoMet-Weather Layers ")])],1)],1),a("v-row",[a("v-expansion-panels",{model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[a("v-expansion-panel",{model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[a("v-expansion-panel-header",[e._v(" GeoMet-Weather Layer Tree ")]),a("v-expansion-panel-content",[a("v-sheet",[a("v-treeview",{ref:"tree",staticClass:"overflow-y-auto overflow-x-auto",staticStyle:{"max-height":"700px","min-width":"500px"},attrs:{items:e.filterObj,open:e.open,"item-key":"Title",dense:""},on:{"update:open":function(t){e.open=t}},scopedSlots:e._u([{key:"prepend",fn:function(t){var r=t.item;return[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"auto"}},[r.children?a("h3",{staticClass:"text-no-wrap"},[e._v(e._s(r.Title))]):e._e(),r.children?e._e():a("h4",{staticClass:"text-no-wrap"},[e._v(e._s(r.Title))]),r.children?e._e():a("v-divider"),r.children?e._e():a("h6",{staticStyle:{"max-width":"600px"}},[e._v(e._s(r.Dimension))]),r.children?e._e():a("v-divider"),r.children?e._e():a("h5",{staticStyle:{"max-width":"600px"}},[e._v(e._s(r.Abstract))])],1),r.children?e._e():a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{"x-large":"",color:"white",icon:"",disabled:e.clicked.includes(r.Name)},on:{click:function(t){return e.addLayerEvent(r)}}},[a("v-icon",{attrs:{color:"primary"}},[e._v(" mdi-plus ")])],1)],1)],1)]}}])})],1)],1)],1)],1)],1),this.gifstarted?a("v-row",[a("v-progress-linear",{staticClass:"my-4",attrs:{height:"20",rounded:""},model:{value:this.gifProgressPercent,callback:function(t){e.$set(this,"gifProgressPercent",t)},expression:"this.gifProgressPercent"}},[a("strong",[e._v(e._s(Math.ceil(this.gifProgressPercent))+"%")])])],1):e._e(),0!==e.addedGeoMetLayers.length?a("v-row",[a("v-chip-group",{attrs:{multiple:"","active-class":"primary--text",column:""},on:{change:e.updateSelectedAddedGeoMetLayers},model:{value:e.selectedChips,callback:function(t){e.selectedChips=t},expression:"selectedChips"}},e._l(e.addedGeoMetLayers,(function(t,r){return a("v-chip",{key:r,staticStyle:{"chip-selected-opacity":"0.6"},attrs:{value:t},on:{click:function(a){return e.chipClickEvent(t)}}},[e._v(" "+e._s(t.get("layerTitle"))+" ")])})),1)],1):e._e(),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-overlay",{attrs:{value:e.helpOverlay,opacity:"0.3","z-index":"10"}},[a("v-row",[a("v-btn",{staticClass:"mx-auto",staticStyle:{margin:"1rem"},attrs:{color:"grey darken-2",block:""},on:{click:e.updateHelpOverlayFlag}},[e._v(" Close Overlay ")])],1),a("v-stepper",{staticClass:"rounded-xl mx-auto",staticStyle:{"max-width":"85%"},attrs:{vertical:""},model:{value:e.stepperData,callback:function(t){e.stepperData=t},expression:"stepperData"}},[a("v-stepper-step",{attrs:{complete:e.stepperData>1,step:"1"}},[e._v(" Add Layers "),a("small",[e._v("Initially there is just a Base Map")])]),a("v-stepper-content",{attrs:{step:"1"}},[a("v-card",{staticClass:"mb-12",attrs:{height:"200px"}},[a("v-row",{staticClass:"pa-4",attrs:{justify:"start",align:"center"}},[a("v-btn",{staticStyle:{margin:"1rem"},attrs:{color:"primary"}},[e._v(" Add GeoMet Weather Layers ")]),a("v-divider",{attrs:{vertical:""}}),a("span",{staticClass:"pl-4"},[e._v(" Launches an overlay that allows you to search and pick layers. ")])],1),a("v-row",{staticClass:"pa-4",attrs:{justify:"start",align:"center"}},[a("v-btn",{staticStyle:{margin:"1rem"},attrs:{color:"primary"}},[e._v(" Add Example Layers "),a("v-icon",[e._v(" mdi-map-plus ")])],1),a("v-divider",{attrs:{vertical:""}}),a("span",{staticClass:"pl-4"},[e._v(" Adds 3 default layers to play around with. ")])],1)],1),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.stepperData=2}}},[e._v(" Continue ")])],1),a("v-stepper-step",{attrs:{complete:e.stepperData>2,step:"2"}},[e._v(" Select Layers "),a("small",[e._v("Sets the selected layers visible")])]),a("v-stepper-content",{attrs:{step:"2"}},[a("v-card",{staticClass:"mb-12"},[a("v-row",{staticClass:"my-4 py-4",attrs:{justify:"center",align:"center"}},[a("v-chip",{staticClass:"mx-4 px-4"},[e._v(" Radar precipitation rate (Rain) (1 km) [mm/hr] ")]),a("v-chip",{staticClass:"mx-4 px-4"},[e._v(" Concentration: surface PM2.5 [kg/m3] ")]),a("v-chip",{staticClass:"mx-4 px-4"},[e._v(" RDWPS.SUPERIOR - Winds [m/s] ")])],1),a("v-divider",{staticClass:"ma-2"}),a("v-row",{staticClass:"pa-4"},[a("span",{staticClass:"pl-4 mx-auto"},[e._v(' These "chips" represent the different layers added in Step 1. Click them to add and remove them from the map. For each selected layer a legend and control panel will appear. ')])])],1),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.stepperData=3}}},[e._v(" Continue ")]),a("v-btn",{on:{click:function(t){e.stepperData=1}}},[e._v(" Previous ")])],1),a("v-stepper-step",{attrs:{complete:e.stepperData>3,step:"3"}},[e._v(" Controls and Information "),a("small",[e._v("Legends, time sliders, export to GIF and more")])]),a("v-stepper-content",{attrs:{step:"3"}},[a("v-row",{staticClass:"my-4 py-4",attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"4"}},[a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",[e._v(" Radar precipitation rate (Rain) (1 km) [mm/hr] ")]),a("v-expansion-panel-content",{attrs:{align:"center"}},[a("v-img",{attrs:{src:"https://geo.weather.gc.ca/geomet?version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=RADAR_1KM_RRAI&format=image/png","max-height":"200","max-width":"150",contain:""}})],1)],1)],1)],1),a("v-col",{attrs:{cols:"7"}},[a("span",{staticClass:"text-h5"},[e._v(" For each Slected layer a panel with its title will appear. You can click the panel to view the legend of the layer. The example panel on the left is live so you can try it. ")])])],1),a("v-divider",{staticClass:"ma-2"}),a("v-row",{staticClass:"pa-4"},[a("h1",[e._v("Rest of help")])])],1)],1)],1)],1),a("v-row",[a("div",{ref:"map",staticClass:"map",staticStyle:{width:"100%",height:"500px"}})]),a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("v-btn",{staticClass:"my-4",attrs:{color:"primary"},on:{click:e.addExampleLayers}},[e._v(" Add Example Layers "),a("v-icon",[e._v(" mdi-map-plus ")])],1)],1),a("v-spacer"),a("v-col",{attrs:{cols:"3"}},[a("v-switch",{attrs:{label:"Frame Time Text"},model:{value:e.frameTimeText,callback:function(t){e.frameTimeText=t},expression:"frameTimeText"}})],1),a("v-col",{attrs:{cols:"3"}},[a("v-switch",{attrs:{label:"Frame Title Text"},model:{value:e.frameTitleText,callback:function(t){e.frameTitleText=t},expression:"frameTitleText"}})],1),a("v-spacer"),a("v-col",{attrs:{cols:"1"}},[a("v-btn",{staticStyle:{margin:"0.5rem"},attrs:{color:"primary",fab:""},on:{click:e.exportMap}},[a("v-icon",[e._v(" mdi-image-size-select-actual ")])],1)],1),a("v-col",{attrs:{cols:"1"}},[a("v-btn",{staticStyle:{margin:"0.5rem"},attrs:{color:"primary",fab:""},on:{click:e.updateHelpOverlayFlag}},[a("v-icon",[e._v(" mdi-help-circle ")])],1)],1)],1),a("v-row",{staticStyle:{"padding-bottom":"150px"}},e._l(e.getSelectedGeoMetLayers,(function(t,r){return a("v-card",{key:r,staticClass:"mt-6",attrs:{outlined:"",shaped:"",elevation:"6"}},[a("v-card-title",[e._v(" "+e._s(t.get("layerTitle"))+" : "+e._s(e.opacities.find((function(e){return e.layerName===t.get("layerName")})).layerCurrentTime)+" ")]),a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"7"}},[a("v-row",[a("v-slider",{staticStyle:{margin:"0.5rem"},attrs:{min:"0",max:"1",step:"0.05"},on:{input:function(a){return e.setOpacityGeneric(t)}},scopedSlots:e._u([{key:"prepend",fn:function(){return[e._v(" Opacity ")]},proxy:!0},{key:"append",fn:function(){return[e._v(" "+e._s(Math.ceil(Math.round(100*t.getOpacity())))+"% ")]},proxy:!0}],null,!0),model:{value:e.opacities.find((function(e){return e.layerName===t.get("layerName")})).layerOpacity,callback:function(a){e.$set(e.opacities.find((function(e){return e.layerName===t.get("layerName")})),"layerOpacity",a)},expression:"opacities.find(l => {return l.layerName === ls.get('layerName')}).layerOpacity"}}),a("v-btn",{staticStyle:{margin:"0.5rem"},attrs:{icon:"","x-large":"",outlined:"",color:"primary"},on:{click:function(a){return e.sonOfMapToGIF(t)}}},[a("v-icon",{attrs:{dark:""}},[e._v(" mdi-file-gif-box ")])],1)],1),a("h5",{staticClass:"mt-4"},[e._v(" "+e._s(e.opacities.find((function(e){return e.layerName===t.get("layerName")})).layerAbstract)+" ")])],1),a("v-spacer"),a("v-col",{attrs:{cols:"5"}},[a("v-img",{staticStyle:{margin:"auto"},attrs:{src:"https://geo.weather.gc.ca/geomet?version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer="+t.get("layerName")+"&format=image/png","max-height":"300","max-width":"200",contain:""}})],1)],1),a("v-row",[a("v-slider",{attrs:{max:e.getDateArrayLength(t)-1,ticks:"always"},on:{input:function(a){return e.sliderInputGeneric(t)}},scopedSlots:e._u([{key:"prepend",fn:function(){return[e._v(" "+e._s(t.get("layerStartTime"))+" ")]},proxy:!0},{key:"append",fn:function(){return[e._v(" "+e._s(t.get("layerEndTime"))+" ")]},proxy:!0}],null,!0),model:{value:e.opacities.find((function(e){return e.layerName===t.get("layerName")})).layerSliderValue,callback:function(a){e.$set(e.opacities.find((function(e){return e.layerName===t.get("layerName")})),"layerSliderValue",a)},expression:"opacities.find(l => {return l.layerName === ls.get('layerName')}).layerSliderValue"}})],1)],1)],1)})),1),a("a",{attrs:{id:"image-download",download:"firework_experiment.png"}}),a("a",{attrs:{id:"gif-download",download:"firework_experiment.gif"}})],1)},k=[],_=a("1da1"),C=(a("96cf"),a("d81d"),a("caad"),a("2532"),a("7db0"),a("ac1f"),a("1276"),a("a9e3"),a("466d"),a("2b3d"),a("cb29"),a("5eee")),L=a("21bc"),M=a("a2c7"),G=a("480c"),A=a("d0e9"),O=a("c810"),P=a("6792"),N=a("256f"),D=a("cd40"),R=a.n(D),j=(a("5bc0"),a("bc3a")),V=a.n(j),E=a("e43a"),I=a.n(E),F=new DOMParser,W={mounted:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getCapabilitiesGeoMet(),e.map=new C["a"]({target:e.$refs["map"],layers:[e.osm],view:new M["a"]({center:Object(N["d"])([-90,60]),zoom:4}),controls:Object(L["a"])({attribution:!1})}),e.selectedChips=e.selectedAddedGeometLayers;case 3:case"end":return t.stop()}}),t)})))()},computed:{gifProgressPercent:function(){return Math.round(this.gifprogress/this.giflength*100)},listFlag:function(){return 0!==this.treeItems.length},filterObj:function(){var e=this;return this.filterObjectFunction(this.treeItems,(function(t){var a=t.Title;return a.toLowerCase().includes(e.searchGeoMet.toLowerCase())}))},clicked:function(){return this.addedGeoMetLayers.map((function(e){return e.get("layerName")}))},getSelectedGeoMetLayers:function(){return this.selectedGeometLayers}},methods:{updateGeoMetLayerFlag:function(){this.addGeoMetLayerOverlay||this.getCapabilitiesGeoMet(),this.addGeoMetLayerOverlay=!this.addGeoMetLayerOverlay},updateHelpOverlayFlag:function(){this.helpOverlay=!this.helpOverlay},updateSelectedAddedGeoMetLayers:function(){console.log(this.selectedChips),this.selectedGeometLayers=this.selectedChips},addLayerEvent:function(e){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function a(){var r,n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.getStartEndTimeNew(e.Dimension),n=new O["a"]({source:new P["a"]({format:"image/png",url:"https://geo.weather.gc.ca/geomet/",params:{LAYERS:e.Name},transition:0,crossOrigin:"Anonymous"}),visible:!0,opacity:.7,zIndex:10}),n.setProperties({layerName:e.Name,layerTitle:e.Title,layerStartTime:r[0],layerEndTime:r[1],layerTimeStep:t.convertTimeStepToInt(r[2])}),a.next=5,t.getDateArray(r[0],r[1],r[2]);case 5:i=a.sent,t.opacities.push({layerName:e.Name,layerAbstract:e.Abstract,layerOpacity:.7,layerCurrentTime:r[0],layerDateArray:i,layerDateArrayLength:i.length,layerAnimationID:null,layerSliderValue:0}),t.map.addLayer(n),t.addedGeoMetLayers.push(n),t.selectedChips.push(n),t.selectedGeometLayers.push(n);case 11:case"end":return a.stop()}}),a)})))()},setTimeGeneric:function(e){var t=this.opacities.find((function(t){return t.layerName===e.get("layerName")}))["layerCurrentTime"],a=e.get("layerStartTime"),r=e.get("layerEndTime"),n=e.get("layerTimeStep");t=null===t||t>=r?a:new Date(this.opacities.find((function(t){return t.layerName===e.get("layerName")}))["layerCurrentTime"].setMinutes(t.getMinutes()+n)),e.getSource().updateParams({TIME:t.toISOString().split(".")[0]+"Z"})},setTimeDate:function(e,t){var a=this;return Object(_["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a.opacities.find((function(t){return t.layerName===e.get("layerName")}))["layerCurrentTime"]=t,e.getSource().updateParams({TIME:t.toISOString().split(".")[0]+"Z"});case 2:case"end":return r.stop()}}),r)})))()},myTimeout:function(e){return new Promise((function(t){return setTimeout(t,e)}))},getDateArray:function(e,t,a){var r=this;return Object(_["a"])(regeneratorRuntime.mark((function n(){var i,s,o,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:i=new Array,s=e,o=t,l=r.convertTimeStepToInt(a);while(s<=o)i.push(s),s=new Date(s.setMinutes(s.getMinutes()+l));return n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})))()},getDateArrayLength:function(e){return this.opacities.find((function(t){return t.layerName===e.get("layerName")}))["layerDateArrayLength"]},sliderInputGeneric:function(e){this.opacities.find((function(t){return t.layerName===e.get("layerName")}))["layerCurrentTime"]=this.opacities.find((function(t){return t.layerName===e.get("layerName")}))["layerDateArray"][this.opacities.find((function(t){return t.layerName===e.get("layerName")}))["layerSliderValue"]],this.setTimeGeneric(e)},getStartEndTimeNew:function(e){var t=e.split("/");return[new Date(t[0]),new Date(t[1]),t[2]]},getStartEndTime:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="https://geo.weather.gc.ca/geomet/?lang=en&service=WMS&request=GetCapabilities&version=1.3.0&LAYERS="+e,t.next=3,fetch(a);case 3:return r=t.sent,t.next=6,r.text().then((function(e){return F.parseFromString(e,"text/xml").getElementsByTagName("Dimension")[0].innerHTML.split("/")}));case 6:return n=t.sent,t.abrupt("return",[new Date(n[0]),new Date(n[1]),n[2]]);case 8:case"end":return t.stop()}}),t)})))()},setOpacityGeneric:function(e){e.setOpacity(this.opacities.find((function(t){return t.layerName===e.get("layerName")}))["layerOpacity"])},chipClickEvent:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.setVisible(!e.getVisible());case 1:case"end":return t.stop()}}),t)})))()},convertTimeStepToInt:function(e){var t;switch(e){case"PT10M":t=10;break;case"PT15M":t=15;break;case"PT30M":t=10;break;case"PT1H":t=60;break;case"PT3H":t=180;break;case"PT6H":t=360;break;case"PT12H":t=720;break;case"PT24H":t=1440;break}return t},filterObjectFunction:function(e,t){var a=this;return e.reduce((function(e,r){var n=a.filterObjectFunction(r.children||[],t);return(t(r)||n.length)&&e.push(Object.assign({},r,n.length&&{children:n})),e}),[])},getCapabilitiesGeoMet:function(){var e=this;V.a.get("https://geo.weather.gc.ca/geomet?lang=en&service=WMS&version=1.3.0&request=GetCapabilities").then((function(t){var a='<xsl:stylesheet \n                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"\n                xmlns:xs="http://www.w3.org/2001/XMLSchema"\n                xmlns:mf="http://example.com/mf"\n                exclude-result-prefixes="#all"\n                xpath-default-namespace="http://www.opengis.net/wms"\n                xmlns="http://www.w3.org/2005/xpath-functions"\n                expand-text="yes"\n                version="3.0">\n\n                <xsl:strip-space elements="*"/>\n                \n                <xsl:mode on-no-match="shallow-skip"/>\n\n                <xsl:output method="json" build-tree="no" indent="yes"/>\n                \n                <xsl:template match="/WMS_Capabilities/Capability/Layer" priority="5">\n                    <xsl:map>\n                    <xsl:apply-templates/>\n                    </xsl:map>\n                </xsl:template>\n                \n                <xsl:template match="Layer/Title[1] | Layer/Name[1] | Layer/Abstract[1] | Layer/Dimension[1]">\n                    <xsl:map-entry key="local-name()" select="data()"/>\n                </xsl:template>\n                \n                <xsl:template match="Layer[1]">\n                    <xsl:map-entry key="\'children\'">\n                    <xsl:sequence select="array { ../Layer/mf:apply-templates(.) }"/>\n                    </xsl:map-entry>\n                </xsl:template>\n                \n                <xsl:template match="Layer[position() > 1]"/>\n                \n                <xsl:function name="mf:apply-templates" as="item()*">\n                    <xsl:param name="elements" as="element(*)*"/>\n                    <xsl:map>\n                    <xsl:apply-templates select="$elements/*"/>      \n                    </xsl:map>\n                </xsl:function>\n                \n                </xsl:stylesheet>',r=I.a.XPath.evaluate("\n                transform(\n                    map { \n                    'source-node' : parse-xml($xml), \n                    'stylesheet-text' : $xslt, \n                    'delivery-format' : 'raw' \n                    }\n                    )?output",[],{params:{xml:t.data,xslt:a}});e.treeItems=r.children,e.geometRoot=r.Title}))},exportMap:function(){this.map.once("rendercomplete",(function(){var e=document.createElement("canvas"),t=document.querySelector(".map");e.width=t.offsetWidth,e.height=t.offsetHeight;var a=e.getContext("2d");if(Array.prototype.forEach.call(document.querySelectorAll(".ol-layer canvas"),(function(e){if(e.width>0){var t=e.parentNode.style.opacity;a.globalAlpha=""===t?1:Number(t);var r=e.style.transform,n=r.match(/^matrix\(([^\(]*)\)$/)[1].split(",").map(Number);CanvasRenderingContext2D.prototype.setTransform.apply(a,n),a.drawImage(e,0,0)}})),navigator.msSaveBlob)navigator.msSaveBlob(e.msToBlob(),"firework_experiment.png");else{var r=document.getElementById("image-download");r.href=e.toDataURL(),r.click()}})),this.map.renderSync()},sonOfMapToGIF:function(e){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function a(){var r,n,i,s,o,l,c,u,p;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r=t.opacities.find((function(t){return t.layerName===e.get("layerName")}))["layerDateArray"],n=t.opacities.find((function(t){return t.layerName===e.get("layerName")}))["layerDateArrayLength"],i=e.get("layerName"),s=e.get("layerTitle"),t.giflength=n,t.gifstarted=!0,o=new R.a({workers:4,quality:20,height:t.map.getSize()[1],width:t.map.getSize()[0],workerScript:"/gif.worker.js"}),l=0;case 8:if(!(l<r.length-1)){a.next=19;break}for(t.setTimeDate(e,r[l]),c=function(e){if(i!==t.getSelectedGeoMetLayers[e].get("layerName")){p=t.opacities.find((function(a){return a.layerName===t.getSelectedGeoMetLayers[e].get("layerName")}))["layerDateArray"];for(var a=0;a<p.length-1;a++)r[l].getTime()===p[a].getTime()&&t.setTimeDate(t.getSelectedGeoMetLayers[e],p[a])}},u=0;u<t.getSelectedGeoMetLayers.length-1;u++)c(u);return a.next=14,new Promise((function(e){return t.map.once("rendercomplete",e)}));case 14:t.mapToGIFCallback(o,s,r[l]),t.gifprogress++;case 16:l++,a.next=8;break;case 19:o.on("finished",(function(e){navigator.msSaveBlob?navigator.msSaveBlob(e,"firework_experiment.gif"):window.open(URL.createObjectURL(e))})),o.render(),t.gifstarted=!1,t.gifprogress=0,t.giflength=0,o=null,t.resetCurrentTime(e);case 26:case"end":return a.stop()}}),a)})))()},mapToGIFCallback:function(e,t,a){var r=this.frameTitleText,n=this.frameTimeText,i=this.roundRect,s=document.createElement("canvas"),o=document.querySelector(".map");s.width=o.offsetWidth,s.height=o.offsetHeight;var l=s.getContext("2d");if(Array.prototype.forEach.call(document.querySelectorAll(".ol-layer canvas"),(function(e){if(e.width>0){var t=e.parentNode.style.opacity;l.globalAlpha=""===t?1:Number(t);var a=e.style.transform,r=a.match(/^matrix\(([^\(]*)\)$/)[1].split(",").map(Number);CanvasRenderingContext2D.prototype.setTransform.apply(l,r),l.drawImage(e,0,0)}})),r){l.strokeStyle="white",l.fillStyle="white",l.textAlign="center",l.font="24px Airal";var c=parseInt(l.font.substring(0,2)),u=l.measureText(t),p=o.offsetWidth/2-u.width/2*1.1;i(l,p,c/6,1.1*u.width,1.1*c,{tl:10,tr:10,br:10,bl:10},!0),l.strokeStyle="black",l.fillStyle="black",l.fillText(t,o.offsetWidth/2,c)}if(n){l.strokeStyle="white",l.fillStyle="white",l.textAlign="center",l.font="24px Airal";var d=parseInt(l.font.substring(0,2)),m=l.measureText(a);i(l,d/2,o.offsetHeight-d,1.01*m.width,1.1*d,{tl:10,tr:10,br:10,bl:10},!0),l.strokeStyle="black",l.fillStyle="black",l.fillText(a,m.width/1.9,o.offsetHeight-d/6)}e.addFrame(s,{copy:!0,delay:this.delayInput})},addExampleLayers:function(){this.addLayerEvent(this.mockRain),this.addLayerEvent(this.mockFire),this.addLayerEvent(this.mockSuperior)},roundRect:function(e,t,a,r,n,i,s,o){if("undefined"===typeof o&&(o=!0),"undefined"===typeof i&&(i=5),"number"===typeof i)i={tl:i,tr:i,br:i,bl:i};else{var l={tl:0,tr:0,br:0,bl:0};for(var c in l)i[c]=i[c]||l[c]}e.beginPath(),e.moveTo(t+i.tl,a),e.lineTo(t+r-i.tr,a),e.quadraticCurveTo(t+r,a,t+r,a+i.tr),e.lineTo(t+r,a+n-i.br),e.quadraticCurveTo(t+r,a+n,t+r-i.br,a+n),e.lineTo(t+i.bl,a+n),e.quadraticCurveTo(t,a+n,t,a+n-i.bl),e.lineTo(t,a+i.tl),e.quadraticCurveTo(t,a,t+i.tl,a),e.closePath(),s&&e.fill(),o&&e.stroke()}},data:function(){return{map:null,gif:null,gifstarted:!1,gifprogress:0,giflength:0,osm:new G["a"]({source:new A["a"]}),startTimeSurface10:null,endTimeSurface10:null,currentTimeSurface10:null,dateArraySurface10:null,animationIDSurface10:null,sliderSurface10:0,opacitySurface10:.7,s10ToggleFlag:!0,frameRate:1,helpOverlay:!1,stepperData:1,helpOpacity:.7,helpDateArray:[],addedGeoMetLayers:[],selectedAddedGeometLayers:[],addGeoMetLayerOverlay:!1,searchGeoMet:"",treeItems:[],open:[],geometRoot:"",opacities:[],selectedGeometLayers:[],selectedChips:[],delayInput:200,timeText:!1,frameTimeText:!0,frameTitleText:!0,panel:0,mockRain:{Name:"RADAR_1KM_RRAI",Title:"Radar precipitation rate (Rain) (1 km) [mm/hr]",Abstract:"Composite of American and Canadian weather radars updated every 10 minutes",Dimension:"2022-02-16T15:40:00Z/2022-02-16T18:40:00Z/PT10M"},mockFire:{Name:"RAQDPS.SFC_PM2.5",Title:"Concentration: surface PM2.5 [kg/m3]",Abstract:"The Regional Air Quality Deterministic Prediction System (RAQDPS) carries out physics and chemistry calculations to arrive at deterministic predictions of chemical species concentration of interest to air quality. Chemical constituents include O3, SO2, NO, and NO2 gases as well as fine particulate matter PM2.5 (2.5 micrometers in diameter or less) and coarse particulate matter PM10 (10 micrometers in diameter or less). Predictions are available from the current day out to 48 hours into the future. Geographical coverage is Canada and the United States. Data is available at a horizontal resolution of 10 km. While the system encompasses 80 vertical levels, data is available only for the surface level. Predictions are performed twice a day.",Dimension:"2022-02-16T12:00:00Z/2022-02-19T12:00:00Z/PT1H"},mockSuperior:{Name:"RDWPS-Lake-Ontario_1km_Winds_10m",Title:"RDWPS - Winds at 10m above surface [m/s]",Abstract:"The Regional Deterministic Wave Prediction System (RDWPS) carries out physics calculations to arrive at deterministic predictions of wave conditions in oceans and large bodies of water from the current day out to 48 hours into the future. Forecast elements include significant wave height, swell, peak period and others. This product contains raw numerical results of these calculations. Geographical coverage is specific to marine areas over the Pacific, Atlantic and Arctic oceans as well as over the Great Lakes. Data is only available for the surface level. Data is available at varying horizontal resolutions from 5 to 50 km. Predictions are performed four times a day.",Dimension:"2022-02-16T12:00:00Z/2022-02-18T12:00:00Z/PT1H"}}}},H=W,q=a("99d9"),$=a("cc20"),B=a("ef9a"),z=a("a523"),Z=a("ce7e"),U=a("cd55"),Q=a("49e2"),X=a("c865"),Y=a("0393"),J=a("132d"),K=a("adda"),ee=a("a797"),te=a("8e36"),ae=a("8dd9"),re=a("ba0d"),ne=a("2fa4"),ie=a("7e85"),se=a("e516"),oe=a("56a4"),le=a("b73d"),ce=a("8654"),ue=a("eb2a"),pe=Object(l["a"])(H,S,k,!1,null,null,null),de=pe.exports;u()(pe,{VBtn:m["a"],VCard:f["a"],VCardText:q["a"],VCardTitle:q["b"],VChip:$["a"],VChipGroup:B["a"],VCol:y["a"],VContainer:z["a"],VDivider:Z["a"],VExpansionPanel:U["a"],VExpansionPanelContent:Q["a"],VExpansionPanelHeader:X["a"],VExpansionPanels:Y["a"],VIcon:J["a"],VImg:K["a"],VOverlay:ee["a"],VProgressLinear:te["a"],VRow:h["a"],VSheet:ae["a"],VSlider:re["a"],VSpacer:ne["a"],VStepper:ie["a"],VStepperContent:se["a"],VStepperStep:oe["a"],VSwitch:le["a"],VTextField:ce["a"],VTreeview:ue["a"]});var me={name:"Home",components:{Map:de}},fe=me,ye=Object(l["a"])(fe,w,T,!1,null,null,null),ve=ye.exports;r["a"].use(b["a"]);var he=[{path:"/",name:"Home",component:ve},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],ge=new b["a"]({mode:"history",base:"/",routes:he}),xe=ge,be=a("2f62"),we={addedGeoMetLayers:[],addedGeoMetLayersFlag:!1,selectedAddedGeometLayers:[]},Te={addGeoMetLayerOverlay:function(e){return e.addedGeoMetLayersFlag},getAddedGeoMetLayers:function(e){return e.addedGeoMetLayers},getSelectedAddedGeometLayers:function(e){return e.selectedAddedGeometLayers}},Se={changeGeoMetAddOverlayFlag:function(e,t){e.addedGeoMetLayersFlag=t},addGeoMetLayer:function(e,t){e.addedGeoMetLayers.push(t)},setSelectedAddedGeometLayers:function(e,t){e.selectedAddedGeometLayers=t}},ke={updateGeoMetAddFlag:function(e,t){var a=e.commit;a("changeGeoMetAddOverlayFlag",t)},addGeoMetLayer:function(e,t){var a=e.commit;a("addGeoMetLayer",t)},updateSelectedAddedGeometLayers:function(e,t){var a=e.commit;a("setSelectedAddedGeometLayers",t)}},_e={namespaced:!0,state:we,getters:Te,actions:ke,mutations:Se};r["a"].use(be["a"]);var Ce=new be["a"].Store({modules:{map:_e},state:{},mutations:{},actions:{}}),Le=(a("5363"),a("f309"));r["a"].use(Le["a"]);var Me=new Le["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({router:xe,store:Ce,vuetify:Me,render:function(e){return e(x)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.b5dc8546.js.map