import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatMenuModule
  ],
  exports:[
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
