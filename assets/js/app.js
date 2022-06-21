"use strict"

var navbar = document.querySelector(".header")
if (navbar) {
	window.onscroll = function () {
		myFunction()
	}

	// Get the navbar
	// Get the offset position of the navbar
	var sticky = navbar.offsetTop

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
		if (window.pageYOffset >= 120) {
			navbar.classList.add("sticky")
		} else {
			navbar.classList.remove("sticky")
		}
	}
}

// Get Year
const d = new Date()
let year = d.getFullYear()
document.getElementById("year").innerHTML = year

if (document.querySelector(".post-slider")) {
	var swiper = new Swiper(".post-slider", {
		slidesPerView: 6,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 1800,
			disableOnInteraction: false,
		},
		centeredSlides: true,
	})
}

if (document.querySelector(".testomonial-slider")) {
	var swiper = new Swiper(".testomonial-slider", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	})
}

if (document.querySelector(".products-slider")) {
	var swiper = new Swiper(".products-thumb-slider", {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		loop: false,
		watchSlidesProgress: true,
	})
	var swiper2 = new Swiper(".products-slider", {
		spaceBetween: 10,
		thumbs: {
			swiper: swiper,
		},
	})
}

if (document.querySelector(".my-video-links")) {
	new VenoBox({
		selector: ".my-video-links",
	})
}
