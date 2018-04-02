import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AccountService } from './account.service';
@Component({
    moduleId: module.id,
    selector: 'app-account',
    templateUrl: 'account.template.html',
    styleUrls: ['./account.style.css'],
})

export class AccountComponent implements OnInit {
    private accountId: string;
    windowInnerHeight = window.innerHeight - 100;

    constructor(private route: ActivatedRoute) {
        this.accountId = '';
    }

    ngOnInit() {
        const component = this;
        component.route.params.forEach((params: Params) => {
            if (Object.keys(params).length !== 0) {
                component.accountId = params['id'];
            }
        });
    }
}
