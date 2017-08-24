import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "app/register/register.component";
import { LoginComponent } from "app/login/login.component";

const routes: Routes = [
    // { path: '', component: login },
    { path: '', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];

export const MyRoutingModule = RouterModule.forRoot(routes);
