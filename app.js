const url = "https://cliffeandrew.github.io/plotly-challenge/data/samples.json";


// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

function buildPlot() {
    d3.json(url).then(function(data) {
  
      // Grab values from the data json object to build the plots
      var otu_ids = data.dataset.otu_ids;
      var otu_labels = data.dataset.otu_labels;
      var sample_values = data.dataset.sample_values;
  
      var trace1 = {
        type: "scatter",
        mode: "lines",
        name: name,
        x: otu_Labels,
        y: sample_values,
        line: {
          color: "#17BECF"
        }
      };
  
      var data = [trace1];
  
      var layout = {
        title: `Sample Belly Button Biodiversity Dataset`,
        xaxis: {
          range: [sample_values],
          type: "linear"
        },
        yaxis: {
          autorange: true,
          type: "linear"
        }
      };
  
      Plotly.newPlot("plot", data, layout);
  
    });
  }
  
  buildPlot();
  


