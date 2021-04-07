import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private usuariosService: UsuariosService
  ) {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      password_repeat: new FormControl(),
      mail: new FormControl(),
      address: new FormControl(),
      age: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.usuariosService.registro(this.formulario.value);
    console.log(response);
  }

}
