import React,{useState} from 'react';
import img6 from "../assets/Images/img6.png"
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useForm} from 'react-hook-form';
import api from "../components/api";
const Request = () => {
    const {register, handleSubmit,reset, formState: {errors}} = useForm();
    // const [nameError, setNameError] = useState('емайл не может быть пустым')
    // const [passwordError, setPasswordError] = useState('')
    const onSubmit = data => {
        api.post(`contact/0101`,{
            name:data.name,
            number:data.number,
        })
            .then((red) => {
                console.log(red.data)
                toast.success('success')
                console.log(data)
            })
            .catch((err) => {
                toast.error('error')
            })
        reset()
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer/>
            <div className=" ml-[5%] ">
                <div className="">
                    <div>
                        <h1 className="text-[42px] font-light font-sans">Оставьте заявку</h1>
                        <p className="font-[Monserrat] text-[18px] mx-[10%] font-extralight w-[366px]">Напишите ваши
                            контактные данные для индивидуальной консультации</p>
                    </div>
                    <div className="flex items-center justify-between">

                        <div className="request flex justify-end items-center">
                            <div className="">
                                <div className="my-10">
                                    <h2 className="my-5">Ваше имя:</h2>
                                    <input  type="text" name='name' id="last_name"
                                            className="request-input bg-white border border-black text-black text-sm   block w-full py-[15px] px-[60px] p-1.5 dark:bg-black dark:border-black dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="last name" {...register('name',{required:true})}/>
                                    {errors.name && <div style={{color:'red'}}>name не может быть пустым</div>}
                                </div>
                                <div className="my-10">
                                    <h2 className="my-5">Ваш телефонный номер:</h2>
                                    <input  type="number" id="phone"
                                            className="request-input bg-white border border-black text-black text-sm   block w-full py-[15px] px-[60px] p-1.5 dark:bg-black dark:border-black dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Mobile number" {...register('number',{required:true})} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                                    {errors.number && <div style={{color:'red'}}>номер не может быть пустым</div>}
                                </div>
                                <button type="submit"
                                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  rounded-lg text-sm px-[30px] py-[10px] dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Отправить
                                </button>
                            </div>
                            <div className="request-q text-[33px] ml-[200px] font-[250] font-sans">
                                <on>
                                    <li>Instagram</li>
                                    <li className="my-[20%]">Twitter</li>
                                    <li className="my-[20%]">Telegram</li>
                                    <li>E-Mail</li>
                                </on>
                            </div>
                        </div>
                        <img className="request-img" src={img6} alt=""/>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Request;