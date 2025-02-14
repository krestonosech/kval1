<template>
  <router-view class="test"/>
</template>

<style lang="scss">
  * {
    font-family: sans-serif;
    padding: 0;
    margin: 0;
  }
  button {
    border: black solid 1px;
    background-color: #fff;
    cursor: pointer;
    padding: 10px;
    border-radius: 20px;
    transition: 0.7s;
  }

  button:hover {
    color: white;
    border: white solid 1px;
    background-color: black;
    transition: 0.7s;
  }

  input {
    height: 20px;
    width: 150px;
    border-radius: 20px;
    padding: 10px;
    transition: 0.7s;
  }

  input:focus {
    background-color: black;
    color: white;
    transition: 0.7s;
  }
</style>
