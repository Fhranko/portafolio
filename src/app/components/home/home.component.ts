import { Component, OnInit } from '@angular/core';
import { ProyectosService, Proyecto } from '../../services/proyectos.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	proyectos: Proyecto[] = [];
	constructor(private _proyectosService: ProyectosService) {}

	ngOnInit() {
		this.proyectos = this._proyectosService.getProyectos();
		console.log(this.proyectos);
	}
}
