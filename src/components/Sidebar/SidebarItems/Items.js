import ItemContainer from "./ItemContainer";
import { sidebarItemList } from "@/context/SidebarContext/SidebarItemsContext";
function Items() {
  // console.log(sidebarItemList);
  return (
    <div id="items">
      {sidebarItemList.map((item) => (
        <ItemContainer key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Items;
