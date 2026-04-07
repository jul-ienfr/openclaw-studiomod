// Layout Templates — structural design system (independent of color presets)
// Each template changes the composition, grid, effects, animations, borders, and density.
// Templates are combinable with any color preset.

export type LayoutTemplateId =
  | "default"
  | "bento"
  | "glassmorphism"
  | "neobrutalism"
  | "cinematic-dark"
  // Phase 8b (planned)
  | "typographic"
  | "noise-chromatic"
  | "corporate-clean"
  | "warm-organic";

export type LayoutTemplate = {
  id: LayoutTemplateId;
  name: string;
  description: string;
  category: "active" | "planned";
};

export const LAYOUT_TEMPLATES: LayoutTemplate[] = [
  {
    id: "default",
    name: "Default",
    description: "Le design standard d'OpenClaw Studio",
    category: "active",
  },
  {
    id: "bento",
    name: "Bento Grid",
    description:
      "Grille asymétrique style Apple — cartes multi-tailles, ombres douces, sans bordures",
    category: "active",
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    description:
      "Vitres givrées semi-transparentes, blur, gradient mesh animé en fond",
    category: "active",
  },
  {
    id: "neobrutalism",
    name: "Neobrutalism",
    description:
      "Bordures épaisses noires, ombres décalées, typo bold, zéro blur",
    category: "active",
  },
  {
    id: "cinematic-dark",
    name: "Cinematic Dark",
    description:
      "Noir profond, accents néon lumineux, typo fine oversized, glow sur hover",
    category: "active",
  },
  // Phase 8b — planned
  {
    id: "typographic",
    name: "Typographic",
    description:
      "Typo géante comme élément principal, minimal, beaucoup d'espace blanc",
    category: "planned",
  },
  {
    id: "noise-chromatic",
    name: "Noise & Chromatic",
    description: "Textures grain, gradients néon multi-couleurs, effets glitch",
    category: "planned",
  },
  {
    id: "corporate-clean",
    name: "Corporate Clean",
    description: "Blanc pur, grid strict, flat, professionnel, sobre",
    category: "planned",
  },
  {
    id: "warm-organic",
    name: "Warm Organic",
    description:
      "Gradients chauds, coins ultra-arrondis, ombres diffuses, ambiance douce",
    category: "planned",
  },
];

export const DEFAULT_TEMPLATE_ID: LayoutTemplateId = "default";
