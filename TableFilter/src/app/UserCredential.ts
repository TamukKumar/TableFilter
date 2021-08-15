import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler,HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UserCredentialInterceptor implements HttpInterceptor{
    
    constructor(){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({ withCredentials: true });
        // console.log(JSON.stringify(req));
        // let response:Observable<HttpEvent<any>> = next.handle(req);
        // response.subscribe(x => {console.log(JSON.stringify(x))});
        return next.handle(req);
    }
}