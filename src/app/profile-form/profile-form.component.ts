import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  constructor() { }

  // name=new FormControl()

  profileFormGroup=new FormGroup(
    {
      name:new FormControl('',[Validators.required,Validators.minLength(5)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(30)]),
    }
  )

  ngOnInit(): void {
  }

  get name(){
    return this.profileFormGroup.get('name') as FormControl
  }

  get email(){
    return this.profileFormGroup.get('email') as FormControl
  }

  get age(){
    return this.profileFormGroup.get('age') as FormControl
  }

  collectData(){
    const uname=this.profileFormGroup.value.name
    const uemail=this.profileFormGroup.value.email
    const uage=this.profileFormGroup.value.age
    console.log(uname+""+uemail+""+uage)
  }
}
