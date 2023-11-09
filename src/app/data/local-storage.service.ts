import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // Obtiene un valor del almacenamiento local
  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Establece un valor en el almacenamiento local
  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  // Elimina un valor del almacenamiento local
  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
