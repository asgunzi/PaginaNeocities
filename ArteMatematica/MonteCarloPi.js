
    var svg = d3.select("#svgMonteCarlo")
        .append("svg")
        .attr("width", 800)
        .attr("height", 610);
   
	Desenhar();

	function Desenhar()
	{
		let delayInMilliseconds ;
		let countDentro=0;
		let countFora =0;
		let x;
		let y;
	svg.selectAll("*").remove();

	svg.append("rect")
		  .attr("x", 10)
		  .attr("y", 10)
		  .attr("width", 600)
		  .attr("height", 600)
		  .attr("stroke", "black")
		  .attr("stroke-width", "2")		  
		  .attr("fill", "transparent");

	svg.append("circle")
		  .attr("cx", 310)
		  .attr("cy", 310)
		  .attr("r", 300)
		  .attr("stroke", "black")
		  .attr("stroke-width", "2")		  
		  .attr("fill", "transparent");

	
	
		delayInMilliseconds =0;
		for (i  =0;i<1000;i++)
		{
		delayInMilliseconds +=5;
		
		setTimeout(function() {
			
			x= Math.random()*600;
			y = Math.random()*600;
			
				svg.append("circle")
				  .attr("cx", 10 + x)
				  .attr("cy", 10 + y)
				  .attr("r", 2)
				  .attr("stroke", "blue")
				  .attr("fill", "blue");
		
		if (((x-300)/300)**2+((y-300)/300)**2<=1)
		{
			countDentro+=1;
		}
		else{
			countFora+=1;
		}
		d3.select("#Dentro").text("Dentro: " + countDentro);
		d3.select("#Fora").text("Fora: " + countFora + "  Pi = " + 4*countDentro/1000);
		

		}, delayInMilliseconds);	
		


		}
	}