import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,  } from '@angular/common/http';
import { Observable} from 'rxjs';
import { formatDate } from '@angular/common';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RssdataService {
  baseUrl = environment.baseUrl;
  endpoint= ""
  constructor(private http: HttpClient) { }
  getRssData(website:any,topic:any):Observable<any>{
    this.endpoint=this.baseUrl+'/'+website;
    let headers=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json')
 console.log(this.endpoint)
    let params=new HttpParams().set('topic',topic);
    return this.http.get<any>(this.endpoint,{headers,params});
  }
}
