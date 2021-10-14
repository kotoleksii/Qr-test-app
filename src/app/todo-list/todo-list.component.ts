import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../shared/modal/modal.component";
import {TodoListService} from "./todo-list.service";
import {Router} from "@angular/router";
import {QrReaderModalComponent} from "../shared/qr-reader-modal/qr-reader-modal.component";
import {Todo} from '../shared/classes/todo-list';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public arr = this.todoListService.getTodos();
  public todo: Todo = new Todo(0, '');


  constructor(public dialog: MatDialog,
              public todoListService: TodoListService,
              private router: Router) {
  }

  ngOnInit(): void {

  }

  public scanSuccessHandler(event: any): void {
    console.log(JSON.parse(event));

    const dialogRef = this.dialog.open(QrReaderModalComponent, {
      data: {text: JSON.parse(event)},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {});

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  formatObj(obj: any): string {
    return JSON.stringify(obj.text);
  }
}
