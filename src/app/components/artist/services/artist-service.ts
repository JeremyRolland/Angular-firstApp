import { inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ArtisteModel} from '../models/artisteModel';

@Injectable({ providedIn: 'root' })
export class ArtistService {
  private http = inject(HttpClient);
  private apiUrl = 'https://artists-api-ndhd.onrender.com/artists';
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${'f3e91f07a577250eb7bda4fccf37adf0'}`
  });

  getArtists(): Observable<ArtisteModel[]> {
    return this.http.get<ArtisteModel[]>(this.apiUrl, { headers: this.headers });
  }

  getArtistById(id: string): Observable<ArtisteModel> {

    return this.http.get<ArtisteModel>(`${this.apiUrl}/${id}`, { headers: this.headers });
  }

  createArtist(artistData: { name: string; photo: string }): Observable<ArtisteModel> {
    return this.http.post<ArtisteModel>(this.apiUrl, artistData, { headers: this.headers });
  }

  updateArtist(id: string, updateData: { name?: string; photo?: string }): Observable<ArtisteModel> {
    return this.http.put<ArtisteModel>(`${this.apiUrl}/${id}`, updateData, { headers: this.headers });
  }

  deleteArtist(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.headers });
  }
}
