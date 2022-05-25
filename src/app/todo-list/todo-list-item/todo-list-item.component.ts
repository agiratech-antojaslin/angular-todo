import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Todo } from 'src/app/modals/todo.modal';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo!: Todo;
  closeModal!: string;
  @Output() editTodoKey = new EventEmitter<number>();
  @Output() deleteTodoKey = new EventEmitter<number>();
  @Output() completedTodoKey = new EventEmitter<number>();

  constructor(private modalService: NgbModal) { }

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

  ngOnInit(): void {
  }

  onEditClick(todoKey: number | undefined) {
    this.editTodoKey.emit(todoKey);
  }

  onDeleteClick(todoKey: number | undefined) {
    this.deleteTodoKey.emit(todoKey);
  }

  onCompleteClick(todoKey: number | undefined) {
    this.completedTodoKey.emit(todoKey);
  }

}
