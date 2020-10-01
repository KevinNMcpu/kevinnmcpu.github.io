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

function updatePlotly() {
    var dataset = d3.select('select').property('value');
    //console.log(dataset);
    //value of dataset selected^
    
    d3.json("https://kevinnmcpu.github.io/samples.json").then(function(data2) {
            var selected_id = data2.metadata;
            function search(dataset, selected_id){
                for (var i=0; I < selected_id; i++) {
                    if (selected_id[i].id === dataset){
                        return selected_id[i]
                        console.log(selected_id[i])
                    }
                }
            }
            //console.log(selected_id);
        });
}