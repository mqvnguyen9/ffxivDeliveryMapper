import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraversalService {
  vertexNames: string[] = ['Limsa Lominsa', 'Outer La Noscea', 'Upper La Noscea', 'Western La Noscea 1', 'Western La Noscea 2',
    'Eastern La Noscea 1', 'Eastern La Noscea 2', 'Isle of Umbra', 'Outer La Noscea', 'Middle La Noscea', 'Lower La Noscea',
    'Mist', 'Western Thanalan'];
  adjacencyList;

  constructor() {
    this.adjacencyList = new Map();
    this.setupMap();
  }

  private setupMap() {
    this.vertexNames.forEach(name => {
      this.addVertex(name);
    });
    this.addEdge('Outer La Noscea', 'Upper La Noscea', 100);
    this.addEdge('Upper La Noscea', 'Western La Noscea 1', 135);
    this.addEdge('Upper La Noscea', 'Western La Noscea 2', 135);
    this.addEdge('Upper La Noscea', 'Eastern La Noscea 1', 85);
    this.addEdge('Western La Noscea 1', 'Western La Noscea 2', 70);
    this.addEdge('Western La Noscea 1', 'Isle of Umbra', 40);
    this.addEdge('Western La Noscea 1', 'Limsa Lominsa', 40);
    this.addEdge('Western La Noscea 1', 'Lower La Noscea', 40);
    this.addEdge('Western La Noscea 2', 'Isle of Umbra', 40);
    this.addEdge('Western La Noscea 2', 'Middle La Noscea', 112);
    this.addEdge('Eastern La Noscea 1', 'Middle La Noscea', 125);
    this.addEdge('Eastern La Noscea 1', 'Lower La Noscea', 133);
    this.addEdge('Eastern La Noscea 1', 'Eastern La Noscea 2', 70);
    this.addEdge('Middle La Noscea', 'Limsa Lominsa', 93);
    this.addEdge('Middle La Noscea', 'Lower La Noscea', 102);
    this.addEdge('Eastern La Noscea 2', 'Limsa Lominsa', 40);
    this.addEdge('Eastern La Noscea 2', 'Lower La Noscea', 102);
    this.addEdge('Limsa Lominsa', 'Western Thanalan', 80);
    this.addEdge('Limsa Lominsa', 'Mist', 1);
    this.addEdge('Limsa Lominsa', 'Lower La Noscea', 119);
    this.addEdge('Lower La Noscea', 'Mist', 1);
  }

  private addVertex(name: string) {
    this.adjacencyList.set(name, []);
  }

  private addEdge(vert1: string, vert2: string, weight: number) {
    this.adjacencyList.get(vert1).push({vert: vert2, weight: weight});
    this.adjacencyList.get(vert2).push({vert: vert1, weight: weight});
  }

  public getVertex(name: string): any {
    return this.adjacencyList.get(name);
  }

  public printGraph() {
    let returnString = '';

    // Array.from(this.adjacencyList.keys()).forEach(key => {
    //   let attached = '';
    //   this.adjacencyList.g
    // })
    // this.adjacencyList.keys().forEach(key => {
    //   let attached = '';
    //   this.adjacencyList.get(key).forEach(value => {
    //     attached += value + ' ';
    //   });
    //   returnString += key + ' => ' + attached;
    // });
    return this.adjacencyList.toString();
  }

  public createPath(start: string, end: string, checkpoints: string[]) {

  }
}
