<template>
  <div class="footer">
    <hr class="br"/>
    <div class="lists">
      <div class="list">
        <h3>Наши контакты</h3>
        <p>
          google.com
        </p>
        <p>
          facebook.com
        </p>
        <p>
          telegram.com
        </p>
      </div>
      <div class="list">
        <h3>Наши услуги</h3>
        <p>
          скупка продуктов
        </p>
        <p>
          продажа продуктов
        </p>
        <p>
          продажа людей
        </p>
      </div>
      <div class="list">
        <h3>Кому точно не стоит звонить</h3>
        <p>
          Шубин Владимир Алексеевич
        </p>
        <p>
          Крюкова Валентина Игоревна
        </p>
        <p>
          Павлов Арсель Наилевич
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
  .footer {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 200px;
  }
  hr {
    border: solid black 1px;
    margin: 0 50px;
  }
  .lists {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 100%;
    align-items: center;
  }
  .list {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
</style>