 var svg = d3.select("#mdcSvg")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 800);

   
	Desenhar();

	function Desenhar()
	{

	let a;
	let b;
	let num;
	let den;
	let quoc;
	let resto;
	let vertical;
	let x0;
	let y0;
	let escala;
	let j;
	let i;

	svg.selectAll("*").remove();
	
	a  = parseInt(d3.select("#idA").property("value"));	
	b  = parseInt(d3.select("#idB").property("value"));
	x0 = 10;
	y0 = 10;
	
	
	escala = 25;
	
	for (i=0;i<a;i++)
		for (j=0;j<b;j++)
			svg.append("rect")
			  .attr("x", x0+j*escala)
			  .attr("y", y0+i*escala)
			  .attr("width", escala)
			  .attr("height", escala)
			  .attr("stroke", "grey")
			  .attr("fill", "transparent")
			  .attr("stroke-dasharray", "1,2");			  

	
	//Traça o mdc
	do{
		if (a>b)
		{
			num = a;
			den = b;
			vertical = true;			
		}
		else{
			num = b;
			den = a;			
			vertical = false;
		}
		
		quoc = Math.floor(num/den);
		resto = num % den;
		
		for(j =0; j<quoc;j++)
		{
			svg.append("rect")
			  .attr("x", x0)
			  .attr("y", y0)
			  .attr("width", den*escala)
			  .attr("height", den*escala)
			  .attr("stroke", "black")
			 .attr("stroke-width", "2") 
			  .attr("fill", "transparent");

			if (vertical)
			{
				y0+=den*escala;
			}
			else
			{
				x0+=den*escala;
			}			
		}
		
		if (vertical)
		{	b =den;
			a = resto;
		}
		else{
			a =den;
			b = resto;
		}
	} while (resto >0);

	}