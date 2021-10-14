import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-qr-reader-modal',
  templateUrl: './qr-reader-modal.component.html',
  styleUrls: ['./qr-reader-modal.component.scss']
})
export class QrReaderModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {text: string}) { }

  ngOnInit(): void {
  }

}
