sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
   "use strict";
   return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata : {
         interfaces: ["sap.ui.core.IAsyncContentCreation"],
         manifest: "json"
      },
      init : function () {         
         UIComponent.prototype.init.apply(this, arguments);         
         let oData = {
            recipient:{
               name: " "
            }
         };
         let oModel = new JSONModel(oData);
         this.setModel(oModel);
         this.getRouter().initialize();
      }
   });
});

