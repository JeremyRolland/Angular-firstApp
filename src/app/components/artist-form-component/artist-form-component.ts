import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';
import {output} from '@angular/core';
import {Artist} from '../artist/artist';
import {ArtisteModel} from '../artist/models/artisteModel';


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
      avatar: ['', Validators.required]
    });
  }

  @Output() newArtist = new EventEmitter<ArtisteModel>();

  onSubmit() {
    console.log(this.artistForm.value);
    const newArtist: ArtisteModel = {
      id: this.artistForm.value.id,
      name: this.artistForm.value.name!,
      avatar: this.artistForm.value.avatar!
    }
    this.newArtist.emit(newArtist);
  }
}
