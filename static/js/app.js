var tbody = d3.select("tbody");

d3.json("https://kevinnmcpu.github.io/samples.json").then(function(data) {
    var list_of_names = data.names;
    list_of_names.forEach(function(name){
            var dropDown = d3.select("tbody");
            var options = dropDown.select("select").data(name).enter().append("option").attr("id",name);
            options.text(name).attr("id",name);
        });
  });