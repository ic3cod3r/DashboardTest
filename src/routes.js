import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Page1 from "./pages/Page-1";
import Page2 from "./pages/Page-2";
import Page3 from "./pages/Page-3";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function Routy() {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <Layout {...props}>
                    <Routes>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/dashboard" exact component={Dashboard}/>
                        <Route path="/page-1" component={Page1}/>
                        <Route path="/page-2" component={Page2}/>
                        <Route path="/page-3" component={Page3}/>
                        <Route component={NotFound}/>
                    </Routes>
                </Layout>
            )}/>
        </BrowserRouter>
    )
}

export default Routy;
