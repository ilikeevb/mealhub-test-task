<template>
  <div>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
}
span {
  height: 25px;
  width: 25px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #0000000d;
  animation: loading 1s linear infinite;
}
@keyframes loading {
  0% {
    background-color: #0000000d;
    transform: scale(1);
  }
  100% {
    background-color: #0000004d;
    transform: scale(1.1);
  }
}
span:nth-child(1){
  animation-delay: 0.3s;
}
span:nth-child(2){
  animation-delay: 0.6s;
}
span:nth-child(3){
  animation-delay: 0.9s;
}
</style>