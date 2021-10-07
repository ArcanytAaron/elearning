import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { content as contentData } from 'app/mock-api/apps/content/data';

@Injectable({
    providedIn: 'root',
})
export class ContentMockApi {
    private _content: any = contentData;

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
        // @ content - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/content')
            .reply(() => [200, cloneDeep(this._content)]);

        // -----------------------------------------------------------------------------------------------------
        // @ content - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPatch('api/apps/content')
            .reply(({request}) => {

                // Get the content mock-api
                const content = cloneDeep(request.body.user);

                // Update the user mock-api
                this._content = assign({}, this._content, content);

                // Return the response
                return [200, cloneDeep(this._content)];
            });


    }







}
