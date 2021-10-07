import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';
import { testData1 } from 'app/mock-api/TestApi/data';


@Injectable({
    providedIn: 'root'
})
export class TestApi {

    private readonly _testData1: any[];
    // private readonly _testData2: any[];

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {

        // Set the data
        this._testData1 = testData1;
        // this._testData2 = testData2;

        // Register Mock API handlers
        this.registerHandlers();
    }

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {

        this._fuseMockApiService
        .onGet('api/testapi')
        .reply(() => [200, cloneDeep(this._testData1)]);
        

        // // Navigation - GET
        // this._fuseMockApiService
        //     .onGet('api/testdata')
        //     .reply(() => {

        //     // Clone the data to preserve the originals
        //     const testData1 = cloneDeep(this._testData1);

        //     // Return
        //     return [200, {
        //         testdata1: testData1,
        //     }];
        // })

        //         // Navigation - PUT
        // this._fuseMockApiService
        //     .onPut('api/navigation')
        //     .reply(({request}) => {

        //     // Save the new navigation item
        //     const testdata1 = cloneDeep(request.body.testdata1);
        //     testdata1.id = FuseMockApiUtils.guid();
        //     this._testData2.unshift(testdata1);

        //     // Return
        //     return [200, testdata1];
        // });



    }
}
