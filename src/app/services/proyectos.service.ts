import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProyectosService {
	private proyectos: Proyecto[] = [
		{
			titulo: 'Capacidades',
			descripcion:
				'Plataforma de educación online basada en el CMS Wordpress. Diseñada para el consumo masivo de cursos multimeda de diferente indole.',
			proyecto: 'https://capacidades.org/',
			codigo: '',
			img: 'assets/img/capacidades.png',
			posicion: true
		},
		{
			titulo: 'spa-superhero-angular',
			descripcion:
				'App web desarrollada con Angular para la presentacion de diferentes heroes de DC commics y Marvel usando componentes, servicios y otras propiedades pertenecientes el Framework de Angular.',
			proyecto: 'https://fhranko.github.io/spa-superhero-angular/',
			codigo: 'https://github.com/Fhranko/spa-superhero-angular',
			img: 'assets/img/heroes-app.png',
			posicion: false
		},
		{
			titulo: 'spotiapp-angular',
			descripcion:
				'Proyecto desarrollado con Angular y Bootstrap usando la API de Spotify (haciendo el uso de pipes, servicios, componentes) para la presentación de nuevos lanzamientos, busqueda de artistas y su música.',
			proyecto: '',
			codigo: 'https://github.com/Fhranko/spotiapp-angular',
			img: 'assets/img/spotify-app.png',
			posicion: true
		},
		{
			titulo: 'reserva-ambientes',
			descripcion:
				'Sistema para gestionar los ambientes con los que se cuenta en las oficinas de la AGETIC en el marco del programa de voluntariado del área de investigación. Desarrollado principalmente con el framework Laravel.',
			proyecto: '',
			codigo: 'https://github.com/Fhranko/reserva-ambientes',
			img: 'assets/img/reserva-ambientes.png',
			posicion: false
		},
		{
			titulo: 'chicas-waskiris',
			descripcion:
				'Diseñado para ser un proyecto final y cimentar los conocimientos del taller de “HTML y Css” taller desarrollado por mi persona, en el marco del proyecto de "Chicas Waskiris" de la AGETIC.',
			proyecto: 'https://fhranko.github.io/proyecto-chicas-waskiris/',
			codigo: 'https://github.com/Fhranko/proyecto-chicas-waskiris',
			img: 'assets/img/wasquiris.png',
			posicion: true
		}
	];

	constructor() {
		console.log('Servicio listo para usarse');
	}
	getProyectos(): Proyecto[] {
		return this.proyectos;
	}
}

export interface Proyecto {
	titulo: string;
	descripcion: string;
	proyecto: string;
	codigo: string;
	img: string;
	posicion: boolean;
}
