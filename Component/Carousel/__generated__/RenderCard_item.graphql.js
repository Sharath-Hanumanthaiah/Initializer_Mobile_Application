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
  +content: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
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
      "concreteType": "ItemCategory",
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
        (v0/*: any*/),
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
(node/*: any*/).hash = '564df359ed710b3ef6b91adf017af64b';

module.exports = node;
