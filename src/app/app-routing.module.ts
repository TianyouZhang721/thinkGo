// tslint:disable-next-line:import-spacing
import { RouterModule, Routes }   from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NavigationComponent } from './home/navigation/navigation.component';

import { NgModule } from '@angular/core';
import { DesignerListComponent } from './components/designer/designer-list/designer-list.component';
import { SheSayListComponent } from './components/she-say/she-say-list/she-say-list.component';
import { ShopHomeComponent } from './components/shop-home/shop-home/shop-home.component';
import { MyInfoComponent } from './components/my-info/my-info/my-info.component';
import { LoginInputComponent } from './components/login-input/login-input/login-input.component';
import { HomePicComponent } from './home/home-pic/home-pic.component';
import { HomeShoppingComponent } from './home/home-shopping/home-shopping.component';
import { ProductIntroComponent } from './components/product-intro/product-intro.component';
import { ShopHomeListComponent} from './components/shop-home/shop-home-list/shop-home-list.component';
import { DesignersComponent } from './components/designer/designers/designers.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        component: NavigationComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent
          },
        ]
      },
    {
      path: 'home-pic/:id',
      component: HomePicComponent
    },
    {
      path: 'designer-list',
      component: DesignerListComponent
    },
    {
      path: 'shesay-list',
      component: SheSayListComponent
    },
    {
      path: 'shop-home',
      component:ShopHomeComponent
    },
    {
      path: 'my-info',
      component: MyInfoComponent
    },
    {
      path: 'login-input',
      component : LoginInputComponent
    },
    {
      path: 'shop-home-list',
      component : ShopHomeListComponent
    },
    {
      path: 'designers/:title',
      component: DesignersComponent
    },
    {
      path: 'home-shopping',
      component : HomeShoppingComponent
    },{
      path: 'product-intro',
      component :ProductIntroComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
