import React from 'react'
import PropTypes from 'prop-types';

const ProfileItem = ({profilprops}) => {
   
    return (
        <div >
            <h3>{profilprops.FullName}</h3>
            <h3>{profilprops.Bio}</h3>
            <h3>{profilprops.Profesion}</h3>
        </div>
    )
}
ProfileItem.propTypes = {
    profileprops:PropTypes.array
}
export default ProfileItem
