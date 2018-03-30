/*
 * Copyright (c) 2016-17 MapleLabs Inc 
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AccountsService } from './accounts.service';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    selector: 'app-account-list',
    templateUrl: 'accounts.template.html',
    styleUrls: ['./accounts.style.css'],
})

export class AccountListComponent implements OnInit {
    private accountList: any = [];
    /* for table column sorting */
    private isDesc: boolean;
    private column: string;
    private direction: number;

    constructor(private _accountsService: AccountsService) {
        this.isDesc = false;
        this.column = 'Name';
    }

    sort(event, property) {
        var classes = event.target.className;
        if (classes.indexOf('fa-filter') < 0) {
            this.isDesc = !this.isDesc; //change the direction    
            this.column = property;
            this.direction = this.isDesc ? 1 : -1;
        }
    };

    ngOnInit() {
        const component = this;
        component.accountList = component._accountsService.getAllAccounts();
    }
}
