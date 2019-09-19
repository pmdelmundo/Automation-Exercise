const assert = require('assert')


describe('shopping cart', function() {

    it('add all small size shirt', function()  {
        browser.url('https://react-shopping-cart-67954.firebaseapp.com/');
        const title = browser.getTitle()
        console.log(title);
        assert.strictEqual(title, 'React Shopping Cart');

        var selectors = {
            "CheckoutBtn": ".//*[contains(text(),'Checkout')]",
            "AddToCartBtn": ".//div[@class='shelf-item__buy-btn'][1]",
            "ShirtSize": "(//span[contains(@class,'checkmark')])[2]",
        }

        //select shirt size
        $(selectors["ShirtSize"]).waitForEnabled(5000);
        $(selectors["ShirtSize"]).click();
        browser.pause(4000);

        //Add all small shirts to cart, depends on the availble number of 'add to cart' button
        //increment index of xpath
        var i = 1;
        while ($('(.//div[@class="shelf-item"]//div[@class="shelf-item__buy-btn"])['+ i +']').isExisting() == true) {
            //click add to cart button
            $('(.//div[@class="shelf-item"]//div[@class="shelf-item__buy-btn"])['+ i +']').waitForEnabled(5000);
            $('(.//div[@class="shelf-item"]//div[@class="shelf-item__buy-btn"])['+ i +']').click();
            i ++;
            browser.pause(5000)
          }

        browser.pause(5000)
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