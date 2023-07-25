import { useState } from "react";
import axios from "axios";

// Assets
import imgHorse from "./assets/images/horse1.png";
import imgGrabyo from "./assets/images/grabyo.png";
import imgLifegroups from "./assets/images/lifegroups.png";
import imgLilly from "./assets/images/lilly.png";
import imgMicrosoft from "./assets/images/microsoft.png";

function ValidateEmail(mail) {
  if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function App() {
  const [yourMail, setYourMail] = useState("");

  const handleSendMail = () => {
    if (yourMail !== "") {
      if (ValidateEmail(yourMail)) {
        axios
          .post(
            "https://api.brevo.com/v3/smtp/email",
            {
              sender: {
                name: "Sender Alex",
                email: "senderalex@example.com",
              },
              to: [
                {
                  email: yourMail,
                  name: "John Doe",
                },
              ],
              subject: "Hello world",
              htmlContent:
                "<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Brevo.</p></body></html>",
            },
            {
              headers: {
                Accept: "application/json",
                "api-key":
                  "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",
                "Content-Type": "application/json",
              },
            }
          )
          .then(() => {
            setYourMail("");
            alert("Email successfully sent!");
          });
      } else {
        alert("You have entered an invalid email address!");
      }
    } else {
      alert("Your Mail is required");
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <header className="absolute top-0 left-0 w-full flex justify-center">
        <nav className="absolute w-full">
          <div className="relative z-30 bg-white ">
            <div className="container m-auto md:px-12 lg:py-0 lg:px-10">
              <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:gap-0">
                <input
                  type="checkbox"
                  name="toggle_nav"
                  id="toggle_nav"
                  className="peer hidden"
                />
                <div className="w-full px-6 flex justify-between md:w-max md:px-0 z-30">
                  <a
                    href="#"
                    aria-label="logo"
                    className="text-green-600 font-bold text-lg"
                  >
                    Your Company
                  </a>

                  <div className="flex items-center md:hidden max-h-10">
                    <label
                      role="button"
                      htmlFor="toggle_nav"
                      aria-label="humburger"
                      id="hamburger"
                      className="relative p-2"
                    >
                      <div
                        id="line"
                        className="m-auto h-0.5 w-6 rounded bg-sky-900  transition duration-300"
                      ></div>
                      <div
                        id="line2"
                        className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900  transition duration-300"
                      ></div>
                    </label>
                  </div>
                </div>
                <label
                  htmlFor="toggle_nav"
                  className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-green-200 bg-opacity-30 backdrop-blur backdrop-filter"
                ></label>
                <div
                  className="hidden z-40 peer-checked:flex w-11/12 mx-auto md:mx-0 flex-col 
                            justify-end items-center gap-y-8 p-6 
                            rounded-xl bg-white md:flex md:w-8/12 
                            md:gap-y-0 md:gap-x-4 md:divide-x md:p-0 
                            md:flex-row md:bg-transparent lg:w-7/12"
                >
                  <div className="block w-full md:w-max">
                    <ul
                      className="gap-y-6 tracking-wide 
                                    text-gray-500 font-medium flex flex-col md:flex-row md:gap-y-0"
                    >
                      <li>
                        <a href="#" className="block md:px-4">
                          <div className="relative text-green-600 before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:h-1 before:mx-auto before:mt-auto before:rounded-t-full before:bg-green-500">
                            <span>Home</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block md:px-4 group">
                          <div
                            className="relative group
                                                            before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:h-0.5 before:origin-left before:mt-auto before:rounded-full before:bg-green-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                          >
                            <span className="group-hover:text-green-500">
                              Services
                            </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block md:px-4 group">
                          <div
                            className="relative group
                                                            before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:h-0.5 before:origin-left before:mt-auto before:rounded-full before:bg-green-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                          >
                            <span className="group-hover:text-green-500">
                              About
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div
                    className="w-full pl-2
                                sm:w-max gap-4 flex min-w-max flex-col sm:flex-row"
                  >
                    <button
                      type="button"
                      title="Start buying"
                      className="w-full py-3 px-6 rounded-xl text-center transition active:bg-green-200 focus:bg-green-100 sm:w-max"
                    >
                      <span className="block text-green-600  font-semibold">
                        Login
                      </span>
                    </button>
                    <button
                      type="button"
                      title="Start buying"
                      className="w-full py-3 px-6 rounded-xl text-center transition bg-green-600 hover:bg-green-700 active:bg-green-800 focus:bg-green-500 sm:w-max"
                    >
                      <span className="block text-white font-semibold">
                        Book Demo
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="container h-4 -mt-6 mx-auto bg-green-600/30  blur md:-mt-4"
          ></div>
        </nav>
      </header>
      <div className="min-h-screen flex  bg-gradient-to-b from-white to-green-50">
        <div className="container m-auto px-6 py-20 md:pb-0 md:pt-40 md:px-12 lg:py-0 lg:px-10">
          <div className="flex flex-wrap gap-12">
            <div className="lg:w-6/12 lg:pt-32 lg:pb-20">
              <div className="space-y-8 mt-8 lg:-mr-24 xl:-mr-0">
                <h1 className="text-4xl text-gray-800 font-bold md:text-5xl lg:leading-tight">
                  Uncompromised Versatility –When it Matters the Most.
                </h1>
                <p className="text-lg text-gray-600 ">
                  Quod rerum dolor ab harum facere quo nihil labore
                  necessitatibus tempora?
                </p>

                <div>
                  <form action="" className="w-full mt-12">
                    <div className="relative flex items-center px-2 p-1 rounded-full bg-white  border  border-green-600/10 shadow-md md:p-2 lg:pr-3">
                      <div className="pl-6 py-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 m-auto fill-blue-900/60 "
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <input
                        autoComplete="email"
                        placeholder="Your mail address"
                        className="w-full p-4 rounded-full placeholder-gray-600  bg-transparent"
                        type="email"
                        value={yourMail}
                        onChange={(e) => {
                          setYourMail(e?.target?.value);
                        }}
                      />
                      <div className="md:pr-1.5 lg:pr-0">
                        <button
                          type="button"
                          onClick={handleSendMail}
                          title="Start buying"
                          className="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-green-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                        >
                          <span className="relative hidden w-max text-white  font-semibold md:block">
                            Get Started
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative h-6 w-6 mx-auto text-white  md:hidden"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-300 ">
                <h6 className="text-lg text-green-800  font-semibold">
                  Trusted by
                </h6>
                <div className="mt-6 flex gap-6">
                  <div className="flex items-center">
                    <img
                      className="-hue-rotate-30 w-auto h-auto"
                      src={imgGrabyo}
                      width="50"
                      height="20"
                      alt="logo partener"
                    />
                  </div>

                  <div className="flex items-center">
                    <img
                      className="-hue-rotate-30 w-auto h-auto"
                      src={imgLifegroups}
                      width="50"
                      height="20"
                      alt="logo partener"
                    />
                  </div>
                  <div className="flex items-center">
                    <img
                      className="-hue-rotate-30 w-auto h-auto"
                      src={imgLilly}
                      width="50"
                      height="20"
                      alt="logo partener"
                    />
                  </div>

                  <div className="flex items-center">
                    <img
                      className="-hue-rotate-30 w-auto h-auto"
                      src={imgMicrosoft}
                      width="50"
                      height="20"
                      alt="logo partener"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden bottom-0 md:-right-32 md:block md:w-full md:ml-auto lg:absolute lg:-right-32 lg:w-[60%] xl:-right-48">
              <img
                src={imgHorse}
                className="ml-48 lg:ml-0"
                alt="gril on an horse"
                loading="lazy"
                width="1053"
                height="772"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
