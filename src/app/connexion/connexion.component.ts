import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import CryptoJS from 'crypto-js';
import {environment} from "../../environments/environment";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  loginObject: any = {
    "email": "",
    "password": ""
  };

  router = inject(Router);
  auth_service = inject(AuthService);

  encriptData(data: any) {
    return CryptoJS.AES.encrypt(data, environment.ENCODING_KEY).toString();
  }

  onLogin() {
    this.auth_service.login(this.loginObject.email, this.loginObject.password).subscribe(
      (data: any) => {
        if (this.auth_service.isLoggedIn()) {
          this.router.navigate(['/user']);
        } else {
          alert('erreur de connexion')
        }
        console.log(data);
        console.log(localStorage.getItem('jwt'));
      });
  }
}
