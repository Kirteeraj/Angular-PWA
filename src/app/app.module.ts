import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faCodepen, faInstagram, faFacebook, faLinkedin,faGoogle} from '@fortawesome/free-brands-svg-icons';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component' ;

library.add(faGithub,faCodepen,faInstagram,faFacebook,faLinkedin,faGoogle);


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 



SidebarOn(){
  var vid = document.getElementsByTagName("video-background-2")[0];   
  var att = document.createAttribute("autoplay");  
  vid.setAttributeNode(att); 
  document.write("Hello World!");
}
SidebarOff(){
  
  }
}