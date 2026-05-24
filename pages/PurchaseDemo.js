export class Purchase{
    constructor(page)
    {
        this.page=page
        this.cart_link = page.getByRole('link', { name: 'Cart', exact: true });
        this.purchase_btn=page.locator('//button[text()="Place Order"]')
        this.name=page.locator("//input[@id='name']")
        this.country=page.locator("//input[@id='country']")
        this.city=page.locator("//input[@id='city']")
        this.card=page.locator("//input[@id='card']")
        this.month=page.locator("//input[@id='month']")
        this.year=page.locator("//input[@id='year']")
        this.purchase=page.locator('//button[text()="Purchase"]')
    }

async cart(){


   await this.cart_link.click()
   await this.purchase_btn.click()

}

async add_details(name,country,city,card,month,year)
{
   await this.name.fill(name)
   await this.country.fill(country)
   await this.city.fill(city)
   await this.card.fill(card)
   await this.month.fill(month)
   await this.year.fill(year)
   await this.purchase.click()


}
}