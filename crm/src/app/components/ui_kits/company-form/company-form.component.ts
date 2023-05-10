import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CompanyServiceService } from 'src/app/services/company-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css'],
})
export class CompanyFormComponent {
  @Input() action: any;
  currentAction = '';
  id: any;
  company: any;
  constructor(
    private fb: FormBuilder,
    private companyService: CompanyServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.currentAction = changes['action'].currentValue;
    this.updateForm();
  }

  companyForm = this.fb.group({
    name: [''],
    phone: [''],
    email: [''],
  });

  updateCompany(data: any) {
    this.companyService.updateCompany(data, this.id).subscribe((item) => {
      console.log(item);
    });
  }

  addCompany(data: any) {
    this.companyService.addCompany(data).subscribe((item) => {
      console.log(item);
    });
  }

  getCompanyDetail(id: any) {
    this.companyService.getCompany(id).subscribe((item) => {
      this.companyForm.patchValue(item);
    });
  }

  updateForm() {
    if (this.currentAction == 'Update') {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = params.get('id');
        this.getCompanyDetail(this.id);
      });
    }
  }

  onSubmit() {
    if (this.currentAction == 'Update') {
      this.updateCompany(this.companyForm.value);
    } else {
      this.addCompany(this.companyForm.value);
    }
  }
}
