
// Fetching the input data from data.js
var tableData = data;

//Selecting the tbody tag where data would be inserted as rows
var ufoTable = d3.select("tbody");

//To display data when page loads
displayData(data);


function resetFields(){

  console.log("Inside resetFields(): Begin");

  datetime.value = "";
  state.value = "";
  city.value = "";
  country.value = "";
  shape.value = "";

  console.log("Inside resetFields(): End");
}

function resetData(inputData){

  console.log("Inside resetData(): Begin");

  //Remove all existing rows under tbody
  ufoTable.selectAll("tr").remove();

  displayData(inputData);

  console.log("Inside resetData(): End");
}


function displayData(inputData){

  console.log("Inside displayData(): Begin");

  inputData.forEach((ufoSighting) => {
    var row = ufoTable.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  console.log("Inside displayData(): End");
}

function filterData(inputData){

  console.log("Inside filterData(): Begin");

  var inputElement = "";
  var inputValue = "";
  var filteredData = "";
  
  //Initializing filtered data with the input data
  filteredData = inputData;

  //
  inputElement = d3.select("#datetime");
  inputValue = inputElement.property("value").trim();
  if (inputValue != ""){
    console.log(`Filter applied for Date: ${inputValue}`);
    filteredData = filteredData.filter(ufo => ufo.datetime === inputValue.toLowerCase());
  }
   

  inputElement = d3.select("#city");
  inputValue = inputElement.property("value").trim();
  if (inputValue != ""){
    console.log(`Filter applied for City: ${inputValue}`);
    filteredData = filteredData.filter(ufo => ufo.city === inputValue.toLowerCase());
  }
  
  inputElement = d3.select("#state");
  inputValue = inputElement.property("value").trim();
  if (inputValue != ""){
    console.log(`Filter applied for STate: ${inputValue}`);
    filteredData = filteredData.filter(ufo => ufo.state === inputValue.toLowerCase());
  }
 
  inputElement = d3.select("#country");
  inputValue = inputElement.property("value").trim();
  if (inputValue != ""){
    console.log(`Filter applied for Country: ${inputValue}`);
    filteredData = filteredData.filter(ufo => ufo.country === inputValue.toLowerCase());
  }

  inputElement = d3.select("#shape");
  inputValue = inputElement.property("value").trim();
  if (inputValue != ""){
    console.log(`Filter applied for Shape: ${inputValue}`);
    filteredData = filteredData.filter(ufo => ufo.shape === inputValue.toLowerCase());
  }
  
  console.log("Inside filterData(): End");
  return filteredData;

}
// Selecting the "Filter Table" button
var filter_btn = d3.select("#filter-btn");

// logic to handle onClick event on "Filter Table" button
filter_btn.on("click", function() {

  console.log("Onclick Event on Filter Table Button: Begin");

  //preventing refresh
  d3.event.preventDefault();

  //filtering the data
  var processedData = filterData(data);

  //reset the table with filtered data
  resetData(processedData);

  console.log("Onclick Event on Filter Table Button: End");
});



