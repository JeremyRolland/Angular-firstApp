import { Component } from '@angular/core';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  imports: [
    MatMenu,
    MatIcon,
    MatMenuTrigger,
    MatMenuItem,
    MatIconButton,
    RouterModule
  ],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss'
})
export class NavbarComponent {

}
