import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mx-auto px-6 bg-[#FBFBFB]">
            <div className='flex gap-12 columns-2  flex-col sm:flex-row p-12'>
                <div className='columns-1'>
                    <div className='grid grid-rows-2'>
                        <div className="w-full">
                            <img className="pt-4 w-[9.90121rem] max-w-none" src="/__덉씠__1 (1).png" alt="Icon" />
                            <p className="pt-2 font-semibold">
                                우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
                            </p>
                            <p className="pt-4 font-extrabold">
                                010-0000-0000
                            </p>
                            <p className="pt-4 font-extrabold">
                                aaaaa@naver.com
                            </p>
                        </div>
                        <div className="columns-2 pt-12">
                            <div className="grid grid-row-3 gap-1">
                                <p className="font-semibold">
                                    상호명
                                </p>
                                <p className="font-semibold">
                                    하이퍼하이어
                                </p>
                                <p className="font-extrabold">
                                    Hyperhire India Private Limited
                                </p>
                            </div>
                            <div className="grid grid-row-3 gap-1">
                                <p className="font-semibold">
                                    대표 CEO
                                </p>
                                <p className="font-semibold">
                                    김주현
                                </p>
                                <p className="font-extrabold">
                                    Juhyun Kim
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='columns-1'>
                    <div className='columns-4'>
                        <div style={{
                            width: 200,
                            height: 120,
                            userSelect: "none",
                            background: "white",
                            borderRadius: "10px",
                        }}
                            className="shadow p-4">
                            <div className="flex items-center justify-center align-middle rounded-xl bg-gray-100 text-card-foreground h-[40px] w-[40px]">
                                <img className="w-[1.90121rem]" src="/icon-code.png" alt="Icon" />
                            </div>
                            <p className="text-[12px] font-bold pt-4">해외 개발자 원격 채용</p>
                            <p className="text-[12px] font-medium">바로가기</p>
                        </div>
                        <div style={{
                            width: 200,
                            height: 120,
                            userSelect: "none",
                            background: "white",
                            borderRadius: "15px",
                        }}
                            className="shadow p-4">
                            <div className="flex items-center justify-center align-middle rounded-xl bg-gray-100 text-card-foreground h-[40px] w-[40px]">
                                <img className="w-[1.90121rem]" src="/icon-avatar.png" alt="Icon" />
                            </div>
                            <p className="text-[12px] font-bold pt-4">해외 개발자 원격 채용</p>
                            <p className="text-[12px] font-medium">바로가기</p>
                        </div>
                        <div style={{
                            width: 200,
                            height: 120,
                            userSelect: "none",
                            background: "white",
                            borderRadius: "15px",
                        }}
                            className="shadow p-4">
                            <div className="flex items-center justify-center align-middle rounded-xl bg-gray-100 text-card-foreground h-[40px] w-[40px]">
                                <img className="w-[1.90121rem]" src="/icon-kor.png" alt="Icon" />
                            </div>
                            <p className="text-[12px] font-bold pt-4">해외 개발자 원격 채용</p>
                            <p className="text-[12px] font-medium">바로가기</p>

                        </div>
                        <div style={{
                            width: 200,
                            height: 120,
                            userSelect: "none",
                            background: "white",
                            borderRadius: "15px",
                        }}
                            className="shadow p-4">
                            <div className="flex items-center justify-center align-middle rounded-xl bg-gray-100 text-card-foreground h-[40px] w-[40px]">
                                <img className="w-[1.90121rem]" src="/icon-gear.png" alt="Icon" />
                            </div>
                            <p className="text-[12px] font-bold pt-4">해외 개발자 원격 채용</p>
                            <p className="text-[12px] font-medium">바로가기</p>

                        </div>
                    </div>
                    <div className="columns-2 pt-24">
                        <div className="grid grid-row-3 gap-2">
                            <p className="font-semibold">
                                사업자등록번호 CIN
                            </p>
                            <p className="font-semibold">
                                427-86-01187
                            </p>
                            <p className="font-extrabold">
                                U74110DL2016PTC290812
                            </p>
                        </div>
                        <div className="grid grid-row-3 gap-1">
                            <p className="font-semibold">
                                서울특별시 강남대로 479, 지하 1층 238호
                            </p>
                            <p className="font-semibold">
                                김주현
                            </p>
                            <p className="font-extrabold">
                                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
                                110053 India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
