import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatFabButton} from '@angular/material/button';

@Component({
  selector: 'app-homepage',
  imports: [MatIconModule, MatFabButton],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

  elementVisibility = false;
  srcHeroPicture = "tdt_31072023_kultur_festivals_wacken-open-air.jpg";

  greet() {
    this.elementVisibility = !this.elementVisibility;
  }
}
