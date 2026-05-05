// // Mock data for admin panel
// export const mockFoods = [
//   {
//     _id: '1',
//     name: 'Margherita Pizza',
//     price: 299,
//     category: 'Pizza',
//     isAvailable: true,
//     isVeg: true,
//     image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300',
//     description: 'Classic pizza with tomato sauce and mozzarella cheese',
//     discount: 10,
//     createdAt: new Date().toISOString(),
//     rating: 4.5
//   },
//   {
//     _id: '2',
//     name: 'Chicken Biryani',
//     price: 349,
//     category: 'Biryani',
//     isAvailable: true,
//     isVeg: false,
//     image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=300',
//     description: 'Fragrant basmati rice with spicy chicken',
//     discount: 0,
//     createdAt: new Date().toISOString(),
//     rating: 4.8
//   },
//   {
//     _id: '3',
//     name: 'Paneer Butter Masala',
//     price: 279,
//     category: 'North Indian',
//     isAvailable: true,
//     isVeg: true,
//     image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300',
//     description: 'Creamy tomato based curry with paneer',
//     discount: 15,
//     createdAt: new Date().toISOString(),
//     rating: 4.6
//   },
//   {
//     _id: '4',
//     name: 'Masala Dosa',
//     price: 149,
//     category: 'South Indian',
//     isAvailable: true,
//     isVeg: true,
//     image: 'https://images.unsplash.com/photo-1630384060421-cf20c0e6cf5e?w=300',
//     description: 'Crispy dosa with potato filling and sambar',
//     discount: 0,
//     createdAt: new Date().toISOString(),
//     rating: 4.7
//   },
//   {
//     _id: '5',
//     name: 'Veg Burger',
//     price: 129,
//     category: 'Fast Food',
//     isAvailable: true,
//     isVeg: true,
//     image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300',
//     description: 'Crispy veg patty with lettuce and mayo',
//     discount: 5,
//     createdAt: new Date().toISOString(),
//     rating: 4.3
//   },
//   {
//     _id: '6',
//     name: 'Gulab Jamun',
//     price: 99,
//     category: 'Dessert',
//     isAvailable: true,
//     isVeg: true,
//     image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300',
//     description: 'Soft milk dumplings in sugar syrup',
//     discount: 0,
//     createdAt: new Date().toISOString(),
//     rating: 4.9
//   }
// ]

// export const mockOrders = [
//   {
//     _id: '101',
//     orderId: 'ORD001',
//     userId: { name: 'Rahul Sharma' },
//     finalAmount: 599,
//     status: 'delivered',
//     paymentMethod: 'cod',
//     createdAt: new Date().toISOString(),
//     items: [{ quantity: 2, name: 'Margherita Pizza' }]
//   },
//   {
//     _id: '102',
//     orderId: 'ORD002',
//     userId: { name: 'Priya Singh' },
//     finalAmount: 799,
//     status: 'pending',
//     paymentMethod: 'razorpay',
//     createdAt: new Date().toISOString(),
//     items: [{ quantity: 1, name: 'Chicken Biryani' }]
//   },
//   {
//     _id: '103',
//     orderId: 'ORD003',
//     userId: { name: 'Amit Verma' },
//     finalAmount: 449,
//     status: 'confirmed',
//     paymentMethod: 'wallet',
//     createdAt: new Date().toISOString(),
//     items: [{ quantity: 2, name: 'Paneer Butter Masala' }]
//   }
// ]

// export const mockStats = {
//   totalUsers: 1245,
//   totalOrders: 892,
//   totalRevenue: 125000,
//   totalFoods: 45,
//   pendingOrders: 23,
//   deliveredOrders: 869,
//   totalDeliveryBoys: 12,
//   pendingKYC: 3
// }