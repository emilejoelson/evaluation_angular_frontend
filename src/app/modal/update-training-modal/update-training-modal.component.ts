import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Training } from '../../model/training.model';

@Component({
  selector: 'app-update-training-modal',
  templateUrl: './update-training-modal.component.html',
  styleUrls: ['./update-training-modal.component.css']
})
export class UpdateTrainingModalComponent {
  @Input() updatedTraining: Training = { id: 0, title: '', description: '', startDate: new Date(), endDate: new Date() };
  @Input() visible: boolean = false;
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateTraining: EventEmitter<Training> = new EventEmitter<Training>();

  constructor() { }

  onCloseModal(event?: any) {
    this.closeModal.emit(event);
  }

  submitForm() {
    this.updateTraining.emit(this.updatedTraining);
    this.closeModal.emit(); // Close the modal after submitting the form
  }
}
