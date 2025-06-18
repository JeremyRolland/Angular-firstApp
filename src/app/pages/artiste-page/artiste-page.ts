import { Component } from '@angular/core';
import {ArtistList} from '../../components/artist-list/artist-list';
import {ArtistFormComponent} from '../../components/artist-form-component/artist-form-component';

@Component({
  selector: 'app-artiste-page',
  imports: [ArtistList, ArtistFormComponent],
  templateUrl: './artiste-page.html',
  styleUrl: './artiste-page.scss'
})
export class ArtistePage {

}
