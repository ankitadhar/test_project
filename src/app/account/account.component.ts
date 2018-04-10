/*
 * Copyright (c) 2016-17 MapleLabs Inc
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AccountService } from './account.service';
import { CommonService } from '../shared/services/index';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    selector: 'app-account',
    templateUrl: 'account.template.html',
    styleUrls: ['./account.style.css'],
})

export class AccountComponent implements OnInit {
    private accountId: string;
    private windowInnerHeight: number;
    private accountData: any;

    constructor(private route: ActivatedRoute, private _accountService: AccountService, private _commonService: CommonService) {
        this.accountId = '';
        this.accountData = {};
        this.windowInnerHeight = window.innerHeight - 100;
    }

    onResize(event) {
        const component = this;
        component.windowInnerHeight = window.innerHeight - 100;
    }

    ngOnInit() {
        const component = this;
        component.accountData = component._commonService.getAccountName();
        component.route.params.forEach((params: Params) => {
            if (Object.keys(params).length !== 0) {
                component.accountId = params['id'];
            }
        });
        // if ('' === component.accountName) {
        component._accountService.getAccountData(component.accountId).subscribe(
            response => {
                component.accountData = response.hits[0]['_source'];
            }
        );
        // }
    }
}
