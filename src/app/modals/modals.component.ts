import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  @ViewChild('headerDialog', { static: true }) headerDialog: TemplateRef<any>;
  @ViewChild('scrollDialog', { static: true }) scrollDialog: TemplateRef<any>;
  @ViewChild('confirmDialog', { static: true }) confirmDialog: TemplateRef<any>;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openHeaderDialog() {
    this.dialog.open(this.headerDialog);
  }

  openScrollDialog() {
    this.dialog.open(this.scrollDialog);
  }

  openConfirmDialog() {
    this.dialog.open(this.confirmDialog);
  }

  close() {
    this.dialog.closeAll();
  }

  save() {
    this.snackBar.open('Sucesss', 'Response Saved !!', {
      duration: 2000,
    });
    this.close();
  }

  saveUpdate() {
    this.snackBar.open('Alright', 'Thanks for the update !!', {
      duration: 2000,
    });
    this.close();
  }

}
