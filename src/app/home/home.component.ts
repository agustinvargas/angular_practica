import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  clicks!: number;
  text!: any;

  ngOnInit(): void {}

  clicksDelHijo(clicks: number) {
    this.clicks = clicks;
  }

  texto(t: any) {
    this.text = t;
  }
}
