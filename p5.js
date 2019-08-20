function doGet() {
    var template = HtmlService.createTemplateFromFile("html/demo");
    return template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME); 
 }
 
 function include(filename) {
   return HtmlService.createHtmlOutputFromFile("html/"+filename)
       .getContent();
 }