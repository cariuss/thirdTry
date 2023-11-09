import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from '../usuario/usuario.component';
import { ProductoComponent } from '../producto/producto.component';
import { IndexComponent } from '../index copy/index.component';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../data/local-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, UsuarioComponent, IndexComponent, ProductoComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private http: HttpClient,
    private local: LocalStorageService,
    private router: Router
  ) {}
  private apiUrl = 'http://localhost:3000/api/empleado/';
  registrarUsuario(): void {
    const nuevoUsuario = {
      nombre: 'NombreUsuario',
      apellido: 'ApellidoUsuario',
      correo: 'correo@example.com',
      cedula: '123456789',
      celular: '123456789',
      rol: 'trabajador',
      direccion: 'Dirección de ejemplo',
      contrasena: 'contrasena123',
    };

    this.http.post(this.apiUrl, nuevoUsuario).subscribe(
      (response) => {
        console.log('Usuario registrado correctamente:', response);
        // Puedes redirigir o realizar otras acciones después del registro exitoso
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
      }
    );
  }
}
