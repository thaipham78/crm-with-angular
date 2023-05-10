import { Component } from '@angular/core';
import { CompanyServiceService } from 'src/app/services/company-service.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent {
  companies: any[] = [];
  constructor(private companyService: CompanyServiceService) {}

  ngOnInit(): void {
    this.getCompanies();
    console.log(this.companies);
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe((companies) => {
      if (companies.length > 0) {
        console.log(companies);
        this.companies = companies;
      }
    });
    console.log(this.companies);
  }
}
