import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { AltaComponent } from './alta/alta.component';
import { ModificacionComponent } from './modificacion/modificacion.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { PaginacionComponent } from './paginacion/paginacion.component';

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    AltaComponent,
    ModificacionComponent,
    PadreComponent,
    HijoComponent,
    PaginacionComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [ListComponent, DetailsComponent, PadreComponent, HijoComponent],
})
export class UsersModule {}
