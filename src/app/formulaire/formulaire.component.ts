import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../User/user'
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {

   username = new FormControl('');
   newUser! : User;

   constructor(private fb: FormBuilder) { }

   profileForm = this.fb.group({
    name: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],
    adresse: ['',Validators.required]
  })



 inscription() {
    if (this.profileForm.valid) {
      const name = this.profileForm.value.name;
      const email = this.profileForm.value.email;
      const password = this.profileForm.value.password;
      const adresse = this.profileForm.value.adresse ;
    
      this.newUser = new User(name, email,password,adresse);
      console.log('nouveau User', this.newUser); // Vérification dans la console
      
      // Effectuer d'autres opérations avec le nouvel utilisateur, comme l'envoyer au serveur, etc.
    }
  }
  

}