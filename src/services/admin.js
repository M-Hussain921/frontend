import api from './api'
import { mockFoods, mockOrders, mockStats } from './mockData'

// ✅ Set this to true to use mock data (when backend rate limited)
const USE_MOCK_DATA = true  // Change to false when backend is fixed

// ==================== DASHBOARD & STATS ====================
export const getAdminStats = async () => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { stats: mockStats }
  }
  const response = await api.get('/admin/stats')
  return response.data
}

export const getAnalytics = async (period = 'week') => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { 
      recentOrders: mockOrders,
      totalOrders: mockStats.totalOrders,
      totalRevenue: mockStats.totalRevenue
    }
  }
  const response = await api.get(`/admin/analytics?period=${period}`)
  return response.data
}

export const getRevenue = async (type = 'daily') => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { revenue: mockStats.totalRevenue }
  }
  const response = await api.get(`/admin/revenue?type=${type}`)
  return response.data
}

// ==================== FOODS ====================
export const getAdminFoods = async () => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { foods: mockFoods }
  }
  const response = await api.get('/admin/foods')
  return response.data
}

export const createFood = async (data) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    const newFood = { ...data, _id: Date.now().toString(), createdAt: new Date().toISOString() }
    mockFoods.unshift(newFood)
    return { food: newFood, success: true }
  }
  const response = await api.post('/admin/food', data)
  return response.data
}

export const updateFood = async (id, data) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    const index = mockFoods.findIndex(f => f._id === id)
    if (index !== -1) {
      mockFoods[index] = { ...mockFoods[index], ...data }
      return { food: mockFoods[index], success: true }
    }
    throw new Error('Food not found')
  }
  const response = await api.put(`/admin/food/${id}`, data)
  return response.data
}

export const deleteFood = async (id) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    const index = mockFoods.findIndex(f => f._id === id)
    if (index !== -1) {
      mockFoods.splice(index, 1)
      return { success: true }
    }
    throw new Error('Food not found')
  }
  const response = await api.delete(`/admin/food/${id}`)
  return response.data
}

// ==================== ORDERS ====================
export const getAdminOrders = async () => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { orders: mockOrders }
  }
  const response = await api.get('/admin/orders')
  return response.data
}

export const updateOrderStatus = async (orderId, status, remarks = '') => {
  if (USE_MOCK_DATA) {
    await delay(500)
    const order = mockOrders.find(o => o._id === orderId)
    if (order) {
      order.status = status
      return { success: true }
    }
    throw new Error('Order not found')
  }
  const response = await api.put('/admin/order-status', { orderId, status, remarks })
  return response.data
}

// ==================== USERS ====================
export const getAdminUsers = async (params = {}) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { 
      users: [
        { _id: '1', name: 'Rahul Sharma', email: 'rahul@test.com', role: 'user', isBlocked: false, createdAt: new Date().toISOString() },
        { _id: '2', name: 'Priya Singh', email: 'priya@test.com', role: 'user', isBlocked: false, createdAt: new Date().toISOString() },
        { _id: '3', name: 'Amit Verma', email: 'amit@test.com', role: 'delivery', isBlocked: false, createdAt: new Date().toISOString() },
      ]
    }
  }
  const query = new URLSearchParams(params).toString()
  const response = await api.get(`/admin/users${query ? `?${query}` : ''}`)
  return response.data
}

// ==================== DELIVERY BOYS ====================
export const getDeliveryBoys = async () => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { 
      deliveries: [
        { _id: '1', name: 'Raj Kumar', email: 'raj@delivery.com', phone: '9876543210', kycStatus: 'approved', isOnline: true },
        { _id: '2', name: 'Sunil Singh', email: 'sunil@delivery.com', phone: '9876543211', kycStatus: 'pending', isOnline: false },
      ]
    }
  }
  const response = await api.get('/admin/deliveries')
  return response.data
}

// ==================== COUPONS ====================
export const getCoupons = async () => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { 
      coupons: [
        { _id: '1', code: 'SAVE20', discountType: 'percentage', discountValue: 20, minOrderAmount: 499, isActive: true, usedCount: 45, validUntil: new Date().toISOString() },
        { _id: '2', code: 'FLAT100', discountType: 'fixed', discountValue: 100, minOrderAmount: 599, isActive: true, usedCount: 23, validUntil: new Date().toISOString() },
      ]
    }
  }
  const response = await api.get('/admin/coupons')
  return response.data
}

export const createCoupon = async (data) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true, coupon: { ...data, _id: Date.now().toString() } }
  }
  const response = await api.post('/admin/coupon', data)
  return response.data
}

export const updateCoupon = async (id, data) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.put(`/admin/coupon/${id}`, data)
  return response.data
}

export const deleteCoupon = async (id) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.delete(`/admin/coupon/${id}`)
  return response.data
}

export const toggleCoupon = async (id) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.patch(`/admin/coupon/${id}/toggle`)
  return response.data
}

// ==================== CATEGORIES ====================
export const getCategories = async () => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { 
      categories: [
        { _id: '1', name: 'Pizza', isActive: true, sortOrder: 1 },
        { _id: '2', name: 'Biryani', isActive: true, sortOrder: 2 },
        { _id: '3', name: 'North Indian', isActive: true, sortOrder: 3 },
      ]
    }
  }
  const response = await api.get('/admin/categories')
  return response.data
}

export const createCategory = async (data) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true, category: { ...data, _id: Date.now().toString() } }
  }
  const response = await api.post('/admin/category', data)
  return response.data
}

export const updateCategory = async (id, data) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.put(`/admin/category/${id}`, data)
  return response.data
}

export const deleteCategory = async (id) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.delete(`/admin/category/${id}`)
  return response.data
}

// ==================== REPORTS ====================
export const getReports = async (data) => {
  if (USE_MOCK_DATA) {
    await delay(800)
    return { 
      report: {
        orders: 892,
        newUsers: 45,
        totalUsers: 1245,
        topFoods: [
          { _id: '1', totalSold: 125, food: [{ name: 'Margherita Pizza' }] },
          { _id: '2', totalSold: 98, food: [{ name: 'Chicken Biryani' }] },
        ]
      }
    }
  }
  const response = await api.post('/admin/reports', data)
  return response.data
}

// ==================== SETTINGS ====================
export const getSettings = async (publicOnly = false) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { 
      settings: {
        app_name: 'FoodieDash',
        app_version: '1.0.0',
        contact_email: 'support@foodiedash.com',
        delivery_charge: 40,
        min_order_amount: 499
      }
    }
  }
  const response = await api.get(`/admin/settings${publicOnly ? '?public=true' : ''}`)
  return response.data
}

export const updateSettings = async (data) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.post('/admin/settings', data)
  return response.data
}

export const getSystemHealth = async () => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { health: { database: 'connected', uptime: '2 days' } }
  }
  const response = await api.get('/admin/system-health')
  return response.data
}

export const toggleFeature = async (feature, enabled) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.post('/admin/feature-toggle', { feature, enabled })
  return response.data
}

// Helper function
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// ==================== Keep other exports as is ====================
// (Add remaining functions with similar mock support if needed)
export const assignDeliveryBoy = async (orderId, deliveryBoyId) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.post('/admin/assign-order', { orderId, deliveryBoyId })
  return response.data
}

export const getLiveOrders = async () => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { orders: mockOrders.filter(o => o.status !== 'delivered') }
  }
  const response = await api.get('/admin/live-orders')
  return response.data
}

export const getUserDetails = async (userId) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { user: { _id: userId, name: 'Test User', email: 'test@test.com', role: 'user' } }
  }
  const response = await api.get(`/admin/user/${userId}`)
  return response.data
}

export const blockUser = async (userId, reason = '') => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.delete(`/admin/user/${userId}`, { data: { reason } })
  return response.data
}

export const approveKYC = async (deliveryBoyId) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.post('/admin/kyc/approve', { deliveryBoyId })
  return response.data
}

export const rejectKYC = async (deliveryBoyId, reason) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.post('/admin/kyc/reject', { deliveryBoyId, reason })
  return response.data
}

export const getDeliveryBoyDetails = async (id) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { delivery: { _id: id, name: 'Delivery Boy', kycStatus: 'approved' } }
  }
  const response = await api.get(`/admin/delivery-details/${id}`)
  return response.data
}

export const createDeliveryBoy = async (data) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true, delivery: { ...data, _id: Date.now().toString() } }
  }
  const response = await api.post('/admin/create-delivery', data)
  return response.data
}

export const updateDeliveryBoy = async (id, data) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.put(`/admin/update-delivery/${id}`, data)
  return response.data
}

export const deleteDeliveryBoy = async (id) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.delete(`/admin/delete-delivery/${id}`)
  return response.data
}

export const getPendingKYC = async () => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { deliveries: [] }
  }
  const response = await api.get('/admin/kyc/pending')
  return response.data
}

export const getAllKYCRequests = async () => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { requests: [] }
  }
  const response = await api.get('/admin/kyc/all')
  return response.data
}

export const getOffers = async () => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { offers: [] }
  }
  const response = await api.get('/admin/offers')
  return response.data
}

export const createOffer = async (data) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.post('/admin/offer', data)
  return response.data
}

export const deleteOffer = async (id) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.delete(`/admin/offer/${id}`)
  return response.data
}

export const getFraudLogs = async () => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { logs: [] }
  }
  const response = await api.get('/admin/fraud')
  return response.data
}

export const getAllReviews = async (params = {}) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { reviews: [] }
  }
  const query = new URLSearchParams(params).toString()
  const response = await api.get(`/admin/reviews${query ? `?${query}` : ''}`)
  return response.data
}

export const deleteReview = async (id) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.delete(`/admin/review/${id}`)
  return response.data
}

export const getAllComplaints = async () => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { complaints: [] }
  }
  const response = await api.get('/admin/complaints')
  return response.data
}

export const approveRefund = async (refundId, remarks = '') => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.post('/admin/refund-approve', { refundId, remarks })
  return response.data
}

export const rejectRefund = async (refundId, remarks = '') => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.post('/admin/refund-reject', { refundId, remarks })
  return response.data
}

export const getSystemLogs = async (params = {}) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { logs: [] }
  }
  const query = new URLSearchParams(params).toString()
  const response = await api.get(`/admin/logs${query ? `?${query}` : ''}`)
  return response.data
}

export const sendNotification = async (data) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.post('/admin/notification', data)
  return response.data
}

export const sendPushNotification = async (data) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { success: true }
  }
  const response = await api.post('/admin/push-notification', data)
  return response.data
}

export const getCouponById = async (id) => {
  if (USE_MOCK_DATA) {
    await delay(500)
    return { coupon: { _id: id, code: 'TEST20', discountValue: 20 } }
  }
  const response = await api.get(`/admin/coupon/${id}`)
  return response.data
}