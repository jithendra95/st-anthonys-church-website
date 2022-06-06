import { Component, OnInit } from '@angular/core';
import { Alert, AlertLevel } from 'src/app/models/staticData.interface';
import { ToastService } from 'src/app/services/toast.service';
import { AlertState } from 'src/app/states/alert.state';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  alertData: Alert | null = new Alert();
  changeDetected = false;
  alertTypeKeys = Object.keys(AlertLevel).filter((key) => !isNaN(Number(key)));

  constructor(
    public alertState: AlertState,
    private toastService: ToastService
  ) {
    this.init();
  }

  async init() {
    await this.alertState.readAll();
    this.alertData = this.alertState.get();
  }

  ngOnInit(): void {}

  publish() {
    this.alertState.update(this.alertData!, null);
    this.changeDetected = false;
    this.toastService.showToast("Alert Published", '');
  }

  detectChange(): void {
    this.changeDetected = true;
  }

  getDesc(index: string): string {
    return AlertLevel[parseInt(index)];
  }
}
