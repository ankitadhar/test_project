import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/* import { AppService } from '../app.service';
import { ConfigService } from '../shared/services/config.service';

import { FusionDialog } from '../ui/components/dialog/fusion-dialog.component'; */

@Component({
  selector: 'app-header',
  templateUrl: './header.template.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  version: any;
  feedbackEmail: string;
  download_option: any;
  interval: any;
  // @ViewChild('download') download: FusionDialog;

  constructor() {

  }

  logout() {
    /* this.appService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    }); */
  }

  /* downloadLog(option) {
    this.download.showDialog();
    this.download_option = option;
    this.appService.downloadLog().subscribe(
      result => {
        window.location.href = result;
        this.download.cancelAction();
      },
      (error) => {
        this.download.cancelAction();
      }
    );
  } */

  ngOnInit() {

  }
}
