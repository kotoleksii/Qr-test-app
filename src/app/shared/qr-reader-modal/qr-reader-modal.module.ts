import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QrReaderModalComponent} from "./qr-reader-modal.component";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [QrReaderModalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [QrReaderModalComponent]
})
export class QrReaderModalModule {
}
