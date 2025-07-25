import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { CitaPayload } from '../models/cita.model';

@Injectable({ providedIn: 'root' })
export class CitaService {
  private url = 'https://repoapi.ordenaris.com/api/mensaje';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  enviarCita(payload: CitaPayload): Observable<any> {
    const headers = new HttpHeaders({
      ordProyecto: this.authService.getProyectoId(),
      ordCandidato: this.authService.getCandidatoId(),
    });

    return this.http.post(this.url, payload, { headers });
  }
}
