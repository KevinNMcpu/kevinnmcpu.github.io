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

function updatePlotly() {
    var dataset = d3.select('select').property('value');
    console.log(dataset);
    //value of dataset selected^

    console.log("running second json obj");
    var meta_data = data.metadata;

    var i = 0

    for (var key in meta_data) {
        if (meta_data.hasOwnProperty(key)) {
            console.log(key + " -> " + meta_data[key]);
        }
    }

    // while (i => 152) {
    //     console.log("running a loop");
    //     if (meta_data.id[i] === dataset) {
    //         console.log(meta_data[i]);
    //     }
    //     i++;
    // }

};
});