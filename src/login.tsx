import Logo from '../svgs/logo.svg';

type LoginScreenProps = {
  onLoginClick: () => void
}

const LoginScreen = ({ onLoginClick }: LoginScreenProps) => {
  return (
    <div className='flex flex-col justify-center  container mt-5 text-white mx-auto'>
      <div className='flex flex-1 justify-center'>
        <img src={Logo} width="40px" alt="Twitter Logo" />
      </div>

      <span className='font-bold text-2xl mt-6 pt-1 text-center'>
        Log in to Twitter
      </span>
      <small className='text-center'>powered by Subsocial</small>
      <div className=' lg:w-5/12 lg:px-0 px-5 w-full mt-5 mx-auto'>
        <button
          onClick={onLoginClick}
          type='submit'
          className={`bg-primary focus:outline-none font-bold hover:bg-primary-hover text-white rounded-full w-full py-3`}>
          Log in
        </button>
      </div>
    </div>
  )
}

export default LoginScreen
