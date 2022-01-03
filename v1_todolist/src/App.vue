<template>
  <!-- template의 자식 요소는 1개로 제한 (자손 요소는 상관 없음)-->
  <!-- 하위 컴포넌트 root 컴포넌트 APP.vue 에 등록, APP.vue 컴포넌트는 main.js에 등록 -->
  <div id="app">
  <!-- //local registration 3: components 옵션 객체의 키 이름으로 태그 생성 -->
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
//local registration 1: Root 컴포넌트인 App.vue 에 사용할 하위 컴포넌트 vue 파일 생성 후 import 
import TodoHeader from 'TodoHeader'
import TodoInput from 'TodoInput'
import TodoList from 'TodoList'
import TodoFooter from 'TodoFooter'

export default {
  //local registration 2: import한 하위 컴포넌트를 components 옵션 객체 키: 값 형태로 저장
  components: {
    TodoHeader,
    'TodoInput': TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  }
}

/* ES5 local registration 
var lc = {
  template: '<div>local component</div>'
}

new Vue({
  el: '',
  components: {
    'local-component': lc
  }
})


*/
</script>

<style>

</style>