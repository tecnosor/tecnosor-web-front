import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCookiesStore = defineStore('cookies', () => {
  const accepted = ref(false)
  
  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    document.body.style.overflow = '';
    accepted.value = true;
  }
  
  const checkCookies = () : boolean => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    accepted.value = cookiesAccepted === 'true';
    return accepted.value;
  }

  return { accepted, acceptCookies,  checkCookies}
})