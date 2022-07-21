import { useEffect, useState } from "react";
import { useAuth } from "../components/createContext";
import Axios from "axios";
// Add image และ Remove Image และ change Image
function Username() {
  const [imgDog, setImgdog] = useState("");
  const [save, setSave] = useState(() => {
    const saveData = localStorage.getItem("save");
    if (saveData) {        //คำสั่ง if ถ้ามีข้อมูล saveData ให้ ruturn ข้อมูลออกมา
      return JSON.parse(saveData);
    } else {         //หรือ ไม่มี ให้ return ค่าว่างออกมา
      return [];
    }
  });

  let auth = useAuth();

  useEffect(() => {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      setImgdog(response.data.message);
    });
  }, []);

  const changeImg = () => {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      setImgdog(response.data.message);
    });
  };

  const saveImg = () => {
    setSave([...save, { img: imgDog, nameuser: auth.user }]);
    changeImg();
  };

  const deleteImg = (index) => {
    save.splice(index, 1);
    setSave([...save]);
  };

  useEffect(() => {
    localStorage.setItem("save", JSON.stringify(save));
  }, [save]);

  return (
    <div className="bg-gradient-to-r from-pink-100 via-violet-100 to-pink-100">
      <br />
      <br />
      <div className="text-center text-3xl lg:text-4xl sm:text-4xl text-stone-800">
        Little Puppy Picture
      </div>
      <br />
      <br />
      <div className="justify-center flex ">
        <img
          className="sm:w-96 sm:h-72 w-64 h-52 rounded-xl shadow-lg shadow-indigo-300/40 hover:scale-125 transition-all duration-500 transform mx-auto "
          src={imgDog}
        />
      </div>
      <br />
      <br />
      <button
        onClick={saveImg}    //ทำงานเมื่อ object นั้นถูกคลิก
        className="bg-lime-600 hover:bg-lime-400  rounded-md w-28 h-10 text-white sm:ml-40 ml-14 text-xl shadow-lg shadow-yellow-400/40"
      >
        ADD
      </button>{" "}
      <button
        onClick={changeImg}
        className="bg-amber-500 hover:bg-amber-300  rounded-md w-28 h-10 text-white float-right sm:mr-40 mr-14 text-xl
        shadow-lg shadow-yellow-400/40 "
      >
        CHANGE
      </button>
      <div className="p-10 hidden md:block  ">
        <table className="w-full drop-shadow-lg text-stone-700">
          <thead className="bg-gray-50 border-y-2 border-x-2 border-gray-300 ">
            <tr className="flex justify-between ">
              <th className="p-5 pl-20 text-xl font-semibold tracking-wide text-left ">
                Image
              </th>
              <th className="p-5 text-xl font-semibold tracking-wide text-left ">
                Details
              </th>
              <th className="p-5 pr-20 text-xl font-semibold tracking-wide text-left">
                Status
              </th>
            </tr>
          </thead>
        </table>

        <thead className=" ">
          <tr className="">
            <th className="bg-gray-100 w-screen drop-shadow-lg ">
              {save.map((value, index) => {     //map แก้ไข้ (value, index)
                return (
                  <div className=" h-64 border-b-2 border-x-2 border-gray-300 ">
                    <div className="flex justify-between">
                      <div>
                        <img
                          className="w-72 h-52 md:w-52 md:h-48 rounded-lg mt-8 ml-6"
                          src={value.img}
                        />
                      </div>
                      <div className="pt-28 pr-14 text-4xl text-stone-800">
                        save from {value.nameuser}
                      </div>
                      <div className="pt-28 pr-16">
                        <button
                          onClick={() => deleteImg(index)}
                          className="bg-rose-400 hover:bg-red-300 rounded-md w-28 h-12 text-white shadow-lg shadow-orange-400/40 text-xl"
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </th>
          </tr>
        </thead>
      </div>
      <div className=" md:hidden flex flex-col ">
        {save.map((value, index) => {     //map แก้ไข้ (value, index)
          return (
            <div
              className="flex justify-center grid-cols-1  
                mx-16 mt-10 drop-shadow-lg rounded-2xl backdrop-blur-xl bg-white/80 "
            >
              <div className="">
                <div className="">
                  <img
                    className="sm:w-64 sm:h-52 w-52 h-44 rounded-lg mt-10 ml-5"
                    src={value.img}
                  />
                </div>
                <div className="flex justify-center sm:text-3xl text-2xl pt-5 ">
                  save from {value.nameuser}
                </div>
                <div className=" flex justify-center pb-10 pt-5">
                  <button
                    onClick={() => deleteImg(index)} //ทำงานเมื่อ object นั้นถูกคลิก
                    className="bg-rose-400 hover:bg-red-300  rounded-md w-28 h-10 text-white  shadow-lg shadow-orange-400/40 text-lg"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Username;
