import { Component } from "@angular/core";
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { ResizedEvent } from "angular-resize-event";

interface FoodNode {
  name: string;
  id: string;
  level: number;
  children?: FoodNode[];
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  TREE_DATA: FoodNode[] = [
    {
      name: "DFM",
      id: "5f052a050d6a342c680d5375",
      level: 0,
      children: [],
    },
    {
      name: "CAE",
      id: "5f052a050d6a342c680d5376",
      level: 0,
      children: [
        {
          name: "DD1",
          id: "5f06f5b50d6a3422b0394b0b",
          level: 1,
          children: [
            {
              name: "1",
              id: "5f06f84b0d6a3422b0394b10",
              level: 2,
              children: [],
            },
          ],
        },
        {
          name: "11",
          id: "5f06f8550d6a3422b0394b11",
          level: 1,
          children: [
            {
              name: "44",
              id: "5f0eab6e0d6a341990685794",
              level: 2,
              children: [
                {
                  name: "33",
                  id: "5f06f8750d6a3422b0394b13",
                  level: 3,
                  children: [
                    {
                      name: "44",
                      id: "5f06f8750d6a3422b0394b3s",
                      level: 4,
                      children: [
                        {
                          name: "55",
                          id: "5f06f8750d6a3422b0394b3s",
                          level: 5,
                          children: [
                            {
                              name: "66",
                              id: "5f06f8750d6a3422b0394000",
                              level: 6,
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Mold Tryout",
      id: "5f052a050d6a342c680d5377",
      level: 0,
      children: [
        {
          name: "M2",
          id: "5f0eabd80d6a341990685798",
          level: 1,
          children: [],
        },
        {
          name: "M3",
          id: "5f0eabe30d6a341990685799",
          level: 1,
          children: [],
        },
        {
          name: "M1",
          id: "5f0eabd00d6a341990685797",
          level: 1,
          children: [],
        },
      ],
    },
    {
      name: "test",
      id: "5f0535cd0d6a341210ff1277",
      level: 0,
      children: [
        {
          name: "D3",
          id: "5f06f5c80d6a3422b0394b0d",
          level: 1,
          children: [
            {
              name: "A1",
              id: "5f06f5a40d6a3422b0394b0a",
              level: 2,
              children: [],
            },
            {
              name: "A2",
              id: "5f0eab9f0d6a341990685795",
              level: 2,
              children: [],
            },
            {
              name: "A3",
              id: "5f0eaba80d6a341990685796",
              level: 2,
              children: [],
            },
            {
              name: "A4",
              id: "5f0fc58d0d6a340914496b8c",
              level: 2,
              children: [],
            },
          ],
        },
      ],
    },
  ];

  width: number;
  height: number;

  constructor() {}

  ngOnInit() {
    this.TREE_DATA = this.dataSource.data = this.TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;

  onResized(event: ResizedEvent) {
    this.width = event.newWidth;
    this.height = event.newHeight;

    console.log("width", this.width);
    console.log("height", this.height);
  }
}
