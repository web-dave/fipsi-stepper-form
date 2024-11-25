import { Component, inject } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatStepperModule } from "@angular/material/stepper";
import { StepName } from "./step-name";
import { StepAddress } from "./step-address";

/**
 * @title Stepper that displays errors in the steps
 */
@Component({
  selector: "stepper-errors-example",
  template: `
    <mat-stepper #stepper>
      <mat-step [stepControl]="firstFormGroup" errorMessage="Name is required.">
        <ng-template matStepLabel>Fill out your name</ng-template>
        <step-name [stepFormFroup]="firstFormGroup" />
      </mat-step>
      <mat-step
        [stepControl]="secondFormGroup"
        errorMessage="Address is required."
      >
        <ng-template matStepLabel>Fill out your address</ng-template>
        <step-address [stepFormFroup]="secondFormGroup" />
      </mat-step>
      <mat-step>
        <ng-template matStepLabel>Done</ng-template>
        <p>You are now done.</p>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button (click)="stepper.reset()">Reset</button>
        </div>
      </mat-step>
    </mat-stepper>
  `,
  styles: `
    .mat-mdc-form-field {
    margin-top: 16px;
  }
`,
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    StepName,
    StepAddress,
  ],
})
export class StepperErrorsExample {
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ["", Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ["", Validators.required],
  });
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
