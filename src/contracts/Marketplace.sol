pragma solidity ^0.5.16;

contract Marketplace {
    string public name;
    uint public productCount = 0;
    mapping(uint => Product) public products;

    struct Product {
        uint id;
        string name;
        uint price;
        address payable owner;
        bool purchased;
    }

    event ProductCreated(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
    );

    event ProductPurchased(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
    );

    constructor() public {
        name = "Cool Daddy's Marketplace";
    }

    function createProduct(
        string memory _name,
        uint _price
    ) public {
        // require a valid name 
        require(bytes(_name).length > 0);
        // require a valid price
        require(_price > 0);
        // Add product
        productCount ++;
        // Create the product
        products[productCount] = Product(productCount, _name, _price, msg.sender, false);
        // Trigger an event
        emit ProductCreated(productCount, _name, _price, msg.sender, false);
    }

    function purchaseProduct(uint _id) public payable{
        // Get product 
        Product memory _product = products[_id];
        // Get the owner
        address payable _seller = _product.owner;
        // make sure product is a valid product
        require(_product.id > 0 && _product.id <= productCount);
        // make sure enough ether is in their wallet
        require(msg.value >= _product.price);
        // make sure product has not been already purchased
        require(!_product.purchased);
        // make buyer is not the seller
        require(_seller != msg.sender);
        // transfer ownership to the buyer
        _product.owner = msg.sender;
        // mark as purchased
        _product.purchased = true;
        // update product 
        products[_id] = _product;
        // then pay seller for product
        address(_seller).transfer(msg.value);
        // trigger the event
        emit ProductPurchased(productCount, _product.name, _product.price, msg.sender, true);
    }
}