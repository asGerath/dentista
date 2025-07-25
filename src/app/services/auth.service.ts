// src/app/services/auth.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private candidatoId: string = '';
  private proyectoId = 'a6093c23ae10457c8t0b8b298fc8b500';

  constructor(private http: HttpClient) {
    const id = localStorage.getItem('ordCandidato');
    if (id) {
      this.candidatoId = id;
    }
  }

  login(correo: string): Observable<string> {
    const url = 'https://repoapi.ordenaris.com/api/candidato';
    const headers = new HttpHeaders({
      ordProyecto: this.proyectoId,
    });

    return this.http.post<any>(url, { correo }, { headers }).pipe(
  tap((response) => {
    console.log('Respuesta del auth:', response);
  }),
  map((response) => response?.uuid),
  tap((id) => {
    console.log('id del candidato:', id);
    this.candidatoId = id;
    localStorage.setItem('ordCandidato', id);
  })
);


  }

  getCandidatoId(): string {
    return this.candidatoId || localStorage.getItem('ordCandidato') || '';
  }

  getProyectoId(): string {
    return this.proyectoId;
  }
}
