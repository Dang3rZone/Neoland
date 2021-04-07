import { Component, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  numMax: number;
  numMin: number;

  numAleatorio: number;

  constructor(private randomService: RandomService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.randomService.getNumAleatorio(this.numMin, this.numMax)
      .then(response => {
        console.log(response);
        this.numAleatorio = response['success'];
      });
  }

}
