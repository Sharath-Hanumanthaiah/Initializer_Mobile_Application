/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItemListItem_item$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Wishlist_wishlist$ref: FragmentReference;
declare export opaque type Wishlist_wishlist$fragmentType: Wishlist_wishlist$ref;
export type Wishlist_wishlist = {|
  +getUserWishList: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: ?string,
      +node: ?{|
        +id: string,
        +$fragmentRefs: ItemListItem_item$ref,
      |},
    |}>,
    +pageInfo: ?{|
      +hasNextPage: boolean,
      +endCursor: ?string,
    |},
  |},
  +$refType: Wishlist_wishlist$ref,
|};
export type Wishlist_wishlist$data = Wishlist_wishlist;
export type Wishlist_wishlist$key = {
  +$data?: Wishlist_wishlist$data,
  +$fragmentRefs: Wishlist_wishlist$ref,
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
      "name": "userId"
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
          "getUserWishList"
        ]
      }
    ]
  },
  "name": "Wishlist_wishlist",
  "selections": [
    {
      "alias": "getUserWishList",
      "args": [
        {
          "kind": "Variable",
          "name": "userId",
          "variableName": "userId"
        }
      ],
      "concreteType": "ItemDetailsConnection",
      "kind": "LinkedField",
      "name": "__Wishlist_getUserWishList_connection",
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
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
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
(node/*: any*/).hash = 'a95119d182557c162a08eb8dd875e4d3';

module.exports = node;
