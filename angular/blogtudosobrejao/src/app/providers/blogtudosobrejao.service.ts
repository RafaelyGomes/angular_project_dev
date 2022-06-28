// Usado para decorar os serviços Angular
import { Injectable } from '@angular/core';

// informa lodash como _ (comando NPM: npm install --save-dev @types/lodash)
import * as _ from 'lodash';

//Usado para navegar entre rotas
import { Router } from '@angular/router';

//Usado para requisições GET,POST, etc.
import { HttpClientModule } from '@angular/common/http';
import { reject } from 'lodash';


//Declara uma constante base URL
const baseUrl = window.location.href;

//Decora a classe BlogService para ser "injetável" dentro do angular
@Injectable()

//Exporta nossa classe para ser entendida por outros arquivos
export class BlogtudosobrejaoService {

  //Declara uma variavel de escopo global na classe ,como a URL do serviço externo que iremos consumir. Por exemplo: podemos copiar está URL no nosso navegador
  getURL: string= 'http'


  constructor(
    public http: HttpClientModule, //injeta o serviço http do angular
    public router: Router //injeta o serviço do router do anagular
  ) { }


// Pegar a lista de posts
posts () {
  //Retorna uma sentença que quando resolvida irá conter a lista de posts
  return new Promise( ( resolve, reject)) =>  {

    // Utiliza o metódo GET do http que injetamos mais acima,passando como opção a URL que  irá conter nossos posts.Poderia ser qualquer serviço externo que devolve uma lista no formato JSON
    this.http.get(this.getURL).subscribe ((data:any) => {

      //Declara uma variavel local POST
      let post = JSON.parse(data._body);

      // Loop nos posts para criar uma propriedade extra
      posts.map ((post: any, i: any ) => {
        //titulo no formato de slug
        posts[i].titleSlug = _.kebabCase (post.title);

        //Rota deste post
        posts[i].router= '/' + posts[ i ].titleSlug + '/' + posts[ i ].id;

        //URL deste post
        posts [i].url = baseURL + posts[ i ] .router;
      });
      resolve(posts); //Resolva a lista de posts
      }, (err) => {
        reject(err); //Rejeita a sentença com erro
      });
    })
    }
    //pegar um post especifico,passando como parametro o ID do post
    post (id: any) {
      return new Promise ((resolve,reject) => {
        //Pegamos a lista de posts
        this.posts = _.find(posts, (p) => {
          return p.id== id ;
           // Filtramos procurando pelo post específico
        let post = _.find(posts, (p) => {
          return p.id == id;
        });
         // Se tiver post resolve, senão, Rejeita com error page 404
         return post ? resolve(post) : reject('post not found)');
        });
      })
      }
    }
    }

  }
}
}
