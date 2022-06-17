import {Component, ElementRef, OnInit} from '@angular/core';
import {AnimalModel} from '../../model/animalsModel';
import {Router} from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    // Lista de los 8 animales galapagueños
    lista: AnimalModel[] = [
        {id: 'Tortuga_gigante_de_Santa_Cruz', nombre: 'Tortuga Gigante de Santa Cruz',
            foto: 'https://embed.smartframe.io/s/9ea8092d716b95599a3c5e8fc350ffb8/00573086.html?source=aHR0cDovL2xvY2FsaG9zdDo0MjAwL2FuaW1hbA..#0', categoria: 'reptil', categoriaName: 'Reptil', urlSafe: '', isMindenPictures: true, isAnotherImage: false},
        {id: 'Pinguino_de_galapagos', nombre: 'Pingüino de Galápagos',
            foto: 'https://embed.smartframe.io/s/9ea8092d716b95599a3c5e8fc350ffb8/00599607.html?source=aHR0cDovL2xvY2FsaG9zdDo0MjAwL2FuaW1hbA..#0', categoria: 'ave', categoriaName: 'Ave', urlSafe: '', isMindenPictures: true, isAnotherImage: false},
        {id: 'Lobo_marino_de_galapagos', nombre: 'Lobo marino de Galápagos',
            foto: 'https://embed.smartframe.io/s/9ea8092d716b95599a3c5e8fc350ffb8/00536777.html?source=aHR0cDovL2xvY2FsaG9zdDo0MjAwL2FuaW1hbA..#0', categoria: 'mamifero', categoriaName: 'Mamífero', urlSafe: '', isMindenPictures: true, isAnotherImage: false},
        {id: 'Flamencos_de_galapagos', nombre: 'Flamencos de Galápagos',
            foto: 'https://embed.smartframe.io/s/9ea8092d716b95599a3c5e8fc350ffb8/00480068.html?source=aHR0cDovL2xvY2FsaG9zdDo0MjAwL2FuaW1hbA..#0', categoria: 'ave', categoriaName: 'Ave', urlSafe: '', isMindenPictures: true, isAnotherImage: false},
        {id: 'Iguana_marina_de_Galapagos', nombre: 'Iguana Marina de Galápagos',
            foto: 'https://embed.smartframe.io/s/9ea8092d716b95599a3c5e8fc350ffb8/00141054.html?source=aHR0cDovL2xvY2FsaG9zdDo0MjAwL2FuaW1hbA..#0', categoria: 'reptil', categoriaName: 'Reptil',  urlSafe: '', isMindenPictures: true, isAnotherImage: false},
        // tslint:disable-next-line:max-line-length
        {id: 'Murcielago_rojo', nombre: 'Murciélago rojo', foto: 'https://www.quasarex.com/wp-content/uploads/2021/03/red-bat-galapagos.jpg', categoria: 'mamifero', categoriaName: 'Mamífero', urlSafe: '',  isMindenPictures: false, isAnotherImage: true},
        {id: 'Tiburon_martillo', nombre: 'Tiburón martillo',
            foto: 'https://embed.smartframe.io/s/9ea8092d716b95599a3c5e8fc350ffb8/00154155.html?source=aHR0cDovL2xvY2FsaG9zdDo0MjAwL2FuaW1hbA..#0', categoria: 'vidaMarina', categoriaName: 'Vida Marina', urlSafe: '',  isMindenPictures: true, isAnotherImage: false},
        // tslint:disable-next-line:max-line-length
        {id: 'Langosta', nombre: 'Langosta roja', foto: 'https://inaturalist-open-data.s3.amazonaws.com/photos/176817298/large.jpeg', categoria: 'vidaMarina', categoriaName: 'Vida Marina', urlSafe: '',  isMindenPictures: false, isAnotherImage: true},
    ];
    listaAux: AnimalModel[] = this.lista;
    // Variables para controlar  la paginación y el número de elementos por página
    numPage = 1;
    numPages = 2;
    numElements = 6;
    indexInicial = 0;
    indexFinal = 6;
    pageSlice = this.listaAux.slice(0, 6);
    maxpage = 2;
    constructor(private elementRef: ElementRef, private router: Router, public sanitizer: DomSanitizer) { }
    ngOnInit() {
        this.updateSrc();
        this.onChangeNumberPages();
        this.onButtonVisibility();
    }
    updateSrc() {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.lista.length; i++) {
            this.lista[i].urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.lista[i].foto);
        }
    }

    // Funciones para moverse en la botonera de paginación
    OnPageChange(event: number){
        this.numPage = event;
        this.indexInicial = (this.numPage - 1) + (this.numElements - 1) * (this.numPage - 1);
        this.indexFinal = this.indexInicial + this.numElements;
        this.pageSlice = this.listaAux.slice(this.indexInicial, this.indexFinal);
    }
    onNextPage(){
        if (this.numPage < this.maxpage){
            this.numPage = this.numPage + 1;
            this.OnPageChange(this.numPage);
        }
    }
    onPrevPage(){
        if (this.numPage > 1){
            this.numPage = this.numPage - 1;
            this.OnPageChange(this.numPage);
        }
    }
    // Función para redigirse al detalle del animal
    onReadMore(item){
        this.router.navigate(['/animal', item.id]);
    }
    // Función para hacer aparecer y desaparecer los 3 botones numéricos de la botonera
    onButtonVisibility(){
        const visFirstButton = document.getElementById('firstButton');
        const visSecondtButton = document.getElementById('secondButton');
        const visThirdButton = document.getElementById('thirdButton');
        switch (this.numPages){
            case 1: {
                visFirstButton.style.display = 'inline-block';
                visSecondtButton.style.display = 'none';
                visThirdButton.style.display = 'none';
                break;
            }
            case 2: {
                visFirstButton.style.display = 'inline-block';
                visSecondtButton.style.display = 'inline-block';
                visThirdButton.style.display = 'none';
                break;
            }
            case 3: {
                visFirstButton.style.display = 'inline-block';
                visSecondtButton.style.display = 'inline-block';
                visThirdButton.style.display = 'inline-block';
                break;
            }
        }

    }
    // Función que permite actulizar el numero de paginas de acuerdo a la cantidad de elementos de la lista auxiliar
    onChangeNumberPages() {
        const a = this.listaAux.length / this.numElements;
        const b = this.listaAux.length % this.numElements;
        let numButtons = Math.trunc(a);
        if (b !== 0 ){
            numButtons += 1;
        }
        this.numPages = numButtons;
        this.maxpage = numButtons;
    }
    // Función para actualizar la lista auxiliar de acuerdo a la botonera de filtro por categoría y actualizar el buble del html
    onChangeCategory(categoria)
    {
        switch (categoria){
            case 'todas': {
                this.listaAux = this.lista;
                break;
            }
            case 'reptil': {
                this.OnSearchCategory('reptil');
                break;
            }
            case 'ave': {
                this.OnSearchCategory('ave');
                break;
            }
            case 'vidaMarina': {
                this.OnSearchCategory('vidaMarina');
                break;
            }
            case 'mamifero': {
                this.OnSearchCategory('mamifero');
                break;
            }
        }
        this.onChangeNumberPages();
        this.onButtonVisibility();
        this.pageSlice = this.listaAux.slice(0, 6);
    }
    // Actualiza la lista auxiliar de acuerdo a la categoría
    OnSearchCategory(categoria){
        const listaAux: AnimalModel[] = [];
        let animal: AnimalModel;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.lista.length; i++) {
            animal = this.lista[i];
            if (animal.categoria === categoria){
                listaAux.push(animal);
            }
        }
        this.listaAux = listaAux;
        console.log(this.listaAux);
    }
    public loadScript({id, url}) {
        return new Promise((resolve, reject) => {
            if (id && document.getElementById(id)) {
                resolve({id, loaded: true, status: 'Already Loaded'});
            }
            const body =  document.body;
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.innerHTML = '';
            script.src = url;
            script.id = id;
            script.setAttribute('data-image-id', '00573086');
            script.onload = () => {
                resolve({id, loaded: true, status: 'Loaded'});
            };
            script.onerror = (error: any) => resolve({id, loaded: false, status: 'Loaded'});
            script.async = true;
            script.defer = true;
            // this.elementRef.nativeElement.appendChild(script);
            const a = document.getElementById('pinguindo');
            a.appendChild(script);
        });
    }
    public removeScript(id: string) {
        const script = document.getElementById(id);
        if (script) {
            script.remove();
        }
    }
}
