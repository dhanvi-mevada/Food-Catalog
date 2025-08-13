import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));


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
      text: "Juicy chicken grilled to perfection, infused with smoky flavors and served alongside fresh vegetables and tangy dipping sauce.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "A soft and moist sponge layered with creamy frosting and topped with fresh berries, perfect for any sweet craving.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "A juicy beef patty stacked with fresh lettuce, tomatoes, onions, and melted cheese, served in a toasted bun.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Fluffy golden pancakes drizzled with maple syrup and topped with a pat of butter for a delightful breakfast treat.",
      image: "/images/pancake.png",
      type: "dinner",
    },
  ];

  app.get("/", (req, res) =>{
    try {
      res.json(foodData);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
 
  // console.log(path.join(__dirname, "../public"));

  // res.json(foodData);
});

app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
