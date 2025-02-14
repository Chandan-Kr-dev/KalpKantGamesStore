import { MetadataRoute } from "next";



export default async function sitemap():Promise<MetadataRoute.Sitemap>{

    

    return[
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}`
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}game/4`
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}game/10`
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}game/a85b2229-0ac8-48d5-a5ff-45737a9c56d8`
        },
    ]
}