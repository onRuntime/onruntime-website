"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { OnRuntimeWordMark } from "@/logos/components";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/lib/schema/contact";
import { z } from "zod";
import { useToast } from '@/hooks/use-toast';

type FormData = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const { toast } = useToast();
  const { 
    register, 
    handleSubmit,
    formState: { errors, isSubmitting },
    reset 
  } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!response.ok) {
        toast({
          title: "Erreur",
          description: result.error || "Une erreur est survenue",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais."
      });
      
      reset();
    } catch {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message",
        variant: "destructive"
      });
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-4 md:px-0 max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6 text-center mb-16">
          <h1 className="font-medium text-4xl md:text-5xl text-foreground">
            Discutons de votre projet
          </h1>
          
          <p className="text-muted-foreground">
            Nous sommes toujours ravis d&apos;échanger sur de nouveaux projets. 
            Contactez-nous pour discuter de vos idées et voir comment nous pouvons vous aider.
          </p>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "z-[-1]",
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-card rounded-lg p-6 border">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-foreground">Nom complet</span>
                  <input 
                    {...register('name')}
                    type="text"
                    className={cn(
                      "mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                      errors.name && "border-red-500"
                    )}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-foreground">Email</span>
                  <input 
                    {...register('email')}
                    type="email"
                    className={cn(
                      "mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                      errors.email && "border-red-500"
                    )}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-foreground">Message</span>
                  <textarea
                    {...register('message')}
                    className={cn(
                      "mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-32",
                      errors.message && "border-red-500"
                    )}
                    placeholder="Décrivez votre projet..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                  )}
                </label>
              </div>

              <Button disabled={isSubmitting} className="w-full">
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">Informations de contact</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-muted">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">contact@onruntime.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-muted">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground">Nos bureaux</p>
                    <p className="text-sm text-muted-foreground">Rouen & Paris, France</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-muted">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground">Téléphone</p>
                    <p className="text-sm text-muted-foreground">+33 7 56 90 93 75</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">Horaires d&apos;ouverture</h2>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="text-foreground font-medium">Lundi - Vendredi:</span>
                  <span className="text-muted-foreground ml-2">9:00 - 18:00</span>
                </p>
                <p className="text-sm">
                  <span className="text-foreground font-medium">Weekend:</span>
                  <span className="text-muted-foreground ml-2">Fermé</span>
                </p>
              </div>
            </div>

            <div className="pt-6 border-t">
              <OnRuntimeWordMark height={24} className="mb-4" />
              <p className="text-sm text-muted-foreground">
                Un studio créatif dédié à transformer vos idées en réalité numérique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;