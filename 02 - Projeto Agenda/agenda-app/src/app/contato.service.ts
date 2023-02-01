import { PaginaContato } from './contato/paginaContato';
import { environment } from './environments/environment';
import { Contato } from './contato/contato';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  url: string = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }

  save( contato : Contato ) : Observable<Contato>{
    return this.http.post<Contato>(this.url, contato)
  }

  list(page: number, size: number): Observable<PaginaContato> {
    let params = new HttpParams();
    params = params.set('page', page.toString());
    params = params.set('size', size.toString());
    return this.http.get<any>(`${this.url}?${params.toString()}`);
  }

  favorite( contato : Contato ) : Observable<any> {
    return this.http.patch(`${this.url}/${contato.id}/favorito`, null)
  }

  upload(contato: Contato , formData: FormData) : Observable<any> {
    return this.http.put(`${this.url}/${contato.id}/foto`, formData, { responseType : 'blob' });
  }
}
