import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private apiUrl = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) { }

  sendData(nome: string, telefone: string): Observable<any> {
    const contact = { nome, telefone };
    return this.http.post<any>(this.apiUrl, contact);
  }
}
