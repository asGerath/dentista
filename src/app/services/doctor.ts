import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Doctors, DoctorsResponse } from '../models/doctor.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DoctorService {
  private url = 'https://repoapi.ordenaris.com/api/listaDoctores';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getDoctores(): Observable<DoctorsResponse> {
  const headers = new HttpHeaders({
    ordProyecto: this.authService.getProyectoId(),
    ordCandidato: this.authService.getCandidatoId(),
  });

  return this.http.get<DoctorsResponse>(this.url, { headers });
}

}