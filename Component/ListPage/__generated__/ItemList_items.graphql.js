/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItemListItem_item$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItemList_items$ref: FragmentReference;
declare export opaque type ItemList_items$fragmentType: ItemList_items$ref;
export type ItemList_items = {|
  +getItemDetails: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: ?string,
      +node: ?{|
        +id: string,
        +$fragmentRefs: ItemListItem_item$ref,
      |},
    |}>
  |},
  +$refType: ItemList_items$ref,
|};
export type ItemList_items$data = ItemList_items;
export type ItemList_items$key = {
  +$data?: ItemList_items$data,
  +$fragmentRefs: ItemList_items$ref,
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
      "name": "count"
    },
    {
      "kind": "RootArgument",
      "name": "itemType"
    },
    {
      "kind": "RootArgument",
      "name": "typeId"
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
          "getItemDetails"
        ]
      }
    ]
  },
  "name": "ItemList_items",
  "selections": [
    {
      "alias": "getItemDetails",
      "args": [
        {
          "kind": "Variable",
          "name": "itemType",
          "variableName": "itemType"
        },
        {
          "kind": "Variable",
          "name": "typeId",
          "variableName": "typeId"
        }
      ],
      "concreteType": "ItemDetailsConnection",
      "kind": "LinkedField",
      "name": "__ItemList_getItemDetails_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemDetailsConnectionEdge",
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
              "concreteType": "ItemDetails",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ItemListItem_item"
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
(node/*: any*/).hash = 'fa9444e31b8d4ca6760cbdbb6b66b760';

module.exports = node;
