import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordeonComponent } from './components/accordeon/accordeon.component';
import { AccordeonItemComponent } from './components/accordeon-item/accordeon-item.component';
import { DifficultyIndicatorComponent } from './components/difficulty-indicator/difficulty-indicator.component';
import { ListLinksComponent } from './components/list-links/list-links.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    AccordeonComponent,
    AccordeonItemComponent,
    DifficultyIndicatorComponent,
    ListLinksComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
