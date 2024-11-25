import { Component, input } from "@angular/core";
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatStepperModule } from "@angular/material/stepper";

@Component({
  selector: "step-name",
  template: `
    <form [formGroup]="stepFormFroup()">
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input
          matInput
          placeholder="Last name, First name"
          formControlName="firstCtrl"
          required
        />
      </mat-form-field>
      <div>
        <p>Go to a different step to see the error state</p>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  `,
  styles: `
  .mat-mdc-form-field {
    margin-top: 16px;
  }
  `,
  imports: [
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class StepName {
  stepFormFroup = input.required<
    FormGroup<{
      firstCtrl: FormControl<string | null>;
    }>
  >();
}
