import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { ProductoComponent } from './producto/producto.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { LoguinComponent } from './loguinreal/loguinreal.component';
import { EcomerceComponent } from './ecomerce/ecomerce.component';
import { IndexComponent } from './index copy/index.component';

const routes: Routes = [
    {path: '', component : IndexComponent},
    {path : 'index' , component : IndexComponent},
    {path: 'usuario', component : UsuarioComponent},
    {path: 'registro', component : LoginComponent},
    {path: 'producto', component : ProductoComponent},
    {path: 'recuperar', component : RecuperarContrasenaComponent},
    {path: 'login', component : LoguinComponent},
    {path: 'carrito', component : EcomerceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
