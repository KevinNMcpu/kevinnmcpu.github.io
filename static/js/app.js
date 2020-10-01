var list_of_names = []

d3.json("https://kevinnmcpu.github.io/samples.json").then(function(data) {
    list_of_names = data.names;
  });

var tbody = d3.select("tbody");

list_of_names.forEach(function(name) => console.log(name));