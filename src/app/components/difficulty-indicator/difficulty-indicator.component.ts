import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-difficulty-indicator',
  templateUrl: './difficulty-indicator.component.html',
  styleUrls: ['./difficulty-indicator.component.css'],
})
export class DifficultyIndicatorComponent implements OnInit {
  @Input({ required: true }) level!: number;
  difficultyLevel: number[];
  constructor() {
    this.difficultyLevel = new Array(3).fill(0);
  }

  ngOnInit() {}
}
