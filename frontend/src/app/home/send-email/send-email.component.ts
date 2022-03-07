import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { EmailServiceService } from '../../services/email-service.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
})
export class SendEmailComponent implements OnInit {
  sendData: any;
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _emailService: EmailServiceService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.sendData = {};
  }

  ngOnInit(): void {}

  sendEmail() {
    if (
      !this.sendData.to ||
      !this.sendData.from ||
      !this.sendData.subject ||
      !this.sendData.text ||
      !this.sendData.html
    ) {
    } else {
    }
  }

  openSnackBarSuccesful() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
      panelClass: ['styleSnackBarSuccesfull'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
      panelClass: ['styleSnackBarError'],
    });
  }
}
