import { ProductS6Type } from "@/mockData";
import Image from "next/image";

const ProductItemS6 = (product: ProductS6Type) => {
    const formatPrice = (price: number) => {
        return `${price.toLocaleString('ko-KR')}원`;
    };
    return (
        <div className="bg-white max-w-[400px] max-h-[486px]">
            <div>
                <Image
                    src={`/assets/${product.image}.png`}
                    alt={product.name}
                    height={286}
                    width={400}
                />
            </div>
            <div className=" text-center px-[66px] h-full py-[23px]">
                <p className="text-[24px] leading-[48.5px] font-semibold">{product.name}</p>
                <p className="text-[#999999] text-base font-pretendard">남자의 관절, 연골 건강에 도움을 줄 수 있는 제품입니다. 관절&연골 건강기능성 제품</p>
            </div>
            <div className="border-t-[2px] border-[#eeeeee] h-[58px] flex items-center justify-center gap-[8px]">
                <div>
                    <p className="text-[#999999] text-sm line-through">{formatPrice(product.originalPrice)}</p>
                </div>
                <div>
                    <p className="text-[#222222] text-[18.5px] leading-[48.5px] font-semibold">{formatPrice(product.discountedPrice)}</p>
                </div>
            </div>
        </div>
    )
}


const ProductListS6 = ({ products }: { products: ProductS6Type[] }) => {


    return (
        <div className="flex items-center justify-center gap-[31px] pb-[227px]">
            {
                products.length > 0 ?
                    products.map((product, index) => {
                        return (
                            <ProductItemS6 key={index} {...product} />
                        )
                    })
                    :
                    <div className="h-[486px]">No products</div>
            }
        </div>
    )
}

export default ProductListS6;