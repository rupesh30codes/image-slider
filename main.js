const imageUrls = [
    'SOMEBODY TO HEAL.jpg',
    'Bruno-Major-The-Most-Beautiful-Thing.jpeg',
    'dev-anand.jpg',
    'Screenshot 2024-03-12 225111.png',
    'OIP.jpeg',
    'butterfly.jpg',
    'look at the time.jpg',
    'screenshot 2024-03-14 092525.png'
  ];
  
  let currentIndex = 0;
  const imageElement = document.querySelector('.container img');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  
  function updateImage() {
    imageElement.src = imageUrls[currentIndex];
  }
  
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    updateImage();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    updateImage();
  });
  
  updateImage();
  