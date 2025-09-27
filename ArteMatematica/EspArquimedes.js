
    var svg = d3.select("#espiralSvg")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 800);

   
	Desenhar();

	function Desenhar()
	{
	
	var npontos;
	var delayInMilliseconds =0;
	var i;
	npontos=parseInt(d3.select("#slider01").property("value"));

	svg.selectAll("*").remove();
	
	
	for (i=0; i< npontos; i++)
	{

	delayInMilliseconds +=5;
	//setTimeout(function (){elo(i)}, delayInMilliseconds,i);
	setTimeout(elo.bind(null,i), delayInMilliseconds,i);
	  
	}	

	}
	
	
	function elo(i)
	{
		
	var x0;
	var y0;
	var R;
	var ang;
	var r;
		
	R =5;
	x0 = 500;
	y0= 400;
	ang = 20*2*3.1415/360;
	r =5;
	
	
		//Rotina
		svg.append("line")
		  .attr("x1", x0 + (R*(i)+r)*Math.cos(ang*(i)))
		  .attr("y1", y0 + (R*(i)+r)*Math.sin(ang*(i)))
		  .attr("x2", x0 + (R*(i+1)+r)*Math.cos(ang*(i+1)))
		  .attr("y2", y0 + (R*(i+1)+r)*Math.sin(ang*(i+1)))
		  .attr("stroke", "darkblue")
		  .attr("stroke-width", 1)
	
			svg.append("circle")
		  .attr("cx", x0 + R*(i+1)*Math.cos(ang*i))
		  .attr("cy", y0+ R*(i+1)*Math.sin(ang*i))
		  .attr("r", r)
		  .attr("stroke", "black")
		  .attr("stroke-width", 1)
		  .attr("fill", "goldenrod");
		 }