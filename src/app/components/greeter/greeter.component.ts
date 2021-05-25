import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { greeterDto } from 'src/app/models/greeterDto';
import { GreeterServiceService } from 'src/app/services/greeter-service.service';
import { greeterResponse } from 'src/app/models/greeterResponse';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private greeterService: GreeterServiceService) {
    this.form = this.formBuilder.group({
      idiom: ['', Validators.required],
      name: ['',[Validators.required]]
    })
   }

   response = "";

  ngOnInit(): void {
  }

  greet(){
    const greeters : greeterDto = {
      name : this.form.get('name')?.value as string,
      idiom : this.form.get('idiom')?.value as string,
    }
    this.greeterService.greetRequest(greeters).subscribe(data => {
      console.log('Se ah realizado el saludo');
      this.response = data.response;
      console.log(data.response);
      this.form.reset();
    });
  }

  nameGreet(){
    const greeters : greeterDto = {
      name : this.form.get('name')?.value as string,
      idiom : this.form.get('idiom')?.value as string,
    }
    this.greeterService.NameRequest(greeters).subscribe(data => {
      console.log('Se ah realizado la petición del nombre');
      console.log(data.response);
      this.response = data.response;
      this.form.reset();
    });
  }

  sayGoodBye(){
    const greeters : greeterDto = {
      name : this.form.get('name')?.value as string,
      idiom : this.form.get('idiom')?.value as string,
    }
    this.greeterService.sayGoodByeRequest(greeters).subscribe(data => {
      console.log('Se ah despedido');
      console.log(data.response);
      this.response = data.response;
      this.form.reset();
    });
  }
}
