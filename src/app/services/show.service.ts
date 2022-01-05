import {ApiService} from './api.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowService extends ApiService {
  createShow(formData: any): Observable<any> {
    return this.post('v1/show/create', formData);
  }

  showList(): Observable<any> {
    return this.get('v1/show/list/');
  }

  getShowInfo(id: any): Observable<any> {
    return this.get('v1/show/' + id);
  }
}
