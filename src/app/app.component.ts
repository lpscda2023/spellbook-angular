import { Component } from '@angular/core';
import { posts } from '../data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'spellbook-angular';
  posts = posts;
}
