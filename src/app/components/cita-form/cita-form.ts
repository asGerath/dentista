import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CitaService } from '../../services/cita.service';
import { DoctorService } from '../../services/doctor';
import { Doctors } from '../../models/doctor.model';
import { CitaPayload } from '../../models/cita.model';

@Component({
  selector: 'app-cita-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cita-form.html',
  styleUrls: ['./cita-form.css']
})
export class CitaFormComponent implements OnInit {
  form!: FormGroup;
  doctores: Doctors[] = [];
  enviado = false;

  constructor(
    private fb: FormBuilder,
    private citaService: CitaService,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      fecha: ['', Validators.required],
      doctor: ['', Validators.required],
      mensaje: ['']
    });

    this.doctorService.getDoctores().subscribe({
  next: (res) => this.doctores = res.list,
  error: (err) => console.error('Error al cargar doctores', err)
});


  }

  enviar(): void {
    if (this.form.invalid) return;

    const payload: CitaPayload = this.form.value;

    this.citaService.enviarCita(payload).subscribe({
      next: (res) => {
        console.log('✅ Cita enviada:', res);
        this.enviado = true;
        this.form.reset();
      },
      error: (err) => {
        console.error('❌ Error al enviar cita', err);
      }
    });
  }
}
