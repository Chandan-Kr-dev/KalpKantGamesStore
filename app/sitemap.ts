import { MetadataRoute } from "next";



export default async function sitemap():Promise<MetadataRoute.Sitemap>{

    

    return[
        {
            url:`https://kalpkantgames.vercel.app/`
        },
        {
            url:`https://kalpkantgames.vercel.app/game/4`
        },
        {
            url:`https://kalpkantgames.vercel.app/game/10`
        },
        {
            url:`https://kalpkantgames.vercel.app/game/a85b2229-0ac8-48d5-a5ff-45737a9c56d8`
        },
    ]
}