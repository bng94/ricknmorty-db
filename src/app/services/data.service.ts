import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private charDataBase: RickAndMortyChars[];

    constructor(private http: HttpClient) { }
        
    getMappedData() {
        if (this.charDataBase) {
            return Promise.resolve(this.charDataBase);
        }

        return new Promise(resolve => {
            this.getData().subscribe((data: any) => {
                this.charDataBase = data;
                resolve(this.charDataBase);
            })
        })
    }

    getData(): Observable<RickAndMortyChars[]> {
        return this.http.get('https://rickandmortyapi.com/api/character/')
            .pipe(
                map((data: any) => {
                    return data.results.map(item => {
                        let temp = {
                            name: item.name,
                            status: item.status,
                            species: item.species,
                            gender: item.gender,
                            origin: item.origin.name,
                            location: item.location.name,
                            imageUrl: item.image
                        };
                        return new RickAndMortyChars(temp);
                    });
                })
            );
    }
}


export class RickAndMortyChars {
    name: string
    status: string;
    species: string;
    gender: string;
    origin: any;
    location: any;
    imageUrl: string
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
