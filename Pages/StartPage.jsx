import { View } from 'react-native';
import { styles } from '../Components/Graphic features';
import SignInPage from './SignInPage';
import AuthenticatedPage from './AuthenticatedPage';

/**
 * Pagina per eseguire l'accesso o la pagina in cui si è già eseguito l'accesso
 */
const StartPage = ({
  user,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  handleAuthentication,
  showSignUp,
  setShowSignUp,
  warning,
  setWarning,
  warningSignUp,
  setWarningSignUp
  }) => {
  return (
    <View style={styles.container}>
      {user ? (
        <AuthenticatedPage
          user={user}
          email={email}
          password={password}
          handleAuthentication={handleAuthentication}
          setPassword={setPassword}
        />
      ) : (
        <SignInPage
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          handleAuthentication={handleAuthentication}
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
          warning={warning}
          setWarning={setWarning}
          warningSignUp={warningSignUp}
          setWarningSignUp={setWarningSignUp}
        />
      )}
    </View>
  );
}

export default StartPage;