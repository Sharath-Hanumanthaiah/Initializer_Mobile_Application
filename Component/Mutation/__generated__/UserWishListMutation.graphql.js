/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserWishListInput = {|
  itemId: string,
  type?: ?string,
  userId: string,
|};
export type UserWishListMutationVariables = {|
  input: UserWishListInput
|};
export type UserWishListMutationResponse = {|
  +changeWishList: ?boolean
|};
export type UserWishListMutation = {|
  variables: UserWishListMutationVariables,
  response: UserWishListMutationResponse,
|};
*/


/*
mutation UserWishListMutation(
  $input: UserWishListInput!
) {
  changeWishList(input: $input)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "kind": "ScalarField",
    "name": "changeWishList",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserWishListMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserWishListMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "aac3d2f7b1313bc8183604ef6ef36cd8",
    "id": null,
    "metadata": {},
    "name": "UserWishListMutation",
    "operationKind": "mutation",
    "text": "mutation UserWishListMutation(\n  $input: UserWishListInput!\n) {\n  changeWishList(input: $input)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '30f8faaaf32925b01b05e121b7fc7ade';

module.exports = node;
