import mainBg07 from '@/public/assets/main-bg-section7.webp';
import ContactInfo from '../shared/ContactInfo';
import { IconSet } from '../shared/IconSet';

const Section7 = () => {
    return (
        <div
            style={{ backgroundImage: `url(${mainBg07.src})` }}
            className="bg-cover bg-center h-[120vh]"
        >
            <div className='pt-[200px] pl-[200px]'>
                <ContactInfo
                    title='Adress'
                    text="1234, Dosan-daero 1-gil, lalavita Building"
                    className='mb-[60px]'
                />
                <ContactInfo
                    title='Partnership'
                    text="+82 10 12347 890 lalavita@gmail.com"
                    className='mb-[60px]'
                />
                <ContactInfo
                    title='Social'
                    text={
                        <div >
                            <div className='flex items-center pb-2 gap-2'>
                                <div>
                                    <p className='underline'>Youtube</p>
                                </div>
                                <IconSet
                                    name='youtube'
                                    height={35}
                                    width={50}
                                />
                            </div>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <p className='underline'>Instagram</p>
                                </div>
                                <IconSet
                                    name='instagram'
                                    height={35}
                                    width={50}
                                />
                            </div>
                        </div>
                    }
                    className='mb-[166px]'
                />
                <div className='text-white text-[20.5px] leading-[25.5px]'>
                    <p>© 2022  Lalavita. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};
export default Section7;
