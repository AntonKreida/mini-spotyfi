import React from 'react';

import Input from '../../UI/input/input';
import FormLogo from '../../UI/logo/form-logo';

import styles from './form.module.scss';

const Form = ({dataInput, signUp, logIn, goLogIn, onSubmit, valid, autocomplete}) => (
  <form onSubmit={onSubmit} className={styles.form} action="/" method="POST" autoComplete={autocomplete} noValidate>
    <FormLogo className={styles.logo}/>
    <div className={styles.items}>
      {dataInput.map((input) => (
        <Input 
          key={input.id} 
          classInput={`${styles.input} js-input`}
          invalid={styles.invalid}
          type={input.type} 
          placeholder={input.placeholder}
          name={input.name}
          value={input.value}
          dirty={input.dirty}
          onBlur={input.onBlur}
          onChange={input.onChange}
          autocomplete={input.autocomplete}
          required={input.required}/>))}
    </div>
    <div className={styles.controller}>
      {logIn === 'logIn' && 
        <>
          <button className={`${styles.button} ${styles.submit}`} disabled={!valid} type='submit'>Войти</button>
          <button className={styles.button} type='button' onClick={goLogIn}>Зарегистрироваться</button>
        </>
      }
      {signUp === 'signUp' && <button className={`${styles.button} ${styles.submit}`} disabled={!valid} type='submit'>Зарегистрироваться</button>}
    </div>
  </form>
)

export default Form;
