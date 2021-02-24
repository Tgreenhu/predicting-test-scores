function createChart() {
    url = "/table";
    d3.json(url).then((data) => {
        let table = d3.select("#summary");
        let tbody = table.select("tbody");
    })
}