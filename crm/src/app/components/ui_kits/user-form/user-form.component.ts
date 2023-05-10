import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  @Input() action: any;
  currentAction = 'Create';
  isChecked = false;
  id: any;
  contact: any;
  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.currentAction = changes['action'].currentValue;
    this.updateForm();
  }

  user: any = {
    name: 'Nancy',
    password: 'Drew',
    role: 'user',
    permissions: ['Manage Users','Manage Companies'],
  };
  options = [
    { text: 'One', val: 'user' },
    { text: 'One', val: 'admin' },
  ];

  permissionsData: any = [
    { permission: 'Manage Users', status: false },
    { permission: 'Manage Companies', status: false },
    { permission: 'Manage Contacts', status: false },
  ];

  userForm: any = this.fb.group({
    name: [''],
    password: [''],
    email: [''],
    role: [''],
    permissions: this.fb.array([]),
  });

  changeStatus(e: any) {
    const selected = this.userForm.controls['permissions'] as FormArray;
    console.log(selected);

    if (e.target.checked) {
      selected.push(new FormControl(e.target.value));
    } else {
      const index = selected.controls.findIndex(
        (x) => x.value === e.target.value
      );
      selected.removeAt(index);
    }
  }

  updateUser(data: any) {
    this.userService.updateUser(data, this.id).subscribe((item) => {
      console.log(item);
    });
  }

  addUser(data: any) {
    this.userService.addUser(data).subscribe((item) => {
      console.log(item);
    });
  }

  getDetailUser(id: any) {
    this.userService.getUser(id).subscribe((item) => {
      // this.USer=item;

      this.userForm.patchValue(item);
    });
  }

  updateForm() {
    if (this.currentAction == 'Update') {
      // this.route.paramMap.subscribe((params: ParamMap) => {
      //   this.id = params.get('id');
      //   this.getDetailUser(this.id);
      // });
      let formattedData = {
        name: this.user.name,
        password: this.user.password,
        phone: this.user.phone,
        email: this.user.email,
        role: this.user.role,
      };
      const selected = this.userForm.controls['permissions'] as FormArray;
      this.userForm.patchValue(formattedData);
      let permissions = this.user.permissions;
      permissions.forEach((item: any) => {
        console.log(this.permissionsData.filter((ele: { permission: any; })=>ele.permission==item));

      this.permissionsData.filter((ele: { permission: any; })=>ele.permission==item)[0].status=true;
      });
    }
  }

  onSubmit() {
    if (this.currentAction == 'Update') {
      console.log(this.userForm.value);

      this.updateUser(this.userForm.value);
    } else {
      console.log(this.userForm.value);
      this.addUser(this.userForm.value);
    }
  }
}
