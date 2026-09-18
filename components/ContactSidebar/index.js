'use client'
import React, { useState } from 'react'
import Form from '../Form'
import ModalComponent from '../Modal'
import { companyWhatsapp } from '@/utils/constants'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const ContactSidebar = () => {
  const [openModal, setOpenModal] = useState(false)
  
  return (
    <div className="md:flex flex-col hidden gap-8 h-full bg-black fixed z-50">
    <div className="flex gap-2 w-ful">
      <button className="bg-[#f5f1d4] w-full text-slate-800 p-2" onClick={() => setOpenModal(prev => !prev)}>
        Schedule Visit
      </button>
    </div>

    <div className="flex flex-col gap-4">
      <Form />
    </div>

    {openModal && <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />}
    
    <div className="fixed md:bottom-16 bottom-16 md:right-16 right-[2rem] flex flex-col gap-8 z-40 bg-green-700 p-2 rounded-full">
          <Link href={`https://api.whatsapp.com/send?phone=${companyWhatsapp}`}>
            <FaWhatsapp className="text-4xl text-white" />
          </Link>
        </div>
  </div>
  )
}

export default ContactSidebar