import "@/app/ui/global.css"
import { montserrat } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased bg-lightgrey`}>
          {children}
          <footer className="py-10 flex justify-center items-center"> {/*dependiendo donde ponga las etiquetas y la info, van a quedar en esa posicion dentro de las paginas*/}
          </footer>
      </body>
    </html>
  );
}
