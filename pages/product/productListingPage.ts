import { expect, Locator, Page } from '@playwright/test';
import { templatePage } from '../common/templatePage';

interface ProductListing {
    "name": string;
    "shortDescription": string;
    "price": string;
    "description": string;
}

export class productListingPage extends templatePage  {
    readonly page: Page;
    readonly productListing: ProductListing;
 
    constructor(page: Page, productListing: ProductListing) {
        super(page);
        this.productListing = productListing;
    }

    goto(){
        
    }

    printproductDetails() {
        console.log(this.productListing);
    }
}


