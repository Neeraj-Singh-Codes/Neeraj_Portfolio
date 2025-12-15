"use client";

import { useState } from "react";
import Preloader from "./components/loaderScreen";
import Hero from "./components/heroSection";
import HorizontalProjects from "./components/projectWork";

export default function Page() {
  const [done, setDone] = useState(false);

  return (
    <>
      <Preloader onFinish={() => setDone(true)} />
        
      <Hero startAnimation={done} />
      <HorizontalProjects />
    </>
  );
}
