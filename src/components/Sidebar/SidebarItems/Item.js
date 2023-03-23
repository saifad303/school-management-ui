import Image from "next/image";

function Item({ itemList }) {
  // console.log("itemList = ", itemList);

  return (
    <>
      {itemList.map(({ id, name, icon }) => (
        <div id="item" key={id}>
          {icon}
          <p>{name}</p>
        </div>
      ))}
    </>
  );
}

export default Item;
