import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../../services/doctor';
import { AuthService } from '../../services/auth.service';
import { Doctors } from '../../models/doctor.model';

@Component({
  selector: 'app-meet-doctors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meet-doctors.html',
  styleUrls: ['./meet-doctors.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DoctorListComponent implements OnInit {
  doctores: Doctors[] = [];
  loading = true;
  defaultImg = '/doc-s-c.webp';

  constructor(
    private doctorService: DoctorService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.doctorService.getDoctores().subscribe({
      next: (data) => {
        console.log('🩺 Lista recibida:', data);
        this.doctores = data.list;
        this.loading = false;
        // Esperar al siguiente ciclo para asegurar que Angular renderizó
        setTimeout(() => this.initializeSwiper(), 0);
      },
      error: (err) => {
        console.error('❌ Error al obtener doctores', err);
        this.loading = false;
      }
    });
  }

  /**
   * Inicializa Swiper una vez que el DOM y los datos están listos
   */
  private initializeSwiper(): void {
    const swiperEl = document.querySelector('swiper-container');
    if (swiperEl) {
      Object.assign(swiperEl, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      });
      (swiperEl as any).initialize();
    }
  }
}
