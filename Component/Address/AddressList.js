import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Layout, List, Text, ListItem, Button } from '@ui-kitten/components';
import {createPaginationContainer, graphql} from 'react-relay';

import AddressModel from './AddressModel';

function _loadMore(props) {
  console.log("starting loading more", props.relay.hasMore(), props.relay.isLoading());
  if (!props.relay.hasMore() || props.relay.isLoading()) {
    return;
  }
  console.log("loading more");
  props.relay.loadMore(
    5,  // Fetch the next 10 feed items
    error => {
      console.log(error);
    },
  );
}

function AddressList(props) {
    const [ModelVisible, setModelVisible] = React.useState(false);
    const openAddressModel = () => {
      props.navigation.navigate("AddressModel");
      // navigation.navigate("AddressModel");
        // setModelVisible(true);
      };
    const renderAddressItem = ({item}) => {
      console.log(item);
        return (
          <React.Fragment>
            {/* <Text>{info}</Text> */}
            <ListItem key={item.node.id} style={styles.itemContainer}>
              <View style={styles.marginVertical_8}>
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text category="s1" style={styles.secondHeadingBold}>
                    {item.node.name}
                  </Text>
                  <Text category="s1" style={styles.secondHeading}>
                    {item.node.firstLine}
                  </Text>
                  <Text category="s1" style={styles.secondHeading}>
                    {`${item.node.secondLine}, ${item.node.pinCode}`}
                  </Text>
                  <View style={styles.secondContainer}>
                    <Text category="s1" style={styles.secondHeadingBold}>
                      {"LandMark : "}
                    </Text>
                    <Text category="s1" style={styles.secondHeading}>
                      {item.node.landMark}
                    </Text>
                  </View>
                  <View style={styles.secondContainer}>
                    <Text category="s1" style={styles.secondHeadingBold}>
                      {"Phone Number : "}
                    </Text>
                    <Text category="s1" style={styles.secondHeading}>
                      {item.node.phoneNumber}
                    </Text>
                  </View>
                </View>
              </View>
            </ListItem>
            <Divider />
          </React.Fragment>
        );
    }
    const renderAddressHeader = (info) => {
        return (
          <View style={styles.headerContainer}>
            <Text
              style={{ marginVertical: 16, marginHorizontal: 8, fontWeight: "bold", justifyContent: 'space-between' }}
              category="s1"
            >
              Address Details
            </Text>
            <Button
              size="small"
              activeOpacity={0.8}
              style={styles.addAddressButton}
                onPress={openAddressModel}
            >
              Add New Address
            </Button>
          </View>
        );
    }
    return (
      <>
        <Layout style={styles.container} level="2">
          <List
            data={props.address.getAddress.edges}
            renderItem={renderAddressItem}
            ListHeaderComponent={renderAddressHeader}
            onEndReachedThreshold={0.5}
            onEndReached={() => _loadMore(props)}
          />
        </Layout>
      </>
    );
}

module.exports = createPaginationContainer(
  AddressList,
  {
    address: graphql`
      fragment AddressList_address on Query {
        getAddress(
          first: $count, 
          after: $after, 
          userId: $userID) @connection(key: "AddressList_getAddress") {
          edges {
            node {
              id
              name
              firstLine
              secondLine
              pinCode
              phoneNumber
              landMark
            }
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.address && props.address.getAddress;
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
        after: props.address.getAddress.pageInfo.endCursor,
        userID: fragmentVariables.userID,
        cursor
        // userID isn't specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.
        // userID: fragmentVariables.userID,
      };
    },
    query: graphql`
    # Pagination query to be fetched upon calling 'loadMore'.
    # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
    query AddressListQuery(
      $count: Int!
      $after: String
      $userID: ID!
    ) {
        ...AddressList_address
    }
  `
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 3,
  },
  itemContainer: {
    margin: 3
  },
  headerContainer: { 
      display: "flex", 
      flexDirection: "row", 
      justifyContent: 'space-between' , 
      marginBottom: 8
    },
  secondHeading: {
    marginLeft: 12,
    textTransform: 'capitalize'
  },
  secondHeadingBold: {
    fontWeight: "bold",
    marginLeft: 12,
    textTransform: 'capitalize'
  },
  secondContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  addAddressButton: {
    marginTop: 10,
    marginHorizontal: 5,
    height: 10,
    borderColor: "tomato",
    backgroundColor: "tomato",
  },
});