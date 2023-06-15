import { expect, Locator, Page } from '@playwright/test';

export class templatePage {
    readonly page: Page;
    
    readonly textFeatureHeading: Locator;
    readonly siteLogo: Locator;
    readonly cookieConsentBannerText: Locator;
    readonly cookieConsentBannerAcceptCloseButton: Locator;
    readonly helpButton: Locator;

    readonly menuItemSunglasses: Locator;
    readonly menuItemOpticals: Locator;
    readonly menuItemCollaborations: Locator;
    readonly menuItemAccessories: Locator;
    readonly menuItemVirtualTryOn: Locator;

    readonly headerSearchIcon: Locator;
    readonly headerAccount: Locator;
    readonly headerWishlist: Locator;
    readonly headerBasket: Locator;
    readonly headerCurrencySelect: Locator;
    readonly headerMobileMenu: Locator;

    readonly iconFacebook: Locator;
    readonly iconTwitter: Locator;
    readonly iconPinterest: Locator;
    readonly iconInstagram: Locator;
    readonly iconYoutube: Locator;
    readonly iconWeibo: Locator;

    readonly emailAddressInput: Locator;
    readonly subscribeButton: Locator;
    
    readonly socialfooterTitle: Locator;
    readonly socialfooterText: Locator;

    readonly footerTitleInformation: Locator;
    readonly footerAboutUs: Locator;
    readonly footerFaceShapeGuide: Locator;
    readonly footerCurrentOffers: Locator;
    readonly footerFAQ: Locator;
    readonly footerPrivacyPolicy: Locator;
    readonly footerCareers: Locator;
    readonly footerTerms: Locator;
    
    readonly footerTitleService: Locator;
    readonly footerDelivery: Locator;
    readonly footerOurStores: Locator;
    readonly footerContactUs: Locator;
    readonly footerReturns: Locator;
    readonly footerWarrantyRegistration: Locator;
    readonly footerOnlineRepairForm: Locator;
    readonly footerLensReplacement: Locator;
    
    constructor(page: Page) {
        this.page = page;

        this.textFeatureHeading = page.locator('h4.text-feature-heading');
        this.siteLogo = page.locator('.site-logo');
        this.helpButton = page.getByTestId('launcher');

        // nth locator is generally not recommended. data-test attributes can be used as alternatives
        this.cookieConsentBannerText = page.locator('.wpcc-container .wpcc-message').nth(0); 
        this.cookieConsentBannerAcceptCloseButton = page.locator('.wpcc-compliance .wpcc-btn').nth(0);

        // user-visible and text based locators can be used as alternatives below
        this.menuItemSunglasses = page.locator('[data-menu="sunglasses"]');
        this.menuItemOpticals = page.locator('[data-menu="opticals"]');
        this.menuItemCollaborations = page.locator('[data-menu="collaborations"]');
        this.menuItemAccessories = page.locator('[data-menu="accessories"]');
        this.menuItemVirtualTryOn = page.locator('[data-menu="virtual-try-on"]');
            
        this.headerSearchIcon = page.locator('.header-search-icon');
        this.headerAccount = page.locator('.header-account');
        this.headerWishlist = page.locator('.header-wishlist');
        this.headerBasket = page.locator('.header-basket');
        this.headerCurrencySelect = page.locator('.header-currency-select');
        this.headerMobileMenu = page.locator('.header-mobile-menu');

        this.iconFacebook = page.locator('.icon-facebook');
        this.iconTwitter = page.locator('.icon-twitter');
        this.iconPinterest = page.locator('icon-pinterest');
        this.iconInstagram = page.locator('icon-instagram');
        this.iconYoutube = page.locator('icon-youtube');
        this.iconWeibo = page.locator('icon-weibo');
        
        //  Bug: Duplicate element found in the page
        this.emailAddressInput = page.locator('input[type="email"]');
        this.subscribeButton = page.getByRole('button', { name: 'SUBSCRIBE' });

        this.socialfooterTitle = page.locator('.footer__social h4.footer-title');
        this.socialfooterText = page.locator('.footer__social .gdpr-text > p');

        this.footerTitleInformation = page.getByRole('heading', {name: 'Information'});
        this.footerAboutUs = page.getByRole('link', {name: 'About Us'});
        this.footerFaceShapeGuide = page.getByRole('link', {name: 'Face Shape Guide'});
        this.footerCurrentOffers = page.getByRole('link', {name: 'Current Offers'});
        this.footerFAQ = page.getByRole('link', {name: 'FAQ'});
        this.footerPrivacyPolicy = page.getByRole('link', {name: 'Privacy Policy'});
        this.footerCareers = page.getByRole('link', {name: 'Careers'});
        this.footerTerms = page.getByRole('link', {name: 'Terms'});
        
        this.footerTitleService = page.getByRole('heading', {name: 'Service'});
        this.footerDelivery = page.getByRole('link', {name: 'Delivery'});
        this.footerOurStores = page.getByRole('link', {name: 'Our Stores'});
        this.footerContactUs = page.getByRole('link', {name: 'Contact Us'});
        this.footerReturns = page.getByRole('link', {name: 'Returns'});
        this.footerWarrantyRegistration = page.getByRole('link', {name: 'Warranty Registration'});
        this.footerOnlineRepairForm = page.getByRole('link', {name: 'Online Rapair Form'});
        this.footerLensReplacement = page.getByRole('link', {name: 'Lens Replacement'});

    }

    async verifyFeatureHeading() {
        await expect(this.textFeatureHeading).toHaveText('EXPLORE DROP 3 SPRING \'22 COLLECTION');
    }

    
}
