import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ArtisteModel} from '../models/artisteModel';

@Injectable({ providedIn: 'root' })
export class ArtistService {
  private http = inject(HttpClient);
  private apiUrl = 'https://artists-api-ndhd.onrender.com/artists';

  getArtists(): Observable<ArtisteModel[]> {
    return this.http.get<ArtisteModel[]>(this.apiUrl);
  }
}
