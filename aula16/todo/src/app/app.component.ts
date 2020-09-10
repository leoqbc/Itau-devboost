import { Component, OnInit } from '@angular/core';
import { Todo } from './models/Todo.model';
import { TodosService } from './services/todos.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Array<Todo> = [];
  public form: FormGroup;

  constructor(
    protected todosService: TodosService,
    private formBuilder: FormBuilder
  ) {

    this.form = this.formBuilder.group({
      title: ''
    });

  }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(todos => this.todos = todos);
  }

  addTodo() {
    const atividade = this.form.controls['title'].value;
    this.todos.push(new Todo(1, this.todos.length, atividade));
    this.form.reset();
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
