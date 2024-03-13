import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { CustomeProvider } from "./components/Context";

export default function App() {
  return (
    <CustomeProvider>
      <Nav />
      <Hero />
    </CustomeProvider>
  )}
