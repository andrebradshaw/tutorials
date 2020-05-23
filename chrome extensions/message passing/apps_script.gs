/*
TODO
1) function doGet(e) to process the request from background scripts

2) function to retrieve code. In this example we are storing code in a Google Sheet. //Probably not the best deployement strategy, but it works. 


*/

const getTableValuesBy = (sheet) => sheet.getRange(1,1,1,1).isBlank() ? [] : Array.from(sheet.getRange(1,1,sheet.getLastRow(),sheet.getLastColumn()).getValues()); 
/* utility sheets
getTableValuesBy => gets full sheet as Table, by the sheetObject. This only retrieves the max rows and columns containing data. Returns an empty array if the first cell is blank
*/

const getColIndexBy = (table,header_name) => table[0].indexOf(header_name); 
/* utility sheets
getColIndexBy => gets the index number (not sheet col number) of the specified header within a given sheet
*/

