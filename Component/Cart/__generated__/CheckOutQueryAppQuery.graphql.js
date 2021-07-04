/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CheckOutQueryAppQueryVariables = {||};
export type CheckOutQueryAppQueryResponse = {|
  +checkOut: ?string
|};
export type CheckOutQueryAppQuery = {|
  variables: CheckOutQueryAppQueryVariables,
  response: CheckOutQueryAppQueryResponse,
|};
*/


/*
query CheckOutQueryAppQuery {
  checkOut
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "checkOut",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CheckOutQueryAppQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CheckOutQueryAppQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3040a482ebd715f382dfb59932bcee8d",
    "id": null,
    "metadata": {},
    "name": "CheckOutQueryAppQuery",
    "operationKind": "query",
    "text": "query CheckOutQueryAppQuery {\n  checkOut\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '79f23df8f7a49cad61f3afa48b4d14d1';

module.exports = node;
