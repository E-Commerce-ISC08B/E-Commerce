CREATE DATABASE IF NOT EXISTS `ecommerce`;

USE `ecommerce`;

-- Crear el usuario si no existe
CREATE USER IF NOT EXISTS 'owner'@'%' IDENTIFIED BY 'owner';

-- Otorgar todos los permisos sobre la base de datos taskmanager
GRANT ALL PRIVILEGES ON ecommerce.* TO 'owner'@'%';

-- Aplicar los cambios
FLUSH PRIVILEGES;

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

   INSERT INTO `Products` (`productID`, `productName`, `img`, `productPrice`, `productQTY`, `description`) VALUES
(6, 'Kit 5 pzs Bebé Salir del Hospi', 'https://neekcotton.com/cdn/shop/products/3_NOVIEMBRE_kits_7_e8a53d39-a84d-4699-89c9-f61ce6ac566f_720x715.jpg?v=1651682238', 399, 20, 'Kit de 5pz , 100% Algodón , Ma'),
(7, 'Set 3 Mamelucos Bebe 100% Algo', 'https://neekcotton.com/cdn/shop/products/SETUNISEX_720x500.png?v=1653671980', 469, 20, 'SET 3 Mamelucos 100% Algodón P'),
(8, 'Kit 4 pzs Casita Bebé Salir De', 'https://neekcotton.com/cdn/shop/products/Casita_Celeste_6f2b95b2-c666-4a8f-8df7-543a3ba62945_720x715.jpg?v=1626298741', 399, 20, 'Kit de 4pz , 100% algodón , Ma');



    INSERT INTO `Customers` (`customerID`, `customerName`, `email`, `password`, `billingAddress`, `defaultAddress`, `country`, `phone`) VALUES (NULL, 'Alberto Flores', 'jalberto.flores.m08@gmail.com', 'albertofm8', 'Mastercard', 'Amanecer #836, Vistas del Sol', 'Aguascalientes, Mexico', '4491298419');

    INSERT INTO `Customers` (`customerID`, `customerName`, `email`, `password`, `billingAddress`, `defaultAddress`, `country`, `phone`) VALUES (NULL, 'Samuel Salvador', 'samuelsalvador@hotmail.com', 'samuel2', 'PayPal', 'La Chona', 'Mexico', '4491238456');