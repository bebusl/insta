import { useState } from 'react';
import { validateEmail, validatePwd } from '../utils/validator';

export const VALID = 'VALID';
export const INVALID = 'INVALID';
export const EMPTY = 'EMPTY';

function useLogin() {
  const [isValidEmail, setIsValidEmail] = useState(EMPTY);
  const [isValidPwd, setIsValidPwd] = useState(EMPTY);

  const checkValidEmail = (email) => {
    if (!email) setIsValidEmail(EMPTY);
    else if (validateEmail(email)) setIsValidEmail(VALID);
    else setIsValidEmail(INVALID);
  };

  const checkValidPwd = (pwd) => {
    if (!pwd) setIsValidPwd(EMPTY);
    else if (validatePwd(pwd)) setIsValidPwd(VALID);
    else setIsValidPwd(INVALID);
  };

  return [isValidEmail, isValidPwd, checkValidEmail, checkValidPwd];
}

export default useLogin;
