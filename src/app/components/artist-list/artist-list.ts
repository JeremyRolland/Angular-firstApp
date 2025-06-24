import { Component, Input, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { Artist } from '../artist/artist';
import { ArtisteModel } from '../artist/models/artisteModel';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ArtistFormComponent } from '../artist-form-component/artist-form-component';
import { ArtistService } from '../artist/services/artist-service';

@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [Artist, MatFabButton, MatIcon, ArtistFormComponent],
  templateUrl: './artist-list.html',
  styleUrl: './artist-list.scss'
})
export class ArtistList implements OnInit {
  private artistService = inject(ArtistService);
  private cdr = inject(ChangeDetectorRef);

  artists: ArtisteModel[] = [];
  errorMessage = '';

  @Input() addArtist: ArtisteModel | undefined;

  ngOnInit() {
    this.loadArtists();
  }

  loadArtists() {
    this.artistService.getArtists().subscribe({
      next: data => {
        this.artists = [...data];
        console.log('Artistes reçus :', this.artists);
        this.cdr.detectChanges();
      },
      error: error => {
        this.errorMessage = error.message;
        console.error(error);
        this.cdr.detectChanges();
      }
    });
  }

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
