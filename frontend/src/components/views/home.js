import React from "react";
import DescriptionProduct from "../DescriptionProduct/descriptionProduct";

const Home = (prods) => {
    return (
        <div>
            { prods.map(({prod, index}) => {
                <DescriptionProduct key={index} 
                imageURL={prod.imageURL}
                name={prod.name}
                description={prod.description}
                />
            })}
        </div>
    );
};

export default Home;