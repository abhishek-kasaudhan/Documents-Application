import './tailwind.css'
import { Route, BrowserRouter ,Routes } from 'react-router-dom';
import Header from './header';
import Login from './Login';
import Signup from './SignUp';
import Documents from './document';
import DocumentDetails from './documentdetail';
import Home from './Home';

function App() {
return (
<div>
<BrowserRouter>
<Header />
<Routes>
<Route path="/" exact element={<Home />} />
<Route path="/Login" exact element={<Login />} />
<Route path="/Signup" element={<Signup />} />
<Route path="/documents" exact element={<Documents />} />
<Route path="/documents/:id/edit" element={<DocumentDetails />} />
</Routes>
</BrowserRouter>
</div>
);
}

export default App;
