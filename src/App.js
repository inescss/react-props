
import './App.css';
import ImageProfil from './components/imageProfile/ImageProfil';
import ProfileComponent from './components/profil/ProfileComponent';
function App() {
  const profile = [
    {
      FullName:"Ahmed",
      Bio:"cv",
      Profesion:"Teacher",
    }
  ];
  return (
    <div className="App">
      <h1>personalized profile </h1>
      <ImageProfil>
      <img src="https://images.sk-static.com/images/media/profile_images/artists/8293388/huge_avatar" width="250" className="image"  alt=""  />
      </ImageProfil>
      <ProfileComponent profile={profile}/>
    </div> 


  );
}

export default App;
