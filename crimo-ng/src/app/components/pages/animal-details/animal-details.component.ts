import { Component, OnInit } from '@angular/core';
import {AnimalDetailModel} from '../../model/animalsModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent implements OnInit {
    temporalTex = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.\n' +
        'Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.';
    fotos1: string[] = ['', ''];
    lista: AnimalDetailModel[] = [
        // tslint:disable-next-line:max-line-length
        {id: 'Tortuga_gigante_de_Santa_Cruz',  nombre: 'Tortuga Gigante de Santa Cruz', fotos: this.fotos1, contenidos: [this.temporalTex, this.temporalTex, this.temporalTex], referencias: '' },
        // tslint:disable-next-line:max-line-length
        {id: 'Pinguino_de_galapagos',  nombre: 'Pingüino de Galápagos', fotos: this.fotos1, contenidos: [this.temporalTex, this.temporalTex, this.temporalTex], referencias: '' },
        // tslint:disable-next-line:max-line-length
        {id: 'Lobo_marino_de_galapagos', nombre: 'Lobo marino de Galápagos', fotos: this.fotos1, contenidos: [this.temporalTex, this.temporalTex, this.temporalTex], referencias: '' },
        // tslint:disable-next-line:max-line-length
        {id: 'Flamencos_de_galapagos', nombre: 'Flamencos de Galápagos', fotos: this.fotos1, contenidos: [this.temporalTex, this.temporalTex, this.temporalTex], referencias: '' },
        // tslint:disable-next-line:max-line-length
        {id: 'Iguana_marina_de_Galapagos', nombre: 'Iguana Marina de Galápagos', fotos: this.fotos1, contenidos: [this.temporalTex, this.temporalTex, this.temporalTex], referencias: '' },
        // tslint:disable-next-line:max-line-length
        {id: 'Murcielago_rojo', nombre: 'Murciélago rojo', fotos: this.fotos1, contenidos: [this.temporalTex, this.temporalTex, this.temporalTex], referencias: '' },
        // tslint:disable-next-line:max-line-length
        {id: 'Tiburon_martillo', nombre: 'Tiburón martillo', fotos: this.fotos1, contenidos: [this.temporalTex, this.temporalTex, this.temporalTex], referencias: '' },
        // tslint:disable-next-line:max-line-length
        {id: 'Langosta', nombre: 'Langosta', fotos: this.fotos1, contenidos: [this.temporalTex, this.temporalTex, this.temporalTex], referencias: '' }
    ];
    animalSelected: AnimalDetailModel;
    constructor(private route: ActivatedRoute) { }
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.OnSelectAnimalDetail(id);
    }
    OnSelectAnimalDetail(animalId){
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.lista.length ; i++) {
          // tslint:disable-next-line:triple-equals
          if (this.lista[i].id == animalId){
              this.animalSelected = this.lista[i];
              break;
          }
      }
  }

}
