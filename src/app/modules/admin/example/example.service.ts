import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {  Testdata }  from './testdata';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  private _testdata: ReplaySubject<Testdata> = new ReplaySubject<Testdata>(1);


  constructor(private _httpClient: HttpClient) { 


  }

  /**
   * Get navigation
   */
  getTestData(): Observable<any>
  {
    return this._httpClient.get<any[]>('api/testapi').pipe(
        tap((response: any) => {
            this._testdata.next(response);
        })
    );
  }


}
