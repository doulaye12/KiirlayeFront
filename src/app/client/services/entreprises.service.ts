import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from '../models/entreprise';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EntreprisesService {

  constructor(private http: HttpClient) { }

  getAllEntreprises():Observable<Entreprise[]>{
    return this.http.get<Entreprise[]>(`${environment.apiUrl}/entreprises`)
  }

  postEntreprise(entreprise:Entreprise, id:number){
    return this.http.post<Entreprise>(`${environment.apiUrl}/entreprises/agent/${id}/add`,entreprise)
  }
}
