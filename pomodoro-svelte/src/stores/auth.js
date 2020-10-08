import { writable } from 'svelte/store';

let { subscribe, set, update } = writable({
  user: null
})

function autenticate() {
  
}

export default {
  subscribe, 
  set, 
  update
}