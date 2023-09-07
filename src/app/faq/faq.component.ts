import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Desplaza la página al principio (0, 0)
      }
    });
  }
  
  items = [
    { 
      color: '¿CUÁNTO CUESTA HACERSE UN PIERCING?', 
      contenido: ['Manzana', 'Corazón', 'Sangre', 'Nariz de payaso', 'Marte'] 
    },
    { 
      color: '¿NECESITO MI DNI?', 
      contenido: ['Sí, debe traer una identificación emitida por el gobierno a su cita. Esto incluye pasaporte, licencia de conducir e identificación estatal.'] 
    },
    { 
      color: 'SI LLEGO TARDE, ¿QUÉ HAGO?', 
      contenido: ['¡Por favor llámanos! Permitimos un período de gracia de diez minutos, así que infórmenos con anticipación'] 
    },
    { 
      color: '¿PUEDO PERFORARME SI SOY MENOR DE EDAD?', 
      contenido: ['¡Sí! Sin embargo, solo perforamos los lóbulos de las orejas a personas entre 5 y 17 años.'] 
    },
    { 
      color: '¿PUEDO TRAER A MI HIJO CONMIGO CUANDO ME HAGAN EL PIERCING?', 
      contenido: ['Los niños pueden ser una distracción mientras se perforan. Por ese motivo, no permitimos que menores de edad acompañen a la persona perforada.'] 
    },
    { 
      color: '¿PUEDO TRAER MIS PROPIAS JOYAS PARA SER PERFORADO?', 
      contenido: ['No. Estamos aquí para brindar la experiencia de perforación más segura posible. Para ello utilizamos piezas de joyería nuevas y de alta calidad.'] 
    },
    { 
      color: '¿DUELE?', 
      contenido: ['Respuesta corta, sí. Respuesta larga, sí, ¡pero es muy rápida! Sentirás un pellizco rápido (o tal vez solo presión), luego el área se sentirá caliente y se disipará.'] 
    },
    { 
      color: '¿CUANDO PUEDO IR A NADAR?', 
      contenido: ['Sugerimos esperar al menos 2 o 3 meses antes de sumergir el piercing en cuerpos de agua estancados o compartidos. Los piercings recientes son una herida que cicatriza, y cosas como el océano, las piscinas e incluso la bañera pueden transportar bacterias que una vez en la herida no se pueden enjuagar.'] 
    },
    { 
      color: '¿ACEPTAN DEVOLUCIONES?', 
      contenido: ['Una vez que una pieza de joyería ha estado en el cuerpo de una persona, no podemos aceptar una devolución por razones de salud y seguridad a menos que la joya se haya roto (consulte a continuación qué hacer si eso sucede).'] 
    },
    { 
      color: '¿CUANTO TARDA EN SANAR UN PIERCING?', 
      contenido: ['Los piercings se curan de afuera hacia adentro, por lo que, si bien pueden verse y sentirse curados desde el principio, ¡aún podrían faltar semanas o incluso meses! Espere que la mayoría de los piercings tarden entre 4 y 12 meses en sanar. Tu hoja de cuidados posteriores tendrá el tiempo de curación esperado para tu perforación específica, pero si la perdiste, ¡siempre puedes preguntar!'] 
    },
  ];
  expandedIndex = 0;

  // constructor() {}

  // ngOnInit(): void {}
}
