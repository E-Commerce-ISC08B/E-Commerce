<<<<<<< Updated upstream
package com.ecommerce.e_commerce.Mapper;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;


import com.ecommerce.e_commerce.dto.ProductDTO;
import com.ecommerce.e_commerce.model.Product;

@Mapper(
  componentModel = "spring", 
  injectionStrategy = InjectionStrategy.CONSTRUCTOR, 
  nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
  uses = OrderMapper.class
)
public interface ProductMapper {

    ProductDTO toDTO(Product product);

    Product toModel(ProductDTO productDTO);
}
=======
// package com.ecommerce.e_commerce.Mapper;

// import org.mapstruct.InjectionStrategy;
// import org.mapstruct.Mapper;
// import org.mapstruct.NullValuePropertyMappingStrategy;


// import com.ecommerce.e_commerce.dto.ProductDTO;
// import com.ecommerce.e_commerce.model.Product;

// @Mapper(
//   componentModel = "spring", 
//   injectionStrategy = InjectionStrategy.CONSTRUCTOR, 
//   nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
//   uses = OrderMapper.class
// )
// public interface ProductMapper {

//     ProductDTO toDTO(Product product);

//     Product toModel(ProductDTO productDTO);
// }
>>>>>>> Stashed changes
