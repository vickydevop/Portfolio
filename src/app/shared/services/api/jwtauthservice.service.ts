import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class JwtauthserviceService {
  return!: string;

  constructor(private route: ActivatedRoute) {
    // Customer 105 - testing - mine - userreg(1)

    localStorage.setItem(
      'access_token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOiI1IiwiY3VzdG9tZXJfaWQiOjEwNSwiY291bnRyeV9jb2RlIjoiaW4iLCJjdXN0b21lcl9zdWJfZG9tYWluX25hbWUiOiJ2ayIsInJlZ2lzdGVyZWRfZWR1Y2F0aW9uYWxfaW5zdGl0dXRpb25fbmFtZSI6ImN2aWNreSIsInRpbWVfem9uZV9pYW5hX3N0cmluZyI6IkFzaWEvQ2FsY3V0dGEiLCJhcHBfbmFtZSI6InZrIiwiZGVmYXVsdF9jdXJyZW5jeV9zaG9ydGZvcm0iOiJJTlIiLCJhY2NvdW50aW5nX3N0YW5kYXJkc19pZCI6bnVsbCwiaXNfZGVmYXVsdF9hY2FkZW1pY195ZWFyX2Zvcm1hdF9zcGFubmluZ190d29fY2FsZW5kYXJfeWVhcnMiOjEsImRlZmF1bHRfYWNhZGVtaWNfeWVhcl9zdGFydF9kYXRlX2FuZF9tb250aCI6IjYvMTIiLCJzb2NrZXRfaWQiOiIiLCJ1c2VyX2NhdGVnb3J5X3R5cGUiOiI0IiwiZWR1Y2F0aW9uYWxfaW5zdGl0dXRpb25fY2F0ZWdvcnlfaWQiOiI2cmNaZzFNYUVPTlZTUFoiLCJ1c2VyX3JlZ2lzdGVyZWRfY2F0ZWdvcmllc19pZHMiOiJ3M1lveEJKcFVIcFNDZHUiLCJ1c2VyX3JlZ2lzdHJhdGlvbl9sb2dpbl9hcHByb3ZhbF9zdGF0dXMiOjEsImNvdW50cnkiOiJpbiIsInBpbl9jb2RlIjoicnR5cnkiLCJzdGF0ZV9wcm92aW5jZSI6IlRhbWlsIE5hZHUiLCJjaXR5X2Rpc3RyaWN0X2NvdW50eSI6IlRpcnVwYXR0dXIiLCJhZGRyZXNzX2xpbmVfMSI6IlZhbml5YW1iYWRpIiwiYWRkcmVzc19saW5lXzIiOiJWYW5peWFtYmFkaSIsImN1c3RvbWVyX3R5cGUiOjB9LCJpYXQiOjE3MDI1MjczNzEsImV4cCI6MTg2MjUyNzM3MX0.is-E8pzP4eSESYAFiS9sUSwTimWAwyg3VXgsBkEt5LE'
    );
    this.route.queryParams.subscribe(
      (params) => (this.return = params['return'] || '/')
    );
  }

  getJwtToken() {
    let HTTP_OPTIONS = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/x-www-form-urlencoded',
        AuthenticationToken: localStorage.getItem('access_token') as any,
      }),
    };

    return HTTP_OPTIONS;
  }

  isLoggedIn(): Boolean {
    return !!this.getJwtToken();
  }
}
