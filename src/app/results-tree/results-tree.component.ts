import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode[] = [
  {
    name: 'Thanalan',
    children: [
      {name: 'Eastern Thanalan'},
      {name: 'Western Thanalan'}
    ]
  }, {
    name: 'The Black Shroud',
    children: [
      {
        name: 'Central Shroud',
        children: [
          {name: 'Maple Log'},
          {name: 'Gridanian Chestnut'}
        ]
      }
    ]
  }
];

@Component({
  selector: 'app-results-tree',
  templateUrl: './results-tree.component.html',
  styleUrls: ['./results-tree.component.css']
})
export class ResultsTreeComponent implements OnInit {
  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

  ngOnInit() {
  }

}
