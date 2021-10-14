import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoListRoutingModule} from "./todo-list-routing.module";
import {TodoListComponent} from "./todo-list.component";
import {NgQrScannerModule} from "angular2-qrscanner";
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import {MatButtonModule} from "@angular/material/button";
import {QRCodeModule} from "angularx-qrcode";

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    NgQrScannerModule,
    ZXingScannerModule,
    MatButtonModule,
    QRCodeModule,
  ]
})
export class TodoListModule { }
