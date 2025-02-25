"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Routes from "@/constants/routes";
import Services from "@/constants/services";
import Projects from "@/constants/projects";
import { Menu } from "lucide-react";
import { OnRuntimeWordMark } from "@/logos/components";

const MobileNavigation: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85vw] max-w-sm">
        <SheetHeader className="mb-6">
          <SheetTitle className="flex justify-start">
            <OnRuntimeWordMark height={24} />
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {/* Services Navigation */}
            <AccordionItem value="services">
              <AccordionTrigger className="text-base font-normal">
                Nos services
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-3 pl-4 pt-2">
                  {Services.map((service) => (
                    <div key={service.id} className="flex flex-col space-y-2">
                      <Link 
                        href={Routes.service[service.id].root} 
                        className="font-medium"
                      >
                        <SheetClose>{service.name}</SheetClose>
                      </Link>
                      <div className="flex flex-col space-y-1.5">
                        {service.subServices.map((subService) => (
                          <Link
                            key={subService.id}
                            href={subService.route}
                            className="text-sm text-muted-foreground hover:text-foreground pl-2"
                          >
                            <SheetClose>{subService.name}</SheetClose>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            
            {/* Projects Navigation */}
            <AccordionItem value="projects">
              <AccordionTrigger className="text-base font-normal">
                Nos projets
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-3 pl-4 pt-2">
                  {Projects.slice(0, 3).map((project) => (
                    <Link 
                      key={project.id} 
                      href={Routes.project(project.id)}
                      className="text-base hover:text-foreground"
                    >
                      <SheetClose>{project.name}</SheetClose>
                    </Link>
                  ))}
                  <Link 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-foreground pt-1"
                  >
                    <SheetClose>Voir tous les projets</SheetClose>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          {/* Direct links */}
          <Link 
            href={Routes.unknown}
            className="px-1 py-2 text-base hover:text-foreground"
          >
            <SheetClose>Le studio</SheetClose>
          </Link>
          
          <Link href={Routes.contact} className="mt-4">
            <SheetClose>
              <Button className="w-full">Nous contacter</Button>
            </SheetClose>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;