import homeDark from "@/assets/images/navbar/feathers/dark/home.svg";
import resultsDark from "@/assets/images/navbar/feathers/dark/results.svg";
import servicesDark from "@/assets/images/navbar/feathers/dark/services.svg";
import socialDark from "@/assets/images/navbar/feathers/dark/socialMedia.svg";
import homeLight from "@/assets/images/navbar/feathers/light/home.svg";
import resultsLight from "@/assets/images/navbar/feathers/light/results.svg";
import servicesLight from "@/assets/images/navbar/feathers/light/services.svg";
import socialLight from "@/assets/images/navbar/feathers/light/socialMedia.svg";

export function getNavbarLinks(t: Record<string, string>) {
  return [
    {
      label: t.home,
      href: "#home",
      feather: { light: homeLight, dark: homeDark, width: 44, height: 7 },
    },
    {
      label: t.results,
      href: "#results",
      feather: { light: resultsLight, dark: resultsDark, width: 55, height: 7 },
    },
    {
      label: t.services,
      href: "#services",
      feather: { light: servicesLight, dark: servicesDark, width: 64, height: 7 },
    },
    {
      label: t.socialMedia,
      href: "#social-media",
      feather: { light: socialLight, dark: socialDark, width: 94, height: 7 },
    },
  ];
}