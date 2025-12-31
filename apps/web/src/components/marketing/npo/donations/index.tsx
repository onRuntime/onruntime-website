"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check, CreditCard, Gift, Heart } from "lucide-react";
import { useTranslation } from "@onruntime/translations/react";

const Donations: React.FC = () => {
  const { t } = useTranslation("components/marketing/npo/donations");
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDonation = async () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const amount = selectedAmount || customAmount;
      toast({
        title: t("toast.title"),
        description: `${t("toast.description-prefix")} ${amount}€ ${t("toast.description-suffix")}`,
      });

      setSelectedAmount(null);
      setCustomAmount("");
    }, 1500);
  };

  const displayAmount = selectedAmount || customAmount || "0";

  return (
    <div className="p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-2 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
          <Gift className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-medium text-foreground">{t("title")}</h3>
      </div>

      <p className="text-muted-foreground mb-6">{t("description")}</p>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {[10, 20, 50, 100, 200].map((amount) => (
          <Button
            key={amount}
            variant={selectedAmount === amount ? "default" : "outline"}
            onClick={() => {
              setSelectedAmount(amount);
              setCustomAmount("");
            }}
            className="relative"
          >
            {amount}€
            {selectedAmount === amount && (
              <span className="absolute -top-1 -right-1 bg-onruntime-blue text-white rounded-full p-0.5">
                <Check className="h-3 w-3" />
              </span>
            )}
          </Button>
        ))}
        <div className="relative">
          <Button
            variant={customAmount ? "default" : "outline"}
            onClick={() => {
              setSelectedAmount(null);
              if (!customAmount) setCustomAmount("");
            }}
            className="w-full"
          >
            {t("other")}
            {customAmount && (
              <span className="absolute -top-1 -right-1 bg-onruntime-blue text-white rounded-full p-0.5">
                <Check className="h-3 w-3" />
              </span>
            )}
          </Button>
        </div>
      </div>

      {(customAmount !== "" || selectedAmount === null) && (
        <div className="mb-6 mt-a">
          <label className="block text-sm font-medium text-foreground mb-2">
            {t("custom-amount.label")}
          </label>
          <div className="relative">
            <input
              type="number"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              placeholder={t("custom-amount.placeholder")}
              className="w-full px-3 py-2 border rounded-md focus:outline-hidden focus:ring-2 focus:ring-onruntime-blue"
              min="1"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground">
              €
            </span>
          </div>
        </div>
      )}

      <Button
        className="w-full"
        onClick={handleDonation}
        disabled={(!selectedAmount && !customAmount) || isProcessing}
      >
        {isProcessing ? (
          <>
            <span className="animate-spin mr-2">⏳</span>
            {t("button.processing")}
          </>
        ) : (
          <>
            {t("button.donate")} {displayAmount}€
            <Heart className="ml-2 w-4 h-4" />
          </>
        )}
      </Button>

      <div className="flex items-center justify-center mt-4">
        <CreditCard className="w-4 h-4 mr-2 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">
          {t("secure-payment")}
        </span>
      </div>
    </div>
  );
};

export default Donations;