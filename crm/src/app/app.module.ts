import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompaniesComponent } from './components/pages/company/companies/companies.component';
import { CompanyDetailComponent } from './components/pages/company/company-detail/company-detail.component';
import { CreateCompanyComponent } from './components/pages/company/create-company/create-company.component';
import { UpdateCompanyComponent } from './components/pages/company/update-company/update-company.component';
import { ContactsComponent } from './components/pages/contact/contacts/contacts.component';
import { ContactDetailComponent } from './components/pages/contact/contact-detail/contact-detail.component';
import { CreateContactComponent } from './components/pages/contact/create-contact/create-contact.component';
import { UpdateContactComponent } from './components/pages/contact/update-contact/update-contact.component';
import { UsersComponent } from './components/pages/user/users/users.component';
import { UserDetailComponent } from './components/pages/user/user-detail/user-detail.component';
import { CreateUserComponent } from './components/pages/user/create-user/create-user.component';
import { UpdateUserComponent } from './components/pages/user/update-user/update-user.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { SideBarComponent } from './components/ui_kits/shared/side-bar/side-bar.component';
import { NavBarComponent } from './components/ui_kits/shared/nav-bar/nav-bar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CompanyFormComponent } from './components/ui_kits/company-form/company-form.component';
import { UserFormComponent } from './components/ui_kits/user-form/user-form.component';
import { ContactFormComponent } from './components/ui_kits/contact-form/contact-form.component';
import { ListViewComponent } from './components/ui_kits/list-view/list-view.component';
import { DetailViewComponent } from './components/ui_kits/detail-view/detail-view.component';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AppLayoutComponent } from './components/layout/app-layout/app-layout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompanyDetailComponent,
    CreateCompanyComponent,
    UpdateCompanyComponent,
    ContactsComponent,
    ContactDetailComponent,
    CreateContactComponent,
    UpdateContactComponent,
    UsersComponent,
    UserDetailComponent,
    CreateUserComponent,
    UpdateUserComponent,
    LoginComponent,
    PageNotFoundComponent,
    SideBarComponent,
    NavBarComponent,
    HomeComponent,
    CompanyFormComponent,
    UserFormComponent,
    ContactFormComponent,
    ListViewComponent,
    DetailViewComponent,
    AppLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DecimalPipe,
    NgFor,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
