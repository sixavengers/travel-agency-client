import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

type Props = {}

const Packages = (props: Props) => {


    return (
        <div>
            <section className='flex px-2'>
                <div className='w-[300px] mr-3'>
                    <div className=' mb-3'>
                        <p className='rounded-t-md flex items-center p-2 bg-[#0089F6]'>
                            <span className='mr-2 text-2xl font-extrabold text-white '><AiOutlineSearch /></span>
                            <span className='text-white font-semibold'>35 RESULTS FOUND</span>
                        </p>
                        <p className='text-[#0089F6] rounded-b-md text-center p-2 border border-[#0089F6]'>Book now! before sold out</p>
                    </div>
                    <div className='bg-slate-300 h-[600px] rounded-md p-2'>
                        <div>
                            <p>Price Range</p>

                            
                        </div>
                    </div>
                </div>

                <div className='bg-slate-300 w-10/12 h-[700px]'>

                </div>
            </section>
        </div>
    )
}

export default Packages