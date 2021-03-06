/*
 * Copyright (c) 2016-17 MapleLabs Inc
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MainService } from '../main.service';
import { CommonService } from '../../shared/services/index';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    selector: 'app-case-list',
    templateUrl: 'cases.template.html',
    styleUrls: ['./cases.style.css', '../main.style.css'],
})

export class CaseListComponent implements OnInit {
    private caseList: any = [];

    private listAttr: any;
    private totalCount: number;
    private pagesShown: any = [];
    private totalPageCount: number;
    private curPage: number;

    constructor(private router: Router, private _mainService: MainService, private _commonService: CommonService) {
        this.listAttr = {
            index: 0,
            size: 8,
            isDesc: false,
            sortingColumn: 'CaseNumber.keyword',
            table: 'cases'
        };
        this.totalCount = 0;
        this.totalPageCount = 0;
        this.curPage = 0;
    }

    sort(event, property) {
        const component = this;
        const classes = event.target.className;
        if (classes.indexOf('fa-filter') < 0) {
            component.listAttr.isDesc = !component.listAttr.isDesc;
            component.listAttr.sortingColumn = property;
        }
        this.loadPage(1);
    }

    viewAccount(account) {
        const component = this;
        component._commonService.setAccountName(account._source.Name);
        component.router.navigateByUrl('account/' + account._source.Id);
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
        component._mainService.getAllDashContent(component.listAttr).subscribe(
            response => {
                component.caseList = response.hits;
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

        component._mainService.getAllDashContent(component.listAttr).subscribe(
            response => {
                let arraySize = 5;
                component.caseList = response.hits;
                component.totalCount = response.total;
                component.totalPageCount = Math.ceil(component.totalCount / component.listAttr.size);
                if (component.totalPageCount < arraySize) {
                    arraySize = component.totalPageCount;
                }
                component.pagesShown = Array(arraySize).fill(0).map((x, i) => i + 2);
                component.curPage = 1;
            }, error => {

            }
        );
    }
}
