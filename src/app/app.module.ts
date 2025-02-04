import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { KanbanViewComponent } from './kanban-view/kanban-view.component';

@NgModule({
  declarations: [AppComponent, KanbanViewComponent],
  imports: [BrowserModule, AppRoutingModule, MatTabsModule, DragDropModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
