// import { GrShieldSecurity } from "react-icons/gr";
import { RiUserAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const dataCad = [
  // {
  //   title: "Security",
  //   path: "/",
  //   icon: <GrShieldSecurity />,
  // },
  {
    title: "Invite Friends",
    path: "/chembster",
    icon: <RiUserAddLine />,
  }
  // {
  //   title: "Subaccount",
  //   path: "/",
  //   icon: <GrShieldSecurity />,
  // },
];

export const RowCard = () => {
  return (
    <div className="bg-slate-500 mt-4 rounded-md py-4 p-2">
      <div className="flex justify-center items-center text-sm text-[#1DD55E]">
        {dataCad.map((item, index) => (
          <Link to={item.path} key={index}>
            <p className="pl-3">{item.icon}</p>
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
