<template>
    <div>
      <form class="contact-form" @submit.prevent="enviarFormulario">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input v-model="nombre" type="text" required />
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="email" type="email" required />
        </div>
  
        <div class="form-group">
          <label for="mensaje">Mensaje:</label>
          <textarea v-model="mensaje" required></textarea>
        </div>
  
        <button type="submit">Enviar</button>
      </form>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const nombre = ref('');
  const email = ref('');
  const mensaje = ref('');
  
  const enviarFormulario = async () => {
    const formData = {
      nombre: nombre.value,
      email: email.value,
      mensaje: mensaje.value,
    };
  
    try {
      // TODO PARAMETRIZAR Y CREAR SERVICIO
      const response = await fetch('http://localhost/services/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Formulario enviado con éxito');
      } else {
        alert('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Error al enviar el formulario');
    }
  };
  </script>
  
  <style scoped>
  .contact-form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    margin-top: 5px;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>