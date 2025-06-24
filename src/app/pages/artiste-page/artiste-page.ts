import { Component } from '@angular/core';
import {ArtistList} from '../../components/artist-list/artist-list';

@Component({
  selector: 'app-artiste-page',
  imports: [ArtistList],
  templateUrl: './artiste-page.html',
  styleUrl: './artiste-page.scss'
})
export class ArtistePage {

}
