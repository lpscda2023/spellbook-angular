import { Component, Input, OnInit } from '@angular/core';
import { ListElement } from '../../models/list-element.interface';

@Component({
  selector: 'app-accordeon-item',
  templateUrl: './accordeon-item.component.html',
  styleUrls: ['./accordeon-item.component.css'],
})
export class AccordeonItemComponent implements OnInit {
  @Input() post!: ListElement;
  @Input() ID!: number;

  constructor() {}

  ngOnInit() {}
}
