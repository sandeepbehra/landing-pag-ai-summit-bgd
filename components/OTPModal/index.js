import { Dialog, Transition } from "@headlessui/react";
import { Textarea } from "flowbite-react";
import { Fragment, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { MuiOtpInput } from "mui-one-time-password-input";
import { POST } from "@/services/APIService";
import { companyName } from "@/utils/constants";

export default function OtpModalComponent({
  modalText,
  setOpenOtpModal,
  openOtpModal,
  otpVerificationFailed,
  setOtpVerificationFailed,
  phone,
  setError,
  setErrorMessage
}) {
  // let [isOpen, setIsOpen] = useState(true)
  const [otp, setOtp] = useState("");

  function closeModal() {
    setOpenOtpModal(false);
  }

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const getOtpVerified = async () => {
    POST('https://api.bigestate.io/api/v1/verifyWhatsappOtp', { phone, projectName: companyName, otp })
      .then((response) => {
        console.log({response})
        if(response.result.success) {
          setOtpVerificationFailed(false);
          setError(false);
          setErrorMessage("");
        } else {
          setOtpVerificationFailed(true);
          setError(true);
          setErrorMessage("Otp Verification failed")
        }
      })
      .catch((error) => {
        setOtpVerificationFailed(true);
        setError(true);
        setErrorMessage("Otp Verification failed")
      })
    closeModal();
  };

  return (
    <>
      <Transition appear show={openOtpModal} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md mt-24 transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-center p-6 bg-white text-black text-2xl">
                    <p className="text-center"> Verify OTP </p>
                    {/* <RxCross1 onClick={closeModal} className='bg-gray-700 rounded-full p-1 absolute right-0 top-4 hover:bg-primary hover:cursor-pointer' /> */}
                  </div>
                  <div className="w-full h[100px] bg-white flex flex-col items-center pb-6">
                    <MuiOtpInput
                      value={otp}
                      onChange={handleChange}
                      className="p-4"
                    />
                      <button
                        onClick={() => getOtpVerified()}
                        className="p-2 bg-primary text-white"
                      >
                        Verify Otp
                      </button>
                  </div>
                  {/* <button className='md:ml-[23rem] right-4 text-white flex' onClick={closeModal}> Connect with us <RxCross1 className='text-xl ml-12 text-white font-bold'/> </button> */}
                  {/* <FormNew formHeader="Fill the given form" setOpenModal={setOpenModal} /> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
