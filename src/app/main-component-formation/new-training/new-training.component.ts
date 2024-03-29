import { Component } from '@angular/core';
import { TrainingService } from '../../services/training.service';
import { Router } from '@angular/router';
import { Training } from '../../model/training.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.css'
})
export class NewTrainingComponent {
  newTraining: Training = { 
    id: 0,
    title: '',
    description: '',
    startDate: new Date(),
    endDate: new Date()
  };

  constructor(private trainingService: TrainingService, private router: Router) { }

  addTraining(): void {
    if (this.newTraining.endDate <= this.newTraining.startDate) {
      alert('End date must be greater than start date');
      return;
    }
    this.trainingService.addTraining(this.newTraining).subscribe({
      next: createdTraining => {
        this.newTraining = { 
          id: 0,
          title: '',
          description: '',
          startDate: new Date(),
          endDate: new Date()
        };
        this.router.navigate(['/trainings']); 
      },
      error: err => {
        console.error('Error adding training:', err);
      }
    });
  }
}
