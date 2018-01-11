import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
    accounts = [{
        name: 'Master Account',
        status: 'Active'
    }, {
        name: 'TestAccount',
        status: 'inactive'

    },
    {
        name: 'Hidden Account',
        status: 'Unknown'
    }
    ];

    statusUpdated = new EventEmitter<string>();
    constructor(private loggingservice: LoggingService) {

    }

    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        console.log(this.accounts);
        this.loggingservice.LogStatusChange(status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        console.log(this.accounts[id].status);
        this.loggingservice.LogStatusChange(status);
    }

}

// statusUpdated = new EventEmitter();


