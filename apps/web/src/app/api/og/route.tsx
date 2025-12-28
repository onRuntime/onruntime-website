
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { siteConfig } from "@/lib/utils/metadata";
import { OnRuntimeWordMark } from "@/logos/components";

export const runtime = "edge";

const figtreeRegular = fetch(
  "https://cdn.jsdelivr.net/fontsource/fonts/figtree@latest/latin-400-normal.ttf"
).then((res) => res.arrayBuffer());

const figtreeBold = fetch(
  "https://cdn.jsdelivr.net/fontsource/fonts/figtree@latest/latin-700-normal.ttf"
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  
  const { searchParams } = new URL(req.url);

  const title = searchParams.get("title") || siteConfig.name;
  const description = searchParams.get("description") || siteConfig.description;

  const [regularFont, boldFont] = await Promise.all([
    figtreeRegular,
    figtreeBold,
  ]);

  const colors = {
    background: "#1A1A1A", 
    text: "#FFFFFF",       
    textMuted: "#A1A1AA",  
    blue: "#3B82F6",       
    magenta: "#DA22FF"     
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
}