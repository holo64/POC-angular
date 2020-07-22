import { Component } from '@angular/core';
import { Frais } from './frais/frais';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POC Expense Manager';

  public frais:Frais [];
}
