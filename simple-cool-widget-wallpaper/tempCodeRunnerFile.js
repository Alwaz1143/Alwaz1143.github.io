function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position.coords),
        error => reject(error)
      );
    } else {
      reject(new Error("Geolocation not supported"));
    }
  });
}

getUserLocation();