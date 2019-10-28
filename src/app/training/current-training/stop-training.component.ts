import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-stop-training',
    template: ` <h1 mat-dialog-title > Are you sure ? </h1>
                <mat-dialog-actions >
                <mat-dialog-content> You already got {{passedData.progress}}%  </mat-dialog-content>
                <button mat-raised-button fxLayout="row" [mat-dialog-close]="true" >Yes</button>
                <button mat-raised-button [mat-dialog-close]="false">No</button>
                </mat-dialog-actions>`
})
export class StopTrainingComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}
}
