import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import logo from "./assets/logo.png";

const App = () => {
  const [userData, setUserdata] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const GetData = async () => {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=40`,
      );
      setUserdata(response.data);
    };
    GetData();
  }, [index]);

  let printUserData = userData.map(function (element, index) {
    return <Card element={element} index={index} />;
  });

  return (
    <>
      {userData && userData.length > 0 ? (
        <div className="bg-black text-white min-h-screen flex flex-col gap-10 items-center justify-center py-10 px-2">
          <img src={logo} alt="Pixora Logo" className="h-50 w-80 p-4" />
          <h1 className="text-2xl font-semibold">Page {index}</h1>

          <div className="flex flex-wrap justify-center gap-8">
            {printUserData}
          </div>

          <div className="flex gap-4 mb-8 mt-4 items-center justify-center">
            <button
              style={{
                opacity: index == 1 ? 0.2 : 1,
              }}
              className="bg-amber-400 text-black text-lg font-semibold cursor-pointer active:scale-95 transition-transform  px-4 py-2 rounded-lg mr-2"
              onClick={() => {
                if (index > 1) {
                  setIndex(index - 1);
                  setUserdata([]);
                }
              }}
            >
              Prev
            </button>

            <h2 className="text-s font-semibold">Page {index}</h2>
            <button
              className="bg-amber-400 text-black text-lg font-semibold cursor-pointer active:scale-95 transition-transform px-4 py-2 rounded-lg"
              onClick={() => {
                setUserdata([]);
                setIndex(index + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
