import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Barbell',
    children: [{name: 'Straight'}, {name: 'Tongue'}, {name: 'Curved'}, {name: "Industrials"}],
  },
  {
    name: 'Belly',
    children: [
      {
        name: 'Non-Dangling',
        children: [{name: 'Balls'}, {name: 'Stones'}, {name: 'Figurines'}],
      },
      {
        name: 'Dangling',
        children: [{name: 'Heats'}, {name: 'Animals'}, {name: 'Flowers'}, {name: 'Symbols'}, {name: 'Dreamcatchers'}],
      },
    ],
  },
  {
    name: 'Cartilage',
    children: [{name: 'Studs'}, {name: 'Higgies'}, {name: 'Sets'}],
  },
  {
    name: 'Dermals',
    children: [{name: 'Tops'}, {name: 'Converters'}, {name: 'Anchors'}],
  },
  {
    name: 'Nipple',
    children: [{name: 'Barbells'}, {name: 'Shields'}, {name: 'Clickers'}],
  },
  {
    name: 'Nose',
    children: [{name: 'Bones'}, {name: 'Rings'}, {name: 'Screws'}, {name: 'Studs'}, {name: 'Septum'}],
  },
  {
    name: 'Tunnels',
    children: [{name: 'Screw-fit'}, {name: 'Doubled Flared'}, {name: 'Saddle-Fit'}, {name: 'Single Flared'}, {name: 'No Flared'}],
  },
  {
    name: 'Ear Stretchers',
    children: [{name: 'Stretchers'}, {name: 'Spirals'}, {name: 'Stretch Sets'}],
  },
];

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss'],
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule]
})
export class PartsComponent {

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Desplaza la página al principio (0, 0)
      }
    });
  }

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor(private router: Router) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
