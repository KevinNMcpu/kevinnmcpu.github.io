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
// var dataset = d3.select('select').property('value');


function updatePlotly() {
    var dataset = d3.select('select').property('value');
    console.log(dataset);
    //value of dataset selected^

    var meta_data = data.metadata;

    for (var i = 0; i < meta_data.length; i++) {
        if (meta_data[i].id == dataset) {
             console.log("DING DING DING DING Found it!");
             console.log(meta_data[i]);
             d3.select("#sample-metadata").text("id: " + meta_data[i].id).html("<br>").text("ethnicity: " + meta_data[i].ethnicity + "<br>" + "gender:" + meta_data[i].gender + "<br>" + "location:" + meta_data[i].location + "<br>" + "bbtype: " + meta_data[i].bbtype + "wfreq: " + meta_data[i].wfreq);
        }
    }

};

});