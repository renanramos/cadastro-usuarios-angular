import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entity/user';
import { Post } from '../entity/post';
import { Album } from '../entity/album';
import { Photo } from '../entity/photo';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * Endpoints utilizados na aplicação
   */
  private baseUrlUsers = 'https://jsonplaceholder.typicode.com/users'
  private baseUrlUserPost = 'https://jsonplaceholder.typicode.com/posts'
  private baseUrlUserAlbums = 'https://jsonplaceholder.typicode.com/albums'
  private baseUrlUserPhotos = 'https://jsonplaceholder.typicode.com/photos'

  // instância Subject
  private incluiUsuario = new Subject<any>();
  
  constructor(
    private http: HttpClient
  ) { }

  // cria variável como observable do método
  incluiUsuario$ = this.incluiUsuario.asObservable();

  addNewUser(user: any){
    this.incluiUsuario.next(user);
  }

  /**
   * @param callback 
   * 
   * retorna a lista de usuários como callback
   */
  getAllUsers(callback) {
    return this.http.get<User>(this.baseUrlUsers).subscribe((data) => {
      callback(data)
    })
  }

  /**
   * @param id 
   * @param callback 
   * 
   * Através do id do usuário, é feita a consulta de posts
   * do usuário
   */
  getAllUserPost(id: number, callback) {
    return this.http.get<Post>(this.baseUrlUserPost).subscribe((data) => {
      callback(data)
    })
  }

  /**
   * @param id 
   * @param callback 
   * 
   * Busca todos os albuns do usuário através do id
   */
  getAllUserAlbums(id: number, callback) {
    return this.http.get<Album>(this.baseUrlUserAlbums).subscribe((data) => {
      callback(data)
    })
  }

  /**
   * @param id 
   * @param callback 
   * 
   * Busca todas as fotos do usuário através do id
   */
  getAllUserPhotos(id: number, callback) {
    return this.http.get<Photo>(this.baseUrlUserPhotos).subscribe((data) => {
      callback(data)
    })
  }

}
