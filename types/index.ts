export type BoxItemType = {
    image: string;
    title: string;
    text: string;
    color: 'white' | 'blue';
}
export type ProductType = {
    id: number;
    image: string;
    name: string;
    description: string;
}

export type ProductS6Type = {
    id: number;
    image:string;
    name: string;
    description: string;
    categoryId: number;
    originalPrice: number;
    discountedPrice: number;
}
