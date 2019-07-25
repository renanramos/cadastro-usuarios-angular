import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/entity/user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup
  isSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {

    /**
     * Inicializa as variáveis do formulário
     */
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required]
    })
  }

  /**
   * Obtém o conteúdo dos campos existentes no form
   */
  get usersForm() {
    return this.userForm.controls;
  }

  /**
   * Ao submeter o formulário é realizada uma nova inclusão na tabela.
   */
  onSubmit() {
    this.isSubmitted = true;

    if (this.userForm.invalid === true) {
      return;
    } else {
      //cria novo objeto user      
      
      let newUser = {
        username: this.usersForm.username.value,
        name: this.usersForm.name.value,
        email: this.usersForm.email.value,
        address: {
          street: '',
          suite: '',
          city: this.usersForm.city.value,
          zipcode: '',
          geo: {
            lat: '',
            lng: ''
          }
        },
        totalPosts: 0,
        totalAlbuns: 0,
        totalPhotos: 0
      }

      /**
       * Função responsável por atualizar a tabela
       */
      this.userService.addNewUser(newUser)  

      //reseta os campos do formulário
      this.userForm.reset()
    }


  }

}
