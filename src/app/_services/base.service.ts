import { Cinema } from './../_models/cinema.model';
import { Filme } from './../_models/filme.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { GlobalConstants } from '../_helpers/gloval-constants';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(protected snackBar: MatSnackBar, protected http: HttpClient) {}

  baseUrl = GlobalConstants.apiURL;

  readFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.baseUrl);
  }

  readCinemas(eventId: number): Observable<Cinema[]> {
    const url = `${this.baseUrl}/${eventId}/theaters`;
    return this.http.get<Cinema[]>(url);
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'msg-success',
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(e);
    return throwError(e);
  }
}
