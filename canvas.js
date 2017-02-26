
            var a = document.getElementById("slate");
            var b = document.getElementById("circle");
	    var c = document.getElementById("dvd");	
            var d = document.getElementById("stop");	
            var img = document.getElementById("dvds");

            var ctx = a.getContext('2d');
            var draw = function(event){
                clean();
                ctx.beginPath();
	        ctx.arc(a.width/2, a.height/2, x, 0, 2 * Math.PI);
		ctx.stroke();
                ctx.fill();
                x++;
                if (x == 150){
                    rid = window.requestAnimationFrame( draw2 );
                }
                else{
                    rid = window.requestAnimationFrame( draw );
                }
            }
            var draw2 = function(event){
                clean();
                ctx.beginPath();
	        ctx.arc(a.width/2, a.height/2, x, 0, 2 * Math.PI);
		ctx.stroke();
                ctx.fill();
                x--;
                if (x == 1){
                     rid = window.requestAnimationFrame( draw );
                }
                else{
                     rid = window.requestAnimationFrame( draw2 );
                }
            }
            var drawer = function(event){
                x = 1;
                draw(); 
            }
            var dvder = function(event){
               var h = 0;
               var i = 0;
               var j = 15;
               var k = 15;
               var dver = function(event){
                    clean();
                    ctx.drawImage(img, j, k, 100, 50);
                    if(h == 0){
                        j++;
                    }
                    else{
                        j--;
                    }
                    if(i == 0){
                        k++;
                    }
                    else{
                        k--;
                    }
                    if(j == 0 && h == 1){
                         j++;
                         h=0;
                    }
                    if(j == 400 && h == 0){
                         j--;
                         h=1;
                    }
                    if(k == 0 && i == 1){
                         k++;
                         i=0;
                    }
                    if(k == 250 && i == 0){
                         k--;
                         i=1;
                    }
                    rid = window.requestAnimationFrame( dver );
               }
               dver();
            }
            var clean = function(e){
               ctx.clearRect(0,0,1000,1000);
            }
            var stopper = function(e){
               window.cancelAnimationFrame(rid);      
            }
            b.addEventListener('click', drawer);  
            c.addEventListener('click', dvder);  
            d.addEventListener('click', stopper); 