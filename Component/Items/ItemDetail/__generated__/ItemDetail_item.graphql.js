/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItemDetail_item$ref: FragmentReference;
declare export opaque type ItemDetail_item$fragmentType: ItemDetail_item$ref;
export type ItemDetail_item = {|
  +getItemDetailsById: ?{|
    +id: string,
    +previousApiId: string,
    +name: ?string,
    +itemAvailability: ?$ReadOnlyArray<?{|
      +id: string,
      +actualPrice: ?number,
      +discount: ?any,
      +discountPrice: ?number,
      +value: ?number,
      +unit: ?string,
    |}>,
    +description: ?{|
      +itemProperties: ?string,
      +sellerName: ?string,
      +disclaimer: ?string,
    |},
    +imageLinks: ?$ReadOnlyArray<?string>,
    +isWishlist: ?boolean,
    +averageRating: ?number,
  |},
  +$refType: ItemDetail_item$ref,
|};
export type ItemDetail_item$data = ItemDetail_item;
export type ItemDetail_item$key = {
  +$data?: ItemDetail_item$data,
  +$fragmentRefs: ItemDetail_item$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "itemId"
    },
    {
      "kind": "RootArgument",
      "name": "userId"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemDetail_item",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "itemId",
          "variableName": "itemId"
        },
        {
          "kind": "Variable",
          "name": "userId",
          "variableName": "userId"
        }
      ],
      "concreteType": "ItemDetails",
      "kind": "LinkedField",
      "name": "getItemDetailsById",
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
          "concreteType": "ItemAvailability",
          "kind": "LinkedField",
          "name": "itemAvailability",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "actualPrice",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "discount",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "discountPrice",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "value",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "unit",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemDescription",
          "kind": "LinkedField",
          "name": "description",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "itemProperties",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "sellerName",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "disclaimer",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "imageLinks",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isWishlist",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "averageRating",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '12d4ea60330437f437797a5fdeb7ebd1';

module.exports = node;
