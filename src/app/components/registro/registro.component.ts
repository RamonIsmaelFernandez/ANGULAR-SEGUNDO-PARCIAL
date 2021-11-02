import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  passwordError: boolean  | undefined;


  constructor(private servicioUsuarios:UsuariosService) { }

  ngOnInit(): void {
  }

  register() {
    const user = { email: this.email, password: this.password };
    this.servicioUsuarios.register(user).subscribe(data => {
      console.log(data);
    });
  }

}





 



 