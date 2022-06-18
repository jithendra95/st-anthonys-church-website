import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Mass, MassCategory } from 'src/app/models/masses.interface';
import { ToastService } from 'src/app/services/toast.service';
import { MassState } from 'src/app/states/mass.state';
import { ConfirmDialogComponent } from 'src/app/ui-elements/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.scss'],
})
export class MassComponent implements OnInit {
  massCategoryList: MassCategory[] = [];
  changeDetected = false;

  constructor(
    public massState: MassState,
    public dialog: MatDialog,
    private toastService: ToastService
  ) {
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
    this.massCategoryList.forEach((massCat) => {
      massCat.updatedDate = new Date().toDateString();
    });

    this.massState.updateBulk(this.massCategoryList);
    this.changeDetected = false;
    this.toastService.showToast('Masses Published', '');
  }

  detectChange(): void {
    this.changeDetected = true;
  }

  addMassCategory() {
    this.massCategoryList.unshift(new MassCategory());
    this.detectChange();
  }

  deleteMassCategory(categoryIndex: number) {
    let massCat = this.massCategoryList[categoryIndex];
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      data: {
        title: 'Delete Mass Category',
        message: `Are you sure you want to delete Mass Category  ${
          massCat!.header
        } ?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.massCategoryList.splice(categoryIndex, 1);
        this.detectChange();
      }
    });
  }

  moveMassCategory(categoryIndex: number, direction: string) {
    if (direction === 'up') {
      const tempMassCategory = this.massCategoryList[categoryIndex];
      this.massCategoryList[categoryIndex] =
        this.massCategoryList[categoryIndex - 1];
      this.massCategoryList[categoryIndex - 1] = tempMassCategory;
    } else {
      const tempMassCategory = this.massCategoryList[categoryIndex];
      this.massCategoryList[categoryIndex] =
        this.massCategoryList[categoryIndex + 1];
      this.massCategoryList[categoryIndex + 1] = tempMassCategory;
    }
    this.detectChange();
  }

  addMass(categoryIndex: number) {
    if (typeof this.massCategoryList[categoryIndex].massess == 'undefined') {
      this.massCategoryList[categoryIndex].massess = [];
    }
    this.massCategoryList[categoryIndex].massess.unshift(new Mass());
    this.detectChange();
  }

  reOrderMass(categoryIndex: number) {
    let n = this.massCategoryList[categoryIndex].massess.length - 1;
    for (let i = 0; i <= n/2; i++) {
      let mass = JSON.parse(
        JSON.stringify(this.massCategoryList[categoryIndex].massess[i])
      );
      this.massCategoryList[categoryIndex].massess[i] =
        this.massCategoryList[categoryIndex].massess[n - i];
      this.massCategoryList[categoryIndex].massess[n - i] = mass;
    }
    this.detectChange();
  }

  deleteMass(categoryIndex: number, massIndex: number) {
    let mass = this.massCategoryList[categoryIndex].massess[massIndex];
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      data: {
        title: 'Delete Mass',
        message: `Are you sure you want to delete Mass  ${mass!.name} ?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.massCategoryList[categoryIndex].massess.splice(massIndex, 1);
        this.detectChange();
      }
    });
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
    this.detectChange();
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
    this.detectChange();
  }

  trackByFn(index: number, item: any) {
    return index;
  }
}
