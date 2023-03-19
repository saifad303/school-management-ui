import Image from "next/image";

function Item({ itemList }) {
  console.log("itemList = ", itemList);

  return (
    <>
      {itemList.map(({ id, name, icon }) => (
        <div id="item" key={id}>
          <Image src={icon} width={22} height={22} />
          <p>{name}</p>
        </div>
      ))}
    </>
  );
}

export default Item;
