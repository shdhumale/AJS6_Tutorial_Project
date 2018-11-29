
import { RouterModule, CanActivate } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      AdminComponent,
      LogoutComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      RouterModule.forRoot(
        [
          {
            path:'login',
            component:LoginComponent
          },
          {
            path:'admin',
            component:AdminComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'logout',
            component: LogoutComponent
          },
          {
            path:'',
            component:HomeComponent
          }

        ]
      )      
   ],
   providers: [ AuthService, AuthGuard],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
