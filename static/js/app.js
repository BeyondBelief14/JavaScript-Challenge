// // from data.js
// var tableData = data;

// var filtButton = d3.select("#filter-btn");
// // YOUR CODE HERE!
// // from data.js
// var tableData = data;
// console.log("inside app.js")
// console.log(tableData)
// // get table references
// var tbody = d3.select("tbody");
// // YOUR CODE HERE!
// function loadTable(data1){
//     //first clear out exiting data 
//     tbody.html("");
//     data1.forEach((dataRow) => { 
//         //console.log("dataRow", dataRow)
//         var row = tbody.append("tr");
// //loop through each object and add td row to cells
//         Object.values(dataRow).forEach((val) => {
//         console.log("val",val)
//         var cell = row.append("td");
//         cell.text(val);
//         });
//         }
//     )
// // Append a row to the table body
// }


// //main line
// loadTable(tableData)


// var tableData = data;
// //Getting a reference to the button on the page with the id propertyfilter-btn 
// var filtButton = d3.select("#filter-btn");
// // Getting a reference to the input element on the page with the id property set to 'datetime'
// var inputDate = d3.select("#datetime");
// //Create a var for the d3select of tbody.
// var inputTbody = d3.select("tbody");
// //Getting a reference to state and other fields. 
// var inputState = d3.select("#state");
// var inputCountry = d3.select("#country")
// var inputShape   = d3.select("#shape")
// var defDate = '1/1/2010';
// var loadFiltData = "n";
// var dateInput ;
// // Select all tbody from using d3 select and add  table rows dynamically from tableData.
// function loadTableData(dataArray) {
// d3.select("tbody")
//   .selectAll("tr")
//   .data(dataArray)
//   .enter()
//   .append("tr")
//   .html(function(d) {
//     return `<td>${d.datetime}</td> <td>${d.city}</td> <td>${d.state}</td> <td>${d.country}</td>
//             <td>${d.shape}</td> <td>${d.durationMinutes}</td> <td>${d.comments}</td>     `;
//   });
// }
// //Filter the data based on input parameters like data and only return values for which
// //criteria is satisfied.
// button.on = ("click", function() {
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select(".form-control");
//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");
//   console.log(inputValue);
//   console.log(tableData);
//   var filterdData=tableData.filter(ufo_info=>ufo_info.datetime==inputValue);
//   console.log(filterdData);
// });
// function filterData(dateV,stateV,countryV) {
//   console.log("In filterData" + date)
//   if (date)
//     var filtData = tableData.filter(fData => (fData.datetime == dateV) && (fData.state == stateV) );
//     loadFiltData = 'y';
//     console.log("loadFiltData " + FiltData)
//     console.log(filtData);
//     return(filtData)
      
//  }

// from data.js

var tableData = data;



// function to display UFO sightings

function tableDisplay(ufoSightings) {

    var tbody = d3.select("tbody");

    ufoSightings.forEach((ufoRecord) => {

      var row = tbody.append("tr");

      Object.entries(ufoRecord).forEach(([key, value]) => {

        var cell = row.append("td");

        cell.html(value);

      });

    });

  };

  

  // clear the table for new data

  function deleteTbody() {

    d3.select("tbody")

      .selectAll("tr").remove()

      .selectAll("td").remove();

  };

  

  // initial display of all UFO sightings

  console.log(tableData);

  tableDisplay(tableData);

  

  // 'Filter Table' button

  var button = d3.select("#filter-btn");

  

  // filter the database and display

  button.on("click", function(event) {

    d3.event.preventDefault();

    deleteTbody();

    var dateInput = d3.select("#datetime").property("value");

    

    if (dateInput.trim() === "" ) {

      // display the whole database if the date field has no date

      var filteredData = tableData;

    } else {

      // otherwise, display the filtered dataset  

      var filteredData = tableData.filter(ufoSighting => 

        ufoSighting.datetime === dateInput.trim());

    };

  

    // display message if no records found

    if (filteredData.length == 0) {

      d3.select("tbody")

        .append("tr")

        .append("td")

          .attr("colspan", 7)

          .html("<h4>No Records Found</h4>");

    };

  

    console.log(filteredData);

    tableDisplay(filteredData);

  });