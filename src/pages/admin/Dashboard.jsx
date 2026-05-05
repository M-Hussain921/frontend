import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { getAdminStats, getAnalytics } from '../../services/admin'
import toast from 'react-hot-toast'

const Dashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState({})
  const [recentOrders, setRecentOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, analyticsRes] = await Promise.all([
          getAdminStats(),
          getAnalytics()
        ])
        setStats(statsRes.stats || {})
        setRecentOrders(analyticsRes.recentOrders || [])
      } catch (error) {
        toast.error('Failed to load dashboard')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const statsCards = [
    { title: 'Total Users', value: stats.totalUsers || 0, icon: '👥', color: '#ff6b35' },
    { title: 'Total Orders', value: stats.totalOrders || 0, icon: '📦', color: '#17a2b8' },
    { title: 'Pending Orders', value: stats.pendingOrders || 0, icon: '⏳', color: '#fd7e14' },
    { title: 'Total Revenue', value: `₹${(stats.totalRevenue || 0).toLocaleString()}`, icon: '💰', color: '#20c997' },
  ]

  if (loading) return <div className="loading">Loading...</div>

  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h1>Welcome back, {user?.name}!</h1>
          <p>Here's what's happening today.</p>
        </div>
      </div>

      <div className="stats-grid">
        {statsCards.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-icon" style={{ background: stat.color }}>{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="recent-orders">
        <h2>Recent Orders</h2>
        <div className="orders-table-container">
          <table className="admin-table">
            <thead>
              <tr><th>Order ID</th><th>Customer</th><th>Amount</th><th>Status</th></tr>
            </thead>
            <tbody>
              {recentOrders.map(order => (
                <tr key={order._id}>
                  <td>{order.orderId}</td>
                  <td>{order.userId?.name || 'N/A'}</td>
                  <td>₹{order.finalAmount}</td>
                  <td><span className={`order-status ${order.status}`}>{order.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard