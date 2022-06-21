import {SafeResourceUrl} from '@angular/platform-browser';

export interface AnimalModel {
    id: string;
    nombre: string;
    foto: string;
    categoria: string;
    categoriaName: string;
    urlSafe: SafeResourceUrl;
    isMindenPictures: boolean;
    isAnotherImage: boolean;
}
export interface AnimalDetailModel {
    id: string;
    nombre: string;
    fotos: string[];
    urlSafe: SafeResourceUrl[];
    acercaDe: string;
    propiedades: string[];
    imgEstado: string;
    imgMapa: string;
    referencias: string;
    isMindenPictures: boolean;
}
export interface Animal3dModel {
    id: string;
    src3D: string;
    shadow: string;
    arplacement: string;
}
