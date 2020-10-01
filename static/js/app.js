var tbody = d3.select("tbody");

d3.json("https://kevinnmcpu.github.io/samples.json").then(function(data) {
    var list_of_names = data.names;
    list_of_names.forEach(function(name){
            var dropDown = d3.select("select");
            var options = dropDown.append("option");
            options.text(name).attr("id",name);
        });
  });

function updatePlotly() {
    var dropdownMenu = d3.select("#selDataset")
    var dataset = dropdownMenu.property("id")
    console.log("You picked " + dropdownMenu)




}