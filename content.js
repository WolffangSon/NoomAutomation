chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {

  switch (request.type) {
    case 'activate':
      sendResponse({ status: 'alive' });
      break;
    case 'requestData':
      let rows = constructData();
      sendResponse({ status: 'success', data: rows });
      break;
    default:
      sendResponse({ status: 'error' });
  }

});

function constructData() {
  let table = [];
  let col = 0;
  let row = 0;
  if (jQuery) {

    // flex frame principal
    var commonSelector = "#5debae66-1bbc-47e1-c4b6-4b7db4963f8c:last";
    //var gridRowSelector = "div[class^='f9-widget-grid-row']";
    var dockedGridRowSelector = "div[class^='f9-widget-grid-row'].f9-widget-grid-contents-left.docked";
    var gridRowSelectorLeft = commonSelector + " " + "div.f9-widget-grid-contents-left div.f9-widget-grid-row";
    var gridRowSelectorCenter = commonSelector + " " + "div.f9-widget-grid-contents-center div.f9-widget-grid-row";
    var widgetCallsCommonSelector = "#0fc80b24-cbce-4696-b490-469357505a5f:last";
    var widgetContainerCallsSelector = widgetCallsCommonSelector + " " + "div .chart-ring-contents div.chart-container";
    var widgetCallsRowSelectorLeft = widgetCallsCommonSelector + " " + "div.f9-widget-grid-contents-left div.f9-widget-grid-row";
    var widgetCallsRowSelectorCenter = widgetCallsCommonSelector + " " + "div.f9-widget-grid-contents-center div.f9-widget-grid-row";

    jQuery(gridRowSelectorLeft).each(function (index) {

      if (table[index] == undefined) {
        table[index] = [];
      }

      $(this).find("div.f9-widget-grid-cell").each(function () {
        table[index].push($(this).text());
      });

    });

    jQuery(gridRowSelectorCenter).each(function (index) {

      $(this).find("div.f9-widget-grid-cell").each(function () {
        table[index].push($(this).text());
      });

    });
    // Prueba 
  

    //3er query calls in queue
   /* jQuery(widgetCallsRowSelectorLeft).each(function (index) {

      $(this).find("div.f9-widget-grid-cell").each(function () {
        table[index].push($(this).text());
      });

    });

    jQuery(widgetCallsRowSelectorCenter).each(function (index) {

      $(this).find("div.f9-widget-grid-cell").each(function () {
        table[index].push($(this).text());
      });

    });*/

    console.log(table)

  } else {
    console.log('Error: jQuery library failed to load!');
    return 0;
  }

  return table;

}
/*
https://script.google.com/a/macros/telusinternational.com/s/AKfycbyalU2GY2gR2e1gDTJpHoWrI8Qi4H_lviSdwYwTyJW8bAfPSrruWLAieaYGsRaWx_mH/exec
test:
https://script.google.com/a/macros/telusinternational.com/s/AKfycbx5a606M16j7NPRHHJnrp3_7vbp3yIxdi14D2seXiU/dev
EBG Raw
*/