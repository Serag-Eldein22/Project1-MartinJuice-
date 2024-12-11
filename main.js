let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); }
   

    function myFunction(){
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.toggle("active")
    }
    
function showInitialPrompt() {
    Swal.fire({
      title: 'Enter Smoothie',
      input: 'text',
      inputLabel: 'Type "smoothie" to continue',
      inputPlaceholder: 'Enter here',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed && result.value.toLowerCase() === 'smoothie') {
        showItemPopup();
      } else if (result.isConfirmed) {
        Swal.fire('Invalid input', 'Please type "smoothie" to proceed.', 'error');
      }
    });
  }
  
  function showItemPopup() {
    const items = [
      { name: 'Mango kiwi', price: 'M :60  L : 70' },
      { name: 'Watermelon Mint', price: 'M : 45  L : 50' },
      { name: 'Mango Smoothie', price: 'M :60  L : 70' },
      { name: 'Strawberry Shake', price: 'M : 45  L : 55' },
      { name: 'Pineapple Juice', price: 'M : 45  L : 50' },
      { name: 'Banana Smoothie', price: 'M : 30  L : 40' },
      { name: 'Watermelon Juice', price: 'M : 35  L : 45' },
      { name: 'Grape Smoothie', price: 'M : 45  L : 50' },
      { name: 'Blueberry Shake', price: 'M : 45  L : 50' },
      { name: 'Peach Juice', price: 'M : 45  L : 50' },
    ];
  
    const itemList = items
      .map(item => `<li>${item.name} - <strong>${item.price}</strong></li>`)
      .join('');
  
    Swal.fire({
      title: 'Items List',
      html: `<ul style="text-align: left;">${itemList}</ul>`,
      confirmButtonText: 'OK'
    });
  }
  
  

  function showUserDetailsPrompt() {
    Swal.fire({
      title: 'Enter Your Details',
      html: `
        <input id="swal-input-name" class="swal2-input" placeholder="Name">
        <input id="swal-input-phone" class="swal2-input" placeholder="Phone Number" type="tel">
        <input id="swal-input-address" class="swal2-input" placeholder="Address">
      `,
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById('swal-input-name').value;
        const phone = document.getElementById('swal-input-phone').value;
        const address = document.getElementById('swal-input-address').value;
  
        if (!name || !phone || !address) {
          Swal.showValidationMessage('All fields are required');
          return null;
        }
  
        return { name, phone, address };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { name, phone, address } = result.value;
        Swal.fire(
          'Details Submitted!',
          `Name: ${name}<br>Phone: ${phone}<br>Address: ${address}`,
          'success'
        ).then(() => {
          showItemPopup(); 
        });
      }
    });
  }
  
  
  function showItemPopup() {
    const items = [
      { name: 'Mango kiwi', price: 'M :60  L : 70' },
      { name: 'Watermelon Mint', price: 'M : 45  L : 50' },
      { name: 'Mango Smoothie', price: 'M :60  L : 70' },
      { name: 'Strawberry Shake', price: 'M : 45  L : 55' },
      { name: 'Pineapple Juice', price: 'M : 45  L : 50' },
      { name: 'Banana Smoothie', price: 'M : 30  L : 40' },
      { name: 'Watermelon Juice', price: 'M : 35  L : 45' },
      { name: 'Grape Smoothie', price: 'M : 45  L : 50' },
      { name: 'Blueberry Shake', price: 'M : 45  L : 50' },
      { name: 'Peach Juice', price: 'M : 45  L : 50' },
    ];
  
    const itemList = items
      .map(item => `<li>${item.name} - <strong>${item.price}</strong></li>`)
      .join('');
  
    Swal.fire({
      title: 'Items List',
      html: `<ul style="text-align: left;">${itemList}</ul>`,
      confirmButtonText: 'OK'
    });
  }
  
  
  function view_menu()
  {
    Swal.fire({
        title: 'Martin’s Menu',
        imageUrl: 'imgs/menu.jpg',
        imageAlt: 'Custom image',
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true
      });
      

  }

      