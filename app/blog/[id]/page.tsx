"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export interface BlogPost {
    id: string;
    title: string;
    description: string;
    date: string;
    author: string;
    coverImage: string;
    tags: string[];
    gameRelated?: boolean;
    assetType?: '3D' | 'Game' | 'Misc';
    content: string;
}

export default function ViewBlogPost() {
    const params = useParams();
    const { id } = params;
    
    // Sample blog posts with full content as a single string
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
            "assetType": "Game",
            "content": "Development of 'The Infected' was a journey filled with passion and perseverance. Our team set out to create a survival horror experience that would push the boundaries of the genre, blending psychological terror with innovative gameplay mechanics. Each stage of the development process presented unique challenges that tested our creativity and technical skills. From conceptualizing the initial game world to refining the intricate enemy AI, we were committed to delivering an immersive and terrifying experience. The game's core mechanic of survival under extreme psychological pressure became our guiding principle. We wanted players to feel not just the physical threat of the infected, but the mental toll of constant survival. Countless iterations, late-night brainstorming sessions, and rigorous playtesting shaped the final product. Our dedication to creating a truly memorable horror experience drove us forward, even when obstacles seemed insurmountable."
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
            "assetType": "Game",
            "content": "Conception of 'Gravity Flux' began with a simple yet ambitious idea: what if players could manipulate gravity in real-time? This core concept drove our entire game design philosophy. We envisioned a world where physical laws could be bent and twisted at will, creating puzzles that challenged players' perception and problem-solving skills. The technical implementation was far from simple. Our development team spent months perfecting the physics engine, ensuring that gravity manipulations felt both intuitive and extraordinary. Each level became a canvas for complex gravitational interactions, requiring players to think in multiple dimensions. Prototyping was an iterative process filled with both breakthrough moments and frustrating setbacks. We continuously refined the mechanics, balancing between being challenging and enjoyable. The final game represents not just a technical achievement, but a testament to creative problem-solving in game development."
        }
    ];
    
    // State to store the current blog post
    const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Function to find the blog post by ID
        const findBlogPost = () => {
            try {
                const post = blogPosts.find(post => post.id === id);
                
                if (post) {
                    setBlogPost(post);
                } else {
                    setError('Blog post not found');
                }
            } catch (err) {
                setError('Error fetching blog post');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            findBlogPost();
        }
    }, [id]);

    // Function to format paragraphs with highlighted first word
    const formatContentWithHighlightedFirstWords = (content: string) => {
        return content.split(/\.\s+/).map((paragraph, index) => {
            // Trim the paragraph and split into words
            const words = paragraph.trim().split(/\s+/);
            
            // Highlight the first word
            if (words.length > 0) {
                const firstWord = words[0];
                const restOfParagraph = words.slice(1).join(' ');
                
                return (
                    <p 
                        key={index} 
                        className="mb-4 text-gray-300 text-base sm:text-lg leading-relaxed"
                    >
                        <span className="text-blue-300 font-bold mr-1">{firstWord}</span>
                        {restOfParagraph}.
                    </p>
                );
            }
            return null;
        }).filter(Boolean);
    };

    // Loading state
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <div className="animate-spin rounded-full h-16 w-16 md:h-32 md:w-32 border-t-2 border-blue-500"></div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900 text-red-400 px-4 text-center">
                {error}
            </div>
        );
    }

    // Render blog post
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <Navbar />
            
            {blogPost && (
                <div className="container mx-auto px-4 py-8 max-w-4xl">
                    {/* Cover Image - Responsive */}
                    <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 mb-6 md:mb-8">
                        <Image 
                            src={blogPost.coverImage} 
                            alt={blogPost.title} 
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain rounded-lg shadow-2xl" 
                            priority
                        />
                    </div>

                    {/* Blog Post Header - Responsive */}
                    <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
                            {blogPost.title}
                        </h1>

                        {/* Metadata - Responsive Flex */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 md:mb-6 text-gray-400">
                            <div className="flex items-center space-x-2">
                                <span>By {blogPost.author}</span>
                                <span className="hidden sm:inline">•</span>
                                <span>{blogPost.date}</span>
                            </div>
                            
                            {/* Tags - Responsive Wrapping */}
                            <div className="flex flex-wrap gap-2 sm:ml-auto">
                                {blogPost.tags.map((tag) => (
                                    <span 
                                        key={tag} 
                                        className="px-2 py-1 bg-gray-700 text-blue-300 rounded-full text-xs sm:text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Description - Responsive Text Size */}
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 md:mb-6 italic">
                            {blogPost.description}
                        </p>

                        {/* Content with Highlighted First Words */}
                        <div className="space-y-4">
                            {formatContentWithHighlightedFirstWords(blogPost.content)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}