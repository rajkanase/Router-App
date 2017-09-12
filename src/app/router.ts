import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "app/register/register.component";
import { LoginComponent } from "app/login/login.component";
import { ForgotPassComponent } from "app/forgot-pass/forgot-pass.component";
import { DashComponent } from "app/dash/dash.component";

const routes: Routes = [
    // { path: '', component: login },
    { path: '', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    {path:'login/forpass', component : ForgotPassComponent},
    {path:'dash/:usNm', component:DashComponent}
];

export const MyRoutingModule = RouterModule.forRoot(routes);
