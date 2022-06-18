import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Announcement } from 'src/app/models/announcment.interface';
import { ToastService } from 'src/app/services/toast.service';
import { AnnouncementState } from 'src/app/states/announcement.state';
import { ConfirmDialogComponent } from 'src/app/ui-elements/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent implements OnInit {
  announcementList: Announcement[] = [];
  changeDetected = false;

  constructor(
    public announcementState: AnnouncementState,
    public dialog: MatDialog,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.init();
  }

  async init() {
    await this.announcementState.loadList();
    this.announcementState.getList$().subscribe((list) => {
      this.announcementList = list as Announcement[];
    });
  }

  publish() {
    this.announcementState.updateBulk(this.announcementList);
    this.changeDetected = false;
    this.toastService.showToast('Announcements Published', '');
  }

  detectChange(): void {
    this.changeDetected = true;
  }

  addAnnouncement() {
    this.announcementList.unshift(new Announcement());
    this.detectChange();
  }

  deleteAnnouncement(index: number) {
    let announcement = this.announcementList[index];
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      data: {
        title: 'Delete Mass Announcement',
        message: `Are you sure you want to delete Announcement  ${
          announcement!.title
        } ?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.announcementList.splice(index, 1);
        this.detectChange();
      }
    });
  }

  moveAnnouncement(index: number, direction: string) {
    if (direction === 'up') {
      const tempAnnouncement = this.announcementList[index];
      this.announcementList[index] = this.announcementList[index - 1];
      this.announcementList[index - 1] = tempAnnouncement;
    } else {
      const tempAnnouncement = this.announcementList[index];
      this.announcementList[index] = this.announcementList[index + 1];
      this.announcementList[index + 1] = tempAnnouncement;
    }
    this.detectChange();
  }

  addAnnouncementItem(index: number) {
    this.announcementList[index].sub_items.push('');
    this.detectChange();
  }

  deleteAnnouncementItem(announcementIndex: number, itemIndex: number) {
    this.announcementList[announcementIndex].sub_items.splice(itemIndex, 1);
    this.detectChange();
  }

  trackByFn(index: number, item: any) {
    return index;
  }
}
