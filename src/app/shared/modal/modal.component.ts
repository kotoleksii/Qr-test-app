import {Component, Inject, OnInit} from '@angular/core';
import {TodoListService} from "../../todo-list/todo-list.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NotifierService} from "angular-notifier";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public taskText: string;

  constructor(private todoListService: TodoListService,
              private router: Router,
              public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private notifierService: NotifierService) {
    this.taskText = '';
  }

  ngOnInit(): void {
  }

  addTodo(): void {
    if (this.taskText === '') {
      this.dialogRef.close();
    } else {
      this.todoListService.addTodo(this.taskText);
      this.notifierService.notify('success', 'bingo!');
      this.router.navigate(['todo-list'])
        .then(() => {
          window.location.reload();
        });
      this.dialogRef.close();
    }
  }

}
