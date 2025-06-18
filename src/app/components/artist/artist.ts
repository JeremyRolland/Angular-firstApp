import {Component, Input} from '@angular/core';
import {ArtisteModel} from './models/artisteModel';

@Component({
  selector: 'app-artist',
  imports: [

  ],
  templateUrl: './artist.html',
  styleUrl: './artist.scss'
})
export class Artist {
  @Input() artist: ArtisteModel | undefined;
}
