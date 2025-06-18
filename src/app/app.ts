import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Homepage} from './pages/homepage/homepage';
import {NavbarComponent} from './components/navbar-component/navbar-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'my-app';
}
