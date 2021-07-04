/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserCartInput = {|
  id?: ?CompositeKeyCartInput,
  quantity?: ?number,
|};
export type CompositeKeyCartInput = {|
  availabilityId?: ?string,
  itemId?: ?string,
  userId?: ?string,
|};
export type UserCartListMutationVariables = {|
  input: UserCartInput
|};
export type UserCartListMutationResponse = {|
  +addUserCart: ?{|
    +id: string,
    +userId: ?string,
    +itemId: ?string,
    +availabilityId: ?string,
    +quantity: ?number,
  |}
|};
export type UserCartListMutation = {|
  variables: UserCartListMutationVariables,
  response: UserCartListMutationResponse,
|};
*/


/*
mutation UserCartListMutation(
  $input: UserCartInput!
) {
  addUserCart(input: $input) {
    id
    userId
    itemId
    availabilityId
    quantity
  }
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
    "concreteType": "UserCartList",
    "kind": "LinkedField",
    "name": "addUserCart",
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
        "name": "userId",
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
        "name": "availabilityId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "quantity",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserCartListMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserCartListMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6c83e2ff38569229dca0e187afe98fab",
    "id": null,
    "metadata": {},
    "name": "UserCartListMutation",
    "operationKind": "mutation",
    "text": "mutation UserCartListMutation(\n  $input: UserCartInput!\n) {\n  addUserCart(input: $input) {\n    id\n    userId\n    itemId\n    availabilityId\n    quantity\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3985431511069f066191e75e700bdec1';

module.exports = node;
