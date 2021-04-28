import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

const matModule = [
  MatGridListModule,MatMenuModule,MatButtonModule,MatSliderModule,MatIconModule,MatDividerModule,MatSidenavModule,
  MatListModule,MatToolbarModule,MatTableModule
]


@NgModule({
  declarations: [],
  imports: [
    matModule
  ],
  exports : [
    matModule
  ]

})
export class MaterialModule { }
