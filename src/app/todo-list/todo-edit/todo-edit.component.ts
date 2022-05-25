import { Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/modals/todo.modal';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  @Input() editTodoItem!: Todo | undefined;
  closeModal!: string;
  @ViewChild("modalData", {static: false}) modalTemplate!: ElementRef;
  @ViewChild("inputEditTodo") inputEdit!: ElementRef;
  @Output() editedTodoObj = new EventEmitter<Todo>();
   
  constructor(private modalService: NgbModal) { 
    
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if( changes['editTodoItem'].currentValue ) {
      this.triggerModal(this.modalTemplate);
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

  todoEdited() {
    const editedTodoContent = this.inputEdit.nativeElement.value;
    
    const editedTodo = new Todo(this.editTodoItem?.key, editedTodoContent);
    this.editedTodoObj.emit(editedTodo);
  }

}
