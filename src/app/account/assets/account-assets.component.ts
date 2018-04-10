/*
 * Copyright (c) 2016-17 MapleLabs Inc
 */
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AccountService } from '../account.service';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    selector: 'app-account-assets',
    templateUrl: 'account-assets.template.html',
    styleUrls: ['./account-assets.style.css'],
})

export class AccountAssetComponent implements OnInit {
    @Input() accountId: string;
    private assetList: any = [];
    private totalCount: number;
    private pagesShown: any = [];
    private totalPageCount: number;
    private curPage: number;
    private listAttr: any;

    constructor(private _accountService: AccountService) {
        this.listAttr = {
            index: 0,
            size: 8,
            isDesc: false,
            sortingColumn: 'SerialNumber.keyword'
        };
        this.totalCount = 0;
    }

    actionHover(asset) {
        asset.actionView = true;
    }

    actionLeave(asset) {
        asset.actionView = false;
    }

    sort(event, property) {
        const component = this;
        const classes = event.target.className;
        if (classes.indexOf('fa-filter') < 0) {
            component.listAttr.isDesc = !component.listAttr.isDesc; // change the direction
            component.listAttr.sortingColumn = property;
        }
        this.loadPage(1);
    }

    loadPage(page) {
        const component = this;

        if (typeof page === 'number') {
            component.listAttr.index = component.listAttr.size * (page - 1);
        } else if (typeof page === 'string' && 'prev' === page && component.curPage > 1) {
            component.listAttr.index = component.listAttr.index - component.listAttr.size;
        } else if (typeof page === 'string' && 'next' === page && component.curPage < component.totalPageCount) {
            component.listAttr.index = component.listAttr.index + component.listAttr.size;
        }
        component._accountService.getAccountAssets(component.accountId, component.listAttr).subscribe(
            response => {
                component.assetList = response.hits;
                component.totalCount = response.total;
                component.totalPageCount = Math.ceil(component.totalCount / component.listAttr.size);
                component.curPage = (component.listAttr.index / component.listAttr.size) + 1;
                if (component.totalPageCount > 5) {
                    if (component.curPage <= 3) {
                        component.pagesShown = Array(4).fill(0).map((x, i) => i + 2);
                    } else if (component.curPage > 3 && component.curPage < (component.totalPageCount - 3)) {
                        component.pagesShown = Array(5).fill(0).map((x, i) => i + (component.curPage - 2));
                    } else {
                        component.pagesShown = Array(5).fill(0).map((x, i) => i + (component.totalPageCount - 5));
                    }
                }
            }, error => {

            }
        );
    }

    ngOnInit() {
        const component = this;

        component._accountService.getAccountAssets(component.accountId, component.listAttr).subscribe(
            response => {
                let arraySize = 5;
                component.assetList = response.hits;
                component.totalCount = response.total;
                component.totalPageCount = Math.ceil(component.totalCount / component.listAttr.size);
                if (component.totalPageCount < arraySize) {
                    arraySize = component.totalPageCount - 1;
                }
                component.pagesShown = Array(arraySize).fill(0).map((x, i) => i + 2);
                component.curPage = 1;
            }, error => {

            }
        );
    }
}
