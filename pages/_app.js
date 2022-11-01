// Wrap the Component so the entire site will be included

// import Layout from "../components/usersAccount/Layout/Layout";
import Layout from "../components/layout/Layout";
// import Layout from "../components/usersAccount/Layout/Layout";
import "../styles/globals.css";
import "../components/dataFlow/companyregistration/AddCompanies.css";
import "../components/dataFlow/choreregistreation/AddChore.module.css";
import "../components/searchBar/Search.module.css";
// import { AuthContextProvider } from "../components/Token/LogInAuthentication ";

import { AuthContextProvider } from "../components/Token/Auth-context";

// import { AuthUserProvider } from "../components/Token/AuthUserContext";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <p>Some test for the gitkraken</p>
      <p>Some test for the gitkraken</p>
      <p>Some test for the gitkraken</p>
      <p>Some test for the gitkraken</p>
      <Layout>
        {/* <AuthContextProvider> */}
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
        {/* </AuthContextProvider> */}

        {/* </AuthUserProvider> */}
      </Layout>
    </div>
  );
}

export default MyApp;
