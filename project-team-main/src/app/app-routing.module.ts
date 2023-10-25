import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MenuComponent } from './page/menu/menu.component';
import { BlogComponent } from './page/blog/blog.component';
import { GalleryComponent } from './page/gallery/gallery.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'menu', component: MenuComponent},
  {path:'blog', component: BlogComponent},
  {path: 'gallery', component: GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
