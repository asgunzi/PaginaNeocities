//Insere Logotipo
var svgLogo = d3.select("#Logo").append("svg");

var limX = 350;
var limY = 60;

//Define dimensions of svg
svgLogo.attr("width", limX)
.attr("height",limY);

var N = 4;
var cor = [];

var ii;
var l;
var p;
var x0 =[];
var y0 =[];
var x0ref;
var y0ref;

l = 11; //Tamanho
p = 0; //Padding
//Primeiro valor

x0.push(l);
y0.push(l);
cor.push("rgb(255,255,255)");
	
//Cria o array de dados
for (ii = 1; ii<= N; ii++)
        {	
			cor1 = 0;
			cor2 = String(Math.floor(255-ii* 255/10)) ;
			cor3 = String(Math.floor(255-ii* 255/20)) ;

			if (ii % 2 == 0)
			{
				x0ref =(l+p)*2**(ii/2-1);
				y0ref = 0;
				
				for (j = 1; j<= 2**(ii/2); j++)
				{	
					for (k = 1; k<= 2**(ii/2-1); k++)
					{	
						x0.push(x0ref + l*k);
						y0.push(y0ref + l*j);
						cor.push("rgb(" + cor1 + "," + cor2 + "," + cor3 + ")");
					}
				}
			}
			else
			{	
				x0ref = 0;
				y0ref = (l+p)*2**((ii+1)/2-1);
				
				for (j = 1; j<= 2**((ii+1)/2-1); j++)
				{	
					for (k = 1; k<= 2**((ii+1)/2-1); k++)
					{	
						x0.push(x0ref + l*k);
						y0.push(y0ref + l*j);
						cor.push("rgb(" + cor1 + "," + cor2 + ","+ cor3+ ")");
						
					}
				}
			}
		}
        
        //Cria os pontos
        var rect1 = svgLogo.selectAll("rect")
			.data(x0)
        	.enter()
        	.append("rect")
			.transition();

        rect1.attr("x", function(d,i){
        			return x0[i];
        		})
        		.attr("y", function(d,i){return y0[i];})
        		.attr("width", l)
        		.attr("height", l)
				.attr("fill", function(d,i){return cor[i];})
        		.attr("stroke","rgb(0,0,0)")
        		.attr("stroke-width","1");
		

svgLogo.append("text")
	.attr("x", 65)
	.attr("y", 45)
	.text("Forgotten Math")
	.attr("font-size",35)
	.attr("onClick", "location.href='../index.html")
	.transition();

