
import './App.css';
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
      <ProfileComponent profile={profile}/>
     <img src="https://i.pinimg.com/originals/5d/57/2d/5d572d653acb9dfc66f45fc42733bb7b.png" width="100" className="image"  alt=""  />
    </div>
  );
}

export default App;
