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
  if (jQuery) {

    
    
    var commonSelector = "div .kpi-first-measure";
    var gridRowSelectorLeft = "div[class=kpi-first-measure-value kpi-queryid-115993781]";
    // flex frame principal
    /*
    //var gridRowSelector = "div[class^='f9-widget-grid-row']";
    var dockedGridRowSelector = "div[class^='f9-widget-grid-row'].f9-widget-grid-contents-left.docked";
    
    var gridRowSelectorCenter = commonSelector + " " + "div.f9-widget-grid-contents-center div.f9-widget-grid-row";
    var widgetCallsCommonSelector = "#0fc80b24-cbce-4696-b490-469357505a5f:last";
    var widgetContainerCallsSelector = widgetCallsCommonSelector + " " + "div .chart-ring-contents div.chart-container";
    var widgetCallsRowSelectorLeft = widgetCallsCommonSelector + " " + "div.f9-widget-grid-contents-left div.f9-widget-grid-row";
    var widgetCallsRowSelectorCenter = widgetCallsCommonSelector + " " + "div.f9-widget-grid-contents-center div.f9-widget-grid-row";
*/

    jQuery(gridRowSelectorLeft).each(function (index) {

      if (table[index] == undefined) {
        table[index] = [];
      }

     // $(this).find("div .kpi-first-measure-value").each(function () {
        table[index].push($(this).text().trim());
      });

    //};//);

   /* jQuery(gridRowSelectorCenter).each(function (index) {

      $(this).find("div.f9-widget-grid-cell").each(function () {
        table[index].push($(this).text());
      });

    });*/
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
First deployment
https://script.google.com/a/macros/telusinternational.com/s/AKfycbwkS9x2ShTV5bZEDbcnIK1eydi3pQckU4znw0saqovW-XC4XZqVoeoIu_CMLdc15fHT/exec
test deployment
https://script.google.com/a/macros/telusinternational.com/s/AKfycbwf8FWB3GuRkc0JqSnguz6VYLdZKXoVB8Um6wk6Dhw/dev
*/