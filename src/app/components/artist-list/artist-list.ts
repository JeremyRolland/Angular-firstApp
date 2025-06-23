import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Artist } from '../artist/artist';
import { ArtisteModel } from '../artist/models/artisteModel';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ArtistFormComponent } from '../artist-form-component/artist-form-component';
import { ArtistService } from '../artist/services/artist-service';

@Component({
  selector: 'app-artist-list',
  imports: [Artist, MatFabButton, MatIcon, ArtistFormComponent],
  templateUrl: './artist-list.html',
  styleUrl: './artist-list.scss'
})
export class ArtistList implements OnInit {

  artists: ArtisteModel[] = [];
  errorLoading = false;

  constructor(
    private artistService: ArtistService,
    private cdr: ChangeDetectorRef // 👈 injecte le détecteur de changement
  ) {}

  ngOnInit() {
    this.loadArtists();
  }

  loadArtists() {
    this.artistService.getArtists().subscribe({
      next: data => {
        this.artists = [...data];
        console.log('Artistes reçus :', this.artists);
        this.cdr.detectChanges(); // 👈 force Angular à revalider le template
      },
      error: error => {
        this.errorLoading = true;
        console.error('Erreur lors du chargement des artistes :', error);
        this.cdr.detectChanges(); // 👈 aussi ici pour détecter l’erreur à l’affichage
      }
    });
  }

  @Input() addArtist: ArtisteModel | undefined;

  handleNewArtist(nouvelArtiste: ArtisteModel) {
    console.log(`nouvelArtiste: ${JSON.stringify(nouvelArtiste)}`);
    this.artistService.createArtist(nouvelArtiste).subscribe({
      next: () => this.loadArtists(),
      error: err => console.log('Erreur ajout artiste:', err),
    });
  }

  deleteArtistFromList(id: string | undefined) {
    this.artistService.deleteArtist(id!).subscribe({
      next: () => this.loadArtists(),
      error: err => console.log(`Erreur suppression artiste ${id}:`, err),
    });
  }
}
