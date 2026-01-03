import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import PostListProvider from "./components/store/post-list-store";


function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
    <div className="items-container">
      <Sidebar  setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      <div className="main-items">
        <Header /> {selectedTab === "Home" ? <PostList /> : <CreatePost />}
        <Footer />
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
