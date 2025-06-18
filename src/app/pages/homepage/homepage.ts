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

  elementVisibility: string = "none";
  srcHeroPicture: string = "tdt_31072023_kultur_festivals_wacken-open-air.jpg";

  greet() {
    if(this.elementVisibility == "none") {
      this.elementVisibility = "block";
    }
      else if (this.elementVisibility == "block") {
        this.elementVisibility = "none";
    }
  }
}
