import { GrShieldSecurity } from "react-icons/gr";
import { RiUserAddLine } from "react-icons/ri";

const dataCad = [
  {
    title: "Security",
    path: "/",
    icon: <GrShieldSecurity />,
  },
  {
    title: "Invite Friends",
    path: "/",
    icon: <RiUserAddLine />,
  },
  {
    title: "Subaccount",
    path: "/",
    icon: <GrShieldSecurity />,
  },
];

export const RowCard = () => {
  return (
    <div className="bg-slate-500 mt-4 rounded-md py-4 p-2">
      <div className="flex justify-between items-center text-sm">
        {dataCad.map((item, index) => (
          <div key={index}>
            <p className="pl-3">{item.icon}</p>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
