import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Users from "./pages/Users.jsx";
import Posts from "./pages/Posts.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

    const location = useLocation();

    return (
            <AnimatePresence mode="wait">
                <Navbar />
                <div className="min-h-screen">
                    <Routes location={location} key={location.pathname}>
                        {/* Kullanıcılar Sayfası */}
                        <Route
                            path="/"
                            element=
                            {<motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duraction: 0.5 }}
                            >
                                <Users />
                            </motion.div>}
                        />

                        {/* Gönderiler Sayfası */}
                        <Route
                            path={`/posts`}
                            element=
                                {<motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duraction: 0.5 }}
                                >
                                    <Posts />
                                </motion.div>}
                        />
                        <Route path="/posts/:userId" element={<Posts />} />
                    </Routes>
                </div>
            </AnimatePresence>
    );
}

export default App;
