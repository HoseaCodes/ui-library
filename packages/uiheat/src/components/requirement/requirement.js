import { Xmark } from "../xmark";
import { Checkmark } from "../checkmark";
import React, { useEffect, useState } from "react";

export const Requirement = ({ value, requirement }) => {
  const [isValid, setIsValid] = useState();

  useEffect(() => {
    setIsValid(requirement.validator(value));
  }, [value, requirement]);

  return (
    <div className='requirement'>
      {isValid ? <Checkmark /> : <Xmark />}
      
      <p className={isValid ? 'valid' : 'invalid'}>
        {requirement.text}
      </p>
    </div>
  );
};