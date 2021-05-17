import React from 'react'
import PropTypes from 'prop-types';
import './ProfileItem.css';

const ProfileItem = ({profilprops, handleName}) => {
   
    return (
        <div >
            <h3> FullName:{profilprops.FullName}</h3>
            <h3>Bio:{profilprops.Bio}</h3>
            <h3>Profesion:{profilprops.Profesion}</h3>
            <button className="button"  onClick={() => handleName(profilprops.FullName)}>name profile</button>

        </div>
    )
}
ProfileItem.propTypes = {
    profileprops:PropTypes.array
}
export default ProfileItem
