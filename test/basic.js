const assert = require('assert')


describe('shopping cart', function() {

    it('add all small size shirt', function()  {
        browser.url('https://react-shopping-cart-67954.firebaseapp.com/');
        const title = browser.getTitle()
        console.log(title);
        assert.strictEqual(title, 'React Shopping Cart');
        //$$(.//div[@class='shelf-item']//div[@class='shelf-item__buy-btn']
        var selectors = {
            "CheckoutBtn": "div.buy-btn",
            "AddToCartBtn": ".shelf-item__buy-btn",
            "ShirtSize": "(//span[contains(@class,'checkmark')])[2]",
            "DeleteOrder": "div.shelf-item__del",
        }

        //select shirt size
        $(selectors["ShirtSize"]).waitForEnabled(5000);
        $(selectors["ShirtSize"]).click();
        browser.pause(3000);

        //Add to cart using $$ selector
        $$(selectors["AddToCartBtn"]).map(x => x.click());
        browser.pause(3000);

        //Delete All from the cart
        $$(selectors["DeleteOrder"]).map(x => x.click());
        browser.pause(3000);
        
        //Add last small size shirt selection
        $$(selectors["AddToCartBtn"]).pop().click();
        browser.pause(2000)

        //cart checkout
        $(selectors["CheckoutBtn"]).waitForEnabled(5000);
        $(selectors["CheckoutBtn"]).click();
        browser.pause(2000)

        //Confirm checkout
        browser.acceptAlert();
        browser.pause(2000);    
    })

    it('add lowest price shirt', function()  {
        //open new session
        browser.reloadSession();
        browser.url('https://react-shopping-cart-67954.firebaseapp.com/');
        const title = browser.getTitle()
        console.log(title);
        assert.strictEqual(title, 'React Shopping Cart');

        var selectors = {
            "LowestPriceOption": "/html/body/div/main/div[2]/div[1]/div/select/option[2]",
            "AddToCartBtn": "/html/body/div/main/div[2]/div[2]//div[contains(text(),'Add to cart')]",
            "CheckoutBtn": ".//*[contains(text(),'Checkout')]",
        }

        //select shirt size
        $(selectors["LowestPriceOption"]).waitForEnabled(5000);
        $(selectors["LowestPriceOption"]).click();
        browser.pause(2000)
        //select shirt design
        $(selectors["AddToCartBtn"]).waitForEnabled(5000);
        $(selectors["AddToCartBtn"]).click();
        browser.pause(2000)
        //cart checkout
        $(selectors["CheckoutBtn"]).waitForEnabled(5000);
        $(selectors["CheckoutBtn"]).click();
        browser.pause(2000)
        //Confirm checkout
        browser.acceptAlert();
        browser.pause(4000)
    })


})