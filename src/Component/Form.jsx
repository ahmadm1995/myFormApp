import { useState } from "react";

function Form() {
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [serviceType, setServiceType] = useState("")
    const [isChecked, setIsChecked]= useState(false)

    

    function handleSubmit(e){
        alert(`User has submitted ${firstName} ${lastName}`)
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(message)
        console.log(serviceType)
        console.log(isChecked)
        e.preventDefault()

    }

    
    
    return ( 
        
            <div className="h-[773px] w-[736px] bg-white flex flex-col rounded-lg pl-[40px] pt-[40px] pr-[40px] pb-[40px]">
                <h1 className="font-karla font-bold text-[32px]">Contact Us</h1>
                    <form 
                        onSubmit={handleSubmit}>                      
                        <div className="grid grid-cols-2 grid-rows-7 gap-4 mt-[32px]">
                            <div>
                                <label htmlFor="first_name" className="block mb-2  text-[16px] font-medium text-black">First Name</label>
                                <input type="text" id="first_name" onChange={(e)=>setFirstName(e.target.value)} value = {firstName} className="block w-full border border-slate-400 text-sm rounded-lg p-2.5" placeholder="" required />
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-[16px] font-medium text-black">Last Name</label>
                                <input type="text" id="last_name" onChange={(e)=>setLastName(e.target.value)} value = {lastName} className="block w-full border border-slate-400 text-sm rounded-lg p-2.5" placeholder="" required />
                            </div>
                            <div className="col-span-2 ">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-[16px] font-medium text-black">Email Address</label>
                                    <input type="text" id="email" onChange={(e)=>setEmail(e.target.value)} value = {email} className="block w-full border border-slate-400 text-sm rounded-lg p-2.5" placeholder="" required />
                                </div>
                            </div>
                            <div className="row-start-3">
                                <div className="flex items-center ps-4 border border-slate-400 rounded bg-white">
                                    <input id="bordered-radio-1" type="radio" value="General Inquiry" checked={serviceType === "General Inquiry"}  onChange={(e) => setServiceType(e.target.value)} name="bordered-radio" className="w-4 h-4 "/>
                                    <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-[18px] font-medium text-gray-900 dark:text-gray-300">General Inquiry</label>
                                </div>
                            </div>
                            <div className="row-start-3">
                                <div className="flex items-center ps-4 border border-slate-400 rounded bg-white">
                                    <input id="bordered-radio-2" type="radio" value="Support Request" checked={serviceType === "Support Request"} onChange={(e) => setServiceType(e.target.value)} name="bordered-radio" className="w-4 h-4 "/>
                                    <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-[18px] font-medium text-gray-900 dark:text-gray-300">Support Request</label>
                                </div>
                            </div>
                            <div className="col-span-2 row-span-2 ">
                                <div>
                                    <label htmlFor="message" className="block mb-2 text-[16px] font-medium text-black">Message</label>
                                    <textarea id="message" rows="5" onChange={(e)=>setMessage(e.target.value)} value = {message} className="block w-full border border-slate-400 text-sm rounded-lg p-2.5" placeholder=""></textarea>
                                </div>
                            </div>
                            <div className="col-span-2 row-start-6 mt-[20px]">
                                <input  id="checked-checkbox" type="checkbox" value="" checked={isChecked} onChange={()=>setIsChecked(!isChecked)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                <label htmlFor="checked-checkbox" className="ms-2 text-[16px] font-medium text-black ">I consent to being contacted by the team</label>
                            </div>
                            <div className="col-span-2 row-start-7 h-[58px]  ">
                                <button type="submit" className="block w-full text-white bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 h-[58px] ">Submit</button>
                            </div>
                        </div>                       
                    </form>
            </div>
        
     );
}

export default Form;