import axios from 'axios';
const Swal = require('sweetalert2')

class Verify {
  constructor(name, pic_id, button) {
    this.name = name;
    this.pic_id = pic_id;
    this.button = button;
  }
  validation() {
    const picBox = document.getElementById('pic-box')
    const inputBox = document.getElementById('input-section')

    if (this.name === '' && this.pic_id !== '') {
      inputBox.placeholder = 'insert a name!';
    } else if (this.pic_id === '' && this.name !== '') {
      picBox.style.backgroundColor = '#f01e2c'
      picBox.style.transition = '0.2s'
    } else if (this.pic_id === '' && this.name === '') {
      picBox.style.backgroundColor = '#f01e2c'
      picBox.style.transition = '0.2s'
      inputBox.placeholder = 'insert a name!';
    } else {
      if (this.button === "start") {
        this.verifyIntoDatabase(this.name, this.pic_id);
      } else if (this.button === "create") {
        this.pushIntoDatabase(this.name, this.pic_id);
      } else {
        console.log("unexpected token");
      }
    }
  }
  verifyIntoDatabase(name, pic_id) {
    const verify = async (n, p) => {
      try {
        const response = await axios.post('http://localhost:3001/verify', {name: n, pic_id: p});
        console.log('Dados enviados com sucesso:', response.data);
        if (response.data) {
          // (/ -> /game)
          window.location.href = '/game'
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "references not found!"
          }); 
        }
      } catch (error) {
        console.error('Erro ao enviar os dados:', error);
      }
    };
    verify(name, pic_id);
  }
  pushIntoDatabase(name, pic_id) {
    const verify = async (n, p) => {
      try {
        const response = await axios.post('http://localhost:3001/push', {name: n, pic_id: p});
        console.log('Dados enviados com sucesso:', response.data);
        if (response.data) {
          // (/ -> /game)
          window.location.href = '/game'
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "values already exists!"
          });
        }
      } catch (error) {
        console.error('Erro ao enviar os dados:', error);
      }
    };
    verify(name, pic_id);
  }
}

export default Verify;
