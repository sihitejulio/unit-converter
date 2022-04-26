import {
    Link
} from "react-router-dom";  

function BottomNavigation(props) {
    return (
        <nav className="w-96 fixed bottom-0 inset-x-0 bg-white flex justify-between text-sm text-orange-500">
            <Link to="/" className="w-full block py-1 px-2 text-center hover:bg-gray-100 hover:text-orange-300">
                <svg className="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Home
            </Link>

            <a href="#" className="w-full block py-1 px-2 text-center hover:bg-gray-100 hover:text-orange-300">
                <svg xmlns="http://www.w3.org/2000/svg"  className="w-6 h-6 mb-2 mx-auto"fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Pay/Transfer
            </a>

            <Link to="/Profile" className="w-full block py-1 px-2 text-center hover:bg-gray-100 hover:text-orange-300">
                <svg xmlns="http://www.w3.org/2000/svg"className="w-6 h-6 mb-2 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Me
            </Link>
        </nav>
    );
  }
  
  export default BottomNavigation;
  