import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  //Injecto HttpClient
  constructor(private http:HttpClient) {
  }

  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login",user);
  }

  register(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }

  buscarInformacionDeUsuario() {
    // Aquí iría el endpoint para devolver el usuario para un token
    //Osea una peticion a una ruta de slim para obtener los datos del usuario
    //Lo puse de ejemplo mas que nada
  }

}
