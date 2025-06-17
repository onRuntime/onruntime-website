'use client';

import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";

export const MemberWebsiteButton = ({ url, name }: { url: string, name: string }) => {
  const router = useRouter();
  
  return (
    <Button 
      variant="outline" 
      size="icon"
      onClick={() => router.push(url)}
      title={`Visiter le site de ${name}`}
    >
      <Globe className="w-4 h-4"/>
    </Button>
  );
};