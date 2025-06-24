import { inject, Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {ArtisteModel} from '../models/artisteModel';

@Injectable({ providedIn: 'root' })
export class ArtistService {
  private http = inject(HttpClient);
  private apiUrl = 'https://artists-api-ndhd.onrender.com/artists';
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${'f3e91f07a577250eb7bda4fccf37adf0'}`
  });

  getArtists(): Observable<ArtisteModel[]> {
    return this.http.get<ArtisteModel[]>(this.apiUrl, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  getArtistById(id: string): Observable<ArtisteModel> {

    return this.http.get<ArtisteModel>(`${this.apiUrl}/${id}`, { headers: this.headers })
      .pipe(catchError(this.handleError));;
  }

  createArtist(artistData: { name: string; photo: string }): Observable<ArtisteModel> {
    return this.http.post<ArtisteModel>(this.apiUrl, artistData, { headers: this.headers })
      .pipe(catchError(this.handleError));;
  }

  updateArtist(id: string, updateData: { name?: string; photo?: string }): Observable<ArtisteModel> {
    return this.http.put<ArtisteModel>(`${this.apiUrl}/${id}`, updateData, { headers: this.headers })
      .pipe(catchError(this.handleError));;
  }

  deleteArtist(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.headers })
      .pipe(catchError(this.handleError));;
  }

  private handleError(error: HttpErrorResponse) {
    let message = '';
    if (error.error?.message) {
      message = error.error.message;
    } else if (error.status) {
      message = `Erreur ${error.status} : ${error.statusText}`;
    }
    return throwError(() => new Error(message));
  }
}
