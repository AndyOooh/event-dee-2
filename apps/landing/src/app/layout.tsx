import { Footer } from './components/Footer';
import Header from './components/Header';
import '../styles/globals.scss';
// import "ui/styles.css"; // might need this
// force workflow test 5

// import { Varela, Barlow_Condensed } from 'next/font/google';
import {
  Varela,
  // Gantari,
  Maven_Pro,
  Cabin,
  Inter,
  Karla,
} from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const varela = Varela({
  weight: ['400'],
  subsets: ['latin'],
});
// const gantari = Gantari({
//   // weight: ['400'],
//   subsets: ['latin'],
// });
const maven_Pro = Maven_Pro({
  // weight: ['400'],
  subsets: ['latin'],
});
const cabin = Cabin({
  // weight: ['400'],
  subsets: ['latin'],
});
const inter = Inter({
  // weight: ['400'],
  subsets: ['latin'],
});
const karla = Karla({
  // weight: ['400'],
  subsets: ['latin'],
});

// const barlowCondensed = Barlow_Condensed({
//   weight: ['400', '700', '900'],
//   subsets: ['latin'],
// });

// Figure this out. New way to do head I think - instead of file
export const metadata = {
  title: 'Event Dee',
  description: 'Connecting events',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} bg-base-200 text-black`}>
      {/* Best so far */}
      {/* <html lang='en' className={`${gantari.className} text-black`}> */}
      {/* decent */}
      {/* <html lang='en' className={`${varela.className} text-black`}> */}
      {/* doesnt work */}
      {/* <html lang='en' className={`${maven_Pro.className} text-black`}> Too programming-like */}
      {/* decent */}
      {/* <html lang='en' className={`${cabin.className} text-black`}> */}
      {/* Too thin, spaces */}
      {/* <html lang='en' className={`${karla.className} text-black`}> */}
      <body className="min-h-screen">
        <Header />
        <main className="main-height mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
