import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  @ViewChild('parrafoMain') parrafoMain: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.parrafoMain.nativeElement.style.backgroundColor = 'indigo';
    document.getElementById('pMain').style.color = 'white';
  }

  onSubmit(pFormValue) {
    console.log(pFormValue);
  }

}
