import React from "react";
import DescriptionProduct from "../DescriptionProduct/descriptionProduct";

const Home = ({ prods }) => {
  debugger;
  console.log(prods);
  return (
    <div>
      {prods.map((prod, index) => (
        // Comprobamos que 'prod' sea un objeto válido y contenga la propiedad 'imageURL'
        prod && prod.imageURL ? (
          <DescriptionProduct
            key={index}
            imageURL={prod.imageURL}
            name={prod.name}
            description={prod.description}
          />
        ) : (
          <div key={index}>Información del producto no disponible</div>
        )
      ))}
    </div>
  );
};

export default Home;
