"use strict"
define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,l,n,t,o){Object.defineProperty(e,"__esModule",{value:!0})
var a=l.default.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:n.default});(0,t.default)(a,o.default.modulePrefix),e.default=a}),define("dummy/components/x-toggle-label",["exports","ember-toggle/components/x-toggle-label/component"],function(e,l){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return l.default}})}),define("dummy/components/x-toggle-switch",["exports","ember-toggle/components/x-toggle-switch/component"],function(e,l){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return l.default}})}),define("dummy/components/x-toggle",["exports","ember-toggle/components/x-toggle/component","dummy/config/environment"],function(e,l,n){Object.defineProperty(e,"__esModule",{value:!0})
var t=n.default["ember-toggle"]||{}
e.default=l.default.extend({theme:t.defaultTheme||"default",defaultOffLabel:t.defaultOffLabel||"Off::off",defaultOnLabel:t.defaultOnLabel||"On::on",showLabels:t.defaultShowLabels||!1,size:t.defaultSize||"medium"})}),define("dummy/controllers/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var l=Ember.Controller,n=Ember.computed,t=Ember.debug
e.default=l.extend({boundToggle:!1,bV2:"ho",notToggleLabelValue:n.not("toggleLabelValue"),toggleLabelValue:!1,actions:{checkboxToggled:function(e,l){this.setProperties({toggled:e,toggledBy:l})},clicked:function(e,l){"toggled"===l.code?t("toggled: ",l):t("suggestion: ",l),this.set(e,l.newValue)},rejected:function(){return!1},notToggleLabelTest:function(e){this.set("toggleLabelValue",!e)},toggleLabelTest:function(e){this.set("toggleLabelValue",e)}}})}),define("dummy/helpers/not",["exports","ember"],function(e,l){function n(e){return!t(e,1)[0]}Object.defineProperty(e,"__esModule",{value:!0}),e.not=n
var t=function(){function e(e,l){var n=[],t=!0,o=!1,a=void 0
try{for(var u,i=e[Symbol.iterator]();!(t=(u=i.next()).done)&&(n.push(u.value),!l||n.length!==l);t=!0);}catch(e){o=!0,a=e}finally{try{!t&&i.return&&i.return()}finally{if(o)throw a}}return n}return function(l,n){if(Array.isArray(l))return l
if(Symbol.iterator in Object(l))return e(l,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()
e.default=l.default.Helper.helper(n)}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,l){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",l.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,l,n){function t(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var t
if("undefined"!=typeof window)t=window
else if("undefined"!=typeof global)t=global
else{if("undefined"==typeof self)return
t=self}var o,a=n.default.exportApplicationGlobal
o="string"==typeof a?a:l.default.String.classify(n.default.modulePrefix),t[o]||(t[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete t[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default={name:"export-application-global",initialize:t}}),define("dummy/resolver",["exports","ember-resolver"],function(e,l){Object.defineProperty(e,"__esModule",{value:!0}),e.default=l.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,l,n){Object.defineProperty(e,"__esModule",{value:!0})
var t=l.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL})
t.map(function(){}),e.default=t}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"q8QyBmyJ",block:'{"symbols":["toggle","toggle","label","label"],"statements":[[6,"h1"],[9,"id","title"],[7],[0,"ember-toggle"],[8],[0,"\\n\\n"],[6,"h2"],[7],[0,"Themes"],[8],[0,"\\n\\n"],[6,"table"],[7],[0,"\\n  "],[6,"tr"],[7],[0,"\\n    "],[6,"td"],[7],[1,[25,"x-toggle",null,[["name","theme","value","onToggle"],[1,"default",[19,0,["v1"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v1"]]],null]],null]]]],false],[8],[0,"\\n    "],[6,"td"],[7],[0,"default"],[8],[0,"\\n    "],[6,"td"],[7],[1,[25,"x-toggle",null,[["name","theme","value","onToggle"],[2,"light",[19,0,["v2"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v2"]]],null]],null]]]],false],[8],[0,"\\n    "],[6,"td"],[7],[0,"light"],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"tr"],[7],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["name","theme","value","onToggle"],[3,"ios",[19,0,["v3"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v3"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"td"],[7],[0,"ios"],[8],[0,"\\n    "],[6,"td"],[7],[1,[25,"x-toggle",null,[["name","theme","value","onToggle"],[4,"flat",[19,0,["v4"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v4"]]],null]],null]]]],false],[8],[0,"\\n    "],[6,"td"],[7],[0,"flat"],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"tr"],[7],[0,"\\n    "],[6,"td"],[7],[1,[25,"x-toggle",null,[["name","theme","offLabel","onLabel","value","onToggle"],[5,"flip","Nope","Yep",[19,0,["v5"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v5"]]],null]],null]]]],false],[8],[0,"\\n    "],[6,"td"],[7],[0,"flip"],[8],[0,"\\n    "],[6,"td"],[7],[1,[25,"x-toggle",null,[["name","theme","value","onToggle"],[6,"skewed",[19,0,["v6"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v6"]]],null]],null]]]],false],[8],[0,"\\n    "],[6,"td"],[7],[0,"skewed"],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"h2"],[7],[0,"Sizes"],[8],[0,"\\n\\n"],[6,"table"],[7],[0,"\\n  "],[6,"tr"],[7],[0,"\\n    "],[6,"th"],[7],[0,"Small"],[8],[0,"\\n    "],[6,"th"],[7],[0,"Medium"],[8],[0,"\\n    "],[6,"th"],[7],[0,"Large"],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"tr"],[7],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","value","onToggle"],["small",[19,0,["v7"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v7"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","value","onToggle"],["medium",[19,0,["v7"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v7"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","value","onToggle"],["large",[19,0,["v7"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v7"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"tr"],[7],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","theme","value","onToggle"],["small","light",[19,0,["v10"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v10"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","theme","value","onToggle"],["medium","light",[19,0,["v10"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v10"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","theme","value","onToggle"],["large","light",[19,0,["v10"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v10"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"tr"],[7],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","theme","value","onToggle"],["small","ios",[19,0,["v13"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v13"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","theme","value","onToggle"],["medium","ios",[19,0,["v13"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v13"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","theme","value","onToggle"],["large","ios",[19,0,["v13"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v13"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"tr"],[7],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","theme","value","onToggle"],["small","flat",[19,0,["v16"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v16"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","theme","value","onToggle"],["medium","flat",[19,0,["v16"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v16"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","theme","value","onToggle"],["large","flat",[19,0,["v16"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v16"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"tr"],[7],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","theme","value","onToggle"],["small","flip",[19,0,["v19"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v19"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","theme","value","onToggle"],["medium","flip",[19,0,["v19"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v19"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","theme","value","onToggle"],["large","flip",[19,0,["v19"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v19"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"tr"],[7],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","theme","value","onToggle"],["small","skewed",[19,0,["v20"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v20"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","theme","value","onToggle"],["medium","skewed",[19,0,["v20"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v20"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["size","theme","value","onToggle"],["large","skewed",[19,0,["v20"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["v20"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n\\n\\n"],[6,"h2"],[7],[0,"Labels"],[8],[0,"\\n\\n"],[6,"table"],[7],[0,"\\n  "],[6,"tr"],[7],[0,"\\n    "],[6,"td"],[7],[0,"\\n      "],[1,[25,"x-toggle",null,[["showLabels","offLabel","onLabel","value","onToggle"],[true,"hey","ho",[19,0,["lv1"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["lv1"]]],null]],null]]]],false],[0,"\\n    "],[8],[0,"\\n    "],[6,"td"],[7],[6,"pre"],[7],[6,"code"],[7],[0,"{{x-toggle\\n  showLabels=true\\n  offLabel=\\"hey\\"\\n  onLabel=\\"ho\\"\\n}}"],[8],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"h4"],[7],[0,"Action"],[8],[0,"\\n\\n"],[6,"div"],[9,"class","default-style text-labels"],[7],[0,"\\n  "],[6,"table"],[9,"class","demo-table"],[7],[0,"\\n    "],[6,"tr"],[7],[0,"\\n      "],[6,"td"],[7],[0,"\\n        "],[6,"div"],[9,"class","default-theme"],[7],[0,"\\n          "],[1,[25,"x-toggle",null,[["offLabel","onLabel","showLabels","value","onToggle"],["Hey","Ho",true,[19,0,["actionBound"]],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["actionBound"]]],null]],null]]]],false],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n\\n      "],[6,"td"],[7],[0,"\\n        value: "],[1,[25,"input",null,[["value"],[[19,0,["actionBound"]]]]],false],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n\\n\\n"],[6,"h2"],[7],[0,"Disabled"],[8],[0,"\\n"],[6,"pre"],[7],[0,"\\n"],[0,"{{x-toggle value=disabledTest disabled=true showLabels=true}}\\n"],[8],[0,"\\n"],[6,"span"],[9,"class","flexy"],[7],[0,"\\n  "],[1,[25,"x-toggle",null,[["value","disabled","showLabels"],[[19,0,["disabledTest"]],true,true]]],false],[6,"br"],[7],[8],[6,"br"],[7],[8],[6,"br"],[7],[8],[0,"\\n  value here: "],[1,[18,"disabledTest"],false],[0," <== Won\'t change\\n"],[8],[0,"\\n\\n\\n"],[6,"h2"],[7],[0,"Block Form"],[8],[0,"\\n"],[6,"pre"],[7],[0,"\\n"],[0,"{{#x-toggle value=value showLabels=true onToggle=(action (mut value)) as |toggle|}}\\n  "],[0,"{{#toggle.offLabel as |label|}}\\n    <b>"],[0,"{{label}}</b>\\n  "],[0,"{{/toggle.offLabel}}\\n\\n  "],[0,"{{toggle.switch theme=\'flip\' onLabel=\'diff on\' offLabel=\'diff off\'}}\\n\\n  "],[0,"{{#toggle.onLabel as |label|}}\\n    <b>"],[0,"{{label}}</b>\\n  "],[0,"{{/toggle.onLabel}}\\n  "],[0,"{{/x-toggle}}\\n"],[8],[0,"\\n"],[6,"span"],[9,"class","flexy"],[7],[0,"\\n"],[4,"x-toggle",null,[["value","showLabels","onToggle"],[[19,0,["value"]],true,[25,"action",[[19,0,[]],[25,"mut",[[19,0,["value"]]],null]],null]]],{"statements":[[4,"component",[[19,2,["offLabel"]]],null,{"statements":[[0,"      "],[6,"b"],[7],[1,[19,4,[]],false],[8],[0,"\\n"]],"parameters":[4]},null],[0,"\\n    "],[1,[25,"component",[[19,2,["switch"]]],[["theme","onLabel","offLabel"],["flip","diff on","diff off"]]],false],[0,"\\n\\n"],[4,"component",[[19,2,["onLabel"]]],null,{"statements":[[0,"      "],[6,"b"],[7],[1,[19,3,[]],false],[8],[0,"\\n"]],"parameters":[3]},null]],"parameters":[2]},null],[8],[0,"\\n\\n"],[6,"h2"],[7],[0,"Block Form - Single Toggle Label"],[8],[0,"\\n"],[6,"pre"],[7],[0,"\\n"],[0,"{{#x-toggle value=value showLabels=true onToggle=(action (mut value)) as |toggle|}}\\n  "],[0,"{{#toggle.label value=(not value) as |label|}}\\n    <b>turn "],[0,"{{if value \'on\' \'off\'}}</b>\\n  "],[0,"{{/toggle.label}}\\n\\n  "],[0,"{{toggle.switch theme=\'flip\' onLabel=\'diff on\' offLabel=\'diff off\'}}\\n"],[0,"{{/x-toggle}}\\n"],[8],[0,"\\n"],[6,"span"],[9,"class","flexy"],[7],[0,"\\n"],[4,"x-toggle",null,[["value","showLabels","onToggle"],[[19,0,["value"]],true,[25,"action",[[19,0,[]],[25,"mut",[[19,0,["value"]]],null]],null]]],{"statements":[[4,"component",[[19,1,["label"]]],[["value"],[[25,"not",[[19,0,["value"]]],null]]],{"statements":[[0,"      "],[6,"b"],[7],[0,"turn "],[1,[25,"if",[[19,0,["value"]],"off","on"],null],false],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n    "],[1,[25,"component",[[19,1,["switch"]]],[["theme","onLabel","offLabel"],["flip","diff on","diff off"]]],false],[0,"\\n"]],"parameters":[1]},null],[8],[0,"\\n\\n"],[6,"h2"],[7],[0,"Wrapped in a single label"],[8],[0,"\\n"],[6,"pre"],[7],[0,"\\n<label>\\n  "],[0,"{{x-toggle\\n    onToggle=(action \'toggleLabelTest\')\\n    value=(readonly toggleLabelValue)}}\\n   Wrapped in Label Test\\n</label>\\n"],[8],[0,"\\n"],[6,"span"],[9,"class","flexy"],[7],[0,"\\n  "],[6,"label"],[7],[0,"\\n  "],[1,[25,"x-toggle",null,[["onToggle","value"],[[25,"action",[[19,0,[]],"toggleLabelTest"],null],[25,"readonly",[[19,0,["toggleLabelValue"]]],null]]]],false],[0,"\\n    Wrapped in Label Test\\n  "],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"pre"],[7],[0,"\\n<label>\\n  "],[0,"{{x-toggle\\n    onToggle=(action \'notToggleLabelTest\')\\n    value=(readonly notToggleLabelValue)}}\\n   Negated test\\n</label>\\n"],[8],[0,"\\n"],[6,"span"],[9,"class","flexy"],[7],[0,"\\n  "],[6,"label"],[7],[0,"\\n  "],[1,[25,"x-toggle",null,[["onToggle","value"],[[25,"action",[[19,0,[]],"notToggleLabelTest"],null],[25,"readonly",[[19,0,["notToggleLabelValue"]]],null]]]],false],[0,"\\n    Negated test\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/config/environment",["ember"],function(e){try{var l="dummy/config/environment",n=document.querySelector('meta[name="'+l+'"]').getAttribute("content"),t=JSON.parse(unescape(n)),o={default:t}
return Object.defineProperty(o,"__esModule",{value:!0}),o}catch(e){throw new Error('Could not read config from meta tag with name "'+l+'".')}}),runningTests||require("dummy/app").default.create({})