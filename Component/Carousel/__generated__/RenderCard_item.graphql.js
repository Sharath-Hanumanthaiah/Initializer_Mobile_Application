/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RenderCard_item$ref: FragmentReference;
declare export opaque type RenderCard_item$fragmentType: RenderCard_item$ref;
export type RenderCard_item = {|
  +name: ?string,
  +widget: string,
  +itemType: string,
  +typeId: ?string,
  +content: ?$ReadOnlyArray<?{|
    +id: string,
    +previousApiId: string,
    +name: ?string,
    +offer: ?string,
    +imageLink: ?string,
  |}>,
  +$refType: RenderCard_item$ref,
|};
export type RenderCard_item$data = RenderCard_item;
export type RenderCard_item$key = {
  +$data?: RenderCard_item$data,
  +$fragmentRefs: RenderCard_item$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RenderCard_item",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "widget",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "itemType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "typeId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HomePageContent",
      "kind": "LinkedField",
      "name": "content",
      "plural": true,
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
        (v0/*: any*/),
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HomePage",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cbb30f3e3f7f9dafe9341c81d1662327';

module.exports = node;
