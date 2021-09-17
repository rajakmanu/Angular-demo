import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {User} from './users';




@Injectable({
providedIn: 'root'
})



export class CrudService {



endPoint = 'http://localhost:8081/biascorp';



constructor(private httpClient: HttpClient) { }



httpHeader = {
headers: new HttpHeaders({
'Content-Type': 'application/json'
})
}

create(employee): Observable<any> {
return this.httpClient.post<User>(this.endPoint + '/user', JSON.stringify(employee), this.httpHeader)
.pipe(
retry(1),
catchError(this.httpError)
)
}






httpError(error) {
let msg = '';
if(error.error instanceof ErrorEvent) {
// client side error
msg = error.error.message;
} else {
// server side error
msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
}
console.log(msg);
return throwError(msg);
}



}