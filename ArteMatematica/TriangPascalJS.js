
    var svg = d3.select("#triangsvg")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 800);

   
	Desenhar();

	function Desenhar()
	{
	
	var triangs =[];
	var colors =[];
	var Raio;
	var ncamadas;
	var x0;
	var y0;
	var i;
	var j;
	var Pascal=[1];
	var PascalUpdate =[];
	var ntrianglinha;
	var compensa;

	ncamadas =parseInt(d3.select("#SelectPontos").property("value"));


	svg.selectAll("*").remove();
	
	
	Raio =50;
	x0 = 500;
	y0= 50;
	
	for (i=0; i< ncamadas; i++)
	{
		ntrianglinha = i+1;
		
		for (j=0; j <ntrianglinha; j++)
		{
			if (j==0)
			{
			
				RegularPol(x0- i*Raio*0.866, y0+1.5*Raio*i ,Raio,3, 3.14159, "goldenrod"); //Triângulo à esquerda				
				svg.append("text").attr("x", x0- i*Raio*0.866-6).attr("y",  y0+1.5*Raio*i +5).text("1").attr("font-size",20);
			}
			else
			{


			//Triângulo à direita
				RegularPol(x0 - i*Raio*0.866 + j*Raio*0.866*2, y0+1.5*Raio*i ,Raio,3, 3.14159,"goldenrod"); 
				if (Pascal[j] <10)
				{
					compensa = 6;
				}
				else
				{
					compensa = 11;
				}
				svg.append("text").attr("x",x0 - i*Raio*0.866 + j*Raio*0.866*2-compensa).attr("y", y0+1.5*Raio*i +5).text(Pascal[j]).attr("font-size",20);
			}			
		}
		
		PascalUpdate =[];
		PascalUpdate.push(1);		
		
		for (j=0; j< Pascal.length-1;j++)
			{
					PascalUpdate.push(Pascal[j] + Pascal[j+1]);
			}
		
		
		PascalUpdate.push(1);

		//Copia para Pascal
		Pascal =[];
		for (j = 0; j < PascalUpdate.length; j++) {
		  Pascal.push(PascalUpdate[j]);			  
		}
	}
	
	}

function RegularPol(x,y,R, n, ang0, cor)
	{
		//Posicao x, y
		//Raio R
		//Angulo inicial
		//Número de pontos n
		var pontos;
		var i;
		var angulo;
		
		//angulo inicial
		angulo = 0;
		pontos="";
		for (i=0;i<n-1;i++)
		{		
			angulo = i*2*3.14159/n;
			pontos += (x + Math.sin(angulo+ang0)*R)+ ", " + (y+Math.cos(angulo+ang0)*R) + ", ";			 
		}
		//Ultimo ponto
		i = n-1;
		angulo = i*2*3.14159/n;		
		pontos += (x + Math.sin(angulo+ang0)*R)+ ", " + (y+Math.cos(angulo+ang0)*R);

		svg.append("polygon")
		  .attr("points", pontos)		  
		  .attr("stroke", "black")
		  .attr("stroke-width", 1)
		  .attr("fill", cor)		  
	}	
