import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { greeterDto } from '../models/greeterDto';
import { headers,methodGreetUrl,methodNameUrl,methodSayGoodByeUrl,apiUrl } from 'src/environments/environment';
import { greeterResponse } from '../models/greeterResponse';

@Injectable({
  providedIn: 'root'
})
export class GreeterServiceService {

  constructor(private http: HttpClient) { }

  greetRequest(greet: greeterDto) : Observable<greeterResponse>{
    return this.http.post<greeterResponse>(apiUrl + methodGreetUrl,greet,{headers});
  }

  NameRequest(greet: greeterDto) : Observable<greeterResponse>{
    return this.http.post<greeterResponse>(apiUrl + methodNameUrl,greet,{headers});
  }

  sayGoodByeRequest(greet: greeterDto) : Observable<greeterResponse>{
    return this.http.post<greeterResponse>(apiUrl + methodSayGoodByeUrl,greet,{headers});
  }
}
