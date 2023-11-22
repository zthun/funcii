/**
 * Represents a company brand.
 */
export interface IZBrand {
  /**
   * The id of the brand.
   *
   * These are normally found as a name of
   * {@link https://fontawesome.com/search?o=r&m=free&f=brands | Font Awesome's brand library}
   */
  id: string;
  /**
   * The display friendly name of the brand.
   */
  name: string;
  /**
   * The year that the brand was founded.
   */
  founded: number;
  /**
   * The parent company that owns the brand.
   *
   * @example
   *
   * ```ts
   * // The parent company of facebook is Meta.
   * const facebook = { id: 'facebook', name: 'Facebook', founded: 2004, owner: 'Meta Platforms'}
   * ```
   */
  owner?: string;
}

/**
 * Represents a builder that outputs a brand object.
 */
export class ZBrandBuilder {
  private _brand: IZBrand;

  /**
   * Initializes a new instance of this object.
   *
   * The default brand will have the empty string as the id,
   * the empty string as the name, and founded with be NaN.
   */
  public constructor() {
    this._brand = {
      id: '',
      name: '',
      founded: NaN
    };
  }

  /**
   * Sets the id of the brand.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        A reference to this object.
   */
  public id(val: string): this {
    this._brand.id = val;
    return this;
  }

  /**
   * Sets the name of the brand.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        A reference to this object.
   */
  public name(val: string): this {
    this._brand.name = val;
    return this;
  }

  /**
   * Sets the year the brand was founded (aka created).
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        A reference to this object.
   */
  public founded(val: number): this {
    this._brand.founded = val;
    return this;
  }

  /**
   * Sets the parent or umbrella company of the brand.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        A reference to this object.
   */
  public owner(val: string): this {
    this._brand.owner = val;
    return this;
  }

  /**
   * Constructs the brand object for {@link https://www.facebook.com/ | Facebook}.
   *
   * @returns
   *        A reference to this object.
   */
  public facebook(): this {
    return this.id('facebook').name('Facebook').founded(2004).owner('Meta Platforms');
  }

  /**
   * Constructs the brand object for {@link https://twitter.com/ | X (Formally Twitter)}.
   *
   * @returns
   *        A reference to this object.
   */
  public x(): this {
    return this.id('x-twitter').name('X').founded(2006).owner('X Corp.');
  }

  /**
   * Alias to {@link x}
   *
   * @returns
   *        A reference to this object.
   */
  public twitter = this.x.bind(this);

  /**
   * Constructs the brand object for {@link https://www.instagram.com/ | Instagram}.
   *
   * @returns
   *        A reference to this object.
   */
  public instagram(): this {
    return this.id('instagram').name('Instagram').founded(2010).owner('Meta Platforms');
  }

  /**
   * Constructs the brand object for {@link https://www.tiktok.com | TikTok}.
   *
   * @returns
   *        A reference to this object.
   */
  public tiktok(): this {
    return this.id('tiktok').name('TikTok').founded(2016);
  }

  /**
   * Constructs the brand object for {@link https://www.linkedin.com/ | LinkedIn}.
   *
   * @returns
   *        A reference to this object.
   */
  public linkedin(): this {
    return this.id('linkedin').name('LinkedIn').founded(2003).owner('Microsoft');
  }

  /**
   * Constructs the brand object for {@link https://github.com/ | GitHub}.
   *
   * @returns
   *        A reference to this object.
   */
  public github(): this {
    return this.id('github').name('GitHub').founded(2008).owner('Microsoft');
  }

  /**
   * Constructs the brand object for {@link https://discord.com/ | Discord}.
   *
   * @returns
   *        A reference to this object.
   */
  public discord(): this {
    return this.id('discord').name('Discord').founded(2015);
  }

  /**
   * Constructs the brand object for {@link https://www.youtube.com/ | YouTube}.
   *
   * @returns
   *        A reference to this object.
   */
  public youtube(): this {
    return this.id('youtube').name('YouTube').founded(2005).owner('Google LLC');
  }

  /**
   * Constructs the brand object for {@link https://wordpress.com/ | WordPress}.
   *
   * @returns
   *        A reference to this object.
   */
  public wordpress(): this {
    return this.id('wordpress').name('WordPress').founded(2003);
  }

  /**
   * Constructs the brand object for {@link https://slack.com/ | Slack}.
   *
   * @returns
   *        A reference to this object.
   */
  public slack(): this {
    return this.id('slack').name('Slack').founded(2013);
  }

  /**
   * Constructs the brand object for {@link https://www.figma.com/ | Figma}.
   *
   * @returns
   *        A reference to this object.
   */
  public figma(): this {
    return this.id('figma').name('Figma').founded(2016);
  }

  /**
   * Constructs the brand object for {@link https://www.apple.com/ | Apple}.
   *
   * @returns
   *        A reference to this object.
   */
  public apple(): this {
    return this.id('apple').name('Apple').founded(1976);
  }

  /**
   * Constructs the brand object for {@link https://www.google.com/ | Google}.
   *
   * @returns
   *        A reference to this object.
   */
  public google(): this {
    return this.id('google').name('Google').founded(1998).owner('Alphabet Inc');
  }

  /**
   * Constructs the brand object for {@link https://stripe.com/ | Stripe}.
   *
   * @returns
   *        A reference to this object.
   */
  public stripe(): this {
    return this.id('stripe').name('Stripe').founded(2009);
  }

  /**
   * Constructs the brand object for {@link https://www.algolia.com/ | Algolia}.
   *
   * @returns
   *        A reference to this object.
   */
  public algolia(): this {
    return this.id('algolia').name('Algolia').founded(2021);
  }

  /**
   * Constructs the brand object for {@link https://www.docker.com/| Docker}.
   *
   * @returns
   *        A reference to this object.
   */
  public docker(): this {
    return this.id('docker').name('Docker').founded(2013);
  }

  /**
   * Constructs the brand object for {@link https://www.microsoft.com/en-us/windows | Windows}.
   *
   * @returns
   *        A reference to this object.
   */
  public windows(): this {
    return this.id('windows').name('Windows').founded(1985).owner('Microsoft');
  }

  /**
   * Constructs the brand object for {@link https://www.paypal.com/ | PayPal}.
   *
   * @returns
   *        A reference to this object.
   */
  public paypal(): this {
    return this.id('paypal').name('PayPal').founded(1998);
  }

  /**
   * Constructs the brand object for {@link https://stackoverflow.com/ | StackOverflow}.
   *
   * @returns
   *        A reference to this object.
   */
  public stackOverflow(): this {
    return this.id('stack-overflow').name('Stack Overflow').founded(2008).owner('Prosus');
  }

  /**
   * Constructs the brand object for {@link https://www.kickstarter.com/ | Kickstarter}.
   *
   * @returns
   *        A reference to this object.
   */
  public kickstarter(): this {
    return this.id('kickstarter').name('Kickstarter').founded(2008).owner('Prosus');
  }

  /**
   * Constructs the brand object for {@link https://www.dropbox.com/ | Dropbox}.
   *
   * @returns
   *        A reference to this object.
   */
  public dropbox(): this {
    return this.id('dropbox').name('Dropbox').founded(2008).owner('Dropbox, Inc.');
  }

  /**
   * Constructs the brand object for {@link https://www.squarespace.com/ | Squarespace}.
   *
   * @returns
   *        A reference to this object.
   */
  public squarespace(): this {
    return this.id('squarespace').name('Squarespace').founded(2004);
  }

  /**
   * Constructs the brand object for {@link https://www.android.com/ | Android}.
   *
   * @returns
   *        A reference to this object.
   */
  public android(): this {
    return this.id('android').name('Android').founded(2008).owner('Google LLC');
  }

  /**
   * Constructs the brand object for {@link https://www.shopify.com/ | Shopify}.
   *
   * @returns
   *        A reference to this object.
   */
  public shopify(): this {
    return this.id('shopify').name('Shopify').founded(2006);
  }

  /**
   * Constructs the brand object for {@link https://medium.com/ | Medium}.
   *
   * @returns
   *        A reference to this object.
   */
  public medium(): this {
    return this.id('medium').name('Medium').founded(2012).owner('A Medium Corporation');
  }

  /**
   * Constructs the brand object for {@link https://codepen.io/ | CodePen}.
   *
   * @returns
   *        A reference to this object.
   */
  public codepen(): this {
    return this.id('codepen').name('CodePen').founded(2012);
  }

  /**
   * Constructs the brand object for {@link https://www.cloudflare.com/ | Cloudflare}.
   *
   * @returns
   *        A reference to this object.
   */
  public cloudflare(): this {
    return this.id('cloudflare').name('Cloudflare').founded(2009);
  }

  /**
   * Constructs the brand object for {@link https://www.airbnb.com/ | Airbnb}.
   *
   * @returns
   *        A reference to this object.
   */
  public airbnb(): this {
    return this.id('airbnb').name('Airbnb').founded(2008);
  }

  /**
   * Constructs the brand object for {@link https://vimeo.com/ | Vimeo}.
   *
   * @returns
   *        A reference to this object.
   */
  public vimeo(): this {
    return this.id('vimeo').name('Vimeo').founded(2004);
  }

  /**
   * Constructs the brand object for {@link https://www.whatsapp.com/| WhatsApp}.
   *
   * @returns
   *        A reference to this object.
   */
  public whatsapp(): this {
    return this.id('whatsapp').name('WhatsApp').founded(2009).owner('Meta Platforms');
  }

  /**
   * Constructs the brand object for {@link https://www.intercom.com/ | Intercom}.
   *
   * @returns
   *        A reference to this object.
   */
  public intercom(): this {
    return this.id('intercom').name('Intercom').founded(2011);
  }

  /**
   * Constructs the brand object for the {@link https://www.usps.com/ | United States Postal Service}.
   *
   * @returns
   *        A reference to this object.
   */
  public usps(): this {
    return this.id('usps').name('United States Postal Service').founded(1971);
  }

  /**
   * Constructs the brand object for {@link https://www.wix.com/ | Wix}.
   *
   * @returns
   *        A reference to this object.
   */
  public wix(): this {
    return this.id('wix').name('Wix').founded(2006);
  }

  /**
   * Constructs the brand object for {@link https://line.me | Line}.
   *
   * @returns
   *        A reference to this object.
   */
  public line(): this {
    return this.id('line').name('Line').founded(2011);
  }

  /**
   * Returns the brand that is built by this builder.
   *
   * @returns
   *        A deep copy of the built brand object.
   */
  public build(): IZBrand {
    return structuredClone(this._brand);
  }
}
