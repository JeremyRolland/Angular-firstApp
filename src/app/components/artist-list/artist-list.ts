import {Component, Input} from '@angular/core';
import {Artist} from '../artist/artist';
import {ArtisteModel} from '../artist/models/artisteModel';
import {MatFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {ArtistFormComponent} from '../artist-form-component/artist-form-component';
import {ArtistService} from '../artist/services/artist-service';

@Component({
  selector: 'app-artist-list',
  imports: [Artist, MatFabButton, MatIcon, ArtistFormComponent],
  templateUrl: './artist-list.html',
  styleUrl: './artist-list.scss'
})
export class ArtistList {

  artists:ArtisteModel[] = [
    {id: "0", name: "artiste 1", photo: "istockphoto-621986494-2048x2048.jpg"},
    {id: "1", name: "artiste 2", photo:"istockphoto-1125877063-1024x1024.jpg"},
    {id: "2", name: "artiste 3", photo:"istockphoto-1137781483-1024x1024.jpg"},
    {id: "3", name: "artiste 4", photo:"istockphoto-1390883286-1024x1024.jpg"},
    {id: "4", name: "artiste 5", photo:"istockphoto-1413582467-1024x1024.jpg"},
    {id: "5", name: "artiste 6", photo:"istockphoto-1448790717-1024x1024.jpg"},
    ]


  constructor(private artistService: ArtistService) {}

  ngOnInit() {
    this.artistService.getArtists().subscribe({
      next: data => console.log('artistes reçus: ', data),
      error: error => console.log('erreur API: ', error),
    })
  }


  @Input() addArtist: ArtisteModel | undefined;

  deleteArtistFromList(id: string | undefined) {
    this.artistService.deleteArtist(id!);
    console.log(`Artiste avec l'ID: ${id}, supprimé.`);
    }

  handleNewArtist(nouvelArtiste: ArtisteModel) {
    this.artistService.createArtist(nouvelArtiste);
  }


}
