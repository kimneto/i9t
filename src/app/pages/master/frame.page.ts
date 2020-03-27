import { Component } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';


@Component({
  selector: 'app-frame-page',
  template: '<app-navbar></app-navbar><router-outlet></router-outlet>'

})

export class FramePageComponent {

}
