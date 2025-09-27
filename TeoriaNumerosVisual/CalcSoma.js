
var svgSoma = d3.select("#conteinerSoma")
	.append("svg")
	.attr("width", 1000)
	.attr("height", 500);

DesenharSoma();

function DesenharSoma()
{
	svgSoma.selectAll("*").remove();

	let a =parseInt(d3.select("#idSomaA").property("value"));
	let b =parseInt(d3.select("#idSomaB").property("value"));
	let operacao =d3.select("#SelectOper").property("value");
	let m;
	

	//m é a base do quadrado
	m = Math.max(parseInt(Math.sqrt(a)), parseInt(Math.sqrt(b)));
	
	//Calcula tamanho do raio
	raio = Math.min(20, 450/(2.5*m));
		
	//=======================================
	//Plota primeiro bloco
	d = Math.floor(a / m);
	resto = a % m;
		
	//Plota o resto
	inicio=50;
	
	for (i =0; i<resto; i++)
	{
	svgSoma.append("circle")
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
			svgSoma.append("circle")
			  .attr("cx", i*(2.5*raio)+50)
			  .attr("cy", j*(2.5*raio)+inicio)
			  .attr("r", raio)		  
			  .attr("stroke", "black")
			  .attr("fill", "goldenrod");
		}
	}

	//=======================================
	//Plota segundo bloco
	d = Math.floor(b / m);
	resto = b % m;
		
	//Plota o resto
	inicio=50;
	let shift = 2.5*raio*m +50;
	
	for (i =0; i<resto; i++)
	{
	svgSoma.append("circle")
	  .attr("cx", i*(2.5*raio)+50 + shift)
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
			svgSoma.append("circle")
			  .attr("cx", i*(2.5*raio)+50+shift)
			  .attr("cy", j*(2.5*raio)+inicio)
			  .attr("r", raio)		  
			  .attr("stroke", "black")
			  .attr("fill", "goldenrod");
		}
	}

let textOper;

operacao=="+" ? textOper = "+" : textOper ="_";

svgSoma.append("text")
			.attr("x", shift-10)
			.attr("y", inicio+10)
			.text(textOper)
			.attr("font-size",40)

}

