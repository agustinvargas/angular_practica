import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss'],
})
export class PadreComponent implements OnInit {
  @Input() clicks!: number;
  @Output() text: any = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  texto(t: any) {
    this.text.emit(t.target.value);
  }
}
