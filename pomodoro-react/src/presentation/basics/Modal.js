import React, { useState } from 'react'

import Button from './Button'

import './Modal.css'

function Modal(title, text) {
  const [openModal, setOpenModal] = useState(false)

  if (!openModal) {
    return [openModal, setOpenModal, <></>]
  }

  return [openModal, setOpenModal, <section id="modal-bg">
    <article class="modal">
      <h5>{title}</h5>
      <p>{text}</p>
      {Button('Ok', () => setOpenModal(false))}
    </article>
  </section>]
}

export default Modal