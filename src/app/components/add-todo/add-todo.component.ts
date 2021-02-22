import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  @Output() newTodoEvent = new EventEmitter<string>();
  @Input() todoInput = '';
  @Input() todoStatus = '0';

  constructor() { }

  addNewItem(value: string) {
    if (this.todoInput.length > 1) {
      this.newTodoEvent.emit(JSON.stringify({name: this.todoInput, status: this.todoStatus}));
    } else {
      alert('Text alanı boş bırakılamaz');
    }
  }

  onChange(item) {
    // console.log('on change: ', item);
  }

  ngOnInit() {
    //
  }
}
