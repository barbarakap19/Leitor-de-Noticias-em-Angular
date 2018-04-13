import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  imports: [
    CommonModule,
    StaticRoutingModule
  ],
  declarations: [ContatoComponent]
})
export class StaticModule { }
