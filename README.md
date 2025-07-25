
# 🦷 Proyecto Dental - Ordenaris

## 🚀 Tecnologías utilizadas

- [Angular](https://angular.io/)
- [RxJS](https://rxjs.dev/)
- [Swiper](https://swiperjs.com/) (para sliders responsivos)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS / CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## 📁 Estructura del Proyecto

```bash
src/
└── app/
    ├── components/
    │   ├── always-lough/
    │   ├── banner/
    │   ├── cita-form/
    │   ├── footer/
    │   ├── get-services/
    │   ├── hero/
    │   ├── key-feature/
    │   ├── meet-doctors/
    │   ├── navbar/
    │   ├── news-form/
    │   ├── our-history/
    │   ├── testimony-slider/
    │   ├── ui/
    │   └── your-smile/
    │
    ├── models/
    │   ├── cita.model.ts
    │   ├── doctor.model.ts
    │   └── newsletter.model.ts
    │
    ├── pages/
    │   └── home/
    │       ├── home.css
    │       ├── home.html
    │       ├── home.spec.ts
    │       └── home.ts
    │
    ├── routes/
    │
    └── services/
        ├── auth.service.spec.ts
        ├── auth.service.ts
        ├── cita.service.spec.ts
        ├── cita.service.ts
        ├── doctor.spec.ts
        ├── doctor.ts
        ├── newsletter.service.spec.ts
        └── newsletter.service.ts
```

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/asGerath/dentista.git
cd dentista
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta la aplicación localmente:

```bash
ng serve
```

Abre `http://localhost:4200` en tu navegador.

---

## 📌 Servicios REST

### 📄 Obtener lista de doctores

```
GET https://repoapi.ordenaris.com/api/listaDoctores
Headers:
- ordProyecto: [ID del proyecto]
- ordCandidato: [ID del candidato]
```

### 📄 Enviar solicitud de cita

```
POST https://repoapi.ordenaris.com/api/contactoLanding
Body:
{
  "nombre": "...",
  "telefono": "...",
  "fecha": "...",
  "doctor": "...",
  "mensaje": "..."
}
```

### 📄 Suscripción a newsletter

```
POST https://repoapi.ordenaris.com/api/newsletter
Body:
{
  "nombre": "...",
  "correo": "..."
}
```

---

## 🛠 Requisitos

- Node.js 18+
- Angular CLI (`npm install -g @angular/cli`)
- Navegador moderno (Chrome, Firefox, Edge)
