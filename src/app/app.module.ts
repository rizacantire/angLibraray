import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { NaviComponent } from './components/grid/navi/navi.component';
import { SideBarComponent } from './components/grid/side-bar/side-bar.component';
import { MainComponent } from './components/grid/main/main.component';
import { FooterComponent } from './components/grid/footer/footer.component';
import { BooksComponent } from './components/pages/books/books.component';
import { CategoryComponent } from './components/pages/category/category.component';
import { LibraryComponent } from './components/pages/library/library.component';
import { ReadsComponent } from './components/pages/reads/reads.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { NotreadComponent } from './components/pages/notread/notread.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    SideBarComponent,
    MainComponent,
    FooterComponent,
    BooksComponent,
    CategoryComponent,
    LibraryComponent,
    ReadsComponent,
    ShopComponent,
    NotreadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
