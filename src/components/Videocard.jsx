export default function Videocard(){
    return ( <>
        <div>
            <img src="./img-01.jpeg" alt="img-01" className="rounded-xl" />
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-1 pt-1">
                    <img src="./img-01.jpeg" alt="img-02" className="rounded-full border-2 h-10" />
                </div>
                <div className="col-span-11">
                    <div>Godzilla vs Kong: New Empire</div>
                    <div className=" text-sm text-gray-500">Warner Bros. Pictures</div>
                    <div className=" text-sm text-gray-500">5.5M views • 11 hours ago</div>
                </div>
            </div>
        </div>
    </>)
}


