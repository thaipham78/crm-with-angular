import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContactServiceService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  @Input() action: any;
  currentAction = '';
  id: any;
  contact: any;
  constructor(
    private fb: FormBuilder,
    private contactService: ContactServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.currentAction = changes['action'].currentValue;
    console.log(this.currentAction);
    this.updateForm();
  }

  contactForm = this.fb.group({
    first_name: [''],
    last_name: [''],
    phone: [''],
    email: [''],
    company_id: [''],
  });

  options = [
    { text: 'One', val: '1' },
    { text: 'Two', val: '2' },
    { text: 'Three', val: '3' },
  ];

  changeCompany(e: any) {
    this.contactForm.get('company_id')?.setValue(e.target.value);
  }

  updateContact(data: any) {
    this.contactService.updateContact(data, this.id).subscribe((item) => {
      console.log(item);
    });
  }

  addContact(data: any) {
    this.contactService.addContact(data).subscribe((item) => {
      console.log(item);
    });
  }

  getContactDetail(id: any) {
    this.contactService.getContact(id).subscribe((item) => {
      this.contactForm.patchValue(item);
    });
  }

  updateForm() {
    if (this.currentAction == 'Update') {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = params.get('id');
        this.getContactDetail(this.id);
      });
    }
  }

  onSubmit() {
    if (this.currentAction == 'Update') {
      // console.log(this.contactForm.value);
      this.updateContact(this.contactForm.value);
    } else {
      // console.log(this.contactForm);
      this.addContact(this.contactForm.value);
    }
  }
}
