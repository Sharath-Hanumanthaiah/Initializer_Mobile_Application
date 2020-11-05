import React from "react";

import { createFragmentContainer, graphql } from "react-relay";

import Carousel from "../Carousel/Carousel";
import FeedsItemContiner from "../Feeds/FeedsItemContiner";
import ItemCard from "../Carousel/ItemCard";
import { Divider } from "@ui-kitten/components";
import MultiItemCard from "../Carousel/MultiItemCard";

function RenderCard(props) {
  const { onItemPress } = props;
  switch (props.item.widget) {
    case "SingleCard":
      return (
        <>
          <Carousel
            style={props.item.widget}
            itemsPerInterval={1}
            onItemPress={onItemPress}
            item={props.item.content}
          ></Carousel>
          <Divider />
        </>
      );
    case "ItemCard":
      return (
        <>
          <FeedsItemContiner title={props.item.name}>
            <ItemCard
              item={props.item.content}
              // categoryId={item.node.typeId}
              onItemPress={onItemPress}
            />
          </FeedsItemContiner>
          <Divider />
        </>
      );
    case "MultiItemCard":
      return (
        <>
          <FeedsItemContiner title={props.item.name}>
            <MultiItemCard
              item={props.item.content}
              onItemPress={onItemPress}
            />
          </FeedsItemContiner>
          <Divider />
        </>
      );
    default:
      return <> </>;
  }
}

module.exports = createFragmentContainer(RenderCard, {
  item: graphql`
    # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
    fragment RenderCard_item on HomePage {
      name
      widget
      content {
        id
        name
        imageLink 
      }
    }
  `,
});
