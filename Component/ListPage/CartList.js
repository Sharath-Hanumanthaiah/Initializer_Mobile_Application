import React, {useState} from "react";
import {  StyleSheet } from "react-native";

import {  Layout, List, Divider } from "@ui-kitten/components";
import CartListItem from "../Cart/CartListItem";

// import {
//   createPaginationContainer,
//   graphql,
// } from "react-relay";
// import { PaginationLoader } from "../Extras/Loaders";


// function _loadMore(props) {
//   console.log("starting loading more", props.relay.hasMore(), props.relay.isLoading());
//   if (!props.relay.hasMore() || props.relay.isLoading()) {
//     return;
//   }
//   console.log("loading more");
//   props.relay.loadMore(
//     5,  // Fetch the next 10 feed items
//     error => {
//       console.log(error);
//     },
//   );
// }

export default function CartList(props) {
  const {onItemPress} = props;
  const [products, setProducts] = useState(
    [{
      id: '1',
      name: 'Horlicks',
      subtitle: 'an ITC product',
      availability: '100g',
      imageLink: require('../../assets/profile-background.jpg'),
      price : 'Rs 120',
      amount: 'Rs 100',
      availablity: [
        {
          id: 17,
          actualPrice: 80,
          discount: 10,
          discountPrice: 72,
          value: 1,
          unit: "PC"
        },
        {
          id: 18,
          actualPrice: 160,
          discount: 4,
          discountPrice: 152,
          value: 2,
          unit: "PC"
        },
        {
          id: 18,
          actualPrice: 240,
          discount: 20,
          discountPrice: 196,
          value: 3,
          unit: "PC"
        }
      ],
      isFav: true
    },
    {
      id: '2',
      name: 'Boost',
      subtitle: 'Chocolate Flavor',
      imageLink: require('../../assets/profile-background.jpg'),
      discount: '20%',
      price : 'Rs 100',
      amount: 'Rs 120',
      availablity: [
        {
          id: 17,
          actualPrice: 80,
          discount: 10,
          discountPrice: 72,
          value: 1,
          unit: "PC"
        }],
      isFav: false
    },
    {
      id: '3',
      name: 'sunsilk black shine shampoo',
      subtitle: 'Anti hair fall',
      imageLink: require('../../assets/profile-background.jpg'),
      availablity: [
        {
          id: 17,
          actualPrice: 180,
          discount: 10,
          discountPrice: 170,
          value: 1,
          unit: "Pack"
        },
        {
          id: 17,
          actualPrice: 200,
          discount: 20,
          discountPrice: 150,
          value: 2,
          unit: "Pack"
        }],
      isFav: false
    },
    {
      id: '4',
      name: 'sunfeast dark fantacy',
      subtitle: 'Chocolate',
      imageLink: require('../../assets/profile-background.jpg'),
      availablity: [
        {
          id: 17,
          actualPrice: 80,
          discount: 10,
          discountPrice: 65,
          value: 1,
          unit: "Pack"
        }],
      isFav: false
    },
    {
      id: '5',
      name: 'sunpure Refined sunflower oil',
      subtitle: 'Sunflower oil',
      imageLink: require('../../assets/profile-background.jpg'),
      availablity: [
        {
          id: 17,
          actualPrice: 180,
          discount: 10,
          discountPrice: 615,
          value: 1,
          unit: "KG"
        },
        {
          id: 18,
          actualPrice: 250,
          discount: 10,
          discountPrice: 225,
          value: 2,
          unit: "KG"
        }],
      isFav: false
    }]
  );

  const renderProductItem = ({ item }) => (
    <>
      <CartListItem
        style={styles.item}
        // index={item.node.id}
        // item={item.node}
        item={item}
        // onItemPress={onItemPress}
        // onProductChange={onItemChange}
        // onAddWishList={onAddWishList}
      />
      <Divider style={styles.divider} />
    </>
  );
//   const renderFooter = () => {
//     if (props.relay.hasMore()) {
//       return <PaginationLoader />;
//     } else {
//       return <></>;
//     }
//   };
  return (
    <Layout style={styles.container} level="2">
      <List
        data={products}
        renderItem={renderProductItem}
        // onEndReachedThreshold={0.5}
        // onEndReached={() => _loadMore(props)}
        // ListFooterComponent={renderFooter}
      />
    </Layout>
  );
}

// module.exports = createPaginationContainer(
//   ItemList,
//   {
//     items: graphql`
//       fragment ItemList_items on Query {
//         getItemDetails(
//           first: $count
//           after: $after
//           itemType: $itemType
//           typeId: $typeId
//         ) @connection(key: "ItemList_getItemDetails") {
//           edges {
//             cursor
//             node {
//               id
//               ...ItemListItem_item
//             }
//           }
//         }
//       }
//     `,
//   },
//   {
//     direction: "forward",
//     getConnectionFromProps(props) {
//       return props.item && props.item.getItemDetails;
//     },
//     // This is also the default implementation of `getFragmentVariables` if it isn't provided.
//     getFragmentVariables(prevVars, totalCount) {
//       return {
//         ...prevVars,
//         count: totalCount,
//       };
//     },
//     getVariables(props, { count, cursor }, fragmentVariables) {
//       console.log("getVariable", fragmentVariables, "prop", props);
//       return {
//         count: count,
//         after: props.address.getAddress.pageInfo.endCursor,
//         itemType: fragmentVariables.itemType,
//         typeId: fragmentVariables.typeId,
//         // userID isn't specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.
//         // userID: fragmentVariables.userID,
//       };
//     },
//     query: graphql`
//       # Pagination query to be fetched upon calling 'loadMore'.
//       # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
//       query ItemListQuery(
//         $count: Int!
//         $after: String
//         $itemType: String!
//         $typeId: ID!
//       ) {
//         ...ItemList_items
//       }
//     `,
//   }
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 3,
  },
  image: {
    margin: 10,
    padding: 30,
    width: 120,
    height: 120,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  detailsContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    marginLeft: 16,
    marginTop: 2,
    overflow: "hidden",
  },
  amountContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 12,
    marginTop: 2,
  },
  amountButton: {
    borderRadius: 16,
  },
  actualPrice: {
    textAlign: "center",
    marginLeft: 1,
    textDecorationLine: "line-through",
  },
  discountPrice: {
    textAlign: "center",
    marginRight: 12,
    fontWeight: "bold",
    fontSize: 18,
  },
  discount: {
    color: "#00cc00",
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 2,
  },
  removeButton: {
    position: "absolute",
    right: 0,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
  availablityContainer: {
    flexDirection: "row",
    height: "auto",
    // width: 'auto',
    // alignSelf: 'flex-start',
    // justifyContent:'flex-start',
    // alignContent: 'flex-start',
    // flexWrap: 'wrap',
    flexShrink: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
});
