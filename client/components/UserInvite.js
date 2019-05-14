import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getAllScrapbooksThunk, getAllPagesThunk } from '../store/scrapbooks'
import {Link} from 'react-router-dom'

const UserInvite = () => {

  return(
    <div className="box form centered-forms">
    <h2>Invite Your Friends To Collaborate On Your Scrapbook</h2>
    <div className="field">
        <div className="control">
            <input className="input" name="name" type="text" placeholder="Enter E-Mail"/>
        </div>
    </div>
    <Link to="/library">
        <button className="button is-primary space-button" type="submit">Send Invites</button>
    </Link>
    <Link to="/library">
        <button className="button is-primary space-button" type="submit">Skip</button>
    </Link>
</div>
  )
}

export default UserInvite;
