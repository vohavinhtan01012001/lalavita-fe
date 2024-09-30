import Categories from '../shared/Categories';
import HeaderSection from '../shared/HeaderSection';
const Section6 = () => {
    return (
        <div className="pt-[196px] bg-[#f7d6e9]">
            <div className='w-full'>
                <HeaderSection
                    title="라라비타 스토어"
                    className='text-center'
                />
            </div>
            <div>
                <Categories />
            </div>
        </div>
    )
}

export default Section6;