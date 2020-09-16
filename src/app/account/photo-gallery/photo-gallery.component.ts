import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication-service';
import {PhotoAlbumService} from '../../services/photo-album-service';
import {PhotoAlbumModel} from '../../services/photo-album-model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  photoModels: PhotoAlbumModel[] = [];
  username: any;

  imageObjectsList: Array<Array<object>> = [];


  constructor(private domSanitizer: DomSanitizer,
              private photoService: PhotoAlbumService,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {

    this.username = this.authService.getUserLoggedIn();

    this.photoService
      .getPhotosByUser()
      .subscribe((photoResponse => {
        this.photoModels = photoResponse;
        this.setImageObject();
      }));

  }

  onAdd() {
    console.log('add foto gallery clicked');
  }

  onRemove() {
    console.log('Remove photo gallery');
  }

  onEdit() {
    console.log('Edit photo gallery');
  }

  setImageObject() {
    this.imageObjectsList = [];

    // this.imageObject.push({
    //   image: 'https://youtu.be/2udnvySQyqc',
    //   thumbImage: 'https://youtu.be/2udnvySQyqc',
    //   alt: 'alt of image',
    //   title: 'Filmik o gShop',
    //   imagePopup: true,
    // });

    for (const photoModel of this.photoModels) {

      const imageObjects: Array<object> = [];
      let i = 0;
      for (const imageByteList of photoModel.byteList) {
        i++;
        const base64 = btoa(
          new Uint8Array(imageByteList)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );

        const image = 'data:image/JPEG;base64, ' + base64;

        imageObjects.push({
          image,
          thumbImage: image,
          title: i,
          alt: 'alt of image',
          name: photoModel.name,
          imagePopup: true,
          slideImage: 2
        });
      }

      this.imageObjectsList.push(imageObjects);

    }

  }
}
