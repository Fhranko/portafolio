import { Component, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	// @HostListener('window:scroll', [ '$event' ])
	// onWindowScroll(e) {
	// 	let element = document.querySelector('.navbar');
	// 	if (window.pageYOffset > element.clientHeight) {
	// 		element.classList.add('custom-navbar-dark');
	// 	} else {
	// 		element.classList.remove('custom-navbar-dark');
	// 	}
	// }
	ocultarNavbar() {
		let element = document.getElementById('navbarSupportedContent');
		element.classList.remove('show');
	}
}
