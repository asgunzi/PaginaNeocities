  var svgCircRnd = d3.select("#svgCircRnd")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 800);
   
	DesenharCircRnd();
	
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	function DesenharCircRnd()
	{
	svgCircRnd.selectAll("*").remove();
	
	var i;
	var tamanho = parseInt(d3.select("#myRangeCircRnd").property("value"));
	var N = parseInt(800/tamanho);

	//Linhas retas 
	for (i=0;i<N;i++)
	{
	svgCircRnd.append("rect")        // attach a rectangle
		.attr("x", 0)        // position the left of the rectangle
		.attr("y", i*2*tamanho)         // position the top of the rectangle		
		.style("fill", "rgb(0,50,100)")   // fill the clipped path with grey
		.attr("height", tamanho)    // set the height
		.attr("width", 1000);    // set the width
		
	svgCircRnd.append("rect")        // attach a rectangle
		.attr("x", 0)        // position the left of the rectangle
		.attr("y", i*2*tamanho +tamanho)         // position the top of the rectangle		
		.style("fill", "white")   // fill the clipped path with grey
		.attr("height", tamanho)    // set the height
		.attr("width", 1000);    // set the width
	}
   
	// define the clipPath
	let c;
	let raioRnd;
	let xRnd;
	let yRnd;
	let nRnd;
	
	nRnd = getRandomInt(4, 7);

	for (c=0;c<nRnd ;c++)
	{//Define nRnd  círculos aleatorios
	 raioRnd = getRandomInt(30, 140);
	 xRnd = getRandomInt(50, 900);
	 yRnd = getRandomInt(50, 700);
	 
	svgCircRnd.append("clipPath")       // define a clip path
		.attr("id", 'shape-clipCircRnd' + c) // give the clipPath an ID
	  .append("circle")          // shape it as an ellipse
		.attr("cx", xRnd)         // position the x-centre
		.attr("cy", yRnd)         // position the y-centre
		.attr("r", raioRnd);
	}

	//Clip	
	for (c=0;c<nRnd ;c++)
	{
		
		if (Math.random()<0.5)
		{//Listras verticais
			for (i=0;i<N;i++)
			{
			svgCircRnd.append("rect")        // attach a rectangle
				.attr("x", i*2*tamanho)        // position the left of the rectangle
				.attr("y", 0)         // position the top of the rectangle		
				.attr("clip-path", "url(#shape-clipCircRnd" + c + ")") // clip the rectangle
				.style("fill", "white")   // fill the clipped path with grey
				.attr("height", 800)    // set the height
				.attr("width", tamanho);    // set the width

			svgCircRnd.append("rect")        // attach a rectangle
				.attr("x", i*2*tamanho +tamanho)        // position the left of the rectangle
				.attr("y", 0)         // position the top of the rectangle		
				.attr("clip-path", "url(#shape-clipCircRnd" + c + ")") // clip the rectangle
				.style("fill", "rgb(0,50,100)")   // fill the clipped path with grey
				.attr("height", 800)    // set the height
				.attr("width", tamanho);    // set the width
			}
		}
		else
		{//Listras horizontais com cor trocada
		for (i=0;i<N;i++)
			{
			svgCircRnd.append("rect")        // attach a rectangle
				.attr("x", 0)        // position the left of the rectangle
				.attr("y", i*2*tamanho)         // position the top of the rectangle		
				.attr("clip-path", "url(#shape-clipCircRnd" + c + ")") // clip the rectangle
				.style("fill", "white")   // fill the clipped path with grey
				.attr("height", tamanho)    // set the height
				.attr("width", 1000);    // set the width

			svgCircRnd.append("rect")        // attach a rectangle
				.attr("x", 0)        // position the left of the rectangle
				.attr("y", i*2*tamanho +tamanho)         // position the top of the rectangle		
				.attr("clip-path", "url(#shape-clipCircRnd" + c + ")") // clip the rectangle
				.style("fill", "rgb(0,50,100)")   // fill the clipped path with grey
				.attr("height", tamanho)    // set the height
				.attr("width", 1000);    // set the width
			}
		}
	}
	
}
	