class BiometricDevice {
    constructor(name) {
      this.name = name;
    }

    // Método para verificar la identidad
    verifyIdentity() {
      console.log(`Verifying identity using ${this.name}`);
    }
  }

  // Clase hija que hereda de BiometricDevice
  class FingerprintScanner extends BiometricDevice {
    constructor(name) {
      super(name);
    }

    // git escanear huella digital
    scanFingerprint() {
      console.log(`Scanning fingerprint using ${this.name}`);
    }
  }

  // Clase hija adicional que hereda de BiometricDevice
  class FaceRecognition extends BiometricDevice {
    constructor(name) {
      super(name);
    }

    // Método específico para reconocimiento facial
    recognizeFace() {
      console.log(`Recognizing face using ${this.name}`);
    }
  }

  // Función para manejar el escaneo facial
  function scanFace() {
    const scanResultText = document.getElementById('scanResult');
    const scanResult = simulateFacialRecognition();

    if (scanResult) {
      scanResultText.textContent = 'Face recognized! Access granted.';
      scanResultText.style.color = 'green';
    } else {
      scanResultText.textContent = 'Face not recognized! Access denied.';
      scanResultText.style.color = 'red';
    }
  }

  // Event listener para el botón de escaneo
  document.getElementById('scanButton').addEventListener('click', scanFace);

  // Simulación de reconocimiento facial
  function simulateFacialRecognition() {
    return Math.random() < 0.5; // Simula un resultado aleatorio
  }