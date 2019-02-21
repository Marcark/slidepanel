


var x=0;var y=0;var xx1;var popen=0;var goIn =0;var goOut=0; first=0;moveto=0;popen=0; ptouch=0;


	  function openPanel() {

	   if (ptouch==0 ) { document.getElementById('mypanel').style.transform='translateX(0)'; ptouch=1; popen=1;  document.getElementById('shadow').style.opacity='0.5';
			document.getElementById('shadow').style.display='block';}
	   else { document.getElementById('mypanel').style.transform='translateX(-101%)';  ptouch=0; popen=0;   }
	   
	  }	
	

/*  swipe */
var x=0;var y=0;var xx1;var popen=0;var goIn =0;var goOut=0; first=0;moveto=0;
var windowWidth = document.documentElement.clientWidth;
var x90 = parseInt((windowWidth*90/100));

document.addEventListener('touchmove', TouchMove, false);
document.addEventListener('touchend', TouchEnd, false);	

function TouchMove(evt) {

		x1 = parseInt(evt.targetTouches[0].clientX);
		y1 = parseInt(evt.targetTouches[0].clientY);
		
		
		// get direction touch
		first=first+1;
		if (first==1) { xm1 = parseInt(evt.targetTouches[0].clientX); document.getElementById('shadow').style.display='block';  }
			if (first==2) {
				if (xm1>x1) { moveto=2; } // right to left 
				if (xm1<x1) { moveto=1; } // left to right
			}
		
			// open the panel from left to right
				if ( x1<=80 && popen==0 && moveto==1 ) { goIn=1; document.getElementById('mypanel').style.transition='none'; }
			 	if (goIn==1) { 
				//xx1 = x1 - windowWidth;
				xx1 = x1 - x90;
				if (xx1>=0) { xx1=0; }
				str='translateX('+xx1+'px)';
				document.getElementById('mypanel').style.transform=str; 
					
				// shadow
				perc= parseInt(x1*100/x90/2); if (perc>=50) { perc=50; } if (perc<=0) { perc=0; }
				if (perc<10) { perc='0'+perc; str1 = '0.'+perc; } else { str1 = '0.'+perc; }
				console.log(perc);
				document.getElementById('shadow').style.opacity=str1;
			}
		
  
    	
			// close the panel from right to left
			if (popen==1 && moveto==2 ) { goOut=1; document.getElementById('mypanel').style.transition='none'; }
				if (goOut==1) {
				xx1 = x1 - x90;
				if (xx1<=0) { 
				str='translateX('+xx1+'px)';
				document.getElementById('mypanel').style.transform=str; 
					
				// shadow
				perc= parseInt(x1*100/x90/2); if (perc>=50) { perc=50; } if (perc<=0) { perc=0; }
				if (perc<10) { perc='0'+perc; str1 = '0.'+perc; } else { str1 = '0.'+perc; }
				console.log(perc);
				document.getElementById('shadow').style.opacity=str1;
				}	
			}

	
	
} // end TouchMove

function TouchEnd(evt) {
	x=0;
	y=0;
	first=0;
	
		if ((xx1+x90)>parseInt(x90/2)) { goIn=1; goOut=0; } else { goIn=0; goOut=1; }
	

	
		if (goIn==1 ) { 
			document.getElementById('mypanel').style.transition='transform 100ms';
			document.getElementById('mypanel').style.transform='translateX(0px)'; popen=1; goIn=0; ptouch=1;
			document.getElementById('shadow').style.opacity='0.5';
			document.getElementById('shadow').style.display='block';
		}
	
		if (goOut==1 ) { 
			document.getElementById('mypanel').style.transition='transform 100ms';
			document.getElementById('mypanel').style.transform='translateX(-101%)'; popen=0; goOut=0; ptouch=0;
			document.getElementById('shadow').style.opacity='0';
			document.getElementById('shadow').style.display='none';
		}
	
	
	
}	 // end TouchEnd


