// Store all games/products here
const products = [
    { id: 1, name: "Cyber Adventure", price: 59, image: "assets/images/games/game-1.svg", color: "#3b82f6", genre: "Action RPG", rating: 4.6, description: "A neon-lit open world adventure in a cyber metropolis." },
    { id: 2, name: "Space Warriors", price: 49, image: "assets/images/games/game-2.svg", color: "#06b6d4", genre: "Shooter", rating: 4.2, description: "Fast-paced space combat with customizable starships." },
    { id: 3, name: "Racing X", price: 39, image: "assets/images/games/game-3.svg", color: "#10b981", genre: "Racing", rating: 4.1, description: "High-speed futuristic racing across varied circuits." },
    { id: 4, name: "Future Legends", price: 69, image: "assets/images/games/game-4.svg", color: "#8b5cf6", genre: "MMO", rating: 4.7, description: "Massive online battles and legendary loot." },
    { id: 5, name: "Dragon Quest", price: 79, image: "assets/images/games/game-5.svg", color: "#ef4444", genre: "Fantasy RPG", rating: 4.8, description: "Classic dragon-slaying RPG with deep story." },
    { id: 6, name: "Pixel War", price: 29, image: "assets/images/games/game-6.svg", color: "#f59e0b", genre: "Strategy", rating: 3.9, description: "Retro pixel art strategy battles with short matches." },
    { id: 7, name: "Neon Shadows", price: 54, image: "assets/images/games/game-7.svg", color: "#06b6d4", genre: "Stealth", rating: 4.3, description: "Sneak through neon skylines and avoid detection." },
    { id: 8, name: "Quantum Breach", price: 64, image: "assets/images/games/game-8.svg", color: "#7c3aed", genre: "Sci-Fi", rating: 4.5, description: "Time-bending puzzles and quantum challenges." },
    { id: 9, name: "Void Runner", price: 44, image: "assets/images/games/game-9.svg", color: "#0ea5a4", genre: "Platformer", rating: 4.0, description: "Run, jump and grapple through gravity-shifting levels." },
    { id: 10, name: "Eclipse Force", price: 74, image: "assets/images/games/game-10.svg", color: "#ef4444", genre: "Action", rating: 4.4, description: "Elite squad missions during a planetary eclipse." },
    { id: 11, name: "Thunder Nexus", price: 55, image: "assets/images/games/game-11.svg", color: "#2563eb", genre: "MOBA", rating: 4.2, description: "Team-based arena battles with powerful heroes." },
    { id: 12, name: "Crimson Vortex", price: 49, image: "assets/images/games/game-12.svg", color: "#dc2626", genre: "Horror", rating: 4.1, description: "Psychological horror in a spiraling crimson city." },
    { id: 13, name: "Titan Assault", price: 69, image: "assets/images/games/game-13.svg", color: "#b91c1c", genre: "Shooter", rating: 4.5, description: "Mech combat against towering AI titans." },
    { id: 14, name: "Phantom Protocol", price: 59, image: "assets/images/games/game-14.svg", color: "#0ea5a4", genre: "Tactical", rating: 4.0, description: "Covert ops and tactical extraction missions." },
    { id: 15, name: "Inferno Rush", price: 34, image: "assets/images/games/game-15.svg", color: "#f97316", genre: "Arcade", rating: 3.8, description: "Fast arcade runs through blazing obstacle courses." },
    { id: 16, name: "Celestial Conquest", price: 84, image: "assets/images/games/game-16.svg", color: "#6366f1", genre: "Strategy", rating: 4.9, description: "Grand strategy across star systems and empires." },
];

// export for use in store page (global variable)
window.products = products;
