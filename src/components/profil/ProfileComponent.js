import React from 'react'
import ProfileItem from '../ProfileItem/ProfileItem';
import PropTypes from 'prop-types';

const ProfileComponent = ({ profile }) => {
    const handleName = (nom) => {
        alert(`${FullName} of the profile user`)
    }
    
    return (
        <div>
            {
                profile.map((el,index) => (<ProfileItem key={index} profilprops={el} handleName={handleName}/>))
            }
        </div>
    );
};
ProfileComponent.propTypes = {
    profile:PropTypes.array
   
}
export default ProfileComponent
