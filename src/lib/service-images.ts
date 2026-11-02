import electrical from "@/assets/services/elinstallationer.jpg.asset.json";
import smartHome from "@/assets/services/smarta-hem.jpg.asset.json";
import office from "@/assets/services/kontorsanpassning.jpg.asset.json";
import panel from "@/assets/services/elcentral.jpg";
import charger from "@/assets/services/laddbox.jpg";
import troubleshooting from "@/assets/services/felsokning.jpg";
import lighting from "@/assets/services/belysning.jpg";
import outlets from "@/assets/services/uttag.jpg";
import floorHeating from "@/assets/services/golvvarme.jpg";
import bathroom from "@/assets/services/badrum.jpg";
import installedCharger from "@/assets/laddbox-tesla.png.asset.json";

export const SERVICE_IMAGES: Record<string, string> = {
  elinstallationer: electrical.url,
  "smarta-hem": smartHome.url,
  kontorsanpassning: office.url,
  elcentral: panel,
  laddbox: charger,
  felsokning: troubleshooting,
  "belysning-spotlights": lighting,
  "strombrytare-uttag": outlets,
  golvvarme: floorHeating,
  "elinstallation-badrum": bathroom,
};

export const SERVICE_CARD_IMAGES: Record<string, string> = { ...SERVICE_IMAGES, laddbox: installedCharger.url };