var list_of_names = []

d3.json("https://kevinnmcpu.github.io/samples.json").then(function(data) {
    var list_of_names = data.names;
    console.log(list_of_names)
  });

var tbody = d3.select("tbody");

list_of_names.forEach(function(id)
    {
    var row = tbody.append("option").attr("value",id);
    Object.entries(id).forEach(id)
    })