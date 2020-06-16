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
  getRssData(topic:any):Observable<any>{
    this.endpoint=this.baseUrl+'/medium';
    let headers=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json')
 //  .set("Access-Control-Allow-Origin",'*');
 console.log(topic)
    let params=new HttpParams().set('topic',topic);
    return this.http.get<any>(this.endpoint,{headers,params});
  }
}
