import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnInit {
  x: number = 0;
  @Input() text: any;
  @Output() cantidadClicks: any = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    const xActualizado = ++this.x;
    this.cantidadClicks.emit(xActualizado);
  }
}
