import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { UsuarioComponent } from '../usuario/usuario.component';
import { LoginComponent } from '../login/login.component';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    UsuarioComponent,
    NgOptimizedImage,
    LoginComponent,
    ProductoComponent,
  ],
  templateUrl: './index.component.html',
  styleUrls : ['./index.component.css'],
})
export class IndexComponent {
  
}
