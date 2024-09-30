'use client'
import { CATEGORIES, PRODUCT_LIST_S6 } from "@/mockData";
import Button from "./Button";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { ProductS6Type } from '../../mockData/index';
import ProductListS6 from "./ProductListS6";

const Categories = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(CATEGORIES.length ? CATEGORIES[0].id : 0)
    const [products, setProducts] = useState<ProductS6Type[]>([])
    useEffect(() => {
        const productList = PRODUCT_LIST_S6.filter(p => p.categoryId === selectedCategoryId)
        setProducts(productList)
    }, [selectedCategoryId])


    return <div >
        <div className="flex items-center justify-center gap-[59px] pb-[50px] overflow-hidden max-[1450px]:gap-2 max-[1000px]:grid max-[1000px]:grid-cols-4 max-[1000px]:text-center max-[700px]:grid-cols-3 max-[480px]:grid-cols-2 max-[480px]:px-2">
            {
                CATEGORIES.map((category, index) => {
                    return <div key={index}>
                        <Button
                            initial={{ background: '#f7d6e9' }}
                            animate={selectedCategoryId === category.id ? { background: '#f2599c' } : { background: '#f7d6e9' }}
                            className={
                                clsx(
                                    '!text-[#222222]'
                                )
                            }
                            variant='ghost'
                            onClick={() => setSelectedCategoryId(category.id)}
                        >
                            {category.name}
                        </Button>
                    </div>
                })
            }
        </div>
        <ProductListS6 products={products} />
    </div>
}
export default Categories;