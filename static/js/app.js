d3.json("https://kevinnmcpu.github.io/samples.json").then(function(data) {
    list_of_names = data.names;
    console.log(list_of_names)
  });