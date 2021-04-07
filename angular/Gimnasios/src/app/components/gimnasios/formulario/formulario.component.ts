import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      email: new FormControl(),
      edad: new FormControl(),
      direccion: new FormControl(),
      cuota: new FormControl(),
      sexo: new FormControl(),
      dni: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.clientesService.insert(this.formulario.value);
    this.router.navigate(['/']);
  }

}