import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { UsuarioComponent } from '../usuario/usuario.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IndexComponent } from '../index copy/index.component';
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [
    CommonModule,
    IndexComponent,
    LoginComponent,
    UsuarioComponent,
  ],
  templateUrl: './producto.component.html',
  styleUrls : ['./producto.component.css'],
})
export class ProductoComponent {
  private apiUrl = 'http://localhost:3000/api/empleado';

  constructor(private http: HttpClient) {}

  
}
