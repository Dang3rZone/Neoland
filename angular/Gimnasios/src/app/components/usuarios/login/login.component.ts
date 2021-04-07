import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  errorMessage: string;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.errorMessage = null;
    this.usuariosService.login(this.formulario.value)
      .then(response => {
        if (response.error) {
          setTimeout(() => this.errorMessage = 'Te has equivocado bitch!', 500);
        } else {
          localStorage.setItem('token_gym', response.token);
          Swal.fire('Login Correcto', 'Has accedido correctamente', 'success')
            .then(result => {
              this.router.navigate(['/']);
            });
          this.errorMessage = null;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

}