import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpCliente: HttpClient) { }

  private url = 'https://my-json-server.typicode.com/bj307/backendPortfolio/Usuario';

  autenticar(usuario: string, senha: string): Observable<any> {
    return this.httpCliente.post(this.url, {
      userName: usuario,
      password: senha,
    });
  }
}
