import { Component, OnInit } from '@angular/core';

import { LoggingService } from './logging.service';
import { AccountsService } from './accounts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: { name: string, status: string }[] = [];
  constructor(private logservice: LoggingService, private accountsservice: AccountsService) {
  }
  ngOnInit() {
    this.accounts = this.accountsservice.accounts;
    console.log(this.accounts)
  }
}
