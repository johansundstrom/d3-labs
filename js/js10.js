let dataArr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
//var dataArr = [75, 80, 85, 90, 95, 100];

const height = 400;
const width = 400;

const canvas = d3.select("#canvas")

canvas.append("svg")
    .attr('height', height)
    .attr('width', width);

const svg = canvas.select('svg')
const rect = svg.selectAll('rect')

rect.data(dataArr)
    .enter()
    .append("rect")
    .attr('height', height)
    .attr('fill', function(){
        let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
        while(color.length < 6) {
            color = "0" + color;
        }
        return "#" + color;
    })

    .attr('width', function(d, i){
        return (width / dataArr.length - 1);
    })

    .attr('x', function(d, i){
        let myWidth = i * (width / dataArr.length)
        return myWidth;
    })

    .attr('y', function(d, i) {
        console.log(d3.max(dataArr));
        return height - (d*2)
    })

