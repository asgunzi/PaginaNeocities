'use strict';

    var svg = d3.select("#conteinerDiv")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 500);


    Desenhar();
	
	function Desenhar()
	{
	svg.selectAll("*").remove();

	let a =parseInt(d3.select("#idA").property("value"));
	let m =parseInt(d3.select("#idM").property("value"));
	
	let d;
	let resto;
	let i;
	let j;
	let inicio;
	let raio;
	let deltaIni1;
	let deltaIni2;
	
	//Calcula tamanho do raio
	raio = Math.min(20, 950/(2.5*m), 450/(2.5*Math.ceil(a / m)));
	
	 
	//Plota primeiro bloco
	d = Math.floor(a / m);
	resto = a % m;
	
	
	//Plota o resto
	inicio=50;
	
	for (i =0; i<resto; i++)
	{
	svg.append("circle")
	  .attr("cx", i*(2.5*raio)+50)
	  .attr("cy", inicio)
	  .attr("r", raio)		  
	  .attr("stroke", "black")
	  .attr("fill", "goldenrod");
	}
	
	resto > 0 ? inicio = 50+(2.5*raio) : inicio = 50;
		
	//Plota a divisao
	for (i =0; i<m; i++)
	{
		for(j =0; j< d;j++)
		{
			svg.append("circle")
			  .attr("cx", i*(2.5*raio)+50)
			  .attr("cy", j*(2.5*raio)+inicio)
			  .attr("r", raio)		  
			  .attr("stroke", "black")
			  .attr("fill", "goldenrod");
		}
	}
	
	
	}