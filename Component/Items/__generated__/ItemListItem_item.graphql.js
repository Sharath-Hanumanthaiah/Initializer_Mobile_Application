/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItemListItem_item$ref: FragmentReference;
declare export opaque type ItemListItem_item$fragmentType: ItemListItem_item$ref;
export type ItemListItem_item = {|
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
  +$refType: ItemListItem_item$ref,
|};
export type ItemListItem_item$data = ItemListItem_item;
export type ItemListItem_item$key = {
  +$data?: ItemListItem_item$data,
  +$fragmentRefs: ItemListItem_item$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemListItem_item",
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
(node/*: any*/).hash = '4064bf4fdc8d8810184b36e44a6d506f';

module.exports = node;
