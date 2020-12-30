/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddressDeleteMutationVariables = {|
  id: string
|};
export type AddressDeleteMutationResponse = {|
  +deleteAddress: ?boolean
|};
export type AddressDeleteMutation = {|
  variables: AddressDeleteMutationVariables,
  response: AddressDeleteMutationResponse,
|};
*/


/*
mutation AddressDeleteMutation(
  $id: ID!
) {
  deleteAddress(id: $id)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteAddress",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddressDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddressDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "60ac5af319f8d78d7e748b76816adf49",
    "id": null,
    "metadata": {},
    "name": "AddressDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation AddressDeleteMutation(\n  $id: ID!\n) {\n  deleteAddress(id: $id)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cc37ece694f38fbea1bcd8ccdde4a769';

module.exports = node;
