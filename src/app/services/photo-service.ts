import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {PhotoModel} from './photo-model';

@Injectable()
export class PhotoService {

  PHOTO_URL = environment.API_URL + '/photos';

  constructor(private http: HttpClient) {
  }

  getOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('admin:admin'),
      })
    };
  }

  addPhoto(name: string, photo: Blob): Observable<PhotoModel[]> {
    return this.http.post<PhotoModel[]>(this.PHOTO_URL + '/add', { name, photo },  this.getOptions());
  }

  getPhotosByUser(): Observable<PhotoModel[]> {

    return this.http.get<PhotoModel[]>(`${this.PHOTO_URL}`, this.getOptions());
  }


}
