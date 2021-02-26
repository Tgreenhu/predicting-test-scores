// Function To Populate Dropdown
function populateDropDown() {
  // select where the dropdown is in the HTML
  let selector = d3.select("#selDataset");
  selector.on("change", getChart(selector.attr("value")));
  let url = "/data";
  // read the data then append all sample IDs
  d3.json(url).then((data) => {
    // let names = data.name;
    // console.log(data);
    // console.log(data[2]);

    data[2].forEach((item) => {
      itemValue = Object.keys(item)[0];
      selector.append("option").text(itemValue).property("value", itemValue);
    });
    let firstSample = data[2];
    getChart(firstSample);
  });
}
//  on select change
//  grab value of select
//  compare value of select to value filtered
function getChart(city_name) {
  let selector = d3.select("#selDataset");
  let selectValue = selector.attr("value");
  console.log(selectValue);
  d3.json("/data").then((data) => {
    const filtered = data[2].filter((item) => item.hasOwnProperty(city_name));
    console.log(filtered[0]);
    let test = Object.values(filtered[0]);

    // save player names
    test.forEach((item) => {
      playerNames = [];
      item.forEach((d) => {
        playerNames.push(d.name);
      });
    });

    test.forEach((item) => {
      playerUSG = [];
      item.forEach((d) => {
        playerUSG.push(d.usg);
      });
    });

    test.forEach((item) => {
      playerTurnover = [];
      item.forEach((d) => {
        playerTurnover.push(d.turnover);
      });
    });

    test.forEach((item) => {
      playerVORP = [];
      item.forEach((d) => {
        playerVORP.push(d.vorp);
      });
    });

    test.forEach((item) => {
      playerMinutes = [];
      item.forEach((d) => {
        playerMinutes.push(d.minutes);
      });
    });

    // vorp vs usg scatter plot
    let trace = {
      y: playerVORP,
      x: playerUSG,
      text: playerNames,
      mode: "markers",
      type: "scatter",
    };
    let scatterLayout = {
      title: "VORP vs USG%",
      xaxis: { title: "USG %" },
      yaxis: { title: "VORP" },
    };
    let scatterData = [trace];

    Plotly.newPlot("scatter", scatterData, scatterLayout);

    // Pie Chart (Minutes)
    let trace1 = {
      values: playerMinutes,
      labels: playerNames,
      type: "pie",
    };
    let pieLayout = {
      height: 500,
      width: 500,
    };
    let pieData = [trace1];
    Plotly.newPlot("bubble", pieData, pieLayout);

    let trace2 = {
      y: playerTurnover,
      x: playerUSG,
      text: playerNames,
      title: "Minutes Distribution",
      mode: "markers",
      type: "scatter",
    };
    let scatterLayout2 = {
      title: "TO% vs USG%",
      xaxis: { title: "USG %"},
      yaxis: { title: "Turnover %"},
    };
    let scatterData2 = [trace2];

    Plotly.newPlot("plot", scatterData2, scatterLayout2);
  });
}
// getChart();
function optionChanged(newSample) {
  getChart(newSample);
}

populateDropDown();
