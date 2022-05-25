import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/modals/todo.modal';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @ViewChild("inputTodo") inputTodoRef!: ElementRef;
  @Output() newTodoAdded = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  onTodoAdded() {
    const createdTodo = this.inputTodoRef.nativeElement.value;
    const createdTodoKey = Math.floor(1000 + Math.random() * 9000);
    const newTodo = new Todo(createdTodoKey, createdTodo, false);
    this.newTodoAdded.emit(newTodo);
    this.inputTodoRef.nativeElement.value = "";
  }

}
