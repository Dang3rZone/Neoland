import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  async onSubmit(formValue) {
    const response = await this.usuariosService.login(formValue);
    console.log(response);
  }

}
