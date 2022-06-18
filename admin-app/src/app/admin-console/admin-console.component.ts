import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../services/authentication.service';
import { ConfirmDialogComponent } from '../ui-elements/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.scss'],
})
export class AdminConsoleComponent implements OnInit {
  constructor(private auth: AuthenticationService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  logout() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      data: {
        title: 'Logout',
        message: `Are you sure you want to logout ?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.auth.SignOut();
      }
    });
   
  }
}
