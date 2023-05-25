import Product1 from '../images/product_01.jpg';
import Product2 from '../images/product_2.1.jpg';
import Product3 from '../images/product_2.2.jpg';
import Product4 from '../images/product_3.1.jpg';
import Product5 from '../images/product_3.2.jpg';
import Product6 from '../images/product_4.1.jpg';
import Product7 from '../images/product_4.2.jpg';
import Product8 from '../images/product_04.jpg';
import Product9 from '../images/product_08.jpg';
import Product10 from '../images/bread(1).png';
import Product11 from '../images/bread(2).png';
import Product12 from '../images/bread(3).png';

const products = [
  {
    id: '01',
    title: 'Chicken Burger',
    price: 24.0,
    image01: Product1,
    category: 'Burger',
  },

  {
    id: '02',
    title: 'Vegetarian Pizza',
    price: 115.0,
    image01: Product2,
    category: 'Pizza',
  },

  {
    id: '03',
    title: 'Double Cheese Margherita',
    price: 110.0,
    image01: Product4,
    category: 'Pizza',
  },

  {
    id: '04',
    title: 'Maxican Green Wave',
    price: 110.0,
    image01: Product6,
    category: 'Pizza',
  },

  {
    id: '05',
    title: 'Cheese Burger',
    price: 33.0,
    image01: Product8,
    category: 'Burger',
  },
  {
    id: '06',
    title: 'Royal Cheese Burger',
    price: 18.0,
    image01: Product1,
    category: 'Burger',
  },

  {
    id: '07',
    title: 'Seafood Pizza',
    price: 134.0,
    image01: Product3,
    category: 'Pizza',
  },

  {
    id: '08',
    title: 'Thin Cheese Pizza',
    price: 98.0,
    image01: Product5,
    category: 'Pizza',
  },

  {
    id: '09',
    title: 'Pizza With Mushroom',
    price: 114.0,
    image01: Product7,
    category: 'Pizza',
  },

  {
    id: '10',
    title: 'Classic Hamburger',
    price: 54.0,
    image01: Product9,
    category: 'Burger',
  },

  {
    id: '11',
    title: 'Crunchy Bread ',
    price: 32.0,
    image01: Product10,
    category: 'Bread',
  },

  {
    id: '13',
    title: 'Loaf Bread ',
    price: 35.0,
    image01: Product12,
    category: 'Bread',
  },
  {
    id: '14',
    title: 'Black Bread ',
    price: 28.0,
    image01: Product11,
    category: 'Bread',
  },
];

export default products;

// ! ----------------- Для отримання даних з бекенду ----------------- 

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000/api';

// export const getAllVisits = createAsyncThunk(
//   '/getAllVisits',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(`/visits`);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// async function getProduct() {
//   const { data } = await axios.get(`http://localhost:3000/api/products`);
//   return data;
// }
// getProduct().then(data => {
//   const resultArray = data.data.result; // Отримання масиву result зі відповіді
//   console.log(resultArray);
// });
