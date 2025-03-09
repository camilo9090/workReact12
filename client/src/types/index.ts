

import {boolean, number, object, string,InferOutput, array} from 'valibot'

export const DraftProductSchema=object({

    name:string(),
    price:number(),
})

export const ProductSchema=object({
    id:number(),
    name:string(),
    price:number(),
    availability:boolean()
})

export const ProductsSchema=array(ProductSchema)
//toma el schema y lo convierte a type
export type Product=InferOutput<typeof ProductSchema>
