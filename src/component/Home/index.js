import images from '../../assets/images';
import Button from '../Button';

function Home() {
    return (
        <div className="wrapper">
            <div className="flex justify-center">
                <div className=" absolute flex z-50 items-center justify-center bg-transparent">
                    <header className=" flex items-center justify-between  tablet:min-w-[680px] desktop:min-w-headerWidth py-[48px]   ">
                        <div className="flex">
                            <img
                                className="cursor-pointer"
                                src={images.logo}
                                alt="logo flight"
                            />

                            <div className="w-[20px] relative  h-[20px] bg-[#D80027] rounded-[50%] ml-3 desktop:ml-5">
                                <img
                                    src={images.vectorVNSvg}
                                    alt=""
                                    className="  "
                                />

                                <img
                                    src={images.vectorVNPng}
                                    alt=""
                                    className=" absolute top-[5.2px] left-[50%] translate-x-[-50%]  "
                                />
                            </div>
                            <div className=" w-[20px] h-[20px] bg-[#0052B4] rounded-[50%] ml-3 desktop:ml-5 "></div>
                        </div>

                        <div>
                            <ul className=" hidden  desktop:flex cursor-pointer">
                                <li className="text-[14px] leading-5 font-normal text-black ">
                                    Promotion
                                </li>
                                <li className="text-[14px] leading-5 font-normal text-black ml-[30px]">
                                    Flight Schedule
                                </li>
                                <li className="text-[14px] leading-5 font-normal text-black ml-[30px]">
                                    About us
                                </li>
                                <li className="text-[14px] leading-5 font-normal text-black ml-[30px]">
                                    Payment Guide
                                </li>
                            </ul>
                        </div>

                        <div>
                            <Button
                                to="/flight"
                                className=" flex min-w-[118px] min-h-[41px]  bg-[#4D46FA] "
                            >
                                Booking now
                            </Button>
                        </div>
                    </header>
                </div>
            </div>

            {/* slider */}

            <div>
                <div className="relative  ">
                    <div
                        style={{
                            backgroundImage: `url(${images.flight})`,
                        }}
                        className="  w-full pt-[50%] bg-center bg-no-repeat bg-cover "
                    ></div>

                    <div className="">
                        <div
                            className=" absolute top-[30%]  left-[8%] desktop:left-[24%] 
                         font-normal text-[28px]  desktop:text-[72px] tablet:leading-[42px] desktop:leading-[104px]"
                        >
                            <p>Hello!</p>
                            <p>Where are</p>
                            <p>
                                you{' '}
                                <span className="text-[#4D46FA] font-normal">
                                    flying
                                </span>{' '}
                                to...
                            </p>
                        </div>
                    </div>

                    <div
                        className="absolute  top-[80%] left-[50%] translate-x-[-50%]  
                        z-40  rounded-xl bg-white shadow-[0px_4px_30px_rgba(77,70,250,0.1)]  
                        tablet:w-[calc(680px+30px)]  desktop:w-[1230px]  h-[calc(224px-44px)] desktop:h-[224px]"
                    >
                        <div className="  p-[14px] desktop:p-[30px]">
                            {/* row 1 */}
                            <div className="flex items-center">
                                <div className="rounded-[100px]  w-[18px] h-[18px] desktop:w-[24px] desktop:h-[24px] bg-[#F4F2F9]"></div>
                                <div
                                    className="  leading-[16px]  text-[10px] ml-[4px]
                                    desktop:leading-[22px] desktop:text-[14px] font-semibold desktop:ml-[6px]"
                                >
                                    One way / Round-trip
                                </div>
                                <div className="rounded-[100px] w-[18px] h-[18px]  desktop:w-[24px] desktop:h-[24px] relative bg-[#4D46FA] ml-[20px]">
                                    <div className="rounded-[100px] w-[6px] h-[6px] desktop:w-[12px] desktop:h-[12px] absolute top-[33%] desktop:top-[28%] left-[50%] translate-x-[-50%]  bg-[#F4F2F9]"></div>
                                </div>
                                <div className=" leading-[16px]  desktop:leading-[22px] text-[10px] desktop:text-[14px] font-semibold ml-[6px]">
                                    Multi-city
                                </div>
                                <div className=" leading-[16px]  desktop:leading-[22px] text-[10px] desktop:text-[14px] font-semibold ml-[50px]">
                                    <span className="text-[#4D46FA] mr-1">
                                        02
                                    </span>
                                    Adult,
                                    <span className="text-[#4D46FA] mr-1">
                                        01
                                    </span>
                                    children
                                </div>
                                <div className="flex items-center ml-2 justify-center ">
                                    <img
                                        src={images.arrowDown}
                                        alt=""
                                        className="w-[8px] h-[4px] mt-[3px] "
                                    />
                                </div>

                                <div className=" text-[10px] leading-[16px]  desktop:leading-[22px]   desktop:text-[14px] font-semibold ml-[50px]">
                                    Business Class
                                </div>
                                <div className="flex items-center ml-2 justify-center ">
                                    <img
                                        src={images.arrowDown}
                                        alt=""
                                        className="w-[8px] h-[4px] mt-[3px] "
                                    />
                                </div>
                            </div>

                            {/* row 2 */}

                            <div className="flex items-center">
                                <div className="relative">
                                    <div className=" tablet:w-[140px]  desktop:w-[300px]  max-h-[100px]  rounded-xl border border-solid border-[#C4C4C4] mt-[14px] desktop:mt-[21px] ">
                                        <div className="mx-[20px] my-[15px] w-[148px] font-semibold">
                                            <p className=" text-[10px]  desktop:text-[12px] leading-[14px] desktop:leading-[18px]  text-[#000000]">
                                                From
                                            </p>
                                            <p className="  text-[16px] desktop:text-[24px] leading-[24px]  desktop:leading-[36px] text-[#4D46FA]">
                                                Da Nang
                                            </p>
                                            <p className=" text-[12px] desktop:text-[14px] leading-[14px]  desktop:leading-[21px]  text-[#000000]">
                                                Quang Nam, Viet Nam
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="  w-[30px] desktop:w-[60px] absolute  top-[42%]  desktop:top-[32%]  bg-white
                                        right-[-16%] desktop:right-[-14%]  h-[30px] desktop:h-[60px] rounded-[100px] z-10  border border-solid border-[#C4C4C4]"
                                    >
                                        <img
                                            src={images.arrowRight}
                                            alt=""
                                            className="absolute scale-90  top-[32%] desktop:top-[40%] left-[50%] translate-x-[-50%]"
                                        ></img>

                                        <img
                                            src={images.arrowLeft}
                                            alt=""
                                            className="absolute scale-90 top-[50%] left-[50%] translate-x-[-50%]"
                                        ></img>
                                    </div>
                                </div>

                                <div className="relative ml-[16px] desktop:ml-[26px]">
                                    <div className="tablet:w-[140px] desktop:w-[300px]  max-h-[100px] rounded-xl border border-solid border-[rgba(0, 0, 0, 0.1)] mt-[14px] desktop:mt-[21px]  border-[#4D46FA]">
                                        <div className="mx-[20px] my-[15px] w-[148px] font-semibold">
                                            <p className="text-[10px]  desktop:text-[12px] leading-[14px] desktop:leading-[18px]  text-[#000000]">
                                                TO
                                            </p>
                                            <p className="text-[16px] desktop:text-[24px] leading-[24px]  desktop:leading-[36px] text-[#4D46FA]">
                                                Ho Chi Minh
                                            </p>
                                            <p className="text-[12px] desktop:text-[14px] leading-[14px]  desktop:leading-[21px]  text-[#000000]">
                                                Viet Nam
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div
                                        className=" tablet:w-[370px]  desktop:w-[530px] max-h-[84px]  desktop:max-h-[100px]   border border-solid 
                                    border-[rgba(0, 0, 0, 0.1)]  ml-2 desktop:ml-5  mt-[14px] desktop:mt-[21px] rounded-xl border border-solid border-[#C4C4C4] "
                                    >
                                        <div className=" flex justify-between mx-[20px] my-[15px] min-w-[148px] font-semibold ">
                                            <div className="min-w-[184px] desktop:min-w-[200px]">
                                                <p className=" tex-[10px] desktop:text-[12px] leading-[16px] desktop:leading-[18px] uppercase opacity-50  text-[#000000]">
                                                    Departure
                                                </p>
                                                <p className=" flex  text-[16px] desktop:text-[24px] leading-[32px] desktop:leading-[36px] text-[#4D46FA]">
                                                    <span className="mr-[12px]">
                                                        Fri, 22 Mar, 2022
                                                    </span>
                                                    <img
                                                        src={images.calendar}
                                                        alt="calendar"
                                                        className=""
                                                    />
                                                </p>
                                                <div className="flex">
                                                    <p className="text-[12px] desktop:text-[14px]  leading-[18px] desktop:leading-[21px]  text-[#000000]">
                                                        Prev
                                                    </p>
                                                    <p className=" text-[12px] desktop:text-[14px]  leading-[18px] desktop:leading-[21px] ml-[19px]  opacity-50 text-[#000000]">
                                                        Next
                                                    </p>
                                                </div>
                                            </div>

                                            <div className=" min-w-[184px] desktop:min-w-[200px]">
                                                <p className="tex-[10px] desktop:text-[12px] leading-[16px] desktop:leading-[18px] uppercase opacity-50  text-[#000000]">
                                                    return
                                                </p>
                                                <p className=" flex  text-[16px] desktop:text-[24px] leading-[32px] desktop:leading-[36px] text-[#4D46FA]">
                                                    <span className="mr-[12px]">
                                                        Fri, 22 Mar, 2022
                                                    </span>
                                                    <img
                                                        src={images.calendar}
                                                        alt="calendar"
                                                        className=""
                                                    />
                                                </p>
                                                <div className="flex">
                                                    <p className="text-[12px] desktop:text-[14px]  leading-[18px] desktop:leading-[21px]  text-[#000000]  opacity-50 ">
                                                        Prev
                                                    </p>
                                                    <p className=" text-[12px] desktop:text-[14px]  leading-[18px] desktop:leading-[21px] ml-[19px] text-[#000000] opacity-50">
                                                        Next
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Btn */}
                        <div className="absolute top-[70%]  desktop:top-[80%] right-[2%] mt-[20px] z-[999] ">
                            <Button className="  py-[8px] pl-[10px] desktop:py-[17px] desktop:pl-[20px]  w-[180px] desktop:w-[245px] h-[60px] pr-0 bg-[#4D46FA] z-[999]  cursor-pointer ">
                                <div className="flex justify-between items-center">
                                    <span className="">Search Flights</span>
                                    <div className="mr-[24px]">
                                        <img
                                            src={images.arrowRightBtn}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* footer */}

                <div className=" flex absolute justify-center bg-white w-full h-[230px] ">
                    <div className="flex  items-end justify-between  w-[680px] desktop:w-[1134px]  h-full pb-[42px] z-40 ">
                        <div className="flex items-center font-normal text-[14px] ">
                            <img
                                src={images.contactNumber}
                                alt="contactNumber"
                                className="max-w-[18px] max-h-[18px] mr-[5px]"
                            />
                            <span className="mr-[20px]">
                                Call us: +84 908 02 02 58
                            </span>
                            <img
                                src={images.email}
                                alt="email"
                                className="max-w-[18px] max-h-[18px] mr-[5px]"
                            />
                            <span>Email: chucinog@gmail.com</span>
                        </div>
                        <div className="flex items-center font-normal text-[14px] ">
                            <span>Follow us</span>

                            <div className="w-[40px] border border-solid border-[#4D46FA] mx-[10px] "></div>

                            <img
                                src={images.facebook}
                                alt="contactNumber"
                                className="max-w-[18px] max-h-[18px] mr-[5px]"
                            />
                            <img
                                src={images.instagram}
                                alt="contactNumber"
                                className="max-w-[18px] max-h-[18px] mr-[5px]"
                            />
                        </div>
                    </div>

                    <div className="absolute bottom-0  bg-[#F4F2F9] min-w-[582px]  desktop:w-[1512px] translate-x-[16%]  h-[179px] "></div>
                </div>
            </div>
        </div>
    );
}

export default Home;
