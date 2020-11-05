  import React from 'react';
  import { Text, View } from 'react-native';
  // import './App.css';
  // import fetchGraphQL from './fetchGraphQL';
  // import graphql from 'babel-plugin-relay/macro';
  // import {
  //   RelayEnvironmentProvider,
  //   preloadQuery_DEPRECATED,
  //   usePreloadedQuery,
  // } from 'react-relay/hooks';
  import {QueryRenderer, createPaginationContainer, graphql} from 'react-relay';
  import RelayEnvironment from '../../GraphQLUtils/RelayEnvironment';
  import Display from './Display';
  const CartListPageQuery = graphql`
  query CartListPageQuery(
    $count: Int!,
    $after: String
  ) {
        ...Display_user
  }
`
const ITEMS_PER_PAGE = 1;
export default function Cart(p) {
    console.log(p); 
    return(
      <QueryRenderer
      environment={RelayEnvironment}
      variables={{
        count: ITEMS_PER_PAGE,  
        after: 0
      }}
      query={CartListPageQuery}
      render={({error, props}) => {
        if (error) {
          return <Text>{error.message}</Text>
        } else if (props) {
          console.log("going to display");
          return <Display user={props} />
        } 
        return <Text>Loading</Text>
      }}
    />);
      // <View>
      //   <Text>{this.props.user.feed.edges}</Text>
      // </View>
    // )
    // const userID = 1;
    // return (
    //   <QueryRenderer
    //     environment={RelayEnvironment}
    //     query={graphql`
    //       query CartRepositoryNameQuery($userID : ID!) {
    //         getUserById(id: $userID) {
    //           id
    //           ...Display_display
    //       }
    //       }
    //     `}
    //     variables={{userID}}
    //     render={({ error, props }) => {
    //       if (error) {
    //         console.log(error);
    //         return <Text>Error!</Text>;
    //       }
    //       if (!props) {
    //         return <Text>Loading...</Text>;
    //       }
    //       console.log(props.getUserById);
    //       return <Display display = {props.getUserById} />
    //       // return <div>User ID: {props.getAuthorById.firstName}</div>;
    //     }}
    //   />
    // );
  }
  

  // export default Cart;