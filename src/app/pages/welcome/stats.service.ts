import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,  } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StatsService {
  baseUrl = environment.baseUrl;
  endpoint= ""
  constructor(private http: HttpClient) { }
  getStats():Observable<any>{
    this.endpoint=this.baseUrl+'/hits';
    let headers=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json')
    console.log(this.endpoint)
    return this.http.get<any>(this.endpoint,{headers});
  }
}
