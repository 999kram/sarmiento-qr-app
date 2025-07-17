<template>
    <div>
        <h2>QR scanner</h2>
        <QrScan />
    </div>
</template>
<script>
import QrScan from '~/components/QrScan.vue'

export default{
    components: { QrScan}
}
</script>