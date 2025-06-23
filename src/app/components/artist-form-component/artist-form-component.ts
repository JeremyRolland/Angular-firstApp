import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { output } from '@angular/core';
import { ArtisteModel } from '../artist/models/artisteModel';

@Component({
  selector: 'app-artist-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './artist-form-component.html',
  styleUrl: './artist-form-component.scss'
})
export class ArtistFormComponent {
  artistForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.artistForm = this.fb.group({
      name: ['', Validators.required],
      photo: ['', [Validators.required]]
    });
  }

  newArtist = output<ArtisteModel>();

  onSubmit() {
    const newArtist: ArtisteModel = {
      id: '', // l’API générera probablement l’ID côté backend
      name: this.artistForm.value.name,
      photo: this.artistForm.value.photo
    };
    this.newArtist.emit(newArtist);
    this.artistForm.reset();
  }
}
