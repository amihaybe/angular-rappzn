import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'hello',
  template: `
  
    <div class="row" cdkDropListGroup>

      <div class="col-6" cdkDropList [cdkDropListData]="list1"
        (cdkDropListDropped)="panelDropped($event)">

        <div cdkDrag *ngFor="let p of list1">
          <ng-container *ngTemplateOutlet="this[p+'Panel']">
          </ng-container>
        </div>

      </div>

      <div class="col-6" cdkDropList [cdkDropListData]="list2"
        (cdkDropListDropped)="panelDropped($event)">

        <div cdkDrag *ngFor="let p of list2">
          <ng-container *ngTemplateOutlet="this[p+'Panel']">
          </ng-container>
        </div>

      </div>

    </div>
  
    <ng-template #aPanel><div class="card"></div></ng-template>
    <ng-template #bPanel><div class="card"></div></ng-template>
    <ng-template #cPanel><div class="card"></div></ng-template>
    <ng-template #dPanel><div class="card"></div></ng-template>
    <ng-template #ePanel><div class="card"></div></ng-template>
    <ng-template #fPanel><div class="card"></div></ng-template>

  `,
  styles: [`

    .col-6:nth-child(1) { background-color: plum; }
    .col-6:nth-child(2) { background-color: peru; }
    .card { background-color: blue; height: 10em; margin: 0.5em; }

  `]
})
export class HelloComponent {
  @Input() name: string;

  @ViewChild('aPanel') aPanel: TemplateRef<any>;
  @ViewChild('bPanel') bPanel: TemplateRef<any>;
  @ViewChild('cPanel') cPanel: TemplateRef<any>;
  @ViewChild('dPanel') dPanel: TemplateRef<any>;
  @ViewChild('ePanel') ePanel: TemplateRef<any>;
  @ViewChild('fPanel') fPanel: TemplateRef<any>;

  list1: Array<string> = ['a', 'b', 'c'];
  list2: Array<string> = ['d', 'e', 'f'];

  panelDropped(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data, event.previousIndex, event.currentIndex);
    }
  }

}
