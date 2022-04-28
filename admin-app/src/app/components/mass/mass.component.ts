import { Component, OnInit } from '@angular/core';
import { Mass, MassCategory } from 'src/app/models/masses.interface';
import { MassState } from 'src/app/states/mass.state';

@Component({
  selector: 'app-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.scss'],
})
export class MassComponent implements OnInit {
  massCategoryList: MassCategory[] = [];

  selectedMasses: any[] = [];
  constructor(public massState: MassState) {
    this.init();
  }

  async init() {
    await this.massState.loadList();
    this.massState.getList$().subscribe((list) => {
      this.massCategoryList = list as MassCategory[];
    });
  }

  ngOnInit(): void {}

  publish() {
    this.massState.updateBulk(this.massCategoryList);
  }

  addMass(categoryIndex: number) {
    if (typeof this.massCategoryList[categoryIndex].massess == 'undefined') {
      this.massCategoryList[categoryIndex].massess = [];
    }
    this.massCategoryList[categoryIndex].massess.push(new Mass());
  }

  deleteMass(categoryIndex: number, massIndex: number) {
    this.massCategoryList[categoryIndex].massess.splice(massIndex, 1);
  }
  

  addMassItems(categoryIndex: number, massIndex: number, type: string) {
    if (type === 'maharagama') {
      if (
        typeof this.massCategoryList[categoryIndex].massess[massIndex]
          .maharagama == 'undefined'
      ) {
        this.massCategoryList[categoryIndex].massess[massIndex].maharagama = [];
      }
      this.massCategoryList[categoryIndex].massess[massIndex].maharagama.push(
        ''
      );
    } else {
      if (
        typeof this.massCategoryList[categoryIndex].massess[massIndex]
          .boralesgamuwa == 'undefined'
      ) {
        this.massCategoryList[categoryIndex].massess[massIndex].boralesgamuwa =
          [];
      }
      this.massCategoryList[categoryIndex].massess[
        massIndex
      ].boralesgamuwa.push('');
    }
  }

  deleteMassItems(
    categoryIndex: number,
    massIndex: number,
    itemIndex: number,
    type: string
  ) {
    if (type === 'maharagama') {
      this.massCategoryList[categoryIndex].massess[massIndex].maharagama.splice(
        itemIndex,
        1
      );
    } else {
      this.massCategoryList[categoryIndex].massess[
        massIndex
      ].boralesgamuwa.splice(itemIndex, 1);
    }
  }

  trackByFn(index: number, item: any) {
    return index;
  }
}
