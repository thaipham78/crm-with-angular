import { Component, Input, SimpleChanges } from '@angular/core';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CompanyServiceService } from 'src/app/services/company-service.service';
import { ContactServiceService } from 'src/app/services/contact-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent {
  @Input() entity: any;
  id: any;
  currentEntity = '';
  dataSource: any = [];
  detailData: any;
  currentUrl = '';
  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyServiceService,
    private contactService: ContactServiceService,
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.updateEnity();
  }

  getCompanyDetail(id: any) {
    this.companyService.getCompany(id).subscribe((item) => {
      if (item) {
        this.detailData = Object.entries(item);
        this.currentUrl = '/company';
      }
    });
  }
  getContactDetail(id: any) {
    this.contactService.getContact(id).subscribe((item) => {
      if (item) {
        this.detailData = Object.entries(item);
        this.currentUrl = '/contact';
      }
    });
  }
  getUserDetail(id: any) {
    this.userService.getUser(id).subscribe((item) => {
      if (item) {
        this.detailData = Object.entries(item);
        this.currentUrl = '/user';
      }
    });
  }
  updateEnity() {
    switch (this.currentEntity) {
      case 'Company':
        this.getCompanyDetail(this.id);
        break;
      case 'Contact':
        this.getContactDetail(this.id);
        break;
      case 'User':
        this.getUserDetail(this.id);
        break;
      default:
        break;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentEntity = changes['entity'].currentValue;
    this.updateEnity();
  }

  goTo() {
    this.router.navigate([this.currentUrl + '/update/', this.id]);
  }
}
