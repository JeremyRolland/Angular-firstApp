import {Component, Input} from '@angular/core';
import {Artist} from '../artist/artist';
import {ArtisteModel} from '../artist/models/artisteModel';
import {MatFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {ArtistFormComponent} from '../artist-form-component/artist-form-component';

@Component({
  selector: 'app-artist-list',
  imports: [Artist, MatFabButton, MatIcon, ArtistFormComponent],
  templateUrl: './artist-list.html',
  styleUrl: './artist-list.scss'
})
export class ArtistList {
  artists:ArtisteModel[] = [
    {id: 0, name: "artiste 1", avatar: "istockphoto-621986494-2048x2048.jpg"},
    {id: 1, name: "artiste 2", avatar:"istockphoto-1125877063-1024x1024.jpg"},
    {id: 2, name: "artiste 3", avatar:"istockphoto-1137781483-1024x1024.jpg"},
    {id: 3, name: "artiste 4", avatar:"istockphoto-1390883286-1024x1024.jpg"},
    {id: 4, name: "artiste 5", avatar:"istockphoto-1413582467-1024x1024.jpg"},
    {id: 5, name: "artiste 6", avatar:"istockphoto-1448790717-1024x1024.jpg"},
    ]

  @Input() addArtist: ArtisteModel | undefined;

  deleteArtistFromList(id: number | undefined) {
    if (id != null) {
      this.artists.splice(id, 1);
    }
  }

  handleNewArtist(newArtist: ArtisteModel) {
    console.log("Nouvel artiste ajouté :", newArtist);
  }
}
