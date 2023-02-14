import React from "react";
import { Toaster } from "react-hot-toast";

import Layout1 from "../components";
import Head from "next/head";

import Navbar from "../components";
import {Footer} from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div >
     
     
      <main className="main-container">
        <Toaster />
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MyApp;
