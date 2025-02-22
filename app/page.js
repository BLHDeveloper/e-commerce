import Image from "next/image";
import HomeFashion from "../components/Pages/HomeFashion";
import Arrivals from "../components/Pages/Arrivals";
import Selling from "../components/Pages/Selling";
export default function Home() {
  return (
  <>
  <HomeFashion />
  <Arrivals />
  <Selling/>
  </>
  );
}
