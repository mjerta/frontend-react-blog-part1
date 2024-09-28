import React from 'react';
import "./UserFeedBack.css"

function UserFeedBack({comments, shares}) {
  return (
    <div className="feedback">
      <p>{comments} reacties</p>
      <span>-</span>
      <p>{shares} keer gedeeld</p>
    </div>

  )
}

export default UserFeedBack;