import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css']
})
export class RelatedComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.parent.params.subscribe(params => {
      console.log(params);
    });
  }

}