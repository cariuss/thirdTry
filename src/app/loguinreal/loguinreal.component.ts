import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { UsuarioComponent } from '../usuario/usuario.component';
import { ProductoComponent } from '../producto/producto.component';
import { IndexComponent } from '../index copy/index.component';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../data/local-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginreal',
  standalone: true,
  imports: [CommonModule, UsuarioComponent, IndexComponent, ProductoComponent],
  templateUrl: './loguinreal.component.html',
  styleUrls: ['./loguinreal.component.css'],
})
export class LoguinComponent {

  constructor(
    private http: HttpClient,
    private local: LocalStorageService,
    private router: Router
  ) {}
  empleados: any[] = [];

  loguear() {
    
    this.http.get('http://localhost:3000/api/empleado').subscribe(
      (data) => {
        console.log('Datos de empleados:', data);
        this.empleados = data as any[];
        this.empleados.map((empleado) => {
          console.log(empleado)
          let usuario = (document.getElementById('cedula') as HTMLInputElement)
            ?.value;
          let contrasena = (
            document.getElementById('contrasena') as HTMLInputElement
          )?.value;
          if (contrasena == empleado.contrasena && usuario == empleado.cedula)
            this.local.set('id', empleado.cedula);
          this.router.navigate(['/usuario']);
          
        });
      },
      (error) => {
        console.error('Error al obtener empleados:', error);
      }
    );
  }
}
function ngAfterViewInit(arg0: {}) {
  throw new Error('Function not implemented.');
}

