import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { course as courseData } from 'app/mock-api/apps/course/data';

@Injectable({
    providedIn: 'root',
})
export class CourseMockApi {
    private _course: any = courseData;

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
        // @ course - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/course')
            .reply(() => [200, cloneDeep(this._course)]);

        // -----------------------------------------------------------------------------------------------------
        // @ course - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/course')
            .reply(({request}) => {

                // Get the course mock-api
                const course = cloneDeep(request.body.user);

                // Update the user mock-api
                this._course = assign({}, this._course, course);

                // Return the response
                return [200, cloneDeep(this._course)];
            });


    }







}
