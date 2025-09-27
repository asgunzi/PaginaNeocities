
    var svgMult = d3.select("#conteinerMult")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 500);

	DesenharMult();

	function DesenharMult()
	{
	svgMult.selectAll("*").remove();

	let a =parseInt(d3.select("#idMultA").property("value"));
	let b =parseInt(d3.select("#idMultB").property("value"));
	
	
	//Calcula tamanho do raio
	raio = Math.min(20, 950/(2.5*a), 450/(2.5*b));
		
	
	//Plota a divisao
	for (i =0; i<a; i++)
	{
		for(j =0; j<b; j++)
		{
			svgMult.append("circle")
			  .attr("cx", i*(2.5*raio)+2*raio)
			  .attr("cy", j*(2.5*raio)+2*raio)
			  .attr("r", raio)		  
			  .attr("stroke", "black")
			  .attr("fill", "goldenrod");
		}
	}
	
	}
	
