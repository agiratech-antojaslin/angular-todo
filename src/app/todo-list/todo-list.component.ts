import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from '../modals/todo.modal';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos_arr = [new Todo(1234, 'Go for walking'), new Todo(1235,'Take some tea'), new Todo(1236,'Reading books')];
  showModal = false;
  closeModal!: string;
  editTodoObj!: Todo | undefined;
  @ViewChild("modalData") modalData!: ElementRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  triggerModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  addTodo(newTodo: Todo) {
    this.todos_arr.push(newTodo);
  }

  editTodo(todoKey: number) {
    this.editTodoObj = this.todos_arr.find(x => x.key === todoKey);
    // console.log();
    // if(this.editTodoObj != undefined) {
    //   this.triggerModal(this.modalData.nativeElement);
    // }
  }

  editedTodo(editedTodo: Todo) {
    this.todos_arr.push(editedTodo);
  }

}
