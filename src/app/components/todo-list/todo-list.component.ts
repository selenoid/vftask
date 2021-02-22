import { EventEmitter } from '@angular/core';
import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Output() deleteItemEvent = new EventEmitter<string>();
  @Output() changeStatusEvent = new EventEmitter<string>();
  @Input() todos = [];
  constructor() { }


  changeStatus(id: string, e: any ) {
    this.changeStatusEvent.emit(JSON.stringify( {listItemId: id, status: e.checked}));
  }

  _changeStatus(itemId, itemStatus) {
    this.changeStatusEvent.emit(JSON.stringify({listItemId: itemId, status: itemStatus}));
  }

  onItemDelete(event) {
    this.deleteItemEvent.emit(JSON.stringify({listItemId: event}));
  }

  ngOnInit() {
    //
  }
}
