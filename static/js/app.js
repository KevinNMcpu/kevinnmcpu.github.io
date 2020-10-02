var tbody = d3.select("tbody");

d3.json("https://kevinnmcpu.github.io/samples.json").then(function(data) {
    var list_of_names = data.names;
    var meta_data = data.metadata;
    var samples = data.samples;
    //console.log(meta_data);
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
             //console.log("DING DING DING DING Found it!");
             //console.log(meta_data[i]);
             d3.select("#id").text(meta_data[i].id)
             d3.select("#ethnicity").text(meta_data[i].ethnicity)
             d3.select("#gender").text(meta_data[i].gender)
             d3.select("#age").text(meta_data[i].age)
             d3.select("#location").text(meta_data[i].location)
             d3.select("#bbtype").text(meta_data[i].bbtype)
             d3.select("#wfreq").text(meta_data[i].wfreq)
        }
    }

    for (var i = 0; i < samples.length; i++) {
        if (samples[i].id == dataset) {
            console.log("Ding ding, found it!");
            console.log(samples[i]);
            var x = i;
        }
    }

    var bargraph = [{
        type: 'bar',
        x: samples[x].sample_values.slice(0,10).sort(function(a,b){
            return a-b
        }),
        y: samples[x].otu_ids.map(d => `OTU ${d}`),
        text: samples[x].otu_labels,
        orientation: 'h'
      }];

      var bubblegraph = {
        x: samples[x].otu_ids.map(d => `OTU ${d}`),
        y: samples[x].sample_values,
        //text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
        //mode: 'markers',
        //marker: {
        //  color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
        //  size: [40, 60, 80, 100]
        //}
      };

      Plotly.newPlot('bar', bargraph);
      Plotly.newPlot('bubble', bubblegraph);

      

};

});