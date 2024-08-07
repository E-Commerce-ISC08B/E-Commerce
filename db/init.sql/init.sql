/*CREATE DATABASE if not EXISTS eCommerce;



CREATE user 'owner'@'localhost' IDENTIFIED BY 'owner';

GRANT all PRIVILEGES on eCommerce.*  to 'owner'@'localhost';
*/
use `eCommerce`;

    SET NAMES utf8;
    SET FOREIGN_KEY_CHECKS = 1;

    CREATE Table `Categories` (
    `categoryID` integer not null AUTO_INCREMENT,
    `category` varchar (30),
    `description` varchar (30),
    PRIMARY KEY (`categoryID`)
    );

    CREATE Table `Products` (
    `productID` integer not null AUTO_INCREMENT,
    `productName` varchar (30),
    `img` varchar(255),
    `productPrice` float,
    `productQTY` smallint (6),
    `description`  varchar (30),
    PRIMARY KEY (`productID`)
    );


    CREATE Table `Customers` (
    `customerID` integer not null AUTO_INCREMENT,
    `customerName` varchar (30),
    `email` varchar (50),
    `password`  varchar (30),
    `billingAddress` varchar (50),
    `defaultAddress` varchar (50),
    `country` varchar (45),
    `phone`  varchar (20),
    PRIMARY KEY (`customerID`)
    );

    CREATE Table `Orders` (
    `orderID` integer not null AUTO_INCREMENT,
    `ammount` integer,
    `orderAddress` varchar (50),
    `orderEmain` varchar (50),
    `orderDate` date,
    `orderStatus` varchar (10),
    `customerID` integer,
    PRIMARY KEY (`orderID`),
    CONSTRAINT FK_Custom FOREIGN KEY (`customerID`) REFERENCES `Customers` (`customerID`)
    );

    CREATE Table `product_category` (
    `productID` integer not null,
    `categoryID` integer not null,
    PRIMARY KEY (categoryID, productID),
    CONSTRAINT ProdCat_cat FOREIGN KEY (categoryID) REFERENCES Categories (categoryID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT ProdCat_prod FOREIGN KEY (productID) REFERENCES Products (productID) ON DELETE CASCADE ON UPDATE CASCADE
    );

    CREATE Table `order_details` (
    `orderID` integer not null,
    `productID` integer not null,
    `productPrice` float,
    `quantity` integer,
    PRIMARY KEY (orderID, productID),
    CONSTRAINT OrdDet_ord FOREIGN KEY (orderID) REFERENCES Orders (orderID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT OrdDet_prod FOREIGN KEY (productID) REFERENCES Products (productID) ON DELETE CASCADE ON UPDATE CASCADE
    );

    INSERT INTO `products` (`productID`, `productName`, `img`, `productPrice`, `productQTY`, `description`) VALUES
    (1, 'Laptop', 'https://th.bing.com/th?id=OIP.wlrGjafN3dckarQucKgaywHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', 799.99, 25, 'Laptop con 16GB RAM'),
    (2, 'Smartphone', 'https://th.bing.com/th?id=OIP.4BL8Obiwh6W1MiWIQvxORgHaHm&w=246&h=253&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', 599.99, 50, 'Smartphone con 128GB de almace'),
    (3, 'Sueter de Algodon', 'https://www.bordadospanama.com/wp-content/uploads/2021/10/sueter-manga-larga-con-cinta-reflectiva-gris.jpg', 0, 1, 'Sueter 100% de algodon para ho'),
    (5, 'Gorro', 'https://img.sombreroshop.es/Gorro-de-Algod-n-Max-by-Stetson-gris-oscuro.55229_1rf23.jpg', 0, 2, 'Gorro de algodon');