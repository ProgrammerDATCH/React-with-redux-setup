import { addProduct } from "../store/features/cartSlice";
import { useAppDispatch } from "../store/store"

const Add = () => {
    const dispatch = useAppDispatch();
    const addNewProduct = () => {
        const randomNum = Math.floor(Math.random() * 100);
        dispatch(addProduct({name: `Product-${randomNum}`}))
    }
    return (
        <div className="w-full my-2 flex justify-center items-center">
            <button onClick={addNewProduct} className="hover:bg-primary px-4 py-2 text-black rounded-md shadow-primary shadow-sm">Add New random Product to Redux store</button>
        </div>
    )
}

export default Add