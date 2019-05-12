let dataArr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
//let dataArr = [75, 80, 85, 90, 95, 100];

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

const svgWidth = 200;
var svgHeight = 200;


const scaleFactor = svgHeight / parseFloat(Math.max.apply(null, dataArr));
console.log(scaleFactor);
const canvas = d3.select("#canvas")

canvas.append("svg")
    .attr('height', svgHeight)
    .attr('width', svgWidth);

const svg = canvas.select('svg')
const rect = svg.selectAll('rect')

rect.data(dataArr)
    .enter()
    .append("rect")
    .attr('fill', function(){
        let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
        while(color.length < 6) {
            color = "0" + color;
        }
        return "#" + color;
    })

     .attr('x', function(d, i){
        let xValue = i * (svgWidth / dataArr.length);
        return xValue;
    })

    .attr('y', function(d) {
        yValue = svgHeight - d * scaleFactor;
        return yValue;
    })

    .attr('width', function(){
        let width = svgWidth / dataArr.length - 1;
        return width;
    })

    .attr('height', function(d){
        var heightValue = scaleFactor * d;
        return heightValue;
    });
