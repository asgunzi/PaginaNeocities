  var svgLosangoVert = d3.select("#svgLosangoVert")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 800);
   
	DesenharLosangoVert();

	function DesenharLosangoVert()
	{
	svgLosangoVert.selectAll("*").remove();
	
	var i;
	var tamanho = parseInt(d3.select("#myRangeVert").property("value"));
	var N = parseInt(800/tamanho);

	//Linhas retas 
	for (i=0;i<N;i++)
	{
	svgLosangoVert.append("rect")        // attach a rectangle
		.attr("x", 0)        // position the left of the rectangle
		.attr("y", i*2*tamanho)         // position the top of the rectangle		
		.style("fill", "rgb(0,50,100)")   // fill the clipped path with grey
		.attr("height", tamanho)    // set the height
		.attr("width", 1000);    // set the width
		
	svgLosangoVert.append("rect")        // attach a rectangle
		.attr("x", 0)        // position the left of the rectangle
		.attr("y", i*2*tamanho +tamanho)         // position the top of the rectangle		
		.style("fill", "white")   // fill the clipped path with grey
		.attr("height", tamanho)    // set the height
		.attr("width", 1000);    // set the width
	}

	// define the clipPath
	svgLosangoVert.append("clipPath")       // define a clip path
		.attr("id", "shape-clipVert") // give the clipPath an ID
	  .append("rect")          // shape it as an ellipse
		.attr("x", 0)         // position the x-centre
		.attr("y", 0)         // position the y-centre
		.attr("width", 500)
		.attr("height", 500)		
		.attr("transform","translate(500,46)rotate(45)");

//clip 2
	svgLosangoVert.append("clipPath")       // define a clip path
		.attr("id", "shape-clipVert2") // give the clipPath an ID
	  .append("rect")          // shape it as an ellipse
		.attr("x", 0)         // position the x-centre
		.attr("y", 0)         // position the y-centre
		.attr("width", 250)
		.attr("height", 250)		
		.attr("transform","translate(500,223)rotate(45)");
		

	//Clip	
	for (i=0;i<N;i++)
	{
	svgLosangoVert.append("rect")        // attach a rectangle
		.attr("x", i*2*tamanho)        // position the left of the rectangle
		.attr("y", 0)         // position the top of the rectangle		
		.attr("clip-path", "url(#shape-clipVert)") // clip the rectangle
		.style("fill", "white")   // fill the clipped path with grey
		.attr("height", 800)    // set the height
		.attr("width", tamanho);    // set the width

	svgLosangoVert.append("rect")        // attach a rectangle
		.attr("x", i*2*tamanho +tamanho)        // position the left of the rectangle
		.attr("y", 0)         // position the top of the rectangle		
		.attr("clip-path", "url(#shape-clipVert)") // clip the rectangle
		.style("fill", "rgb(0,50,100)")   // fill the clipped path with grey
		.attr("height", 800)    // set the height
		.attr("width", tamanho);    // set the width
		
	}
	
	//Clip 2
	for (i=0;i<N;i++)
	{
	svgLosangoVert.append("rect")        // attach a rectangle
		.attr("x", 0 )        // position the left of the rectangle
		.attr("y", i*2*tamanho)         // position the top of the rectangle		
		.attr("clip-path", "url(#shape-clipVert2)") // clip the rectangle
		.style("fill", "rgb(0,50,100)")   // fill the clipped path with grey
		.attr("height", tamanho)    // set the height
		.attr("width", 1000);    // set the width

	svgLosangoVert.append("rect")        // attach a rectangle
		.attr("x", 0)        // position the left of the rectangle
		.attr("y", i*2*tamanho +tamanho)         // position the top of the rectangle		
		.attr("clip-path", "url(#shape-clipVert2)") // clip the rectangle
		.style("fill", "white")   // fill the clipped path with grey
		.attr("height", tamanho)    // set the height
		.attr("width", 1000);    // set the width
		
	}


		}
	