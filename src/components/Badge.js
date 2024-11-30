import React from 'react'

const Badge = ({children, styleInfo}) => {
  const colorKey = {
    Breakfast: 'primary', 
    Lunch: 'success', 
    Dinner: 'danger', 
    Dessert: 'warning', 
    Appetizers_Snack: 'info', 
    Vegan: 'dark',
    Drinks: 'info'
  }
  return (
    <h5 style={styleInfo}>
        <span className={`badge bg-${colorKey[children]}`}>
        {children}
      </span>
    </h5>
  )
}

export default Badge