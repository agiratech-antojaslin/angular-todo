import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { TodoAddComponent } from './todo-list/todo-add/todo-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoEditComponent } from './todo-list/todo-edit/todo-edit.component';
import { FormsModule } from '@angular/forms';
import { TodoPopupComponent } from './todo-list/todo-popup/todo-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoAddComponent,
    TodoEditComponent,
    TodoPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
