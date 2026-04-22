import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "./sidebar";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-[#283345] z-50 border-b-3 border-gold h-30">

      <div className="container m-auto h-full px-4 py-4 flex md:justify-between items-center">

        <div className="md:hidden" id="triggerSideBarBtn">
          <SidebarTrigger className="h-auto w-12 hover:bg-transparent" style={{boxSizing:"border-box", padding: ".5rem"}}>
              <img src="/sidebar.png" className="w-full h-auto"></img>
          </SidebarTrigger>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center md:w-72 w-52">
          <img src="/logo.jpeg" alt="Logo" className="h-20" />
        </div>

        <div className="hidden md:flex gap-8">
          <a href="#portfolio" className="text-white hover:text-gold transition-colors">Portfolio</a>
          <a href="#services" className="text-white hover:text-gold transition-colors">Services</a>
          <a href="#about" className="text-white hover:text-gold transition-colors">About</a>
        </div>

        <a href="#contact" className="hidden md:flex">
          <Button className="bg-gold hover:bg-gold/90 text-navy-900">Get in Touch</Button>
        </a>
      </div>
    </nav>
  );
}