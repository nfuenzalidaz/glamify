import { useAuth0 } from '@auth0/auth0-react';
import styles from './LogOut.module.css';

const LogOut = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <button
        className={styles.logOutButton}
        onClick={() =>
          logout({ logoutParams: { returnTo: import.meta.env.VITE_FRONT_URL } })
        }
      >
        CERRAR SESION
      </button>
    </div>
  );
};

export default LogOut;
