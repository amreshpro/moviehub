import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeWrapper from "./providers/ThemeWrapper";
import ThemeProviders from './providers/ThemeProviders'
export default function AppLayout() {
  return (
    <div>
      <ThemeProviders>
        <ThemeWrapper>
          <Navbar />
          <Outlet />
          <Footer />
        </ThemeWrapper>
      </ThemeProviders>
    </div>
  )
}