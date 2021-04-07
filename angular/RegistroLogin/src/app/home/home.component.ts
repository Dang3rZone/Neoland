import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  async onClick() {
    const response = await this.usuariosService.getPremio();
    console.log(response);
  }

}
