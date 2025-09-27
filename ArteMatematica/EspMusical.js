    var svg = d3.select("#Espiralsvg")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 800);

   
	Desenhar();

	function Desenhar()
	{
	
	var npontos;
	var delayInMilliseconds =0;
	var i;
	var ang=0;
	var ang0;
	var x0;
	var y0;
	var x1;
	var y1;
	var raio;
	var strCor;
	//npontos=parseInt(d3.select("#slider01").property("value"));
	npontos =2000;
	svg.selectAll("*").remove();
	
	x0 = 500;
	y0 = 400;
	ang0 = 5.48 +1.5*Math.random(); //em graus
	raio = 9;
	
	var idx = getRandomInt(1,3);
	
	for (i=0; i< npontos; i++)
	{
		
		
		ang = (ang + i*ang0) % 360;
		x1 = x0+raio*Math.cos(ang*3.1415/180);
		y1 = y0+raio*Math.sin(ang*3.1415/180);
		
		
		if (idx==1)
		{
			strCor = "rgb(" + parseInt(i*255/npontos) + ",0,0)";
		}
		if (idx==2)
		{
			strCor = "rgb(0," + parseInt(i*255/npontos) + ",0)";
		}
		if (idx==3)
		{
			strCor = "rgb(0,0," + parseInt(i*255/npontos) + ")";
		}		
		
		svg.append("line")
		  .attr("x1", x0)
		  .attr("y1", y0)
		  .attr("x2", x1)
			.attr("y2", y1)
		  .attr("stroke", strCor);
		  
		x0 = x1;
		y0 = y1;

		
	//delayInMilliseconds +=1;
	
	//setTimeout(function (){elo(i)}, delayInMilliseconds,i);
	//setTimeout(elo.bind(null,i), delayInMilliseconds,i);
	
	  
	}

	}
	

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

