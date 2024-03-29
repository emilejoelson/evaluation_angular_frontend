import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Training } from '../../model/training.model';

@Component({
  selector: 'app-training-modal',
  templateUrl: './training-modal.component.html',
  styleUrl: './training-modal.component.css'
})
export class TrainingModalComponent {
  @Input() selectedTraining: Training | null = null;
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onCloseModal(event?: any) {
    this.closeModal.emit(event);
  }
}
