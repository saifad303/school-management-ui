import { useSelector } from "react-redux";
import { sidebarItems } from "@/redux/features/sidebar/itemsSlice";
import ItemContainer from "./ItemContainer";
function Items() {
  let sidebarItemList = useSelector(sidebarItems);
  return (
    <div id="items">
      {sidebarItemList.map((item) => (
        <ItemContainer key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Items;
