let dataArr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
//let dataArr = [75, 80, 85, 90, 95, 100];

const svgHeight = 200;
const svgWidth = 200;

const canvas = d3.select("#canvas")

canvas.append("svg")
    .attr('height', svgHeight)
    .attr('width', svgWidth);

const svg = canvas.select('svg')
const rect = svg.selectAll('rect')

rect.data(dataArr)
    .enter()
    .append("rect")
    .attr('fill', 'orange')

     .attr('x', function(d, i){
        let xValue = i * 8;         //x = dataindex * 8px
        return xValue;
    })

    .attr('y', function(d) {
        yValue = svgHeight - d;     //y = svghöjd - data
        return yValue;
    })

    .attr('width', function(){
    let width = 7;                  //rectvidd = 7
        return width;
    })

    .attr('height', function(d){
        var heightValue = d;        //recthöjd = svghöjd - y
        return heightValue;
    });