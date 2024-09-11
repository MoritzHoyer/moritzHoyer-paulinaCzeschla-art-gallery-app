import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main> {/* Hier wird der Hauptinhalt eingefügt */}
      <Navigation />
    </>
  );
}
