import { Component } from '@angular/core';
import { TransferenciaService } from 'src/app/services/AppBKBank/transferencia.service';

@Component({
  selector: 'app-dashbank',
  templateUrl: './dashbank.component.html',
  styleUrls: ['./dashbank.component.css']
})
export class DashbankComponent {

  constructor(private service: TransferenciaService){}

}
