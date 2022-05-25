import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  @ViewChild("inputTodo") inputTodoRef!: ElementRef;
  @Output() newTodoAdded = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {

  }

  onTodoAdded() {
    const newTodo = this.inputTodoRef.nativeElement.value;
    this.newTodoAdded.emit(newTodo);
  }

}
