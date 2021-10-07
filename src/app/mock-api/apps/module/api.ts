import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { module as moduleData } from 'app/mock-api/apps/module/data';

@Injectable({
    providedIn: 'root',
})
export class ModuleMockApi {
    private _module: any = moduleData;

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
        // @ module - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/module')
            .reply(() => [200, cloneDeep(this._module)]);

        // -----------------------------------------------------------------------------------------------------
        // @ module - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/module')
            .reply(({request}) => {

                // Get the module mock-api
                const module = cloneDeep(request.body.user);

                // Update the user mock-api
                this._module = assign({}, this._module, module);

                // Return the response
                return [200, cloneDeep(this._module)];
            });


    }







}
