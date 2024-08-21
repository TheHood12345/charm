// main.tsx
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { /*createBrowserRouter, RouterProvider,*/ BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./page/Home.tsx";
import { Login } from "./Login/Login.tsx";
//import { Signup } from "./Signup/Signup.tsx";
import { Signup2 } from "./Signup/Signup2.tsx";
import { Market } from "./component/Market.tsx";
import { Asset } from "./component/Asset.tsx";
import { SwapComp } from "./component/SwapComp.tsx";
import { PtoP } from "./component/PtoP.tsx";
import { OrderBook } from "./component/OrderBook.tsx";
import { Chart } from "./component/Chart.tsx";
import { Spot } from "./component/Spot.tsx";
import { GetStarted } from "./component/GetStarted.tsx";
import { Navbar } from "./component/navbar/navbar/Navbar.tsx";
import { Footer } from "./component/footer/Footer.tsx";
import { SubHeaderComp } from "./component/navbar/navbar/SubHeaderComp.tsx";
//import { AuthProvider } from "./context/AuthContext.tsx";
import { DepositeCrypto } from "./component/DepositeCrypto.tsx";
import { DepositDetailPage } from "./component/DepositDetailPage.tsx";
import { DepositView } from "./component/DepositView.tsx";
import { Withdrawal } from "./component/Withdrawal.tsx";
import { Finalwithdrawal } from "./component/Finalwithdrawal.tsx";

import { Otp } from "./Signup/otp.tsx";
import { CreatePassword } from "./Signup/create__password.tsx"; "./signup/create_password";
import { ForgotPassword } from "./Login/forgot_password_1.tsx";
import { ForgotPasswordSuccess } from "./Login/forgot_password_2.tsx";
import { NewPassword } from "./Login/new_password.tsx";
import { Advert } from "./component/Advert.tsx";
import { SecondAdd } from "./component/SeconAdd.tsx";
import { PostAdd } from "./component/PostAdd.tsx";
import { Setting } from "./component/Setting .tsx";
import Successful from "./component/Successful.tsx";
import { GetStartedHeader } from "./component/GetStartedHeader.tsx";
import { AssetBal } from "./component/AssetBal.tsx";
import { ChambSters } from "./component/ChambSters.tsx";
import { PtopSell } from "./component/PtopSell.tsx";
import SellDetail from "./component/SellDetail.tsx";
import BuyDetails from "./component/BuyDetails.tsx";
import PayDetails from "./component/PayDetails.tsx";
import PaymentCompleted from "./component/PaymentCompleted.tsx";
import CancelOrder from "./component/CancelOrder.tsx";

import { Spot11 } from "./component/Spot11.tsx";
import PaymentCompleted_1 from "./component/PaymentCompleted_1.tsx";
import SpinToWin from "./games/spin.tsx";
import { Game } from "./game/Game.tsx"



const userToken = localStorage.getItem("userToken");

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: !userToken ? (
//           <>
//             <GetStartedHeader />
//             <GetStarted />
//             <Footer />
//           </>
//         ) : (
//           <>
//             <Navbar />
//             <Home />
//             <Footer />
//           </>
//         ),
//       },
//       { path: "/login", element: <Login /> },
//       {
//         path: "/otp",
//         element: <Otp />,
//       },
//       {
//         path: "/forgot-password",
//         element: <ForgotPassword />,
//       },
//       {
//         path: "/forgot-password-success",
//         element: <ForgotPasswordSuccess />,
//       },
//       {
//         path: "/new-password",
//         element: <NewPassword />,
//       },
//       { path: "/subHead", element: <SubHeaderComp /> },
//       {
//         path: "/signup",
//         element: (
//           <>
//             <Signup2 />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/home",
//         element: (
//           <>
//             <Navbar />
//             <Home />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/market",
//         element: (
//           <>
//             <Navbar />
//             <Market />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/asset",
//         element: (
//           <>
//             <Navbar />
//             <Asset />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/swap",
//         element: (
//           <>
//             <Navbar />
//             <SwapComp />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/pp",
//         element: (
//           <>
//             <Navbar />
//             <PtoP />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/ptopsell",
//         element: (
//           <>
//             <Navbar />
//             <PtopSell />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/selldetail",
//         element: (
//           <>
//             {/* <Navbar /> */}
//             <SellDetail />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/buydetails",
//         element: (
//           <>
//             {/* <Navbar /> */}
//             <BuyDetails />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/payment",
//         element: (
//           <>
//             {/* <Navbar /> */}
//             <PayDetails />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/paycompleted",
//         element: (
//           <>
//             <PaymentCompleted />
//           </>
//         ),
//       },
//       {
//         path: "/paycompleted_1",
//         element: (
//           <>
//             <PaymentCompleted_1 />
//           </>
//         ),
//       },
//       {
//         path: "/cancelorder",
//         element: (
//           <>
//             <CancelOrder />
//           </>
//         ),
//       },
//       {
//         path: "/spot",
//         element: (
//           <>
//             <Navbar />
//             <Spot />
//             <Footer />
//           </>
//         ),
//       }
//       ,
//       {
//         path: "/spot11",
//         element: (
//           <>
//             <Navbar />
//             <Spot11 />
//             <Footer />
//           </>
//         ),
//       },

//       {
//         path: "/chembster",
//         element: (
//           <>
//             <Navbar />
//             <ChambSters />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/orderbook",
//         element: (
//           <>
//             <Navbar />
//             <OrderBook />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/depositdetails",
//         element: (
//           <>
//             <DepositeCrypto />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/depositcrypto",
//         element: (
//           <>
//             <DepositDetailPage />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/depositview",
//         element: (
//           <>
//             <DepositView />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/withdrawal",
//         element: (
//           <>
//             <Withdrawal />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/finalwithdrawal",
//         element: (
//           <>
//             <Finalwithdrawal />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/addvert",
//         element: (
//           <>
//             <Advert />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/secondaddvert",
//         element: (
//           <>
//             <SecondAdd />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/postadd",
//         element: (
//           <>
//             <PostAdd />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/sucessful",
//         element: (
//           <>
//             <Successful />
//           </>
//         ),
//       },
//       {
//         path: "/assetbal",
//         element: (
//           <>
//             <AssetBal />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/setting",
//         element: (
//           <>
//             <Setting />
//           </>
//         ),
//       },
//       {
//         path: "/chart",
//         element: (
//           <>
//             <Navbar />
//             <Chart />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/games/spin",
//         element: (
//           <SpinToWin/>
//         )
//       },
//       {
//         path: "*",
//         element: !userToken ? (
//           <>
//             <GetStartedHeader />
//             <GetStarted />
//             <Footer />
//           </>
//         ): (
//           <>
//             <Navbar />
//             <Home />
//             <Footer />
//           </>
//         )
//       }
//     ],
//   },
// ]);

function Codes(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} >
          <Route index element={ !userToken ? (
          <>
            <GetStartedHeader />
            <GetStarted />
            <Footer />
          </>
        ) : (
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        )}/>

          <Route  index path="/login" element={<Login/>} />
          <Route  index path="/otp" element={<Otp/>} />
          <Route  index path="/forgot-password" element={<ForgotPassword/>} />
          <Route  index path="/forgot-password-success" element={<ForgotPasswordSuccess/>}/>
          <Route  index path="/new-password" element={<NewPassword/>}/>
          <Route  index path="/subHead" element={<SubHeaderComp/>}/>
          <Route  index path="/signup" element={<>
            <Signup2 />
            <Footer />
          </>}/>
          <Route  index path="/home" element={<>
            <Navbar />
            <Home />
            <Footer />
          </>}/>
          <Route index path="/market" element={<>
            <Navbar />
            <Market />
            <Footer />
          </>} />
          <Route index path="/asset" element={<>
            <Navbar />
            <Asset />
            <Footer />
          </>}/>
          <Route index path="/swap" element={<>
            <Navbar />
            <SwapComp />
            <Footer />
          </>} />
          <Route index path="/pp" element={<>
            <Navbar />
            <PtoP />
            <Footer />
          </>}/>
          <Route index path="/ptopsell" element={<>
            <Navbar />
            <PtopSell />
            <Footer />
          </>}/>
          <Route index path="/selldetail" element={<>
            {/* <Navbar /> */}
            <SellDetail />
            <Footer />
          </>}/>
          <Route index path="/buydetails" element={<>
            {/* <Navbar /> */}
            <BuyDetails />
            <Footer />
          </>} />
          <Route index path="/payment" element={<>
            {/* <Navbar /> */}
            <PayDetails />
            <Footer />
          </>} />
          <Route index path="/paycompleted" element={<>
            <PaymentCompleted />
          </>}/>
          <Route index path="/paycompleted_1" element={<>
            <PaymentCompleted_1 />
          </>}/>


          <Route index path="/cancelorder" element={<>
            <CancelOrder />
          </>}/>
          <Route index path="/spot" element={<>
            <Navbar />
            <Spot />
            <Footer />
          </>} />
          <Route index path="/spot11" element={<>
            <Navbar />
            <Spot11 />
            <Footer />
          </>} />
          <Route index path="/chembster" element={<>
            <Navbar />
            <ChambSters />
            <Footer />
          </>}/>
          <Route index path="/orderbook" element={<>
            <Navbar />
            <OrderBook />
            <Footer />
          </>}/>
          <Route index path="/depositdetails" element={<>
            <DepositeCrypto />
            <Footer />
          </>}/>
          <Route index path="/depositcrypto" element={<>
            <DepositDetailPage />
            <Footer />
          </>} />
          <Route index path="/depositview" element={<>
            <DepositView />
            <Footer />
          </>}/>
          <Route index path="/withdrawal" element={<>
            <Withdrawal />
            <Footer />
          </>}/>
          <Route index path="/finalwithdrawal" element={<>
            <Finalwithdrawal />
            <Footer />
          </>}/>
          <Route index path="/addvert" element={<>
            <Advert />
            <Footer />
          </>}/>
          <Route index path="/secondaddvert" element={<>
            <SecondAdd />
            <Footer />
          </>}/>

          <Route index path="/postadd" element={ <>
            <PostAdd />
            <Footer />
          </>}/>

          <Route index path="/successful" element={<>
            <Successful />
          </>}/>
          <Route index path="/assetbal" element={<>
            <AssetBal />
            <Footer />
          </>}/>
          <Route index path="/setting" element={<>
            <Setting />
          </>}/>
          <Route index path="/chart" element={<>
            <Navbar />
            <Chart />
            <Footer />
          </>}/>
          <Route index path="/games/spin" element={<SpinToWin/>}/>
          <Route index path="/create_password" element={<CreatePassword/>}/>
          <Route index path="/game" element={<Game/>}/>


          <Route index path="*" element={<Home/>} />

        </Route>

        
      </Routes>
    
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <AuthProvider>
    // <BrowserRouter>
    //   <RouterProvider router={router} />
    // </BrowserRouter>
    
  /* </AuthProvider> */
   <Codes/>
);
