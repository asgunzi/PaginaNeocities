    var svgCircle = d3.select("#svgCirculo")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 800);
   
	DesenharCirculo();

	function DesenharCirculo()
	{
	svgCircle.selectAll("*").remove();
	
	var i;
	var tamanho = parseInt(d3.select("#myRangeCirculo").property("value"));
	var N = parseInt(800/tamanho);

	//Linhas retas 
	for (i=0;i<N;i++)
	{
	svgCircle.append("rect")        // attach a rectangle
		.attr("x", 0)        // position the left of the rectangle
		.attr("y", i*2*tamanho)         // position the top of the rectangle		
		.style("fill", "rgb(0,50,100)")   // fill the clipped path with grey
		.attr("height", tamanho)    // set the height
		.attr("width", 1000);    // set the width
		
	svgCircle.append("rect")        // attach a rectangle
		.attr("x", 0)        // position the left of the rectangle
		.attr("y", i*2*tamanho +tamanho)         // position the top of the rectangle		
		.style("fill", "white")   // fill the clipped path with grey
		.attr("height", tamanho)    // set the height
		.attr("width", 1000);    // set the width
	}

	// define the clipPath
	svgCircle.append("clipPath")       // define a clip path
		.attr("id", "circle-clip") // give the clipPath an ID
	  .append("circle")          // shape it as an ellipse
		.attr("cx", 500)         // position the x-centre
		.attr("cy", 400)         // position the y-centre
		.attr("r", 400);
		
	//Clip
	for (i=0;i<N;i++)
	{
	svgCircle.append("rect")        // attach a rectangle
		.attr("x", 0)        // position the left of the rectangle
		.attr("y", i*2*tamanho)         // position the top of the rectangle		
		.attr("clip-path", "url(#circle-clip)") // clip the rectangle
		.style("fill", "white")   // fill the clipped path with grey
		.attr("height", tamanho)    // set the height
		.attr("width", 1000);    // set the width

	svgCircle.append("rect")        // attach a rectangle
		.attr("x", 0)        // position the left of the rectangle
		.attr("y", i*2*tamanho +tamanho)         // position the top of the rectangle		
		.attr("clip-path", "url(#circle-clip)") // clip the rectangle
		.style("fill", "rgb(0,50,100)")   // fill the clipped path with grey
		.attr("height", tamanho)    // set the height
		.attr("width", 1000);    // set the width
		
	}
	
		}
