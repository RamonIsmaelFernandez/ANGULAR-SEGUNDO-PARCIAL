import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})
export class LoguinComponent implements OnInit {

  email: string | undefined;
  password: string | undefined;

  constructor(private usuarios:UsuariosService) { 

  }

  ngOnInit(): void {
  }

  login() {
    const user = {email: this.email, password: this.password};
    this.usuarios
    .login(user)
    .subscribe( (response)=>{
      console.info(response);
      alert("Exito");
      this.persistirSesion(response);
    },
    (error: HttpErrorResponse) => {
      alert("Error")
      // Handle error
      // Use if conditions to check error code, this depends on your api, how it sends error messages
    });
  }

  persistirSesion(token:any) {
    localStorage.setItem('Token',token.token);
  }

  recuperarToken(){
    return localStorage.getItem('token');
  }

  


}









  
