import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from 'src/app/models/transferencia.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = `${environment.baseUrl}transferencias`;

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
