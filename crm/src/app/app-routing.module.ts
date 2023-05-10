import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CompanyDetailComponent } from './components/pages/company/company-detail/company-detail.component';
import { CompaniesComponent } from './components/pages/company/companies/companies.component';
import { CreateCompanyComponent } from './components/pages/company/create-company/create-company.component';
import { UpdateCompanyComponent } from './components/pages/company/update-company/update-company.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { ContactDetailComponent } from './components/pages/contact/contact-detail/contact-detail.component';
import { ContactsComponent } from './components/pages/contact/contacts/contacts.component';
import { CreateContactComponent } from './components/pages/contact/create-contact/create-contact.component';
import { UpdateContactComponent } from './components/pages/contact/update-contact/update-contact.component';
import { CreateUserComponent } from './components/pages/user/create-user/create-user.component';
import { UpdateUserComponent } from './components/pages/user/update-user/update-user.component';
import { UserDetailComponent } from './components/pages/user/user-detail/user-detail.component';
import { UsersComponent } from './components/pages/user/users/users.component';
import { AppLayoutComponent } from './components/layout/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      { path: 'dashboard', component: HomeComponent },
      { path: 'company/:id', component: CompanyDetailComponent },
      { path: 'companies', component: CompaniesComponent },
      {
        path: 'companies/create',
        component: CreateCompanyComponent,
      },
      {
        path: 'company/update/:id',
        component: UpdateCompanyComponent,
      },

      { path: 'contact/:id', component: ContactDetailComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'contacts/create', component: CreateContactComponent },
      { path: 'contact/update/:id', component: UpdateContactComponent },

      { path: 'user/:id', component: UserDetailComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/create', component: CreateUserComponent },
      { path: 'user/update/:id', component: UpdateUserComponent },
    ],
  },

  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
