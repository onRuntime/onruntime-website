"use client"

import { useEffect } from "react"
import { useLocalStorage } from "usehooks-ts"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import Routes from "@/constants/routes"

const STORAGE_KEY = "maintenance-toast-dismissed"

export function MaintenanceToast() {
  const { toast } = useToast()
  const [isDismissed, setIsDismissed] = useLocalStorage(STORAGE_KEY, false)

  useEffect(() => {
    if (!isDismissed) {
      const { dismiss } = toast({
        title: "Site en maintenance",
        description: (
          <div className="grid gap-4">
            <p>
              Nous effectuons actuellement des travaux d&apos;amélioration. 
              Certaines fonctionnalités peuvent être temporairement limitées.
            </p>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open(Routes.socials.x, "_blank")}
              >
                Suivre les actualités
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setIsDismissed(true)
                  dismiss()
                }}
              >
                Ne plus afficher
              </Button>
            </div>
          </div>
        ),
        duration: Infinity,
      })
    }
  }, [toast, isDismissed, setIsDismissed])

  return null
}