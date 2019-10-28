import { NgModule } from '@angular/core';
// tslint:disable-next-line: max-line-length
import {MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule} from '@angular/material';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
    imports: [MatButtonModule,
            MatIconModule,
            MatTabsModule,
            MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCheckboxModule,
            MatSidenavModule,
            MatToolbarModule,
            MatListModule,
            MatCardModule,
            MatSelectModule,
            MatProgressSpinnerModule,
            MatDialogModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule
        ],

    exports: [MatButtonModule,
            MatIconModule,
            MatTabsModule,
            MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCheckboxModule,
            MatSidenavModule,
            MatToolbarModule,
            MatListModule,
            MatCardModule,
            MatSelectModule,
            MatProgressSpinnerModule,
            MatDialogModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule]
})


export class MaterialModule {

}
