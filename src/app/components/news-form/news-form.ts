import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewsletterService } from '../../services/newsletter.service';
import { NewsletterPayload } from '../../models/newsletter.model';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './news-form.html',
  styleUrls: ['./news-form.css']
})
export class NewsletterFormComponent implements OnInit {
  form!: FormGroup;
  enviado = false;

  constructor(
    private fb: FormBuilder,
    private newsletterService: NewsletterService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  enviar(): void {
    if (this.form.invalid) return;

    const payload: NewsletterPayload = this.form.value;

    this.newsletterService.suscribirse(payload).subscribe({
      next: (res) => {
        console.log('suscripcion enviada:', res);
        this.enviado = true;
        this.form.reset();
      },
      error: (err) => {
        console.error('error al suscribirse papu', err);
      }
    });
  }
}
