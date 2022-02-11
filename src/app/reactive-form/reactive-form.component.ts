// import { Component, OnInit } from '@angular/core';
// import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { ConfirmPasswordValidator } from '../confirmPassword.validator';
// import { ForbiddenNameValidator } from '../userrName.validator';

// @Component({
//   selector: 'app-reactive-form',
//   templateUrl: './reactive-form.component.html',
//   styleUrls: ['./reactive-form.component.scss']
// })
// export class ReactiveFormComponent implements OnInit {


//   constructor(private fb:FormBuilder) { }
//   registerationForm=this.fb.group({
//     userName:['',[Validators.required,Validators.minLength(3),ForbiddenNameValidator(/super admin/)]],
//     password:[''],
//     confirmPassword:[''],
//     email:[''],
//     subscribe:[false],
//     alternativeEmails:this.fb.array([]),
//     address:this.fb.group({
//        city:[''],
//        state:[''],
//        postalCode:['']
//     })
//   },{validator:[ConfirmPasswordValidator]}
//   );

//   get aleternativeEmails()
//   {
//     return this.registerationForm.get("alternativeEmails") as FormArray;
//   }

//   addAlternativeEmail()
//   {
//     this.aleternativeEmails.push(this.fb.control(""))
//   }
//   get userName()
//   {
//     return this.registerationForm.get('userName');
//   }

//   get email()
//   {
//     return this.registerationForm.get('email');
//   }

//   setEmailValidation()
//   {
//     this.registerationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
//       if(checkedValue)
//       {
//         this.email?.setValidators(Validators.required)
//       }
//       else
//       {
//         this.email?.clearValidators();
//       }
//       this.email?.updateValueAndValidity();
//     })
//   }


//   ngOnInit(): void {
//   }

//   loadAPIData()
//   {
//     // this.registerationForm.setValue({
//     //   userName:'ITI',
//     //   password:'123',
//     //   confirmPassword:'123',
//     //   address:{
//     //     city:'Assiut',
//     //     state:'Egypt',
//     //     postalCode:'71111'

//     //   }
//     // })
//     this.registerationForm.patchValue({
//       userName:'ITI',
//       address:{
//         city:'Assiut',
//         state:'Egypt',
//         postalCode:'71111'

//       }
//     })
//   }


// }
