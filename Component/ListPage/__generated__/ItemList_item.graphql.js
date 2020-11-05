/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItemList_item$ref: FragmentReference;
declare export opaque type ItemList_item$fragmentType: ItemList_item$ref;
export type ItemList_item = {|
  +id: string,
  +previousApiId: string,
  +name: ?string,
  +imageLink: ?string,
  +isWishlist: ?boolean,
  +itemAvailability: ?$ReadOnlyArray<?{|
    +actualPrice: ?number,
    +discount: ?any,
    +discountPrice: ?number,
    +value: ?number,
    +unit: ?string,
  |}>,
  +$refType: ItemList_item$ref,
|};
export type ItemList_item$data = ItemList_item;
export type ItemList_item$key = {
  +$data?: ItemList_item$data,
  +$fragmentRefs: ItemList_item$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemList_item",
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
      "name": "imageLink",
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
      "concreteType": "ItemAvailability",
      "kind": "LinkedField",
      "name": "itemAvailability",
      "plural": true,
      "selections": [
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
    }
  ],
  "type": "ItemDetails",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '7307b099c985f6713050feac550f571b';

module.exports = node;
