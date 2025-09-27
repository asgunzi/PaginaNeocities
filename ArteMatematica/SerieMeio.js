
        var svg = d3.select("#SerieMeioSvg").append("svg");

        var limX = 800;
        var limY = 800;
        
        //Define dimensions of svg
        svg.attr("width", limX)
        .attr("height",limY);
		
      Desenhar();

	function Desenhar()
        {
        
        //Clear svg
		svg.selectAll("*").remove();

        //dados e definicoes macro
        var N = parseInt(d3.select("#SelectPontos").property("value"));
		

		var cx0 = 50;
		var cy0 = 30;
		
        //Traça SVG
        var i;
        var cx =[];
        var cy =[];
		var wid =[];
        var hei =[];
		
		var corR =[];
		var x=0;
		var y=0;
		var fator = 400;
 
        //Cria coordenadas e dimensões 
        for (i = 1; i< N+1; i++)
        {
			if (i % 2 == 0)
			{	
				hei.push(fator*1/2**(i/2));
				wid.push(fator*1/2**(i/2));
				x = parseInt(x,10) + parseInt(fator*1/2**(i/2),10);
				y = cy0+ fator*1/2**(i/2);
				cx.push(cx0+x);
				cy.push(y);
			}
			else{
				hei.push(fator*1/2**((i-1)/2));
				wid.push(fator*1/2**((i+1)/2));
				
				y =  cy0;
				cx.push(cx0+x);
				cy.push(y);
			}
			
		corR.push("rgb(" + String(Math.floor(Math.random() * 150)) + ","+ String(Math.floor(Math.random() * 150)) +","+ String(Math.floor(Math.random() * 150))+")");
			
        }

				
	//Cria os retângulos
        var rect3 = svg.selectAll("rect")
         .data(cx)
         .enter()
         .append("rect");

        rect3.attr("x", function(d,i){
           return cx[i];
          })
		  .transition()
		   .duration(function(d,i){ return i*70})
          .attr("y", function(d,i){
           return cy[i];
          })
          .attr("width", function(d,i){
           return wid[i];
          })
          .attr("height", function(d,i){
           return hei[i];
          })		 
          .attr("fill", function(d,i){return corR[i];})
          .attr("stroke","black")
          .attr("stroke-width","1")
          ;
          
       
		 

        }

