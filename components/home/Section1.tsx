import Image from 'next/image';
import { IconSet } from '../shared/IconSet';

const images = [
    {
        src: '/assets/main-letter-1.png',
        height: 79.7,
        width: 57.9,
        alt: 'main-letter-1',
    },
    {
        src: '/assets/main-letter-2.png',
        width: 67,
        height: 80,
        alt: 'main-letter-2',
    },
    {
        src: '/assets/main-letter-3.png',
        width: 92.3,
        height: 63.7,
        alt: 'main-letter-3',
        className: 'border-[#222222] border',
    },
    {
        src: '/assets/main-letter-4.png',
        height: 80,
        width: 73,
        alt: 'main-letter-4',
    },
];


const confirmLogos = [
    {
        src: '/assets/main-confirm-logo-1.png',
        height: 42,
        width: 42,
        alt: 'main-confirm-logo-1',
    },
    {
        src: '/assets/main-confirm-logo-2.png',
        height: 42,
        width: 42,
        alt: 'main-confirm-logo-2',
    },
    {
        src: '/assets/main-confirm-logo-3.png',
        height: 41,
        width: 50,
        alt: 'main-confirm-logo-3',
    },
    {
        src: '/assets/main-confirm-logo-4.png',
        height: 14,
        width: 60,
        alt: 'main-confirm-logo-4',
    },
    {
        src: '/assets/main-confirm-logo-5.png',
        height: 15,
        width: 80,
        alt: 'main-confirm-logo-5',
    },
];

const Section1 = () => {
    return <div className="pb-[80px] pt-[156px]">
        <div className=" flex flex-col items-center justify-center">
            <div className='flex items-center gap-[200px]'>
                <div className='pt-[103px]'>
                    <div>
                        <p className="text-[#42c0cc]">왜 라라비타 NMN일까요?</p>
                    </div>
                    <div>
                        <h1 className="my-[36px] max-w-[320px] text-[55.5px] leading-[72.5px] text-[#222222] font-semibold">
                            노화를 늦추고
                            건강을 지키는
                            최적의 방법
                        </h1>
                        <div>
                            <p className="text-[18.5px] text-[#222222] leading-[30px] max-w-[480px]">
                                라라비타의 SUPERCONDRIA ®NMN은 전세계적으로 인증 받은
                                Uthever® NMN로 만든 고순도 제품입니다.
                            </p>
                        </div>
                        <div className='flex items-center gap-[16.5px] mt-[50px]'>
                            {images.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image.src}
                                    height={image.height}
                                    width={image.width}
                                    alt={image.alt}
                                    className={image.className}
                                />
                            ))}
                        </div>
                        <div className='flex items-center gap-[10px] mt-[35px]'>
                            {confirmLogos.map((logo, index) => (
                                <Image
                                    key={index}
                                    src={logo.src}
                                    height={logo.height}
                                    width={logo.width}
                                    alt={logo.alt}
                                />
                            ))}
                        </div>
                        <div className='mt-[149px]'>
                            <IconSet
                                name='arrow_down'
                                height={65.333}
                                width={65.333}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        alt='main-illust-01'
                        src={'/assets/main-illust-01.png'}
                        width={699}
                        height={507}
                    />
                </div>
            </div>
        </div>
    </div>
}
export default Section1;