function LatestTransaction(props) {
    return (
        <div className="divide-y divide-slate-200 mt-2 ml-2 bg-white px-2">
            <div className="px-5 h-14 py-3 text-sm flex flex-row justify-between">
                <span>Transaction History</span>

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
            <div className="flex flex-row py-5 px-5">
                <div className="w-16">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="flex flex-auto flex-col ml-2">
                    <h3 className="text-slate-800 text-sm font-semibold">Interest</h3>
                    <h3 className="text-slate-800 text-sm font-semibold">Interest</h3>
                    <h3 className="text-gray-400 text-xs font-semibold">23 April 2022 00:28</h3>
                </div>
                <div className="flex justify-center items-center">
                    <h3 className="text-green-500 text-xs font-semibold">+Rp 675</h3>
                </div>
            </div>
            <div className="flex flex-row py-5 px-5">
                <div className="w-16">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="flex flex-auto flex-col ml-2">
                    <h3 className="text-slate-800 text-sm font-semibold">Julio</h3>
                    <h3 className="text-slate-800 text-sm font-semibold">Transfer</h3>
                    <h3 className="text-gray-400 text-xs font-semibold">23 April 2022 00:28</h3>
                </div>
                <div className="flex justify-center items-center">
                    <h3 className="text-slate-800 text-xs font-semibold">-Rp 200.000</h3>
                </div>
            </div>
        </div>
    );
  }
  
  export default LatestTransaction;
  