import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpCliente: HttpClient) { }

  autenticar(usuario: string, senha: string): Observable<any> {
    return this.httpCliente.post('http://localhost:3000/usuario', {
      userName: usuario,
      password: senha,
    });
  }
}
