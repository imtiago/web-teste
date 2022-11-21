import {
    Component,
    OnInit
} from '@angular/core';

import {
    DashboardService
} from './dashboard.service'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    allProperties: number;
    soldProperties: number;
    pendingProperties: number;

    constructor(private dashboardService: DashboardService) {}

    ngOnInit() {
        this.dashboardService.getValues().subscribe(
            r => {
                this.allProperties = r.allProperties;
                this.soldProperties = r.soldProperties;
                this.pendingProperties = r.pendingProperties;
            })
    }
}