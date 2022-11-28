import { AppRoutes } from "./Routes";
import { AuthGoogleProvider } from "./contexts/authGoogle";

function App() {
  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  );
}

export default App;
