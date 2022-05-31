import { Component, OnInit} from '@angular/core';
import {AnimalModel} from '../../model/animalsModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    // Lista de los 8 animales galapagueños
    lista: AnimalModel[] = [
        {id: 'Tortuga_gigante_de_Santa_Cruz', nombre: 'Tortuga Gigante de Santa Cruz', foto: '', categoria: 'reptil'},
        {id: 'Pinguino_de_galapagos', nombre: 'Pingüino de Galápagos', foto: '', categoria: 'ave'},
        {id: 'Lobo_marino_de_galapagos', nombre: 'Lobo marino de Galápagos', foto: '', categoria: 'mamifero'},
        {id: 'Flamencos_de_galapagos', nombre: 'Flamencos de Galápagos', foto: '', categoria: 'ave'},
        {id: 'Iguana_marina_de_Galapagos', nombre: 'Iguana Marina de Galápagos', foto: '', categoria: 'reptil'},
        {id: 'Murcielago_rojo', nombre: 'Murciélago rojo', foto: '', categoria: 'mamifero'},
        {id: 'Tiburon_martillo', nombre: 'Tiburón martillo', foto: '', categoria: 'vidaMarina'},
        {id: 'Langosta', nombre: 'Langosta', foto: '', categoria: 'vidaMarina'},
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
    constructor(private router: Router) { }
    ngOnInit() {
        this.onChangeNumberPages();
        this.onButtonVisibility();
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
}
