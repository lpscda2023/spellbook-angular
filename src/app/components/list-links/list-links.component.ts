import { Component, Input, OnInit } from '@angular/core';
import { Element } from '../../models/list-element.interface';

@Component({
  selector: 'app-list-links',
  templateUrl: './list-links.component.html',
  styleUrls: ['./list-links.component.css'],
})
export class ListLinksComponent implements OnInit {
  @Input() elements!: Element[];
  constructor() {}

  ngOnInit() {
    console.log('init', this.elements);
  }
}
