import {CTA, Footer, Header, Hero, HowItWorks, PricingSection, WhatToAsk} from "@/components/landing/";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {

  //redirecting to dashboard
  const user = await currentUser();
  if(user) redirect("/dashboard")

  return (
   <section>
   <Header/>
   <Hero/>
   <HowItWorks/>
   <WhatToAsk/>
   <PricingSection/>
   <CTA/>
   <Footer/>
   </section>
  );
}
