describe('Fluxo de compra iOS - EBAC Store', () => {
    it('Deve realizar login e finalizar uma compra', async () => {
        // Login
        await $('-ios predicate string:type == "XCUIElementTypeTextField"').setValue('cliente@ebac.art.br');
        await $('-ios predicate string:type == "XCUIElementTypeSecureTextField"').setValue('123456');
        await $('~Login').click();

        // Acessar Browse
        await $('~Browse').click();

        // Selecionar produto
        await $('-ios predicate string:label CONTAINS "Ingrid Running Jacket"').click();

        // Adicionar ao carrinho
        await $('~Add To Cart').click();

        // Acessar carrinho
        await $('~cart').click();

        // Adicionar endereço, se necessário
        const addAddress = await $('~Add New Address');
        if (await addAddress.isExisting()) {
            await addAddress.click();

            await $('-ios predicate string:value CONTAINS "name"').setValue('Marcia');
            await $('-ios predicate string:value CONTAINS "mobile"').setValue('11999999999');
            await $('-ios predicate string:value CONTAINS "address"').setValue('Rua Teste, 123');
            await $('-ios predicate string:value CONTAINS "City"').setValue('São Paulo');
            await $('-ios predicate string:value CONTAINS "State"').setValue('SP');
            await $('-ios predicate string:value CONTAINS "ZipCode"').setValue('01001000');

            await $('~Save').click();
        }

        // Ir para pagamento
        await $('~Continue to payment').click();

        // Finalizar checkout
        await $('~Checkout').click();

        // Validar sucesso
        await expect($('-ios predicate string:label CONTAINS "Transaction successful"')).toBeDisplayed();
    });
});