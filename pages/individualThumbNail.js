import Link from "next/link";
import Image from "next/image";
import Add from "../components/Favorite/Add";



const IndividualThumbNail = ({item, index, myLoader}) => {
    return (
        <div key={index} className="lg:w-[438px] w-auto h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
            <div>
                <Link href="/property/individual">
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
                    {item['details']['title'] ?? 'Appertment for sale'}
                    <div className="text-sm font-normal">{item['details']['city'] ?? 'New jersey'}</div>
                    <div className="text-sm font-normal"> {item['details']['price'] ?? 'kr 342,34'} </div>
                </div>
                
                <div className="flex-col font-semibold text-orange-600 p-3">
                    Private
                    <div className="text-sm font-normal mt-5 text-[#221F60]"> {item['details']['building_size'] ?? '25m'} </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualThumbNail