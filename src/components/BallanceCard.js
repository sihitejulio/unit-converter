function BallanceCard(props) {
    return (
        <div className="py-5 px-7 ml-2 mt-5 rounded-lg h-40 bg-orange-600 text-white flex flex-col">
            <div className="text-sm">Available Ballance</div>
            <div className="text-2xl my-5">Rp 4.000.000</div>
            <div className="flex justify-between">
                <div className="flex flex-col text-xs">
                    <div>Total Ernings</div>
                    <div className="font-bold">Rp 200.000</div>
                </div>
                <div className="flex flex-col text-xs">
                    <div>Interest Rate</div>
                    <div className="font-bold">7% p.a</div>
                </div>
            </div>
        </div>
    );
  }
  
  export default BallanceCard;
  