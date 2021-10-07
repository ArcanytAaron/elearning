import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { enrollmentmodule as enrollmentModuleData } from 'app/mock-api/apps/enrollment_Module/data';

@Injectable({
    providedIn: 'root',
})
export class enrollmentModuleMockApi {
    private _enrollmentModule: any = enrollmentModuleData;

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
        // @ enrollmentModule - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/enrollmentModule')
            .reply(() => [200, cloneDeep(this._enrollmentModule)]);

        // -----------------------------------------------------------------------------------------------------
        // @ enrollmentModule - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/enrollmentModule')
            .reply(({request}) => {

                // Get the enrollmentModule mock-api
                const enrollmentModule = cloneDeep(request.body.user);

                // Update the user mock-api
                this._enrollmentModule = assign({}, this._enrollmentModule, enrollmentModule);

                // Return the response
                return [200, cloneDeep(this._enrollmentModule)];
            });


    }

}
