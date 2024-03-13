
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import React ,{ Suspense, useRef, useState } from "react";

import  Fox  from "../models/Fox";
import Loader from "../componants/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../componants/Alert";
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: ""});
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");
  const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      setCurrentAnimation("hit");

      emailjs.send(
       import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        { from_name: form.name,
          to_name: "Salah",
          from_email: form.email,
          to_email : 'aboulkacimsalah002@gmail.com',
          message: form.message },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      ).then(() => {
        setIsLoading(false);
        showAlert( {show : true , text :"Votre message a été envoyé avec succès" , type : "success"});
        setTimeout(() => {
          setCurrentAnimation("idle");
          hideAlert();
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      }).catch(() => {
        setIsLoading(false);
        showAlert( {show : true , text :"Une erreur s'est produite lors de l'envoi de votre message" , type : "danger"});
      });
  };
const  [isLoading , setIsLoading] = useState(false);
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
       <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">
            Contact
          </h1>
          <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
          >
          <label className="text-black-500 font-semibold">
            Nom
            <input
            type="text"
            name="name"
            className="input"
            placeholder="Votre nom"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
            type="email"
            name="email"
            className="input"
            placeholder="aboulkacimsalah002@gmail.com"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Votre Message
            <textarea
            name="message"
            rows='4'
            className="textarea"
            placeholder="Votre message"
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <button
          type="submit"
          className="btn"
          disabled={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}
          >
            {isLoading ? 'Envoie...' : 'Envoyer votre Message'}
          </button>

          </form>
        </div>
        <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>


      </section>

    )
}

export default Contact