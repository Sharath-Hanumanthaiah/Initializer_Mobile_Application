/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItemSubCategory_subCategory$ref: FragmentReference;
declare export opaque type ItemSubCategory_subCategory$fragmentType: ItemSubCategory_subCategory$ref;
export type ItemSubCategory_subCategory = {|
  +getItemSubCategoryByCategoryId: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: ?string,
      +node: ?{|
        +id: string,
        +previousApiId: string,
        +name: ?string,
        +offer: ?string,
        +imageLink: ?string,
      |},
    |}>
  |},
  +$refType: ItemSubCategory_subCategory$ref,
|};
export type ItemSubCategory_subCategory$data = ItemSubCategory_subCategory;
export type ItemSubCategory_subCategory$key = {
  +$data?: ItemSubCategory_subCategory$data,
  +$fragmentRefs: ItemSubCategory_subCategory$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "after"
    },
    {
      "kind": "RootArgument",
      "name": "categoryId"
    },
    {
      "kind": "RootArgument",
      "name": "count"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "getItemSubCategoryByCategoryId"
        ]
      }
    ]
  },
  "name": "ItemSubCategory_subCategory",
  "selections": [
    {
      "alias": "getItemSubCategoryByCategoryId",
      "args": [
        {
          "kind": "Variable",
          "name": "categoryId",
          "variableName": "categoryId"
        }
      ],
      "concreteType": "ItemSubCategoryConnection",
      "kind": "LinkedField",
      "name": "__ItemSubCategory_getItemSubCategoryByCategoryId_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemSubCategoryConnectionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ItemSubCategory",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "previousApiId",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "offer",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "imageLink",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '56056a6a2f7425bb75a8f5c6504037e0';

module.exports = node;
