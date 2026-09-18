// ModalComponent.jsx

import {
  Dialog,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import FormNew from "../FormNew";

export default function ModalComponent({
  modalText,
  setOpenModal,
  openModal,
  otpForm,
}) {
  function closeModal() {
    setOpenModal(false);
  }

  return (
    <Transition
      appear
      show={openModal}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-[100]"
        onClose={closeModal}
      >
        {/* ================= OVERLAY ================= */}

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-[3px]" />
        </Transition.Child>

        {/* ================= MODAL POSITION ================= */}

        <div className="fixed inset-0 overflow-y-auto">
          <div
            className="
              flex min-h-full
              items-center justify-center
              p-3
              sm:p-5
              md:p-6
            "
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 scale-[0.97]"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-4 scale-[0.97]"
            >
              <Dialog.Panel
                className="
                  relative
                  w-full
                  max-w-[920px]
                  transform
                  text-left
                  align-middle
                  transition-all
                "
              >
                <FormNew
                  setOpenModal={setOpenModal}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}