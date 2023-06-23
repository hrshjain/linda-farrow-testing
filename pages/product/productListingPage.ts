import { expect, Locator, Page } from '@playwright/test';
import { templatePage } from '../common/templatePage';

interface color {
    "link": string,
    "name": string,
    "frameColor": string,
    "lensColor": string
}

interface ProductListing {
    "title": string;
    "shortDescription": string;
    "price": string;
    "description": string;
    "details": string[];
    "sizeAndFit": string[];
    "colors": color[];
}

export class productListingPage extends templatePage  {
    readonly page: Page;
    readonly productListing: ProductListing;

    readonly productTitle: Locator;
    readonly productshortDescription: Locator;
    readonly productPrice: Locator;
    readonly addToBasketButton: Locator;

    readonly productDescriptionHeading: Locator;
    readonly productDescriptionPlusMinusButton: Locator;
    readonly productDescription: Locator;
   
    readonly productDetailsHeading: Locator;
    readonly productDetailsPlusMinusButton: Locator;
    readonly productDetails: Locator;
    
    readonly productSizeAndFitHeading: Locator;
    readonly productSizeAndFitPlusMinusButton: Locator;
    readonly productSizeAndFit: Locator;
    readonly productColors: Locator;
    readonly wishListIcon: Locator;
 
    constructor(page: Page, productListing: ProductListing) {
        super(page);
        this.productListing = productListing;

        this.productTitle = page.locator('h1.product-title'); 
        this.productshortDescription = page.locator('.product-short-description p'); 
        this.productPrice = page.locator('.product-detail-price .money'); 
        this.addToBasketButton = page.getByRole('button', { name: 'Add to Basket' });

        this.productDescriptionHeading = page.getByRole('heading', { name: 'Description' })
        this.productDescriptionPlusMinusButton = page.locator('.accordion-item')
                                                     .filter({ hasText: /Description/ })
                                                     .locator('.plus-minus-icon');
        this.productDescription = page.locator('.accordion-item.active')
                                      .filter({ hasText: /Description/ })
                                      .locator('accordion-content .rte span'); 
        
        this.productDetailsHeading = page.getByRole('heading', { name: 'Details' })
        this.productDetailsPlusMinusButton = page.locator('.accordion-item')
                                                 .filter({ hasText: /Details/ })
                                                 .locator('.plus-minus-icon');
        this.productDetails = page.locator('.accordion-item.active') 
                                  .filter({ hasText: /Details/ })
                                  .locator('accordion-content .rte'); 
        
        this.productSizeAndFitHeading = page.getByRole('heading', { name: 'Size & Fit' })
        this.productSizeAndFitPlusMinusButton = page.locator('.accordion-item')
                                                    .filter({ hasText: /Size & Fit/ })
                                                    .locator('.plus-minus-icon');
        this.productSizeAndFit = page.locator('.accordion-item.active') 
                                     .filter({ hasText: /Size & Fit/ })
                                     .locator('accordion-content .rte'); 
        
        this.productColors = page.locator('.product-colours'); 

        this.wishListIcon = page.getByRole('button', { name: 'Add to Wishlist' })
    }

    async goto(){
        
    }

    async selectColor(){

    }

    async clickAddToBasketButton(){
        
    }
}


