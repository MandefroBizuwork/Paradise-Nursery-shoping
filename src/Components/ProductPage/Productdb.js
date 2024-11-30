import Logo from "../../images/bg.jpg";
import Bg from "../../images/logo.jpg";
import bomp from "../../images/bomp.jpg";
import cactus from "../../images/cactus.webp";
import jade from "../../images/jade.jpg";
import lily from "../../images/lily.webp";
import olevera from "../../images/olevera.jpg";
import snake from "../../images/snake.jpg";
export const products = [
  {
    id: 1,
    name: "Bamboo",
    category: "Indoor Plants",
    price: 25.99,
    description:
      "The Peace Lily is a popular indoor plant known for its air-purifying properties and elegant white flowers. Easy to care for and perfect for home or office decor.",
    imageUrl: bomp, // Use the imported Logo directly
    stock: 15,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "snake Plants",
    price: 19.99,
    description:
      "The Snake Plant is a hardy, low-maintenance plant that thrives in various conditions and improves air quality.",
      imageUrl: snake,
    stock: 20,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Jade Plant",
    category: "Indoor Plants",
    price: 45.99,
    description:
      "A stylish and trendy indoor plant with large, lush green leaves. Ideal for adding a touch of elegance to your space.",
    imageUrl: jade,
    stock: 8,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Peace Lily",
    category: "snake Plants",
    price: 25.99,
    description:
      "The Peace Lily is a popular indoor plant known for its air-purifying properties and elegant white flowers. Easy to care for and perfect for home or office decor.",
    imageUrl: lily, // Use the imported Logo directly
    stock: 15,
    rating: 4.8,
  },
  {
    id: 5,
    name: "Cactus",
    category: "Succulents",
    price: 19.99,
    description:
      "The Snake Plant is a hardy, low-maintenance plant that thrives in various conditions and improves air quality.",
      imageUrl: cactus,
    stock: 20,
    rating: 4.6,
  },
  {
    id: 6,
    name: "Aloe Vera",
    category: "Indoor Plants",
    price: 45.99,
    description:
      "A stylish and trendy indoor plant with large, lush green leaves. Ideal for adding a touch of elegance to your space.",
    imageUrl: olevera,
    stock: 8,
    rating: 4.7,
  },
];
