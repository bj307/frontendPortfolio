import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from 'src/app/components/BKSocial/mensagem/mensagem.component';



@NgModule({
  declarations: [MensagemComponent],
  imports: [
    CommonModule
  ],
  exports: [MensagemComponent]
})
export class MensagemModule { }
