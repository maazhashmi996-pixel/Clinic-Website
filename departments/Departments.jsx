import React from 'react'
import DepartmentsCards from '../components/DepartmentsCards'
import DepartmentsChoose from '../components/DepartmentsChoose'
import DepartmentsHero from '../components/DepartmentsHero'
function Departments() {
  return (
    <>
      <DepartmentsHero/>
      <DepartmentsCards/>
      <DepartmentsChoose/>
    </>
  )
}

export default Departments
