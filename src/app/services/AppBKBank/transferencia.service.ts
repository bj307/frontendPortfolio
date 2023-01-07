import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from 'src/app/models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) { 
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  extratoCompleto(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.tratar(transferencia)
    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  private tratar(transferencia: any){
    transferencia.data = new Date();
  }
}
