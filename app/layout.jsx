import "./globals.css"
import Navbar from "@/components/Navbar"
import ScrollHandler from "@/components/ScrollHandler"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <div className="app-layout">
            <div className="graphic-layer0"></div>

            <main className="content-area">
              {children}
              <ScrollHandler />
            </main>
            <Navbar />
          </div>
        </div>

        <footer className="site-footer">
          <img src="/favicon.ico" alt="Nageline logo" className="footer-logo">
          <p className="subtext">
            © 2026 Nageline Vallon-Rodriguez <br /> All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}
