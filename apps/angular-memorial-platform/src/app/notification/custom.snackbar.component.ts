import { Component, Inject } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-snackbar',
  template: ` <span [innerHTML]="data"></span> `,
  styles: [
    `
      span {
        white-space: pre-line;
      }
    `,
  ],
})
export class CustomSnackbarComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private snackBarRef: MatSnackBarRef<CustomSnackbarComponent>
  ) {}
}
