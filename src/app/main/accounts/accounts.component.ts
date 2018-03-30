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
    private listAttr: any;

    constructor(private router: Router, private _accountsService: AccountsService) {
        this.isDesc = false;
        this.column = 'Name';
        this.listAttr = {
            index: 0,
            size: 10,
            currIndex: 0
        };
    }

    sort(event, property) {
        var classes = event.target.className;
        if (classes.indexOf('fa-filter') < 0) {
            this.isDesc = !this.isDesc; // change the direction
            this.column = property;
            this.direction = this.isDesc ? 1 : -1;
        }
    };

    viewAccount(id) {
        this.router.navigateByUrl('account/' + id);
    }

    ngOnInit() {
        const component = this;
        component._accountsService.getAllAccounts(component.listAttr).subscribe(
            response => {
                component.accountList = response;
            }, error => {

            }
        );
    }
}
