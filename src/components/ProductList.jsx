import React from 'react'
import { dataproducts } from '../products';
import { useState } from 'react'

export const ProductList = ({
    allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
    setTotal
}) => { 

   
	const onAddProduct = product => {
       
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
            );
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

            setTotal(total + product.price * product.quantity);
            setCountProducts(countProducts + product.quantity);
            setAllProducts([...allProducts, product]);
    };
    
    const handleNameChange = event =>  {
          setVal(event.target.value)
      };

    return (
        <div>
           <div className='container-items border mt-2'>
           <div className="w-full grid-cols-2 gap-2  md:gap-2 mt-2 grid md:grid-cols-4 lg:grid-cols-4 
                lg:gap-0 md:my-2  xs:px-1">
			{dataproducts.map(product => (
              
                    <div className='p-2 w-full  hover:ring-2 
                    hover:rounded-2xl 
                    hover:cursor-pointer' key={product.id}>
                    <div className="overflow-x-hidden rounded-2xl relative">
                    <figure className='h-40 rounded-2xl w-full object-cover'>
						<img src={product.img} className='h-40 rounded-2xl w-full object-cover' alt={product.nameProduct} />
					</figure>
                        <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        </p>
                    </div>
				
                    <div className="mt-4 pl-2 mb-2 flex justify-between ">
                    <div className="text-left">
                        <p className="text-lg font-semibold text-gray-900 mb-0">
                            <input
                                type="text"
                                value={product.nameProduct}
                                onChange={handleNameChange}
                                className="w-[70%]"
                            />  
                            </p>
                        <p className="text-md text-gray-800 ">${product.price}</p>
                    </div>
                    <button onClick={() => onAddProduct(product)} className="w-full md:w-[60%]">
                        <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                            <p className="flex right-2 top-2 bg-[#dedede] rounded-full p-2 cursor-pointer group">
                            Add al
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 ml-1 w-6 group-hover:opacity-50  opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            </p>
                        </div>  
                    </button>
          </div>
				</div>
              
			))}
              </div>
		</div>
        </div>
    );
};

