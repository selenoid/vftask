import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { AddTodoComponent } from '../components/add-todo/add-todo.component';
import { MatToolbarModule,
  MatIconModule,
  MatCheckboxModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatFormFieldModule} from '@angular/material';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    AddTodoComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TodoRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule
  ]
})
export class TodoModule { }
