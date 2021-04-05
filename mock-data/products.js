import _ from 'lodash';
import { methods as CategoryMethods } from '../entities/Category';

import { categories } from './categories';

const { getCategoryIdByCategoryName } = CategoryMethods;

const bodyWashCategoryId = getCategoryIdByCategoryName(categories, 'bodywash');
const carCareCategoryId = getCategoryIdByCategoryName(categories, 'carcare');
const perfumeCategoryId = getCategoryIdByCategoryName(categories, 'perfume');

// products mock data

export const products =  [
  {
    categoryId: perfumeCategoryId,
    description: 'Some product 1 description.',
    id: 1,
    name: 'product1',
    label: 'Product 1',
    price: {
      currency: 'Malaysian Ringgit',
      currencyPrefix: 'RM',
      amount: 13.50
    },
    stock: 2000
  },
  {
    categoryId: bodyWashCategoryId,
    description: 'Some product 2 description.',
    id: 2,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRk3hUgVbxqLRNaPR_yHWXCKs1qTgQpwB0w&usqp=CAU',
    name: 'product2',
    label: 'Product 2',
    price: {
      currency: 'Malaysian Ringgit',
      currencyPrefix: 'RM',
      amount: 8.30
    },
    stock: 399
  },
  {
    categoryId: carCareCategoryId,
    description: 'Some product 3 description.',
    id: 3,
    name: 'product3',
    label: 'Product 3',
    price: {
      currency: 'Malaysian Ringgit',
      currencyPrefix: 'RM',
      amount: 20
    },
    stock: 245
  },
  {
    categoryId: bodyWashCategoryId,
    description: 'Some product 4 description.',
    id: 4,
    name: 'product4',
    label: 'Product 4',
    price: {
      currency: 'Malaysian Ringgit',
      currencyPrefix: 'RM',
      amount: 4.50
    },
    stock: 411
  }
];

// top products mock data

export const topProducts = [
  {
    categoryId: products[3].categoryId,
    label: products[3].label,
    soldCount: 12300
  },
  {
    categoryId: products[0].categoryId,
    label: products[0].label,
    soldCount: 599
  },
  {
    categoryId: products[1].categoryId,
    imageUrl: products[1].imageUrl,
    label: products[1].label,
    soldCount: 103
  }
];

// products in cart mock data

const
  product1InCartQuantity = 20,
  product2InCartQuantity = 5;

export const productsInCart = [
  {
    categoryId: products[1].categoryId,
    imageUrl: products[1].imageUrl,
    label: products[1].label,
    name: products[1].name,
    price: products[1].price,
    quantity: product1InCartQuantity,
    totalPrice: {
      ..._.clone(products[1].price),
      amount: products[1].price.amount * product2InCartQuantity
    }
  },
  {
    categoryId: products[1].categoryId,
    label: products[3].label,
    name: products[3].name,
    price: products[3].price,
    quantity: product2InCartQuantity,
    totalPrice: {
      ..._.clone(products[3].price),
      amount: products[3].price.amount * product2InCartQuantity
    }
  }
];
