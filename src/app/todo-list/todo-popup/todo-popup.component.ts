import { Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from 'src/app/modals/todo.modal';

@Component({
  selector: 'app-todo-popup',
  templateUrl: './todo-popup.component.html',
  styleUrls: ['./todo-popup.component.css']
})
export class TodoPopupComponent implements OnInit {

  closeModal!: string;
  @Input() completeTodoItem!: Todo | undefined;
  @ViewChild("todoPopup", {static: false}) todoPopupTemplate!: ElementRef;
  @Output() completedTodoObj = new EventEmitter<Todo>();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if( changes['completeTodoItem'].currentValue ) {
      this.triggerModal(this.todoPopupTemplate);
    };
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
  
  onCompletedTodo() {
    this.modalService.dismissAll();
    this.completeTodoItem!.isCompleted = true;
    this.completedTodoObj.emit(this.completeTodoItem);
  }

}
