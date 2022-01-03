<template>
  <div>
      <ul>

          <!-- 데이터 리스트 작업2: local storage에 저장한 데이터를 뿌리기 위해 v-for 사용-->
          <!-- v-bind:class="{적용할 클래스이름: 값}" 으로 class on/off 설정 가능 -->
          <li v-for="(todoItem ,index) in todoItems" v-bind:key="todoItem.key" v-bind:class="{ itemCompleted: todoItem.completed }">
              <!-- {{ todoItem }} 은 객체 전체 출력 eg){"completed":false,"item":"2"} -->> 
              {{ todoItem.item }}
            <!-- 리스트 항목 제거 작업1: 버튼 클릭시 v-on:click 사용해서 removeItem 메서드와 연결-->
            <button class="remove-btn" v-on:click="removeItem(todoItem, index)">X</button>
            <button class="check-btn" v-on:click="toggleComplete(todoItem)">√</button>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data:function() {
        return {
            todoItems: []
        }
    },
    created: function() {
    //데이터 리스트 작업1:
    //created는 instance 생성 직후에 호출되는 함수, 이 단게에서 옵션 관련(methods, computed, watch event 등) 프로세스를 마친다
    //local storage에 저장된 데이터들을 data 옵션에 생성한 배열에 담는 메서드
        if(localStorage.length > 0) {
            for(var i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i) != 'loglevel:webpack-dev-server') {
                    
                    //this.todoItems.push(localStorage.key(i))
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))

                    /*
                     console.log(JSON.parse(localStorage.getItem(localStorage.key(i))))
    
                    저장할 때 JSON.stringify()로 저장해서 문자열로 담겨있기 때문에
                    다시 JSON.parse() 함수로 JSON 형식으로 데이터를 변환한다.

                    JSON.Parse() 함수 미사용: {"completed":false,"item":"2"}
                    JSON.Parse() 함수 사용: {completed: false, item: '2'}
                    */ 
                }
            }
        }

    }, 
    methods: {
        //리스트 항목 제거 작업2
        removeItem: function(todoItem, index) {
            //이벤트 연결 확인
            console.log(todoItem, index)
            
            //리스트 항목 제거 작업2-1: localStorage에서 데이터 제거
            localStorage.removeItem(todoItem);
            
            //리스트 항목 제거 작업2-2: 화면에서 리스트 제거 (data 옵션에 정의한 배열에서 삭제)
            /*
            li 리스트에서 제거, splice(start. deleteCount) 함수로 인자로 받은 index (시작점 포힘)에서 
            요소 1개 지운, 즉 인자로 받은 index를  배열을 반환 
            */
            this.todoItems.splice(index, 1);
        },
        toggleComplete: function(todoItem) {
            //console.log(todoItem)
            //console.log(index)
            //TodoInput 컴포넌트에서 addToList 메서드에서 기본으로 설정한 completed 값 false 를 true로 변환 
            todoItem.completed = !todoItem.completed;
            console.log(todoItem)

        }
    }
}
</script>

<style scoped>
*
{ list-style:none;}

.itemCompleted
{ color:blue; text-decoration: line-through; }
</style>