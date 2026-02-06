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
          <div className="footer-logo">★</div>
          <p className="subtext">
            © 2025 Nageline Vallon-Rodriguez <br /> All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}
