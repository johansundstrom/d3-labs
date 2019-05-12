let dataArr = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
//var dataArr = [75, 80, 85, 90, 95, 100];

const height = 200;
const width = 200;

const canvas = d3.select("#canvas")

canvas.append("svg")
    .attr('height', height)
    .attr('width', width);

const svg = canvas.select('svg')

//y-skala
var yscale = d3.scaleLinear()
    .domain([0, d3.max(dataArr)])
    .range([height-40, 0]);

    var y = d3.axisLeft()
    .scale(yscale);

svg.append("g")
    .attr("transform", "translate(30, 10)")
    .call(y);


//x-skala
var xscale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width - 40]);
    
var x = d3.axisBottom()
    .scale(xscale)

var xTranslate = height - 30;
svg.append('g')
    .attr('transform', 'translate(30, ' + xTranslate + ')')
    .call(x);