import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { EnvioDataComponent } from './components/envio-data/envio-data.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'data', component: DataComponent},
  {path: 'actualizar-registro/:id', component: RegistroComponent},
  {path: 'datos-enviados', component: EnvioDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
