import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {ModalModule} from "./shared/modal/modal.module";
import {NotifierModule} from "angular-notifier";
import {MatDialogModule} from "@angular/material/dialog";
import {QrReaderModalComponent} from './shared/qr-reader-modal/qr-reader-modal.component';
import {QrReaderModalModule} from "./shared/qr-reader-modal/qr-reader-modal.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    ModalModule,
    QrReaderModalModule,
    MatDialogModule,
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
