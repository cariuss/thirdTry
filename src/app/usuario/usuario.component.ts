import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { ProductoComponent } from '../producto/producto.component';
import { IndexComponent } from '../index copy/index.component';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../data/local-storage.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, IndexComponent, LoginComponent, ProductoComponent],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent {
  constructor(private http: HttpClient, private local: LocalStorageService) {}
  @Injectable({
    providedIn: 'root',
  })
  empleados: any[] = [];
  ngOnInit(): void {
    this.obtenerEmpleado();
  }
  obtenerEmpleado() {
    const id = this.local.get('id');

    this.http.get('http://localhost:3000/api/empleado/').subscribe(
      (data) => {
        console.log('Datos de empleados:', data);
        this.empleados = data as any[];
      },
      (error) => {
        console.error('Error al obtener empleados:', error);
      }
    );

    const nombreElement = document.getElementById('nombre');
    const apellidoElement = document.getElementById('apellido');
    const correoElement = document.getElementById('correo');
    const idElement = document.getElementById('cedula');
    const rolElement = document.getElementById('rol');
    const direccionElement = document.getElementById('direccion');
    if (nombreElement) {
      nombreElement.textContent =
        this.empleados.length > 0 ? this.empleados[0].nombre : '';
    }
    if (apellidoElement) {
      apellidoElement.textContent =
        this.empleados.length > 0 ? this.empleados[0].apellido : '';
    }
    if (correoElement) {
      correoElement.textContent =
        this.empleados.length > 0 ? this.empleados[0].correo : '';
    }
    if (idElement) {
      idElement.textContent =
        this.empleados.length > 0 ? this.empleados[0].id : '';
    }
    if (rolElement) {
      rolElement.textContent =
        this.empleados.length > 0 ? this.empleados[0].rol : '';
    }
    if (direccionElement) {
      direccionElement.textContent =
        this.empleados.length > 0 ? this.empleados[0].direccion : '';
    }
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}
