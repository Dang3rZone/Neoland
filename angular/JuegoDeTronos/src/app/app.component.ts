import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  characters: any;
  numPages: number;
  currentPage: number;

  constructor(private apiService: ApiService) {
    this.currentPage = 1;
  }

  // async ngOnInit() {
  //   const response = await this.apiService.getAllCharacters();
  //   this.characters = response['results'];
  // }

  ngOnInit() {
    this.apiService.getAllCharacters()
      .then(response => {
        console.log(response);
        this.characters = response['results'];
        this.numPages = response['info']['pages'];
      })
      .catch(error => {
        console.log(error);
        //alerta
        // Modifico una variable
      });
  }

  async onClick(siguiente) {
    if (siguiente) {
      this.currentPage++;
    } else {
      this.currentPage--;
    }
    const response = await this.apiService.getAllCharacters(this.currentPage);
    this.characters = response['results'];
  }

}
