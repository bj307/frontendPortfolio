import { Component, Input } from '@angular/core';
import { Transferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from 'src/app/services/AppBKBank/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent {

transferencia: any[] = [];

constructor(private service: TransferenciaService){}
  
ngOnInit(){
  this.service.extratoCompleto().subscribe((transferencia: Transferencia[]) => {
    this.transferencia = transferencia;
  })
}

}
