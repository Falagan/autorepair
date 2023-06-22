import { createUserWithEmailAndPassword, getAuth, updateProfile, User } from 'firebase/auth';
import { SignUp } from '../modules/home/models/sign-up.model';

export const FirebaseRepository = {
  signUpUser: async (signUp: SignUp) => {
    const auth = getAuth();
    const response = await createUserWithEmailAndPassword(auth, signUp.email, signUp.password);
    if (response) {
      return await FirebaseRepository.updateUserProfile(response.user);
    }
    return;
  },

  updateUserProfile: (user: User) => {
    return updateProfile(user, { displayName: 'Manolo' });
  },
};
