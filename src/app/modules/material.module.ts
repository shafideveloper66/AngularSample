import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  exports: [
    
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatGridListModule,

  ]
})
export class AddMaterialModule {}


/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */