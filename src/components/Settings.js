import { Link } from "react-router-dom";

function Settings(props) {
    const icon = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>;
    const config = [{
        id: 1,
        name: 'My Profile',
        icon,
        pathName: '/MyProfile'
    }]
   
        
    return (
        <div className="mt-2 ml-2 bg-white px-2">
            <ul className="divide-y divide-slate-200">{ config.map((item,idx) =>(<li  key={idx}>
            <Link to={item.pathName}>
                <div className="px-5 py-4 text-sm flex flex-row ">
                    <div className="pr-2">
                        {item.icon}
                    </div>
                    <div className="flex flex-auto">
                        <span>{item.name}</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </Link>
        </li>
    ))}</ul>
        </div>
    );
  }
  
  export default Settings;
  