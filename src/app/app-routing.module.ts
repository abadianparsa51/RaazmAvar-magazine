import { AuthGuardGuard } from './services/auth-guard.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {
    path: 'post/display/:id',
    loadChildren: './article/article.module#ArticlePageModule'
  },
  {
    path: 'videolist',
    canActivate: [AuthGuardGuard],
    loadChildren: './videolist/videolist.module#VideolistPageModule'
  },
  {
    path: 'videos/display/:id',
    canActivate: [AuthGuardGuard],
    loadChildren: './videos/videos.module#VideosPageModule'
  },
  {
    path: 'live/video/:id',
    canActivate: [AuthGuardGuard],
    loadChildren: './live/live.module#LivePageModule'
  },
  {
    path: 'gymlist',
    loadChildren: './gymlist/gymlist.module#GymlistPageModule'
  },
  {
    path: 'gyms/display/:id',
    loadChildren: './gympage/gympage.module#GympagePageModule'
  },
  {
    path: 'coach-list',
    loadChildren: './coach-list/coach-list.module#CoachListPageModule'
  },
  {
    path: 'trainer/display/:id',
    loadChildren: './coachpage/coachpage.module#CoachpagePageModule'
  },
  {
    path: 'newslist',
    loadChildren: './newslist/newslist.module#NewslistPageModule'
  },
  {
    path: 'newspaperlist',
    canActivate: [AuthGuardGuard],
    loadChildren: './newspaperlist/newspaperlist.module#NewspaperlistPageModule'
  },

  {
    path: 'authentication',
    loadChildren:
      './authentication/authentication.module#AuthenticationPageModule'
  },
  {
    path: 'profile',
    canActivate: [AuthGuardGuard],
    loadChildren: './profile/profile.module#ProfilePageModule'
  },
  {
    path: 'offline-videoslist',
    loadChildren:
      './offline-videoslist/offline-videoslist.module#OfflineVideoslistPageModule'
  },

  {
    path: 'fave',
    canActivate: [AuthGuardGuard],
    loadChildren: './profile/fave/fave.module#FavePageModule'
  },
  {
    path: 'messages',
    canActivate: [AuthGuardGuard],
    loadChildren: './profile/messages/messages.module#MessagesPageModule'
  },
  {
    path: 'edit',
    canActivate: [AuthGuardGuard],
    loadChildren: './profile/edit/edit.module#EditPageModule'
  },
  {
    path: 'shop',
    canActivate: [AuthGuardGuard],
    loadChildren: './shop/shop.module#ShopPageModule'
  },
  // {
  //   path: 'shop/display/:id',
  //   loadChildren: './shop-page/shop-page.module#ShopPagePageModule'
  // },
  { path: 'shop-products', loadChildren: './shop-products/shop-products.module#ShopProductsPageModule' },
  { path: 'shop-address', loadChildren: './shop-address/shop-address.module#ShopAddressPageModule' },
  { path: 'shop-add-address', loadChildren: './shop-add-address/shop-add-address.module#ShopAddAddressPageModule' },
  { path: 'shop-final', loadChildren: './shop-final/shop-final.module#ShopFinalPageModule' },
  { path: 'shop-inside', loadChildren: './shop-inside/shop-inside.module#ShopInsidePageModule' },
  { path: 'video-frame', loadChildren: './video-frame/video-frame.module#VideoFramePageModule' },
  { path: 'shop-page', loadChildren: './shop-page/shop-page.module#ShopPagePageModule' },


  // { path: '**', loadChildren: './notfound/notfound.module#NotfoundPageModule' },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
