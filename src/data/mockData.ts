import { Recipe, KitchenItem, User, GroceryItem } from '../types';

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Mediterranean Quinoa Bowl',
    description: 'A healthy and nutritious bowl packed with fresh vegetables, quinoa, and feta cheese',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    cookingTime: 25,
    servings: 4,
    difficulty: 'Easy',
    rating: 4.8,
    reviews: 156,
    ingredients: [
      { id: '1', name: 'Quinoa', amount: 1, unit: 'cup', category: 'Grains' },
      { id: '2', name: 'Cherry Tomatoes', amount: 200, unit: 'g', category: 'Vegetables' },
      { id: '3', name: 'Cucumber', amount: 1, unit: 'medium', category: 'Vegetables' },
      { id: '4', name: 'Feta Cheese', amount: 100, unit: 'g', category: 'Dairy' },
      { id: '5', name: 'Olive Oil', amount: 3, unit: 'tbsp', category: 'Oils' }
    ],
    instructions: [
      'Cook quinoa according to package instructions',
      'Dice cucumber and halve cherry tomatoes',
      'Combine all ingredients in a bowl',
      'Drizzle with olive oil and season to taste'
    ],
    nutrition: {
      calories: 385,
      protein: 15,
      carbs: 52,
      fat: 14,
      fiber: 6,
      sugar: 8,
      sodium: 320
    },
    tags: ['Mediterranean', 'Healthy', 'Vegetarian', 'Quick']
  },
  {
    id: '2',
    title: 'Grilled Salmon with Asparagus',
    description: 'Perfectly grilled salmon served with tender asparagus and lemon',
    image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg',
    cookingTime: 20,
    servings: 2,
    difficulty: 'Medium',
    rating: 4.9,
    reviews: 89,
    ingredients: [
      { id: '6', name: 'Salmon Fillet', amount: 2, unit: 'pieces', category: 'Protein' },
      { id: '7', name: 'Asparagus', amount: 400, unit: 'g', category: 'Vegetables' },
      { id: '8', name: 'Lemon', amount: 1, unit: 'whole', category: 'Fruits' },
      { id: '9', name: 'Garlic', amount: 2, unit: 'cloves', category: 'Aromatics' }
    ],
    instructions: [
      'Preheat grill to medium-high heat',
      'Season salmon with salt and pepper',
      'Grill salmon 4-5 minutes per side',
      'Grill asparagus until tender'
    ],
    nutrition: {
      calories: 420,
      protein: 45,
      carbs: 8,
      fat: 22,
      fiber: 4,
      sugar: 4,
      sodium: 280
    },
    tags: ['Protein-Rich', 'Low-Carb', 'Healthy', 'Grilled']
  },
  {
    id: '3',
    title: 'Chicken Teriyaki Stir Fry',
    description: 'Quick and delicious stir fry with tender chicken and fresh vegetables',
    image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg',
    cookingTime: 15,
    servings: 3,
    difficulty: 'Easy',
    rating: 4.6,
    reviews: 203,
    ingredients: [
      { id: '10', name: 'Chicken Breast', amount: 500, unit: 'g', category: 'Protein' },
      { id: '11', name: 'Bell Peppers', amount: 2, unit: 'pieces', category: 'Vegetables' },
      { id: '12', name: 'Broccoli', amount: 300, unit: 'g', category: 'Vegetables' },
      { id: '13', name: 'Teriyaki Sauce', amount: 4, unit: 'tbsp', category: 'Sauces' }
    ],
    instructions: [
      'Cut chicken into bite-sized pieces',
      'Heat oil in wok over high heat',
      'Stir fry chicken until cooked through',
      'Add vegetables and sauce, cook 3-4 minutes'
    ],
    nutrition: {
      calories: 310,
      protein: 35,
      carbs: 18,
      fat: 12,
      fiber: 5,
      sugar: 12,
      sodium: 890
    },
    tags: ['Quick', 'Asian', 'Protein-Rich', 'Family-Friendly']
  }
];

export const mockKitchenItems: KitchenItem[] = [
  { id: '1', name: 'Chicken Breast', category: 'Protein', quantity: 1, unit: 'kg', expiryDate: '2024-12-20', purchaseDate: '2024-12-15' },
  { id: '2', name: 'Bell Peppers', category: 'Vegetables', quantity: 3, unit: 'pieces', expiryDate: '2024-12-18', purchaseDate: '2024-12-12' },
  { id: '3', name: 'Quinoa', category: 'Grains', quantity: 500, unit: 'g', expiryDate: '2025-06-15', purchaseDate: '2024-11-20' },
  { id: '4', name: 'Salmon Fillet', category: 'Protein', quantity: 400, unit: 'g', expiryDate: '2024-12-17', purchaseDate: '2024-12-14' },
  { id: '5', name: 'Broccoli', category: 'Vegetables', quantity: 2, unit: 'heads', expiryDate: '2024-12-19', purchaseDate: '2024-12-13' },
  { id: '6', name: 'Cherry Tomatoes', category: 'Vegetables', quantity: 250, unit: 'g', expiryDate: '2024-12-21', purchaseDate: '2024-12-16' }
];

export const mockUser: User = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@email.com',
  avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  dietaryPreferences: ['Pescatarian', 'Low-Sodium'],
  goals: {
    calories: 2000,
    protein: 120,
    carbs: 200,
    fat: 70
  },
  allergies: ['Nuts', 'Shellfish']
};

export const mockGroceryList: GroceryItem[] = [
  { id: '1', name: 'Greek Yogurt', category: 'Dairy', quantity: 2, unit: 'containers', price: 8.99, purchased: false },
  { id: '2', name: 'Spinach', category: 'Vegetables', quantity: 1, unit: 'bag', price: 3.49, purchased: true },
  { id: '3', name: 'Sweet Potatoes', category: 'Vegetables', quantity: 3, unit: 'pieces', price: 4.99, purchased: false },
  { id: '4', name: 'Olive Oil', category: 'Oils', quantity: 1, unit: 'bottle', price: 12.99, purchased: false },
  { id: '5', name: 'Brown Rice', category: 'Grains', quantity: 1, unit: 'bag', price: 5.99, purchased: true }
];