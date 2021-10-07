import { Component, ViewEncapsulation } from '@angular/core';
import { ExampleService } from './example.service';
import { Testdata } from './testdata';

import { User } from 'app/core/user/user.types';
import { UserService } from 'app/core/user/user.service';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent
{
    testData : Testdata;
    usertest : User;


    /**
     * Constructor
     */
    constructor(private testService : ExampleService,
                private userService : UserService)
    {
    }

    ngOnInit() {

        // this.userService.user$.subscribe(res => {

        //     this.usertest = res;

        //     console.log('This user test ', this.usertest);
        // })

        this.testService.getTestData().subscribe(res => {
                this.testData = res;
                console.log('this.testData ',  this.testData);
            }
        )

    }





}
