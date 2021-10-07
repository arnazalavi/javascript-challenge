// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var botton = d3.select("#filter-btn");


// YOUR CODE HERE!
//console.log(tableData);

//Create event handlers
botton.on("click", runEnter);

//d3.event.preventDefault();

//Step 5
// Complete the event handler function for the form
function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select('#datetime')
   var inputValue = inputElement.property("value");

   //var cityElement = d3.select('#city')
  // var inputCity = cityElement.property("value");
 
   console.log(inputValue);
   var filteredData = tableData
   if (inputValue.length >0 ) {
      filteredData = tableData.filter(data => data.datetime == inputValue ) ;  
   // if inputValue == ''
   // or lenght is 0
   // then load the whole table
   // filteredData = tableData
  
   }
   loadTable(filteredData);
}

function loadTable(table){
    tbody.html("")
    // datetime
    //var filteredData = tableData.filter(dateEnter => dateEnter.datetime == inputValue);
     //var filteredData = tableData.filter(dateEnter => dateEnter.datetime == inputValue);
   
   table.forEach(function(UFO) {

        console.log(UFO);
        var row = tbody.append("tr");
       
       Object.entries(UFO).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
        cell.text(value);
          })
        });
    
}


 loadTable(tableData)