import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { iData } from "../Model/data";

@Injectable({
    providedIn: 'root'
})

export class DatasService{

    private url = "http://localhost:3000";

    constructor(private http: HttpClient){}

    getDatas(): Observable<iData[]>{
        return this.http.get<iData[]>(this.url + "/units")
    }

    getDataId(id:number){
        return this.http.get<iData[]>(this.url + "/units/" + id)
    }

}