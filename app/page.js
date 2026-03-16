import Image from "next/image";
import HomeFashion from "../components/Pages/HomeFashion";
import Arrivals from "../components/Pages/Arrivals";
import Selling from "../components/Pages/Selling";
import DressStyle from "../components/Pages/DressStyle";
import OurHappy from "../components/Pages/OurHappy";
export default function Home() {
  return (
  <>
  <HomeFashion />
  <Arrivals />
  <Selling/>
  <DressStyle/>
  <OurHappy/>
  </>
  );
}
