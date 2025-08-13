"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "Boilded Egg",
            price: 10,
            text: "Perfectly boiled eggs with a tender white and creamy yolk, served with a sprinkle of herbs for a healthy and protein-rich start to your day.",
            image: "/images/egg.png",
            type: "breakfast",
        },
        {
            name: "RAMEN",
            price: 25,
            text: "A hearty bowl of Japanese-style ramen noodles in a savory broth, topped with fresh vegetables, soft-boiled egg, and seasoned chicken.",
            image: "/images/ramen.png",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 45,
            text: "Juicy grilled chicken marinated in a blend of spices, served with a side of roasted vegetables and a tangy dipping sauce for a satisfying meal.",
            image: "/images/chicken.png",
            type: "dinner",
        },
        {
            name: "CAKE",
            price: 18,
            text: "A slice of rich and moist cake, layered with creamy frosting and topped with fresh fruits, perfect for satisfying your sweet tooth.",
            image: "/images/cake.png",
            type: "breakfast",
        },
        {
            name: "BURGER",
            price: 23,
            text: "A classic burger with a juicy beef patty, fresh lettuce, tomato, and cheese, served on a toasted bun with a side of crispy fries.",
            image: "/images/burger.png",
            type: "lunch",
        },
        {
            name: "PANCAKE",
            price: 25,
            text: "Fluffy pancakes served with a drizzle of maple syrup, fresh berries, and a dollop of whipped cream, perfect for a delightful breakfast treat.",
            image: "/images/pancake.png",
            type: "dinner",
        },
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map