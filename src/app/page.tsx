import AboutComponent from "@/components/AboutComponent";
import ContactForm from "@/components/ContactForm";
import MissionSection from "@/components/MissionSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProjectsSection from "@/components/ProjectsSection";


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
   
         <main className="flex-grow p-4">
            

    <div className="space-y-[50px]">
      <ProjectShowcase />
      <AboutComponent />
      <MissionSection />
      <ProjectsSection />
      <ContactForm />
    </div>

      </main>
    </div>
  );
};

export default Home;
