import clsx from "clsx";
import { IconSet } from "./IconSet";

const Header = ({ selected }: { selected: number }) => {
    return <div className="fixed px-[80px] pt-[80px] top-0 left-0 right-0 max-[700px]:px-4">
        <div className="flex items-start justify-between w-full z-50">
            <div>
                <IconSet
                    name="logo"
                    width={134.668}
                    height={36}
                    color={selected === 7 ? '#fff' : '#222'}
                />
            </div>
            <div>
                <div className="ml-[12px] mb-[15px]">
                    <IconSet
                        name="menu"
                        width={53.333}
                        height={14.668}
                        className="z-50"
                        color={selected === 7 ? '#fff' : '#222'}
                    />
                </div>
                <div className="flex items-center gap-[9px] z-50">
                    <p className="text-[#42c0cc]">KR</p>
                    <p className={clsx(selected === 7 ? 'text-white':'text-[#222222]')}>EN</p>
                </div>
            </div>
        </div>
    </div>
}

export default Header;