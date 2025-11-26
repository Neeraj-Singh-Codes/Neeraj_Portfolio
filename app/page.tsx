import Preloader from "./components/loaderScreen";
import Hero from './components/heroSection'
export default function Home() {
  return (
    <>
      <Preloader />
      <Hero/>

      <main className="h-screen w-full bg-white text-black">
        <div className="p-10 text-5xl font-bold">Your Portfolio Main Section</div>
      </main>
    </>
  );
}
