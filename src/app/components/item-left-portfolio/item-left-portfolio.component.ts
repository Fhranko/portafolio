import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-item-left-portfolio',
	templateUrl: './item-left-portfolio.component.html',
	styleUrls: [ './item-left-portfolio.component.css' ]
})
export class ItemLeftPortfolioComponent implements OnInit {
	@Input() proyecto: any = {};
	constructor() {}

	ngOnInit(): void {}
}
