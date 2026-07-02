let foodDatabase = [
    {
        id: 1,
        name: "Pizza",
        cuisine: "Italian",
        origin: "Italy",
        vegetarian: false,
        price: 12.99,
        description: 'Classic wood-fired pizza with San Marzano tomato sauce, fresh mozzarella, and a touch of basil.',
        image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 2,
        name: "Malatang",
        cuisine: "Chinese",
        origin: "China",
        vegetarian: false,
        price: 11.50,
        description: 'Spicy numbing broth with an assortment of fresh vegetables, meats, and hand-pulled noodles.',
        image: 'https://images.unsplash.com/photo-1774979517580-17a5f78cbf1c?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 3,
        name: "Pad Thai",
        cuisine: "Thai",
        origin: "Thailand",
        vegetarian: false,
        price: 13.50,
        description: 'Stir-fried rice noodles tossed with shrimp, bean sprouts, tamarind sauce, and crushed peanuts.',
        image: 'https://images.unsplash.com/photo-1754586254034-4d2566ea5854?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 4,
        name: "Burger",
        cuisine: "American",
        origin: "USA",
        vegetarian: false,
        price: 14.99,
        description: 'Juicy Angus beef patty with melted cheddar, crisp lettuce, tomato, and secret sauce on a brioche bun.',
        image: 'https://images.unsplash.com/photo-1771818708882-bd87d9c46297?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 5,
        name: "Sushi",
        cuisine: "Japanese",
        origin: "Japan",
        vegetarian: false,
        price: 18.50,
        description: 'Fresh nori rolls filled with seasoned sushi rice, premium salmon, and creamy avocado.',
        image: 'https://images.unsplash.com/photo-1774635804786-5ebb8f88dcdf?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 6,
        name: "Medovik",
        cuisine: "Russian",
        origin: "Russia",
        vegetarian: true,
        price: 7.99,
        description: 'Layered honey cake with a delicate sour cream frosting, dusted with crushed walnuts.',
        image: 'https://images.unsplash.com/photo-1695275665516-a5958f8febef?q=80&w=800&auto=format&fit=crop'
    }
];
const heroBackground = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80';
const fallbackGradients = {
    Italian:  'linear-gradient(135deg, #f7971e, #ffd200)',
    American: 'linear-gradient(135deg, #e43a15, #e65245)',
    Japanese: 'linear-gradient(135deg, #1a1a2e, #c31432)',
    Chinese:  'linear-gradient(135deg, #c31432, #240b36)',
    Thai:     'linear-gradient(135deg, #f2709c, #ff9472)',
    Russian:  'linear-gradient(135deg, #2c3e50, #8e44ad)'
};
