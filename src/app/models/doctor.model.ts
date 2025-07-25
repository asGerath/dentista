export interface Doctors {
  name: string;
  specialty: string;
  Prosthodontics:string;
  photo:string;
  university:string;
}
export interface DoctorsResponse {
  success: boolean;
  status: number;
  list: Doctors[];
  data: Doctors[];
}
