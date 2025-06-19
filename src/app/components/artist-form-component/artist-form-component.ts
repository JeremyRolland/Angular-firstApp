import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';
import {output} from '@angular/core';
import {ArtisteModel} from '../artist/models/artisteModel';


@Component({
  selector: 'app-artist-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './artist-form-component.html',
  styleUrl: './artist-form-component.scss'
})
export class ArtistFormComponent {
  artistForm: FormGroup;
  selectedFile: File | null = null;
  constructor(private fb: FormBuilder) {
    this.artistForm = this.fb.group({
      name: ['', Validators.required],
      avatar: ['', Validators.required]
    });
  }

  //@Output() newArtist = new EventEmitter<ArtisteModel>();
  newArtist = output<ArtisteModel>();


  onSubmit() {
    console.log(this.artistForm.value);
    const newArtist: ArtisteModel = {
      id: this.artistForm.value.id,
      name: this.artistForm.value.name!,
      avatar:  this.artistForm.value.avatar!
    }
    console.log(this.newArtist);
    this.newArtist.emit(newArtist);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        // on stocke le contenu base64 dans le champ avatar
        this.artistForm.patchValue({ avatar: reader.result });
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
