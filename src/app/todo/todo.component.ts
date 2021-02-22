import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoInput = '';
  todos = [];

  constructor(private apiService: ApiService) { }

  onChange(event: any) {
    //
  }

  addItem(nuData: string) {
    const localdb = JSON.parse(localStorage.getItem('localdb'));

    if (localdb) {
      //
    } else {
      // tslint:disable-next-line:one-variable-per-declaration
      const baseLocalDb = {todos: this.todos};
      localStorage.setItem('localdb', JSON.stringify(baseLocalDb));
    }

    this.todoInput = ' ';
    const nuItem = JSON.parse(nuData);
    this.apiService.sendPostRequest(nuItem.name, nuItem.status).subscribe(
      res => {
        res.id = new Date().getTime();
        this.todoInput = '';
        this.todos.push(res);
        localdb.todos = this.todos;
        localStorage.setItem('localdb', JSON.stringify(localdb));
      });
  }

  setStatus(data) {
    const itemData = JSON.parse(data);
    this.apiService.sendStatusChangedItemRequest(itemData.listItemId, itemData.status).subscribe(
      res => {
        this.fakeStatusItemServerResponse(res);
      });
  }

  fakeStatusItemServerResponse(res: { listItemId: string; status: string; }) {
    console.log('mock server status change response..');
    // that method mocks the GET request after status change is persisted on the server.
    // the method assumes changed is done and the latest state on the db is retrieved.
    const nuTodos = this.todos.slice();

    nuTodos.some(x => {
      // tslint:disable-next-line:radix
      if (x.id === parseInt(res.listItemId)) {
        x.status = (res.status);
      }
    });

    localStorage.setItem('localdb', JSON.stringify({todos: nuTodos}));
    this.refreshList(nuTodos);
  }

  refreshList(items) {
    this.todos = items.slice(0);
  }

  fakeDeletedItemServerResponse(res: { listItemId: string; }) {
    const localdb = localStorage.getItem('todo');
    console.log('mock server item delete response..');
    // that method mocks the GET request after deletion is persisted on the server.
    // the method assumes change is made to db and the latest state on the db is retrieved.
    const data = JSON.parse(res.listItemId);
    this.todos = this.todos.filter(element => {
      return element.id !== data.listItemId;
    });

    if (localdb) {
      //
    } else {
      //
      const baseLocalDb = {todos: this.todos};
      localStorage.setItem('localdb', JSON.stringify(baseLocalDb));
    }

    this.refreshList(this.todos);
  }

  deleteItem(listId: string) {
    this.apiService.sendDeleteItemRequest(listId).subscribe(
      res => {
        this.fakeDeletedItemServerResponse(res);
      });
  }

  ngOnInit() {
    this.apiService.getTodos().subscribe((data: any[]) => {
      const localdb: any = localStorage.getItem('localdb');

      if (localdb && localdb != 'null' && localdb != null && localdb.length >  10) {
      } else {
        const baseLocalDb  = {todos: []};
        localStorage.setItem('localdb', JSON.stringify(baseLocalDb));
      }

      const tempdb = JSON.parse(localStorage.getItem('localdb'));

      if (tempdb) {
        this.todos = tempdb.todos;
      } else {
        console.log('there\'s a problem');
      }
    });
  }
}
