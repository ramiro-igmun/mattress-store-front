import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'tienda-colchones';

  constructor(private authService: AuthService){}

  logout(){
    this.authService.logout();
    console.log('logged out');
  }
}
