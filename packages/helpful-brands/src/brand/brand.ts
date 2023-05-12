export interface IZBrand {
  id: string;
  name: string;
  founded: number;
  owner?: string;
}

export class ZBrandBuilder {
  private _brand: IZBrand;

  public constructor() {
    this._brand = {
      id: '',
      name: '',
      founded: NaN
    };
  }

  public id(val: string): this {
    this._brand.id = val;
    return this;
  }

  public name(val: string): this {
    this._brand.name = val;
    return this;
  }

  public founded(val: number): this {
    this._brand.founded = val;
    return this;
  }

  public owner(val: string): this {
    this._brand.owner = val;
    return this;
  }

  public facebook(): this {
    return this.id('facebook').name('Facebook').founded(2004).owner('Meta Platforms');
  }

  public twitter(): this {
    return this.id('twitter').name('Twitter').founded(2006).owner('X Corp.');
  }

  public instagram(): this {
    return this.id('instagram').name('Instagram').founded(2010).owner('Meta Platforms');
  }

  public tiktok(): this {
    return this.id('tiktok').name('TikTok').founded(2016);
  }

  public linkedin(): this {
    return this.id('linkedin').name('LinkedIn').founded(2003).owner('Microsoft');
  }

  public github(): this {
    return this.id('github').name('GitHub').founded(2008).owner('Microsoft');
  }

  public discord(): this {
    return this.id('discord').name('Discord').founded(2015);
  }

  public youtube(): this {
    return this.id('youtube').name('YouTube').founded(2005).owner('Google LLC');
  }

  public wordpress(): this {
    return this.id('wordpress').name('WordPress').founded(2003);
  }

  public slack(): this {
    return this.id('slack').name('Slack').founded(2013);
  }

  public figma(): this {
    return this.id('figma').name('Figma').founded(2016);
  }

  public apple(): this {
    return this.id('apple').name('Apple').founded(1976);
  }

  public google(): this {
    return this.id('google').name('Google').founded(1998).owner('Alphabet Inc');
  }

  public stripe(): this {
    return this.id('stripe').name('Stripe').founded(2009);
  }

  public algolia(): this {
    return this.id('algolia').name('Algolia').founded(2021);
  }

  public docker(): this {
    return this.id('docker').name('Docker').founded(2013);
  }

  public windows(): this {
    return this.id('windows').name('Windows').founded(1985).owner('Microsoft');
  }

  public paypal(): this {
    return this.id('paypal').name('PayPal').founded(1998);
  }

  public stackOverflow(): this {
    return this.id('stack-overflow').name('Stack Overflow').founded(2008).owner('Prosus');
  }

  public kickstarter(): this {
    return this.id('kickstarter').name('Kickstarter').founded(2008).owner('Prosus');
  }

  public dropbox(): this {
    return this.id('dropbox').name('Dropbox').founded(2008).owner('Dropbox, Inc.');
  }

  public squarespace(): this {
    return this.id('squarespace').name('Squarespace').founded(2004);
  }

  public android(): this {
    return this.id('android').name('Android').founded(2008).owner('Google LLC');
  }

  public shopify(): this {
    return this.id('shopify').name('Shopify').founded(2006);
  }

  public medium(): this {
    return this.id('medium').name('Medium').founded(2012).owner('A Medium Corporation');
  }

  public codepen(): this {
    return this.id('codepen').name('CodePen').founded(2012);
  }

  public cloudflare(): this {
    return this.id('cloudflare').name('Cloudflare').founded(2009);
  }

  public airbnb(): this {
    return this.id('airbnb').name('Airbnb').founded(2008);
  }

  public vimeo(): this {
    return this.id('vimeo').name('Vimeo').founded(2004);
  }

  public whatsapp(): this {
    return this.id('whatsapp').name('WhatsApp').founded(2009).owner('Meta Platforms');
  }

  public intercom(): this {
    return this.id('intercom').name('Intercom').founded(2011);
  }

  public usps(): this {
    return this.id('usps').name('United States Postal Service').founded(1971);
  }

  public wix(): this {
    return this.id('wix').name('Wix').founded(2006);
  }

  public line(): this {
    return this.id('line').name('Line').founded(2011);
  }

  public build(): IZBrand {
    return JSON.parse(JSON.stringify(this._brand));
  }
}
