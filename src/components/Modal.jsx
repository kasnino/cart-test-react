import React from "react";


const Modal = ({ isOpen, closeModal, fontSize }) => {
  return (
    <>
      {isOpen && (
        <section id="modal" 	className="absolute mt-1 right-0 w-1/6 rounded p-2 border">
          <span>Range Font size </span>
      <label for="large-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{fontSize}</label>
          <input id="large-range" type="range" value={fontSize} class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"></input>
        </section>
      )}
    </>
  );
};

export default Modal;