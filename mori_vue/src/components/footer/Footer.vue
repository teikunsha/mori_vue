<template>
        <div class="footer">
            © 2022 此網站僅做為個人學習使用，非商業用途
        </div>
</template>

<script>
export default {
    name: 'Footer-a'
}
</script>

<style>
    .footer {
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 50px;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        line-height: 50px;
        background-color: rgb(232, 220, 207);
    }
    @media (max-width: 520px) {
        .footer {
            font-size: 14px;
            width: 100%
        }
    }
</style>