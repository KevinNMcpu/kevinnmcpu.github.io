d3.json("https://kevinnmcpu.github.io/samples.json").then(function(data) {
    var list_of_names = data.names;
    list_of_names.forEach(function(name){console.log(name)});
  });