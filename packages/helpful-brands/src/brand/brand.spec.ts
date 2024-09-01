import { describe, expect, it } from "vitest";
import { ZBrandBuilder } from "./brand.mjs";

describe("ZBrandBuilder", () => {
  const createTestTarget = () => new ZBrandBuilder();

  describe("Facebook", () => {
    it("should set the id.", () =>
      expect(createTestTarget().facebook().build().id).toEqual("facebook"));
    it("should set the name.", () =>
      expect(createTestTarget().facebook().build().name).toEqual("Facebook"));
  });

  describe("Twitter (Aka X)", () => {
    it("should set the id.", () =>
      expect(createTestTarget().twitter().build().id).toEqual("x-twitter"));
    it("should set the name.", () =>
      expect(createTestTarget().twitter().build().name).toEqual("X"));
  });

  describe("Instagram", () => {
    it("should set the id.", () =>
      expect(createTestTarget().instagram().build().id).toEqual("instagram"));
    it("should set the name.", () =>
      expect(createTestTarget().instagram().build().name).toEqual("Instagram"));
  });

  describe("TikTok", () => {
    it("should set the id.", () =>
      expect(createTestTarget().tiktok().build().id).toEqual("tiktok"));
    it("should set the name.", () =>
      expect(createTestTarget().tiktok().build().name).toEqual("TikTok"));
  });

  describe("LinkedIn", () => {
    it("should set the id.", () =>
      expect(createTestTarget().linkedin().build().id).toEqual("linkedin"));
    it("should set the name.", () =>
      expect(createTestTarget().linkedin().build().name).toEqual("LinkedIn"));
  });

  describe("Github", () => {
    it("should set the id.", () =>
      expect(createTestTarget().github().build().id).toEqual("github"));
    it("should set the name.", () =>
      expect(createTestTarget().github().build().name).toEqual("GitHub"));
  });

  describe("Discord", () => {
    it("should set the id.", () =>
      expect(createTestTarget().discord().build().id).toEqual("discord"));
    it("should set the name.", () =>
      expect(createTestTarget().discord().build().name).toEqual("Discord"));
  });

  describe("YouTube", () => {
    it("should set the id.", () =>
      expect(createTestTarget().youtube().build().id).toEqual("youtube"));
    it("should set the name.", () =>
      expect(createTestTarget().youtube().build().name).toEqual("YouTube"));
  });

  describe("WordPress", () => {
    it("should set the id.", () =>
      expect(createTestTarget().wordpress().build().id).toEqual("wordpress"));
    it("should set the name.", () =>
      expect(createTestTarget().wordpress().build().name).toEqual("WordPress"));
  });

  describe("Slack", () => {
    it("should set the id.", () =>
      expect(createTestTarget().slack().build().id).toEqual("slack"));
    it("should set the name.", () =>
      expect(createTestTarget().slack().build().name).toEqual("Slack"));
  });

  describe("Figma", () => {
    it("should set the id.", () =>
      expect(createTestTarget().figma().build().id).toEqual("figma"));
    it("should set the name.", () =>
      expect(createTestTarget().figma().build().name).toEqual("Figma"));
  });

  describe("Apple", () => {
    it("should set the id.", () =>
      expect(createTestTarget().apple().build().id).toEqual("apple"));
    it("should set the name.", () =>
      expect(createTestTarget().apple().build().name).toEqual("Apple"));
  });

  describe("Google", () => {
    it("should set the id.", () =>
      expect(createTestTarget().google().build().id).toEqual("google"));
    it("should set the name.", () =>
      expect(createTestTarget().google().build().name).toEqual("Google"));
  });

  describe("Stripe", () => {
    it("should set the id.", () =>
      expect(createTestTarget().stripe().build().id).toEqual("stripe"));
    it("should set the name.", () =>
      expect(createTestTarget().stripe().build().name).toEqual("Stripe"));
  });

  describe("Algolia", () => {
    it("should set the id.", () =>
      expect(createTestTarget().algolia().build().id).toEqual("algolia"));
    it("should set the name.", () =>
      expect(createTestTarget().algolia().build().name).toEqual("Algolia"));
  });

  describe("Docker", () => {
    it("should set the id.", () =>
      expect(createTestTarget().docker().build().id).toEqual("docker"));
    it("should set the name.", () =>
      expect(createTestTarget().docker().build().name).toEqual("Docker"));
  });

  describe("Windows", () => {
    it("should set the id.", () =>
      expect(createTestTarget().windows().build().id).toEqual("windows"));
    it("should set the name.", () =>
      expect(createTestTarget().windows().build().name).toEqual("Windows"));
  });

  describe("PayPal", () => {
    it("should set the id.", () =>
      expect(createTestTarget().paypal().build().id).toEqual("paypal"));
    it("should set the name.", () =>
      expect(createTestTarget().paypal().build().name).toEqual("PayPal"));
  });

  describe("Stack Overflow", () => {
    it("should set the id.", () =>
      expect(createTestTarget().stackOverflow().build().id).toEqual(
        "stack-overflow",
      ));
    it("should set the name.", () =>
      expect(createTestTarget().stackOverflow().build().name).toEqual(
        "Stack Overflow",
      ));
  });

  describe("Kickstarter", () => {
    it("should set the id.", () =>
      expect(createTestTarget().kickstarter().build().id).toEqual(
        "kickstarter",
      ));
    it("should set the name.", () =>
      expect(createTestTarget().kickstarter().build().name).toEqual(
        "Kickstarter",
      ));
  });

  describe("Dropbox", () => {
    it("should set the id.", () =>
      expect(createTestTarget().dropbox().build().id).toEqual("dropbox"));
    it("should set the name.", () =>
      expect(createTestTarget().dropbox().build().name).toEqual("Dropbox"));
  });

  describe("Squarespace", () => {
    it("should set the id.", () =>
      expect(createTestTarget().squarespace().build().id).toEqual(
        "squarespace",
      ));
    it("should set the name.", () =>
      expect(createTestTarget().squarespace().build().name).toEqual(
        "Squarespace",
      ));
  });

  describe("Android", () => {
    it("should set the id.", () =>
      expect(createTestTarget().android().build().id).toEqual("android"));
    it("should set the name.", () =>
      expect(createTestTarget().android().build().name).toEqual("Android"));
  });

  describe("Shopify", () => {
    it("should set the id.", () =>
      expect(createTestTarget().shopify().build().id).toEqual("shopify"));
    it("should set the name.", () =>
      expect(createTestTarget().shopify().build().name).toEqual("Shopify"));
  });

  describe("Medium", () => {
    it("should set the id.", () =>
      expect(createTestTarget().medium().build().id).toEqual("medium"));
    it("should set the name.", () =>
      expect(createTestTarget().medium().build().name).toEqual("Medium"));
  });

  describe("CodePen", () => {
    it("should set the id.", () =>
      expect(createTestTarget().codepen().build().id).toEqual("codepen"));
    it("should set the name.", () =>
      expect(createTestTarget().codepen().build().name).toEqual("CodePen"));
  });

  describe("CloudFlare", () => {
    it("should set the id.", () =>
      expect(createTestTarget().cloudflare().build().id).toEqual("cloudflare"));
    it("should set the name.", () =>
      expect(createTestTarget().cloudflare().build().name).toEqual(
        "Cloudflare",
      ));
  });

  describe("Airbnb", () => {
    it("should set the id.", () =>
      expect(createTestTarget().airbnb().build().id).toEqual("airbnb"));
    it("should set the name.", () =>
      expect(createTestTarget().airbnb().build().name).toEqual("Airbnb"));
  });

  describe("Vimeo", () => {
    it("should set the id.", () =>
      expect(createTestTarget().vimeo().build().id).toEqual("vimeo"));
    it("should set the name.", () =>
      expect(createTestTarget().vimeo().build().name).toEqual("Vimeo"));
  });

  describe("WhatsApp", () => {
    it("should set the id.", () =>
      expect(createTestTarget().whatsapp().build().id).toEqual("whatsapp"));
    it("should set the name.", () =>
      expect(createTestTarget().whatsapp().build().name).toEqual("WhatsApp"));
  });

  describe("Intercom", () => {
    it("should set the id.", () =>
      expect(createTestTarget().intercom().build().id).toEqual("intercom"));
    it("should set the name.", () =>
      expect(createTestTarget().intercom().build().name).toEqual("Intercom"));
  });

  describe("United States Postal Service", () => {
    it("should set the id.", () =>
      expect(createTestTarget().usps().build().id).toEqual("usps"));
    it("should set the name.", () =>
      expect(createTestTarget().usps().build().name).toEqual(
        "United States Postal Service",
      ));
  });

  describe("Wix", () => {
    it("should set the id.", () =>
      expect(createTestTarget().wix().build().id).toEqual("wix"));
    it("should set the name.", () =>
      expect(createTestTarget().wix().build().name).toEqual("Wix"));
  });

  describe("Line", () => {
    it("should set the id.", () =>
      expect(createTestTarget().line().build().id).toEqual("line"));
    it("should set the name.", () =>
      expect(createTestTarget().line().build().name).toEqual("Line"));
  });
});
