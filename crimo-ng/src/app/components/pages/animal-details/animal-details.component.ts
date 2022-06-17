import { Component, OnInit } from '@angular/core';
import {AnimalDetailModel} from '../../model/animalsModel';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent implements OnInit {
    strTax = 'Taxonomía: ';
    strOrgTax = 'Origen del taxón: ';
    strDis = 'Distribución: ';
    strEst = 'Estado: ';
    smartframeUrl1 = 'https://embed.smartframe.io/s/9ea8092d716b95599a3c5e8fc350ffb8/';
    smartframeUrl2 = '.html?source=aHR0cDovL2xvY2FsaG9zdDo0MjAwL2FuaW1hbA..#0\',\n' +
        '        \'https://embed.smartframe.io/s/9ea8092d716b95599a3c5e8fc350ffb8/00573086.html?source=aHR0cDovL2xvY2FsaG9zdDo0MjAwL2FuaW1hbA..#0';
    tortSCruz1 = '00573086';
    tortSCruz2 = '00573087';
    tortSCruz3 = '00554916';
    pinguino1 = '00599607';
    pinguino2 = '00140374';
    pinguino3 = '00573143';
    flamenco1 = '00573058';
    flamenco2 = '00480068';
    flamenco3 = '00573053';
    lobomarin1 = '00536777';
    lobomarin2 = '00140157';
    lobomarin3 = '00650819';
    lobomarin4 = '00599631';
    tibmartillo1 = '00154155';
    tibmartillo2 = '00140340';
    tibmartillo3 = '00140341';
    iguanmarin1 = '00141054';
    iguanmarin2 = '00573166';
    iguanmarin3 = '00577696';
    murcirojo1 = 'https://www.quasarex.com/wp-content/uploads/2021/03/red-bat-galapagos.jpg';
    murcirojo2 = 'https://www.quasarex.com/wp-content/uploads/2021/03/galapagos-red-bat.jpg';
    langostroja1 = 'https://inaturalist-open-data.s3.amazonaws.com/photos/176817298/large.jpeg';
    langostroja2 = 'https://static.inaturalist.org/photos/115766304/large.jpeg';
    langostroja3 = 'https://inaturalist-open-data.s3.amazonaws.com/photos/104573889/large.jpeg';
    fotos1: string[] = [
        this.smartframeUrl1 + this.tortSCruz1 + this.smartframeUrl2,
        this.smartframeUrl1 + this.tortSCruz2 + this.smartframeUrl2,
        this.smartframeUrl1 + this.tortSCruz3 + this.smartframeUrl2
    ];
    imgEstado = 'assets/img/RedList/';
    imgCR = this.imgEstado + 'peligroCritico.png';
    imgVU = this.imgEstado + 'vulnerable.png';
    imgNE = this.imgEstado + 'NoEvaluado.png';
    imgEN = this.imgEstado + 'peligroDeExtincion.png';
    lista: AnimalDetailModel[] = [
        // TORTUGA GIGANTE DE SANTA CRUZ
        // tslint:disable-next-line:max-line-length
        {id: 'Tortuga_gigante_de_Santa_Cruz',  nombre: 'Tortuga Gigante de Santa Cruz',
            fotos: [
                this.smartframeUrl1 + this.tortSCruz1 + this.smartframeUrl2,
                this.smartframeUrl1 + this.tortSCruz2 + this.smartframeUrl2,
                this.smartframeUrl1 + this.tortSCruz3 + this.smartframeUrl2,
            ],
            acercaDe: 'La tortuga del este de Santa Cruz, al igual que las otras 14 especies del complejo de tortugas gigantes de Galápagos, es endémica no solo del archipiélago sino del área. Estos quelonios son considerados Especies Clave e ingenieras del ecosistema. Esto se debe a que, con sus actividades y movimientos, moldean los ecosistemas, cumplen el rol de herbívoros principales, pisotean la vegetación y son los principales dispersores de semillas.\n' + '\n' +
                'Se estima que alguna vez existieron alrededor de 200 000 tortugas en todo el archipiélago; en la actualidad, se considera que existe solo un 10-20% de la población original. \n' + '\n' +
                'Esta dramática disminución se debe principalmente a la sobreexplotación causada por balleneros en los años 1800, seguida por una eliminación sistemática de tortugas por parte de los científicos y los primeros colonos. \n' + '\n' +
                'Actualmente, se estima que la población de la tortuga del este de Santa Cruz, C. donfaustoi, tiene aproximadamente 250 adultos. Existe un programa de crianza en cautiverio establecido por la Dirección del Parque Nacional Galápagos (DPNG) desde 2015.\n',
            propiedades: ['Chelonoidis donfaustoi.\n',
                'Endémico.\n',
                'Restringida en Cerro El Fatal y Cerro Mesa, Isla Santa Cruz.\n',
                'En peligro crítico.\n'],
            imgEstado: this.imgCR,
            imgMapa: 'assets/img/mapasGalapagos/Map_TortugaEsteSantaCruz.png',
            referencias: 'Washington Tapia, Patricia Jaramillo y James Gibbs. “Tortuga gigante del este de Santa Cruz”. Fundación Charles Darwin (FCD) y WWF-Ecuador. (2018). Atlas de Galápagos, Ecuador: Especies Nativas e Invasoras. Quito, FCD y WWF-Ecuador: 115. \n' +
        'Charles Darwin Foundation: https://www.darwinfoundation.org/en/datazone/checklist?species=17364',
            urlSafe: [],
            isMindenPictures: true,
        },
        // PINGÜINO DE GALAPAGOS
        // tslint:disable-next-line:max-line-length
        {id: 'Pinguino_de_galapagos',  nombre: 'Pingüino de Galápagos',
            fotos: [
                this.smartframeUrl1 + this.pinguino1 + this.smartframeUrl2,
                this.smartframeUrl1 + this.pinguino2 + this.smartframeUrl2,
                this.smartframeUrl1 + this.pinguino3 + this.smartframeUrl2,
            ],
            acercaDe: 'El pingüino de Galápagos es una Especie Centinela y un buen indicador de la variación climática, ya que es sensible a los fuertes cambios poblacionales asociados a los eventos de El Niño-Oscilación del Sur (ENOS) o La Niña. Durante El Niño, debido a las temperaturas altas y el alimento escaso, su población disminuye significativamente; mientras que, durante La Niña, a causa de las temperaturas bajas y el alimento abundante, la población crece y se recupera.\n' + '\n' +
                'Además, el pingüino es indicador de enfermedades y patógenos que afectan a especies de aves marinas. Asimismo, ya que se alimenta de la anchoveta del Pacífico, sardinas y lisas, es una Especie Clave para distinguir los efectos negativos, como la disminución, sobre estas poblaciones de peces.\n' + '\n' +
                'El pingüino de Galápagos, con una distribución restringida a zonas de afloramiento marino, y un tamaño poblacional pequeño, de entre 1 500 y 4 700 individuos, es una de las especies de ave más amenazada a nivel mundial.\n',
            propiedades: ['Spheniscus mendiculus.\n',
                'Endémico.\n',
                'Cría en Fernandina, Isabela, Floreana, Santiago (Lougie), Bartolomé, Sombrero Chino. A veces, se ven ejemplares en Santa Cruz, Santa Fe, Baltra, Dhapne y Genovesa.\n',
                'En peligro de extinción.',
                ],
            imgEstado: this.imgEN,
            imgMapa: 'assets/img/mapasGalapagos/Map_PinguinoGalapagos.png',
            referencias: 'Gustavo Jiménez-Uzcátegui, Dee Boersma y F. Hernán Vargas. “Pingüino de Galápagos”. Fundación Charles Darwin (FCD) y WWF-Ecuador. (2018). Atlas de Galápagos, Ecuador: Especies Nativas e Invasoras. Quito, FCD y WWF-Ecuador: 119.\n' +
                'Charles Darwin Foundation: https://www.darwinfoundation.org/en/datazone/checklist?species=5176',
            urlSafe: [],
            isMindenPictures: true,
        },
        // LOBO MARINO DE GALAPAGOS
        // tslint:disable-next-line:max-line-length
        {id: 'Lobo_marino_de_galapagos', nombre: 'Lobo marino de Galápagos',
            fotos: [
                this.smartframeUrl1 + this.lobomarin1 + this.smartframeUrl2,
                this.smartframeUrl1 + this.lobomarin2 + this.smartframeUrl2,
                this.smartframeUrl1 + this.lobomarin3 + this.smartframeUrl2
            ],
            acercaDe: 'En general, los lobos marinos son especies gregarias y adaptadas a ecosistemas costeros, atributos que las ubican como piezas importantes dentro de la dinámica del ecosistema. Se ha comprobado que esta especie tiene la capacidad de responder rápida y claramente a perturbaciones ambientales.\n' + '\n' +
                'Algunos estudios señalan que se alimentan principalmente de peces, sobre todo, de especies pelágicas que tienden a formar grandes cardúmenes cerca de la costa. Complementan su dieta con peces demersales de mayor tamaño que viven en fondos rocosos.\n' + '\n' +
                'Habitan en playas arenosas y sitios protegidos de depredadores, formando pequeñas colonias. Su territorio comprende una parte acuática, que utilizan con fines de termorregulación, y una terrestre, que destinan al descanso.\n' + '\n' +
                'Ambos sexos alcanzan la madurez sexual entre los cuatro y seis años, mientras que la madurez física se presenta entre los ocho y nueve años. La longevidad es de 20 a 22 años en las hembras y de 17 años en los machos. \n' + '\n' +
                'Actualmente, no se conoce exactamente su estado poblacional; sin embargo, se estima que existen alrededor de 14 000 individuos distribuidos en aproximadamente 40 colonias ubicadas en la mayoría de las islas del archipiélago.\n',
            propiedades: ['Zalophus wollebaeki Silvertsen.\n',
                'Endémico.\n',
                'Presente en todo el archipiélago, siendo las islas del sureste (Floreana, Española, Santa Fe y San Cristóbal) las de mayor concentración demográfica.\n',
                'Estado: En Peligro de extinción.\n'],
            imgEstado: this.imgEN,
            imgMapa: 'assets/img/mapasGalapagos/Map_LoboMarino.png',
            referencias: 'Diego Páez-Rosas. “Lobo marino de Galápagos o lobo marino común”. Fundación Charles Darwin (FCD) y WWF-Ecuador. (2018). Atlas de Galápagos, Ecuador: Especies Nativas e Invasoras. Quito, FCD y WWF-Ecuador: 153.\n'  +
                'Charles Darwin Foundation: https://www.darwinfoundation.org/en/datazone/checklist?species=5253',
            urlSafe: [],
            isMindenPictures: true,
        },
        // FLAMENCO DE GALAPAGOS
        // tslint:disable-next-line:max-line-length
        {id: 'Flamencos_de_galapagos', nombre: 'Flamencos de Galápagos',
            fotos: [
                this.smartframeUrl1 + this.flamenco1 + this.smartframeUrl2,
                this.smartframeUrl1 + this.flamenco2 + this.smartframeUrl2,
                this.smartframeUrl1 + this.flamenco3 + this.smartframeUrl2
            ],
            acercaDe: 'El flamenco de Galápagos se la considera como una subespecie del flamenco americano ya que difiere genéticamente de la del Caribe y son significativamente más pequeños, exhiben dimorfismo sexual en la forma del cuerpo y ponen huevos más pequeños. Sus hábitats preferidos son similares a los de sus parientes: lagunas salinas, marismas y lagos costeros o interiores poco profundos y salobres . [1]\n' + '\n' +
                'Los factores que afectan la elección del hábitat de los flamencos americanos son la temperatura ambiental, la profundidad del agua, la fuente de alimento, la accesibilidad de un área y la presencia de lechos de vegetación en las áreas de alimentación. [1]\n' + '\n' +
                'La mayor particularidad de la población galapagueña es su atípica costumbre de vivir en pequeños grupos, incluso al momento de reproducirse, con colonias reproductivas de tan solo 3 parejas, contando la máxima con apenas 50 parejas, y haciéndolo en pequeñas lagunas salinas próximas a la costa marina.[2]\n' + '\n' +
                'La población del flamenco de las Galápagos es muy pequeña, estimada entre 400 a 500 ejemplares, o entre 320 y 550 individuos. Está amenazado por la predación directa de adultos, huevos y pichones y la alteración del hábitat crítico para esta ave, causada por las numerosas especies de vertebrados introducidos, entre los cuales destacan los gatos, cerdos, cabras y ratas. [2]\n',
            propiedades: ['Phoenicopterus ruber glyphorhynchus.\n',
                'Endémico.\n',
                'Islas Isabela, Santiago, Floreana, Rábida, Santa Cruz.\n',
                'En Peligro de extinción.\n'],
            imgEstado: this.imgEN,
            imgMapa: 'assets/img/mapasGalapagos/Map_FlamencoGalapagos.png',
            referencias: '[1] Kiddle encyclopedia: https://kids.kiddle.co/American_flamingo\n ' +
                '[2] Wikipedia: https://es.wikipedia.org/wiki/Phoenicopterus_ruber_glyphorhynchus\n' +
                'Charles Darwin Foundation: https://www.darwinfoundation.org/en/datazone/checklist?species=5253',
            urlSafe: [],
            isMindenPictures: true,
        },
        // IGUANA MARINA DE GALAPAGOS
        // tslint:disable-next-line:max-line-length
        {id: 'Iguana_marina_de_Galapagos', nombre: 'Iguana Marina de Galápagos',
            fotos: [
                this.smartframeUrl1 + this.iguanmarin1 + this.smartframeUrl2,
                this.smartframeUrl1 + this.iguanmarin2 + this.smartframeUrl2,
                this.smartframeUrl1 + this.iguanmarin3 + this.smartframeUrl2
            ],
            acercaDe: 'La iguana marina es el único lagarto moderno que se asocia directamente al medio ambiente marino. Se encuentra distribuida en todo el archipiélago. Su estado de conservación es vulnerable debido a varias amenazas, como la interacción de especies introducidas, alteraciones antropogénicas en su hábitat natural y su sensibilidad frente al cambio climático.\n' + '\n' +
                'En la actualidad, hay poco conocimiento sobre el estado poblacional a nivel subespecífico. Sin embargo, su taxonomía fue revisada recientemente y presenta 11 subespecies, las cuales deben considerarse como unidades de manejo independiente.\n' + '\n' +
                'Generalmente, la iguana marina es considerada una Especie Centinela porque es indicadora de la variación de las condiciones climáticas. Cuando la temperatura de la superficie del mar experimenta un cambio, usualmente común durante la ocurrencia de El Niño-Oscilación Sur (ENOS) en Galápagos, existen grandes fluctuaciones en el tamaño de sus poblaciones. \n' + '\n' +
                'Es herbívora; se alimenta casi exclusivamente de algas macrófitas de la zona intermareal cuando bucea. Por tanto, la disponibilidad de algas es un factor limitante que afecta su crecimiento, tamaño y supervivencia. Asimismo, es muy sensible a la contaminación ambiental y al envenenamiento.\n',
            propiedades: ['Amblyrhynchus cristatus.\n',
                'Endémico.\n',
                'Se encuentran en las áreas costeras de todas las islas principales y la mayoría de los islotes circundantes.\n',
                'vulnerable.',
                ],
            imgEstado: this.imgVU,
            imgMapa: 'assets/img/mapasGalapagos/Map_IguanaMarina.png',
            referencias: 'Alejandro Ibáñez, Sebastian Steinfartz y Gustavo Jiménez-Uzcátegui. “Iguana Marina godzilla”. Fundación Charles Darwin (FCD) y WWF-Ecuador. (2018). Atlas de Galápagos, Ecuador: Especies Nativas e Invasoras. Quito, FCD y WWF-Ecuador: 103-105.\n' + 'Charles Darwin Foundation: https://www.darwinfoundation.org/en/datazone/checklist?species=5258',
            urlSafe: [],
            isMindenPictures: true,
        },
        // MURCIELAGO ROJO
        // tslint:disable-next-line:max-line-length
        {id: 'Murcielago_rojo', nombre: 'Murciélago rojo',
            fotos: [
                this.murcirojo1,
                this.murcirojo2,
                this.murcirojo2
            ],
            acercaDe: 'El murciélago rojo está presente en las zonas altas y costeras de Santa Cruz y San Cristóbal. En las regiones costeras de Santa Cruz, durante la temporada de garúa, las hembras usan pequeñas áreas de alimentación (10-20 ha), forrajean solas y dentro del follaje de una variedad de árboles y arbustos, incluyendo manglares. Es abundante en las áreas pobladas, donde se observa frecuentemente alimentándose alrededor del alumbrado público.\n' + '\n' +
                'Los murciélagos rojos son importantes porque contribuyen a los servicios ecosistémicos, como al control de plagas ya que consumen insectos dañinos para los cultivos.\n' + '\n' +
                'Utilizan los manglares rojos, árboles y arbustos en áreas costeras como sitio de reposo. El uso de las pequeñas áreas de forrajeo que rodean dichas áreas sugiere que los murciélagos rojos están en riesgo debido al desarrollo costero en Galápagos.\n' + '\n' +
                'Los modelos generados para estimar la supervivencia del murciélago a largo plazo en América del Norte sugieren que el desarrollo de la energía eólica es una amenaza para sus poblaciones. Sin embargo, estudios previos a la colocación de los parques eólicos, mostraron que sus impactos son mínimos. \n',
            propiedades: ['Lasiurus borealis brachyotis.\n',
                'Endémico.\n',
                'Presente en Santa Cruz, San Cristóbal, Floreana y Fernandina.\n',
                'No evaluado.\n',
                ],
            imgEstado: this.imgNE,
            imgMapa: 'assets/img/mapasGalapagos/Map_MurcielagoRojo.png',
            referencias: 'Gary F. McCracken y Gustavo Jiménez-Uzcátegui. “Murciélago rojo de Galápagos”. Fundación Charles Darwin (FCD) y WWF-Ecuador. (2018). Atlas de Galápagos, Ecuador: Especies Nativas e Invasoras. Quito, FCD y WWF-Ecuador: 147.\n' +
                'Charles Darwin Foundation: https://www.darwinfoundation.org/en/datazone/checklist?species=5220',
            urlSafe: [],
            isMindenPictures: false,
        },
        // TIBURON MARTILLO
        // tslint:disable-next-line:max-line-length
        {id: 'Tiburon_martillo', nombre: 'Tiburón martillo',
            fotos: [
                this.smartframeUrl1 + this.tibmartillo1 + this.smartframeUrl2,
                this.smartframeUrl1 + this.tibmartillo2 + this.smartframeUrl2,
                this.smartframeUrl1 + this.tibmartillo3 + this.smartframeUrl2
            ],
            acercaDe: 'El tiburón martillo es la especie de tiburón icónica de la Reserva Marina Galápagos (RMG) y es uno de los mayores atractivos para los practicantes de buceo recreativo, que visitan las islas con el objetivo de encontrarse con grandes cardúmenes de esta especie.\n' + '\n' +
                'Además de su valor socioeconómico, los tiburones ocupan el tope de las cadenas alimenticias marinas y son clave para mantener los ecosistemas marinos saludables. En las islas Darwin y Wolf, en el norte de la RMG, se ha reportado la mayor biomasa de tiburones martillo y otras especies que, actualmente, se encuentran en peligro de extinción, lo que resalta el valor ecológico único de estas islas a nivel global.\n' + '\n' +
                'Este tiburón costero y semioceánico es común en los mares tropicales y semitemplados del globo. Está catalogado como especie en peligro desde 2007, debido a los descensos poblacionales registrados, causados principalmente por la pesca de adultos, para la obtención de aletas, unas de las más valoradas en los mercados asiáticos, y de juveniles y neonatos, en zonas costeras.\n',
            propiedades: ['Sphyrna lewini.\n',
                'Nativo.\n',
                'Su mayor incidencia es alrededor de las islas Darwin y Wolf, de julio a febrero.\n',
                'En Peligro de extinción.\n'],
            imgEstado: this.imgEN,
            imgMapa: 'assets/img/mapasGalapagos/Map_TiburonMartillo.png',
            referencias: 'Pelayo Salinas-de-León y David Acuña-Marrero. “Tiburón martillo”. Fundación Charles Darwin (FCD) y WWF-Ecuador. (2018). Atlas de Galápagos, Ecuador: Especies Nativas e Invasoras. Quito, FCD y WWF-Ecuador: 97.\n' +
                'Charles Darwin Foundation: https://www.darwinfoundation.org/en/datazone/checklist?species=7847',
            urlSafe: [],
            isMindenPictures: true,
        },
        // LANGOSTA ROJA
        // tslint:disable-next-line:max-line-length
        {id: 'Langosta', nombre: 'Langosta roja',
            fotos: [
                this.langostroja1,
                this.langostroja2,
                this.langostroja3
            ],
            acercaDe: 'La langosta roja es considerada una especie limpiadora del ecosistema porque se alimenta de los restos de animales muertos6. Por el largo tiempo que pasa en fase larval, se asume un rol importante como alimento de animales filtradores.\n' + '\n' +
                'La pesquería de este recurso se considera relevante, por los ingresos económicos que genera. Se ha observado un aumento en el consumo de langosta en las islas, por lo que se prevé una mayor distribución de este ingreso en la población local y un mayor aporte a la seguridad alimentaria de las islas. Por todo lo anterior, la langosta roja juega un rol como indicador social y del ecosistema de Galápagos.\n' + '\n' +
                'En Galápagos, se consideraba que la langosta roja estaba sobreexplotada; sin embargo, a partir del año 2008, sus poblaciones comenzaron a recuperarse gracias a la regulación según la cual no se puede pescar tallas pequeñas ni hembras con huevos, así como a la estabilización de la cantidad de pescadores y embarcaciones, y a un cambio en la comercialización, ofreciendo las langostas enteras, en lugar de solo su cola, lo que representa mejores precios.\n',
            propiedades: ['Panulirus penicillatus.\n',
                'Nativo.\n',
                'Vive en arrecifes rocosos, someros y con aguas claras de todo el archipiélago de Galápagos.\n',
                'No evaluado.\n'],
            imgEstado: this.imgNE,
            imgMapa: 'assets/img/mapasGalapagos/Map_LangostaRoja.png',
            referencias: 'Jorge Ramírez y Harry Reyes. “Langosta roja”. Fundación Charles Darwin (FCD) y WWF-Ecuador. (2018). Atlas de Galápagos, Ecuador: Especies Nativas e Invasoras. Quito, FCD y WWF-Ecuador: 87.\n' +
                'Charles Darwin Foundation: https://www.darwinfoundation.org/en/datazone/checklist?species=7962',
            urlSafe: [],
            isMindenPictures: false,
        }
    ];
    animalSelected: AnimalDetailModel;
    private modelViewerHtml: string;
    isModelViewerVisible = false;
    cameraOrbit = '45deg 55deg 2.5m';
    src = 'https://modelviewer.dev/shared-assets/models/Astronaut.glb';
    constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer) { }
    ngOnInit(): void {
        // Función necesaria para utilizar enlaces externos para usar iframe
        this.updateSrc();
        // Obtenemos el id recibido por la ruta
        const id = this.route.snapshot.paramMap.get('id');
        // De acuerdo al id buscamos en la lista el animal seleccionado
        this.OnSelectAnimalDetail(id);
        // ModelVIEWER
      //   this.loadExternalScript()
      //       .then(() => {
        // tslint:disable-next-line:max-line-length
      //           this.modelViewerHtml = `<model-viewer style="width: 300px; height: 300px"  src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.glb"
        // tslint:disable-next-line:indent
		// 	              alt="A 3D model of an astronaut"
        // tslint:disable-next-line:indent
		// 	              auto-rotate
        // tslint:disable-next-line:indent
		// 	              camera-controls
        // tslint:disable-next-line:indent
		// 	              background-color="#455A64">
      // </model-viewer>`;
      //           this.isModelViewerVisible = true;
      //       })
      //       .catch(() => {});
    }

    /*loadExternalScript() {
        return new Promise(resolve => {
            const scriptElement = document.createElement('script');
            scriptElement.type = 'module';
            scriptElement.onload = resolve;
            document.getElementsByTagName('head')[0].appendChild(scriptElement);
            console.log('1');
        });
    }*/
    updateSrc() {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.lista.length; i++) {
            let arrayUrlSafe: SafeResourceUrl[] = [];
            // this.lista[i].urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.lista[i].foto);
            arrayUrlSafe = this.lista[i].urlSafe;
            for (let j = 0; j < this.lista[i].fotos.length; j++) {
                arrayUrlSafe[j] = this.sanitizer.bypassSecurityTrustResourceUrl(this.lista[i].fotos[j]);
            }
            arrayUrlSafe = this.lista[i].urlSafe;
        }
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
