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
   // For city
   var cityElement = d3.select('#city')
   var inputCity = cityElement.property("value");
   //  // For state
   var stateElement = d3.select('#state')
   var inputState = stateElement.property("value");

    //  // For Country
    var countryElement = d3.select('#country')
    var inputCountry = countryElement.property("value");

      // For Shape
    var shapeElement = d3.select('#shape')
    var inputShape = shapeElement.property("value");
 
   console.log(inputValue);
   var filteredData = tableData.filter(data => data.datetime == inputValue &&
     data.city == inputCity && data.state == inputState && data.country == inputCountry &&
     data.shape == inputShape)
     ;  

     var filteredData = tableData.filter(data => { 
       var found = false;
      
       found = data.datetime ==  inputValue || inputValue.length === 0
       

      if (inputCity.length > 0 && found === false ) { 
        found = data.city ==  inputCity
    }

    if (inputCity.length > 0 && found === false ) { 
      found = data.city ==  inputCity
  }
       return found ; 
      } ) 
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