import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
// import LoginT from './pages/login/Login';

// recon
import Recon from './pages/webAssessment/Recon';
import Scan from './pages/webAssessment/Scan';
import Rescan from './pages/Rescan';
import Dns from './pages/WAF/Dns';
import Ssl from './pages/WAF/Ssl';
import Payloads from './pages/WAF/Payloads';
import Spoof from './pages/WAF/Spoof';
import Inbound from './pages/webGateway/Inbound';
import Outbound from './pages/webGateway/Outbound';
import Ongoing from './pages/webAssessment/Ongoing';
// import Completed from "./pages/Completed";
import Agents from './pages/admin/Agents';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import Getreport from './pages/Getreport';

import AssessmentResults from './pages/webAssessment/AssessmentResults';
import ScanList from './pages/webAssessment/ScanList';
// import WGList from './pages/WGList';

import ScanResults from './pages/webAssessment/ScanResults';
import DnsList from './pages/WAF/DnsList';
import DnsResults from './pages/WAF/DnsResults';
import Test from './pages/Test';

import IsAdmin from './components/routing/IsAdmin';

import SslList from './pages/WAF/SslList';
import SslResults from './pages/WAF/SslResults';

import NotFound from './components/layout/NotFound';
import PrivateRoute from './components/routing/PrivateRoute';
import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';
// import AdminDashboard from './pages/dashboard/AdminDashboard';

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="test" element={<Test />} />
          {/* <Route path="logint" element={<LoginT />} /> */}
          <Route
            path="dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />

          <Route
            path="admindashboard"
            element={<IsAdmin component={AdminDashboard} />}
          />  

          <Route
            path="assessmentresults"
            element={<PrivateRoute component={AssessmentResults} />}
          />

          <Route
            path="scanlist"
            element={<PrivateRoute component={ScanList} />}
          />

          <Route
            path="dnslist"
            element={<PrivateRoute component={DnsList} />}
          />
          <Route
            path="dnsresults"
            element={<PrivateRoute component={DnsResults} />}
          />

          <Route
            path="ssllist"
            element={<PrivateRoute component={SslList} />}
          />
          <Route
            path="sslresults"
            element={<PrivateRoute component={SslResults} />}
          />
          {/* <Route
            exact
            path="/wglist"
            element={<PrivateRoute component={WGList} />}
          /> */}

          <Route
            path="scanresults"
            element={<PrivateRoute component={ScanResults} />}
          />

          {/* <Route
            path="adminDashboard"
            element={<PrivateRoute component={aDashboard} />}
          /> */}

          <Route path="recon" element={<PrivateRoute component={Recon} />} />
          <Route path="scan" element={<PrivateRoute component={Scan} />} />
          <Route path="rescan" element={<PrivateRoute component={Rescan} />} />

          <Route path="dns" element={<PrivateRoute component={Dns} />} />
          <Route path="ssl" element={<PrivateRoute component={Ssl} />} />
          <Route
            path="payloads"
            element={<PrivateRoute component={Payloads} />}
          />
          <Route path="spoof" element={<PrivateRoute component={Spoof} />} />

          <Route
            path="inbound"
            element={<PrivateRoute component={Inbound} />}
          />
          <Route
            path="outbound"
            element={<PrivateRoute component={Outbound} />}
          />

          <Route
            path="ongoing"
            element={<PrivateRoute component={Ongoing} />}
          />
          {/* <PrivateRoute exact path="/completed" element={<PrivateRoute component={Dashboard}  />}/> */}
          <Route path="agents" element={<PrivateRoute component={Agents} />} />
          <Route
            path="getreport"
            element={<PrivateRoute component={Getreport} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
