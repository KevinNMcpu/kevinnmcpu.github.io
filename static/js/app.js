var tbody = d3.select("tbody");

d3.json("https://kevinnmcpu.github.io/samples.json").then(function(data) {
    var list_of_names = data.names;
    var meta_data = data.metadata;
    console.log(meta_data);
    list_of_names.forEach(function(name){
            var dropDown = d3.select("select");
            var options = dropDown.append("option");
            options.text(name).attr("id",name);
        });
  

d3.selectAll("#selDataset").on("change", updatePlotly);

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key === value]);
}

function updatePlotly() {
    var dataset = d3.select('select').property('value');
    console.log(dataset);
    //value of dataset selected^

    var meta_data = data.metadata;

    var i = 0

    // console.log(meta_data);
    
    console.log(getKeyByValue(meta_data, dataset));

};
});