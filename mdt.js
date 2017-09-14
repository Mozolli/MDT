// Controlling classes

	function hasClass(el, className) {
	  if (el.classList)
		return el.classList.contains(className)
	  else
		return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
	}

	function addClass(el, className) {
	  if (el.classList)
		el.classList.add(className)
	  else if (!hasClass(el, className)) el.className += " " + className
	}

	function removeClass(el, className) {
	  if (el.classList)
		el.classList.remove(className)
	  else if (hasClass(el, className)) {
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
		el.className=el.className.replace(reg, ' ')
	  }
	}

// MDT scripts
	
function rotatePhone(newVal){
	
	document.getElementById("degree").innerHTML=newVal + " deg";
	
	var device  = document.getElementById("device");
	var frame = document.getElementById("frame");
	var edges = document.getElementById("edges");
	var reflection = document.getElementById("reflection"),
        value = device.value;
		device.style.transform = 'perspective( 1200px ) rotateY( '+ newVal + 'deg )'; 
		edges.style.paddingLeft = (newVal/6) +'px';
		edges.style.paddingRight = -(newVal/6) +'px';
		reflection.style.left= (72 + (newVal * 2)) +'%';
		
		if (device.classList.contains('phone')){
			frame.style.padding = '60px '+ (13-(newVal/8)) +'px 70px '+ (13+(newVal/8)) +'px';
		}
		if ((device.classList.contains('black')) && (device.classList.contains('phone'))){
			frame.style.boxShadow = 'inset '+ (newVal/7) +'px 3px 10px rgba(255, 255, 255, 0.33)';
		}
		if ((device.classList.contains('white')) && (device.classList.contains('phone'))){
			frame.style.boxShadow = 'inset '+ (newVal/7) +'px 3px 10px rgba(0, 0, 0, 0.12)';
		}
		if (device.classList.contains('tablet')){
			frame.style.padding = '50px '+ (30-(newVal/8)) +'px 70px '+ (30+(newVal/8)) +'px';
			frame.style.boxShadow = 'inset '+ (newVal/9) +'px 1px 2px rgba(255, 255, 255, 0.33)';
		}
}

function switchClass(newClass, oldClass){
	var newClassControl = document.getElementById(newClass + 'Control');
	var oldClassControl = document.getElementById(oldClass + 'Control');
	var device  = document.getElementById("device");
	addClass(newClassControl, 'active');
	removeClass(oldClassControl, 'active');
	addClass(device, newClass);
	removeClass(device, oldClass);
}

function contentLoaded(){
	
}

function loadIframe(frameUrl){
	var iFrame = document.getElementById('iframe');
		iFrame.src = frameUrl;
		alert(frameUrl)
}
