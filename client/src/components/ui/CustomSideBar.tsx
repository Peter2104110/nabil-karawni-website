import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
  useSidebar
} from "./sidebar";

import { Home, Info } from "lucide-react";
import { useLocation } from "wouter";

export default function CustomSidebar({ children }: { children: React.ReactNode }) {
    const { toggleSidebar } = useSidebar();


    const [, setLocation] = useLocation();

    function goToContact() {
    setLocation("#contact");
    }

  return (
    <>
        <Sidebar className="z-50">
            {/* HEADER */}
            <SidebarHeader>
                <h2 className="text-xl font-bold px-2"></h2>
            </SidebarHeader>

            {/* CONTENT */}
            <SidebarContent className="overflow-hidden">

                <SidebarGroup className="gap-1">
                    <SidebarGroupLabel className="text-gold text-lg pb-5">Navigation</SidebarGroupLabel>

                    <SidebarMenu className="gap-2">
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href="#portfolio" className="flex items-center gap-2 text-xl! justify-start!" onClick={toggleSidebar}>
                                    <Home />
                                    Portfolio
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href="#services" className="flex items-center gap-2 text-xl! justify-start!" onClick={toggleSidebar}>
                                    <Info />
                                    Services
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href="#about" className="flex items-center gap-2 text-xl! justify-start!" onClick={toggleSidebar}>
                                    <Info />
                                    About
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                    </SidebarMenu>
                </SidebarGroup>

                <SidebarSeparator />

                    {/* OPTIONAL EXTRA SECTION */}
                <SidebarGroup className="gap-1">

                    <SidebarGroupLabel className="text-gold text-lg pb-5">Contact</SidebarGroupLabel>

                    <SidebarMenu>
                        <SidebarMenuItem>
                            <a
                                className="flex items-center text-lg justify-start"
                                href="#contact"
                                onClick={() => {
                                    toggleSidebar()
                                    goToContact();
                                }}
                                                                >
                                <SidebarMenuButton className="text-lg justify-start!">
                                        📞 Call us
                                </SidebarMenuButton>
                            </a>
                        </SidebarMenuItem>
                    </SidebarMenu>

                </SidebarGroup>

            </SidebarContent>

            {/* FOOTER */}
            <SidebarFooter>
                <div className="text-xs text-muted-foreground px-2">
                © {new Date().getFullYear()} Nabil Karawni
                </div>
            </SidebarFooter>
        </Sidebar>

        <SidebarInset className="bg-transparent">
            <main className="bg-transparent">
                {children}
            </main>
        </SidebarInset>
    </>
  );
}