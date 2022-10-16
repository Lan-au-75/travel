import images from '../../assets/images';
import Button from '../Button';

import HeadlessTippy from '@tippyjs/react/headless';
import format from 'date-fns/format';
import { useRef, useState } from 'react';
import { Calendar } from 'react-date-range';
import { AiOutlineClose, AiTwotoneCalendar } from 'react-icons/ai';
import { FaBirthdayCake, FaPlaneDeparture } from 'react-icons/fa';
import { FiArrowDown } from 'react-icons/fi';
import { MdOutlineChair } from 'react-icons/md';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function Flight() {
    const arrayContent3 = [1, 2, 3];

    const [change, setChange] = useState();
    const [calendar, setCalendar] = useState('');
    const [openCalendar, setOpenCalendar] = useState(false);
    const [closeModal, setCloseModal] = useState(false);
    const [selectError, setSelectError] = useState(false);

    const divRef = useRef();
    const modalRef = useRef();
    const modalContainerRef = useRef();
    // const calendarRef = useRef();

    // Handle close Modal
    // useEffect(() => {
    //     const handleCloseModal = () => {
    //         setCloseModal(false);
    //     };
    //     const handleModalContainer = (e) => {
    //         e.stopPropagation();
    //     };
    //     const modal = modalRef.current;
    //     const modalContainer = modalContainerRef.current;

    //     modal && modal.addEventListener('click', handleCloseModal);
    //     modalContainer &&
    //         modalContainer.addEventListener('click', handleModalContainer);

    //     return () => {
    //         modal && modal.removeEventListener('click', handleCloseModal);
    //         modalContainer &&
    //             modalContainer.removeEventListener(
    //                 'click',
    //                 handleModalContainer,
    //             );
    //     };
    // }, [closeModal]);

    const handleChangeDiv = (e) => {
        // seat class
        const activeElement = e.target.closest('.active');

        if (activeElement) {
            setChange(activeElement.innerHTML);
        }
    };

    const seatClass = [
        'Phổ thông',
        ' Phổ thông đặc biệt',
        'Thương gia',
        'Hạng nhất',
    ];

    const handleSelect = (date) => {
        // check birthday
        const currentDate = new Date();

        const currentDateFormat = format(currentDate, 'dd/MM/yyyy');

        if (format(date, 'dd/MM/yyyy') > currentDateFormat) {
            setSelectError(true);
            setCalendar('');
            return;
        } else {
            setSelectError(false);
        }
        setCalendar(format(date, 'dd/MM/yyyy'));
    };

    return (
        <div className="wrapper">
            <div className="flex justify-center headerHeight bg-[#4D46FA]">
                {/* header 1 */}
                <header className=" flex items-center justify-between  min-w-[410px]  tablet:min-w-[680px] desktop:min-w-headerWidth py-[22px]   ">
                    <div className="flex ">
                        <img
                            className="cursor-pointer text-white"
                            src={images.logoWhite}
                            alt="logo flight"
                        />

                        <div className="w-[20px] relative  h-[20px] bg-[#D80027] rounded-[50%] ml-5">
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
                        <div className=" w-[20px] h-[20px] bg-[#0052B4] rounded-[50%] ml-5 "></div>
                    </div>

                    <div>
                        <ul className=" hidden  desktop:flex items-center cursor-pointer text-white ">
                            <li className="text-[14px] leading-5 font-normal  ">
                                Promotion
                            </li>
                            <li className="text-[14px] leading-5 font-normal  ml-[30px] bg-white/10 px-[15px] py-[10px] rounded-[100px]  ">
                                Flight Schedule
                            </li>
                            <li className="text-[14px] leading-5 font-normal  ml-[30px]">
                                About us
                            </li>
                            <li className="text-[14px] leading-5 font-normal  ml-[30px]">
                                Payment Guide
                            </li>
                        </ul>
                    </div>

                    <div>
                        <Button
                            to="/flight"
                            className=" flex min-w-[118px] min-h-[41px]  text-[#4D46FA] bg-white"
                        >
                            Booking now
                        </Button>
                    </div>
                </header>
            </div>

            {/* header 2 */}

            <div className="  hidden desktop:flex justify-center headerHeight bg-white">
                <div className="flex items-center  justify-between min-w-headerWidth py-[20px]">
                    <div className="flex flex-col">
                        <span className="text-[#4D46FA] leading-6 font-semibold ">
                            Da Nang (DAD)
                        </span>

                        <span className="text-[12px]  leading-[18px] font-normal text-[#000000]">
                            Fri, 22 Mar, 2022
                        </span>
                    </div>

                    <div className="">
                        <img className="mr-2" src={images.arrowLeftFl} alt="" />

                        <img
                            className="ml-2"
                            src={images.arrowRightFl}
                            alt=""
                        />
                    </div>

                    <div className="flex flex-col">
                        <span className="text-[#4D46FA] leading-6 font-semibold ">
                            Ho Chi Minh (SGN)
                        </span>

                        <span className="text-[12px]  leading-[18px] font-normal text-[#000000]">
                            Fri, 22 Mar, 2022
                        </span>
                    </div>

                    <ul className="flex text-[14px]   leading-[21px] font-semibold">
                        <li className=" relative  ">
                            <span
                                className="after:absolute after:border-l after:h-[24px]
                                after:border-solid after:border-black/25 after:top-[50%] after:right-[-15px] after:translate-y-[-50%]"
                            >
                                Round-trip
                            </span>
                        </li>
                        <li className="mx-[30px] relative">
                            <span
                                className="after:absolute after:border-l after:h-[24px]
                                after:border-solid after:border-black/25 after:top-[50%] after:right-[-15px] after:translate-y-[-50%]"
                            >
                                <span className="text-[#4D46FA]">02 </span>
                                Adult,{' '}
                                <span className="text-[#4D46FA]">01</span>{' '}
                                children
                            </span>
                        </li>
                        <li>Business Class</li>
                    </ul>

                    {/* handle */}

                    <Button
                        className="bg-[#F06336]"
                        onClick={() => setCloseModal(true)}
                    >
                        <div className="flex items-center">
                            Change Flights
                            <div className="w-[14px] h-[14px] ml-[10px]">
                                <img
                                    className="w-full h-full"
                                    src={images.search}
                                    alt=""
                                />
                            </div>
                        </div>
                    </Button>
                </div>
            </div>

            <div className=" bg-[#E5E5E5] ">
                <div className="  flex justify-center items-start">
                    <div className="flex items-end  justify-end flex-col min-w-[calc(1200px - 270px)] py-[10px]">
                        {/* content 1 */}
                        <div className=" hidden desktop:flex items-center font-semibold ">
                            <span className=" leading-[18px] text-[12px] uppercase text-black/50 mr-[14px] ">
                                Filter
                            </span>

                            <div className=" flex items-center justify-between w-[120px] h-[34px] rounded-xl bg-white  ">
                                <span className="leading-[18px] font-normal text-[12px] text-black pl-[15px] py-[8px]">
                                    Transit
                                </span>
                                <div className="mr-[15px]">
                                    <img
                                        src={images.arrowDown}
                                        alt="arrowDown"
                                    />
                                </div>
                            </div>

                            <div className=" flex items-center justify-between w-[120px] h-[34px] rounded-xl bg-white ml-[5px]  ">
                                <span className="leading-[18px] font-normal text-[12px] text-black pl-[15px] py-[8px]">
                                    Time
                                </span>
                                <div className="mr-[15px]">
                                    <img
                                        src={images.arrowDown}
                                        alt="arrowDown"
                                    />
                                </div>
                            </div>
                            <div className=" flex items-center justify-between w-[120px] h-[34px] rounded-xl bg-white ml-[5px]  ">
                                <span className="leading-[18px] font-normal text-[12px] text-black pl-[15px] py-[8px]">
                                    Airline
                                </span>
                                <div className="mr-[15px]">
                                    <img
                                        src={images.arrowDown}
                                        alt="arrowDown"
                                    />
                                </div>
                            </div>

                            <div className=" flex items-center justify-between w-[120px] h-[34px] rounded-xl bg-white ml-[5px] mr-[10px] ">
                                <span className="leading-[18px] font-normal text-[12px] text-black pl-[15px] py-[8px]">
                                    Low Price
                                </span>
                                <div className="mr-[15px]">
                                    <img
                                        src={images.arrowDown}
                                        alt="arrowDown"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* content 2*/}

                        <div className=" hidden desktop:block w-[890px] min-h-[331px] h-full bg-white mr-[10px] mt-[5px] pl-[15px] rounded-xl">
                            <div className="h-[96px]">
                                {/* row 1 */}
                                <div className="flex items-center justify-between  mb-[16px]">
                                    <div className="flex items-center">
                                        <div className="relative  max-w-[30px] max-h-[30px] mr-2">
                                            <img
                                                className="w-full h-full"
                                                src={images.rectangle20}
                                                alt=""
                                            />
                                        </div>
                                        <div className="text-[14px] leading-[21px] text-black ">
                                            <span className="font-semibold uppercase">
                                                Bamboo Airways
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center max-w-[200px] w-full  mt-[15px] mb-[20px]">
                                        <div className="font-semibold text-black">
                                            <span className="text-[14px] leading-[21px]">
                                                21:40
                                            </span>
                                            <div className="text-[10px] text-center bg-[rgba(77,70,250,0.1)] rounded-[100px] leading-[15px]">
                                                DAD
                                            </div>
                                        </div>

                                        <div className="font-normal flex flex-col items-center">
                                            <span className="text-[14px] leading-[21px]">
                                                1h 30m
                                            </span>
                                            <div className="">
                                                <div className="flex items-center">
                                                    <div className=" w-[6px] h-[7px] rounded-[100px] border border-solid border-[#4D46FA] "></div>
                                                    <div className=" relative top-[2px] min-w-[78px] w-full  h-1 border-t border-[#4D46FA]"></div>
                                                    <div className="w-[6px] h-[7px] rounded-[100px] border border-solid border-[#4D46FA] bg-[#4D46FA]"></div>
                                                </div>
                                            </div>
                                            <span className="text-[14px] leading-[21px]">
                                                Direct
                                            </span>
                                        </div>

                                        <div className="font-semibold text-black">
                                            <span className="text-[14px] leading-[21px]">
                                                23:10
                                            </span>
                                            <div className="text-[10px] text-center bg-[rgba(77,70,250,0.1)] rounded-[100px]  leading-[15px]">
                                                DAD
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-[14px] leading-[21px] font-semibold h-[72px] rounded-xl ">
                                        <div className="p-[15px]">
                                            <div className=" flex items-center text-black">
                                                <div className="w-[20px]">
                                                    <img
                                                        src={images.baggage}
                                                        alt="baggage"
                                                    />
                                                </div>
                                                <span className="text-[14px] leading-[21px] font-normal">
                                                    Baggage
                                                </span>
                                                <span className="text-[14px] leading-[21px]  text-[#4D46FA] ml-1">
                                                    20kg
                                                </span>
                                            </div>
                                            <div className="flex items-center text-black">
                                                <div className="w-[20px] ml-[3px]">
                                                    <img
                                                        src={images.InFlight}
                                                        alt="InFlight"
                                                    />
                                                </div>
                                                <span className='className="text-[14px] leading-[21px] font-normal'>
                                                    In-flight
                                                </span>
                                                <span className="text-[14px] leading-[21px]  text-[#4D46FA] ml-1">
                                                    Meal
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-[14px] leading-[21px] font-semibold h-[72px] rounded-xl ">
                                        <div className="p-[15px]">
                                            <div className=" font-normal opacity-50 line-through text-black">
                                                1,326,000 vnd
                                            </div>
                                            <div className="text-[#F06336]">
                                                1,322,000 vnd
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="px-[15px] py-[6px] bg-[rgba(240,99,54,0.1)] text-[#F06336] mr-[20px]">
                                        Choose
                                    </Button>
                                </div>

                                {/* row 2 */}
                                <div className="flex items-center  font-semibold leading-[18px] text-[12px] uppercase ">
                                    <div className=" mr-[30px] border-b border-solid border-black/50 ">
                                        <span className="text-[#4D46FA] ">
                                            Flight detail
                                        </span>
                                    </div>
                                    <div className="mr-[31px]">
                                        <span className="text-black/40">
                                            fare info
                                        </span>
                                    </div>

                                    <div className="flex-1 bg-black/10 h-[1px] mr-[20px] "></div>
                                </div>

                                {/* row 3 */}
                                <div className="flex  justify-between">
                                    <div className="flex">
                                        <div className="flex-col text-center max-w-[50px] w-full mt-[15px] mr-[31px]">
                                            <div className="font-semibold text-black ">
                                                <span className="text-[14px] leading-[21px]">
                                                    21:40
                                                </span>
                                                <div className="text-[12px] font-normal   rounded-[100px] leading-[18px]">
                                                    11 Feb
                                                </div>
                                            </div>

                                            <div className="font-normal flex flex-col  my-[32px]   items-center">
                                                <span className="text-[14px] leading-[21px]">
                                                    1h 30m
                                                </span>
                                            </div>

                                            <span className="font-semibold text-black">
                                                <span className="text-[14px] leading-[21px]">
                                                    21:40
                                                </span>
                                                <div className="text-[12px] font-normal   rounded-[100px] leading-[18px]">
                                                    11 Feb
                                                </div>
                                            </span>
                                        </div>

                                        <div className="flex relative  mt-[25px] mb-[29px]">
                                            <div className=" absolute left-[2px] top-[7px] h-full border-l border-[#4D46FA]"></div>
                                            <div className="flex-col">
                                                <div className="  absolute top-0  w-[6px] h-[7px] rounded-[100px] border border-solid border-[#4D46FA] "></div>
                                                <div className=" absolute bottom-[-7px]  w-[6px] h-[7px] rounded-[100px] border border-solid border-[#4D46FA] bg-[#4D46FA]"></div>
                                            </div>
                                        </div>

                                        <div className="flex-col    min-w-[200px] w-full mt-[15px] ml-[31px]">
                                            <div className="font-semibold text-black ">
                                                <span className="text-[14px] leading-[21px]">
                                                    Da nang (DAD)
                                                </span>
                                                <div className="text-[12px] font-normal   rounded-[100px] leading-[18px]">
                                                    Da Nang Airport
                                                </div>
                                            </div>

                                            <div className="font-normal flex flex-col invisible  my-[32px] ">
                                                <span className="text-[14px] leading-[21px]">
                                                    1h 30m
                                                </span>
                                            </div>

                                            <div className="font-semibold text-black">
                                                <span className="text-[14px] leading-[21px]">
                                                    Ho Chi Minh City (SGN)
                                                </span>
                                                <div className="text-[12px] font-normal   rounded-[100px] leading-[18px]">
                                                    Tansonnhat Intl
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center mb-[10px]">
                                            <div className="relative  max-w-[30px] max-h-[30px] mr-2">
                                                <img
                                                    className="w-full h-full"
                                                    src={images.rectangle20}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="text-[14px] leading-[21px] text-black">
                                                <span className="font-semibold uppercase  ">
                                                    Bamboo Airways
                                                </span>
                                                <div className=" text-[12px] leading-[18px] font-normal text-black/50 ">
                                                    QH-183
                                                    <span className=" ml-1 text-[12px] leading-[18px] font-normal text-black/50">
                                                        Economy
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-[500px] h-[101px] bg-[#F4F2F9] mr-[20px] rounded-xl ">
                                            <div className=" flex items-center justify-between p-[15px]">
                                                <div className="">
                                                    <div className="text-[14px] leading-[21px] font-normal">
                                                        Baggage
                                                        <span className="text-[#4D46FA] ml-1">
                                                            20kg
                                                        </span>
                                                    </div>
                                                    <div className="text-[14px] leading-[21px] font-normal">
                                                        In-flight
                                                        <span className="text-[#4D46FA] ml-1">
                                                            Meal
                                                        </span>
                                                    </div>
                                                    <div className="text-[14px] leading-[21px] font-normal">
                                                        In-flight
                                                        <span className="text-[#4D46FA] ml-1">
                                                            Entertainment
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="mr-[40px] ">
                                                    <div className="text-[14px] leading-[21px] font-normal">
                                                        Aircraft
                                                        <span className="text-[#4D46FA] ml-1">
                                                            Airbus A321
                                                        </span>
                                                    </div>
                                                    <div className="text-[14px] leading-[21px] font-normal">
                                                        Seat layout
                                                        <span className="text-[#4D46FA] ml-1">
                                                            3-3
                                                        </span>
                                                    </div>
                                                    <div className="text-[14px] leading-[21px] font-normal">
                                                        Seat pitch
                                                        <span className="text-[#4D46FA] ml-1">
                                                            29 inches (standard)
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* content 2 copy*/}

                        <div className=" hidden desktop:block w-[890px] min-h-[331px] h-full bg-white mr-[10px] mt-[5px] pl-[15px] rounded-xl">
                            <div className="h-[96px]">
                                {/* row 1 */}
                                <div className="flex items-center justify-between  mb-[16px]">
                                    <div className="flex items-center">
                                        <div className="relative  max-w-[30px] max-h-[30px] mr-2">
                                            <img
                                                className="w-full h-full"
                                                src={images.rectangle20}
                                                alt=""
                                            />
                                        </div>
                                        <div className="text-[14px] leading-[21px] text-black ">
                                            <span className="font-semibold uppercase">
                                                Bamboo Airways
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center max-w-[200px] w-full  mt-[15px] mb-[20px]">
                                        <div className="font-semibold text-black">
                                            <span className="text-[14px] leading-[21px]">
                                                21:40
                                            </span>
                                            <div className="text-[10px] text-center bg-[rgba(77,70,250,0.1)] rounded-[100px] leading-[15px]">
                                                DAD
                                            </div>
                                        </div>

                                        <div className="font-normal flex flex-col items-center">
                                            <span className="text-[14px] leading-[21px]">
                                                1h 30m
                                            </span>
                                            <div className="">
                                                <div className="flex items-center">
                                                    <div className=" w-[6px] h-[7px] rounded-[100px] border border-solid border-[#4D46FA] "></div>
                                                    <div className=" relative top-[2px] min-w-[78px] w-full  h-1 border-t border-[#4D46FA]"></div>
                                                    <div className="w-[6px] h-[7px] rounded-[100px] border border-solid border-[#4D46FA] bg-[#4D46FA]"></div>
                                                </div>
                                            </div>
                                            <span className="text-[14px] leading-[21px]">
                                                Direct
                                            </span>
                                        </div>

                                        <div className="font-semibold text-black">
                                            <span className="text-[14px] leading-[21px]">
                                                23:10
                                            </span>
                                            <div className="text-[10px] text-center bg-[rgba(77,70,250,0.1)] rounded-[100px]  leading-[15px]">
                                                DAD
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-[14px] leading-[21px] font-semibold h-[72px] rounded-xl ">
                                        <div className="p-[15px]">
                                            <div className=" flex items-center text-black">
                                                <div className="w-[20px]">
                                                    <img
                                                        src={images.baggage}
                                                        alt="baggage"
                                                    />
                                                </div>
                                                <span className="text-[14px] leading-[21px] font-normal">
                                                    Baggage
                                                </span>
                                                <span className="text-[14px] leading-[21px]  text-[#4D46FA] ml-1">
                                                    20kg
                                                </span>
                                            </div>
                                            <div className="flex items-center text-black">
                                                <div className="w-[20px] ml-[3px]">
                                                    <img
                                                        src={images.InFlight}
                                                        alt="InFlight"
                                                    />
                                                </div>
                                                <span className='className="text-[14px] leading-[21px] font-normal'>
                                                    In-flight
                                                </span>
                                                <span className="text-[14px] leading-[21px]  text-[#4D46FA] ml-1">
                                                    Meal
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-[14px] leading-[21px] font-semibold h-[72px] rounded-xl ">
                                        <div className="p-[15px]">
                                            <div className=" font-normal opacity-50 line-through text-black">
                                                1,326,000 vnd
                                            </div>
                                            <div className="text-[#F06336]">
                                                1,322,000 vnd
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="px-[15px] py-[6px] text-white bg-[#F06336] mr-[20px]">
                                        Choose
                                    </Button>
                                </div>

                                {/* row 2 */}
                                <div className="flex items-center  font-semibold leading-[18px] text-[12px] uppercase ">
                                    <div className=" mr-[30px]  ">
                                        <span className=" text-black/40 ">
                                            Flight detail
                                        </span>
                                    </div>
                                    <div className="mr-[31px] border-b border-solid border-[#4D46FA]">
                                        <span className="text-[#4D46FA]">
                                            fare info
                                        </span>
                                    </div>

                                    <div className="flex-1 bg-black/10 h-[1px] mr-[20px] "></div>
                                </div>

                                {/* row 3 */}
                                <div className="flex  justify-between ">
                                    <div className="flex  w-full ">
                                        <div className="flex-col   w-full mt-[15px] mr-[31px]">
                                            <div className="font-semibold text-black ">
                                                <span className="text-[14px] leading-[21px] uppercase">
                                                    Conditions
                                                </span>
                                            </div>

                                            <div className="flex items-center mb-[10px] mt-[12px]">
                                                <div className="relative  max-w-[30px] max-h-[30px] mr-2">
                                                    <img
                                                        className="w-full h-full"
                                                        src={images.rectangle20}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="text-[14px] leading-[21px] text-black">
                                                    <span className="font-semibold uppercase  ">
                                                        Bamboo Airways
                                                    </span>
                                                    <div className=" text-[12px] leading-[18px] font-normal text-black/50 ">
                                                        QH-183
                                                        <span className=" ml-1 text-[12px] leading-[18px] font-normal text-black/50">
                                                            Economy
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center mb-[20px]">
                                                <div className="font-normal text-black">
                                                    <span className="text-[14px] leading-[21px]">
                                                        Da Nang
                                                    </span>
                                                    <div className="text-[12px] text-[#4D46FA] leading-[18px]">
                                                        Economy
                                                    </div>
                                                </div>

                                                <div className="">
                                                    <div className="flex items-center mx-1 ">
                                                        <div className=" w-[6px] h-[7px] rounded-[100px] border border-solid border-[#4D46FA] "></div>
                                                        <div className=" relative top-[2px] min-w-[50px] w-full  h-1 border-t border-[#4D46FA]"></div>
                                                        <div className="w-[6px] h-[7px] rounded-[100px] border border-solid border-[#4D46FA] bg-[#4D46FA]"></div>
                                                    </div>
                                                </div>

                                                <div className="font-normal text-black">
                                                    <span className="text-[14px] leading-[21px]">
                                                        Ho Chi Minh City
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="font-normal text-black/50 ">
                                                <span className="text-[12px] leading-[21px]">
                                                    Non - Refundable
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-[15px]">
                                        <div className="text-[14px] leading-[21px] text-black mb-[10px] ">
                                            <span className="font-semibold uppercase   ">
                                                price details
                                            </span>
                                        </div>

                                        <div className="relative w-[500px] h-[101px]  mr-[20px] rounded-xl ">
                                            <div className=" flex items-center justify-between ">
                                                <div className="">
                                                    <div className=" w-[129px] text-[14px] leading-[21px] font-normal">
                                                        Adult Basic Fare (x1)
                                                        <p> Tax</p>
                                                        <p>
                                                            Regular Total Price
                                                        </p>
                                                        <p className="text-[#F06336]  ">
                                                            Save
                                                        </p>
                                                    </div>

                                                    <div className=" mt-[10px] text-[14px] leading-[21px] font-normal">
                                                        You pay
                                                    </div>

                                                    <div className=" absolute w-[400px] top-[88%] h-[1px] bg-black/10 "></div>
                                                </div>

                                                <div className="mr-[40px] ">
                                                    <div className=" w-[129px] text-[14px] leading-[21px] font-normal">
                                                        1,326,000 vnd
                                                        <p> included</p>
                                                        <p>1,326,000 vnd</p>
                                                        <p>-4,000 vnd</p>
                                                    </div>

                                                    <div className=" mt-[10px] text-[14px] text-[#F06336] leading-[21px] font-normal">
                                                        1,322,000 vnd
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* content 3 */}

                        {arrayContent3.map((item, i) => (
                            <div key={i}>
                                <div className="  w-full desktop:w-[890px] min-h-[124px] h-full bg-white mr-[10px] mt-[5px] pl-[15px] rounded-xl">
                                    <div className="h-[96px]">
                                        {/* row 1 */}
                                        <div className="flex items-center justify-between  mb-[16px]">
                                            <div className="flex items-center">
                                                <div className="relative  max-w-[30px] max-h-[30px] mr-2">
                                                    <img
                                                        className="w-full h-full"
                                                        src={images.airlines}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="text-[14px] leading-[21px] text-black ">
                                                    <span className="font-semibold uppercase">
                                                        Vietnam Airlines
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center max-w-[200px] w-full  mt-[15px] mb-[20px]">
                                                <div className="font-semibold text-black">
                                                    <span className="text-[14px] leading-[21px]">
                                                        21:40
                                                    </span>
                                                    <div className="text-[10px] text-center bg-[rgba(77,70,250,0.1)] rounded-[100px] leading-[15px]">
                                                        DAD
                                                    </div>
                                                </div>

                                                <div className="font-normal flex flex-col items-center">
                                                    <span className="text-[14px] leading-[21px]">
                                                        1h 30m
                                                    </span>
                                                    <div className="">
                                                        <div className="flex items-center">
                                                            <div className=" w-[6px] h-[7px] rounded-[100px] border border-solid border-[#4D46FA] "></div>
                                                            <div className=" relative top-[2px] min-w-[78px] w-full  h-1 border-t border-[#4D46FA]"></div>
                                                            <div className="w-[6px] h-[7px] rounded-[100px] border border-solid border-[#4D46FA] bg-[#4D46FA]"></div>
                                                        </div>
                                                    </div>
                                                    <span className="text-[14px] leading-[21px]">
                                                        Direct
                                                    </span>
                                                </div>

                                                <div className="font-semibold text-black">
                                                    <span className="text-[14px] leading-[21px]">
                                                        23:10
                                                    </span>
                                                    <div className="text-[10px] text-center bg-[rgba(77,70,250,0.1)] rounded-[100px]  leading-[15px]">
                                                        DAD
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-[14px] leading-[21px] font-semibold h-[72px] rounded-xl ">
                                                <div className="p-[15px]">
                                                    <div className=" flex items-center text-black">
                                                        <div className="w-[20px]">
                                                            <img
                                                                src={
                                                                    images.baggage
                                                                }
                                                                alt="baggage"
                                                            />
                                                        </div>
                                                        <span className="text-[14px] leading-[21px] font-normal">
                                                            Baggage
                                                        </span>
                                                        <span className="text-[14px] leading-[21px]  text-[#4D46FA] ml-1">
                                                            20kg
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center text-black">
                                                        <div className="w-[20px] ml-[3px]">
                                                            <img
                                                                src={
                                                                    images.InFlight
                                                                }
                                                                alt="InFlight"
                                                            />
                                                        </div>
                                                        <span className='className="text-[14px] leading-[21px] font-normal'>
                                                            In-flight
                                                        </span>
                                                        <span className="text-[14px] leading-[21px]  text-[#4D46FA] ml-1">
                                                            Meal
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-[14px] leading-[21px] font-semibold h-[72px] rounded-xl ">
                                                <div className="p-[15px]">
                                                    <div className=" font-normal opacity-50 line-through text-black">
                                                        1,326,000 vnd
                                                    </div>
                                                    <div className="text-[#F06336]">
                                                        1,322,000 vnd
                                                    </div>
                                                </div>
                                            </div>

                                            <Button className="px-[15px] py-[6px] text-white bg-[#F06336] mr-[20px]">
                                                Choose
                                            </Button>
                                        </div>

                                        {/* row 2 */}
                                        <div className="flex items-center  font-semibold leading-[18px] text-[12px] uppercase ">
                                            <div className=" mr-[30px]  ">
                                                <span className="text-[#4D46FA] ">
                                                    Flight detail
                                                </span>
                                            </div>
                                            <div className="mr-[31px]">
                                                <span className="text-black/40">
                                                    fare info
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="  w-full desktop:w-[890px] min-h-[124px] h-full bg-white mr-[10px] mt-[5px] pl-[15px] rounded-xl">
                                    <div className="h-[96px]">
                                        {/* row 1 */}
                                        <div className="flex items-center justify-between  mb-[16px]">
                                            <div className="flex items-center">
                                                <div className="relative  max-w-[30px] max-h-[30px] mr-2">
                                                    <img
                                                        className="w-full h-full"
                                                        src={images.rectangle20}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="text-[14px] leading-[21px] text-black ">
                                                    <span className="font-semibold uppercase">
                                                        Bamboo Airways
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center max-w-[200px] w-full  mt-[15px] mb-[20px]">
                                                <div className="font-semibold text-black">
                                                    <span className="text-[14px] leading-[21px]">
                                                        21:40
                                                    </span>
                                                    <div className="text-[10px] text-center bg-[rgba(77,70,250,0.1)] rounded-[100px] leading-[15px]">
                                                        DAD
                                                    </div>
                                                </div>

                                                <div className="font-normal flex flex-col items-center">
                                                    <span className="text-[14px] leading-[21px]">
                                                        1h 30m
                                                    </span>
                                                    <div className="">
                                                        <div className="flex items-center">
                                                            <div className=" w-[6px] h-[7px] rounded-[100px] border border-solid border-[#4D46FA] "></div>
                                                            <div className=" relative top-[2px] min-w-[78px] w-full  h-1 border-t border-[#4D46FA]"></div>
                                                            <div className="w-[6px] h-[7px] rounded-[100px] border border-solid border-[#4D46FA] bg-[#4D46FA]"></div>
                                                        </div>
                                                    </div>
                                                    <span className="text-[14px] leading-[21px]">
                                                        Direct
                                                    </span>
                                                </div>

                                                <div className="font-semibold text-black">
                                                    <span className="text-[14px] leading-[21px]">
                                                        23:10
                                                    </span>
                                                    <div className="text-[10px] text-center bg-[rgba(77,70,250,0.1)] rounded-[100px]  leading-[15px]">
                                                        DAD
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-[14px] leading-[21px] font-semibold h-[72px] rounded-xl ">
                                                <div className="p-[15px]">
                                                    <div className=" flex items-center text-black">
                                                        <div className="w-[20px]">
                                                            <img
                                                                src={
                                                                    images.baggage
                                                                }
                                                                alt="baggage"
                                                            />
                                                        </div>
                                                        <span className="text-[14px] leading-[21px] font-normal">
                                                            Baggage
                                                        </span>
                                                        <span className="text-[14px] leading-[21px]  text-[#4D46FA] ml-1">
                                                            20kg
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center text-black">
                                                        <div className="w-[20px] ml-[3px]">
                                                            <img
                                                                src={
                                                                    images.InFlight
                                                                }
                                                                alt="InFlight"
                                                            />
                                                        </div>
                                                        <span className='className="text-[14px] leading-[21px] font-normal'>
                                                            In-flight
                                                        </span>
                                                        <span className="text-[14px] leading-[21px]  text-[#4D46FA] ml-1">
                                                            Meal
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-[14px] leading-[21px] font-semibold h-[72px] rounded-xl ">
                                                <div className="p-[15px]">
                                                    <div className=" font-normal opacity-50 line-through text-black">
                                                        1,326,000 vnd
                                                    </div>
                                                    <div className="text-[#F06336]">
                                                        1,322,000 vnd
                                                    </div>
                                                </div>
                                            </div>

                                            <Button className="px-[15px] py-[6px] text-white bg-[#F06336] mr-[20px]">
                                                Choose
                                            </Button>
                                        </div>

                                        {/* row 2 */}
                                        <div className="flex items-center  font-semibold leading-[18px] text-[12px] uppercase ">
                                            <div className=" mr-[30px]  ">
                                                <span className=" text-black/40">
                                                    Flight detail
                                                </span>
                                            </div>
                                            <div className="mr-[31px] border-b border-solid  border-[rgba(77,70,250,0.5)] ">
                                                <span className="text-[#4D46FA]">
                                                    fare info
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* sidebar */}

                    <div className="wrapper hidden desktop:flex my-[10px]">
                        <div className="bg-white rounded-xl w-[270px] h-[433px]   ">
                            <header className=" flex font-semibold h-[50px] border-b border-solid border-black/20">
                                <span className="text-[14px] leading-[21px] uppercase px-[15px] py-[14px]">
                                    your flights
                                </span>
                            </header>

                            <div className="px-[15px] py-[20px]">
                                <div className="flex items-center mb-[16px] ">
                                    <div className="relative  max-w-[30px] max-h-[30px] mr-2">
                                        <img
                                            className="w-full h-full"
                                            src={images.rectangle}
                                            alt=""
                                        />
                                        <img
                                            className=" absolute top-[34%] left-[47%] translate-x-[-50%] text-[21px] leading-[14px]"
                                            src={images.number01}
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-[14px] leading-[21px] text-black">
                                        <span className="font-normal  ">
                                            Fri, 11 Feb, 2022
                                        </span>
                                        <h4 className="font-semibold">
                                            Da Nang - Ho Chi Minh
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex items-center mb-[16px]">
                                    <div className="relative  max-w-[30px] max-h-[30px] mr-2">
                                        <img
                                            className="w-full h-full"
                                            src={images.rectangle20}
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-[14px] leading-[21px] text-black">
                                        <span className="font-semibold uppercase ">
                                            Bamboo Airways
                                        </span>
                                        <h4 className=" text-[12px] leading-[18px] font-semibold text-[#4D46FA]">
                                            Details
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-[20px]">
                                    <div className="font-semibold text-black">
                                        <span className="text-[14px] leading-[21px]">
                                            21:40
                                        </span>
                                        <div className="text-[10px] text-center bg-[rgba(77,70,250,0.1)] rounded-[100px] leading-[15px]">
                                            DAD
                                        </div>
                                    </div>

                                    <div className="font-normal flex flex-col items-center">
                                        <span className="text-[14px] leading-[21px]">
                                            1h 30m
                                        </span>
                                        <div className="">
                                            <div className="flex items-center">
                                                <div className=" w-[6px] h-[7px] rounded-[100px] border border-solid border-[#4D46FA] "></div>
                                                <div className=" relative top-[2px] min-w-[110px] w-full  h-1 border-t border-[#4D46FA]"></div>
                                                <div className="w-[6px] h-[7px] rounded-[100px] border border-solid border-[#4D46FA] bg-[#4D46FA]"></div>
                                            </div>
                                        </div>
                                        <span className="text-[14px] leading-[21px]">
                                            Direct
                                        </span>
                                    </div>

                                    <div className="font-semibold text-black">
                                        <span className="text-[14px] leading-[21px]">
                                            23:10
                                        </span>
                                        <div className="text-[10px] text-center bg-[rgba(77,70,250,0.1)] rounded-[100px]  leading-[15px]">
                                            DAD
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-[240px] py-[10px] px-[51px] bg-[rgba(77,70,250,0.1)] mb-[16px] ">
                                    <span className="text-[12px] text-[#4D46FA] leading-[18px] font-semibold ">
                                        Change departure flight
                                    </span>
                                </Button>

                                <div className="border-t border-solid border-black/10 mb-[14px]"></div>
                                <div className="flex items-center mb-[16px] ">
                                    <div className="relative  max-w-[30px] max-h-[30px] mr-2">
                                        <img
                                            className="w-full h-full"
                                            src={images.rectangle42}
                                            alt=""
                                        />
                                        <img
                                            className=" absolute top-[34%] left-[47%] translate-x-[-50%] text-[21px] leading-[14px]"
                                            src={images.number02}
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-[14px] leading-[21px] text-black">
                                        <span className="font-normal  ">
                                            Sun, 13 Feb, 2022
                                        </span>
                                        <h4 className="font-semibold">
                                            Ho Chi Minh - Da Nang
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="text-[14px] leading-[21px] font-semibold bg-[#F8F8F8] h-[72px] rounded-xl ">
                                <div className="p-[15px]">
                                    <div className="text-black">Subtotal</div>
                                    <div className="text-[#F06336]">
                                        1,322,000 vnd
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}

            <div className=" flex justify-center bg-[#E5E5E5] w-full h-[230px] ">
                <div className="flex justify-between w-[80%] desktop:w-[1172px]  h-full pb-[42px] z-40 ">
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
            </div>

            {/* modal */}
            {closeModal && (
                <div
                    ref={modalRef}
                    className="fixed bg-black/50 inset-0 flex items-center justify-center"
                >
                    <div
                        ref={modalContainerRef}
                        className="w-[960px] min-h-[274px] bg-white/90 rounded-xl "
                    >
                        <div className="bg-slate-100 shadow-lg  w-[1200px] min-h-[300px] rounded p-5 ">
                            {/* row 1 */}

                            <div
                                className="float-right text-[30px] cursor-pointer"
                                onClick={() => setCloseModal(false)}
                            >
                                <AiOutlineClose></AiOutlineClose>
                            </div>
                            <div className="flex items-center justify-between ">
                                <div>
                                    <div className="pb-[10px]">
                                        <label
                                            htmlFor=""
                                            className="text-[24px]  font-bold "
                                        >
                                            Birthday
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="flex items-center h-[40px] p-[12px] bg-white rounded-md">
                                            <span className="text-blue-600 text-[22px] w-[40px]  ">
                                                <FaBirthdayCake></FaBirthdayCake>
                                            </span>
                                            <div className="relative">
                                                <input
                                                    value={calendar}
                                                    readOnly
                                                    className="flex-1  text-[16px] leading-6 rounded-md pl-3 pr-3  "
                                                    type="text"
                                                    onClick={() =>
                                                        setOpenCalendar(
                                                            !openCalendar,
                                                        )
                                                    }
                                                />
                                                {openCalendar &&
                                                    !selectError && (
                                                        <Calendar
                                                            date={new Date()}
                                                            className="absolute left-0 top-[40px] z-50 shadow-lg"
                                                            onChange={
                                                                handleSelect
                                                            }
                                                        />
                                                    )}
                                            </div>

                                            <div className="">
                                                <AiTwotoneCalendar className="text-blue-600 cursor-pointer   text-[22px] w-[40px] "></AiTwotoneCalendar>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* row 2 */}

                            <div className="flex items-center justify-between ">
                                <div>
                                    <div className="pb-[10px] mt-2 ">
                                        <label
                                            htmlFor=""
                                            className="text-[24px]  font-bold "
                                        >
                                            Ngày đi
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="flex items-center h-[40px] p-[12px] bg-white rounded-md">
                                            <span className="text-blue-600 text-[22px] w-[40px]  ">
                                                <FaPlaneDeparture></FaPlaneDeparture>
                                            </span>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="flex-1  text-[16px] leading-6 rounded-md pl-3 pr-3 "
                                                />
                                            </div>

                                            <div className="">
                                                <AiTwotoneCalendar className="text-blue-600 cursor-pointer   text-[22px] w-[40px] "></AiTwotoneCalendar>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="pb-[10px]">
                                        <label
                                            htmlFor=""
                                            className="text-[24px]  font-bold "
                                        >
                                            hàng ghế
                                        </label>
                                    </div>

                                    <HeadlessTippy
                                        placement="bottom-end"
                                        interactive={true}
                                        trigger="click"
                                        render={(attrs) => (
                                            <div
                                                className="w-[300px] "
                                                tabIndex="-1"
                                                {...attrs}
                                            >
                                                <div
                                                    className="wrapper bg-white w-full shadow-md  rounded min-h-[100px]"
                                                    onClick={handleChangeDiv}
                                                >
                                                    {seatClass.map(
                                                        (item, i) => (
                                                            <div
                                                                key={i}
                                                                className="p-[12px] cursor-pointer hover:bg-gray-300"
                                                            >
                                                                <div className="active flex items-center flex-1  ">
                                                                    {item}
                                                                </div>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    >
                                        <div className="flex items-center w-[300px] ">
                                            <div className="flex items-center h-[40px] p-[12px] bg-white rounded-md">
                                                <div className="flex cursor-pointer">
                                                    <span className="text-blue-600 text-[22px] w-[40px]  ">
                                                        <MdOutlineChair></MdOutlineChair>
                                                    </span>
                                                    <div
                                                        ref={divRef}
                                                        className="flex-1  w-[200px]  text-[16px] leading-6 rounded-md pl-3 pr-3"
                                                    >
                                                        {change}
                                                    </div>

                                                    <div className="">
                                                        <FiArrowDown className="text-blue-600 cursor-pointer   text-[22px] w-[40px] "></FiArrowDown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </HeadlessTippy>
                                </div>
                            </div>

                            <Button className="bg-[#F06336] float-right mt-9">
                                Tìm chuyến bay
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Flight;
