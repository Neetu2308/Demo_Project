export class AddtoCartDemo{

    constructor(page)
    {
        this.page=page
        this.catogery_mobile=page.getByRole('link', { name: 'Phones' })
        this.catogery_monitor=page.getByRole('link', { name: 'Monitors' })
        this.select_phone = page.getByRole('link', { name: 'Samsung galaxy s6' });
         this.selected_monitor = page.getByRole('link', { name: 'ASUS Full HD' });
        this.addtocart = page.getByRole('link', { name: 'Add to cart' });
    }

async select_mobile()
{
    await this.catogery_mobile.click()
    await this.select_phone.click()
    await this.addtocart.click()
}
async select_monitor()
{
    await this.catogery_monitor.click()
    await this.selected_monitor.click()
    await this.addtocart.click()
}
}