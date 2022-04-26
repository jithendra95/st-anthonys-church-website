import { Component, OnInit } from '@angular/core';
import { MassCategory } from 'src/app/models/masses.interface';
import { MassState } from 'src/app/states/mass.state';

@Component({
  selector: 'app-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.scss'],
})
export class MassComponent implements OnInit {
  massCategoryList: MassCategory[] = [];
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

  onItemUpdate(
    event: any,
    categoryIndex: number,
    massIndex: number,
    itemIndex: number,
    type: string
  ) {
    if (type === 'maharagama') {
      this.massCategoryList[categoryIndex].massess[massIndex].maharagama[itemIndex] = event.target.value;
    }else{
      this.massCategoryList[categoryIndex].massess[massIndex].boralesgamuwa[itemIndex] = event.target.value;
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
