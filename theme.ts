import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--brand-primary": "#F7AB0A",
  "--my-yellow": "#f4b400",
  "--my-red": "#db4437",
  "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  //Base theme colors
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  //Brand colors
  "--brand-primary": props["--brand-primary"],

  //Button colors
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--brand-primary"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-danger-color": props["--my-red"],
  "--default-button-warning-color": props["--my-yellow"],

  //State colors
  "--state-info-color": props["--brand-primary"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  //Navigation colors
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--brand-primary"],
});
