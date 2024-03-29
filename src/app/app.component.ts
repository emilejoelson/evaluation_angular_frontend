import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  actions: Array<any> = [
    {title: "Trainings","route":"/trainings",icon:"search"},
    {title: "New Training","route":"/new-training",icon:"safe"},
    {title: "Members","route":"/members",icon:"search"},
    {title: "New Member","route":"/new-member",icon:"safe"},
  ];

  currentAction: any;

  setCurrentAction(action : any) {
    this.currentAction = action;
  }
}
