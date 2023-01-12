import { useState } from 'react';

export const Header = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {
	const [active, setActive] = useState(false);

	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	return (
		<header>
			<h1 className="underline">ShoppinCart</h1>

			<div className='w-full md:w-1/3 p-3 rounded border'>
				<div
					className='flex justify-center flex-column p-2 align-center'
					onClick={() => setActive(!active)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className='count-products'>
						<span id='contador-productos'>{countProducts}</span>
					</div>
				</div>

				<div
					className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`}
				>
					{allProducts.length ? (
						<>
							<div className='row-product'>
								{allProducts.map(product => (
									<div className='cart-product relative' key={product.id}>
										<div className='info-cart-product'>
											<span className='cantidad-producto-carrito'>
												{product.quantity}
											</span>
                                            <div className="text-left">
                                        <p class="text-lg font-semibold text-gray-900 mb-0">{product.nameProduct}</p>
                                        <p class="text-md text-gray-800 ">${product.price}</p>
                                        </div>
										</div>
                                        <p class="flex absolute right-2 top-2 bg-[#dedede] rounded-full 
                                        p-2 cursor-pointer group">
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close w-6 h-6 '
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
                                        </p>
									</div>
								))}
							</div>
<hr></hr>
							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>

							<button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className='cart-empty'>El carrito está vacío</p>
					)}
				</div>
			</div>
		</header>
	);
};