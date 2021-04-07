import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ]),
      edad: new FormControl('', [
        this.edadValidator
      ]),
      email: new FormControl('', [
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      password: new FormControl('', [
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/)
      ]),
      password_repeat: new FormControl()
    }, [this.passwordValidator]);
  }

  ngOnInit(): void {
    const emailControl = this.formulario.get('email');
    // valid, invalid, pristine, dirty, touched, untouched, errors, value

    emailControl.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  checkValidator(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;
  }

  // - Todos los validadores reciben  por parámetro el CONTROL sobre el cual se aplican
  edadValidator(control) {
    // Devuelvo null si pasa la validación
    // Devuelvo un objeto si no pasa la validación
    const edadMin = 16;
    const edadMax = 65;

    if (control.value >= edadMin && control.value <= edadMax) {
      return null;
    } else {
      return {
        edadvalidator:
          { edadMin, edadMax }
      };
    }
  }

  dniValidator(control: FormControl) {
    const relLetras = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const dni = control.value;

    if (/^\d{8}[a-zA-Z]$/.test(dni)) {
      const parteNumerica = dni.substr(0, dni.length - 1);
      const letraDni = dni.substr(dni.length - 1, 1);
      const posLetra = parteNumerica % 23;

      const letraCorrecta = relLetras.substring(posLetra, posLetra + 1);
      if (letraCorrecta != letraDni.toUpperCase()) {
        return { dnivalidator: true };
      } else {
        return null;
      }
    } else {
      return { dnivalidator: true };
    }
  }

  // Validador global del formulario
  passwordValidator(form: FormGroup) {
    const passwordValue = form.get('password').value;
    const passwordRepeatValue = form.get('password_repeat').value;

    if (passwordValue === passwordRepeatValue) {
      return null;
    } else {
      return { passwordvalidator: true };
    }
  }

}



/*

  valid - invalid -> Depende de los validadores
  touched - untouched -> Depende de si el campo ha tenido el foco
  dirty - pristine -> Depende de si hemos escrito o no algo en el campo

*/