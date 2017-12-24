# d3-labs
Lär mig d3

* D3 - Data driven documents
* Ett JS-bibliotek för manipulering av DOM
* Sägs kombinera HTML-SVG-CSS

## Principer för SVG
```
<svg width="400" height="400">
  <g transform="translate(50, 0)">
    <rect x="0" y="0" width="50" height="50" fill="orange"></rect>
    <rect x="50" y="20" rx="20" ry="20" width="150" height="150"> <!-- rx=x-radie -->
    <circle cx="100" cy="100" r="10" fill="red"></circle>
    <ellipse cx="200" cy="80" rx="100" ry="50"></ellipse>
    <line x1="0" y1="0" x2="200" y2="200"></line>
    <polygon points="200, 10 250, 190 160, 210"></polygon>
    <polyline points="20,20 40,25 60,40 80,120 120,140 200,180"></polyline>
    <path d="M0 200 L50 50 L100 150 L150 100 L200 150" fill="none" stroke="black" stroke-width="10" stroke-dasharray="20,10,5,5,5,10"></path>
    <text x="250" y="200" fill="red" transform="rotate(30 20,40)">Min text</text>
  </g>
</svg>
```

## Används ofta i D3 (en JavaScript special)
```
var myParsedNumber = parseFloat(myString);  //konvertera string till float
var myParsedNumber = +(myString); //samma som ovan
```

Array av Objekt
```
[{...}, {...}]
```

Läs ut objekt
```
var dataset = [
  {x: 100, y: 100},
  {x: 130, y: 120},
  {x: 80, y: 180},
  {x: 180, y: 80},
  {x: 180, y: 40},
];

dataset.forEach(function(d) {
    console.log(d.x + " " + d.y);
});
```

## CDN
```
<script src="https://d3js.org/d3.v4.min.js"></script>
```

## D3 parse (request) från fil

d3 är object och csv är funktion
```
d3.csv("data.csv", function(data) {
  console.log(data[1]);
});
```

Eller JSON-orienterad fil
```
d3.json("employees.json", function(data) {
  console.log(data[0]);
});
```

Eller tab separated value
```
d3.csv("data.tsv", function(data) {
  data.forEach(function(d) {
    console.log(d.x + ", " + d.y);
  });
});
```

Kommer också i smakerna...
* d3.html
* d3.xml
* d3.text

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

## Selections
Följande hämtar första förekomsten av ```li``` från DOM. Om saknas returneras tomt
```
var listItem = d3.select("#menu").select("li");
```

Följande hämtar alla förekomster av li ur #menu
```
var myMeny = d3.select("#menu").selectAll("li");
```

Med ovanstående...
```
myMeny.style("color", "red");
```

Selections med filter
```
var even = d3.selectAll("tr").filter(":nth-child(even)");
even.style("background-color", "#eee");
```



## Databinding
* Funktionen data() ger datakoppling mellan data och DOM-element
```
var dataset = [12, 32, 53, 21];

var circles = d3.select("svg").selectAll("circle");
circles.data(dataset);
```

... eller (method chaining)
```
var circles = d3.select("svg").selectAll("circle")	//inte radslut
    .data(dataset);
```

```
d3.select("svg").selectAll("rect").data(dataset)
  .style("height", function(d){ 
    return d + "px"; 
  });
```

## Ett exempel

```
var width = 300;
var height = 300;
    
var scale = d3.scaleLinear()	//scale justerar data till pixel
    .domain([1, 5]) 		//data space
    .range([0, width]);		//pixel space

//Skapa SVG canvas, detta är en snygg lösning
var canvas = d3.select("body").append("svg")	//Select DOM-objektet body, append svg
    .attr("width", width + 20)
    .attr("height", height);

function render(data, color) {
    // Koppla ihop dataset med element selection
    // var circles =  d3.select("svg").selectAll("circle").data(data)  // första förekomsten av "circle" binds till "1"
    // bind data
    var circles = canvas.selectAll("circle").data(data);	// .data() binder till alla data

    // Array _enter skapades med data-antal
    // Andra ggn render() körs läggs antingen till eller tas bort data från _enter
    // enter() kan nås med console.log
    // enter() skapar nya DOM-element för nya data

    //enter
    circles.enter().append("circle")        //skapar ett element för varje data, även om render körs flera ggr
	.attr("cx", scale)                  //returnerar pixelspace
        .attr("cy", 50)                     //värden som uppdateras
        .attr("r", 10)                      //värden som uppdateras
        .attr("stroke-width", 1)            //värden som inte kommer att uppdateras
        .attr("stroke", "#888")             //värden som inte kommer att uppdateras
        .attr("fill", color);               //värden som inte kommer att uppdateras

    //update
    circles
	.attr("cx", scale)                  //returnerar pixelspace
        .attr("cy", 50)                     //värden som inte kommer att uppdateras
        .attr("fill", color);               //värden som uppdateras

    //exit
    circles.exit().remove();		    // tabort DOM-element som inte har data
}

render([1, 2, 3, 4, 5], "cyan");
render([1, 2, 3, 4], "yellow");
render([1, 2, 3, 4, 5], "green");
render([1, 2], "blue");
```
