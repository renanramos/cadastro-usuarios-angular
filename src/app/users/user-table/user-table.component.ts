import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/entity/user';
import { UserUtil } from 'src/app/util/user-util';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  users = []
  posts = []
  albuns = []
  photos = []
  search = ''
  subscription: Subscription;

  ngOnInit() {
    this.carregaUsuariosTabela();    
  }

  constructor(
    private userService: UserService,
    private util: UserUtil
  ) {
    //inclui o novo usuário ao final da tabela    
    this.subscription = userService.incluiUsuario$.subscribe(
      user => {
        if (user) {
          this.users.push(user)
        }
      }
    )
  }

  /**
   * Inicializa a tabela principal da página,
   * carregando os usuários 
   */
  carregaUsuariosTabela() {
    this.userService.getAllUsers((data) => {
      this.users = data;
      /**
       * Percorre os itens do array para o
       * calculo de totalizadores (post, album e photos)
       */
      this.users.forEach(user => this.carregaTotalDeItens(user))
    })
  }

  /**
   * 
   * @param user 
   * 
   * Recebe o objeto user para
   * que seja feita a totalização dos atributos 
   * da página.
   */
  carregaTotalDeItens(user: User) {

    this.util.totalDePosts(user.id, (total) => {
      user.totalPosts = total
    })

    this.util.totalDeAlbuns(user.id, (total) => {
      user.totalAlbuns = total
    })

    this.util.totalDePhotos(user.id, (total) => {
      user.totalPhotos = total
    })
  }

  /**
   * @param i 
   * 
   * remove usuario da tabela
   */
  deleteUser(i: number){
    this.users.splice(i,1)
  }

}
