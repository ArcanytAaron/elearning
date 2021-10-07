import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { subject as subjectData } from 'app/mock-api/apps/subject/data';

@Injectable({
    providedIn: 'root',
})
export class SubjectMockApi {
    private _subject: any = subjectData;

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
        // @ Subject - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/subject')
            .reply(() => [200, cloneDeep(this._subject)]);

        // -----------------------------------------------------------------------------------------------------
        // @ subject - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/subject')
            .reply(({request}) => {

                // Get the subject mock-api
                const subject = cloneDeep(request.body.user);

                // Update the user mock-api
                this._subject = assign({}, this._subject, subject);

                // Return the response
                return [200, cloneDeep(this._subject)];
            });


    }







}
