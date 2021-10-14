import { Injectable } from '@angular/core';
import {Todo} from "../shared/classes/todo-list";
import {NotifierService} from "angular-notifier";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private nextId: number;

  constructor(private notifierService: NotifierService) {
    let todos = this.getTodos();

    if (todos.length == 0) {
      this.nextId = 0;
    } else {
      let maxId = todos[todos.length-1].id;
      this.nextId = maxId + 1;
    }
  }

  public addTodo(text: string): void {
    let todo = new Todo(this.nextId, text);
    let todos = this.getTodos();
    todos.push(todo);

    TodoListService.setLocalStorageTodos(todos);
    this.nextId++;
  }

  public getTodos(): Todo[] {
    let localStorageItem = JSON.parse(<string>localStorage.getItem('todos'));
    return localStorageItem == null ? [] : localStorageItem.todos;
  }

  private static setLocalStorageTodos(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify({ todos: todos }));
  }
}
