import {
    Injectable
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import {
    environment
} from '../../environments/environment';

interface IDash {
    allProperties: number,
    soldProperties: number,
    pendingProperties: number
    
}

@Injectable()
export class DashboardService {
    
    private readonly API = `${environment.API}/dashboard`
    
    constructor(protected http: HttpClient) {
        // super(http, `${environment.API}products`);
    }

    getValues() {
        return this.http.get<IDash>(this.API);
    }

}