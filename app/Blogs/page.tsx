import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  coverImage: string;
  tags: string[];
  content?: string;
  gameRelated?: boolean;
  assetType?: '3D' | 'Game' | 'Misc';
}



export default function Blogs ()  {
    const blogPosts: BlogPost[] = [
        
        {
            "id": "1",
            "title": "Behind the Scenes of 'The Infected'",
            "description": "Exploring the development process, challenges, and key takeaways from creating 'The Infected'.",
            "date": "2025-02-25",
            "author": "Chandan Kumar",
            "coverImage": "https://res.cloudinary.com/dr8c1x4ai/image/upload/v1738998804/logo1_cidjrv.jpg",
            "tags": ["Indie Games", "Survival Horror", "Game Development"],
            "gameRelated": true,
            "assetType": "Game"
          },
          {
            "id": "4",
            "title": "Developing 'Gravity Flux': A Physics-Based Adventure",
            "description": "A deep dive into the creation, mechanics, and challenges of building 'Gravity Flux'.",
            "date": "2025-03-27",
            "author": "Chandan Kumar",
            "coverImage": "https://res.cloudinary.com/dr8c1x4ai/image/upload/v1740601091/Game-logo_dabk7s.jpg",
            "tags": ["Indie Games", "Physics-Based Games", "Game Development"],
            "gameRelated": true,
            "assetType": "Game"
          }
          
        
      ];
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-neon-blue">
          Developer Blog
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-neon-blue transition-all"
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={post.coverImage} 
                  alt={post.title} 
                  layout="fill" 
                  objectFit="contain" 
                  className="transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  {post.assetType && (
                    <span className="bg-neon-blue/20 text-neon-blue px-2 py-1 rounded-full text-xs">
                      {post.assetType}
                    </span>
                  )}
                </div>
                
                <h2 className="text-xl font-semibold mb-2 text-white hover:text-neon-blue">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-300 mb-4">{post.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
