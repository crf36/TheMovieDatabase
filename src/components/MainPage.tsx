/*======================================================================
 * FILE:    MainPage.tsx
 * AUTHOR:  Chris Fowler
 * DATE:    Winter 2025
 *
 * DESCRIPTION: Component to organize the single-page application
 */
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import "./MainPage.css";

/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export default function MainPage({ children }: { children?: React.ReactNode }) {
  return (
    <main style={{ width: "100%" }}>
      <div className="page-container">
        <Header />
        <Navigation />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </main>
  );
}
