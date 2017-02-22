import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My bar Info</h1>
    <new-keg
      (newTaskSender)="addKeg($event)">
    </new-keg>
    <keg-list
      [KegListChild]="KegList"
      (clickSender)="showDetails($event)">
    </keg-list>
    <empty-keg-list
      [KegListChild]="KegList">
    </empty-keg-list>
    <edit-keg
      [childSelectedKeg]="clickedonKeg"
      (doneClickedSender)="editFinished()">
    </edit-keg>
  </div>
  `
})

export class AppComponent {

  public KegList : Keg [] = [
    new Keg("Churchill","Heineken",30,4.5,13)
  ];

  public emptyKegList : Keg[] = [];

   addKeg(newKegFromChild : Keg) {
    this.KegList.push(newKegFromChild);
  }

  clickedonKeg : Keg = null;
  showDetails(clickedKeg : Keg){
    this.clickedonKeg=clickedKeg;
  }

  editFinished(){
    this.clickedonKeg = null;
  }
}
