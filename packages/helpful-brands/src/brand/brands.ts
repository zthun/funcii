import { ZBrandBuilder } from './brand';

/**
 * All brands in one constant array.
 *
 * This array is immutable and frozen.  If you need
 * to have a mutable list of brands, use the
 * {@link Array.slice} method to create one.
 */
export const ZBrands = Object.freeze([
  new ZBrandBuilder().facebook().build(),
  new ZBrandBuilder().x().build(),
  new ZBrandBuilder().instagram().build(),
  new ZBrandBuilder().tiktok().build(),
  new ZBrandBuilder().linkedin().build(),
  new ZBrandBuilder().github().build(),
  new ZBrandBuilder().discord().build(),
  new ZBrandBuilder().youtube().build(),
  new ZBrandBuilder().wordpress().build(),
  new ZBrandBuilder().slack().build(),
  new ZBrandBuilder().figma().build(),
  new ZBrandBuilder().apple().build(),
  new ZBrandBuilder().google().build(),
  new ZBrandBuilder().stripe().build(),
  new ZBrandBuilder().algolia().build(),
  new ZBrandBuilder().docker().build(),
  new ZBrandBuilder().windows().build(),
  new ZBrandBuilder().paypal().build(),
  new ZBrandBuilder().stackOverflow().build(),
  new ZBrandBuilder().kickstarter().build(),
  new ZBrandBuilder().dropbox().build(),
  new ZBrandBuilder().squarespace().build(),
  new ZBrandBuilder().android().build(),
  new ZBrandBuilder().shopify().build(),
  new ZBrandBuilder().medium().build(),
  new ZBrandBuilder().codepen().build(),
  new ZBrandBuilder().cloudflare().build(),
  new ZBrandBuilder().airbnb().build(),
  new ZBrandBuilder().vimeo().build(),
  new ZBrandBuilder().whatsapp().build(),
  new ZBrandBuilder().intercom().build(),
  new ZBrandBuilder().usps().build(),
  new ZBrandBuilder().wix().build(),
  new ZBrandBuilder().line().build()
]);
