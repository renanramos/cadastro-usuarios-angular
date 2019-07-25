import { UserService } from '../service/user.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserUtil {

    posts = []
    albums = []
    photos = []

    constructor(
        private userService: UserService
    ) { }

    /**
     * 
     * @param id 
     * @param callback 
     * 
     * Faz a consulta do total de posts
     * através do id do usuário e retorna o 
     * tamanho do array em callback
     */
    totalDePosts(id: number, callback) {
        this.userService.getAllUserPost(id, (data) => {
            this.posts = data.filter(item => {
                return item.userId === id
            })
            callback(this.posts.length)
        })
    }

    /**
     * 
     * @param id 
     * @param callback 
     * 
     * Consulta o total de posts vinculados
     * ao usuário e informa o resultado 
     * em callback
     * 
     */
    totalDeAlbuns(id: number, callback) {
        this.userService.getAllUserAlbums(id, (data) => {
            this.albums = data.filter(item => {
                return item.userId === id
            })

            callback(this.albums.length)
        })
    }

    /**
     * 
     * @param id 
     * @param callback 
     * 
     * Consulta o total de photos através do Id
     * do usuário. Retorno feito através de callback
     * 
     */
    totalDePhotos(id: number, callback){
        this.userService.getAllUserPhotos(id, (data) => {
            this.photos = data.filter(item => {
                return item.albumId === id
            })

            callback(this.photos.length)
        })
    }
}
