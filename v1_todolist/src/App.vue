<template>
  <!-- template의 자식 요소는 1개로 제한 (자손 요소는 상관 없음)-->
  <!-- base 컴포넌트들은 root 컴포넌트 APP.vue 에 등록, APP.vue 컴포넌트는 main.js에 등록 -->
  <div id="app">
  <!-- //local registration 3: components 옵션 객체의 키 이름으로 태그 생성 -->
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
//module system 에서의 local registration
//local registration 1: Root 컴포넌트인 App.vue 에 사용할 하위 컴포넌트 vue 파일 생성 후 import 
//상대경로 ./ 사용 
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  //대부분의 컴포넌트들은 필요한 여러개의 base 컴포넌트들로 구성된다
  //local registration 2: import한 base 컴포넌트를 components 옵션 객체 키: 값 형태로 저장
  components: {
    //키 생략하면 값 이름과 키 이름이 동일한 것으로 간주
    TodoHeader,
    'TodoInput': TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  }
}

/* local registration without a module system 
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
body
{ text-align: center; height:100%; background-color:white;}
</style>