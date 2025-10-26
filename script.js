	///// java for accordion Open&Close Off //////////
	/////////////////////////////////////////////////
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	/*Toggle for adding&removing "active-class" to highlight the 
		button-that-controls panel*/
		acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
	
		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
		panel.style.display = "none";
		}
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		}
		else {
		panel.style.display = "block";
		panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
	}
	////// java-script for typed Words moving ///////
	////////////////////////////////////////////////
	var typed = new Typed(".input",{
		strings:["","Web Developer","Sales Consultant","Professional DJ","Music Producer","Sound Engineer","Artist","Designer"],

		typeSpeed:90,
		backSpeed:90,
		loop:true
	});
	////////////////////////////////////////////////
	///// java-script-clear-form-after submit /////
	window.onbeforeunload = () => {
		for(const form of document.getElementsByTagName('form')) {
		form.reset();
		}
	};
	//////////////////////////////////////////////
	/////// java for slide-projects section//////
	/*let slideIndex = 1;
	showSlides(slideIndex);

	function plusSlide(n) {
		showSlides(slideIndex += n);
	}
	
	function showSlides(n) {
		let i;
		let slide = document.getElementsByClassName("slides");

		if(n > slides.length) {slideIndex = 1}
			if(n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
	}*/	

	let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName(".controls");
    
    // Loop back to first slide
    if (n > slides.length) {
        slideIndex = 1;
    }
    // Loop to last slide
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Show current slide
    slides[slideIndex-1].style.display = "block";
}