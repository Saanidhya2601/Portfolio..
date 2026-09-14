import Hero from "@/components/Hero";
import InteractiveFolder from "@/components/InteractiveFolder";
import WorkHistory from "@/components/WorkHistory";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollStack from "@/components/ScrollStack";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <ScrollStack id="home" index={10} className="bg-void/95 backdrop-blur-sm">
        <Hero />
      </ScrollStack>

      <ScrollStack
        id="projects"
        index={20}
        className="bg-void/95 backdrop-blur-sm"
      >
        <InteractiveFolder />
      </ScrollStack>

      <ScrollStack
        id="experience"
        index={30}
        className="bg-void/95 backdrop-blur-sm"
      >
        <WorkHistory />
      </ScrollStack>

      <ScrollStack
        id="contact"
        index={40}
        className="bg-void/95 backdrop-blur-sm"
      >
        <ContactSection />
      </ScrollStack>

      {/* Normal-flow footer: gives the last sticky section its scroll
          runway to release, per how position:sticky stacking works here. */}
      <Footer />
    </main>
  );
}
