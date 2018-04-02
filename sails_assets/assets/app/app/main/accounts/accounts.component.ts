
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AccountsService } from './accounts.service';

@Component({
    moduleId: module.id,
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
    private totalCount: number;
    private totalPages: number;

    constructor(private router: Router, private _accountsService: AccountsService) {
        this.isDesc = false;
        this.column = 'Name';
        this.listAttr = {
            index: 0,
            size: 8
        };
        this.totalCount = 0;
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

    loadPage(page) {
        const component = this;
        if (typeof page === 'number') {
            component.listAttr.index = component.listAttr.size * (page - 1);
            component._accountsService.getAllAccounts(component.listAttr).subscribe(
                response => {
                    component.accountList = response;
                }, error => {

                }
            );
        } else if (typeof page === 'string' && 'prev' === page && 0 !== component.listAttr.index) {
            component.listAttr.index = component.listAttr.index - component.listAttr.size;
            component._accountsService.getAllAccounts(component.listAttr).subscribe(
                response => {
                    component.accountList = response;
                }, error => {

                }
            );
        } else if (typeof page === 'string' && 'next' === page && 0 <= component.listAttr.index) {
            component.listAttr.index = component.listAttr.index + component.listAttr.size;
            component._accountsService.getAllAccounts(component.listAttr).subscribe(
                response => {
                    component.accountList = response;
                }, error => {

                }
            );
        }
    }

    ngOnInit() {
        const component = this;
        /* component._accountsService.getTotalCount().subscribe(
            response => {
                component.totalCount = response;
                component.totalPages = component.totalCount / component.listAttr.size;
            }
        ); */
        component._accountsService.getAllAccounts(component.listAttr).subscribe(
            response => {
                component.accountList = response;
                component.totalCount = 5000;
                component.totalPages = component.totalCount / component.listAttr.size;
            }, error => {

            }
        );
    }
}
