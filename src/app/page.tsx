import AboutComponent from "@/components/AboutComponent";
import ProjectShowcase from "@/components/ProjectShowcase";


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
   
         <main className="flex-grow p-4">
            

    <div className="space-y-[50px]">
      <ProjectShowcase />
      <AboutComponent />
    </div>

      </main>
    </div>
  );
};

export default Home;
