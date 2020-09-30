d3.json("https://kevinnmcpu.github.io/samples.json").then(function(data) {
    json_info = JSON.parse(data);
    list_of_names = json_info.names;
    console.log(list_of_names)
  });