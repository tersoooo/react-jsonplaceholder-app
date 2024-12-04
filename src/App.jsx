import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Users from "./pages/Users.jsx";
import Posts from "./pages/Posts.jsx";

function App() {
    return (
            <AnimatePresence mode="wait">
                <div className="bg-gray-100 min-h-screen">
                    <Routes>
                        {/* Kullanıcılar Sayfası */}
                        <Route path="/" element={<Users />} />

                        {/* Gönderiler Sayfası */}
                        <Route path="/posts" element={<Posts />} />
                    </Routes>
                </div>
            </AnimatePresence>
    );
}

export default App;
