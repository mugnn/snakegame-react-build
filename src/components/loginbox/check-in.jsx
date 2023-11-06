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
        this.verifyIntoDatabase();
        console.log("aqui (start)");
      } else if (this.button === "create") {
        this.pushIntoDatabase();
        console.log("aqui (create)");
      } else {
        console.log("unexpected token");
      }
    }
  }
  verifyIntoDatabase() {
    
  }
  pushIntoDatabase() {

  }
}

export default Verify;
