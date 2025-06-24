import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ArtisteModel } from '../artist/models/artisteModel';

@Component({
  selector: 'app-artist-form-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './artist-form-component.html',
  styleUrl: './artist-form-component.scss'
})
export class ArtistFormComponent {
  private fb = inject(FormBuilder);
  artistForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    photo: ['', [Validators.required]]
  });

  newArtist = output<ArtisteModel>();

  onSubmit() {
    const newArtist: ArtisteModel = {
      id: '',
      name: this.artistForm.value.name,
      photo: this.artistForm.value.photo
    };
    this.newArtist.emit(newArtist);
    this.artistForm.reset();
  }
}
