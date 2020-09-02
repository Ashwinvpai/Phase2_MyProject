import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {testportal} from '../form';

@Injectable()
export class RegisterService {
    constructor(private http:HttpClient){ }


    registertoDB(data:any){
        this.http.post('https://test-portal-b38bf.firebaseio.com/stestportal.json',data).subscribe(responsedata => {
            console.log(responsedata);
        })

    }
}