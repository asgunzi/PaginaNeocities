    var svgHex = d3.select("#svgHex")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 800);
   
	DesenharHex();

	function DesenharHex()
	{
	svgHex.selectAll("*").remove();
	
	var i;
	var tamanho = parseInt(d3.select("#myRangeHex").property("value"));
	var lados = parseInt(d3.select("#SelectPontosHex").property("value"));
	var N = parseInt(800/tamanho);

	//Linhas retas 
	for (i=0;i<N;i++)
	{
	svgHex.append("rect")        // attach a rectangle
		.attr("x", 0)        // position the left of the rectangle
		.attr("y", i*2*tamanho)         // position the top of the rectangle		
		.style("fill", "rgb(0,50,100)")   // fill the clipped path with grey
		.attr("height", tamanho)    // set the height
		.attr("width", 1000);    // set the width
		
	svgHex.append("rect")        // attach a rectangle
		.attr("x", 0)        // position the left of the rectangle
		.attr("y", i*2*tamanho +tamanho)         // position the top of the rectangle		
		.style("fill", "white")   // fill the clipped path with grey
		.attr("height", tamanho)    // set the height
		.attr("width", 1000);    // set the width
	}

	// define the clipPath
	RegularPol(500,400,300, lados);
	
	//Clip
	for (i=0;i<N;i++)
	{
	svgHex.append("rect")        // attach a rectangle
		.attr("x", 0)        // position the left of the rectangle
		.attr("y", i*2*tamanho)         // position the top of the rectangle		
		.attr("clip-path", "url(#hex-clip)") // clip the rectangle
		.style("fill", "white")   // fill the clipped path with grey
		.attr("height", tamanho)    // set the height
		.attr("width", 1000);    // set the width

	svgHex.append("rect")        // attach a rectangle
		.attr("x", 0)        // position the left of the rectangle
		.attr("y", i*2*tamanho +tamanho)         // position the top of the rectangle		
		.attr("clip-path", "url(#hex-clip)") // clip the rectangle
		.style("fill", "rgb(0,50,100)")   // fill the clipped path with grey
		.attr("height", tamanho)    // set the height
		.attr("width", 1000);    // set the width		
	}
	}
	
	
	
	function RegularPol(x,y,R, n)
	{
		//Posicao x, y
		//Raio R
		//Número de pontos n
		var pontos;
		var i;
		var angulo;
		
		pontos="";
		for (i=0;i<n-1;i++)
		{		
			angulo = i*2*3.14159/n;
			pontos += (x + Math.sin(angulo)*R)+ ", " + (y+Math.cos(angulo)*R) + ", ";			 
		}
		//Ultimo ponto
		i = n-1;
		angulo = i*2*3.14159/n;		
		pontos += (x + Math.sin(angulo)*R)+ ", " + (y+Math.cos(angulo)*R);

		svgHex
		.append("clipPath")       // define a clip path
		.attr("id", "hex-clip") // give the clipPath an ID
		.append("polygon")
		  .attr("points", pontos)
		  .attr("stroke", "black")
		  .attr("fill", "blue");

	}
