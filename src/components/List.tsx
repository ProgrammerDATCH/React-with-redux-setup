import { useAppSelector } from "../store/store"

const List = () => {
    const products = useAppSelector(state => state.cart.products)
    return (
        <div className="p-4">
            <div className="overflow-x-auto w-full flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-4">All Products in Redux Store</h2>

                <table className="w-10/12 md:w-8/12 lg:w-6/12 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="px-4 py-2 text-start text-primary">#</th>
                            <th className="px-4 py-2 text-start text-primary">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2">{product.id + 1}</td>
                                <td className="px-4 py-2">{product.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List
