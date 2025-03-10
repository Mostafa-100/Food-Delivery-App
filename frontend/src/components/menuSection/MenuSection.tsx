
import MenuItemList from "./MenuItemList";
import MenuSectionHeader from "./MenuSectionHeader";
import MenuSectionText from "./MenuSectionText";

function Menu() {

  return (
    <div>
      <div className="container mx-auto px-2 lg:px-0">
        <div className="text-center lg:text-left">
          <MenuSectionHeader />
          <MenuSectionText />
        </div>
        <MenuItemList />
        <hr className="mt-12" />
      </div>
    </div>
  );
}

export default Menu;
