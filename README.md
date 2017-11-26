# d3-labs
Lär mig d3

## Principer för SVG
```
<svg>
  <g transform="translate(50, 0)">
    <rect x="0" y="0" width="50" height="50" fill="orange"></rect>
    <path d="M0 200 L50 50 L100 150 L150 100 L200 150" fill="none" stroke="black" stroke-width="10"></path>
    <circle cx="100" cy="100" r="10" fill="red"></circle>
    <text x="250" y="200" fill="red">Min text</text>
  </g>
</svg>
```

## Används ofta
```
var myParsedNumber = parseFloat(myString);  //samma
var myParsedNumber = +parseFloat(myString); //samma
```

## Object
```
//Array of objects
[{...}, {...}]
```

## Läs ut objekt
```
var arr = [
  {x: 100, y: 100},
  {x: 130, y: 120},
  {x: 80, y: 180},
  {x: 180, y: 80},
  {x: 180, y: 40},
];

arr.forEach(function(d) {
	console.log(d.x + " " + d.y);
});
```

## CDN
```
<script src="https://d3js.org/d3.v4.min.js"></script>
```

## D3 parse från fil

d3 är object och csv är funktion
```
d3.csv("data.csv", function(data) {
  console.log(data[1]);
});
```


```
d3.json("employees.json", function(data) {
  console.log(data[0]);
});
```

```
d3.csv("data.csv", function(data) {
  data.forEach(function(d) {
    console.log(d.x + ", " + d.y);
  });
});
```

## Parse from file and parseFloat
```
d3.csv("data.csv", type, function(data) {
  data.forEach(function(d) {
    console.log(d.x + d.y);
  });
});

function type(d) {
  d.x = +d.x;
  d.y = +d.y;
  return d;
};
```

## Skala om data till pixel

```
var scale = d3.scaleLinear()		//version 4-tjafs? funktionen scale.linear är uppdaterad?
  .domain([0, 1]) //data space
  .range([0, 100]); //pixel space

  console.log(scale(0.5)); //returnerar pixelspace
```


```
var scale = d3.scaleLinear()
    .domain([1, 5]) //data space
    .range([0, 200]); //pixel space

//Skapa SVG canvas
var svg = d3.select("body").append("svg")
    .attr("width", 250)
    .attr("height", 250);

function render(data, color) {
    //bind data
    var rects = svg.selectAll("rect").data(data);

    //enter
    rects.enter().append("rect")
        .attr("y", 50) //värden som inte kommer att uppdateras
        .attr("width", 20)
        .attr("height", 20);

    //update
    rects
        .attr("x", scale) //returnerar pixelspace
        .attr("fill", color); //värden som uppdateras

    //exit
    rects.exit().remove();
}

render([1, 2, 3, 4, 5], "cyan");
render([1, 2, 3, 4], "yellow");
render([1, 2, 3, 4, 5], "green");
render([1, 2], "blue");
```
