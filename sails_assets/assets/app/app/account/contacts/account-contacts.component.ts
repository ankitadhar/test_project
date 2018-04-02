/*
 * Copyright (c) 2016-17 MapleLabs Inc
 */
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AccountService } from '../account.service';
// import { AccountsService } from './accounts.service';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'app-account-contacts',
    templateUrl: 'account-contacts.template.html',
    styleUrls: ['./account-contacts.style.css'],
})

export class AccountContactComponent implements OnInit {
    @Input() accountId: string;
    private contactList: any = [];
    private totalCount: number;
    private totalPages: number;
    private listAttr: any;
    /* for table column sorting */
    private isDesc: boolean;
    private column: string;
    private direction: number;
    /* for table column sorting */

    constructor(private _accountService: AccountService) {
        this.isDesc = false;
        this.column = 'Name';
        this.listAttr = {
            index: 0,
            size: 8,
        };
        this.totalCount = 0;
    }

    sort(event, property) {
        const classes = event.target.className;
        if (classes.indexOf('fa-filter') < 0) {
            this.isDesc = !this.isDesc; // change the direction
            this.column = property;
            this.direction = this.isDesc ? 1 : -1;
        }
    }

    loadPage(page) {
        const component = this;
        if (typeof page === 'number') {
            component.listAttr.index = component.listAttr.size * (page - 1);
            component._accountService.getAccountContacts(component.accountId, component.listAttr).subscribe(
                response => {
                    component.contactList = response;
                }, error => {

                }
            );
        } else if (typeof page === 'string' && 'prev' === page && 0 !== component.listAttr.index) {
            component.listAttr.index = component.listAttr.index - component.listAttr.size;
            component._accountService.getAccountContacts(component.accountId, component.listAttr).subscribe(
                response => {
                    component.contactList = response;
                }, error => {

                }
            );
        } else if (typeof page === 'string' && 'next' === page && 0 <= component.listAttr.index) {
            component.listAttr.index = component.listAttr.index + component.listAttr.size;
            component._accountService.getAccountContacts(component.accountId, component.listAttr).subscribe(
                response => {
                    component.contactList = response;
                }, error => {

                }
            );
        }
    }

    ngOnInit() {
        const component = this;
        component._accountService.getAccountContacts(component.accountId, component.listAttr).subscribe(
            response => {
                component.contactList = response;
                component.totalCount = 5000;
                component.totalPages = component.totalCount / component.listAttr.size;
            }, error => {

            }
        );
    }
}
