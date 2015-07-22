//d3 bar chart for k values
var dataset = [177.77129, 1312.413, 58.458505, 61.854282, 1491.1846, 1371.8718, 48.13793, 1, 1];
function scale(dataset) {
 for (var i = dataset.length - 1; i >= 0; i--) {
   dataset[i]= dataset[i]/10;
 };
}
var w= 300;
var h= 150;
var barPadding = 1;
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
/*var xScale = d3.scale.linear()
                     .domain([0, d3.max(dataset, function(d) { return d[0]; })])
                     .range([0,w]);

var yScale = d3.scale.linear()
                     .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                     .range([0,h]); */
scale(dataset);
svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", function(d,i){
      return i * (w/ dataset.length);
   })
   .attr("y", function(d){
    return (h - d);
   })
   .attr("width", w/ dataset.length - barPadding)
   .attr("height", function(d) {
    return d;
   })
   .attr("fill", "teal"); 

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d) {
    return 10*d;
   })
   .attr("x", function(d, i) {
    return i * (w/ dataset.length) + (w/ dataset.length - barPadding) /2;
   })
   .attr("y", function(d) {
    return h - (d) + 14;
   })
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "black")
   .attr("text-anchor", "middle");

