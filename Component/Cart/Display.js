import React from 'react';
// import {graphql} from 'react-relay/hooks';
// import graphql from 'babel-plugin-relay/macro';
import { Button, Text, View, FlatList } from 'react-native';
import RelayEnvironment from '../../GraphQLUtils/RelayEnvironment';
import {createPaginationContainer, graphql} from 'react-relay';
// import graphql from 'babel-plugin-relay/macro';

function _loadMore(props) {
  // console.log("starting loading more", props.relay.hasMore(), props.relay.isLoading());
  if (!props.relay.hasMore() || props.relay.isLoading()) {
    return;
  }
  console.log("loading more");
  props.relay.loadMore(
    1,  // Fetch the next 10 feed items
    error => {
      console.log(error);
    },
  );
}
function renderItem({item}) {
  return <Text>{item.node.name}</Text>
}
 function Display(props) {
    console.log("user, ",props);
    return(
        // <React.Fragment>
        //     <Text>{props.display?props.display.firstName: ""}</Text>
        // </React.Fragment>
        <View style={{position: 'absolute', left: 5, top: 55}}>
          {
            <FlatList
            data={props.user.getItemCategory.edges}
            renderItem={renderItem}
            keyExtractor={item => item.node.id}
            />
            // props.user.getItemCategory.edges.map(
            // edge => <Text>{edge.node.name}</Text>
            // )
          }
          <Button onPress={() => _loadMore(props)}
            title="Load More..."
          />
      </View>
    );
}

// export default createFragmentContainer(
//     Display,
//     {
//         display: graphql`
//         # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
//         fragment Display_display on UserDetails {
//           firstName
//         }
//         `
//     }
// )

  
  module.exports = createPaginationContainer(
    Display,
    {
      user: graphql`
        fragment Display_user on Query {
           getItemCategory(
            after: $after
            first: $count
          ) @connection(key: "Display_getItemCategory") {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      `,
    },
    {
      direction: 'forward',
      getConnectionFromProps(props) {
        return props.user && props.user.getItemCategory;
      },
      // This is also the default implementation of `getFragmentVariables` if it isn't provided.
      getFragmentVariables(prevVars, totalCount) {
        return {
          ...prevVars,
          count: totalCount,
        };
      },
      getVariables(props, {count, cursor}, fragmentVariables) {
        console.log("getVariable", fragmentVariables, "prop", props);
        return {
          count: count,
          after: props.user.getItemCategory.pageInfo.endCursor,
          cursor
          // userID isn't specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.
          // userID: fragmentVariables.userID,
        };
      },
      query: graphql`
      # Pagination query to be fetched upon calling 'loadMore'.
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query DisplayPaginationQuery(
        $count: Int!
        $after: String
      ) {
          ...Display_user 
      }
    `
    }
  );