// //offer company name and logo
// // textarea for his offer
// // hidden and appear
// // states for rendering the page
// //WebSocket connections
// //Ably

// // import { useState, useRef } from "react";
// import dynamic from "next/dynamic";
// import Head from "next/head";

// // import ChatComponent from "../chatroom/chatComponents";
// // disable SSR so this part will be exempted from being renered from the user side

// const chatComponent = dynamic(() => import("../chatroom/chatComponents"), {
//   ssr: false,
// });

// const ChatUi = () => {
//   const [chat, setchat] = useState();
//   const [] = useRef();

//   function chatroom() {
//     return (
//       <div className="container">
//         <Head>
//           <title>Create Next App</title>
//           <link rel="icon" href="/favicon.ico" />
//         </Head>

//         <main>
//           <h1 className="title">Next.js Chat Demo</h1>
//           <ChatComponent />
//         </main>

//         <footer>
//           Powered by
//           <a
//             href="https://vercel.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
//           </a>
//           and
//           <a href="https://ably.com" rel="noopener noreferrer">
//             <img src="/ably-logo.svg" alt="Ably Logo" className="logo ably" />
//           </a>
//         </footer>

//         <style jsx>{`
//         .container {
//           display: grid;
//           grid-template-rows: 1fr 100px;
//           min-height: 100vh;
//           background-color: #eee;
//         }
//         main {
//           display: grid;
//           grid-template-rows: auto 1fr;
//           width: calc(100% - 40px);
//           max-width: 900px;
//           margin: 20px auto;
//           border-radius: 10px;
//           overflow: hidden;
//           box-shadow: 0px 3px 10px 1px rgba(0,0,0,0.2);
//           background-color: white;
//         }
//         .title {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100px;
//           margin: 0;
//           color: white;
//           background: #005C97;
//           background: -webkit-linear-gradient(to right, #363795, #005C97);
//           background: linear-gradient(to right, #363795, #005C97);
//         }
//         footer {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           flex-wrap: wrap;
//           width: 100vw;
//           height: 100px;
//         }
//         .logo {
//           display: block;
//           height: 20px;
//           margin: 0.5em;
//         }
//         .svg {
//           fill:#005C97;
//           color:#fff;
//           position: absolute;
//           top: 0;
//           border: 0;
//           right: 0;
//         }
//         .octo-arm {
//           transform-origin: 130px 106px;
//         }
//         .github-corner:hover .octo-arm {
//           animation: octocat-wave 560ms ease-in-out;
//         }

//         @keyframes octocat-wave {
//           0%, 100%{transform:rotate(0)}
//           20%,60%{transform:rotate(-25deg)}
//           40%,80%{transform:rotate(10deg)}}
//         }
//         @media (min-width: 600px) {
//           .logo {
//             height: 40px;
//             margin: 1em;
//           }

//           .ably {
//             height: 60px;
//           }
//         }

//       `}</style>

//         <style jsx global>{`
//           html,
//           body {
//             padding: 0;
//             margin: 0;
//             font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//               Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//               sans-serif;
//           }
//           * {
//             box-sizing: border-box;
//           }
//           [data-author="me"] {
//             background: linear-gradient(
//               to right,
//               #363795,
//               #005c97
//             ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
//             color: white;
//             align-self: flex-end;
//             border-bottom-right-radius: 0 !important;
//             border-bottom-left-radius: 10px !important;
//           }
//         `}</style>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <p> WelCome to out messaging application</p>
//       <button onClick={chatroom}> Send an offer </button>
//       {/* a new page will appear */}
//       {/* this page will be blank at the top and will have a textarea at the bottom  */}
//     </div>
//   );
// };
// export default ChatUi;

// //       <main>
// //         <h1 className="title">Balemoja chat page</h1>
// //         <chatComponents />
// //       </main>
// //             <div>
// //               setchat(appear);
// //               <form>
// //                 {/* <label for="html">CHAT</label> */}
// //                 <input type="text" />
// //                 <textarea row="4"></textarea>
// //               </form>
// //             </div>
