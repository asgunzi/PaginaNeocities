    var svg = d3.select("#svgEspCirc")
        .append("svg")
        .attr("width", 1520)
        .attr("height", 800);
   
	Desenhar();

	function Desenhar()
	{
	svg.selectAll("*").remove();

	//---------------------------------------------------------------
	var i;
	var j;
	var cx =[];
	var cy=[];
	var r0 =[];
	var cor =[];
	
	var num = d3.select("#rangeNum").property("value"); //Número de círculos
	var angle = d3.select("#rangeAngle").property("value"); //angulo final
	var camadas = 8;
	var raio = 15;
	

	//Plota cada camada
	for (i=0; i<camadas;i++)
		{
		for (j=0; j<num; j++)
			{
				cx.push(400 + (raio*num/3.1416 + i*(raio*2))* Math.sin(2*3.1416*(j/num +i*angle/camadas/360)));
				cy.push(400 + (raio*num/3.1416 + i*(raio*2))* Math.cos(2*3.1416*(j/num +i*angle/camadas/360)))	
				r0.push(raio - .8*i);
				cor.push("goldenrod");
			}
		}
		
	svg.selectAll("circle")
			.data(cx)
			.enter()
			.append("circle")		
			.transition()
			.delay(function(i){return i*2})
		  .attr("cx", function(d,i){return cx[i]})
		  .attr("cy", function(d,i){return cy[i]})
		  .attr("stroke", "black")
		  .attr("r", function(d,i){return r0[i]})
		  .attr("stroke-width", 1.5)
		  .attr("fill", function(d,i){return cor[i]})
	}


	
