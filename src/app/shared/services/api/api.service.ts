import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtauthserviceService } from './jwtauthservice.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  customer_id: any;
  country_no: any;

  private httpClient: HttpClient;
  constructor(
    private http: HttpClient,
    private handler: HttpBackend,
    private _jwtAuthService: JwtauthserviceService
  ) {
    this.getvalues();
    this.httpClient = new HttpClient(handler);
  }

  getvalues() {
    this.customer_id = localStorage.getItem('customer_id');
    this.country_no = localStorage.getItem('country_no');
  }


  getFile(bucket_name: string, key: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders({
      Accept: 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'text/plain; charset=utf-8',
      observe: 'body',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });

    let options: any = { headers: headers, responseType: 'arraybuffer' };
    return this.http.get<any>(
      `${environment.get_file}?bucket_name=${bucket_name}&key=${key}`,
      options
      // this.jwtAutService.getJwtToken()
    );
  }
}
