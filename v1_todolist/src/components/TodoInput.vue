<template>
  <div class="input-box">
      <!-- v-model="input에서 가져온 값을 저장할, 인스턴스 data 옵션에 정의한 객체 키 이름" 
      1.input, select, textarea 요소에 입력된 데이터를 동적으로, 양방향으로 바인딩 하기 위해서 v-model 을 사용한다
      2. v-model은 input, select, textarea에 한정적으로 사용한다
      3. Modifiers:
         3-1: v-model.number: input 박스에 입력된 값을 자동으로 Nuber 타입으로 캐스팅해준다.
         input type 속성을 number로 설정하더라도 HTML input 요소는 항상 String 값을 반환하기 때문에
         유용
         3-2: v-model.trim: input 박스에 입력된 공백을 모두 잘라낸다
      -->
      <!-- v-on:click/keyup/mouseover... = "" 
      1.
      2.
      3. Modifiers:
        3-1: event modifiers: .stop, .prevent, .once, .passive, .capture, .self
        3-2: key modifiers: .enter, .tab, .delete, .esc, .space, .up, .down, .left, .right
        3-3: system modifier: .ctrl, .alt, .shift, .meta
       
      -->
      <!-- input binding 1: input에 입력한 값을 인스턴스 data 옵션에 생성한 객체에 바인딩하기 위해서 button태그에 v-model="저장할 객체 키 이름"-->
      <!-- input binding 2: 로직이 button 클릭뿐만 아니라 enter 키를 눌렀을 떄에도 실행될 수 있도록 v-on:keyup.enter="메서드" 처리-->
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addToList"/>
      <!-- input bindin 2: input에 가져온 값으로 실행할 로직을 v-on:click="인스턴스 methods 옵션에 정의한, 연결할 메서드 이름(실행할 로직)"을 사용해서 연결    -->
      <button v-on:click="addToList">+</button>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addToList: function() {
            //이벤트 연결 확인
            console.log(this.newTodoItem);
            //데이터 저장 로직
            /*
            sessionStorage 페이지 세션이 끝나는 지점, 즉 페이를 닫으면 데이터가 사라지지만 localStorage의 데이터는 만료되지 않는다
            
            데이터 저장: localStorage.setItem('키', '데이터') ** 키 이름이 같을 경우 중복저장되지 않는다 **
            데이터 접근: localStorage.getItem('키')
            데이터 삭제: localStorage.removeItem('키')
            데이터 전체 삭제: localStorage.clear();

            개발자 도구 > Application > Storage > Local Storage에서 저장된 데이터 확인 가능
            */  

           if(this.newTodoItem == '') {
               alert('write down what to do');
           } else {
            //데이터 키, 값 뿐만 아니라, toogleComplete 실행 상태도 boolean 값으로 같이 저장하기 위한 object
            var obj = { completed: false, item: this.newTodoItem }
            
            //localStorage에 이미 저장된 데이터인지 확인 후 저장된 데이터일 경우 alert로 중복 알림 메세지, 아닐 경우 데이터 저장            
            var check = localStorage.getItem(this.newTodoItem);
            if(check != null) { //중복일 경우
                alert('the item is already added to the list')
            } else { //중복이 아닐 경우
                //키, 값만 저장한 경우
                //localStorage.setItem(this.newTodoItem, this.newTodoItem);
                
                //키, 값, toggleComplete 실행 상태를 담은 객체를 그대로 저장한 경우 > local storage에서 object Object로 나타나 데이터 값을 확인할 수 없음
                //localStorage.setItem(this.newTodoItem, obj);
                
                //키, 값, toggleComplete 실행 상태를 담은 객체를 JSON.stringify() 함수의 인자로 받아 저장한 경우
                localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
            }

            //저장 후에 input 입력창 초기화
            this.emptyInput();
           }
        },
        //addToList에서 기능 분리하여 따로 메서드 정의
        emptyInput: function() {
            this.newTodoItem = '';
        }

    }
}
</script>

<style>
input:focus
{ outline:none }
</style>