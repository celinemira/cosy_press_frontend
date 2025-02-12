import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {UserService} from "../../services/user.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  private formBuilder = inject(FormBuilder);
  private userService = inject(UserService);

  registerForm = this.formBuilder.group({
    nom: '',
    prenom: '',
    adresse: '',
    code_postal: '',
    ville: '',
    telephone: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  onSubmit(): void {
    let data = this.registerForm.value;

    this.userService.createUser({
      "email": data.email,
      "plainPassword": data.password,
      "name": data.nom,
      "firstname": data.prenom,
      "adress": data.adresse,
      "city": data.ville,
      "postal_code": data.code_postal
    }).subscribe(data => {
      console.log(data);
    });
    console.log('test');
    //this.registerForm.reset();
  }
}
