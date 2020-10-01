d3.json("https://kevinnmcpu.github.io/samples.json").then(function(data) {
    var list_of_names = data.names;
    //console.log(data.names);
  });

console.log(list_of_names);

//list_of_names.forEach(function(name) => console.log(name));