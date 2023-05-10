import { Component, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyServiceService } from 'src/app/services/company-service.service';
import { ContactServiceService } from 'src/app/services/contact-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent {
  @Input() entity: any;
  @Input() incomingData: any;
  page = 1;
  pageSize = 5;
  companies: any = [];
  tableData: any = [];
  collectionSize: any;
  dataSource: any = [];
  company = false;
  contact = false;
  user = false;
  currentEntity = '';

  constructor(
    private companyService: CompanyServiceService,
    private contactService: ContactServiceService,
    private userService: UserServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.refreshCountries();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentEntity = changes['entity'].currentValue;
    this.updateEnity();
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe((companies) => {
      if (companies.length > 0) {
        this.company = true;
        this.contact = false;
        this.user = false;
        this.dataSource = companies[0];
        this.tableData = companies[0];
        this.collectionSize = this.dataSource.length;
      }
    });
  }

  getContacts(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      if (contacts.length > 0) {
        this.contact = true;
        this.company = false;
        this.user = false;
        this.dataSource = contacts[0];
        this.tableData = contacts[0];
        this.collectionSize = this.dataSource.length;
      }
    });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      if (users.length > 0) {
        this.user = true;
        this.company = false;
        this.contact = false;
        this.dataSource = users[0];
        this.tableData = users[0];
        this.collectionSize = this.dataSource.length;
      }
    });
  }

  updateEnity() {
    switch (this.currentEntity) {
      case 'Company':
        this.getCompanies();
        break;
      case 'Contact':
        this.getContacts();
        break;
      case 'User':
        this.getUsers();
        break;
      default:
        break;
    }
  }

  refreshCountries() {
    if (this.tableData.length > 0) {
      this.tableData = this.dataSource.slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
    }
  }

  goTo() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
