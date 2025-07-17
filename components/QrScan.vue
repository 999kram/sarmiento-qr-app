<template>
  <div>
    <div id="reader" style="width: 500px;"></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { Html5QrcodeScanner } from "html5-qrcode";

let html5QrcodeScanner = null;

function onScanSuccess(decodedText, decodedResult) {
  console.log("Scanned QR code:", decodedText);
  alert(`Scanned QR code: ${decodedText}`);
}

function onScanFailure(error) {
  
}

onMounted(() => {
  html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: 250 },
    false
  );

  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
});

onBeforeUnmount(() => {
  if (html5QrcodeScanner) {
    html5QrcodeScanner.clear();
  }
});
</script>


<style scoped>
</style>