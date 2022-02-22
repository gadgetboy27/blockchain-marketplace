/* eslint-disable no-undef */

const { assert } = require("chai")

const Marketplace = artifacts.require('./Marketplace.sol')

require("chai")
    .use(require('chai-as-promised'))
    .should()

contract('Marketplace', ([deployer, seller, buyer]) => {
    let marketplace

    before(async () => {
        marketplace = await Marketplace.deployed()
    })

    describe('deployment', async () => {
        it('deploys successfully', async () => {
        const address = await marketplace.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
        })

        it('has a name', async () =>{
            const name = await marketplace.name()
            assert.equal(name, "Cool Daddy's Marketplace")
        })
    })

    describe('products', async () => {
        let result, productCount

        before(async () => {
            result = await marketplace.createProduct('iPhone x', web3.utils.toWei('1', 'Ether'), { from: seller })
            productCount = await marketplace.productCount()
        })

        it('creates products', async () => {
            // SUCCESSES
            assert.equal(productCount, 1)
            // console.log(result.logs)
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(), productCount.toNumber(), 'id is correct')
            assert.equal(event.name,'iPhone x' , 'name is correct')
            assert.equal(event.price, '1000000000000000000', 'price is correct')
            assert.equal(event.owner, seller, 'owner is correct')
            assert.equal(event.purchased, false, 'purchase is correct')

            // FALURES: product must have name
            await marketplace.createProduct('', web3.utils.toWei('1', 'Ether'), { from: seller }).should.be.rejected;
            // Must have product
            await marketplace.createProduct('iPhone x', 0, { from: seller }).should.be.rejected;
        })

        it('lists products', async () => {
            const product = await marketplace.products(productCount)
            assert.equal(product.id.toNumber(), productCount.toNumber(), 'product is correct')
            assert.equal(product.name, 'iPhone x', 'product name is correct')
            assert.equal(product.price, '1000000000000000000', 'price is correct')
            assert.equal(product.owner, seller, 'owner is correct')
            assert.equal(product.purchased, false, 'has purchased product')
        })

        it('sells products', async () => {
            // track seller balance before purchase
            let oldSellerBalance
            oldSellerBalance = await web3.eth.getBalance(seller)
            oldSellerBalance = new web3.utils.BN(oldSellerBalance)

            // Success buyer makes the purchase
            result = await marketplace.purchaseProduct(productCount, { from: buyer, value: 
            web3.utils.toWei('1', 'Ether')})
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(), productCount.toNumber(), 'id is correct')
            assert.equal(event.name,'iPhone x' , 'name is correct')
            assert.equal(event.price, '1000000000000000000', 'price is correct')
            assert.equal(event.owner, buyer, 'owner is correct')
            assert.equal(event.purchased, true, 'purchase is correct')

            // check seller receives funds
            let newSellerBalance
            newSellerBalance = await web3.eth.getBalance(seller)
            newSellerBalance = new web3.utils.BN(newSellerBalance)

            let price
            price = web3.utils.toWei('1', 'Ether')
            price = new web3.utils.BN(price)
            // new seller balance in Ether
            const expectedBalance = oldSellerBalance.add(price)
            assert.equal(newSellerBalance.toString(), expectedBalance.toString())

            // Failures 
            // Tries to buy product that does not exist i.e product must have valid id
            await marketplace.purchaseProduct(99, { from: buyer, value: web3.utils.toWei('1', 'Ether')})
            .should.be.rejected;
            // buyer has enough ether for purchase
            await marketplace.purchaseProduct(productCount, { from: buyer, value: web3.utils.toWei('0.9', 'Ether')})
            .should.be.rejected;
            // make sure product can not be purchased twice
            await marketplace.purchaseProduct(productCount, { from: deployer, value: web3.utils.toWei('1', 'Ether')})
            .should.be.rejected;
            // buyer cannot buy twice by purchasing again
            await marketplace.purchaseProduct(productCount, { from: buyer, value: web3.utils.toWei('1', 'Ether')})
            .should.be.rejected;
        })


    })

})