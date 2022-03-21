/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="" target="_blank" rel="noopener noreferrer">
        </a>
        <span className="ms-1">&copy; 2022 WorkSuite.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://roja-softwares.vercel.app" target="_blank" rel="noopener noreferrer">
          ROJA Software
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
