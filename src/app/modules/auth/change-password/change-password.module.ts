import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { ChangePasswordComponent } from './change-password.component';

export const changePasswordRoutes: Route[] = [
    {
        path: '',
        component: ChangePasswordComponent,
    },
];

@NgModule({
    declarations: [ChangePasswordComponent],
    imports: [
        RouterModule.forChild(changePasswordRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseCardModule,
        FuseAlertModule,
        SharedModule,
    ],
})
export class ChangePasswordModule {}
