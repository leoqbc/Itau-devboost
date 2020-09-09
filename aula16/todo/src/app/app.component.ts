import { Component, OnInit } from '@angular/core';
import { Todo } from './models/Todo.model';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Array<Todo> = [];

  constructor(
    protected todosService: TodosService
  ) { }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(todos => this.todos = todos);
  }

  addTodo() {
    this.todos.push(new Todo(1, 6, 'Tarefa 6'));
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

}
