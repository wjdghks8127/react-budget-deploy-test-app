import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
      <ul className='list'>
        {/* ExpenseItem */}
        {
          expenses.map(expense => {
            return (
              <ExpenseItem 
                key = { expense.id }
                expense = { expense } 
                handleDelete = { handleDelete }        
                handleEdit = { handleEdit }     
              />
            )
          })
        }
      </ul>
      {expenses.length > 0 && (
        <button className='btn'
          onClick={ clearItems }
        >
          목록 지우기
          <MdDelete className='btn-icon' />
        </button>
      )}
      
    </>
  )
}


export default ExpenseList