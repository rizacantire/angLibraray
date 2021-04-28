import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/grid/main/main.component';
import { BooksComponent } from './components/pages/books/books.component';
import { LibraryComponent } from './components/pages/library/library.component';
import { NotreadComponent } from './components/pages/notread/notread.component';
import { ReadsComponent } from './components/pages/reads/reads.component';
import { ShopComponent } from './components/pages/shop/shop.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"kitaplar", component:BooksComponent},
  {path:"okunan", component:ReadsComponent},
  {path:"satin-alma-listesi", component:ShopComponent},
  {path:"okumadiklarim", component:NotreadComponent},
  {path:"kitaplik", component:LibraryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
