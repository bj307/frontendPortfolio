import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, NumberValueAccessor } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from 'src/app/services/AppBKBank/transferencia.service';

@Component({
  selector: 'app-bkbank',
  templateUrl: './bkbank.component.html',
  styleUrls: ['./bkbank.component.css']
})
export class BkbankComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  valor2!: number;
  destino2!: number;

  constructor(private service: TransferenciaService, private router: Router){

  }

  transferir(){
    console.log("Transferencia solicitada")
    const emitirTransf: Transferencia = {valor: this.valor, destino: this.destino}
    this.service.adicionar(emitirTransf).subscribe(resultado => {location.reload()})
  }

  limparCampos(){
    this.valor = this.valor2
    this.destino = this.destino2
  }

}
