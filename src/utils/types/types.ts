import React from "react";

export interface NavListType{
    Link:string,
    List:string,
}
// BrandDifferentCard
export interface BrandDifferentCardType{
    id:string;
    ImgUrl:string;
    heading:string;
    p:string;
}

// New ceramics

export interface NewCeramicsType{
        id:string;
        imgUrl:string;
        heading:string;
        price:string
}

// Our popular products

export interface OurPopularProductsType{
        id:string;
        imgUrl:string;
        heading:string;
        price:string;
        with:string;
}

// Menu footer
export interface FooterListType{
    id:string;
    link:string;
   list:string;
}
export interface AvionFooterListType{
    id:string;
   list:string;
}

// Social media icons


export interface SocialMediaIconType {
    name: string; // Social media platform ka naam (e.g., "Facebook")
    url: string;  // Social media profile ka link (e.g., "https://facebook.com")
    icon: React.ReactNode; // React component jo icon render karega
}

// productLIst

export interface productListType{
    id:number;
    imgUrl:string;
    name:string;
    price:string;
}