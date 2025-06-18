import { Routes } from '@angular/router';
import {Homepage} from './pages/homepage/homepage';
import {ArtistePage} from './pages/artiste-page/artiste-page';

export const routes: Routes = [
  { path: '', component: Homepage, title: "Accueil" },
  { path: 'Artistes', component: ArtistePage, title: "Liste des artistes"}
];
