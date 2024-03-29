import { Pipe, PipeTransform } from '@angular/core';
import { Training } from '../model/training.model';

@Pipe({
  name: 'trainingFilter'
})
export class TrainingFilterPipe implements PipeTransform {

 
  transform(trainings: Array<Training>, searchText: string): Array<Training>{
    if(!searchText){
      return trainings;
    }

     searchText = searchText.toLocaleLowerCase();
     return trainings.filter(t => t.title.toLocaleLowerCase().includes(searchText));
  }
}
