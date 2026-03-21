import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Example from "@/components/Example";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Example />
      <Comparison />
      <Testimonials />
      <CTA />
      <LeadForm />
      <Footer />
    </main>
  );
}
