import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication-service';
import {PhotoService} from '../../services/photo-service';
import {PhotoModel} from '../../services/photo-model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  photoModels: PhotoModel[];
  username: any;

  constructor(private domSanitizer: DomSanitizer,
              private photoService: PhotoService,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {

    this.username = this.authService.getUserLoggedIn();

    this.photoService
      .getPhotosByUser()
      .subscribe((photoResponse => {
        console.log(JSON.stringify(photoResponse));
        this.photoModels = photoResponse;
      }));
  }

}
