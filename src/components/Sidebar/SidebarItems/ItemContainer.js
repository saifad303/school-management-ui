import Item from "./Item";
import ItemHeader from "./ItemHeader";

function ItemContainer(props) {
  const { id, title, subtitle, itemList } = props.item;
  // console.log("props = ", props.item);
  return (
    <div id="item-container">
      <ItemHeader title={title} subtitle={subtitle} />
      <Item itemList={itemList} />
    </div>
  );
}

export default ItemContainer;
