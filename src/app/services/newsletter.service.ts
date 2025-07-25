import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsletterPayload } from '../models/newsletter.model';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class NewsletterService {
  private url = 'https://repoapi.ordenaris.com/api/newsletter';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  suscribirse(data: NewsletterPayload): Observable<any> {
    const headers = new HttpHeaders({
      ordProyecto: this.authService.getProyectoId(),
      ordCandidato: this.authService.getCandidatoId()
    });

    return this.http.post(this.url, data, { headers });
  }
}