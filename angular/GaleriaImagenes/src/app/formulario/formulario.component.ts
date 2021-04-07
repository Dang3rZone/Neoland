import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ImagenesService } from '../imagenes.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private imagenesService: ImagenesService
  ) {
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      descripcion: new FormControl(),
      url: new FormControl(),
      activa: new FormControl(false)
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const nuevoArr = await this.imagenesService.add(this.formulario.value);
    console.log(nuevoArr);
    this.formulario.reset();
  }

}
