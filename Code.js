function writeDataToFirebase() {
  var firebaseUrl = "https://alien-cedar-250400.firebaseio.com/";
  var secret = "gSI2Pl9K6F9pbkOxyLvfp52yBaONzCG2Pou7kLjg";
  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl, secret);
  Logger.log("base:" + base);
  var mySheet = SpreadsheetApp.openById("1PYTrJcG0VMgUbZGxiBeMrV1fq4rodB1PxGO_j8zBo-I");
  Logger.log("mySheet:" + mySheet);
  var dataSheet = mySheet.getSheets()[1];
  var lastRow = mySheet.getLastRow();
  var lastColumn = mySheet.getLastColumn();
  var data = mySheet.getSheetValues(1, 1, lastRow, lastColumn);
  Logger.log("data:" + data + "\nlastRow:" + lastRow + "\nlastColumn:" + lastColumn);
  var dataToImport = {};
  for (var i = 1; i < data.length; i++) {
    dataToImport[i] = {
      NAME: data[i][0],
      TECHNOLOGIES: data[i][1],
      EXPERIENCE: data[i][2],
      WORKING_ON: data[i][3],
      WORKED_ON: data[i][4],
      DESIGNATION: data[i][5],
      MACHINE: data[i][6],
      HDD_PRO_RAM: data[i][7],
    };
  }
  Logger.log("dataToImport:" + dataToImport);
  base.setData("FrontEndTeamYML2019_UP", dataToImport);
}
function addNewData() {
  writeDataToFirebase();
}