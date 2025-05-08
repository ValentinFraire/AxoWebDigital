import { defineStore } from "pinia";
import emailjs from "@emailjs/browser";

export const useMailStore = defineStore("mail", {
  state: () => ({
    userName: "",
    email: "",
    servicio: "",
    Mensaje: "",
    Fecha: Date.now(),
    phone: ""
  }),
  actions: {
    postMessage(email, nameUser, Texto, servicio, Fecha, phone) {
      const payload = {
        email: email,
        userName: nameUser,
        servicio: servicio,
        Mensaje: Texto,
        Fecha: Fecha,
        phone: phone
      };

      emailjs
        .send(
          "service_kkatx1e",
          "template_lqnlup6",
          payload,
          "N1J35f8bNxZDLaHSj"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    }
  }
});
