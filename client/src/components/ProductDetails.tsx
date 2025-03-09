import { useNavigate } from "react-router-dom"
import { Product } from "../types"
import { formatCurrency } from "../utilities"




type ProductDetailsProps = {
    product: Product

}


export default function ProductDetails({ product }: ProductDetailsProps) {
   
   const navigate=useNavigate()
    const isAvailable = product.availability

    return (
        <tr className="border-b text-center ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {isAvailable ? 'Disponible' : 'Agotado'}
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex gap-2 justify-center">

                    <button
                        onClick={() => navigate(`/productos/${product.id}/editar`)}
                        className="rounded-md bg-indigo-600 w-full p-2 text-sm font-bold text-white shadow-sm hover:bg-indigo-700"
                    >
                        Editar
                    </button>

                </div>
            </td>
        </tr>
    )
}
