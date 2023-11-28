import { Outlet } from "react-router-dom";
import { Footer } from "../components";

function RootLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <div className="absolute bottom-0 w-full p-4  text-white">
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
