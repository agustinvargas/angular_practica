import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './alta/alta.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { ModificacionComponent } from './modificacion/modificacion.component';
import { PaginacionComponent } from './paginacion/paginacion.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'detalle/:id',
    component: DetailsComponent,
  },
  {
    path: 'modificar/:id',
    component: ModificacionComponent,
  },
  {
    path: 'agregar',
    component: AltaComponent,
  },
  {
    path: 'albums',
    component: PaginacionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
