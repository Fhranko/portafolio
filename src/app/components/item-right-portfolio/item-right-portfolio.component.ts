import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-item-right-portfolio',
	templateUrl: './item-right-portfolio.component.html',
	styleUrls: [ './item-right-portfolio.component.css' ]
})
export class ItemRightPortfolioComponent implements OnInit {
	@Input() proyecto: any = {};
	constructor() {}

	ngOnInit(): void {}
}
