import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-config',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-config.component.html',
  styleUrl: './form-config.component.css',
})
export class FormConfigComponent implements OnInit {
  configForm: FormGroup;
  type: number;
  level: number;

  @Output() levelConfig: EventEmitter<number>;
  @Output() typeConfig: EventEmitter<number>;

  constructor( private form: FormBuilder ) {
    this.level = 3;
    this.type = 1;
    this.levelConfig = new EventEmitter<number>();
    this.typeConfig = new EventEmitter<number>();

    this.configForm = this.form.group({
      level: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.configForm
      .get('type')
      ?.valueChanges.subscribe((data) => (this.type = data));
    this.configForm
      .get('level')
      ?.valueChanges.subscribe((data) => (this.level = data));
  }

  startGame(): void {
    this.levelConfig.emit(this.level);
    this.typeConfig.emit(this.type);    
  }
}
