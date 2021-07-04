/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ReviewMutationVariables = {|
  itemId: string,
  userId: string,
  rating?: ?number,
  review?: ?string,
|};
export type ReviewMutationResponse = {|
  +addItemReview: ?{|
    +id: string
  |}
|};
export type ReviewMutation = {|
  variables: ReviewMutationVariables,
  response: ReviewMutationResponse,
|};
*/


/*
mutation ReviewMutation(
  $itemId: String!
  $userId: String!
  $rating: Int
  $review: String
) {
  addItemReview(itemId: $itemId, userId: $userId, rating: $rating, review: $review) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "itemId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "rating"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "review"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v4 = [
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
        "name": "rating",
        "variableName": "rating"
      },
      {
        "kind": "Variable",
        "name": "review",
        "variableName": "review"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "UserReviewOutput",
    "kind": "LinkedField",
    "name": "addItemReview",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ReviewMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "ReviewMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "b40527e2d13f49c3492e2ca571d55fb5",
    "id": null,
    "metadata": {},
    "name": "ReviewMutation",
    "operationKind": "mutation",
    "text": "mutation ReviewMutation(\n  $itemId: String!\n  $userId: String!\n  $rating: Int\n  $review: String\n) {\n  addItemReview(itemId: $itemId, userId: $userId, rating: $rating, review: $review) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '29392fbc7a62167ede118d5eeee2b209';

module.exports = node;
