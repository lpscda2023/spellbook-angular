import { Component, Input, OnInit } from '@angular/core';
import { ListElement } from '../../models/list-element.interface';

@Component({
  selector: 'app-accordeon',
  templateUrl: './accordeon.component.html',
  styleUrls: ['./accordeon.component.css'],
})
export class AccordeonComponent implements OnInit {
  @Input({ required: true }) posts?: ListElement[];

  constructor() {}

  ngOnInit() {}
}
