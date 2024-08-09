import React from 'react';
import './AllDoneModal.css';


function AllDoneModal({ isOpen}) {

  if (!isOpen) return null;
  return (
    <div className="success-modal-container">
        <div className='success-modal-card'>
            <img className='all-done-logo' src="https://s3-alpha-sig.figma.com/img/248e/28bd/a328dec8d9a39b2a460647d3c1ab419e?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cPI0hC7-cykaaK5eLbky2222Yl7Fyl~aucS5byXOIcvHMVfif7xfZvf~cVSF5rQL2~jZxj-~Lfy1JJaUbsJyKGWjrVpfC-PN4q5UKXnLkac4NJG60ofOmNZazqAN4jwwEwOYGGb12LxlZZLm960zmkqb7~d9sudCXhk5Nxus4Impgj0JXJeAI7JKuL-iY~wTtrw2nz9jnL~HaTVnC8lAOfLKR8ccEuCw6xHq4H3sQdthAaAPfjPOAt-eoCvSNG3Hg47bTh~ZKb6-DNOhXJEyto6XiodWpDTtKikR2349be9Rdi2AMX1b6Mb14818jRLGNhVXoK8Np1hCbrbnGmt~Vg__" alt='All Done Logo' />
            <h4 className='set-text'>You are all Set!</h4>
            <p className='redirect-text'>Redirecting you in 1..</p>
        </div>
    </div>
  )
}

export default AllDoneModal;