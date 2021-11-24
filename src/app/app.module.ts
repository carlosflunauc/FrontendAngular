import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerNavegacionComponent } from './plantilla/banner-navegacion/banner-navegacion.component';
import { FooterComponent } from './plantilla/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerNavegacionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
