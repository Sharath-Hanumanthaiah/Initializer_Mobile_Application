/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CartListItem_Cart$ref: FragmentReference;
declare export opaque type CartListItem_Cart$fragmentType: CartListItem_Cart$ref;
export type CartListItem_Cart = {|
  +id: string,
  +itemId: ?string,
  +userId: ?string,
  +availabilityId: ?string,
  +imageLink: ?string,
  +quantity: ?number,
  +itemName: ?string,
  +unit: ?string,
  +value: ?number,
  +discountPrice: ?number,
  +$refType: CartListItem_Cart$ref,
|};
export type CartListItem_Cart$data = CartListItem_Cart;
export type CartListItem_Cart$key = {
  +$data?: CartListItem_Cart$data,
  +$fragmentRefs: CartListItem_Cart$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CartListItem_Cart",
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
      "name": "itemId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "userId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "availabilityId",
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
      "name": "quantity",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "itemName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "unit",
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
      "name": "discountPrice",
      "storageKey": null
    }
  ],
  "type": "UserCartList",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'e7f2ac6a05264d55d3814c946a44364d';

module.exports = node;
