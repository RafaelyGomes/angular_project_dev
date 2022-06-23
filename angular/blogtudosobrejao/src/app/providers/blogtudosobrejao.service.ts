// Usado para decorar os serviços Angular
import { Injectable } from '@angular/core';

// informa lodash como _ (comando NPM: npm install --save-dev @types/lodash)
import * as _ from 'lodash';

//Usado para navegar entre rotas
import { Router } from '@angular/router';

//Usado para requisições GET,POST, etc.
import { HttpClientModule } from '@angular/common/http';


//Declara uma constante base URL
const baseUrl = window.location.href;

//Decora a classe BlogService para ser "injetável" dentro do angular
@Injectable()

//Exporta nossa classe para ser entendida por outros arquivos
export class BlogService {

  //Declara uma variavel de escopo global na classe ,como a URL do serviço externo que iremos consumir. Por exemplo: podemos copiar está URL no nosso navegador
  getURL: string= 'http://jsonplaceholder.typecode.com/post'

  constructor(
    public http: HttpClientModule, //injeta o serviço http do angular
    public router: Router //injeta o serviço do router do anagular
  )
} ()

@Injectable({
  providedIn: 'root'
})
export class BlogtudosobrejaoService {

  constructor() { }
}
