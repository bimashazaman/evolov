import Link from "next/link";
import Image from "next/image";
import Add from "../components/Favorite/Add";



const AdThumbNail = ({item, index, myLoader}) => {
    return (
        <div key={index} className="lg:w-[438px] w-auto h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
            <div>
                <Link href={`/property/sub/${item['id']}`}>
                    <a>
                        <Image
                            loader={myLoader}
                            src="photos/1396122/pexels-photo-1396122.jpeg"
                            alt="Evolov"
                            width="498"
                            height="268"
                            className="rounded-lg"
                        />
                    </a>
                </Link>

                <div className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3" title="Save">
                    <Add />
                </div>
            </div>

            <div className="flex justify-between">
                <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                    {item['title'] ?? 'Appertment for sale'}
                    <div className="text-sm font-normal">{`City: ${item['city']}, ${item['street_address']}`}</div>
                    <div className="text-sm font-normal"> {`Price: ${item['currency']} ${item['price'] }`} </div>
                </div>

                <div className="flex-col font-semibold text-orange-600 p-3">
                    {item['is_company'] ? (
                        <>
                        <Image
                        loader={myLoader}
                        src="photos/1396122/pexels-photo-1396122.jpeg"
                        alt="Evolov"
                        width="25"
                        height="25"
                        className="rounded-full pt-7"
                        />
                        <span className="ml-2 -mt-3 font-normal text-[#221F60]"> Lock </span>
                        </>
                    ):(
                        <div>Private</div>
                    )}

                    <div className="text-sm font-normal mt-4 text-[#221F60]">
                        {`Size: ${item['building_size'] }`}
                        <span>
                            m
                            <sup style={{ verticalAlign: "super" }}> 2 </sup>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdThumbNail