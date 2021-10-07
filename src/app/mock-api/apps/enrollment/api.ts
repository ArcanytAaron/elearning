import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { enrollment as enrollmentData } from 'app/mock-api/apps/enrollment/data';

@Injectable({
    providedIn: 'root',
})
export class EnrollmentMockApi {
    private _enrollment: any = enrollmentData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ enrollment - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/enrollment')
            .reply(() => [200, cloneDeep(this._enrollment)]);

        // -----------------------------------------------------------------------------------------------------
        // @ enrollment - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/enrollment')
            .reply(({request}) => {

                // Get the enrollment mock-api
                const enrollment = cloneDeep(request.body.user);

                // Update the user mock-api
                this._enrollment = assign({}, this._enrollment, enrollment);

                // Return the response
                return [200, cloneDeep(this._enrollment)];
            });


    }







}
