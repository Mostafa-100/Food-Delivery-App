import MenuItem from "./MenuItem";

type menuItemsProps = {
  id: number;
  imgUrl: string;
  name: string;
};

function Menu() {
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
    <div>
      <div className="container mx-auto px-2 lg:px-0">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-medium text-slate-900 mt-7 mb-2">
            Explore our menu
          </h2>
          <p className="px-2 md:px-0 lg:w-1/2 text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem inventore saepe ratione et consectetur aliquid atque,
            voluptatibus eius pariatur
          </p>
        </div>
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
        <hr className="mt-12" />
      </div>
    </div>
  );
}

export default Menu;
