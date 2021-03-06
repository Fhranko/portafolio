import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ItemLeftPortfolioComponent } from './components/item-left-portfolio/item-left-portfolio.component';
import { ItemRightPortfolioComponent } from './components/item-right-portfolio/item-right-portfolio.component';
import { ParalaxComponent } from './components/paralax/paralax.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		HeroComponent,
		ItemLeftPortfolioComponent,
		ItemRightPortfolioComponent,
		ParalaxComponent,
		HabilidadesComponent,
		TecnologiasComponent,
		FooterComponent,
		ContactoComponent
	],
	imports: [ BrowserModule, AppRoutingModule, NgxTypedJsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
