import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from "../../firebase.js";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/user.slice.js";
import { useNavigate } from "react-router-dom";
function OAuth() {
  const auth = getAuth(app);
  const nav = useNavigate(); 
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      const ResultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch('/api/auth/google',{
            method:"POST",
            headers:{
              'Content-Type': 'application/json' // Specify the content type
            },
            body:JSON.stringify({
                name:ResultsFromGoogle.user.displayName,
                email:ResultsFromGoogle.user.email,
                googlePhoto:ResultsFromGoogle.user.photoURL,
            }),
      })

      const data = await res.json();
      if(res.ok){
            dispatch(signInSuccess(data))
            nav('/')
      }
    } catch (error) {
      console.error('Google sign-in error:', error.message);
    }
  };

  return (
    <Button type="button" gradientDuoTone="pinkToOrange" outline onClick={handleGoogleClick}>
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button>
  );
}

export default OAuth;
