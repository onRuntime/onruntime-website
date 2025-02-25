// src/app/api/og/route.tsx
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { siteConfig } from "@/lib/utils/metadata";
import { OnRuntimeWordMark } from "@/logos/components";

export const runtime = "edge";

// Charger les polices Figtree
const figtreeRegular = fetch(
  "https://cdn.jsdelivr.net/fontsource/fonts/figtree@latest/latin-400-normal.ttf"
).then((res) => res.arrayBuffer());

const figtreeBold = fetch(
  "https://cdn.jsdelivr.net/fontsource/fonts/figtree@latest/latin-700-normal.ttf"
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    // Récupérer les paramètres depuis l'URL
    const { searchParams } = new URL(req.url);
    
    // Paramètres avec valeurs par défaut
    const title = searchParams.get("title") || siteConfig.name;
    const description = searchParams.get("description") || siteConfig.description;
    
    // Charger les polices
    const [regularFont, boldFont] = await Promise.all([
      figtreeRegular,
      figtreeBold,
    ]);

    // Définir les couleurs onRuntime
    const colors = {
      background: "#1A1A1A", // Fond sombre
      text: "#FFFFFF",       // Texte clair
      textMuted: "#A1A1AA",  // Texte secondaire
      blue: "#3B82F6",       // Blue de onRuntime
      magenta: "#DA22FF"     // Magenta de onRuntime
    };

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 64,
            color: colors.text,
            background: colors.background,
            width: "100%",
            height: "100%",
            padding: 64,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            display: "flex",
            fontFamily: "Figtree",
          }}
        >
          {/* Contenu principal */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: "80%" }}>
            {title && (
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                {title}
              </span>
            )}
            {description && (
              <span
                style={{
                  fontSize: 32,
                  color: colors.textMuted,
                }}
              >
                {description}
              </span>
            )}
          </div>
          
          {/* Logo et signature */}
          <div
          style={{
            marginTop: 64,
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 32,
          }}
        >
          <OnRuntimeWordMark
            height={64}
            fill={colors.text}
          />
        </div>
          
          {/* Élément décoratif (gradient ligne du bas) */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 8,
              background: `linear-gradient(to right, ${colors.blue}, ${colors.magenta})`,
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Figtree",
            data: regularFont,
            style: "normal",
            weight: 400,
          },
          {
            name: "Figtree",
            data: boldFont,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (e: any) {
    console.error(`Erreur dans la génération de l'image OG: ${e.message}`);
    return new Response(`Erreur dans la génération de l'image OG: ${e.message}`, {
      status: 500,
    });
  }
}