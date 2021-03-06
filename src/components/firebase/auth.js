import { auth } from './firebase';

// Sign Up
export const CreateUserWithEmailAndPassword = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

// Sign In
export const SignInWithEmailAndPassword = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

// Sign out
export const SignOut = () => {
  return auth.signOut();
};

// Password Reset
export const PasswordReset = (email) => {
  return auth.sendPasswordResetEmail(email);
};

// Password Change
export const PasswordUpdate = (password) => {
  return auth.currentUser.updatePassword(password);
};
