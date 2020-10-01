var tbody = d3.select("tbody");

d3.json("https://kevinnmcpu.github.io/samples.json").then(function(data) {
    var list_of_names = data.names;
    list_of_names.forEach(function(name){
            var dropDown = d3.select("select");
            var options = dropDown.append("option");
            options.text(name).attr("id",name);
        });
  });

d3.selectAll("#selDataset").on("change", updatePlotly);

var more_data = d3.json("https://kevinnmcpu.github.io/samples.json");

var biometric_data = more_data.metadata;

function search(nameKey, myArray){
    var results = [];
    for (var i=0 ; i < Object.keys(myArray).length ; i++) {
        if (myArray.id[i]== nameKey) {
            return myArray[i]
        }
    }
}

function updatePlotly() {
    var dataset = d3.select('select').property('value');
    console.log(dataset);
    //value of dataset selected^    
    console.log(search(dataset, biometric_data));
};
