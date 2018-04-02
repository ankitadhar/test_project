import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../services/config.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export abstract class ApiBaseService {

    protected queryURL: string;
    protected pattern = /^\/{1,6}/i;

    constructor(protected http: Http, protected configService: ConfigService) {
        this.queryURL = this.configService.getQueryURL();
    }

    protected get(url: string, headers = null, mapFxn = null): Observable<any> {
        if (headers) {
            return this.http.get(url, { headers: headers })
                .map(mapFxn || this.extractData)
                .catch(this.handleError);
        }
        return this.http.get(url)
            .map(mapFxn || this.extractData)
            .catch(this.handleError);
    }

    protected del(url: string): Observable<any> {
        return this.http.delete(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    protected put(url: string, body: any): Observable<any> {
        return this.http.put(url, body)
            .map(this.extractData)
            .catch(this.handleError);
    }

    protected post(url: string, body: any): Observable<any> {
        return this.http.post(url, body)
            .map(this.extractData)
            .catch(this.handleError);
    }

    protected postFormData(url: string, body: any): Observable<any> {
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: headers, method: 'post' });
        return this.http.post(url, body.toString(), options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    protected putFormData(url: string, body: any): Observable<any> {
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: headers, method: 'put' });
        return this.http.put(url, body.toString(), options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    protected postFormDataWithHeaders(url: string, body: any, headers: any): Observable<any> {
        const options = new RequestOptions({ headers: headers, method: 'post' });
        return this.http.post(url, body.toString(), options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    protected extractData(res: Response) {
        let body;
        try {
            body = res.json();
            return body || {};
        } catch (e) {
            console.error('Cannot extract Json from response body: ', res);
        }
    }

    /**
     * Handle HTTP error
     */
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        return Observable.throw(error);
        /* let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg); */
    }
}
