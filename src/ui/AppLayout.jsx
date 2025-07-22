import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loading from "./Loading";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto] pizza-background bg-[50%_50%] bg-contain">
      {isLoading && <Loading />}

      <Header />
      <div className="overflow-auto scrollbar-none sm:scrollbar-thin sm:scrollbar-thumb-[#F9FBF7] sm:scrollbar-track-[#2F3234]">
        <Outlet />
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
