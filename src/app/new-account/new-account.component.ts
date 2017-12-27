import { Component } from '@angular/core';

import { AccountsService } from './../accounts.service'
import { Http } from '@angular/http/src/http';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {

  constructor(private accountsservice: AccountsService) {
    this.accountsservice.statusUpdated.subscribe((status: string) =>
    console.log('new status' + status));
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsservice.addAccount(accountName, accountStatus)
  }

}
