import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
	declarations: [ AppComponent, NavbarComponent, HomeComponent, HeroComponent ],
	imports: [ BrowserModule, AppRoutingModule, NgxTypedJsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
