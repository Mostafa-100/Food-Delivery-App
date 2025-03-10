import MenuItem from "./MenuItem";

type menuItemsProps = {
  id: number;
  imgUrl: string;
  name: string;
};

function MenuItemList() {
  const menuItems: menuItemsProps[] = [
    { id: 1, imgUrl: "menu-items/salade.jpg", name: "Salad" },
    { id: 2, imgUrl: "menu-items/cake.jpg", name: "Cake" },
    { id: 3, imgUrl: "menu-items/deserts.jpg", name: "Deserts" },
    { id: 4, imgUrl: "menu-items/pasta.jpg", name: "Pasta" },
    { id: 5, imgUrl: "menu-items/pure-veg.jpg", name: "Pure Veg" },
    { id: 6, imgUrl: "menu-items/rolls.jpg", name: "Rulls" },
    { id: 7, imgUrl: "menu-items/sandwich.jpg", name: "Sandwich" },
    { id: 8, imgUrl: "menu-items/noodles.jpg", name: "Noodles" },
  ];

  return (
    <div className="flex gap-3 flex-wrap justify-center mt-6">
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          id={item.id}
          imgUrl={item.imgUrl}
          itemName={item.name}
        />
      ))}
    </div>
  )
}

export default MenuItemList;